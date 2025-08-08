import { Router } from 'express';
import {
  analyzeWithGemini,
  advancedMBTIAnalysis,
} from '../controllers/mbtiGeminiController.js';

const router = Router();

// Phân tích cơ bản MBTI bằng Gemini
router.post('/basic-analysis', analyzeWithGemini);

// Phân tích nâng cao MBTI bằng Gemini (dựa trên answer patterns)
router.post('/advanced-analysis', advancedMBTIAnalysis);

export default router;
