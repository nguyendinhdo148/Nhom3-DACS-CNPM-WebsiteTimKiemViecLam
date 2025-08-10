import { useLocation } from "react-router-dom";
import Navbar from "@/components/shared/Navbar";
import { useEffect } from "react";

interface ScoreItem {
  type: string;
  score: number;
  description?: string;
}

interface IntelligenceResultData {
  allIntelligences?: Record<string, number>;
  scores?: ScoreItem[];
  strengths: string[];
  advice: string;
  gender: 'male' | 'female';
  dominantIntelligence: string;
  profile?: string;
  improvements?: string[];
  careers?: string[];
  answerPatterns?: {
    scoreRange?: string;
    dominantDifference?: number;
    consistency?: number;
    extremeResponses?: number;
    learningStyle?: string;
  };
  timestamp?: string;
  version?: string;
}
interface RawIntelligenceData {
  allIntelligences?: Record<string, number>;
  scores?: Array<{
    type: string;
    score: number;
    description?: string;
  }>;
  strengths?: string[];
  advice?: string;
  gender?: 'male' | 'female';
  dominantIntelligence?: string;
  profile?: string;
  improvements?: string[];
  careers?: string[] | string;
  answerPatterns?: {
    scoreRange?: string;
    dominantDifference?: number;
    consistency?: number;
    extremeResponses?: number;
    learningStyle?: string;
  };
  timestamp?: string;
  version?: string;
}

const intelligenceTypes = [
  {
    name: "Logic",
    icon: "/mi_icons/logictoanhoc.png",
    color: "from-blue-500 to-blue-300",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200",
    description: "Khả năng phân tích vấn đề, tư duy số học và giải quyết vấn đề logic",
    famousFigures: "Albert Einstein, Stephen Hawking, Marie Curie",
    careers: "Nhà toán học, lập trình viên, nhà khoa học, kỹ sư"
  },
  {
    name: "Ngôn ngữ",
    icon: "/mi_icons/linguistic.png",
    color: "from-green-500 to-green-300",
    bgColor: "bg-green-100",
    borderColor: "border-green-200",
    description: "Khả năng sử dụng ngôn từ hiệu quả, cả viết lẫn nói",
    famousFigures: "William Shakespeare, Jane Austen, J.K. Rowling",
    careers: "Nhà văn, nhà báo, luật sư, biên tập viên"
  },
  {
    name: "Không gian",
    icon: "/mi_icons/spatial.png",
    color: "from-purple-500 to-purple-300",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-200",
    description: "Khả năng hình dung, tưởng tượng không gian và tư duy bằng hình ảnh",
    famousFigures: "Pablo Picasso, Frank Lloyd Wright, Leonardo da Vinci",
    careers: "Kiến trúc sư, họa sĩ, nhiếp ảnh gia, nhà thiết kế"
  },
  {
    name: "Vận động",
    icon: "/mi_icons/bodily.png",
    color: "from-red-500 to-red-300",
    bgColor: "bg-red-100",
    borderColor: "border-red-200",
    description: "Khả năng điều khiển cơ thể và thao tác vật thể một cách khéo léo",
    famousFigures: "Michael Jordan, Simone Biles, Bruce Lee",
    careers: "Vận động viên, diễn viên, bác sĩ phẫu thuật, thợ thủ công"
  },
  {
    name: "Âm nhạc",
    icon: "/mi_icons/musical.png",
    color: "from-yellow-500 to-yellow-300",
    bgColor: "bg-yellow-100",
    borderColor: "border-yellow-200",
    description: "Khả năng cảm thụ, sáng tác và biểu diễn các yếu tố âm nhạc",
    famousFigures: "Mozart, Beyoncé, Bob Marley",
    careers: "Nhạc sĩ, ca sĩ, nhạc công, nhà sản xuất âm nhạc"
  },
  {
    name: "Xã hội",
    icon: "/mi_icons/interpersonal.png",
    color: "from-pink-500 to-pink-300",
    bgColor: "bg-pink-100",
    borderColor: "border-pink-200",
    description: "Khả năng tương tác, thấu hiểu và làm việc với người khác",
    famousFigures: "Oprah Winfrey, Nelson Mandela, Dalai Lama",
    careers: "Giáo viên, nhà tâm lý học, nhân viên xã hội, nhà ngoại giao"
  },
  {
    name: "Nội tâm",
    icon: "/mi_icons/intrapersonal.png",
    color: "from-indigo-500 to-indigo-300",
    bgColor: "bg-indigo-100",
    borderColor: "border-indigo-200",
    description: "Khả năng hiểu rõ bản thân, nhận thức về giá trị và cảm xúc cá nhân",
    famousFigures: "Sigmund Freud, Virginia Woolf, Plato",
    careers: "Nhà triết học, nhà văn, nhà tâm lý học, nhà tư vấn"
  },
  {
    name: "Thiên nhiên",
    icon: "/mi_icons/naturalist.png",
    color: "from-teal-500 to-teal-300",
    bgColor: "bg-teal-100",
    borderColor: "border-teal-200",
    description: "Khả năng nhận biết và phân loại các yếu tố trong tự nhiên",
    famousFigures: "Charles Darwin, Jane Goodall, David Attenborough",
    careers: "Nhà sinh vật học, nhà bảo tồn, nông dân, nhà khí tượng học"
  },
  {
    name: "Triết học",
    icon: "/mi_icons/existential.png",
    color: "from-gray-500 to-gray-300",
    bgColor: "bg-gray-100",
    borderColor: "border-gray-200",
    description: "Khả năng tư duy trừu tượng về các vấn đề hiện sinh, triết lý",
    famousFigures: "Socrates, Friedrich Nietzsche, Simone de Beauvoir",
    careers: "Triết gia, nhà thần học, nhà văn, giáo sư đại học"
  }
];

