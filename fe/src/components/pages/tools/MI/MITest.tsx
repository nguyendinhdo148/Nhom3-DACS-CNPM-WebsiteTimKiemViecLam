import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/shared/Navbar';

const questions = [
  "1. Tôi học tốt nhất bằng cách tự rèn luyện kỹ năng, hơn là đọc về nó hay có người khác chỉ",
  "2. Tôi thích xem phim kinh dị, phiêu lưu hay mạo hiểm",
  "3. Tôi có thể tháo lắp các đồ cơ khí, đồ gia dụng và biết cách sửa chúng",
  "4. Tôi không thể ngồi yên trong một thời gian dài, luôn phải cử động.",
  "5. Tôi giỏi việc ném và bắt",
  "6. Tôi khéo tay và thích làm những thứ như đồ handmade hay đồ mộc, đồ thủ công, …",
  "7. Tôi luôn mơ ước trở thành một nhạc sĩ hay ca sĩ",
  "8. Tôi có một bộ sưu tập âm nhạc ấn tượng mà tôi không thể thiếu được",
  "9. Tôi có chơi ít nhất 1 nhạc cụ",
  "10. Tôi có thể hát theo giai điệu và chỉ ra những nốt bị lệch tông",
  "11. Tôi thích rất nhiều các thể loại âm nhạc và có thể cảm nhận nhiều phong cách/ nhạc sĩ khác nhau",
  "12. Tôi thường có một bài hát, một âm thanh hay một đoạn nhạc ở trong đầu",
  "13. Thú nuôi của tôi cũng là bạn thân nhất của tôi - tôi không chịu được khi thiếu chúng",
  "14. Tôi thường xuyên tái chế và cố gắng tiết kiệm lượng nước và điện",
  "15. Bạn bè nghĩ tôi trồng cây rất mát tay",
  "16. Tôi thường nhận ra những kiến thức khoa học trong cuộc sống hàng ngày",
  "17. Tôi có thể dễ dàng phân biệt các loại cây và động vật khác nhau",
  "18. Tôi thích đi ra ngoài và còn thích hơn khi đi xa, ra khỏi thành phố",
  "19. Tôi thích nhìn thấy các bản vẽ hay biểu đồ về cách mọi thứ hoạt động",
  "20. Tôi thích chụp ảnh",
  "21. Tôi có thể hình dung ra các đồ vật từ nhiều góc nhìn khác nhau",
  "22. Tôi nhạy cảm với màu sắc và tính thẩm mỹ",
  "23. Tôi có rất nhiều tranh ảnh trong nhà hay trong máy tính cá nhân",
  "24. Tôi thường ghi nhớ / tưởng tượng ra các đoạn phim mình ưa thích",
  "25. Tôi luôn hỏi 'Tại sao,' thay vì 'Cái gì' hay 'Thế nào'",
  "26. Tôi thấy hứng thú với những câu hỏi triết học như 'Ý nghĩa cuộc sống là gì?'",
  "27. Tôi thường nghĩ về ý nghĩa của các sự kiện hay các câu hỏi",
  "28. Tôi thích tìm hiểu những vấn đề về tiến hóa, thiên văn học, triết học",
  "29. Bạn bè nghĩ tôi suy nghĩ quá nhiều",
  "30. Tôi thích xem phim tài liệu về các triết gia vĩ đại và các cuộc tranh luận triết học",
  "31. Tôi thích đọc, hoặc tham gia các phiên tranh biện hay thảo luận",
  "32. Tôi có một tủ sách mà không thể sống thiếu chúng",
  "33. Tôi giỏi các trò chơi ô chữ, câu đố và trò chơi chữ khác",
  "34. Tôi bịa chuyện rất dễ dàng",
  "35. Tôi có thể học ngoại ngữ dễ dàng",
  "36. Tôi luôn mơ ước được trở thành nhà văn hay biên tập viên",
  "37. Mọi người thường tìm đến tôi để trò chuyện",
  "38. Tôi thích đến các buổi tiệc hay sự kiện xã hội hơn là ngồi ở nhà một mình",
  "39. Tôi cảm thấy buồn khi người khác buồn",
  "40. Tôi là con người của xã hội (hòa đồng, quảng giao, …)",
  "41. Tôi dễ nhận ra cảm xúc thông qua ngôn ngữ cơ thể của người khác",
  "42. Mọi người nghĩ rằng tôi thích nhận được sự chú ý, thích là trung tâm",
  "43. Tôi thích tìm hiểu về bản thân và các cảm xúc của mình",
  "44. Tôi thích dành thời gian ở một mình",
  "45. Tôi hiểu cảm xúc của mình và biết mình sẽ phản ứng như thế nào trong các tình huống khác nhau",
  "46. Tôi thích làm việc một mình hơn là làm theo nhóm",
  "47. Tôi là một người cô đơn",
  "48. Tôi thích làm các bài tập để tìm hiểu về bản thân như trắc nghiệm tích cách",
  "49. Tôi ghi nhớ các sự kiện, số liệu, và công thức một cách dễ dàng",
  "50. Tôi hay đưa ra lời giải thích hợp lý cho các sự kiện",
  "51. Bạn bè nghĩ tôi có một bộ não như máy tính",
  "52. Tôi có thể làm toán nhẩm trong đầu",
  "53. Tôi không thể hiểu được những người không có logic và lý trí",
  "54. Tôi thích tìm hiểu về cách mọi thứ hoạt động ra sao",
  "55. Tôi rất hay ghi chú, lập danh sách để ghi nhớ, thay vì chỉ dựa vào trí nhớ của bản thân",
  "56. Tôi hay nghi ngờ những thông tin mình nhận được, ít khi tin ngay lập tức",
  "57. Tôi thấy chán chường khi ở một mình và không cần những khoảng thời gian một mình",
  "58. Tôi thường chấp nhận mọi thứ như hiện trạng của chúng và ít khi cảm thấy không thỏa mãn với hiện tại",
  "59. Tôi giữ cho không gian quanh mình được sạch sẽ, không bao giờ để đồ đạc lung tung",
  "60. Tôi nghĩ lời nhận xét 'giống robot' là một sự xúc phạm, tôi không muốn hướng tới việc tư duy như cỗ máy",
  "61. Tôi thường tràn đầy năng lượng và không bao giờ ủ rũ",
  "62. Tôi thích làm những bài kiểm tra trắc nghiệm hơn là viết luận",
  "63. Tôi thấy thoải mái với sự hỗn loạn, hơn là tính có tổ chức, có sắp xếp",
  "64. Tôi thường dễ cảm thấy tổn thương và khó chịu đựng được chỉ trích",
  "65. Tôi làm việc tốt nhất khi là thành viên của một nhóm, hơn là khi làm việc một mình",
  "66. Tôi tập trung vào những việc thực tiễn ở hiện tại, thay vì nghĩ tới những kế hoạch tương lai",
  "67. Tôi thường lên kế hoạch cho tương lai xa chứ không để sát nút rồi mới lên kế hoạch",
  "68. Tôi cần sự tôn trọng từ người khác hơn là cảm tình của họ",
  "69. Sau mỗi buổi tiệc tùng, tôi thường kiệt sức thay vì sung mãn",
  "70. Tôi rất dễ hòa đồng và ít khi bị cô lập",
  "71. Tôi thích sự tự do, không cần kế hoạch hay cam kết gì cụ thể",
  "72. Tôi muốn làm giỏi việc sửa chữa các đồ vật hơn là thay đổi con người",
  "73. Tôi thường bày tỏ quan điểm nhiều hơn là im lặng lắng nghe",
  "74. Tôi thường đơn thuần là mô tả các sự việc, nhiều hơn là nói về ý nghĩa hay tác động của chúng",
  "75. Tôi thường hoàn thành công việc sớm nhất có thể thay vì trì hoãn chúng",
  "76. Tôi thường hành động theo trái tim mình hơn là theo cái đầu",
  "77. Tôi thường ở nhà nhiều hơn là đi ra ngoài",
  "78. Tôi thích việc quan sát tổng quan hơn là tập trung vào chi tiết",
  "79. Tôi giỏi ứng biến hơn là lên kế hoạch",
  "80. Tôi nghĩ công lý không nên dựa trên sự thông cảm",
  "81. Tôi khó có thể hét to được nên rất khó gọi người khác khi họ ở khoảng cách xa",
  "82. Tôi tin tưởng vào những lý thuyết khoa học hơn là kinh nghiệm cá nhân",
  "83. Tôi dành nhiều thời gian để làm việc hơn là thư giãn, đi chơi",
  "84. Tôi thấy không thoải mái mỗi khi cảm xúc dâng trào, dù là của bản thân hay người khác",
  "85. Tôi thích việc thể hiện bản thân trước nhiều người, không tránh né việc nói trước đông người",
  "86. Tôi thích được biết các thông tin chi tiết và cụ thể, ví dụ như có những ai, ở đâu, làm gì, vào lúc nào, etc., và ít khi quan tâm đến lý do tại sao"
];

