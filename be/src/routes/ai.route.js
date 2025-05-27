import { Router } from "express";

import { isAuthenticated } from "../middleware/auth.middleware.js";
import { generate_description } from "../controllers/ai.controller.js";

const router = Router();

router.post("/generate-description", isAuthenticated, generate_description);

export default router;
