import { Router } from "express";

import {
  createCompany,
  getCompanyById,
  getCompanies,
  updateCompany,
  deleteCompany,
} from "../controllers/company.controller.js";
import { singleUpload } from "../middleware/multer.js";
import { isAuthenticated, isRecruiter } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/create", isAuthenticated, isRecruiter, singleUpload, createCompany);
router.get("/", isAuthenticated, isRecruiter, getCompanies);
router.get("/:id", isAuthenticated, getCompanyById);
router.put("/update-company/:id", isAuthenticated, isRecruiter, singleUpload, updateCompany);
router.delete("/:id", isAuthenticated, isRecruiter, deleteCompany);

export default router;
