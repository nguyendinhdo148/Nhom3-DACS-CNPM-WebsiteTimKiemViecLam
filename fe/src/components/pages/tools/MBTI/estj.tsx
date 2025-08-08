import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faPen, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const handleCopyLink = () => {
  const url = "http://localhost:5173/tools/mbti/tinh-cach/estj";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Đã sao chép liên kết!");
    })
    .catch((err) => {
      console.error("Lỗi khi sao chép liên kết:", err);
    });
};
const ESTJPage = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Tổng quan" },
    { id: "strengths-weaknesses", title: "Điểm mạnh và điểm yếu" },
    { id: "relationship", title: "Mối quan hệ" },
    { id: "how-to-be-close", title: "Làm sao để thân thiết với ESTJ" },
    { id: "career-path", title: "Con đường sự nghiệp" },
    { id: "workplace-habits", title: "Thói quen nơi công sở" },
    { id: "compare", title: "So sánh ESTJ với ENTJ, ISTJ" },
    { id: "advice", title: "Lời khuyên dành cho ESTJ" },
  ];

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="ESTJ-page bg-gradient-to-b from-blue-50 to-purple-50">
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
                ESTJ - Người giám hộ
              </h1>
            </div>
            <div className="relative w-full">
              <img
                src="/mbti_icons/estj1.webp"
                alt="ESTJ - Người giám hộ"
                className="pointer w-full h-120 object-cover rounded-lg shadow "
              />
            </div>

            {/* Description */}
            <div className="text-lg text-gray-700 max-w-4xl text-center">
              Họ là những Người giám hộ với tinh thần nỗ lực không ngừng nghỉ
              trong mọi khía cạnh của cuộc sống. Những người thuộc nhóm tính
              cách ESTJ yêu thích những giá trị truyền thống, thượng tôn pháp
              luật, luôn làm việc dựa trên lý thuyết thực tiễn và logic. Trong
              công việc, ESTJ là nhóm tính cách có phương pháp xử lý công việc
              nhanh và hiệu quả nhất.
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
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent">
                    TỔNG QUAN TÍNH CÁCH ESTJ
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-yellow-400 mx-auto"></div>
                </div>

                {/* Introduction */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-300">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    ESTJ (Người giám hộ) yêu thích những giá trị truyền thống,
                    thượng tôn pháp luật, luôn làm việc dựa trên lý thuyết thực
                    tiễn và logic. Trong công việc, ESTJ là nhóm tính cách có
                    phương pháp xử lý công việc nhanh và hiệu quả nhất.
                  </p>
                </div>

                {/* MBTI Breakdown */}
                <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
                    Ý NGHĨA 4 CHỮ CÁI ESTJ
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "● E - Hướng ngoại (Extraverted)",
                        color: "bg-green-100",
                        textColor: "text-green-800",
                        content:
                          "Đối với những người mang tính cách ESTJ, thế giới bên ngoài mới là thế giới thực. Họ tương tác và lấy năng lượng từ môi trường xung quanh.",
                      },
                      {
                        title: "● S - Giác quan (Sensing)",
                        color: "bg-yellow-100",
                        textColor: "text-yellow-800",
                        content:
                          "Các ESTJ tập trung vào những gì quan sát được bằng năm giác quan, ưu tiên thông tin cụ thể và thực tế.",
                      },
                      {
                        title: "● T - Lý trí (Thinking)",
                        color: "bg-green-200",
                        textColor: "text-green-900",
                        content:
                          "Đưa ra quyết định dựa trên logic, số liệu và phân tích khách quan thay vì cảm xúc cá nhân.",
                      },
                      {
                        title: "● J - Nguyên tắc (Judging)",
                        color: "bg-gradient-to-r from-green-100 to-yellow-100",
                        textColor: "text-green-800",
                        content:
                          "Ưa thích sự rõ ràng, kế hoạch cụ thể và tuân thủ các quy tắc đã được thiết lập.",
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
                      title: "Bậc thầy tổ chức",
                      icon: "📊",
                      content:
                        "ESTJ có năng khiếu bẩm sinh trong việc sắp xếp hệ thống và quản lý hiệu quả. Họ biến sự hỗn loạn thành trật tự chỉ trong nháy mắt.",
                    },
                    {
                      title: "Nguyên tắc vàng",
                      icon: "⚖️",
                      content:
                        "Luôn tôn trọng quy tắc và truyền thống. ESTJ tin rằng một xã hội vận hành tốt cần có kỷ cương rõ ràng.",
                    },
                    {
                      title: "Thực tế như dao cắt",
                      icon: "🔪",
                      content:
                        "Không mơ mộng viển vông, ESTJ tập trung vào những gì có thể thực hiện được với kết quả đo lường cụ thể.",
                    },
                    {
                      title: "Trách nhiệm cao cả",
                      icon: "🏛️",
                      content:
                        "ESTJ tự hào khi hoàn thành nghĩa vụ. Họ là chỗ dựa đáng tin cậy cho gia đình và cộng đồng.",
                    },
                  ].map((section, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-300"
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
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-700 mb-4">
                      SIÊU NĂNG LỰC
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Kỹ năng quản lý và lãnh đạo xuất sắc</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Khả năng tổ chức hệ thống hiệu quả</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Quyết đoán và dứt khoát trong hành động</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Trung thành và đáng tin cậy tuyệt đối</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Thực tế và có óc phán đoán nhạy bén</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-700 mb-4">
                      THỬ THÁCH
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">✗</span>
                        <span>Thiếu linh hoạt với thay đổi đột ngột</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">✗</span>
                        <span>Đôi khi cứng nhắc trong quan điểm</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">✗</span>
                        <span>Ít quan tâm đến cảm xúc cá nhân</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">✗</span>
                        <span>Khó chấp nhận ý kiến trái chiều</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">✗</span>
                        <span>Xu hướng kiểm soát quá mức</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Career & Relationships */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-green-700 mb-4">
                      ESTJ TRONG SỰ NGHIỆP
                    </h3>
                    <p className="text-gray-700 mb-4">
                      ESTJ tỏa sáng trong môi trường có cấu trúc rõ ràng:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Vị trí quản lý, lãnh đạo</li>
                      <li>Công việc đòi hỏi tổ chức hệ thống</li>
                      <li>Lĩnh vực truyền thống như luật, tài chính</li>
                      <li>Môi trường đề cao hiệu suất</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                      Nghề nghiệp lý tưởng: Quản lý dự án, luật sư, sĩ quan quân
                      đội, giám đốc điều hành, kế toán trưởng, nhà tổ chức sự
                      kiện.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-yellow-700 mb-4">
                      ESTJ TRONG TÌNH YÊU
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Trong các mối quan hệ, ESTJ là người:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Trung thành và đáng tin cậy</li>
                      <li>Thẳng thắn trong giao tiếp</li>
                      <li>Có trách nhiệm với gia đình</li>
                      <li>Thể hiện tình cảm qua hành động</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                      ESTJ cần học cách lắng nghe cảm xúc của đối phương và linh
                      hoạt hơn trong các tình huống bất ngờ.
                    </p>
                  </div>
                </div>

                {/* Famous People */}
                <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold text-center text-green-700 mb-6">
                    ESTJ NỔI TIẾNG
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {[
                      { name: "Emma Watson", role: "Diễn viên" },
                      { name: "Adele", role: "Ca sĩ" },
                      { name: "Estée Lauder", role: "Doanh nhân" },
                      { name: "Celine Dion", role: "Ca sĩ" },
                      { name: "Gordon Ramsay", role: "Đầu bếp" },
                      { name: "Bruce Willis", role: "Diễn viên" },
                      { name: "Hillary Clinton", role: "Chính trị gia" },
                      { name: "Sam Walton", role: "Nhà sáng lập Walmart" },
                    ].map((person, index) => (
                      <div
                        key={index}
                        className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="h-12 w-12 bg-gradient-to-r from-green-200 to-yellow-200 rounded-full mx-auto mb-2 flex items-center justify-center text-green-700 font-bold">
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
                <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-6 rounded-lg mt-8 text-center">
                  <p className="text-green-800 italic font-medium">
                    "ESTJ là những người xây dựng nền tảng xã hội vững chắc. Với
                    tinh thần trách nhiệm cao, óc tổ chức sắc bén và sự tuân thủ
                    nguyên tắc, họ góp phần tạo nên những cộng đồng làm việc
                    hiệu quả. Dù đôi khi bị cho là cứng nhắc, không ai có thể
                    phủ nhận sự đóng góp to lớn của ESTJ trong việc duy trì trật
                    tự và thúc đẩy tiến bộ xã hội."
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
                    <span className="text-green-600">
                      NHÓM TÍNH CÁCH ESTJ (NGƯỜI GIÁM HỘ)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    ESTJ - Nhóm tính cách thực tế, có trách nhiệm với tinh thần
                    kỷ luật cao và khả năng tổ chức xuất sắc
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
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Tận tâm cống hiến
                          </h4>
                          <p className="text-gray-700">
                            ESTJ luôn sẵn sàng đón nhận nhiệm vụ với tinh thần
                            trách nhiệm cao. Họ xem công việc là niềm vui khi
                            không đi ngược lại giá trị đạo đức cá nhân.
                          </p>
                        </div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg mt-3">
                        <p className="text-sm text-green-700 italic">
                          "Đối với ESTJ, hoàn thành nhiệm vụ không chỉ là nghĩa
                          vụ mà còn là niềm tự hào"
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
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Ý chí mạnh mẽ
                          </h4>
                          <p className="text-gray-700">
                            ESTJ không dễ thay đổi quyết định vì quan điểm trái
                            chiều. Họ bảo vệ ý kiến cá nhân đến cùng trừ khi
                            được thuyết phục bằng lập luận rõ ràng, chính xác.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          Kiên định
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          Quyết đoán
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          Bền bỉ
                        </span>
                      </div>
                    </div>

                    {/* Strength 3 */}
                    <div className="bg-white p-6 rounded-xl border border-yellow-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
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
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Chính trực và trung thực
                          </h4>
                          <p className="text-gray-700">
                            ESTJ tin vào sự thật được chứng minh hơn ý tưởng mơ
                            hồ. Họ luôn thẳng thắn, trung thực trong mọi tình
                            huống và mong đợi điều tương tự từ người khác.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-yellow-500 rounded-full"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-600 mt-1">
                          <span>Độ tin cậy</span>
                          <span>85% người tin tưởng ESTJ trong công việc</span>
                        </div>
                      </div>
                    </div>

                    {/* Strength 4 */}
                    <div className="bg-white p-6 rounded-xl border border-yellow-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
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
                              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Khả năng tổ chức tuyệt vời
                          </h4>
                          <p className="text-gray-700">
                            ESTJ đánh giá mọi thứ dựa trên thực tế và tiêu chuẩn
                            chung, giúp họ trở thành nhà lãnh đạo đáng tin cậy
                            với khả năng phân công công việc hợp lý, công bằng.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Biểu hiện:</span>
                          Ngăn nắp, kỷ luật, đáng tin cậy và có khả năng quản lý
                          xuất sắc
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
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Kém linh hoạt
                          </h4>
                          <p className="text-gray-700">
                            ESTJ đôi khi bỏ qua những ý tưởng mới vì chưa được
                            chứng minh. Họ miễn cưỡng thay đổi cho đến khi có
                            bằng chứng rõ ràng về hiệu quả.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Gợi ý:</span>
                          Mở lòng hơn với những phương pháp mới và cân nhắc tính
                          khả thi trước khi từ chối
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
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Ngoan cố
                          </h4>
                          <p className="text-gray-700">
                            ESTJ thường cứng nhắc trong quan điểm đúng/sai và áp
                            dụng tiêu chuẩn này cho mọi người. Họ khó chấp nhận
                            cách làm khác biệt dù vẫn đạt kết quả.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 bg-red-50 p-3 rounded-lg">
                        <p className="text-sm text-red-700 italic">
                          "ESTJ cần học cách linh hoạt hơn và chấp nhận rằng có
                          nhiều cách để đạt được mục tiêu"
                        </p>
                      </div>
                    </div>

                    {/* Weakness 3 */}
                    <div className="bg-white p-6 rounded-xl border border-yellow-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
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
                              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Không ngơi nghỉ
                          </h4>
                          <p className="text-gray-700">
                            ESTJ thường làm việc quá sức để đáp ứng kỳ vọng. Họ
                            hiếm khi cho phép bản thân nghỉ ngơi vì sợ bị đánh
                            giá, dù rất cần thời gian thư giãn.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Cải thiện:</span>
                          Học cách cân bằng giữa công việc và nghỉ ngơi, đặt
                          lịch trình thư giãn cụ thể
                        </div>
                      </div>
                    </div>

                    {/* Weakness 4 */}
                    <div className="bg-white p-6 rounded-xl border border-yellow-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
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
                          <h4 className="font-bold text-gray-800 mb-1">
                            Hiếm khi bộc lộ cảm xúc
                          </h4>
                          <p className="text-gray-700">
                            ESTJ thường tập trung vào hiệu quả công việc mà bỏ
                            qua cảm xúc cá nhân và người khác. Đây là điểm yếu
                            lớn nhất khiến họ gặp khó khăn trong các mối quan
                            hệ.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Giải pháp:</span>
                          Dành thời gian lắng nghe và thấu hiểu cảm xúc của bản
                          thân và người xung quanh
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Balance Section */}
                <div className="mt-12 bg-gradient-to-r from-green-500 to-yellow-500 p-8 rounded-xl text-white">
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      CÂN BẰNG CUỘC SỐNG ESTJ
                    </h3>
                    <p className="mb-4 text-green-100">
                      Sức mạnh thực sự của ESTJ nằm ở khả năng kết hợp tính kỷ
                      luật với sự công bằng. Khi học được cách cân bằng giữa
                      nguyên tắc và linh hoạt, giữa công việc và cảm xúc, họ có
                      thể trở thành những nhà lãnh đạo xuất sắc.
                    </p>
                    <div className="bg-opacity-20 p-4 rounded-lg inline-block">
                      <p className="font-medium">
                        "Một ESTJ trưởng thành hiểu rằng đôi khi cần mềm mỏng
                        trong giao tiếp và rằng chăm sóc cảm xúc cũng quan trọng
                        như hoàn thành công việc. Đây là chìa khóa để họ phát
                        triển toàn diện."
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
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent mb-3">
                    MỐI QUAN HỆ CỦA ESTJ
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-yellow-400 mx-auto rounded-full"></div>
                  <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Những người thuộc nhóm tính cách ESTJ thích kết giao với
                    những người có cùng quan điểm sống. Họ là những người cởi
                    mở, nhiệt tình và luôn coi trọng các nguyên tắc, mang đến sự
                    ổn định trong mọi mối quan hệ.
                  </p>
                </div>

                {/* General Relationship Traits */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 p-3 rounded-full mr-4">
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
                        <span className="text-green-500 mr-2">•</span>
                        <span>Trung thành và đáng tin cậy tuyệt đối</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Giao tiếp thẳng thắn, rõ ràng</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Luôn tuân thủ cam kết trong quan hệ</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>
                          Thích tham gia các hoạt động xã hội cùng nhau
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-yellow-100 p-3 rounded-full mr-4">
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
                        { type: "ISTJ", desc: "Cùng hệ giá trị" },
                        { type: "ESFJ", desc: "Bổ trợ hoàn hảo" },
                        { type: "ESTP", desc: "Năng động" },
                        { type: "ISFJ", desc: "Hài hòa" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-green-50 to-yellow-50 p-3 rounded-lg"
                        >
                          <span className="font-bold text-green-600">
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
                <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-8 rounded-2xl mb-12">
                  <div className="flex flex-col md:flex-row items-center mb-8">
                    <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                      <div className="bg-white p-4 rounded-full shadow-lg">
                        <svg
                          className="w-16 h-16 text-green-500"
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
                      <h3 className="text-2xl font-bold text-green-700 mb-4">
                        ESTJ TRONG TÌNH YÊU
                      </h3>
                      <p className="text-gray-700 mb-4">
                        ESTJ tiếp cận tình yêu một cách thực tế và có kế hoạch.
                        Họ thẳng thắn, chân thành và luôn xác định rõ vị trí của
                        mình trong mối quan hệ. Người bạn đời của ESTJ sẽ luôn
                        cảm nhận được sự ổn định và cam kết dài lâu.
                      </p>
                      <div className="bg-white bg-opacity-70 p-4 rounded-lg border-l-4 border-green-400 mb-4">
                        <p className="italic text-gray-700">
                          "ESTJ thể hiện tình yêu qua hành động cụ thể hơn là
                          lời nói hoa mỹ. Họ kiên định với tình yêu của mình và
                          không để những thay đổi bên ngoài ảnh hưởng đến cam
                          kết với người mình yêu."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Cách thể hiện tình cảm",
                        icon: "💝",
                        content:
                          "ESTJ thể hiện tình yêu qua những hành động thiết thực như chuẩn bị bữa ăn, sắp xếp các buổi hẹn chất lượng. Họ thích đưa người yêu đến các sự kiện công cộng và tạo dựng những kỷ niệm đẹp.",
                      },
                      {
                        title: "Thách thức",
                        icon: "⚠️",
                        content:
                          "ESTJ đôi khi quá thực tế và cứng nhắc trong tình yêu. Họ khó thể hiện cảm xúc ngọt ngào và có thể vô tình làm tổn thương đối phương bằng sự thẳng thắn thái quá.",
                      },
                      {
                        title: "Lời khuyên",
                        icon: "💡",
                        content:
                          "ESTJ cần học cách lắng nghe cảm xúc của đối phương và bày tỏ tình cảm bằng lời nói nhiều hơn. Đối tác nên trân trọng sự ổn định ESTJ mang lại nhưng cũng cần giúp họ mềm mỏng hơn trong quan hệ.",
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
                  <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                    <svg
                      className="w-8 h-8 mr-3 text-green-500"
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
                    ESTJ TRONG TÌNH BẠN
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-start mb-6">
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Người bạn đáng tin
                          </h4>
                          <p className="text-gray-700">
                            ESTJ là những người bạn trung thành và biết chia sẻ
                            giá trị tích cực. Họ thích rủ bạn bè tham gia các
                            hoạt động thể thao và xã hội, luôn tạo bầu không khí
                            vui vẻ.
                          </p>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400 mb-6">
                        <p className="italic text-gray-700">
                          "Làm bạn với ESTJ, bạn sẽ không bao giờ cảm thấy nhàm
                          chán. Họ có vô vàn sở thích và luôn sẵn sàng chia sẻ
                          những trải nghiệm thú vị với bạn bè."
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start mb-6">
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
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Khó khăn trong tình bạn
                          </h4>
                          <p className="text-gray-700">
                            ESTJ có xu hướng tìm kiếm bạn bè có cùng quan điểm.
                            Họ khó hòa hợp với những người có lối sống khác biệt
                            và đôi khi quá cứng nhắc trong cách nhìn nhận vấn
                            đề.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-2 rounded-lg mr-4">
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
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Tình bạn bền chặt
                          </h4>
                          <p className="text-gray-700">
                            Khi đã coi ai là bạn thân, ESTJ sẽ trở thành người
                            bạn đáng tin cậy. Họ sẵn sàng giúp đỡ bạn bè khi cần
                            và luôn giữ lời hứa trong mọi hoàn cảnh.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Parenting Section */}
                <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                    <svg
                      className="w-8 h-8 mr-3 text-green-500"
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
                    ESTJ KHI LÀM CHA MẸ
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {[
                        {
                          title: "Phong cách nuôi dạy",
                          content:
                            "ESTJ là những phụ huynh nghiêm khắc nhưng công bằng. Họ dạy con tính kỷ luật, trách nhiệm và tôn trọng các giá trị truyền thống. Con cái được rèn luyện để trở nên độc lập từ sớm.",
                        },
                        {
                          title: "Ưu điểm",
                          content:
                            "ESTJ tạo cho con nền tảng vững chắc về đạo đức và kỹ năng sống. Trẻ được nuôi dạy bởi ESTJ thường có ý thức trách nhiệm cao, biết quý trọng giá trị lao động và có nếp sống ngăn nắp.",
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
                            <span className="text-green-500 mr-2">•</span>
                            <span>
                              Quá cứng nhắc trong các quy tắc gia đình
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>
                              Khó thích ứng khi con cái lớn lên và muốn độc lập
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>
                              Ít thể hiện tình cảm bằng lời nói với con
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-yellow-100 p-5 rounded-lg border-l-4 border-yellow-500">
                        <p className="italic text-gray-700">
                          "ESTJ mong muốn con cái trở thành người có trách nhiệm
                          và biết tôn trọng người khác. Họ dành nhiều công sức
                          để xây dựng nền tảng vững chắc cho tương lai của con,
                          dù đôi khi cách thể hiện có phần nghiêm khắc."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Quote */}
                <div className="text-center mt-12">
                  <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-6 rounded-xl inline-block max-w-2xl">
                    <svg
                      className="w-10 h-10 text-green-500 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xl font-medium text-green-800 mb-2">
                      "ESTJ mang đến sự ổn định và tin cậy trong mọi mối quan
                      hệ. Họ yêu thương bằng cách chu toàn trách nhiệm và xây
                      dựng nền tảng vững chắc cho người thân. Để hiểu ESTJ, hãy
                      trân trọng sự chân thành, thẳng thắn và tinh thần trách
                      nhiệm cao của họ."
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
                    <span className="text-green-600">NGƯỜI GIÁM HỘ (ESTJ)</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    ESTJ - Nhóm tính cách thực tế, trách nhiệm với tinh thần kỷ
                    luật cao và sự trung thành tuyệt đối
                  </p>
                </div>

                {/* Core Principles */}
                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <div className="bg-white p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto shadow-sm">
                        <svg
                          className="w-10 h-10 text-green-600"
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
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-green-800 mb-3">
                        Nguyên tắc vàng khi tiếp cận ESTJ
                      </h3>
                      <p className="text-gray-700">
                        ESTJ là những người thực tế, trung thực và coi trọng sự
                        tin cậy trong các mối quan hệ. Họ đánh giá cao sự chân
                        thành, đúng giờ và tinh thần trách nhiệm. Để xây dựng
                        mối quan hệ với ESTJ, điều quan trọng nhất là:
                        <span className="font-medium block mt-2">
                          "Hãy thể hiện sự đáng tin cậy, tôn trọng các nguyên
                          tắc của họ và cùng họ tham gia các hoạt động thực tế,
                          có mục đích rõ ràng"
                        </span>
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
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Hỏi về chuyên môn của họ
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Nhờ ESTJ tư vấn về lĩnh vực họ am hiểu</li>
                            <li>
                              Thể hiện sự đánh giá cao kiến thức thực tế của họ
                            </li>
                            <li>
                              Cảm ơn bằng những món quà thiết thực hoặc bữa ăn
                            </li>
                            <li>
                              Tránh hỏi về những chủ đề quá trừu tượng, không
                              thực tế
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Strategy 2 */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
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
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Tôn trọng nguyên tắc
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Luôn đúng giờ trong mọi cuộc hẹn</li>
                            <li>Giữ lời hứa và hoàn thành cam kết</li>
                            <li>Duy trì sự ngăn nắp, trật tự khi tương tác</li>
                            <li>Tránh sự bừa bãi, thiếu tổ chức</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Strategy 3 */}
                    <div className="bg-white p-5 rounded-xl border border-yellow-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
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
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Giao tiếp thẳng thắn
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                              Hỏi trực tiếp khi ESTJ có biểu hiện khó chịu
                            </li>
                            <li>Nói rõ quan điểm và mong muốn của bạn</li>
                            <li>Tránh vòng vo hoặc nói bóng gió</li>
                            <li>Giải quyết mâu thuẫn ngay khi phát sinh</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Strategy 4 */}
                    <div className="bg-white p-5 rounded-xl border border-yellow-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
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
                              d="M12 8v13m8-8v7m-16-7v7m8-12v4m-4-4h8m-8 0H4m8 0h8"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Tham gia hoạt động thực tế
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Cùng tham gia các dự án có mục tiêu rõ ràng</li>
                            <li>Tổ chức các buổi gặp gỡ có kế hoạch cụ thể</li>
                            <li>Ưu tiên hoạt động mang lại kết quả hữu hình</li>
                            <li>Tránh những cuộc gặp gỡ không có mục đích</li>
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
                              Thể hiện sự đáng tin cậy và trung thực
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Công nhận năng lực và thành tích của họ
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Giữ gìn sự ngăn nắp, trật tự
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Tham gia các hoạt động có ích cùng họ
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
                              Khen ngợi quá đà, không chân thành
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Nói về chủ đề trừu tượng, phi thực tế
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Đến muộn hoặc không giữ lời hứa
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Chỉ trích tính nguyên tắc của họ là cứng nhắc
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Advice */}
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">
                    Lời khuyên từ chuyên gia
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Xây dựng mối quan hệ với ESTJ cần sự kiên nhẫn và nhất quán.
                    Một khi đã coi bạn là người đáng tin cậy, họ sẽ trở thành
                    đồng nghiệp tận tâm, bạn bè trung thành và người luôn sẵn
                    sàng giúp đỡ bạn vượt qua khó khăn. Hãy trân trọng sự ổn
                    định và tinh thần trách nhiệm mà họ mang đến cho cuộc sống
                    của bạn.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="italic text-gray-700">
                      "Tình bạn với ESTJ như một nền tảng vững chắc. Họ sẽ giúp
                      bạn trở nên có tổ chức hơn, động viên bạn hoàn thành mục
                      tiêu và luôn là chỗ dựa đáng tin cậy trong mọi tình huống
                      thực tế của cuộc sống."
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
                    <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                      NGƯỜI GIÁM HỘ (ESTJ)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    ESTJ - Những nhà quản lý tài ba với tinh thần trách nhiệm
                    cao và khả năng tổ chức xuất sắc
                  </p>
                </div>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-green-500 to-yellow-500 p-8 rounded-lg mb-10 text-white">
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
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      "ESTJ xây dựng sự nghiệp bằng sự kiên định, trách nhiệm và
                      hiệu quả công việc"
                    </h3>
                    <p className="text-green-100">
                      Những người giám hộ này luôn tìm kiếm công việc cho phép
                      họ áp dụng các nguyên tắc và tổ chức hệ thống một cách
                      hiệu quả
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
                        <div className="bg-green-100 text-green-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          1
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Giai đoạn khởi đầu: Xây dựng nền tảng
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Khi mới bước vào sự nghiệp, ESTJ tập trung vào việc
                          nắm vững các quy trình và xây dựng uy tín cá nhân. Họ
                          xuất sắc trong các vị trí đòi hỏi sự chính xác và tuân
                          thủ quy định.
                        </p>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="italic text-gray-700">
                            "ESTJ cần môi trường làm việc có cấu trúc rõ ràng để
                            phát triển. Họ học qua việc tuân thủ các quy trình
                            chuẩn và xây dựng thói quen làm việc hiệu quả"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stage 2 */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="bg-yellow-100 text-yellow-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          2
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Giai đoạn bứt phá: Quản lý và lãnh đạo
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Sau khi tích lũy kinh nghiệm, ESTJ được đề bạt vào các
                          vị trí quản lý. Họ được đánh giá cao nhờ khả năng tổ
                          chức, điều phối và đảm bảo hiệu suất công việc.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                            Quản lý
                          </span>
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                            Tổ chức
                          </span>
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                            Hiệu quả
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stage 3 */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="bg-gradient-to-r from-green-100 to-yellow-100 text-green-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          3
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Giai đoạn chín muồi: Dẫn dắt hệ thống
                        </h4>
                        <p className="text-gray-700">
                          Ở đỉnh cao sự nghiệp, ESTJ trở thành người thiết lập
                          các quy trình và tiêu chuẩn làm việc. Họ tạo ra môi
                          trường làm việc có trật tự, nơi mọi người hiểu rõ vai
                          trò và trách nhiệm.
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Tổ chức hệ thống
                          </h4>
                          <p className="text-gray-700">
                            Khả năng sắp xếp công việc và quy trình một cách
                            khoa học
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-start mb-3">
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
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Lãnh đạo
                          </h4>
                          <p className="text-gray-700">
                            Dẫn dắt nhóm làm việc hiệu quả với mục tiêu rõ ràng
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
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
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Đúng hẹn
                          </h4>
                          <p className="text-gray-700">
                            Luôn hoàn thành công việc đúng thời hạn với chất
                            lượng cao
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-start mb-3">
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
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Thực tế
                          </h4>
                          <p className="text-gray-700">
                            Tiếp cận vấn đề với giải pháp khả thi và hiệu quả
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
                        <div className="bg-green-100 p-3 rounded-lg mr-4">
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
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-green-700">
                          Quản lý & Hành chính
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span> Quản lý
                          nhà hàng/khách sạn
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span> Quản
                          trị kinh doanh
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span> Hành
                          chính văn phòng
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span> Quản lý
                          dự án
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-yellow-100 p-3 rounded-lg mr-4">
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
                        <h4 className="font-bold text-yellow-700">
                          Pháp lý & An ninh
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span> Luật
                          sư
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span> Quân
                          nhân/Cảnh sát
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span> Thám
                          tử
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span> Kiểm
                          soát viên
                        </li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-3 rounded-lg mr-4">
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
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-green-700">
                          Tài chính & Giáo dục
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span> Kế
                          toán/Kiểm toán
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span> Nhân
                          viên tài chính
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span> Giáo
                          viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span> Nhân
                          viên bán hàng
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Career Warnings */}
                <div className="mb-12 bg-gradient-to-r from-green-50 to-yellow-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">
                    Cảnh báo nghề nghiệp
                  </h3>
                  <p className="text-gray-700 mb-4">
                    ESTJ nên tránh những môi trường công việc:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Thiếu cấu trúc và quy trình rõ ràng</li>
                    <li>Đòi hỏi sự sáng tạo phi cấu trúc liên tục</li>
                    <li>Làm việc độc lập ít tương tác với người khác</li>
                    <li>
                      Thường xuyên thay đổi phương hướng không có kế hoạch
                    </li>
                  </ul>
                </div>

                {/* Career Development */}
                <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-700 mb-4">
                    Lộ trình phát triển
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-green-500 font-bold">
                        1.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn học việc (0-5 năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Nắm vững quy trình, xây dựng uy tín cá nhân và chứng
                          minh năng lực
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-yellow-500 font-bold">
                        2.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn quản lý (5-10 năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Đảm nhiệm vị trí quản lý, điều phối nhóm và cải tiến
                          quy trình
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-green-600 font-bold">
                        3.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn lãnh đạo (10+ năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Thiết lập tiêu chuẩn, đào tạo thế hệ kế cận và phát
                          triển hệ thống
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
                <h2 className="text-3xl font-bold text-green-600 mb-6 border-b-2 border-green-100 pb-4">
                  THÓI QUEN NƠI CÔNG SỞ CỦA ESTJ
                </h2>

                {/* Introduction */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    Với tinh thần trách nhiệm cao và tính kỷ luật mạnh mẽ, ESTJ
                    mang đến sự ổn định và hiệu quả cho nơi làm việc. Họ coi
                    trọng trật tự, quy trình và sự minh bạch. Là những nhà tổ
                    chức bẩm sinh, ESTJ tỏa sáng trong môi trường có cấu trúc rõ
                    ràng, nơi họ có thể áp dụng các tiêu chuẩn cao và dẫn dắt
                    đội nhóm đạt mục tiêu.
                  </p>
                </div>

                {/* As Employees Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-green-600">
                      ESTJ khi là nhân viên
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Điểm mạnh nổi bật
                      </h4>
                      <p className="text-gray-700">
                        Làm việc chăm chỉ và nghiêm túc như "sách giáo khoa".
                        Trung thành và tận tâm với công việc. Phân biệt rõ ràng
                        đúng/sai để giải quyết vấn đề. Tuân thủ quy trình và
                        tiêu chuẩn. Luôn đặt trách nhiệm lên hàng đầu.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Thách thức
                      </h4>
                      <p className="text-gray-700">
                        Đôi khi cứng nhắc và kém linh hoạt. Khó chấp nhận cách
                        làm khác biệt. Có thể quá thẳng thắn trong phản hồi. Khó
                        thích nghi với thay đổi đột ngột. Mong đợi cao từ cấp
                        trên và đồng nghiệp.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <p className="italic text-gray-700">
                      "ESTJ là nhân viên đáng tin cậy cần môi trường rõ ràng. Họ
                      làm việc tốt nhất khi có quy trình chuẩn và được công nhận
                      sự chuyên nghiệp."
                    </p>
                  </div>
                </div>

                {/* As Colleagues Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-green-600">
                      ESTJ khi là đồng nghiệp
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Giá trị mang lại
                      </h4>
                      <p className="text-gray-700">
                        Duy trì sự ngăn nắp, gọn gàng nơi làm việc. Thẳng thắn
                        và trung thực trong giao tiếp. Làm việc nhóm hiệu quả
                        với tinh thần trách nhiệm cao. Theo dõi tiến độ và đảm
                        bảo mọi người đi đúng hướng. Không lợi dụng mối quan hệ
                        để thăng tiến.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Điều cần lưu ý
                      </h4>
                      <p className="text-gray-700">
                        Có thể quá nghiêm khắc với sai sót nhỏ. Không ủng hộ ý
                        tưởng táo bạo vô lý. Mong đợi đồng nghiệp có cùng tiêu
                        chuẩn làm việc. Đôi khi thiếu kiên nhẫn với người thiếu
                        kỷ luật. Ít khi bày tỏ cảm xúc trong công việc.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 mt-1 mr-3 text-green-500 text-xl">
                      ⚖️
                    </div>
                    <div>
                      <p className="text-gray-700">
                        "Đồng nghiệp ESTJ giống như 'trụ cột' của nhóm - luôn
                        đảm bảo mọi thứ vận hành trơn tru theo đúng quy trình và
                        tiêu chuẩn đã đề ra."
                      </p>
                    </div>
                  </div>
                </div>

                {/* As Managers Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-green-600">
                      ESTJ khi làm quản lý
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Phong cách lãnh đạo
                      </h4>
                      <p className="text-gray-700">
                        Tổ chức đội nhóm và phân chia công việc rõ ràng. Thiết
                        lập quy trình làm việc chuẩn mực. Giám sát chặt chẽ để
                        đảm bảo hiệu quả. Bảo vệ đội nhóm khỏi nguy cơ cắt giảm.
                        Mong đợi sự tuân thủ và tôn trọng từ cấp dưới.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Ưu tiên
                      </h4>
                      <p className="text-gray-700">
                        Duy trì kỷ luật và trật tự trong team. Đánh giá cao sự
                        chuyên nghiệp và đúng giờ. Không khoan nhượng với sự
                        lười biếng. Tuân thủ các quy định truyền thống. Phê bình
                        thẳng thắn khi cần thiết.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3 text-green-500">
                        💼
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">
                          Lời khuyên cho lãnh đạo ESTJ: Hãy linh hoạt hơn với
                          những cách làm mới. Sự cân bằng giữa nguyên tắc và
                          thấu hiểu sẽ giúp bạn quản lý hiệu quả hơn.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career Path Section */}
                <div className="mt-10 bg-gradient-to-r from-green-500 to-yellow-500 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-3">
                    Con đường sự nghiệp lý tưởng
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-r from-green-600 to-yellow-500 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Quản lý & Điều hành
                      </h4>
                      <p className="text-sm">
                        Quản lý dự án, Giám đốc điều hành, Quản lý hành chính,
                        Quản lý tài chính
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-600 to-yellow-500 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">Pháp lý & An ninh</h4>
                      <p className="text-sm">
                        Luật sư, Cảnh sát, Quân nhân, Thanh tra, Kiểm toán
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-600 to-yellow-500 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Kinh doanh & Tổ chức
                      </h4>
                      <p className="text-sm">
                        Doanh nhân, Quản lý bán hàng, Giám sát chất lượng, Quản
                        lý chuỗi cung ứng
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-green-100 text-sm">
                    <p>
                      ESTJ phát triển mạnh trong môi trường có cấu trúc rõ ràng,
                      nơi họ có thể áp dụng tiêu chuẩn cao, tổ chức hiệu quả và
                      dẫn dắt đội nhóm đạt mục tiêu cụ thể.
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
                    <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                      NGƯỜI GIÁM HỘ (ESTJ)
                    </span>{" "}
                    VỚI
                    <span className="text-blue-600">
                      {" "}
                      NGƯỜI ĐIỀU HÀNH (ENTJ)
                    </span>{" "}
                    VÀ
                    <span className="text-gray-600">
                      {" "}
                      NGƯỜI TRÁCH NHIỆM (ISTJ)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Phân tích sâu về 3 nhóm tính cách thuộc nhóm "Nguyên tắc -
                    Thực tế" - những người sống bằng lý trí và tổ chức
                  </p>
                </div>

                {/* Core Similarities */}
                <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-lg mb-10">
                  <h3 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2"
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
                    Điểm chung cốt lõi của bộ ba Nguyên tắc - Thực tế
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-green-100 text-green-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          T
                        </div>
                        <h4 className="font-bold text-gray-800">Lý trí</h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Cả ba đều đưa ra quyết định dựa trên logic và phân tích
                        khách quan
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-yellow-100 text-yellow-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          J
                        </div>
                        <h4 className="font-bold text-gray-800">Nguyên tắc</h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Có kế hoạch rõ ràng, thích sự ổn định và tuân thủ quy
                        trình
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-gradient-to-r from-green-100 to-yellow-100 text-green-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          ✓
                        </div>
                        <h4 className="font-bold text-gray-800">
                          Trách nhiệm cao
                        </h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Luôn hoàn thành công việc đúng hạn với chất lượng tốt
                        nhất
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pair Comparisons */}
                <div className="space-y-10">
                  {/* ESTJ vs ENTJ */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 w-2 h-10 mr-3 rounded-full"></div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                          ESTJ
                        </span>{" "}
                        vs <span className="text-blue-600">ENTJ</span>:
                        <span className="text-sm font-normal ml-2">
                          Người giám hộ vs Người điều hành
                        </span>
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          Tương đồng chính
                        </h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>
                            Đều là người hướng ngoại (E) và nguyên tắc (J)
                          </li>
                          <li>Có năng lực lãnh đạo và quản lý xuất sắc</li>
                          <li>Quyết đoán và tự tin trong công việc</li>
                          <li>
                            Đặt ra tiêu chuẩn cao cho bản thân và người khác
                          </li>
                          <li>Thực tế và tập trung vào kết quả</li>
                        </ul>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 text-blue-500 mr-2"
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
                              Cách tiếp nhận thông tin
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ESTJ (S) dựa vào thông tin cụ thể và kinh nghiệm,
                              ENTJ (N) tập trung vào bức tranh tổng thể và khả
                              năng
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Phong cách lãnh đạo
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ESTJ quản lý theo quy trình, ENTJ hướng tới chiến
                              lược dài hạn
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Ưu tiên công việc
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ESTJ tập trung vào hiệu quả hiện tại, ENTJ hướng
                              tới tầm nhìn tương lai
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <p className="italic text-gray-700">
                        "ESTJ như người quản lý xuất sắc của hệ thống hiện có,
                        ENTJ như nhà chiến lược tạo ra hệ thống mới. Cả hai đều
                        hiệu quả nhưng ở những cấp độ khác nhau."
                      </p>
                    </div>
                  </div>

                  {/* ESTJ vs ISTJ */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-green-500 to-gray-500 w-2 h-10 mr-3 rounded-full"></div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                          ESTJ
                        </span>{" "}
                        vs <span className="text-gray-600">ISTJ</span>:
                        <span className="text-sm font-normal ml-2">
                          Người giám hộ vs Người trách nhiệm
                        </span>
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          Tương đồng chính
                        </h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>
                            Đều sử dụng giác quan (S) và lý trí (T) làm chức
                            năng chính
                          </li>
                          <li>Có phương pháp làm việc hệ thống và tỉ mỉ</li>
                          <li>Đáng tin cậy và luôn hoàn thành nhiệm vụ</li>
                          <li>
                            Trân trọng truyền thống và giá trị đã được chứng
                            minh
                          </li>
                          <li>Ưa thích sự ổn định và an toàn</li>
                        </ul>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 text-gray-600 mr-2"
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
                              ESTJ (E) được tiếp năng lượng từ tương tác xã hội,
                              ISTJ (I) cần thời gian một mình để nạp năng lượng
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Cách thể hiện
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ESTJ quyết đoán và thẳng thắn, ISTJ kín đáo và cẩn
                              trọng
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Phong cách làm việc
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ESTJ thích hợp với vai trò quản lý nhóm, ISTJ làm
                              việc hiệu quả hơn khi độc lập
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-100 border-l-4 border-gray-500 p-4 rounded-r-lg">
                      <p className="italic text-gray-700">
                        "ESTJ như người bảo vệ trật tự bên ngoài, ISTJ như người
                        gìn giữ kỷ luật nội tâm. Cả hai đều là trụ cột của hệ
                        thống nhưng với cách thức khác nhau."
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
                      <thead className="bg-gradient-to-r from-green-600 to-yellow-500 text-white">
                        <tr>
                          <th className="py-3 px-4 text-left font-semibold">
                            Đặc điểm
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            ESTJ
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            ENTJ
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            ISTJ
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
                            Giác quan hướng ngoại (Se) + Tư duy hướng nội (Ti)
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Trực giác hướng ngoại (Ne) + Tư duy hướng nội (Ti)
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Giác quan hướng nội (Si) + Tư duy hướng ngoại (Te)
                          </td>
                        </tr>
                        {/* Row 2 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Phong cách giao tiếp
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-green-50">
                            Trực tiếp, rõ ràng, thiên về thực tế
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-blue-50">
                            Chiến lược, thuyết phục, tập trung vào tương lai
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-gray-50">
                            Ngắn gọn, chính xác, dựa trên sự kiện
                          </td>
                        </tr>
                        {/* Row 3 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                            Trong quan hệ
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Nhiệt tình, thẳng thắn, có phần bảo thủ
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Tự tin, thách thức, hướng đến mục tiêu
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Kín đáo, đáng tin cậy, trung thành
                          </td>
                        </tr>
                        {/* Row 4 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Ưu thế nghề nghiệp
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-green-50">
                            Quản lý, cảnh sát, quân nhân, kế toán
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-blue-50">
                            CEO, luật sư, nhà chiến lược, chính trị gia
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-gray-50">
                            Kế toán, kiểm toán, quản lý chất lượng, kỹ sư
                          </td>
                        </tr>
                        {/* Row 5 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                            Điểm mạnh
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Thực tế, tổ chức tốt, trách nhiệm cao
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Tầm nhìn xa, quyết đoán, lãnh đạo xuất sắc
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Tỉ mỉ, kiên nhẫn, độ tin cậy tuyệt đối
                          </td>
                        </tr>
                        {/* Row 6 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Điểm yếu
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-green-50">
                            Cứng nhắc, khó thích nghi với thay đổi
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-blue-50">
                            Thiếu kiên nhẫn, có thể áp đặt người khác
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-gray-50">
                            Quá cầu toàn, khó chấp nhận rủi ro
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
                    {/* ESTJ Column */}
                    <div className="bg-white p-6 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-green-100 p-3 rounded-lg mr-4">
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
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-green-700">ESTJ</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span> Quản lý
                          nhà hàng/khách sạn
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span> Cảnh
                          sát/Quân nhân
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span> Kế
                          toán/Kiểm toán
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span> Quản
                          trị kinh doanh
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span> Giáo
                          viên
                        </li>
                      </ul>
                    </div>

                    {/* ENTJ Column */}
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
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-blue-700">ENTJ</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Giám đốc
                          điều hành
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Luật
                          sư/Thẩm phán
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Nhà
                          chiến lược
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Chính
                          trị gia
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Doanh
                          nhân
                        </li>
                      </ul>
                    </div>

                    {/* ISTJ Column */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-gray-100 p-3 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-gray-700">ISTJ</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span> Kế
                          toán/Kiểm toán
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span> Kỹ sư
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span> Quản lý
                          chất lượng
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span> Thủ thư
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span> Nhân
                          viên ngân hàng
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Final Thoughts */}
                <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">
                    Nhận định cuối
                  </h3>
                  <p className="text-gray-700 mb-3">
                    ESTJ, ENTJ và ISTJ đều là những nhóm tính cách logic và
                    nguyên tắc, nhưng mỗi nhóm có thế mạnh riêng:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                    <li>
                      <span className="font-medium">ESTJ</span> - Người tổ chức
                      xuất sắc với khả năng quản lý thực tế và hiệu quả
                    </li>
                    <li>
                      <span className="font-medium">ENTJ</span> - Nhà chiến lược
                      tầm nhìn xa với khả năng lãnh đạo mạnh mẽ
                    </li>
                    <li>
                      <span className="font-medium">ISTJ</span> - Người thực thi
                      đáng tin cậy với sự chính xác tuyệt đối
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Sự khác biệt chính nằm ở cách họ tiếp cận thế giới: ESTJ với
                    sự thực tế và tổ chức, ENTJ với tầm nhìn chiến lược, ISTJ
                    với sự tỉ mỉ và chính xác. Hiểu rõ những khác biệt này giúp
                    mỗi nhóm phát huy tối đa tiềm năng của mình trong các vai
                    trò phù hợp.
                  </p>
                </div>
              </div>
            )}
            {activeSection === "advice" && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Main Header */}
                <h2 className="text-3xl font-bold text-green-600 mb-8 border-b-2 border-green-100 pb-4">
                  LỜI KHUYÊN PHÁT TRIỂN DÀNH CHO NGƯỜI GIÁM HỘ (ESTJ)
                </h2>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-green-700 to-yellow-600 p-8 rounded-lg mb-10 text-white">
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
                      Hành trình phát triển cho Người giám hộ
                    </h3>
                    <p className="text-green-200">
                      Là những người có trách nhiệm và kỷ luật cao, ESTJ cần học
                      cách cân bằng giữa nguyên tắc và linh hoạt, giữa công việc
                      và nghỉ ngơi để duy trì hiệu suất lâu dài và các mối quan
                      hệ lành mạnh.
                    </p>
                  </div>
                </div>

                {/* Core Advice Sections */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Develop Strengths */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Phát huy điểm mạnh
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Tận dụng tối đa khả năng tổ chức và lãnh đạo của bạn:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        Áp dụng tinh thần trách nhiệm cao vào các dự án quan
                        trọng
                      </li>
                      <li>Phát huy khả năng thiết lập quy trình hiệu quả</li>
                      <li>
                        Tận dụng sự thực tế để đưa ra quyết định chính xác
                      </li>
                    </ul>
                  </div>

                  {/* Improve Weaknesses */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-yellow-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
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
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Cải thiện điểm yếu
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Những điều ESTJ cần lưu ý để phát triển:
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="italic text-gray-700">
                        "Nguyên tắc là sức mạnh, nhưng sự linh hoạt và thấu hiểu
                        là chìa khóa cho các mối quan hệ bền vững"
                      </p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Kiểm soát cơn giận và sự cứng nhắc</li>
                      <li>Hạn chế xu hướng kiểm soát người khác</li>
                      <li>
                        Chấp nhận những ý tưởng mới dù chưa được chứng minh
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Emotional & Social Skills Section */}
                <div className="mb-10 bg-gradient-to-r from-green-50 to-yellow-50 p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg">
                        <svg
                          className="w-10 h-10 text-green-600"
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
                      <h3 className="text-2xl font-semibold text-green-800 mb-4">
                        Phát triển kỹ năng xã hội & cảm xúc
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm">
                          <h4 className="font-semibold text-green-700 mb-2">
                            Kiểm soát cảm xúc
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Nhận biết và kiềm chế cơn giận</li>
                            <li>Suy xét kỹ trước khi phản ứng</li>
                            <li>Duy trì thái độ khách quan, bình tĩnh</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm">
                          <h4 className="font-semibold text-green-700 mb-2">
                            Giao tiếp tinh tế
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>
                              Thấu hiểu cảm xúc người khác trước khi phê bình
                            </li>
                            <li>
                              Thay vì chỉ trích, hãy lắng nghe và thấu hiểu
                            </li>
                            <li>Đặt câu hỏi để tìm tiếng nói chung</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Self-Care Section */}
                <div className="mb-10">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 bg-green-50 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-sm">
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
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-green-700">
                          Phát triển bản thân
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        ESTJ cần chú ý phát triển toàn diện:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Mở rộng tư duy
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Không vội vàng bỏ qua các ý tưởng mới</li>
                            <li>Tìm hiểu sâu trước khi đánh giá</li>
                            <li>Chấp nhận góc nhìn khác biệt</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Cân bằng cuộc sống
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>
                              Phân biệt rõ thời gian làm việc và nghỉ ngơi
                            </li>
                            <li>Tham gia hoạt động thể thao hoặc thiền định</li>
                            <li>Xây dựng cuộc sống riêng tư lành mạnh</li>
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
                            <div className="flex-shrink-0 bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              1
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Đếm đến 10
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Khi tức giận, hãy đếm đến 10 trước khi phản ứng
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              2
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Ý tưởng mới
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Mỗi tuần tìm hiểu 1 ý tưởng khác biệt với quan
                                điểm của bạn
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              3
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Thời gian nghỉ
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Lên lịch nghỉ ngơi cố định mỗi tuần
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Encouragement */}
                <div className="bg-gradient-to-r from-green-800 to-yellow-700 p-8 rounded-lg text-white">
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
                      Sức mạnh của Người giám hộ
                    </h3>
                    <p className="mb-4 text-green-100">
                      Bạn được ban tặng tinh thần trách nhiệm cao, khả năng tổ
                      chức xuất sắc và sự thực tế. Khi học cách kết hợp những
                      điểm mạnh này với sự linh hoạt và cân bằng, bạn sẽ trở
                      thành người lãnh đạo tuyệt vời và đối tác đáng tin cậy.
                    </p>
                    <div className="bg-yellow-800 bg-opacity-30 p-4 rounded-lg inline-block">
                      <p className="font-medium">
                        "Thế giới cần những người nguyên tắc như bạn - những
                        người thiết lập trật tự, đảm bảo hiệu quả và dẫn dắt đội
                        nhóm vững mạnh. Hãy nhớ rằng sự vĩ đại thực sự đến từ
                        việc kết hợp nguyên tắc với sự thấu hiểu và linh hoạt."
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
export default ESTJPage;
