import { Router } from "express";

import {
  postJob,
  getAllJobs,
  getJobById,
  getRecruiterJobs,
} from "../controllers/job.controller.js";
import { isAuthenticated, isRecruiter } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/post", isAuthenticated, isRecruiter, postJob);
router
  .get("/all-jobs", isAuthenticated, getAllJobs)
  .get("/recruiter-jobs", isAuthenticated, isRecruiter, getRecruiterJobs)
  .get("/:id", isAuthenticated, getJobById);

export default router;
