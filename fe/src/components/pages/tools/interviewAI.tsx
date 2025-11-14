import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/shared/Navbar";

// ====================== INTERFACES ======================
interface DetailedFeedback {
  question: string;
  answer: string;
  score: number;
  feedback: string;
  improvement: string;
  howToAnswerCorrectly: string;
}

interface Evaluation {
  overallScore: number;
  strengths: string[];
  weaknesses: string[];
  detailedFeedback: DetailedFeedback[];
  summary: string;
  recommendations: string[];
}

// ====================== LOADING COMPONENTS ======================
const LoadingSpinner = ({ size = "medium" }: { size?: "small" | "medium" | "large" }) => {
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  };

  return (
    <div className={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin`}></div>
  );
};


const PageTransition = ({ children, isVisible }: { children: React.ReactNode; isVisible: boolean }) => (
  <div className={`transition-all duration-500 ease-in-out ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`}>
    {children}
  </div>
);

// ====================== STYLED COMPONENTS ======================
const GradientCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 border border-blue-200/40 rounded-3xl backdrop-blur-sm shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 mb-8 p-8 relative overflow-hidden ${className}`}>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
    {children}
  </div>
);

const QuestionBox = ({ children, className = "" }: { children: React.ReactNode; className?: string; index: number }) => (
  <div className={`relative bg-gradient-to-br from-white to-blue-50/60 border border-blue-200/50 rounded-2xl p-8 mb-8 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ${className}`}>
    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-pink-500 to-purple-500 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300"></div>
    <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-lg"></div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

const AnswerBox = ({ 
  value, 
  onChange, 
  placeholder = "Nhập câu trả lời của bạn tại đây...",
  rows = 6 
}: { 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
}) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={rows}
    className="w-full mt-6 p-6 bg-white/90 border-2 border-gray-200 rounded-2xl transition-all duration-300 focus:bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 hover:bg-white hover:border-blue-300 resize-none shadow-inner font-medium text-gray-700 placeholder-gray-400"
  />
);

const ScoreChip = ({ score, label }: { score?: number; label?: string }) => (
  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-sm rounded-2xl shadow-lg">
    {score ? `${score}/10` : label}
  </div>
);

const PrimaryButton = ({ 
  children, 
  onClick, 
  disabled = false,
  startIcon,
  loading = false,
  className = ""
}: { 
  children: React.ReactNode; 
  onClick: () => void;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  loading?: boolean;
  className?: string;
}) => (
  <button
    onClick={onClick}
    disabled={disabled || loading}
    className={`relative inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-10 rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden group ${className}`}
  >
    {loading && (
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></div>
    )}
    <span className="relative z-10 flex items-center">
      {startIcon && <span className="mr-3">{startIcon}</span>}
      {loading ? <LoadingSpinner size="small" /> : children}
    </span>
  </button>
);

const SecondaryButton = ({ 
  children, 
  onClick, 
  disabled = false,
  startIcon,
  className = ""
}: { 
  children: React.ReactNode; 
  onClick: () => void;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  className?: string;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`inline-flex items-center border-2 border-blue-200 text-blue-600 bg-blue-50/70 font-semibold py-4 px-10 rounded-2xl hover:bg-blue-100 hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl ${className}`}
  >
    {startIcon && <span className="mr-3">{startIcon}</span>}
    {children}
  </button>
);

// ====================== ICONS ======================
const PsychologyIcon = () => (
  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

const WorkIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
  </svg>
);

const AnalyticsIcon = () => (
  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
  </svg>
);

const RestartIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
  </svg>
);

const AddIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
  </svg>
);

const SendIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
  </svg>
);

const StarIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg className={`w-14 h-14 transition-all duration-300 ${filled ? 'text-yellow-400 scale-110' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);

const UpgradeIcon = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
  </svg>
);

const SummaryIcon = () => (
  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
  </svg>
);

// ====================== MAIN COMPONENT ======================
const InterviewAI: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'setup' | 'interview' | 'results'>('setup');
  const [domain, setDomain] = useState('');
  const [level, setLevel] = useState<'intern' | 'junior' | 'mid' | 'senior'>('mid');
  const [industry, setIndustry] = useState('it');
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [error, setError] = useState('');

  // === API BASE URL ===
  const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

  // ====================== EFFECTS ======================
  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      setAnswers(prev => {
        const newAnswers = [...prev];
        while (newAnswers.length < questions.length) {
          newAnswers.push('');
        }
        return newAnswers;
      });
    }
  }, [questions]);

  // ====================== HANDLERS ======================
  const generateQuestions = async () => {
    if (!domain.trim()) {
      setError('Vui lòng nhập lĩnh vực phỏng vấn');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Simulate API call with delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const res = await fetch(`${API_BASE}/interview-ai/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          domain, 
          level, 
          industry,
          questionCount: 5 
        }),
      });

      const data = await res.json();
      if (data.success) {
        setQuestions(data.data.questions);
        setStep('interview');
      } else {
        setError(data.message || 'Không thể tạo câu hỏi');
      }
    } catch (err) {
      console.error('Generate questions error:', err);
      setError('Không thể kết nối tới server tạo câu hỏi');
    } finally {
      setLoading(false);
    }
  };

  const addMoreQuestions = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const res = await fetch(`${API_BASE}/interview-ai/generate-more`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          domain, 
          level, 
          industry, 
          currentQuestions: questions,
          questionCount: 3 
        }),
      });

      const data = await res.json();
      if (data.success) {
        setQuestions(prev => [...prev, ...data.data.newQuestions]);
      } else {
        setError(data.message || 'Không thể thêm câu hỏi');
      }
    } catch (err) {
      console.error('Add questions error:', err);
      setError('Không thể kết nối tới server');
    } finally {
      setLoading(false);
    }
  };

  const submitAnswers = async () => {
    const currentQuestionsAnswers = answers.slice(0, questions.length);
    if (currentQuestionsAnswers.some((a) => !a.trim())) {
      setError('Vui lòng trả lời tất cả các câu hỏi');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const res = await fetch(`${API_BASE}/interview-ai/evaluate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          domain, 
          questions, 
          answers: currentQuestionsAnswers,
          industry 
        }),
      });

      const data = await res.json();
      if (data.success) {
        setEvaluation(data.data);
        setStep('results');
      } else {
        setError(data.message || 'Đánh giá thất bại');
      }
    } catch (err) {
      console.error('Evaluate error:', err);
      setError('Không thể kết nối tới server đánh giá');
    } finally {
      setLoading(false);
    }
  };

  const updateAnswer = (index: number, value: string) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = value;
      return newAnswers;
    });
  };

  const restartInterview = () => {
    setStep('setup');
    setDomain('');
    setQuestions([]);
    setAnswers([]);
    setEvaluation(null);
    setError('');
  };

  const goToHome = () => {
    navigate('/');
  };

  // ====================== RENDER ======================
  const renderSetup = () => (
    <PageTransition isVisible={step === 'setup'}>
      <GradientCard>
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 mb-8 shadow-2xl">
            <PsychologyIcon />
          </div>
          <h2 className="text-4xl font-bold text-blue-600 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Thiết lập buổi phỏng vấn
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tạo buổi phỏng vấn AI thông minh với đánh giá chi tiết và gợi ý cải thiện cho mọi ngành nghề
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-1">
            <label className="block text-lg font-semibold text-gray-700 mb-3">Ngành nghề</label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-2xl bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-inner"
            >
              <option value="it">Công nghệ thông tin</option>
              <option value="business">Kinh doanh & Marketing</option>
              <option value="design">Thiết kế & Sáng tạo</option>
              <option value="engineering">Kỹ thuật</option>
              <option value="healthcare">Y tế & Chăm sóc sức khỏe</option>
              <option value="education">Giáo dục & Đào tạo</option>
              <option value="finance">Tài chính & Ngân hàng</option>
              <option value="other">Khác</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-lg font-semibold text-gray-700 mb-3">Trình độ</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as 'intern' | 'junior' | 'mid' | 'senior')}
              className="w-full p-4 border-2 border-gray-200 rounded-2xl bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-inner"
            >
              <option value="intern">Intern / Thực tập sinh</option>
              <option value="junior">Junior / Mới vào nghề</option>
              <option value="mid">Middle / Có kinh nghiệm</option>
              <option value="senior">Senior / Chuyên gia</option>
            </select>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-700 mb-3">
            Lĩnh vực/Vị trí cụ thể
          </label>
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Ví dụ: React Developer, Digital Marketing, Kế toán tổng hợp, Bác sĩ đa khoa..."
            className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-inner"
          />
          <p className="text-sm text-gray-500 mt-3">
            Mô tả chi tiết vị trí hoặc lĩnh vực bạn muốn phỏng vấn
          </p>
        </div>

        <div className="text-center mt-12">
          <PrimaryButton
            onClick={generateQuestions}
            disabled={loading || !domain.trim()}
            loading={loading}
            startIcon={<WorkIcon />}
            className="min-w-64"
          >
            {loading ? 'Đang tạo câu hỏi...' : 'Bắt đầu phỏng vấn'}
          </PrimaryButton>
        </div>
      </GradientCard>
    </PageTransition>
  );

  const renderInterview = () => (
    <PageTransition isVisible={step === 'interview'}>
      <>
        <GradientCard>
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 mr-6 shadow-lg">
                <WorkIcon />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-600 mb-3">{domain}</h2>
                <span className={`inline-block px-4 py-2 rounded-2xl font-semibold text-sm ${
                  level === 'senior' ? 'bg-red-100 text-red-600' : 
                  level === 'mid' ? 'bg-yellow-100 text-yellow-600' : 
                  level === 'junior' ? 'bg-green-100 text-green-600' :
                  'bg-blue-100 text-blue-600'
                } shadow-lg`}>
                  {level.toUpperCase()}
                </span>
              </div>
            </div>
            <ScoreChip label={`${questions.length} câu hỏi`} />
          </div>

          <p className="text-gray-600 text-xl leading-relaxed">
            Hãy trả lời các câu hỏi dưới đây một cách chi tiết và chân thực nhất. 
            Hệ thống AI sẽ phân tích và đưa ra đánh giá khách quan dựa trên kiến thức chuyên môn và kinh nghiệm thực tế.
          </p>
        </GradientCard>

        {questions.map((question, index) => (
          <QuestionBox key={index} index={index}>
            <div className="flex items-start mb-6">
              <div className="flex items-center justify-center min-w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 mr-6 text-white font-bold text-lg shadow-lg">
                {index + 1}
              </div>
              <h3 className="text-2xl text-gray-800 flex-1 leading-relaxed font-medium">
                {question}
              </h3>
            </div>
            <AnswerBox
              value={answers[index] || ''}
              onChange={(e) => updateAnswer(index, e.target.value)}
            />
          </QuestionBox>
        ))}

        <div className="flex flex-wrap gap-6 justify-center mt-12">
          <SecondaryButton 
            onClick={restartInterview}
            startIcon={<RestartIcon />}
          >
            Bắt đầu lại
          </SecondaryButton>
          <SecondaryButton 
            onClick={addMoreQuestions}
            disabled={loading}
            startIcon={<AddIcon />}
          >
            {loading ? 'Đang thêm...' : 'Thêm câu hỏi'}
          </SecondaryButton>
          <PrimaryButton 
            onClick={submitAnswers} 
            disabled={loading}
            loading={loading}
            startIcon={<SendIcon />}
          >
            {loading ? 'Đang đánh giá...' : 'Gửi bài phỏng vấn'}
          </PrimaryButton>
        </div>
      </>
    </PageTransition>
  );

  const renderResults = () => {
    if (!evaluation) return null;

    const getScoreColor = (score: number) => {
      if (score >= 8) return 'text-green-500';
      if (score >= 6) return 'text-yellow-500';
      return 'text-red-500';
    };

    return (
      <PageTransition isVisible={step === 'results'}>
        <GradientCard>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-28 h-28 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 mb-8 shadow-2xl">
              <AnalyticsIcon />
            </div>
            <h2 className="text-4xl font-bold text-blue-700 mb-6">
  Kết quả phỏng vấn
</h2>

            <p className="text-2xl text-gray-600 mb-4">{domain}</p>
            <span className={`inline-block px-4 py-2 rounded-2xl font-semibold text-sm ${
              level === 'senior' ? 'bg-red-100 text-red-600' : 
              level === 'mid' ? 'bg-yellow-100 text-yellow-600' : 
              level === 'junior' ? 'bg-green-100 text-green-600' :
              'bg-blue-100 text-blue-600'
            } shadow-lg`}>
              {level.toUpperCase()}
            </span>
          </div>

          {/* Overall Score */}
          <div className="text-center my-12 p-12 rounded-3xl bg-gradient-to-br from-blue-50/80 to-purple-50/80 border border-blue-200/50 shadow-2xl">
            <h3 className="text-2xl text-gray-600 mb-8 font-semibold">Điểm tổng quan</h3>
            <div className="flex items-center justify-center mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  filled={evaluation.overallScore >= star * 2}
                />
              ))}
            </div>
            <div className={`text-8xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent`}>
              {evaluation.overallScore.toFixed(1)}
            </div>
            <p className="text-2xl text-gray-600 mb-4">trên 10 điểm</p>
            <p className={`text-3xl font-semibold mt-6 ${getScoreColor(evaluation.overallScore)}`}>
              {evaluation.overallScore >= 8 ? 'Xuất sắc! 🎉' : 
               evaluation.overallScore >= 6 ? 'Tốt! 👍' : 
               evaluation.overallScore >= 4 ? 'Khá 💪' : 'Cần cải thiện 📚'}
            </p>
          </div>

          {/* Strengths and Weaknesses */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-1">
              <div className="p-8 h-full rounded-3xl bg-green-50/80 border border-green-200 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500 text-white">
                    <CheckIcon />
                  </div>
                  <h3 className="text-3xl font-semibold text-green-600 ml-4">
                    Điểm mạnh
                  </h3>
                </div>
                <ul className="space-y-4">
                  {evaluation.strengths.map((item, i) => (
                    <li key={i} className="text-green-700 leading-relaxed text-lg flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <div className="p-8 h-full rounded-3xl bg-red-50/80 border border-red-200 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500 text-white">
                    <UpgradeIcon />
                  </div>
                  <h3 className="text-3xl font-semibold text-red-600 ml-4">
                    Cần cải thiện
                  </h3>
                </div>
                <ul className="space-y-4">
                  {evaluation.weaknesses.map((item, i) => (
                    <li key={i} className="text-red-700 leading-relaxed text-lg flex items-start">
                      <span className="text-red-500 mr-3 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Feedback */}
          <h3 className="text-4xl font-semibold text-blue-600 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Phân tích chi tiết
          </h3>
          {evaluation.detailedFeedback.map((item, index) => (
            <div key={index} className="p-8 mb-8 rounded-3xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 border border-blue-200/50 shadow-xl">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <h4 className="text-2xl text-gray-800 flex-1 leading-relaxed font-medium">
                  <span className="font-bold text-blue-600">Câu {index + 1}: </span>
                  {item.question}
                </h4>
                <ScoreChip score={item.score} />
              </div>
              
              <div className="mb-6 p-6 rounded-2xl bg-blue-50/80 border border-blue-200">
                <p className="text-gray-600 italic leading-relaxed text-lg">
                  <span className="font-bold text-blue-600">Câu trả lời của bạn: </span>
                  {item.answer}
                </p>
              </div>
              
              <div className="mb-6 p-6 rounded-2xl bg-green-50/80 border border-green-200">
                <p className="text-gray-800 leading-relaxed text-lg">
                  <span className="font-bold text-green-600">Nhận xét: </span>
                  {item.feedback}
                </p>
              </div>
              
              <div className="mb-6 p-6 rounded-2xl bg-yellow-50/80 border border-yellow-200">
                <p className="text-gray-800 leading-relaxed text-lg">
                  <span className="font-bold text-yellow-600">Gợi ý cải thiện: </span>
                  {item.improvement}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-purple-50/80 border border-purple-200">
                <p className="text-gray-800 leading-relaxed text-lg">
                  <span className="font-bold text-purple-600">Cách trả lời tốt nhất: </span>
                  {item.howToAnswerCorrectly}
                </p>
              </div>
            </div>
          ))}

          {/* Summary and Recommendations */}
          <div className="p-10 mt-8 rounded-3xl bg-blue-50/80 border border-blue-200 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-500 text-white">
                <SummaryIcon />
              </div>
              <h3 className="text-3xl font-semibold text-blue-600 ml-4">
                Tổng kết & Định hướng
              </h3>
            </div>
            
            <p className="text-gray-800 text-xl leading-relaxed mb-8">
              {evaluation.summary}
            </p>
            
            <div className="mt-8">
              <h4 className="text-2xl font-semibold text-blue-600 mb-6">
                Lộ trình phát triển
              </h4>
              <ol className="space-y-4">
                {evaluation.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex items-center justify-center min-w-10 h-10 rounded-2xl bg-blue-500 text-white font-bold mr-6 mt-1 text-lg shadow-lg">
                      {i + 1}
                    </div>
                    <p className="text-gray-800 leading-relaxed text-lg flex-1">
                      {rec}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center mt-16">
            <SecondaryButton 
              onClick={goToHome}
              className="min-w-48"
            >
              Về trang chủ
            </SecondaryButton>
            <PrimaryButton 
              onClick={restartInterview}
              startIcon={<RestartIcon />}
              className="min-w-64"
            >
              Tạo buổi phỏng vấn mới
            </PrimaryButton>
          </div>
        </GradientCard>
      </PageTransition>
    );
  };

  if (pageLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-700">Đang tải...</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="inline-block text-5xl md:text-6xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
  Trợ lý phỏng vấn AI
</h1>
            
            <p className="text-2xl md:text-3xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Hệ thống phỏng vấn thông minh với đánh giá chi tiết và định hướng 
              phát triển nghề nghiệp cho mọi lĩnh vực
            </p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-2xl mb-8 shadow-lg flex justify-between items-center">
              <span>{error}</span>
              <button 
                onClick={() => setError('')}
                className="text-red-700 font-bold text-xl hover:text-red-800"
              >
                ×
              </button>
            </div>
          )}

          {loading && (
            <div className="w-full bg-gray-200 rounded-full h-3 mb-8 overflow-hidden shadow-inner">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full animate-pulse"></div>
            </div>
          )}

          {step === 'setup' && renderSetup()}
          {step === 'interview' && renderInterview()}
          {step === 'results' && renderResults()}
        </div>
      </div>
    </>
  );
};

export default InterviewAI;