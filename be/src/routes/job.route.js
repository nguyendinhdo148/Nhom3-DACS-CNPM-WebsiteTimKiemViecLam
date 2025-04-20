import { Router } from "express";

import {
  createJob,
  getAllJobs,
  getJobById,
  getRecruiterJobs,
  updateJob,
  deleteJob,
} from "../controllers/job.controller.js";
import { isAuthenticated, isRecruiter } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/create-job", isAuthenticated, isRecruiter, createJob);
router
  .get("/all-jobs", getAllJobs)
  .get("/recruiter-jobs", isAuthenticated, isRecruiter, getRecruiterJobs)
  .get("/:id", getJobById);
router.put("/update-job/:id", isAuthenticated, isRecruiter, updateJob);
router.delete("/delete-job/:id", isAuthenticated, isRecruiter, deleteJob);

export default router;
