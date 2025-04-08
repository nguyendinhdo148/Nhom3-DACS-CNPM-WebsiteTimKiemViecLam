import { Router } from "express";

import {
  registerCompany,
  getCompanyById,
  getCompanies,
  updateCompany,
  deleteCompany,
} from "../controllers/company.controller.js";
import { isAuthenticated, isRecruiter } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/register", isAuthenticated, isRecruiter, registerCompany);
router.get("/companies", isAuthenticated, isRecruiter, getCompanies);
router.get("/:id", isAuthenticated, getCompanyById);
router.put("/update-company/:id", isAuthenticated, isRecruiter, updateCompany);
router.delete("/:id", isAuthenticated, isRecruiter, deleteCompany);

export default router;
