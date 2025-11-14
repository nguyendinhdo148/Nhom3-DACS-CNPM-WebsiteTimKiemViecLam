import { Router } from "express";

import {
  createCompany,
  getCompanyById,
  getCompanies,
  updateCompany,
  deleteCompany,
} from "../controllers/company.controller.js";
import { companyUpload } from "../middleware/multer.js";
import { isAuthenticated, isRecruiter } from "../middleware/auth.middleware.js";
import { getAllCompanies } from "../controllers/admin.controller.js";
const router = Router();
router.get("/public/all", getAllCompanies);
router.post("/create", isAuthenticated, isRecruiter, companyUpload, createCompany);
router.get("/", isAuthenticated, isRecruiter, getCompanies);
router.get("/:id", isAuthenticated, getCompanyById);
router.put("/update-company/:id", isAuthenticated, isRecruiter, companyUpload, updateCompany);
router.delete("/:id", isAuthenticated, isRecruiter, deleteCompany);

export default router;