const intelligenceCategories = [
  { name: "Vận động", start: 1, end: 6 },
  { name: "Âm nhạc", start: 7, end: 12 },
  { name: "Thiên nhiên", start: 13, end: 18 },
  { name: "Không gian", start: 19, end: 24 },
  { name: "Triết học", start: 25, end: 30 },
  { name: "Ngôn ngữ", start: 31, end: 36 },
  { name: "Xã hội", start: 37, end: 42 },
  { name: "Nội tâm", start: 43, end: 48 },
  { name: "Logic", start: 49, end: 56 }
];

const MITest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [gender, setGender] = useState<'male' | 'female' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const navigate = useNavigate();

  // Hàm tính điểm cho từng loại trí thông minh
  const calculateMIScores = (answers: number[]): Record<string, number> => {
    const scores: Record<string, number> = {};

    intelligenceCategories.forEach(category => {
      let sum = 0;
      for (let i = category.start - 1; i < category.end; i++) {
        sum += answers[i] !== -1 ? answers[i] + 1 : 0; // Chuyển từ 0-4 thành 1-5
      }
      scores[category.name] = sum;
    });

    return scores;
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);

    // Tự động chuyển câu tiếp theo nếu không phải là câu cuối
    if (currentQuestion < questions.length - 1 && !showSummary) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentQuestion === questions.length - 1 && !showSummary) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = async () => {
    if (answers.includes(-1)) {
      alert('Vui lòng trả lời tất cả các câu hỏi trước khi nộp bài!');
      return;
    }

    if (!gender) {
      alert('Vui lòng chọn giới tính của bạn!');
      return;
    }

    setIsSubmitting(true);
    try {
      const miScores = calculateMIScores(answers);
      
      // Tìm loại hình thông minh nổi trội nhất
      let dominantIntelligence = '';
      let maxScore = 0;
      for (const [intelligence, score] of Object.entries(miScores)) {
        if (score > maxScore) {
          maxScore = score;
          dominantIntelligence = intelligence;
        }
      }

      const response = await fetch('http://localhost:8000/api/mi/advanced-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers,
          gender,
          miScores,
          dominantIntelligence
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      navigate('/tools/mi/result', { state: { result } });
    } catch (error) {
      console.error('Error submitting test:', error);
      alert('Có lỗi xảy ra khi xử lý kết quả. Vui lòng thử lại!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const toggleSummary = () => {
    setShowSummary(!showSummary);
  };

  const answeredCount = answers.filter(answer => answer !== -1).length;

  // Lấy màu sắc cho từng loại trí thông minh
  const getCategoryColor = (categoryName: string): string => {
    const colors: Record<string, string> = {
      "Vận động": "bg-red-100 text-red-800",
      "Âm nhạc": "bg-yellow-100 text-yellow-800",
      "Thiên nhiên": "bg-green-100 text-green-800",
      "Không gian": "bg-purple-100 text-purple-800",
      "Triết học": "bg-gray-100 text-gray-800",
      "Ngôn ngữ": "bg-blue-100 text-blue-800",
      "Xã hội": "bg-pink-100 text-pink-800",
      "Nội tâm": "bg-indigo-100 text-indigo-800",
      "Logic": "bg-teal-100 text-teal-800"
    };
    return colors[categoryName] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
  <Navbar />

  <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden my-8">
    {/* Header */}
    <div className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white py-8 px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Làm bài trắc nghiệm Đa trí thông minh MI</h1>
      <p className="text-lg">Khám phá loại hình thông minh nổi trội của bạn</p>
    </div>

    {/* Progress bar */}
    <div className="px-6 pt-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">Tiến độ: {answeredCount}/{questions.length}</span>
        <span className="text-sm font-medium">{Math.round((answeredCount / questions.length) * 100)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${(answeredCount / questions.length) * 100}%` }}
        ></div>
      </div>
    </div>

    {/* Main content */}
    <div className="p-6 md:p-8">
      {currentQuestion < questions.length ? (
        <>
          {/* Summary toggle button */}
          <button
            onClick={toggleSummary}
            className="mb-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
          >
            {showSummary ? 'Ẩn bảng đáp án' : 'Hiển thị bảng đáp án'}
          </button>

          {/* Answers summary */}
          {showSummary && (
            <div className="mb-6 p-4 border border-gray-200 rounded-lg">
              <h3 className="font-bold mb-2">Tổng hợp câu trả lời:</h3>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentQuestion(index);
                      setShowSummary(false);
                    }}
                    className={`p-2 rounded text-center text-sm ${
                      answers[index] === -1
                        ? 'bg-red-100 text-red-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    Câu {index + 1}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Phân loại câu hỏi:</h4>
                <div className="flex flex-wrap gap-2">
                  {intelligenceCategories.map(category => (
                    <span 
                      key={category.name}
                      className={`px-3 py-1 rounded-full text-xs ${getCategoryColor(category.name)}`}
                    >
                      {category.name} ({category.start}-{category.end})
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                <span className="text-green-600">●</span> Đã trả lời: {answeredCount} |
                <span className="text-red-600"> ●</span> Chưa trả lời: {questions.length - answeredCount}
              </div>
            </div>
          )}

          {/* Current question */}
          <div className="min-h-[120px] flex items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              {questions[currentQuestion]}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {[0, 1, 2, 3, 4].map((optionIndex) => (
              <button
                key={optionIndex}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  answers[currentQuestion] === optionIndex
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => handleAnswer(optionIndex)}
              >
                <div className="flex items-center">
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full mr-3 text-sm font-medium ${
                      answers[currentQuestion] === optionIndex
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {optionIndex + 1}
                  </span>
                  <span>
                    {optionIndex === 0 && "Hoàn toàn sai"}
                    {optionIndex === 1 && "Thường là sai"}
                    {optionIndex === 2 && "Không rõ ràng"}
                    {optionIndex === 3 && "Đôi lúc đúng"}
                    {optionIndex === 4 && "Hoàn toàn đúng"}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Quay lại
            </button>
            <span className="text-gray-500 self-center">
              Câu {currentQuestion + 1}/{questions.length}
            </span>
            <button
              className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition"
              onClick={() => {
                if (currentQuestion < questions.length - 1) {
                  setCurrentQuestion(currentQuestion + 1);
                } else if (currentQuestion === questions.length - 1) {
                  setCurrentQuestion(currentQuestion + 1);
                }
              }}
              disabled={false}
            >
              Tiếp theo
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Vui lòng lựa chọn giới tính của bạn</h2>
          <p className="mb-6 text-gray-600">Hình ảnh minh hoạ tính cách sẽ thay đổi tuỳ theo giới tính bạn chọn</p>

          <div className="flex justify-center gap-6 mb-8">
            <button
              className={`px-6 py-3 rounded-lg border-2 ${
                gender === 'male' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              } transition`}
              onClick={() => setGender('male')}
            >
              Nam
            </button>
            <button
              className={`px-6 py-3 rounded-lg border-2 ${
                gender === 'female' ? 'border-pink-500 bg-pink-50' : 'border-gray-200'
              } transition`}
              onClick={() => setGender('female')}
            >
              Nữ
            </button>
          </div>

          <button
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition disabled:opacity-50"
            onClick={handleSubmit}
            disabled={isSubmitting || !gender}
          >
            {isSubmitting ? 'Đang xử lý...' : 'Xem kết quả'}
          </button>
        </div>
      )}
    </div>
  </div>
</div>

  );
};

export default MITest;