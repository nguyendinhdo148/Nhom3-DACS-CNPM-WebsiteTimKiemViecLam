import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import connectDB from "./utils/db.js";
import { User } from "./models/user.model.js";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

// Import routes
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import aiRoute from "./routes/ai.route.js";
import saveJobRoute from "./routes/saveJob.route.js";
import resumeRoute from "./routes/resume.route.js";
import adminRoute from "./routes/admin.route.js";
import meetingRoute from "./routes/meeting.route.js";
import chatRouter from "./routes/chat.route.js";

import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Security Middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

// Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500,
  message: "Too many requests from this IP, please try again later",
});
app.use("/api/", apiLimiter);

// HTTP Server
const httpServer = createServer(app);

// Socket.IO Configuration
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
  path: "/socket.io",
  transports: ["websocket", "polling"],
  connectionStateRecovery: {
    maxDisconnectionDuration: 2 * 60 * 1000,
    skipMiddlewares: true,
  },
  pingInterval: 10000,
  pingTimeout: 5000,
});

// Token Verification
const verifyToken = async (token) => {
  try {
    if (!token) return null;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.userId).select(
      "_id role fullname avatar email"
    );
    return user ? user.toObject() : null;
  } catch (err) {
    console.error("Token verification error:", err.message);
    return null;
  }
};

// Socket.IO Middleware
io.use(async (socket, next) => {
  try {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error("Authentication required"));

    const user = await verifyToken(token);
    if (!user) return next(new Error("Invalid token"));

    socket.user = {
      id: user._id.toString(),
      role: user.role,
      fullname: user.fullname,
      avatar: user.avatar,
      email: user.email,
    };

    next();
  } catch (error) {
    console.error("Socket auth error:", error);
    next(new Error("Authentication failed"));
  }
});

// Conversation Manager
class ConversationManager {
  constructor() {
    this.activeConversations = new Map(); // userId -> Set(conversationIds)
  }

  join(socket, conversationId) {
    if (!this.activeConversations.has(socket.user.id)) {
      this.activeConversations.set(socket.user.id, new Set());
    }
    this.activeConversations.get(socket.user.id).add(conversationId);
    socket.join(conversationId);
  }

  leave(socket, conversationId) {
    if (this.activeConversations.has(socket.user.id)) {
      this.activeConversations.get(socket.user.id).delete(conversationId);
      socket.leave(conversationId);
    }
  }

  cleanup(socket) {
    this.activeConversations.delete(socket.user.id);
  }
}

const conversationManager = new ConversationManager();

// Socket.IO Event Handlers
const setupSocketEvents = (socket) => {
  console.log(`New connection: ${socket.id} (User: ${socket.user.id})`);

  // Private user room
  socket.join(`user_${socket.user.id}`);

  // Conversation handlers
  socket.on("join_conversation", (conversationId) => {
    if (!conversationId) return;
    conversationManager.join(socket, conversationId);
    socket.to(conversationId).emit("user_joined", {
      userId: socket.user.id,
      conversationId,
      timestamp: new Date(),
    });
  });

  socket.on("leave_conversation", (conversationId) => {
    conversationManager.leave(socket, conversationId);
  });

  // Message handling with optimistic updates
  socket.on("send_message", async ({ conversationId, message, tempId }, callback) => {
    try {
      if (!conversationId || !message?.text) {
        throw new Error("Invalid message format");
      }

      const messagePayload = {
        ...message,
        _id: tempId,
        sender: socket.user,
        conversationId,
        createdAt: new Date(),
        status: "pending",
      };

      // Broadcast to all in conversation (including sender)
      io.to(conversationId).emit("message_received", messagePayload);

      // Here you would typically save to database
      // const savedMessage = await saveMessageToDB(messagePayload);
      
      // Simulate DB save
      setTimeout(() => {
        const savedMessage = { 
          ...messagePayload, 
          _id: "db_" + Date.now(),
          status: "delivered" 
        };
        io.to(conversationId).emit("message_updated", savedMessage);
      }, 300);

      if (typeof callback === "function") {
        callback({ status: "received" });
      }
    } catch (error) {
      console.error("Message send error:", error);
      socket.emit("message_error", { tempId, error: error.message });
    }
  });

  // Typing indicators
  socket.on("typing", ({ conversationId, isTyping }) => {
    socket.to(conversationId).emit("typing", {
      userId: socket.user.id,
      isTyping,
    });
  });

  // Health check
  socket.on("ping", (cb) => cb("pong"));

  // Cleanup on disconnect
  socket.on("disconnect", (reason) => {
    console.log(`Disconnected: ${socket.id} (${reason})`);
    conversationManager.cleanup(socket);
  });

  // Error handling
  socket.on("error", (error) => {
    console.error(`Socket error (${socket.user.id}):`, error);
  });
};

io.on("connection", setupSocketEvents);

// API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.use("/api/v1/ai", aiRoute);
app.use("/api/v1/save-job", saveJobRoute);
app.use("/api/v1/resume", resumeRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/meetings", meetingRoute);
app.use("/api/v1/chat", chatRouter);

// Health Check Endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    socketClients: io.engine.clientsCount,
    uptime: process.uptime(),
  });
});

// Error Handling
app.use((err, req, res, next) => {
  console.error("Global error:", err);
  res.status(500).json({
    error: process.env.NODE_ENV === "production" ? "Server error" : err.message,
  });
});

// Start Server
httpServer.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 Socket.IO endpoint: ws://localhost:${PORT}/socket.io`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received. Closing server...");
  httpServer.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});