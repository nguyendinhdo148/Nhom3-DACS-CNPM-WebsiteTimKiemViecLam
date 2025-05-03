import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generate_description = async (req, res, next) => {
  const { title, category } = req.body;
  if (!title) {
    return res
      .status(400)
      .json({ success: false, message: "Missing job title!" });
  }

  try {
    const prompt = `
    Bạn là một chuyên gia tuyển dụng. Hãy viết mô tả công việc ngắn gọn, súc tích cho vị trí sau:
    - Tiêu đề: ${title}
    - Lĩnh vực: ${category || "Không xác định"}
    
    Yêu cầu:
    - Viết 3-4 câu.
    - Mỗi câu kết thúc bằng dấu chấm.
    - Nội dung rõ ràng, chuyên nghiệp.
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Bạn là một chuyên gia viết mô tả công việc.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    const description = response.choices[0].message.content.trim();

    res.json({
      success: true,
      description,
    });
  } catch (error) {
    console.error("OpenAI Error:", error);
    res.status(500).json({ success: false, message: "AI generation failed!" });
    next(error);
  }
};