const transformResultData = (rawData: RawIntelligenceData | null | undefined): IntelligenceResultData | undefined => {
  if (!rawData) return undefined;

  // Tạo bản sao để không modify trực tiếp vào rawData
  const result: RawIntelligenceData = { ...rawData };

  // Xử lý chuyển đổi scores
  let processedScores: ScoreItem[] = [];
  if (Array.isArray(result.scores)) {
    processedScores = result.scores;
  } else if (result.allIntelligences) {
    processedScores = Object.entries(result.allIntelligences).map(([type, score]) => ({
      type,
      score,
      description: intelligenceTypes.find(t => t.name === type)?.description || ''
    }));
  }

  // Xử lý careers
  let processedCareers: string[] = [];
  if (Array.isArray(result.careers)) {
    processedCareers = result.careers;
  } else if (typeof result.careers === 'string') {
    processedCareers = result.careers.split(', ').filter(Boolean);
  } else {
    const dominantType = intelligenceTypes.find(t => t.name === result.dominantIntelligence);
    processedCareers = dominantType?.careers?.split(', ').filter(Boolean) || [];
  }

  // Tạo đối tượng kết quả cuối cùng
  const transformedData: IntelligenceResultData = {
    strengths: result.strengths || [],
    advice: result.advice || '',
    gender: result.gender || 'male',
    dominantIntelligence: result.dominantIntelligence || intelligenceTypes[0].name,
    profile: result.profile || `Bạn có khả năng nổi trội về ${result.dominantIntelligence || intelligenceTypes[0].name}`,
    improvements: result.improvements || [],
    careers: processedCareers,
    scores: processedScores,
    ...(result.answerPatterns && { answerPatterns: result.answerPatterns }),
    ...(result.timestamp && { timestamp: result.timestamp }),
    ...(result.version && { version: result.version })
  };

  return transformedData;
};

const cleanMarkdownText = (text: string): string => {
  return text.replace(/\*\*/g, '').replace(/^\*\s*/, '').trim();
};

