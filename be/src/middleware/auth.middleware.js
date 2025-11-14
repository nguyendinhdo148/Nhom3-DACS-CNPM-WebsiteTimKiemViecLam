  import jwt from "jsonwebtoken";
  import { User } from "../models/user.model.js";

  export const isAuthenticated = async (req, res, next) => {
    try {
      let accessToken;

      // 1. Ưu tiên lấy token từ header (mobile gửi: Authorization: Bearer <token>)
      const authHeader = req.headers["authorization"];
      if (authHeader && authHeader.startsWith("Bearer ")) {
        accessToken = authHeader.split(" ")[1];
      }

      // 2. Nếu không có -> thử lấy từ cookie (web)
      if (!accessToken) {
        accessToken = req.cookies?.accessToken;
      }

      // 3. Nếu vẫn chưa có -> thử refreshToken (web)
      if (!accessToken) {
        const refreshToken = req.cookies?.refreshToken;
        if (!refreshToken) {
          return res.status(401).json({ message: "No tokens provided", success: false });
        }

        const user = await User.findOne({ refreshToken });
        if (!user || user.refreshTokenExpiry < Date.now()) {
          return res.status(401).json({ message: "Invalid refresh token", success: false });
        }

        // Tạo accessToken mới
        accessToken = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
          expiresIn: "15m",
        });

        // Trả lại cookie accessToken cho web
        res.cookie("accessToken", accessToken, {
          httpOnly: true,
          sameSite: "strict",
          maxAge: 15 * 60 * 1000,
        });
      }

      // 4. Verify access token
      const decoded = jwt.verify(accessToken, process.env.SECRET_KEY);
      req.id = decoded.userId;

      next();
    } catch (error) {
      return res.status(401).json({
        message: "Invalid or expired token",
        success: false,
      });
    }
  };

  export const isRecruiter = async (req, res, next) => {
    try {
      if (!req.id) {
        return res.status(401).json({
          message: "You are not authenticated",
          success: false,
        });
      }

      const user = await User.findById(req.id);
      if (user.role !== "recruiter") {
        return res.status(403).json({
          message: "You are not a recruiter",
          success: false,
        });
      }
      next();
    } catch (error) {
      return res.status(401).json({
        message: "Error verifying recruiter role",
        success: false,
      });
    }
  };

  export const isAdmin = async (req, res, next) => {
    try {
      if (!req.id) {
        return res.status(401).json({
          message: "You are not authenticated",
          success: false,
        });
      }

      const user = await User.findById(req.id);
      if (user.role !== "admin") {
        return res.status(403).json({
          message: "You are not an admin",
          success: false,
        });
      }
      next();
    } catch (error) {
      return res.status(401).json({
        message: "Error verifying admin role",
        success: false,
      });
    }
  };
  export const isAuthenticatedMobile = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token missing" });
    }
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY); // ✅ dùng SECRET_KEY
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Token is not valid" });
    }
  };

