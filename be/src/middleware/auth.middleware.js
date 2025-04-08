import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "You are not authenticated",
        success: false,
      });
    }
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }
    req.id = decoded.userId;
    next();
  } catch (error) {
    next(error);
  }
};

export const isRecruiter = async (req, res, next) => {
  try {
    const user = await User.findById(req.id);
    if (user.role !== "recruiter") {
      return res.status(401).json({
        message: "You are not a recruiter",
        success: false,
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};
