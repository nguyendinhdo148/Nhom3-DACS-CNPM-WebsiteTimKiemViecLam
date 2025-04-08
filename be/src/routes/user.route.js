import { Router } from "express";
import {
  register,
  login,
  logout,
  updateProfile,
  forgotPassword,
  resetPassword,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";
import { singleUpload } from "../middleware/multer.js";

const router = Router();

router
  .post("/register", singleUpload, register)
  .post("/login", login)
  .post("/logout", isAuthenticated, logout);
router.put("/profile/update", isAuthenticated, updateProfile);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
