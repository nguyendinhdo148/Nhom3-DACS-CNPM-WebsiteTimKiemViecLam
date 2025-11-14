// src/controllers/interviewAIController.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

class InterviewAIController {
  constructor() {
    this.model = "gpt-4o-mini"; // có thể đổi sang "gpt-4o" nếu cần chất lượng cao hơn
  }

  // ===== Helper: Parse JSON an toàn và mạnh hơn =====
  _extractJson(text) {
    if (!text) return null;
    const matches = [...text.matchAll(/\{[\s\S]*\}/g)];
    if (!matches.length) return null;

    // Lấy JSON dài nhất (thường là JSON chính)
    const longest = matches.reduce((a, b) =>
      a[0].length > b[0].length ? a : b
    )[0];

    try {
      return JSON.parse(longest);
    } catch {
      // Thử làm sạch lỗi phổ biến
      let cleaned = longest
        .replace(/,\s*}/g, "}")
        .replace(/,\s*]/g, "]")
        .replace(/[\u0000-\u001F]+/g, "")
        .replace(/\n/g, " ")
        .trim();

      cleaned = cleaned.replace(/```json/g, "").replace(/```/g, "").trim();

      try {
        return JSON.parse(cleaned);
      } catch (err) {
        console.error("❌ [extractJson] Failed to parse cleaned JSON:", cleaned);
        return null;
      }
    }
  }

  // ===== Helper: Lọc trùng lặp =====
  _removeDuplicates(arr = []) {
    return [...new Set(arr.map((q) => q.trim()))].filter(Boolean);
  }

  // =============== 1️⃣ Generate Interview Questions ===============
  async generateQuestions(req, res) {
    try {
      const { domain, level = "mid", questionCount = 5 } = req.body || {};
      if (!domain)
        return res
          .status(400)
          .json({ success: false, message: "Domain is required" });

      res.setHeader("Cache-Control", "no-store");

      const systemPrompt = `
Bạn là chuyên gia HR với hơn 10 năm kinh nghiệm, sở hữu kho 1000 câu hỏi phỏng vấn đa lĩnh vực.
Nhiệm vụ: sinh ra các câu hỏi **phù hợp với lĩnh vực "${domain}" và trình độ "${level}"**.

Nguyên tắc:
- Câu hỏi phải liên quan trực tiếp đến "${domain}".
- Cấp độ "${level}":
  - Intern: cơ bản, khái niệm, tư duy học hỏi.
  - Junior: lý thuyết nền, ứng dụng nhỏ.
  - Mid: tình huống, debug, best practice.
  - Senior: kiến trúc, tối ưu, hệ thống lớn.
- 50% câu hỏi nên là case study.
- Tránh trùng ý nghĩa.
- Chỉ trả về JSON: { "questions": ["...", "..."] }.
      `;

      const userPrompt = `
Hãy tạo ${questionCount} câu hỏi phỏng vấn cho lĩnh vực "${domain}" cấp độ "${level}".
Chỉ trả về JSON đúng cấu trúc. Không giải thích thêm.
      `;

      const response = await openai.chat.completions.create({
        model: this.model,
        messages: [
          { role: "system", content: systemPrompt.trim() },
          { role: "user", content: userPrompt.trim() },
        ],
        temperature: 0.9,
        top_p: 0.95,
        max_tokens: 800,
      });

      const text = response.choices?.[0]?.message?.content || "";
      const data = this._extractJson(text);
      if (!data || !Array.isArray(data.questions)) {
        console.warn("[generateQuestions] invalid JSON:", text);
        throw new Error("Invalid JSON format from OpenAI");
      }

      const unique = this._removeDuplicates(data.questions);

      res.json({
        success: true,
        data: {
          domain,
          level,
          questions: unique,
          totalQuestions: unique.length,
        },
      });
    } catch (error) {
      console.error("❌ [generateQuestions] Error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to generate questions",
        error: error.message,
      });
    }
  }

  // =============== 2️⃣ Generate More Questions ===============
  async generateMoreQuestions(req, res) {
    try {
      const {
        domain,
        level = "mid",
        currentQuestions = [],
        questionCount = 3,
      } = req.body || {};

      if (!domain)
        return res
          .status(400)
          .json({ success: false, message: "Domain is required" });

      res.setHeader("Cache-Control", "no-store");

      const systemPrompt = `
Bạn là chuyên gia HR.
Sinh thêm các câu hỏi mới cho lĩnh vực "${domain}" (${level}),
và tuyệt đối không trùng ý nghĩa với danh sách đã có.
Chỉ trả về JSON: { "newQuestions": ["...", "..."] }.
      `;

      const userPrompt = `
Danh sách câu hỏi hiện có (${currentQuestions.length}):
${currentQuestions.map((q, i) => `${i + 1}. ${q}`).join("\n")}

Hãy sinh thêm ${questionCount} câu hỏi hoàn toàn khác, cùng chủ đề.
      `;

      const response = await openai.chat.completions.create({
        model: this.model,
        messages: [
          { role: "system", content: systemPrompt.trim() },
          { role: "user", content: userPrompt.trim() },
        ],
        temperature: 0.85,
        top_p: 0.95,
        max_tokens: 600,
      });

      const text = response.choices?.[0]?.message?.content || "";
      const data = this._extractJson(text);
      if (!data || !Array.isArray(data.newQuestions)) {
        console.warn("[generateMoreQuestions] invalid JSON:", text);
        throw new Error("Invalid JSON format from OpenAI");
      }

      const normalizedOld = currentQuestions.map((q) => q.trim().toLowerCase());
      const uniqueNew = (data.newQuestions || [])
        .map((q) => q.trim())
        .filter((q) => !normalizedOld.includes(q.toLowerCase()))
        .filter((q, i, arr) => arr.indexOf(q) === i);

      res.json({
        success: true,
        data: {
          domain,
          level,
          newQuestions: uniqueNew,
          totalNew: uniqueNew.length,
        },
      });
    } catch (error) {
      console.error("❌ [generateMoreQuestions] Error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to generate more questions",
        error: error.message,
      });
    }
  }

  // =============== 3️⃣ Evaluate Answers ===============
  async evaluateAnswers(req, res) {
    try {
      const { domain, questions, answers } = req.body || {};

      if (!domain || !Array.isArray(questions) || !Array.isArray(answers)) {
        return res.status(400).json({
          success: false,
          message: "Invalid request body",
        });
      }

      if (questions.length !== answers.length) {
        return res.status(400).json({
          success: false,
          message: "Số câu hỏi và câu trả lời không khớp",
        });
      }

      res.setHeader("Cache-Control", "no-store");

      const sanitize = (str = "") =>
        str
          .replace(/```[\s\S]*?```/g, "")
          .replace(/[^\x20-\x7EÀ-ỹ]/g, " ")
          .replace(/\s+/g, " ")
          .trim();

      const cleanedAnswers = answers.map(sanitize);

      const systemPrompt = `
Bạn là chuyên gia phỏng vấn trong lĩnh vực "${domain}".
Hãy đánh giá chi tiết từng câu trả lời của ứng viên, bao gồm:
- Chấm điểm từng câu (0–10)
- Nhận xét chi tiết
- Gợi ý cải thiện
- Cung cấp một **mẫu câu trả lời đúng, rõ ràng và mạch lạc** (howToAnswerCorrectly)
- Tổng kết điểm trung bình, điểm mạnh, điểm yếu và khuyến nghị phát triển kỹ năng.

⚠️ Trả về JSON hợp lệ:
{
 "overallScore": number,
 "strengths": [string],
 "weaknesses": [string],
 "detailedFeedback": [
   { 
     "question": string, 
     "answer": string, 
     "score": number, 
     "feedback": string, 
     "improvement": string,
     "howToAnswerCorrectly": string 
   }
 ],
 "summary": string,
 "recommendations": [string]
}
      `;

      const pairs = questions
        .map(
          (q, i) =>
            `Câu hỏi ${i + 1}: ${q}\nTrả lời: ${cleanedAnswers[i] || "(Chưa trả lời)"}`
        )
        .join("\n\n");

      const response = await openai.chat.completions.create({
        model: this.model,
        messages: [
          { role: "system", content: systemPrompt.trim() },
          {
            role: "user",
            content: `Đánh giá và trả JSON đúng chuẩn cho các câu sau:\n${pairs}`,
          },
        ],
        temperature: 0.6,
        max_tokens: 2500,
      });

      const text = response.choices?.[0]?.message?.content || "";
      const evaluation = this._extractJson(text);

      if (!evaluation || typeof evaluation !== "object") {
        console.warn("[evaluateAnswers] Invalid JSON from model:", text);
        throw new Error("Invalid JSON format from OpenAI");
      }

      res.json({ success: true, data: evaluation });
    } catch (error) {
      console.error("❌ [evaluateAnswers] Error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to evaluate answers",
        error: error.message,
      });
    }
  }

  // =============== 4️⃣ Health Check ===============
  async healthCheck(req, res) {
    try {
      await openai.chat.completions.create({
        model: this.model,
        messages: [{ role: "user", content: "ping" }],
      });

      res.json({
        success: true,
        message: "✅ OpenAI Interview Service đang hoạt động",
        model: this.model,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "❌ OpenAI connection failed",
        error: error.message,
      });
    }
  }
}

export default new InterviewAIController();
