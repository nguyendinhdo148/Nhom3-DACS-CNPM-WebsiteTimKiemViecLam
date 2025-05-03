import { Router } from "express";

import { isAuthenticated, isRecruiter } from "../middleware/auth.middleware.js";
import { generate_description } from "../controllers/ai.controller.js";

const router = Router();

router.post("/generate-description", isAuthenticated, isRecruiter, generate_description);

export default router;
