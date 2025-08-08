import { GoogleGenerativeAI } from '@google/generative-ai';
import { validateMBTI, validateAnswers } from '../utils/validators.js';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  generationConfig: {
    maxOutputTokens: 2000,
    temperature: 0.9,
  },
});

const analysisCache = new Map();

export const analyzeWithGemini = async (req, res) => {
  try {
    const { answers, gender, mbtiType } = req.body;

    if (!validateMBTI(mbtiType)) {
      return res.status(400).json({ error: 'Invalid MBTI type', received: mbtiType });
    }

    const cacheKey = `${mbtiType}-${gender}`;
    if (analysisCache.has(cacheKey)) {
      return res.json(analysisCache.get(cacheKey));
    }

    const prompt = `Act as an MBTI expert. Provide detailed analysis in Vietnamese (Markdown format) about:
**${mbtiType} Personality Type**
- Key characteristics
- Strengths & weaknesses
- Career recommendations
- Relationship advice
- Growth suggestions
- Famous examples

Use friendly tone, practical examples, and keep it under 1500 characters.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const analysis = {
      mbtiType,
      gender,
      analysis: text.replace(/\*\*/g, ''),
      timestamp: new Date(),
      source: 'Gemini AI',
    };

    analysisCache.set(cacheKey, analysis);
    res.json(analysis);
  } catch (error) {
    console.error('Gemini Error:', error);
    res.status(500).json({ error: 'Analysis failed', suggestion: 'Try again later' });
  }
};

export const advancedMBTIAnalysis = async (req, res) => {
  try {
    const { answers, gender, mbtiType } = req.body;

    if (!validateMBTI(mbtiType)) {
      return res.status(400).json({ error: 'Invalid MBTI type' });
    }

    if (!validateAnswers(answers)) {
      return res.status(400).json({ error: 'Invalid answers format' });
    }

    const patterns = analyzeAnswerPatterns(answers);

    const prompt = `MBTI Advanced Analysis Request:
Type: ${mbtiType}
Gender: ${gender}
Answer Patterns: ${JSON.stringify(patterns)}

Provide detailed analysis in Vietnamese covering:
1. Personality insights (200 words)
2. Top 3 strengths
3. Areas for improvement
4. Career matches (list 5 suitable jobs, each job on a new line)
5. Customized advice

Format: Markdown with bullet points`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const analysis = {
      ...formatResponse(text, mbtiType, gender),
      answerPatterns: patterns,
      version: 'advanced-1.0',
      timestamp: new Date(),
    };

    res.json(analysis);
  } catch (error) {
    console.error('Advanced Gemini Error:', error);
    res.status(500).json({ error: 'Advanced analysis failed' });
  }
};

function analyzeAnswerPatterns(answers) {
  return {
    consistency: calculateConsistency(answers),
    decisiveness: answers.filter((a) => a !== -1).length / answers.length,
    extremeResponses: answers.filter((a) => a === 0 || a === 1).length,
    neutralCount: answers.filter((a) => a === -1).length,
    preferenceTrend: calculateTrend(answers),
  };
}

function formatResponse(text, type, gender) {
  const rawLines = text.split('\n').map(line => line.trim());
  const sections = [];
  let currentSection = [];
  let currentTitle = '';

  rawLines.forEach((line) => {
    const isSectionHeader = /^\*\*\d+\./.test(line);
    if (isSectionHeader) {
      if (currentSection.length > 0) {
        sections.push({ title: currentTitle, content: [...currentSection] });
        currentSection = [];
      }
      currentTitle = line.replace(/\*\*/g, '');
    } else {
      currentSection.push(line);
    }
  });

  if (currentSection.length > 0) {
    sections.push({ title: currentTitle, content: currentSection });
  }

  const normalize = (str) =>
    str
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .toLowerCase();

  const getContentByKeyword = (keywords) => {
    const sec = sections.find((s) =>
      keywords.some((k) => normalize(s.title).includes(normalize(k)))
    );
    return sec ? sec.content : [];
  };

  const overview = getContentByKeyword(['tổng quan', 'insight', 'tính cách']).join('\n');
  const strengths = getContentByKeyword(['điểm mạnh', 'strength']);
  const weaknesses = getContentByKeyword(['cải thiện', 'điểm yếu', 'weakness']).filter(
    (line) =>
      line &&
      !line.toLowerCase().includes('giới tính') &&
      !line.toLowerCase().startsWith('gender')
  );
const careersRaw = getContentByKeyword([
  'nghề nghiệp', 'career', 'đề xuất nghề nghiệp', 'việc làm',
  'công việc phù hợp', 'ngành nên theo đuổi', 'career matches'
]);
  // Normalize careers to array of strings, splitting by newlines, commas, and removing bullets
  const careers = careersRaw
    .join('\n')
    .split(/\n|,/) // split by newline or comma
    .map(line => line.replace(/^[-*•\d.]+\s*/, '').trim()) // remove bullets/numbers
    .filter(line => line.length > 0);
  const advice = getContentByKeyword(['lời khuyên', 'advice']).join('\n');

  return {
    type,
    gender,
    overview,
    strengths,
    weaknesses,
    careers,
    advice,
  };
}

function calculateConsistency(answers) {
  return Math.random();
}

function calculateTrend(answers) {
  const count0 = answers.filter((a) => a === 0).length;
  const count1 = answers.filter((a) => a === 1).length;
  const ratio = count1 / answers.length;

  if (ratio > 0.7) return 'Xu hướng hướng ngoại, yêu thích sự mới mẻ';
  if (ratio < 0.3) return 'Xu hướng hướng nội, thiên về ổn định';
  return 'Sự cân bằng giữa hướng nội và hướng ngoại';
}
