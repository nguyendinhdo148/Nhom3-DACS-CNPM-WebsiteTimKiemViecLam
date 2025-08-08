import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faPen, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const handleCopyLink = () => {
  const url = "http://localhost:5173/tools/mbti/tinh-cach/istp";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Đã sao chép liên kết!");
    })
    .catch((err) => {
      console.error("Lỗi khi sao chép liên kết:", err);
    });
};
const ISTPPage = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Tổng quan" },
    { id: "strengths-weaknesses", title: "Điểm mạnh và điểm yếu" },
    { id: "relationship", title: "Mối quan hệ" },
    { id: "how-to-be-close", title: "Làm sao để thân thiết với ISTP" },
    { id: "career-path", title: "Con đường sự nghiệp" },
    { id: "workplace-habits", title: "Thói quen nơi công sở" },
    { id: "compare", title: "So sánh ISTP VỚI ISTJ, ESTP" },
    { id: "advice", title: "Lời khuyên dành cho ISTP" },
  ];

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="ISTP-page bg-gradient-to-b from-blue-50 to-purple-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumb */}

        {/* Header */}
        <div className="mbti-result-header bg-white rounded-xl shadow-md p-6 mb-8 relative">
          <Link 
              to="/tools/mbti"
              className="absolute top-4 left-4 inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-full transition-all"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Trang chủ MBTI</span>
            </Link>
          <div className="flex flex-col items-center gap-6">
            {/* Banner image with overlay text */}
            <div className="flex items-center gap-1 mb-1">
              <h1 className=" text-3xl font-bold from-blue-500 to-purple-600 text-white bg-gradient-to-r p-2 rounded-lg shadow-md">
                ISTP - Nhà kỹ thuật
              </h1>
            </div>
            <div className="relative w-full">
              <img
                src="/mbti_icons/istp1.webp"
                alt="ISTP - Nhà kỹ thuật"
                className="pointer w-full h-120 object-cover rounded-lg shadow "
              />
            </div>

            {/* Description */}
            <div className="text-lg text-gray-700 max-w-4xl text-center">
              ISTP là nhóm tính cách tôn thờ sự logic. Họ dành nhiều thời gian
              để quan sát và đánh giá mọi vật mọi việc dựa trên bằng chứng và lý
              lẽ, kể cả trong chuyện tình cảm. ISTP cũng là tuýp người thiên về
              trường phái “làm nhiều hơn nói”, có khả năng ứng phó với những
              tình huống bất ngờ và xử lý khủng hoảng một cách xuất sắc.
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 mt-4">
              <Link
                to="/tools/mbti/test"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all"
              >
                <span>Làm bài test</span>
                <FontAwesomeIcon icon={faPen} />
              </Link>

              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition-all cursor-pointer"
              >
                <span>Copy link</span>
                <FontAwesomeIcon icon={faLink} />
              </button>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mbti-content bg-white rounded-xl shadow-md overflow-hidden">
          {/* Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionChange(section.id)}
                  className={`cursor-pointer px-6 py-4 font-medium whitespace-nowrap  ${
                    activeSection === section.id
                      ? "text-pink-600 border-b-2 border-pink-600"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Section Content */}
          <div className="p-6 md:p-8">
            {/* Overview Section */}
            {activeSection === "overview" && (
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-amber-700 mb-4">
                    TỔNG QUAN TÍNH CÁCH ISTP
                  </h2>
                  <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
                </div>

                {/* Introduction */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-400">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    ISTP (Nhà kỹ thuật) là nhóm tính cách tôn thờ sự logic và tự
                    do. Với tư duy phân tích sắc bén và đôi bàn tay khéo léo, họ
                    được mệnh danh là "bậc thầy xử lý khủng hoảng". ISTP sống
                    theo chủ nghĩa hiện thực, luôn tò mò về cách vạn vật vận
                    hành và ưa thích hành động hơn lời nói.
                  </p>
                </div>

                {/* MBTI Breakdown */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-amber-700 mb-6 text-center">
                    Ý NGHĨA 4 CHỮ CÁI ISTP
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "● I - Hướng nội (Introverted)",
                        color: "bg-amber-100",
                        textColor: "text-amber-800",
                        content:
                          "ISTP tìm năng lượng từ thế giới nội tâm. Họ thích quan sát thế giới từ xa trước khi tham gia, khác với nhóm hướng ngoại (E) luôn nhiệt tình tương tác xã hội.",
                      },
                      {
                        title: "● S - Giác quan (Sensing)",
                        color: "bg-orange-100",
                        textColor: "text-orange-800",
                        content:
                          "ISTP tập trung vào thực tế cụ thể qua năm giác quan. Họ tin vào những gì có thể chứng minh được, khác với nhóm trực giác (N) thường đi tìm ý nghĩa ẩn sau sự việc.",
                      },
                      {
                        title: "● T - Lý trí (Thinking)",
                        color: "bg-red-100",
                        textColor: "text-red-800",
                        content:
                          "ISTP đưa ra quyết định dựa trên logic khách quan. Họ ưu tiên sự thật hơn cảm xúc, khác với nhóm cảm xúc (F) thường cân nhắc tác động đến con người.",
                      },
                      {
                        title: "● P - Linh hoạt (Perceiving)",
                        color: "bg-yellow-100",
                        textColor: "text-yellow-800",
                        content:
                          "ISTP thích sự tự do và ứng biến. Họ ghét bị gò bó bởi kế hoạch cứng nhắc, khác với nhóm nguyên tắc (J) luôn cần cấu trúc rõ ràng.",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`${item.color} p-5 rounded-lg transition-transform hover:scale-105`}
                      >
                        <h4
                          className={`font-bold ${item.textColor} mb-3 text-lg`}
                        >
                          {item.title}
                        </h4>
                        <p className="text-gray-700">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Traits */}
                <div className="space-y-8">
                  {[
                    {
                      title: "Thợ cơ khí bẩm sinh",
                      icon: "🔧",
                      content:
                        "ISTP có năng khiếu đặc biệt với máy móc và kỹ thuật. Họ thích tháo rời mọi thứ để hiểu nguyên lý hoạt động. Khả năng xử lý vấn đề thực tế của họ khiến ISTP trở thành 'cứu tinh' trong các tình huống khẩn cấp.",
                    },
                    {
                      title: "Tư duy logic sắt đá",
                      icon: "🧠",
                      content:
                        "ISTP đánh giá mọi việc qua lăng kính khách quan. Họ không để cảm xúc che mờ lý trí, luôn tìm kiếm giải pháp hiệu quả nhất thay vì giải pháp dễ chịu nhất.",
                    },
                    {
                      title: "Tâm hồn phiêu lưu",
                      icon: "🏍️",
                      content:
                        "ISTP bị thu hút bởi tốc độ và rủi ro. Họ thường là những tay đua cừ khôi, vận động viên mạo hiểm hoặc người yêu thích các môn thể thao adrenaline.",
                    },
                    {
                      title: "Phong thái điềm tĩnh",
                      icon: "😐",
                      content:
                        "Dù trong tình huống căng thẳng nhất, ISTP vẫn giữ vẻ ngoài bình tĩnh. Họ ít khi bộc lộ cảm xúc và thường giải quyết vấn đề trong im lặng.",
                    },
                  ].map((section, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-300"
                    >
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3">{section.icon}</span>
                        <h3 className="text-xl font-bold text-gray-800">
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 pl-10">{section.content}</p>
                    </div>
                  ))}
                </div>

                {/* Strengths & Weaknesses */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-amber-700 mb-4">
                      ĐIỂM MẠNH NỔI BẬT
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">✓</span>
                        <span>Kỹ năng xử lý khủng hoảng xuất sắc</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">✓</span>
                        <span>Tư duy logic và khách quan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">✓</span>
                        <span>Khéo léo trong các công việc thủ công</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">✓</span>
                        <span>Bình tĩnh dưới áp lực</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">✓</span>
                        <span>Khả năng thích ứng nhanh</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-orange-700 mb-4">
                      ĐIỂM YẾU CẦN LƯU Ý
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">✗</span>
                        <span>Khó thể hiện cảm xúc</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">✗</span>
                        <span>Dễ chán với thói quen hằng ngày</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">✗</span>
                        <span>Xu hướng chống đối quy tắc</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">✗</span>
                        <span>Ít quan tâm đến kế hoạch dài hạn</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">✗</span>
                        <span>Đôi khi thiếu nhạy cảm với người khác</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Career & Relationships */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-amber-700 mb-4">
                      ISTP TRONG CÔNG VIỆC
                    </h3>
                    <p className="text-gray-700 mb-4">
                      ISTP tỏa sáng trong các lĩnh vực đòi hỏi kỹ năng thực hành
                      và xử lý tình huống. Họ là những kỹ thuật viên xuất sắc,
                      thợ cơ khí tài ba hoặc chuyên gia cứu hộ. Môi trường lý
                      tưởng của ISTP cần có:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Tự do hành động và ra quyết định</li>
                      <li>Cơ hội giải quyết vấn đề thực tế</li>
                      <li>Ít ràng buộc về thủ tục hành chính</li>
                      <li>Công việc mang tính thử thách thể chất</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-orange-700 mb-4">
                      ISTP TRONG QUAN HỆ
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Trong tình yêu và tình bạn, ISTP thể hiện tình cảm qua
                      hành động hơn lời nói. Họ đánh giá cao sự độc lập và không
                      gian riêng. Đặc điểm nổi bật:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Ít nói nhưng luôn sẵn sàng giúp đỡ khi cần</li>
                      <li>Thích các hoạt động thể chất cùng nhau</li>
                      <li>Không thích bị kiểm soát hoặc ràng buộc</li>
                      <li>Cần thời gian riêng để tái tạo năng lượng</li>
                    </ul>
                  </div>
                </div>

                {/* Famous People */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold text-center text-amber-700 mb-6">
                    ISTP NỔI TIẾNG
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {[
                      { name: "Bruce Lee", role: "Võ sư, diễn viên" },
                      { name: "Tom Cruise", role: "Diễn viên" },
                      { name: "Scarlett Johansson", role: "Diễn viên" },
                      { name: "Christian Bale", role: "Diễn viên" },
                      { name: "Eminem", role: "Rapper" },
                      { name: "Snoop Dogg", role: "Rapper" },
                      { name: "Demi Moore", role: "Diễn viên" },
                      { name: "Venus Williams", role: "Vận động viên tennis" },
                    ].map((person, index) => (
                      <div
                        key={index}
                        className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="h-12 w-12 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full mx-auto mb-2 flex items-center justify-center text-amber-700 font-bold">
                          {person.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <h4 className="font-bold text-gray-800 text-sm">
                          {person.name}
                        </h4>
                        <p className="text-xs text-gray-600">{person.role}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final Thought */}
                <div className="bg-amber-100 p-6 rounded-lg mt-8 text-center">
                  <p className="text-amber-800 italic font-medium">
                    "ISTP là những người giải quyết vấn đề thực tế nhất. Với trí
                    thông minh sắc bén và đôi bàn tay khéo léo, họ có thể sửa
                    chữa mọi thứ - từ máy móc đến tình huống khó khăn. Dù ít
                    nói, ISTP luôn chứng minh giá trị của mình qua hành động cụ
                    thể."
                  </p>
                </div>
              </div>
            )}

            {/* Strengths & Weaknesses Section */}
            {activeSection === "strengths-weaknesses" && (
              <div className="space-y-8">
                {/* Main Header */}
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    ĐIỂM MẠNH VÀ ĐIỂM YẾU CỦA{" "}
                    <span className="text-indigo-600">
                      NHÓM TÍNH CÁCH ISTP (NHÀ KỸ THUẬT)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    ISTP - Nhóm tính cách "Nhà kỹ thuật" (5% dân số) với khả
                    năng giải quyết vấn đề thực tế và tư duy logic mạnh mẽ
                  </p>
                </div>

                {/* Strengths Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-green-600 flex items-center">
                      <svg
                        className="w-6 h-6 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      ĐIỂM MẠNH ĐẶC TRƯNG
                    </h3>
                    <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 ml-4"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Strength 1 */}
                    <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-green-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Lạc quan và tràn đầy năng lượng
                          </h4>
                          <p className="text-gray-700">
                            ISTP luôn nỗ lực trong mọi nhiệm vụ với năng lượng
                            tích cực. Họ giải quyết vấn đề một cách trôi chảy,
                            có bài bản và hiếm khi bị căng thẳng.
                          </p>
                        </div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg mt-3">
                        <p className="text-sm text-green-700 italic">
                          "ISTP được mệnh danh là 'người giải quyết vấn đề' bẩm
                          sinh trong hệ thống MBTI"
                        </p>
                      </div>
                    </div>

                    {/* Strength 2 */}
                    <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-green-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Sáng tạo và thực tế
                          </h4>
                          <p className="text-gray-700">
                            ISTP bộc lộ sức sáng tạo đặc biệt trong lĩnh vực kỹ
                            thuật. Họ có nhiều ý tưởng và muốn trực tiếp thực
                            hiện công việc một cách gọn gàng, hiệu quả.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          Thực hành
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          Kỹ thuật
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          Sáng tạo
                        </span>
                      </div>
                    </div>

                    {/* Strength 3 */}
                    <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-green-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Linh hoạt và thích nghi
                          </h4>
                          <p className="text-gray-700">
                            ISTP kết hợp tư duy logic với khả năng thích nghi để
                            xử lý mọi tình huống phát sinh một cách dễ dàng và
                            hiệu quả.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-green-500 rounded-full"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-600 mt-1">
                          <span>Khả năng thích ứng</span>
                          <span>85% ISTP xử lý tốt các tình huống bất ngờ</span>
                        </div>
                      </div>
                    </div>

                    {/* Strength 4 */}
                    <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-green-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Tập trung cao độ
                          </h4>
                          <p className="text-gray-700">
                            ISTP có khả năng tập trung vượt trội, đặc biệt khi
                            làm việc với các vấn đề kỹ thuật. Họ kiên trì theo
                            đuổi đến khi đạt kết quả mong muốn.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Biểu hiện:</span>
                          Làm việc kiên trì, không ngại khó, tập trung vào giải
                          pháp thực tế
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Weaknesses Section */}
                <div className="mt-12">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-red-600 flex items-center">
                      <svg
                        className="w-6 h-6 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      ĐIỂM YẾU CẦN LƯU Ý
                    </h3>
                    <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-red-400 to-transparent flex-1 ml-4"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Weakness 1 */}
                    <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-red-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Bướng bỉnh và khó thay đổi
                          </h4>
                          <p className="text-gray-700">
                            ISTP khó chấp nhận thay đổi thói quen hay quan điểm
                            cá nhân. Họ thường phản ứng tiêu cực khi ai đó cố
                            gắng thay đổi cách làm của họ.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Gợi ý:</span>
                          Cởi mở hơn với các quan điểm khác, thử nghiệm phương
                          pháp mới ở quy mô nhỏ
                        </div>
                      </div>
                    </div>

                    {/* Weakness 2 */}
                    <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-red-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Thiếu tinh tế trong giao tiếp
                          </h4>
                          <p className="text-gray-700">
                            ISTP thường đặt logic lên trên cảm xúc. Ngay cả khi
                            cố gắng thể hiện sự đồng cảm, họ vẫn có xu hướng đưa
                            ra quyết định dựa trên lý trí thay vì tình cảm.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 bg-red-50 p-3 rounded-lg">
                        <p className="text-sm text-red-700 italic">
                          "ISTP cần học cách cân bằng giữa tư duy logic và sự
                          nhạy cảm trong các mối quan hệ"
                        </p>
                      </div>
                    </div>

                    {/* Weakness 3 */}
                    <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-red-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Cả thèm chóng chán
                          </h4>
                          <p className="text-gray-700">
                            ISTP dễ bị thu hút bởi cái mới nhưng cũng nhanh
                            chóng mất hứng thú. Một khi đã hiểu rõ vấn đề, họ
                            thường bỏ dở để tìm kiếm thử thách mới.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Cải thiện:</span>
                          Đặt mục tiêu dài hạn, tìm cách duy trì hứng thú với
                          công việc hiện tại
                        </div>
                      </div>
                    </div>

                    {/* Weakness 4 */}
                    <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-red-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Khó cam kết lâu dài
                          </h4>
                          <p className="text-gray-700">
                            ISTP không thích bị ràng buộc. Họ muốn giải quyết
                            mọi việc ngay lập tức và cảm thấy ngột ngạt khi phải
                            duy trì cam kết dài hạn, đặc biệt trong các mối quan
                            hệ.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Giải pháp:</span>
                          Học cách xây dựng cam kết từng bước, hiểu giá trị của
                          sự kiên trì
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Balance Section */}
                <div className="mt-12 bg-gradient-to-r from-blue-500 to-teal-500 p-8 rounded-xl text-white">
                  <div className="max-w-3xl mx-auto text-center">
                    <svg
                      className="w-12 h-12 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      CÂN BẰNG CUỘC SỐNG ISTP
                    </h3>
                    <p className="mb-4 text-blue-100">
                      Sức mạnh thực sự của ISTP nằm ở khả năng kết hợp tư duy
                      logic với sự linh hoạt. Khi học được cách cân bằng giữa
                      tính độc lập và cam kết, giữa đam mê mạo hiểm và trách
                      nhiệm, họ có thể phát huy tối đa tiềm năng của mình.
                    </p>
                    <div className="bg-opacity-20 p-4 rounded-lg inline-block">
                      <p className="font-medium">
                        "Một ISTP trưởng thành hiểu rằng không phải mọi thứ đều
                        cần phải giải quyết ngay lập tức. Đôi khi, kiên nhẫn và
                        cam kết lâu dài mới mang lại kết quả tốt nhất."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Relationship Section */}
            {activeSection === "relationship" && (
              <div className="space-y-10">
                {/* Header Section */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-amber-700 mb-3">
                    MỐI QUAN HỆ CỦA ISTP
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
                  <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    ISTP là những người bạn thú vị và người yêu đầy bất ngờ. Họ
                    sống trọn từng khoảnh khắc hiện tại với phương châm "vạn vật
                    đều có thể thay đổi". Trong các mối quan hệ, ISTP mang đến
                    sự tự do, phiêu lưu và những trải nghiệm thực tế đáng nhớ.
                  </p>
                </div>

                {/* General Relationship Traits */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <svg
                          className="w-6 h-6 text-amber-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Đặc điểm nổi bật
                      </h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        <span>Thích tự do và không bị ràng buộc</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        <span>Thể hiện tình cảm qua hành động hơn lời nói</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        <span>
                          Luôn sống trong hiện tại, ít lo lắng về tương lai
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        <span>
                          Cần nhiều không gian riêng để tái tạo năng lượng
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-orange-100 p-3 rounded-full mr-4">
                        <svg
                          className="w-6 h-6 text-orange-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Phù hợp nhất với
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { type: "ESTP", desc: "Cùng đam mê phiêu lưu" },
                        { type: "ISTJ", desc: "Bổ sung sự ổn định" },
                        { type: "ISFP", desc: "Hiểu nhu cầu tự do" },
                        { type: "ENTP", desc: "Kích thích tư duy" },
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <span className="font-bold text-amber-600">
                            {item.type}
                          </span>
                          <p className="text-sm text-gray-600 mt-1">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Love Section */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl mb-12">
                  <div className="flex flex-col md:flex-row items-center mb-8">
                    <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                      <div className="bg-white p-4 rounded-full shadow-lg">
                        <svg
                          className="w-16 h-16 text-amber-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                      <h3 className="text-2xl font-bold text-amber-700 mb-4">
                        ISTP TRONG TÌNH YÊU
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Tình yêu của ISTP như một bản tango với những nốt trầm
                        bổng đầy thú vị. Họ lạnh lùng nhưng đầy nhiệt huyết,
                        nghiêm túc nhưng cũng rất biết tận hưởng. ISTP không tin
                        vào sự ép buộc, chỉ khi được tự do họ mới có thể yêu hết
                        mình.
                      </p>
                      <div className="bg-white bg-opacity-70 p-4 rounded-lg border-l-4 border-amber-400 mb-4">
                        <p className="italic text-gray-700">
                          "ISTP yêu theo cách riêng của họ - không lời hoa mỹ,
                          không hứa hẹn xa vời, chỉ có những hành động chân
                          thành và những trải nghiệm đáng nhớ cùng nhau."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Cách thể hiện tình cảm",
                        icon: "💖",
                        content:
                          "ISTP thể hiện tình yêu qua những hành động thiết thực như sửa chữa đồ đạc, dẫn bạn đi chơi những nơi thú vị, hoặc chia sẻ những đam mê chung. Họ ít khi nói lời yêu thương nhưng luôn chứng minh bằng việc làm cụ thể.",
                      },
                      {
                        title: "Thách thức",
                        icon: "⚠️",
                        content:
                          "ISTP khó chia sẻ cảm xúc sâu kín và thường cần nhiều không gian riêng. Đối tác có thể cảm thấy bị bỏ rơi nếu không hiểu được nhu cầu này của họ.",
                      },
                      {
                        title: "Lời khuyên",
                        icon: "💡",
                        content:
                          "ISTP nên học cách bày tỏ cảm xúc nhiều hơn, dù chỉ là những cách đơn giản. Đối tác của ISTP nên tôn trọng không gian riêng và cùng họ trải nghiệm những hoạt động thực tế.",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white p-5 rounded-lg shadow-sm flex items-start"
                      >
                        <span className="text-2xl mr-4">{item.icon}</span>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-700">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Friendship Section */}
                <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
                  <h3 className="text-2xl font-bold text-orange-700 mb-6 flex items-center">
                    <svg
                      className="w-8 h-8 mr-3 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    ISTP TRONG TÌNH BẠN
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-start mb-6">
                        <div className="bg-orange-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Bạn bè đa dạng
                          </h4>
                          <p className="text-gray-700">
                            ISTP có vòng bạn bè rộng nhờ nhiều đam mê và sở
                            thích. Họ dễ kết nối với những người cùng chia sẻ
                            hoạt động thực tế như thể thao, câu cá hay sửa chữa
                            đồ đạc.
                          </p>
                        </div>
                      </div>

                      <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-400 mb-6">
                        <p className="italic text-gray-700">
                          "ISTP không phải người bạn hay tâm sự nhất, nhưng chắc
                          chắn là người bạn thú vị nhất - luôn biết cách biến
                          một ngày bình thường thành phiêu lưu đáng nhớ."
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start mb-6">
                        <div className="bg-amber-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-amber-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Khó khăn trong tình bạn
                          </h4>
                          <p className="text-gray-700">
                            ISTP đôi khi thay đổi tâm trạng thất thường và cần
                            nhiều thời gian ở một mình. Bạn bè có thể cảm thấy
                            khó hiểu khi ISTP đột ngột biến mất mà không lý do.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-yellow-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Tình bạn sâu sắc
                          </h4>
                          <p className="text-gray-700">
                            Để trở thành bạn thân của ISTP không dễ, nhưng một
                            khi đã thân, đó sẽ là mối quan hệ chân thành và bền
                            chặt. ISTP trung thành với bạn bè theo cách riêng
                            của họ.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Parenting Section */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-amber-700 mb-6 flex items-center">
                    <svg
                      className="w-8 h-8 mr-3 text-amber-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    ISTP KHI LÀM CHA MẸ
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {[
                        {
                          title: "Phong cách nuôi dạy",
                          content:
                            "ISTP là những phụ huynh thoải mái nhất. Họ cho con cái nhiều tự do để khám phá thế giới theo cách riêng. Thay vì ép buộc, họ khuyến khích con tự học qua trải nghiệm thực tế.",
                        },
                        {
                          title: "Ưu điểm",
                          content:
                            "ISTP dạy con tính tự lập và kỹ năng thực tế. Họ là những người bạn đồng hành tuyệt vời trong các hoạt động thể chất và sáng tạo. Con cái sẽ học được cách giải quyết vấn đề từ họ.",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-white p-5 rounded-lg shadow-sm"
                        >
                          <h4 className="font-bold text-gray-800 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-700">{item.content}</p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Thách thức
                        </h4>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            <span>
                              Khó khăn trong việc thể hiện tình cảm với con cái
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            <span>
                              Đôi khi quá thoải mái trong việc đặt ra giới hạn
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            <span>
                              Ít quan tâm đến các vấn đề học thuật của con
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-amber-100 p-5 rounded-lg border-l-4 border-amber-500">
                        <p className="italic text-gray-700">
                          "Dù không phải mẫu phụ huynh tình cảm nhất, ISTP dạy
                          con những bài học thực tế vô giá. Họ giúp trẻ trở nên
                          tự tin, độc lập và can đảm đối mặt với thử thách."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Quote */}
                <div className="text-center mt-12">
                  <div className="bg-amber-100 p-6 rounded-xl inline-block max-w-2xl">
                    <svg
                      className="w-10 h-10 text-amber-500 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xl font-medium text-amber-800 mb-2">
                      "ISTP mang đến sự tự do và phiêu lưu trong mọi mối quan
                      hệ. Họ yêu bằng cách chia sẻ trải nghiệm, tôn trọng không
                      gian riêng và luôn sống trọn vẹn từng khoảnh khắc. Để hiểu
                      ISTP, hãy chấp nhận họ là chính mình và cùng họ khám phá
                      thế giới thực tế đầy thú vị."
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* How to Be Close Section */}
            {activeSection === "how-to-be-close" && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Main Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    LÀM SAO ĐỂ THÂN THIẾT VỚI{" "}
                    <span className="text-blue-600">NHÀ KỸ THUẬT (ISTP)</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    ISTP - Nhóm tính cách "Thợ thủ công" (5% dân số) với tư duy
                    logic sắc bén và phong cách sống tự do
                  </p>
                </div>

                {/* Core Principles */}
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <div className="bg-white p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto shadow-sm">
                        <svg
                          className="w-10 h-10 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-blue-800 mb-3">
                        Nguyên tắc vàng khi tiếp cận ISTP
                      </h3>
                      <p className="text-gray-700">
                        ISTP đánh giá cao sự độc lập, trung thực và không thích
                        bị ràng buộc. Họ thích những người tự tin, có cá tính
                        riêng và không quá cảm xúc. Để xây dựng mối quan hệ với
                        ISTP, điều quan trọng nhất là:
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connection Strategies */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
                    Chiến lược kết nối hiệu quả
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Strategy 1 */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-blue-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Thể hiện sự thú vị
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Có sở thích riêng và cá tính rõ ràng</li>
                            <li>Am hiểu sâu về một lĩnh vực nào đó</li>
                            <li>Chia sẻ những hoạt động khám phá mới mẻ</li>
                            <li>Luôn mang đến những trải nghiệm mới lạ</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Strategy 2 */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-blue-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Luôn trung thực
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Thẳng thắn trong giao tiếp</li>
                            <li>Không giả tạo hay đóng kịch</li>
                            <li>Giữ lời hứa và đáng tin cậy</li>
                            <li>Chấp nhận con người thật của nhau</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Strategy 3 */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-blue-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Mang năng lượng tích cực
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Luôn lạc quan và vui vẻ</li>
                            <li>Cùng tham gia các hoạt động sáng tạo</li>
                            <li>Không than vãn hay tiêu cực</li>
                            <li>Tạo không gian thoải mái khi ở bên nhau</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Strategy 4 */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-blue-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Tôn trọng không gian riêng
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Không kiểm soát hay ghen tuông thái quá</li>
                            <li>Cho họ thời gian riêng khi cần</li>
                            <li>Không ép buộc họ vào các khuôn khổ</li>
                            <li>Hiểu rằng họ cần tự do để phát triển</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Practical Tips */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
                    Hướng dẫn tương tác hàng ngày
                  </h3>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Nên làm
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Tự tin vào bản thân và ổn định về cảm xúc
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Cùng tham gia các hoạt động thực tế, thể thao
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Chấp nhận phong cách sống tự do của họ
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Thể hiện sự đánh giá cao bằng hành động thực tế
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 text-red-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          Nên tránh
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Quá nhạy cảm hoặc đòi hỏi sự quan tâm liên tục
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Ép họ vào các khuôn khổ hoặc nghi thức xã hội
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Đặt quá nhiều câu hỏi về cảm xúc cá nhân
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Quá chú trọng vào các ngày kỷ niệm
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Advice */}
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    Lời khuyên từ chuyên gia
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Xây dựng mối quan hệ với ISTP cần sự kiên nhẫn và tôn trọng
                    không gian cá nhân của họ. Một khi đã chấp nhận bạn, họ sẽ
                    là người bạn trung thành, luôn sẵn sàng giúp đỡ bằng những
                    hành động thực tế. Hãy trân trọng sự độc lập và tư duy logic
                    mà họ mang đến cho cuộc sống của bạn.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="italic text-gray-700">
                      "Tình bạn với ISTP không cần nhiều lời nói hoa mỹ. Họ thể
                      hiện sự quan tâm qua hành động cụ thể và sẵn sàng giúp đỡ
                      khi bạn thực sự cần, dù không phô trương."
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Career Path Section */}
            {activeSection === "career-path" && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Main Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    CON ĐƯỜNG SỰ NGHIỆP CỦA{" "}
                    <span className="text-amber-600">NHÀ KỸ THUẬT (ISTP)</span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    ISTP - Những người giải quyết vấn đề thực tế với đôi tay
                    khéo léo và tư duy logic sắc bén
                  </p>
                </div>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-8 rounded-lg mb-10 text-white">
                  <div className="max-w-3xl mx-auto text-center">
                    <svg
                      className="w-12 h-12 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      "ISTP xây dựng sự nghiệp bằng kỹ năng thực hành và khả
                      năng ứng biến"
                    </h3>
                    <p className="text-amber-100">
                      Những nhà kỹ thuật này luôn tìm kiếm công việc cho phép họ
                      tự do hành động và giải quyết vấn đề thực tế bằng sự khéo
                      léo và tư duy logic
                    </p>
                  </div>
                </div>

                {/* Career Journey */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
                    Hành trình phát triển nghề nghiệp
                  </h3>

                  <div className="space-y-8">
                    {/* Stage 1 */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="bg-amber-100 text-amber-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          1
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Giai đoạn khởi đầu: Thực hành và trải nghiệm
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Khi mới bước vào sự nghiệp, ISTP tập trung vào việc
                          học hỏi qua thực hành. Họ xuất sắc trong các vị trí kỹ
                          thuật, nơi có thể phát huy khả năng quan sát và xử lý
                          vấn đề thực tế.
                        </p>
                        <div className="bg-amber-50 p-4 rounded-lg">
                          <p className="italic text-gray-700">
                            "ISTP cần môi trường làm việc linh hoạt để phát
                            triển. Họ học nhanh qua trải nghiệm thực tế hơn là
                            lý thuyết suông"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stage 2 */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="bg-amber-100 text-amber-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          2
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Giai đoạn bứt phá: Chuyên gia xử lý khủng hoảng
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Sau khi tích lũy kinh nghiệm, ISTP trở thành người
                          giải quyết vấn đề xuất sắc. Họ được tin tưởng giao
                          những nhiệm vụ khó nhờ khả năng giữ bình tĩnh và tìm
                          giải pháp thực tế dưới áp lực.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">
                            Xử lý khủng hoảng
                          </span>
                          <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">
                            Kỹ năng kỹ thuật
                          </span>
                          <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">
                            Ứng biến linh hoạt
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stage 3 */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="bg-amber-100 text-amber-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          3
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Giai đoạn chín muồi: Lãnh đạo thực chiến
                        </h4>
                        <p className="text-gray-700">
                          Ở đỉnh cao sự nghiệp, ISTP trở thành những nhà lãnh
                          đạo thực tế. Họ dẫn dắt đội nhóm bằng kinh nghiệm thực
                          tiễn và tạo môi trường làm việc tự do, sáng tạo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career Strengths */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
                    Thế mạnh nghề nghiệp nổi bật
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-start mb-3">
                        <div className="bg-amber-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-amber-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Giải quyết vấn đề thực tế
                          </h4>
                          <p className="text-gray-700">
                            Khả năng phân tích tình huống và đưa ra giải pháp
                            thiết thực, hiệu quả ngay lập tức.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-start mb-3">
                        <div className="bg-amber-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-amber-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Kỹ năng kỹ thuật xuất sắc
                          </h4>
                          <p className="text-gray-700">
                            Khả năng thao tác với máy móc, công cụ và hệ thống
                            kỹ thuật một cách thành thạo.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-start mb-3">
                        <div className="bg-amber-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-amber-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Bình tĩnh dưới áp lực
                          </h4>
                          <p className="text-gray-700">
                            Giữ vững lý trí và tập trung cao độ trong các tình
                            huống khẩn cấp, căng thẳng.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-start mb-3">
                        <div className="bg-amber-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-amber-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Linh hoạt và thích ứng nhanh
                          </h4>
                          <p className="text-gray-700">
                            Dễ dàng thích nghi với thay đổi và tìm ra cách làm
                            mới hiệu quả hơn.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ideal Career Paths */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
                    Ngành nghề phù hợp
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Column 1 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-amber-100 p-3 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-amber-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-amber-700">
                          Kỹ thuật & Công nghệ
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span> Kỹ sư
                          cơ khí
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span> Kỹ
                          thuật viên IT
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span> Lập
                          trình viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span> Kỹ sư
                          điện tử
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-amber-100 p-3 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-amber-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-amber-700">
                          An ninh & Cứu hộ
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span> Cảnh
                          sát/Thám tử
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span> Lính
                          cứu hỏa
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span> Nhân
                          viên cứu hộ
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span> Chuyên
                          gia pháp y
                        </li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-amber-100 p-3 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-amber-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-amber-700">
                          Sáng tạo & Thể thao
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span> Thiết
                          kế đồ họa
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span> Kiến
                          trúc sư
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span> Vận
                          động viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span> Phi
                          công
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Career Warnings */}
                <div className="mb-12 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-amber-700 mb-3">
                    Cảnh báo nghề nghiệp
                  </h3>
                  <p className="text-gray-700 mb-4">
                    ISTP nên tránh những môi trường công việc:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Có cấu trúc cứng nhắc và quy trình quan liêu</li>
                    <li>Đòi hỏi phải làm việc lặp đi lặp lại theo quy trình</li>
                    <li>Yêu cầu nhiều công việc giấy tờ hành chính</li>
                    <li>Thiếu sự tự do và linh hoạt trong cách làm việc</li>
                  </ul>
                </div>

                {/* Career Development */}
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-700 mb-4">
                    Lộ trình phát triển
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-500 font-bold">
                        1.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn thực hành (0-5 năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Phát triển kỹ năng kỹ thuật, học hỏi qua trải nghiệm
                          thực tế
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-500 font-bold">
                        2.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn chuyên gia (5-10 năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Trở thành chuyên gia trong lĩnh vực, xử lý các vấn đề
                          phức tạp
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-amber-500 font-bold">
                        3.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn tự do (10+ năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Làm chủ công việc, có thể chọn làm freelance hoặc khởi
                          nghiệp
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Workplace Habits Section */}
            {activeSection === "workplace-habits" && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Main Header */}
                <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-100 pb-4">
                  THÓI QUEN NƠI CÔNG SỞ CỦA ISTP
                </h2>

                {/* Introduction */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    ISTP tỏa sáng trong môi trường làm việc cho phép họ tự do
                    sáng tạo và giải quyết vấn đề thực tế. Với tư duy logic sắc
                    bén và khả năng ứng biến nhanh, họ xuất sắc trong các vai
                    trò đòi hỏi kỹ thuật, phân tích và xử lý khủng hoảng.
                  </p>
                </div>

                {/* As Employees Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-blue-600">
                      ISTP khi là nhân viên
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Điểm mạnh nổi bật
                      </h4>
                      <p className="text-gray-700">
                        Làm việc độc lập, hiệu quả cao khi có không gian riêng.
                        Xử lý công việc nhanh chóng và thực tế. Đặc biệt giỏi
                        trong các tình huống khẩn cấp cần ứng biến nhanh.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Thách thức
                      </h4>
                      <p className="text-gray-700">
                        Khó chịu với các quy trình cứng nhắc. Dễ chán nản với
                        công việc lặp đi lặp lại. Có thể phản ứng tiêu cực khi
                        bị ép vào khuôn khổ không phù hợp.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="italic text-gray-700">
                      "ISTP là nhân viên 'độc lập' nhưng cực kỳ hiệu quả. Họ
                      không cần giám sát chặt nhưng luôn hoàn thành công việc
                      với chất lượng cao bằng cách riêng của mình."
                    </p>
                  </div>
                </div>

                {/* As Colleagues Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-blue-600">
                      ISTP khi là đồng nghiệp
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Giá trị mang lại
                      </h4>
                      <p className="text-gray-700">
                        Luôn sẵn sàng giúp đỡ khi có vấn đề kỹ thuật. Mang lại
                        góc nhìn thực tế và giải pháp thiết thực. Khiếu hài hước
                        giúp xoa dịu căng thẳng nhóm.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Điều cần lưu ý
                      </h4>
                      <p className="text-gray-700">
                        Có thể quá thẳng thắn, đôi khi thiếu tế nhị. Không thích
                        các nghi thức xã giao không cần thiết. Cần không gian
                        riêng và ít khi chia sẻ cảm xúc.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 mt-1 mr-3 text-blue-500 text-xl">
                      🔧
                    </div>
                    <div>
                      <p className="text-gray-700">
                        "Đồng nghiệp ISTP giống như 'bảo trì viên' của nhóm -
                        luôn có giải pháp thực tế cho mọi vấn đề kỹ thuật và giữ
                        cho mọi thứ vận hành trơn tru."
                      </p>
                    </div>
                  </div>
                </div>

                {/* As Managers Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-blue-600">
                      ISTP khi làm quản lý
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Phong cách lãnh đạo
                      </h4>
                      <p className="text-gray-700">
                        Quản lý bằng kết quả thay vì quy trình. Tạo không gian
                        tự do cho nhân viên phát triển. Đưa ra giải pháp thực tế
                        khi có vấn đề phát sinh.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Ưu tiên
                      </h4>
                      <p className="text-gray-700">
                        Đánh giá cao nhân viên độc lập, tự chủ. Chú trọng hiệu
                        quả công việc hơn nghi thức. Ít can thiệp vào cách làm
                        việc cá nhân của nhân viên.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3 text-blue-500">💡</div>
                      <div>
                        <p className="text-gray-700 font-medium">
                          Lời khuyên cho lãnh đạo ISTP: Đừng ngại giao tiếp
                          nhiều hơn với nhân viên. Sự rõ ràng trong mong đợi sẽ
                          giúp đội nhóm hiểu và hỗ trợ bạn tốt hơn.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career Path Section */}
                <div className="mt-10 bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-3">
                    Con đường sự nghiệp lý tưởng
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-r from-violet-600 to-purple-500  bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Kỹ thuật & Công nghệ
                      </h4>
                      <p className="text-sm">
                        Kỹ sư, Lập trình viên, Kỹ thuật viên, Bảo trì hệ thống
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-violet-600 to-purple-500 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Thể thao & Mạo hiểm
                      </h4>
                      <p className="text-sm">
                        Vận động viên, Huấn luyện viên, Hướng dẫn viên du lịch
                        mạo hiểm
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-violet-600 to-purple-500 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">Ứng phó khẩn cấp</h4>
                      <p className="text-sm">
                        Cứu hộ, Cảnh sát, Lính cứu hỏa, Kỹ thuật viên y tế khẩn
                        cấp
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-blue-100 text-sm">
                    <p>
                      ISTP phát triển mạnh trong môi trường cho phép họ vận dụng
                      kỹ năng thực tế, giải quyết vấn đề và có sự linh hoạt
                      trong công việc.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeSection === "compare" && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Main Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    SO SÁNH{" "}
                    <span className="text-amber-600">NHÀ KỸ THUẬT (ISTP)</span>{" "}
                    VỚI
                    <span className="text-blue-600">
                      {" "}
                      NGƯỜI TRÁCH NHIỆM (ISTJ)
                    </span>{" "}
                    VÀ
                    <span className="text-red-500"> NGƯỜI THỰC THI (ESTP)</span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Phân tích sâu về 3 nhóm tính cách thuộc nhóm "Thực tế - Lý
                    trí" - những người sống bằng logic và giác quan
                  </p>
                </div>

                {/* Core Similarities */}
                <div className="bg-gray-50 p-6 rounded-lg mb-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <svg
                      className="w-6 h-6 text-amber-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Điểm chung cốt lõi của bộ ba Thực tế - Lý trí (Ti/Te +
                    Se/Si)
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-amber-100 text-amber-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          T
                        </div>
                        <h4 className="font-bold text-gray-800">
                          Quyết định bằng lý trí
                        </h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Cả ba đều đưa ra quyết định dựa trên logic và phân tích
                        khách quan
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-amber-100 text-amber-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          S
                        </div>
                        <h4 className="font-bold text-gray-800">Giác quan</h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Tập trung vào thực tế cụ thể qua những gì có thể quan
                        sát được
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-amber-100 text-amber-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          🛠
                        </div>
                        <h4 className="font-bold text-gray-800">
                          Thiên hướng thực hành
                        </h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Ưu tiên giải pháp thiết thực và có tính ứng dụng cao
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pair Comparisons */}
                <div className="space-y-10">
                  {/* ISTP vs ISTJ */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-amber-500 to-blue-600 w-2 h-10 mr-3 rounded-full"></div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        <span className="text-amber-600">ISTP</span> vs{" "}
                        <span className="text-blue-600">ISTJ</span>:
                        <span className="text-sm font-normal ml-2">
                          Nhà kỹ thuật linh hoạt vs Người tuân thủ nguyên tắc
                        </span>
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 text-amber-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                          Tương đồng chính
                        </h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Đều là người hướng nội và sống thực tế</li>
                          <li>Có khả năng phân tích logic mạnh mẽ</li>
                          <li>Thích làm việc độc lập</li>
                          <li>Tin tưởng vào những gì có thể kiểm chứng</li>
                          <li>Không dễ bị chi phối bởi cảm xúc</li>
                        </ul>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 text-blue-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          Khác biệt then chốt
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Cách tiếp cận công việc
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ISTP (P) thích ứng biến linh hoạt, ISTJ (J) tuân
                              thủ nghiêm ngặt quy trình
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Thái độ với quy tắc
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ISTP thường nghi ngờ quy tắc, ISTJ tôn trọng và
                              duy trì truyền thống
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Phong cách giải quyết vấn đề
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ISTP sáng tạo và thực nghiệm, ISTJ hệ thống và có
                              phương pháp
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <p className="italic text-gray-700">
                        "ISTP như một thợ cơ khí tài ba có thể sửa chữa mọi thứ
                        theo cách riêng, ISTJ như một kỹ sư tuân thủ chính xác
                        từng bước trong sổ tay hướng dẫn. Cả hai đều giỏi nhưng
                        với triết lý làm việc khác biệt."
                      </p>
                    </div>
                  </div>

                  {/* ISTP vs ESTP */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-amber-500 to-red-500 w-2 h-10 mr-3 rounded-full"></div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        <span className="text-amber-600">ISTP</span> vs{" "}
                        <span className="text-red-500">ESTP</span>:
                        <span className="text-sm font-normal ml-2">
                          Nhà kỹ thuật trầm lắng vs Người thực thi năng động
                        </span>
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 text-amber-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                          Tương đồng chính
                        </h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>
                            Đều sống trong hiện tại và thích trải nghiệm mới
                          </li>
                          <li>Có khả năng xử lý khủng hoảng xuất sắc</li>
                          <li>Thích các hoạt động thể chất và mạo hiểm</li>
                          <li>Học hỏi tốt nhất qua thực hành</li>
                          <li>Ghét sự ràng buộc và quy tắc cứng nhắc</li>
                        </ul>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 text-red-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          Khác biệt then chốt
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Hướng năng lượng
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ISTP (I) cần thời gian một mình, ESTP (E) được
                              tiếp năng lượng từ giao tiếp xã hội
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Phong cách giao tiếp
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ISTP ít nói và quan sát, ESTP hướng ngoại và thích
                              làm trung tâm
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Cách tiếp cận rủi ro
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ISTP cân nhắc kỹ hơn, ESTP sẵn sàng lao vào thử
                              thách ngay lập tức
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <p className="italic text-gray-700">
                        "ISTP như một tay đua tập trung cao độ vào đường đua,
                        ESTP như một ngôi sao biểu diễn mô tô đầy nhiệt huyết.
                        Cả hai đều giỏi kỹ năng nhưng với phong cách thể hiện
                        hoàn toàn khác biệt."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Detailed Comparison Table */}
                <div className="mt-12 mb-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
                    Bảng so sánh chi tiết 3 nhóm tính cách
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <thead className="bg-amber-600 text-white">
                        <tr>
                          <th className="py-3 px-4 text-left font-semibold">
                            Đặc điểm
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            ISTP
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            ISTJ
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            ESTP
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {/* Row 1 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                            Chức năng nhận thức chính
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Tư duy nội tâm (Ti) + Cảm nhận ngoại hướng (Se)
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Cảm nhận nội tâm (Si) + Tư duy ngoại hướng (Te)
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Cảm nhận ngoại hướng (Se) + Tư duy nội tâm (Ti)
                          </td>
                        </tr>
                        {/* Row 2 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Phong cách làm việc
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-amber-50">
                            Linh hoạt, thực nghiệm, tập trung giải quyết vấn đề
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-blue-50">
                            Có hệ thống, tuân thủ quy trình, chú trọng chi tiết
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-red-50">
                            Năng động, ứng biến, thích thử thách mới
                          </td>
                        </tr>
                        {/* Row 3 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                            Trong quan hệ
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Kín đáo, độc lập, ít bày tỏ cảm xúc
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Đáng tin cậy, truyền thống, ít lãng mạn
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Hòa đồng, vui vẻ, thích giao tiếp xã hội
                          </td>
                        </tr>
                        {/* Row 4 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Ưu thế nghề nghiệp
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-amber-50">
                            Kỹ thuật viên, thợ cơ khí, phi công
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-blue-50">
                            Kế toán, quản lý, kiểm toán
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-red-50">
                            Kinh doanh, bán hàng, thể thao
                          </td>
                        </tr>
                        {/* Row 5 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                            Điểm mạnh
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Bình tĩnh, khéo léo, xử lý khủng hoảng tốt
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Tổ chức, kiên nhẫn, trách nhiệm cao
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Nhanh nhẹn, thuyết phục, dám nghĩ dám làm
                          </td>
                        </tr>
                        {/* Row 6 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Điểm yếu
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-amber-50">
                            Khó bày tỏ cảm xúc, dễ chán nản
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-blue-50">
                            Cứng nhắc, khó thích nghi với thay đổi
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-red-50">
                            Thiếu kiên nhẫn, dễ gây mâu thuẫn
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Career Comparison */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
                    So sánh nghề nghiệp phù hợp
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* ISTP Column */}
                    <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-amber-100 p-3 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-amber-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-amber-700">ISTP</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span> Kỹ sư
                          cơ khí
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span> Thợ sửa
                          chữa
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span> Phi
                          công
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span> Lập
                          trình viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span> Thám tử
                        </li>
                      </ul>
                    </div>

                    {/* ISTJ Column */}
                    <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-blue-700">ISTJ</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Kế toán
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Quản lý
                          hành chính
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Kiểm
                          toán viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Kỹ sư
                          xây dựng
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Quân
                          nhân
                        </li>
                      </ul>
                    </div>

                    {/* ESTP Column */}
                    <div className="bg-white p-6 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-red-100 p-3 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-red-700">ESTP</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span> Nhân viên
                          bán hàng
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span> Doanh
                          nhân
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span> Vận động
                          viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span> Cảnh sát
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span> MC/Dẫn
                          chương trình
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Final Thoughts */}
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">
                    Nhận định cuối
                  </h3>
                  <p className="text-gray-700 mb-3">
                    ISTP, ISTJ và ESTP đều là những nhóm tính cách thực tế và lý
                    trí, nhưng mỗi nhóm có thế mạnh riêng:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                    <li>
                      <span className="font-medium">ISTP</span> - Nhà kỹ thuật
                      tài ba với khả năng ứng biến linh hoạt
                    </li>
                    <li>
                      <span className="font-medium">ISTJ</span> - Người tổ chức
                      đáng tin cậy với tinh thần trách nhiệm cao
                    </li>
                    <li>
                      <span className="font-medium">ESTP</span> - Người thực thi
                      năng động với khả năng thuyết phục
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Sự khác biệt chính nằm ở cách họ tiếp cận thế giới: ISTP với
                    sự độc lập và thực nghiệm, ISTJ với hệ thống và truyền
                    thống, ESTP với năng lượng và sự nhiệt huyết. Hiểu rõ những
                    khác biệt này giúp mỗi nhóm phát huy tối đa tiềm năng của
                    mình.
                  </p>
                </div>
              </div>
            )}
            {activeSection === "advice" && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Main Header */}
                <h2 className="text-3xl font-bold text-blue-700 mb-8 border-b-2 border-blue-100 pb-4">
                  LỜI KHUYÊN PHÁT TRIỂN DÀNH CHO NHÀ KỸ THUẬT (ISTP)
                </h2>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-800 to-indigo-900 p-8 rounded-lg mb-10 text-white">
                  <div className="max-w-3xl mx-auto text-center">
                    <svg
                      className="w-12 h-12 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      Hành trình phát triển cho tư duy độc lập
                    </h3>
                    <p className="text-blue-200">
                      Là những người thực tế và sáng tạo, ISTP cần học cách cân
                      bằng giữa sự độc lập và kết nối xã hội để phát huy tối đa
                      tiềm năng của mình.
                    </p>
                  </div>
                </div>

                {/* Core Advice Sections */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Develop Strengths */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Phát huy điểm mạnh
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Tận dụng tối đa khả năng phân tích và sáng tạo của bạn:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        Tiếp tục phát triển kỹ năng giải quyết vấn đề thực tế
                      </li>
                      <li>Ứng dụng tư duy logic vào các dự án sáng tạo</li>
                      <li>Tận hưởng sự tự do trong cách làm việc độc lập</li>
                    </ul>
                  </div>

                  {/* Improve Weaknesses */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-6 h-6 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Cải thiện điểm yếu
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Những điều ISTP cần lưu ý để phát triển:
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="italic text-gray-700">
                        "Sự độc lập là sức mạnh, nhưng kết nối là chìa khóa để
                        phát triển"
                      </p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Học cách bày tỏ cảm xúc rõ ràng hơn</li>
                      <li>Kiên nhẫn với các quy trình cần thiết</li>
                      <li>Mở lòng với những quan điểm khác biệt</li>
                    </ul>
                  </div>
                </div>

                {/* Emotional & Social Skills Section */}
                <div className="mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg">
                        <svg
                          className="w-10 h-10 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                        Phát triển kỹ năng xã hội
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                          <h4 className="font-semibold text-blue-700 mb-2">
                            Giao tiếp hiệu quả
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Lắng nghe trước khi phán xét</li>
                            <li>Học cách diễn đạt cảm xúc rõ ràng</li>
                            <li>Chú ý đến phản ứng của người khác</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                          <h4 className="font-semibold text-blue-700 mb-2">
                            Xây dựng mối quan hệ
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Dành thời gian chất lượng cho người thân</li>
                            <li>Tham gia các hoạt động nhóm thú vị</li>
                            <li>Chia sẻ kiến thức với người khác</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Self-Care Section */}
                <div className="mb-10">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 bg-blue-50 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-sm">
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700">
                          Phát triển cá nhân
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        ISTP cần chú ý phát triển toàn diện:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Cân bằng cuộc sống
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Dành thời gian cho sở thích cá nhân</li>
                            <li>Thử nghiệm những điều mới mẻ</li>
                            <li>Đặt ra các thử thách cho bản thân</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Quản lý cảm xúc
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Nhận biết và gọi tên cảm xúc của mình</li>
                            <li>Tìm cách lành mạnh để giải tỏa căng thẳng</li>
                            <li>Chia sẻ với người tin cậy khi cần</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/3">
                      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-full">
                        <h4 className="font-semibold text-gray-800 mb-3">
                          Bài tập thực hành
                        </h4>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              1
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Thử thách mới
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Mỗi tháng học một kỹ năng hoặc môn thể thao mới
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              2
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Ghi nhật ký
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Viết lại 1 cảm xúc mỗi ngày và nguyên nhân của
                                nó
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              3
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Kết nối xã hội
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Mỗi tuần dành 2 giờ cho hoạt động xã hội có ý
                                nghĩa
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Encouragement */}
                <div className="bg-gradient-to-r from-blue-900 to-indigo-800 p-8 rounded-lg text-white">
                  <div className="max-w-3xl mx-auto text-center">
                    <svg
                      className="w-12 h-12 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      Sức mạnh của Nhà Kỹ Thuật
                    </h3>
                    <p className="mb-4 text-blue-100">
                      Bạn được ban tặng tư duy logic sắc bén, khả năng giải
                      quyết vấn đề thực tế và sự độc lập hiếm có. Khi học cách
                      kết hợp những điểm mạnh này với kỹ năng giao tiếp và kết
                      nối, bạn sẽ đạt được những thành công vượt bậc.
                    </p>
                    <div className="bg-indigo-700 bg-opacity-30 p-4 rounded-lg inline-block">
                      <p className="font-medium">
                        "Thế giới cần những người như bạn - những người có khả
                        năng biến ý tưởng thành hiện thực. Hãy nhớ rằng sự vĩ
                        đại thực sự đến từ việc cân bằng giữa độc lập và hợp
                        tác, giữa logic và cảm xúc."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ISTPPage;