const MIResult = () => {
  const { state } = useLocation();
  const rawResult = state?.result;
  const result = transformResultData(rawResult) as IntelligenceResultData | undefined;

  useEffect(() => {
    console.log('Raw result:', rawResult);
    console.log('Transformed result:', result);
  }, [rawResult, result]);

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <Navbar />
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden my-8 p-8 text-center">
          <div className="bg-red-100 text-red-800 p-4 rounded-lg inline-block mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Không tìm thấy kết quả
          </h2>
          <p className="text-gray-600 mb-6">
            Vui lòng làm bài kiểm tra trước khi xem kết quả
          </p>
          <button
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition shadow-md"
            onClick={() => (window.location.href = "/tools/mi/test")}
          >
            Làm bài kiểm tra ngay
          </button>
        </div>
      </div>
    );
  }

  const scoresArray = Array.isArray(result.scores) 
    ? result.scores 
    : Object.entries(result.allIntelligences || {}).map(([type, score]) => ({
        type,
        score,
        description: intelligenceTypes.find(t => t.name === type)?.description || ''
      }));

  const sortedScores = [...scoresArray].sort((a, b) => b.score - a.score);
  const topIntelligences = sortedScores.slice(0, 3);
  const dominantIntelligenceInfo = intelligenceTypes.find(t => t.name === result.dominantIntelligence) || intelligenceTypes[0];

  const renderFormattedText = (text: string) => {
    return text.split("\n").map((paragraph, i) =>
      paragraph.trim() ? (
        <p key={i} className="mb-4 text-gray-700 leading-relaxed">
          {paragraph}
        </p>
      ) : null
    );
  };

  const getIntelligenceInfo = (type: string) => {
    return intelligenceTypes.find(t => t.name === type) || {
      name: type,
      icon: "/mi_icons/default.png",
      color: "from-gray-500 to-gray-300",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-200",
      description: ""
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Result Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 mb-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-20">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 0C44.77 0 0 44.77 0 100C0 155.23 44.77 200 100 200C155.23 200 200 155.23 200 100C200 44.77 155.23 0 100 0ZM100 180C55.94 180 20 144.06 20 100C20 55.94 55.94 20 100 20C144.06 20 180 55.94 180 100C180 144.06 144.06 180 100 180Z"
                fill="white"
              />
              <path
                d="M100 40C67.19 40 40 67.19 40 100C40 132.81 67.19 160 100 160C132.81 160 160 132.81 160 100C160 67.19 132.81 40 100 40ZM100 140C78.95 140 60 121.05 60 100C60 78.95 78.95 60 100 60C121.05 60 140 78.95 140 100C140 121.05 121.05 140 100 140Z"
                fill="white"
              />
              <path
                d="M100 80C89.54 80 80 89.54 80 100C80 110.46 89.54 120 100 120C110.46 120 120 110.46 120 100C120 89.54 110.46 80 100 80Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Kết Quả Trắc Nghiệm Đa Trí Thông Minh
            </h1>
            <p className="text-xl font-medium mb-6">
              Loại hình thông minh nổi trội của bạn: {result.dominantIntelligence}
            </p>

            {/* Top 3 intelligences */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {topIntelligences.map((intel, index) => {
                const typeInfo = getIntelligenceInfo(intel.type);
                
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${typeInfo.color} p-1 mb-3`}>
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-2">
                        <img 
                          src={typeInfo.icon} 
                          alt={intel.type} 
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">{intel.type}</h3>
                    <div className="text-2xl font-extrabold text-white/90">
                      {intel.score}/100
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dominant Intelligence Detail */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-3 h-10 bg-indigo-600 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">
              Chi Tiết Loại Hình Thông Minh Nổi Trội: {result.dominantIntelligence}
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className={`${dominantIntelligenceInfo.bgColor} border ${dominantIntelligenceInfo.borderColor} rounded-xl p-6 flex flex-col items-center md:w-1/3`}>
              <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${dominantIntelligenceInfo.color} p-2 mb-4`}>
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-3">
                  <img 
                    src={dominantIntelligenceInfo.icon} 
                    alt={result.dominantIntelligence} 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">{result.dominantIntelligence}</h3>
              <p className="text-center mb-4">{dominantIntelligenceInfo.description}</p>
              
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div 
                  className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
                  style={{ width: `${sortedScores.find(s => s.type === result.dominantIntelligence)?.score || 0}%` }}
                ></div>
              </div>
              
              <div className="text-center">
                <p className="font-semibold">Điểm số: {sortedScores.find(s => s.type === result.dominantIntelligence)?.score || 0}/100</p>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Đặc điểm nổi bật</h3>
                {result.profile ? (
                  renderFormattedText(result.profile)
                ) : (
                  <p className="text-gray-700">Bạn có khả năng đặc biệt trong lĩnh vực {result.dominantIntelligence.toLowerCase()}. {dominantIntelligenceInfo.description}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-800 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Nhân vật nổi tiếng
                  </h4>
                  <p className="text-gray-700">{dominantIntelligenceInfo.famousFigures}</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <h4 className="font-bold text-purple-800 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                    Nghề nghiệp phù hợp
                  </h4>
                  {result.careers && result.careers.length > 0 ? (
                    <ul className="list-disc pl-5 text-gray-700">
                      {result.careers.map((career, i) => (
                        <li key={i}>{career}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700">{dominantIntelligenceInfo.careers}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Intelligence Scores */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-3 h-10 bg-indigo-600 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">
              Điểm Chi Tiết Các Loại Hình Trí Thông Minh
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedScores.map((intel, index) => {
              const typeInfo = getIntelligenceInfo(intel.type);
              
              return (
                <div 
                  key={index} 
                  className={`${typeInfo.bgColor} p-5 rounded-xl border ${typeInfo.borderColor} hover:shadow-md transition-all`}
                >
                  <div className="flex items-center mb-3">
                    <img 
                      src={typeInfo.icon} 
                      alt={intel.type} 
                      className="w-12 h-12 mr-3 object-contain"
                    />
                    <div>
                      <h3 className="font-bold text-gray-800">{intel.type}</h3>
                      <div className="text-lg font-bold text-gray-700">
                        {intel.score}/100
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div 
                      className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
                      style={{ width: `${intel.score}%` }}
                    ></div>
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    {intel.description || typeInfo.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Strengths Section */}
        {result.strengths?.length > 0 && (
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-3 h-10 bg-green-500 rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">
                Điểm Mạnh Nổi Bật Của Bạn
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {result.strengths.map((strength, index) => {
                const cleanStrength = cleanMarkdownText(strength);
                return (
                  <div 
                    key={index} 
                    className="bg-green-50 p-5 rounded-xl border border-green-200 hover:border-green-300 transition-all"
                  >
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700 leading-relaxed">
                        {cleanStrength}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Improvements Section */}
        {(result.improvements?.length ?? 0) > 0 && (
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-3 h-10 bg-amber-500 rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">
                Lĩnh Vực Cần Cải Thiện
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {result.improvements?.map((item, index) => {
                const cleanItem = cleanMarkdownText(item);
                return (
                  <div 
                    key={index} 
                    className="bg-amber-50 p-5 rounded-xl border border-amber-200 hover:border-amber-300 transition-all"
                  >
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700 leading-relaxed">
                        {cleanItem}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Development Advice */}
        {result.advice && (
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-3 h-10 bg-purple-500 rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">
                Lời Khuyên Phát Triển
              </h2>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <div className="prose max-w-none text-gray-700">
                {renderFormattedText(result.advice)}
              </div>
            </div>
          </section>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
          <button
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
            onClick={() => (window.location.href = "/tools/mi/test")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Làm Lại Trắc Nghiệm
          </button>
          <button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
            onClick={() => window.print()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            In Kết Quả
          </button>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>
            Kết quả này chỉ mang tính chất tham khảo, dựa trên thuyết Đa trí thông minh của Howard Gardner.
          </p>
          <p className="mt-1">
            Mỗi người đều sở hữu nhiều loại hình trí thông minh khác nhau với mức độ phát triển khác nhau.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MIResult;