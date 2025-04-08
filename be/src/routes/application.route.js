import { Router } from "express";

import {
  applyJob,
  getAppliedJobs,
  getApplicants,
  updateApplicationStatus,
} from "../controllers/application.controller.js";
import { isAuthenticated, isRecruiter } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/apply-job/:id", isAuthenticated, applyJob);
router.get("/applied-jobs", isAuthenticated, getAppliedJobs);
router.get("/applicants/:id", isAuthenticated, isRecruiter, getApplicants);
router.put(
  "/update-application-status/:id",
  isAuthenticated,
  isRecruiter,
  updateApplicationStatus
);

export default router;
