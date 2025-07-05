import { Router } from "express";
import {
  createConversation,
  getUserConversations,
  updateConversation,
  deleteConversation,
  getRecruiterCandidates // 👈 Thêm hàm controller mới
} from "../controllers/conversation.controller.js";
import {
  sendMessage,
  getMessages,
  updateMessage,
  deleteMessage,
} from "../controllers/message.controller.js";
import { isAuthenticated, isRecruiter } from "../middleware/auth.middleware.js"; // 👈 Thêm middleware isRecruiter

const router = Router();

// 📩 Cuộc trò chuyện
router.post("/conversations", isAuthenticated, createConversation);
router.get("/conversations/:userId", isAuthenticated, getUserConversations);
router.put("/conversation/:conversationId", isAuthenticated, updateConversation);
router.delete("/conversation/:conversationId", isAuthenticated, deleteConversation);

// 👇 Thêm route mới cho danh sách ứng viên
router.get(
  "/recruiter/candidates",
  isAuthenticated, 
  isRecruiter, // Chỉ recruiter mới được truy cập
  getRecruiterCandidates
);

// 💬 Tin nhắn
router.post("/send-message", isAuthenticated, sendMessage);
router.get("/messages/:conversationId", isAuthenticated, getMessages);
router.put("/message/:messageId", isAuthenticated, updateMessage);
router.delete("/message/:messageId", isAuthenticated, deleteMessage);

export default router;