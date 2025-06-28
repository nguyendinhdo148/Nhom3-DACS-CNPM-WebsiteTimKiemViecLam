import { Router } from "express";
import { isAuthenticated } from "../middleware/auth.middleware.js";
import {
  createMeeting,
  getMeetings,
  getMeetingById,
  updateMeeting,
  deleteMeeting,
  resendInviteMail, // thêm dòng này
} from "../controllers/meeting.controller.js";

const router = Router();

router.post("/", isAuthenticated, createMeeting);
router.get("/", isAuthenticated, getMeetings);
router.get("/:id", isAuthenticated, getMeetingById);
router.put("/:id", isAuthenticated, updateMeeting);
router.delete("/:id", isAuthenticated, deleteMeeting);

// Route gửi lại mail mời họp
router.post("/resend-invite", isAuthenticated, resendInviteMail);

export default router;
