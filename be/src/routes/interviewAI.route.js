import express from "express";
import InterviewAIController from "../controllers/interviewAIController.js";

const router = express.Router();

/**
 * @route POST /api/v1/interview-ai/generate
 * @desc Sinh danh sách câu hỏi phỏng vấn theo lĩnh vực (Node.js, React, v.v.)
 * @body { domain: string, level?: string, questionCount?: number }
 */
router.post("/generate", (req, res) =>
  InterviewAIController.generateQuestions(req, res)
);

/**
 * @route POST /api/v1/interview-ai/generate-more
 * @desc Sinh thêm các câu hỏi phỏng vấn mới, không trùng với danh sách hiện có
 * @body { domain: string, level?: string, currentQuestions: string[], questionCount?: number }
 */
router.post("/generate-more", (req, res) =>
  InterviewAIController.generateMoreQuestions(req, res)
);

/**
 * @route POST /api/v1/interview-ai/evaluate
 * @desc Đánh giá toàn bộ câu trả lời của ứng viên
 * @body { domain: string, questions: string[], answers: string[] }
 */
router.post("/evaluate", (req, res) =>
  InterviewAIController.evaluateAnswers(req, res)
);

/**
 * @route GET /api/v1/interview-ai/health
 * @desc Kiểm tra tình trạng hoạt động của AI Interview Service
 */
router.get("/health", (req, res) =>
  InterviewAIController.healthCheck(req, res)
);

/**
 * @route GET /api/v1/interview-ai/info
 * @desc Thông tin mô tả API
 */
router.get("/info", (req, res) => {
  res.json({
    feature: "AI Interview Assistant",
    description:
      "Hệ thống phỏng vấn tự động sử dụng OpenAI để sinh câu hỏi, chấm điểm và phản hồi năng lực ứng viên.",
    endpoints: [
      { path: "/generate", method: "POST", desc: "Sinh danh sách câu hỏi phỏng vấn" },
      { path: "/generate-more", method: "POST", desc: "Sinh thêm câu hỏi phỏng vấn mới" },
      { path: "/evaluate", method: "POST", desc: "Đánh giá và cho điểm câu trả lời" },
      { path: "/health", method: "GET", desc: "Kiểm tra kết nối và trạng thái dịch vụ" },
    ],
    version: "1.1.0",
    author: "Nguyễn Đình Đô",
  });
});

export default router;
