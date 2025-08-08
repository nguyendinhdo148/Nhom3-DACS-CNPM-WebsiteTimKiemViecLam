import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faPen, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const handleCopyLink = () => {
  const url = "http://localhost:5173/tools/mbti/tinh-cach/entj";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Đã sao chép liên kết!");
    })
    .catch((err) => {
      console.error("Lỗi khi sao chép liên kết:", err);
    });
};
const ENTJPage = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Tổng quan" },
    { id: "strengths-weaknesses", title: "Điểm mạnh và điểm yếu" },
    { id: "relationship", title: "Mối quan hệ" },
    { id: "how-to-be-close", title: "Làm sao để thân thiết với ENTJ" },
    { id: "career-path", title: "Con đường sự nghiệp" },
    { id: "workplace-habits", title: "Thói quen nơi công sở" },
    { id: "compare", title: "So sánh ENTJ với INTJ, ENTP" },
    { id: "advice", title: "Lời khuyên dành cho ENTJ" },
  ];

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="ENTJ-page bg-gradient-to-b from-blue-50 to-purple-50">
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
                ENTJ - Nhà điều hành
              </h1>
            </div>
            <div className="relative w-full">
              <img
                src="/mbti_icons/entj1.png"
                alt="ENTJ - Nhà điều hành"
                className="pointer w-full h-120 object-cover rounded-lg shadow "
              />
            </div>

            {/* Description */}
            <div className="text-lg text-gray-700 max-w-4xl text-center">
              ENTJ là những nhà lãnh đạo bẩm sinh, giỏi quan sát và đưa ra nhận
              định, cũng như luôn tìm ra những hướng giải quyết tối ưu cho vấn
              đề. Với khả năng phân tích và suy luận tốt, các ENTJ không ngừng
              đưa ra những ý tưởng mới. Nhóm tính cách này cũng thể hiện vai trò
              của mình trong việc sắp xếp, lãnh đạo và quản lý con người để đạt
              được mục tiêu chung.
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
                  <h2 className="text-3xl font-bold text-blue-700 mb-4">
                    TỔNG QUAN TÍNH CÁCH ENTJ
                  </h2>
                  <div className="w-20 h-1 bg-gray-500 mx-auto"></div>
                </div>

                {/* Introduction */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-400">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    ENTJ (Nhà điều hành) là nhóm tính cách hiếm gặp và quyền
                    lực, chỉ chiếm khoảng 3% dân số. Họ là những nhà lãnh đạo
                    bẩm sinh với tư duy chiến lược sắc bén, khả năng ra quyết
                    định nhanh chóng và tầm nhìn xa trông rộng. Với sự quyết
                    đoán và tinh thần trách nhiệm cao, ENTJ thường dẫn dắt các
                    tập thể đạt được những thành tựu ấn tượng.
                  </p>
                </div>

                {/* MBTI Breakdown */}
                <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">
                    Ý NGHĨA 4 CHỮ CÁI ENTJ
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "● E - Hướng ngoại (Extraverted)",
                        color: "bg-blue-100",
                        textColor: "text-blue-800",
                        content:
                          "ENTJ tương tác mạnh mẽ với thế giới bên ngoài. Họ tràn đầy năng lượng khi được lãnh đạo và truyền cảm hứng cho người khác.",
                      },
                      {
                        title: "● N - Trực giác (Intuitive)",
                        color: "bg-blue-200",
                        textColor: "text-blue-900",
                        content:
                          "ENTJ tập trung vào bức tranh tổng thể và các khả năng tương lai. Họ có khả năng nhìn xa trông rộng và tư duy chiến lược.",
                      },
                      {
                        title: "● T - Lý trí (Thinking)",
                        color: "bg-gray-100",
                        textColor: "text-gray-800",
                        content:
                          "ENTJ đưa ra quyết định dựa trên logic khách quan. Họ phân tích vấn đề một cách lý trí và hiệu quả, ít bị chi phối bởi cảm xúc.",
                      },
                      {
                        title: "● J - Nguyên tắc (Judging)",
                        color: "bg-blue-100",
                        textColor: "text-blue-800",
                        content:
                          "ENTJ thích sự rõ ràng và có tổ chức. Họ lập kế hoạch chiến lược và kiên định với mục tiêu đã đề ra.",
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
                      title: "Nhà lãnh đạo bẩm sinh",
                      icon: "👑",
                      content:
                        "ENTJ có năng lực lãnh đạo tự nhiên với khả năng truyền cảm hứng và dẫn dắt tập thể. Họ nhìn thấy tiềm năng phát triển trong mọi tình huống.",
                    },
                    {
                      title: "Tư duy chiến lược",
                      icon: "🧠",
                      content:
                        "ENTJ có tầm nhìn xa và khả năng hoạch định chiến lược xuất sắc. Họ luôn tìm cách tối ưu hóa mọi quy trình và hệ thống.",
                    },
                    {
                      title: "Quyết đoán mạnh mẽ",
                      icon: "⚡",
                      content:
                        "ENTJ đưa ra quyết định nhanh chóng và tự tin. Họ không ngại chịu trách nhiệm cho những lựa chọn của mình.",
                    },
                    {
                      title: "Định hướng thành tích",
                      icon: "🏆",
                      content:
                        "ENTJ đặt mục tiêu cao và làm việc không mệt mỏi để đạt được chúng. Họ có tiêu chuẩn cao cho bản thân và những người xung quanh.",
                    },
                  ].map((section, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-400"
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
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-700 mb-4">
                      ĐIỂM MẠNH NỔI BẬT
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>
                          Khả năng lãnh đạo và truyền cảm hứng xuất sắc
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>Tư duy chiến lược và tầm nhìn xa</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>Quyết đoán và dám chịu trách nhiệm</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>Hiệu quả cao trong giải quyết vấn đề</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>Tự tin và có sức thuyết phục mạnh mẽ</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-700 mb-4">
                      ĐIỂM YẾU CẦN LƯU Ý
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">✗</span>
                        <span>Thiếu kiên nhẫn với hiệu suất kém</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">✗</span>
                        <span>Đôi khi quá thẳng thắn gây tổn thương</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">✗</span>
                        <span>Khó thấu hiểu cảm xúc người khác</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">✗</span>
                        <span>Cứng nhắc và ít linh hoạt</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">✗</span>
                        <span>Xu hướng kiểm soát quá mức</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Career & Relationships */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-blue-700 mb-4">
                      ENTJ TRONG CÔNG VIỆC
                    </h3>
                    <p className="text-gray-700 mb-4">
                      ENTJ tỏa sáng trong môi trường cạnh tranh và có cơ hội thể
                      hiện năng lực lãnh đạo:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Cơ hội phát triển chiến lược và hệ thống</li>
                      <li>Môi trường năng động, thách thức</li>
                      <li>Vị trí quản lý, điều hành</li>
                      <li>Được công nhận thành tích</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                      Nghề nghiệp phù hợp: CEO, nhà quản lý, luật sư, nhà đầu
                      tư, tư vấn chiến lược, chính trị gia, doanh nhân.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-700 mb-4">
                      ENTJ TRONG QUAN HỆ
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Trong các mối quan hệ, ENTJ là người thẳng thắn và trung
                      thành:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Thể hiện tình cảm qua hành động thiết thực</li>
                      <li>Mong muốn đối tác cùng phát triển</li>
                      <li>Thẳng thắn trong giao tiếp</li>
                      <li>Có thể thiếu tinh tế về mặt cảm xúc</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                      ENTJ cần học cách lắng nghe và thấu hiểu cảm xúc của người
                      khác để xây dựng mối quan hệ sâu sắc hơn.
                    </p>
                  </div>
                </div>

                {/* Famous People */}
                <div className="bg-gradient-to-r from-blue-50 to-gray-100 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold text-center text-blue-700 mb-6">
                    ENTJ NỔI TIẾNG
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {[
                      { name: "Napoleon", role: "Nhà lãnh đạo" },
                      { name: "Steve Jobs", role: "Doanh nhân" },
                      { name: "Margaret Thatcher", role: "Chính trị gia" },
                      { name: "Gordon Ramsay", role: "Đầu bếp" },
                      { name: "Dwayne Johnson", role: "Diễn viên" },
                      { name: "Adele", role: "Ca sĩ" },
                      { name: "Charlize Theron", role: "Diễn viên" },
                      { name: "Kim Mingyu", role: "Idol" },
                    ].map((person, index) => (
                      <div
                        key={index}
                        className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="h-12 w-12 bg-gradient-to-r from-blue-200 to-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center text-blue-700 font-bold">
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
                <div className="bg-blue-100 p-6 rounded-lg mt-8 text-center">
                  <p className="text-blue-800 italic font-medium">
                    "ENTJ là những nhà lãnh đạo bẩm sinh với tầm nhìn chiến lược
                    và ý chí sắt đá. Họ không ngừng theo đuổi sự xuất sắc và
                    truyền cảm hứng cho người khác vượt qua giới hạn. Dù đôi khi
                    bị cho là quá cứng rắn, ENTJ luôn là động lực thúc đẩy sự
                    tiến bộ và đổi mới trong mọi lĩnh vực họ theo đuổi."
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
                    <span className="text-blue-600">
                      NHÓM TÍNH CÁCH ENTJ (NHÀ ĐIỀU HÀNH)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    ENTJ - Nhóm tính cách "Nhà điều hành" với tư duy chiến lược,
                    khả năng lãnh đạo bẩm sinh và sự quyết đoán mạnh mẽ
                  </p>
                </div>

                {/* Strengths Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-blue-600 flex items-center">
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
                    <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 ml-4"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Strength 1 */}
                    <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
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
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Hướng tới hiệu quả
                          </h4>
                          <p className="text-gray-700">
                            ENTJ coi làm việc không hiệu quả là sự phung phí
                            thời gian, tiền bạc và thể hiện năng lực yếu kém. Họ
                            luôn tìm cách tối ưu hóa mọi quy trình.
                          </p>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg mt-3">
                        <p className="text-sm text-blue-700 italic">
                          "ENTJ không chấp nhận sự lãng phí và luôn tìm cách đạt
                          kết quả tốt nhất với nguồn lực ít nhất"
                        </p>
                      </div>
                    </div>

                    {/* Strength 2 */}
                    <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
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
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Tràn đầy năng lượng
                          </h4>
                          <p className="text-gray-700">
                            ENTJ hành động ngay lập tức với nhiệt huyết cao độ
                            thay vì mất thời gian phân tích quá nhiều. Họ tiếp
                            cận mục tiêu với năng lượng dồi dào.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          Nhiệt huyết
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          Chủ động
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          Quyết liệt
                        </span>
                      </div>
                    </div>

                    {/* Strength 3 */}
                    <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
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
                          <h4 className="font-bold text-gray-800 mb-1">
                            Tự tin
                          </h4>
                          <p className="text-gray-700">
                            ENTJ tin tưởng tuyệt đối vào khả năng của mình. Họ
                            biết rõ mục tiêu, cách thức hành động và luôn chuẩn
                            bị kỹ lưỡng cho mọi tình huống.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-blue-500 rounded-full"
                            style={{ width: "95%" }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-600 mt-1">
                          <span>Mức độ tự tin</span>
                          <span>95% ENTJ được đánh giá cao về sự tự tin</span>
                        </div>
                      </div>
                    </div>

                    {/* Strength 4 */}
                    <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
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
                              d="M17 13l-5 5m0 0l-5-5m5 5V6"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Ý chí mạnh mẽ
                          </h4>
                          <p className="text-gray-700">
                            Khó khăn không làm ENTJ nản lòng mà ngược lại tiếp
                            thêm quyết tâm. Họ kiên trì theo đuổi mục tiêu đến
                            cùng và không bao giờ bỏ cuộc.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Biểu hiện:</span>
                          Kiên định, bền bỉ, không chấp nhận thất bại
                        </div>
                      </div>
                    </div>

                    {/* Strength 5 */}
                    <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
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
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Giỏi lên chiến lược
                          </h4>
                          <p className="text-gray-700">
                            ENTJ phân tích vấn đề đa chiều, đánh giá khách quan
                            và đưa ra giải pháp triệt để. Họ liên tục tìm kiếm
                            phương án hiệu quả hơn.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          Tư duy hệ thống
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          Tầm nhìn xa
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          Phân tích sắc bén
                        </span>
                      </div>
                    </div>

                    {/* Strength 6 */}
                    <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
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
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Lôi cuốn và truyền cảm hứng
                          </h4>
                          <p className="text-gray-700">
                            Sự tự tin và năng lượng của ENTJ truyền cảm hứng
                            mạnh mẽ cho đội nhóm. Họ là nhà lãnh đạo tạo động
                            lực bằng cả lời nói và hành động.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-700 italic">
                          "ENTJ hoạt ngôn và có khả năng thuyết phục đặc biệt,
                          dễ dàng dẫn dắt người khác theo tầm nhìn của mình"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Weaknesses Section */}
                <div className="mt-12">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-700 flex items-center">
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
                    <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent flex-1 ml-4"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Weakness 1 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-gray-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-gray-700"
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
                            Cứng đầu
                          </h4>
                          <p className="text-gray-700">
                            Sự tự tin thái quá khiến ENTJ trở nên bảo thủ và
                            hiếu thắng. Họ miễn cưỡng nhận sai và luôn muốn
                            "thắng" trong mọi cuộc tranh luận.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Gợi ý:</span>
                          Học cách lắng nghe và chấp nhận quan điểm khác biệt
                        </div>
                      </div>
                    </div>

                    {/* Weakness 2 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-gray-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-gray-700"
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
                            Chuyên quyền và áp đặt
                          </h4>
                          <p className="text-gray-700">
                            ENTJ thích chỉ đạo người khác và đôi khi trở nên
                            hống hách. Họ ít khi xem xét ý kiến trái chiều vì
                            luôn cho rằng mình đúng.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700 italic">
                          "ENTJ cần học cách đặt mình vào vị trí người khác để
                          trở thành nhà lãnh đạo toàn diện hơn"
                        </p>
                      </div>
                    </div>

                    {/* Weakness 3 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-gray-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Dễ gây tranh cãi
                          </h4>
                          <p className="text-gray-700">
                            ENTJ thẳng thắn thái quá và thích đối chất. Họ không
                            ngần ngại loại bỏ người cản đường và thường khiến
                            người khác phải đề phòng.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                          Bộc trực
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                          Hiếu thắng
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                          Thiếu tế nhị
                        </span>
                      </div>
                    </div>

                    {/* Weakness 4 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-gray-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Thiếu thấu cảm
                          </h4>
                          <p className="text-gray-700">
                            ENTJ không giỏi thấu hiểu cảm xúc người khác và ít
                            quan tâm đến khía cạnh tình cảm. Điều này khiến họ
                            bị xem là lạnh lùng, khó gần.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-gray-500 rounded-full"
                            style={{ width: "30%" }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-600 mt-1">
                          <span>Chỉ số thấu cảm</span>
                          <span>
                            Chỉ 30% ENTJ quan tâm đến cảm xúc người khác
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Weakness 5 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-gray-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-gray-700"
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
                            Thiếu kiên nhẫn
                          </h4>
                          <p className="text-gray-700">
                            ENTJ không thích chờ đợi người khác suy nghĩ chậm
                            chạp. Họ dễ đánh giá thấp những ai không bắt kịp tốc
                            độ của mình.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Giải pháp:</span>
                          Học cách tôn trọng nhịp độ làm việc khác nhau của mỗi
                          người
                        </div>
                      </div>
                    </div>

                    {/* Weakness 6 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-gray-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-gray-700"
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
                            Kiêu kỳ
                          </h4>
                          <p className="text-gray-700">
                            ENTJ coi trọng người thông minh nhanh nhạy nhưng lại
                            xem thường người kém cỏi hơn. Tính cách này khiến
                            nhiều người e ngại khi tiếp xúc.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Cải thiện:</span>
                          Phát triển sự khiêm tốn và nhìn nhận điểm mạnh của mọi
                          người
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Balance Section */}
                <div className="mt-12 bg-gradient-to-r from-blue-600 to-gray-700 p-8 rounded-xl text-white">
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
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      PHÁT HUY TIỀM NĂNG ENTJ
                    </h3>
                    <p className="mb-4 text-blue-100">
                      Sức mạnh thực sự của ENTJ nằm ở khả năng kết hợp tư duy
                      chiến lược với kỹ năng lãnh đạo. Khi học được cách cân
                      bằng giữa sự quyết đoán và lòng trắc ẩn, giữa hiệu quả
                      công việc và mối quan hệ, họ có thể trở thành những nhà
                      lãnh đạo xuất chúng.
                    </p>
                    <div className=" bg-opacity-20 p-4 rounded-lg inline-block">
                      <p className="font-medium">
                        "Một ENTJ trưởng thành hiểu rằng thành công bền vững đòi
                        hỏi cả trí tuệ sắc bén và trái tim biết lắng nghe. Đây
                        là chìa khóa để họ tạo ảnh hưởng tích cực và lâu dài."
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
                  <h2 className="text-3xl font-bold text-blue-700 mb-3">
                    MỐI QUAN HỆ CỦA ENTJ
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-gray-600 mx-auto rounded-full"></div>
                  <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    ENTJ là những người trọng chữ "tín" hơn vàng trong các mối
                    quan hệ. Với tư duy chiến lược và tinh thần trách nhiệm cao,
                    họ xây dựng những mối quan hệ dựa trên sự tôn trọng và cùng
                    nhau phát triển. ENTJ thẳng thắn, quyết đoán và luôn mong
                    muốn đối phương tiến bộ.
                  </p>
                </div>

                {/* General Relationship Traits */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
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
                      <h3 className="text-xl font-bold text-gray-800">
                        Đặc điểm nổi bật
                      </h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Trung thực và giữ chữ tín</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Thẳng thắn trong giao tiếp</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Đề cao sự phát triển của đối phương</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Thích tranh luận mang tính xây dựng</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-100 p-3 rounded-full mr-4">
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
                        { type: "INTP", desc: "Sáng tạo, độc lập" },
                        { type: "ENFP", desc: "Nhiệt huyết, cởi mở" },
                        { type: "INTJ", desc: "Chiến lược, quyết đoán" },
                        { type: "ENTP", desc: "Thông minh, nhanh nhạy" },
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <span className="font-bold text-blue-600">
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
                <div className="bg-gradient-to-r from-blue-50 to-gray-100 p-8 rounded-2xl mb-12">
                  <div className="flex flex-col md:flex-row items-center mb-8">
                    <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                      <div className="bg-white p-4 rounded-full shadow-lg">
                        <svg
                          className="w-16 h-16 text-blue-500"
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
                      <h3 className="text-2xl font-bold text-blue-700 mb-4">
                        ENTJ TRONG TÌNH YÊU
                      </h3>
                      <p className="text-gray-700 mb-4">
                        ENTJ tiếp cận tình yêu như một dự án cần được lên kế
                        hoạch và đầu tư nghiêm túc. Họ chủ động, quyết đoán và
                        mong muốn xây dựng mối quan hệ lâu dài dựa trên sự phát
                        triển cùng nhau. ENTJ thể hiện tình cảm qua hành động
                        thiết thực hơn lời nói.
                      </p>
                      <div className="bg-white bg-opacity-70 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
                        <p className="italic text-gray-700">
                          "Tình yêu của ENTJ là sự cam kết mạnh mẽ và cùng nhau
                          tiến về phía trước. Họ cần người hiểu được sự thẳng
                          thắn của mình và cùng họ xây dựng tương lai thành
                          công."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Phong cách yêu",
                        icon: "💘",
                        content:
                          "ENTJ chủ động theo đuổi người họ yêu với kế hoạch rõ ràng. Họ đầu tư thời gian và năng lượng để phát triển mối quan hệ theo hướng tích cực.",
                      },
                      {
                        title: "Thách thức",
                        icon: "⚠️",
                        content:
                          "ENTJ có thể quá gia trưởng và thiếu tinh tế trong cảm xúc. Họ cần học cách lắng nghe và thấu hiểu nhu cầu tình cảm của đối phương.",
                      },
                      {
                        title: "Lời khuyên",
                        icon: "✨",
                        content:
                          "ENTJ nên cân bằng giữa lý trí và cảm xúc trong tình yêu. Đối tác nên trân trọng sự chân thành và thẳng thắn của họ.",
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <svg
                      className="w-8 h-8 mr-3 text-blue-500"
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
                    ENTJ TRONG TÌNH BẠN
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-start mb-6">
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
                            Bạn bè tri kỷ
                          </h4>
                          <p className="text-gray-700">
                            ENTJ kết bạn với những người có cùng chí hướng phát
                            triển. Họ là người bạn luôn thẳng thắn góp ý, hỗ trợ
                            bạn bè đạt mục tiêu và không ngừng cải thiện bản
                            thân.
                          </p>
                        </div>
                      </div>

                      <div className="bg-gray-100 p-5 rounded-lg border-l-4 border-blue-400 mb-6">
                        <p className="italic text-gray-700">
                          "ENTJ là người bạn luôn đưa ra giải pháp khi bạn gặp
                          khó khăn. Với tư duy logic và tinh thần trách nhiệm,
                          họ giúp bạn bè nhìn nhận vấn đề từ nhiều góc độ khác
                          nhau."
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start mb-6">
                        <div className="bg-gray-100 p-2 rounded-lg mr-4">
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
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Khó khăn trong tình bạn
                          </h4>
                          <p className="text-gray-700">
                            ENTJ có thể quá thẳng thắn khiến bạn bè tổn thương.
                            Họ cũng khó chấp nhận những người bạn không có chí
                            tiến thủ hoặc không chịu thay đổi.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
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
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Tình bạn sâu sắc
                          </h4>
                          <p className="text-gray-700">
                            Khi đã coi ai là bạn thân, ENTJ sẽ bảo vệ và ủng hộ
                            họ hết mình. Họ sẵn sàng dành thời gian và nguồn lực
                            để giúp bạn bè thành công.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Parenting Section */}
                <div className="bg-gradient-to-r from-blue-50 to-gray-100 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
                    <svg
                      className="w-8 h-8 mr-3 text-blue-500"
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
                    ENTJ KHI LÀM CHA MẸ
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {[
                        {
                          title: "Phong cách nuôi dạy",
                          content:
                            "ENTJ là những phụ huynh nghiêm khắc nhưng công bằng. Họ đặt kỳ vọng cao ở con cái và luôn tìm cách giúp chúng phát huy tối đa tiềm năng. Con cái được khuyến khích độc lập và có tư duy phản biện.",
                        },
                        {
                          title: "Ưu điểm",
                          content:
                            "ENTJ dạy con tính kỷ luật và tinh thần trách nhiệm. Họ là tấm gương về sự quyết đoán, kiên trì và luôn hướng tới mục tiêu. Con cái học được cách tư duy chiến lược từ họ.",
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
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Có xu hướng kiểm soát quá mức</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Thiếu tinh tế trong cảm xúc với con</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>
                              Khó chấp nhận khi con có quan điểm khác biệt
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-100 p-5 rounded-lg border-l-4 border-gray-500">
                        <p className="italic text-gray-700">
                          "Dù đôi khi quá nghiêm khắc, ENTJ là những bậc cha mẹ
                          luôn mong muốn điều tốt nhất cho con. Họ dành cả cuộc
                          đời để chuẩn bị cho con hành trang vững vàng bước vào
                          đời và đạt được thành công."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Quote */}
                <div className="text-center mt-12">
                  <div className="bg-blue-100 p-6 rounded-xl inline-block max-w-2xl">
                    <svg
                      className="w-10 h-10 text-blue-500 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xl font-medium text-blue-800 mb-2">
                      "ENTJ mang đến sự quyết đoán và định hướng rõ ràng trong
                      mọi mối quan hệ. Với tư duy chiến lược và tinh thần trách
                      nhiệm cao, họ là chỗ dựa vững chắc cho người thân và bạn
                      bè. Để hiểu ENTJ, hãy trân trọng sự thẳng thắn của họ và
                      cùng họ xây dựng những mối quan hệ cùng nhau phát triển."
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
                    <span className="text-blue-600">NHÀ ĐIỀU HÀNH (ENTJ)</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    ENTJ - Nhóm tính cách quyết đoán, chiến lược với tư duy lãnh
                    đạo bẩm sinh và khát vọng thành công
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
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-blue-800 mb-3">
                        Nguyên tắc vàng khi tiếp cận ENTJ
                      </h3>
                      <p className="text-gray-700">
                        "Sự trực tiếp và hiệu quả" là chìa khóa để kết nối với
                        ENTJ - nhóm tính cách coi trọng thời gian và kết quả. Để
                        xây dựng mối quan hệ với ENTJ:
                        <span className="font-medium block mt-2">
                          "Hãy thể hiện năng lực bản thân, tôn trọng thời gian
                          của họ và luôn duy trì các cuộc thảo luận ở mức độ trí
                          tuệ cao"
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
                              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Thẳng thắn và chân thành
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Giao tiếp trực tiếp, không vòng vo</li>
                            <li>Trình bày quan điểm rõ ràng, logic</li>
                            <li>Tránh nói ẩn ý hoặc mong đợi họ hiểu ngầm</li>
                            <li>Chấp nhận phản biện thẳng thắn từ họ</li>
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
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Tôn trọng sự độc lập
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Không xâm phạm không gian cá nhân</li>
                            <li>
                              Hiểu rằng họ cần thời gian riêng để làm việc
                            </li>
                            <li>
                              Tránh kiểm soát hoặc đòi hỏi sự chú ý liên tục
                            </li>
                            <li>Đề cao tính tự chủ của họ</li>
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
                              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Thảo luận trí tuệ
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Chuẩn bị các chủ đề thách thức trí tuệ</li>
                            <li>Đưa ra các vấn đề phức tạp cần giải quyết</li>
                            <li>Tham gia tranh luận với lập luận vững chắc</li>
                            <li>Tránh các cuộc nói chuyện tầm phào</li>
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Thể hiện tham vọng
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Chứng minh năng lực và mục tiêu rõ ràng</li>
                            <li>Thể hiện tinh thần cầu tiến</li>
                            <li>Chia sẻ các dự án cá nhân đầy thách thức</li>
                            <li>Tránh thái độ an phận hoặc thiếu định hướng</li>
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
                            className="w-5 h-5 text-blue-500 mr-2"
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
                            <div className="flex-shrink-0 mt-1 mr-2 text-blue-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Giao tiếp rõ ràng, logic và hiệu quả
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-blue-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Khéo léo khi tiếp nhận phê bình từ họ
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-blue-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Đề cao tính hiệu quả trong mọi tương tác
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-blue-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Tôn trọng lịch trình bận rộn của họ
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
                              Nói vòng vo hoặc không rõ ý
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Phản đối gay gắt mà không có lập luận
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Làm phiền họ với chuyện vụn vặt
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Thiếu tôn trọng thời gian của họ
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
                    Xây dựng mối quan hệ với ENTJ đòi hỏi sự tự tin và năng lực.
                    Một khi đã công nhận bạn, họ sẽ trở thành đồng minh mạnh mẽ
                    và người cố vấn đáng tin cậy. Hãy trân trọng sự thẳng thắn
                    và tầm nhìn chiến lược mà họ mang đến cho cuộc sống của bạn.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="italic text-gray-700">
                      "Mối quan hệ với ENTJ như một liên minh chiến lược - cùng
                      nhau giải quyết vấn đề, đạt mục tiêu và không ngừng phát
                      triển. Họ sẽ thách thức bạn trở thành phiên bản tốt nhất
                      của chính mình."
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
                    <span className="text-blue-700">NHÀ ĐIỀU HÀNH (ENTJ)</span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    ENTJ - Những nhà lãnh đạo bẩm sinh với tầm nhìn chiến lược
                    và khả năng dẫn dắt xuất sắc
                  </p>
                </div>

                {/* Hero Section */}
                <div className="bg-gradient-to-l from-blue-500 to-blue-700 p-8 rounded-lg mb-10 text-white">
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      "ENTJ xây dựng sự nghiệp bằng tầm nhìn chiến lược và ý chí
                      sắt đá"
                    </h3>
                    <p className="text-blue-100">
                      Những nhà điều hành phát triển mạnh trong môi trường cạnh
                      tranh và có cơ hội thể hiện năng lực lãnh đạo
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
                        <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          1
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Giai đoạn khởi đầu: Chứng minh năng lực
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Khi mới bắt đầu sự nghiệp, ENTJ thể hiện tố chất lãnh
                          đạo thông qua khả năng phân tích và giải quyết vấn đề.
                          Họ xuất sắc trong việc đề xuất cải tiến và dẫn dắt các
                          dự án nhỏ.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="italic text-gray-700">
                            "ENTJ cần môi trường làm việc năng động, nơi họ có
                            thể phát huy khả năng tư duy chiến lược và quản lý"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stage 2 */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          2
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Giai đoạn bứt phá: Lãnh đạo và chiến lược
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Sau khi tích lũy kinh nghiệm, ENTJ chứng minh được khả
                          năng hoạch định chiến lược và điều hành team hiệu quả.
                          Họ được đánh giá cao nhờ tầm nhìn xa và khả năng
                          truyền cảm hứng.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                            Lãnh đạo
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                            Chiến lược
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                            Quyết đoán
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stage 3 */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          3
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Giai đoạn chín muồi: Kiến tạo và ảnh hưởng
                        </h4>
                        <p className="text-gray-700">
                          Ở đỉnh cao sự nghiệp, ENTJ trở thành những nhà điều
                          hành cấp cao, nhà sáng lập hoặc chuyên gia tư vấn
                          chiến lược. Họ tạo ra ảnh hưởng lớn trong ngành và đào
                          tạo thế hệ lãnh đạo kế cận.
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
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Tư duy chiến lược
                          </h4>
                          <p className="text-gray-700">
                            Khả năng nhìn xa trông rộng và hoạch định kế hoạch
                            dài hạn xuất sắc
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
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
                              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Lãnh đạo bẩm sinh
                          </h4>
                          <p className="text-gray-700">
                            Khả năng dẫn dắt và truyền cảm hứng cho team làm
                            việc hiệu quả
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-start mb-3">
                        <div className="bg-gray-100 p-2 rounded-lg mr-4">
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Quyết đoán
                          </h4>
                          <p className="text-gray-700">
                            Đưa ra quyết định nhanh chóng và chịu trách nhiệm
                            với lựa chọn của mình
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-start mb-3">
                        <div className="bg-gray-100 p-2 rounded-lg mr-4">
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
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Hiệu quả cao
                          </h4>
                          <p className="text-gray-700">
                            Tối ưu hóa quy trình và đạt được kết quả vượt trội
                            trong thời gian ngắn
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
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-blue-700">
                          Quản trị & Điều hành
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> CEO/Giám
                          đốc điều hành
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Quản lý
                          cấp cao
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Nhà sáng
                          lập startup
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Chuyên
                          gia tư vấn chiến lược
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
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
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-gray-700">
                          Tài chính & Luật
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span> Luật sư
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span> Thẩm
                          phán
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span> Quản lý
                          quỹ đầu tư
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span> Chuyên
                          gia phân tích tài chính
                        </li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
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
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-blue-700">
                          Chính trị & Giáo dục
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Chính
                          trị gia
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Giảng
                          viên đại học
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Nhà
                          hoạch định chính sách
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Quản lý
                          giáo dục
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Career Warnings */}
                <div className="mb-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">
                    Cảnh báo nghề nghiệp
                  </h3>
                  <p className="text-gray-700 mb-4">
                    ENTJ nên tránh những môi trường công việc:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Đơn điệu, lặp lại và không có thách thức</li>
                    <li>Không có cơ hội thăng tiến rõ ràng</li>
                    <li>Phải làm việc với người thiếu năng lực</li>
                    <li>Quá tập trung vào cảm xúc thay vì kết quả</li>
                  </ul>
                </div>

                {/* Career Development */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    Lộ trình phát triển
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-blue-500 font-bold">
                        1.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn chuyên môn (0-5 năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Phát triển kỹ năng chuyên sâu, chứng minh năng lực
                          lãnh đạo thông qua các dự án nhỏ
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-blue-500 font-bold">
                        2.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn quản lý (5-10 năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Đảm nhiệm vị trí quản lý cấp trung, phát triển kỹ năng
                          chiến lược và điều hành team
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-blue-500 font-bold">
                        3.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn lãnh đạo (10+ năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Đảm nhiệm vị trí điều hành cấp cao, xây dựng chiến
                          lược tổ chức và ảnh hưởng đến ngành
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Quote */}
                <div className="text-center mt-12">
                  <div className="bg-blue-100 p-6 rounded-xl inline-block max-w-2xl">
                    <svg
                      className="w-10 h-10 text-blue-500 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xl font-medium text-blue-800 mb-2">
                      "ENTJ xây dựng sự nghiệp bằng tầm nhìn chiến lược và ý chí
                      kiên cường. Họ là những nhà lãnh đạo bẩm sinh, luôn hướng
                      tới kết quả xuất sắc và truyền cảm hứng cho team phát
                      triển. Để phát huy hết tiềm năng, ENTJ cần môi trường cạnh
                      tranh, có cơ hội thăng tiến và được ghi nhận thành tích."
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Workplace Habits Section */}
            {activeSection === "workplace-habits" && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Main Header */}
                <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-4">
                  THÓI QUEN NƠI CÔNG SỞ CỦA ENTJ
                </h2>

                {/* Introduction */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    ENTJ tỏa sáng trong môi trường làm việc năng động, nơi họ có
                    thể thể hiện khả năng lãnh đạo bẩm sinh và tư duy chiến
                    lược. Với sự quyết đoán và tầm nhìn xa trông rộng, họ xuất
                    sắc trong các vai trò quản lý và những vị trí đòi hỏi khả
                    năng ra quyết định nhanh chóng.
                  </p>
                </div>

                {/* As Employees Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-blue-600">
                      ENTJ khi là cấp dưới
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Điểm mạnh nổi bật
                      </h4>
                      <p className="text-gray-700">
                        Chủ động nhận nhiệm vụ khó. Tiêu chuẩn công việc cao.
                        Tiếp thu phê bình để cải thiện. Làm việc hiệu quả theo
                        tiến độ. Cống hiến hết mình khi được tin tưởng.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Thách thức
                      </h4>
                      <p className="text-gray-700">
                        Dễ mất phương hướng khi tiến độ chậm. Khó chịu với quy
                        trình cứng nhắc. Mong muốn được tự chủ cao. Ít kiên nhẫn
                        với cấp trên thiếu năng lực. Luôn muốn chứng minh bản
                        thân.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="italic text-gray-700">
                      "ENTJ là nhân viên xuất sắc nhưng cần môi trường thách
                      thức. Họ làm việc tốt nhất khi được giao quyền tự chủ và
                      có cơ hội thể hiện năng lực lãnh đạo."
                    </p>
                  </div>
                </div>

                {/* As Colleagues Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-blue-600">
                      ENTJ khi là đồng nghiệp
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Giá trị mang lại
                      </h4>
                      <p className="text-gray-700">
                        Chủ động dẫn dắt đội nhóm. Chia sẻ ý tưởng chiến lược.
                        Truyền cảm hứng làm việc. Giải quyết vấn đề hiệu quả.
                        Thúc đẩy tiến độ công việc.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Điều cần lưu ý
                      </h4>
                      <p className="text-gray-700">
                        Có thể hơi hống hách. Ít kiên nhẫn với đồng nghiệp chậm
                        chạp. Thẳng thắn đến mức gây khó chịu. Không khoan
                        nhượng với thái độ bất hợp tác. Dễ "blacklist" người
                        không đáp ứng tiêu chuẩn.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 mt-1 mr-3 text-blue-500 text-xl">
                      💡
                    </div>
                    <div>
                      <p className="text-gray-700">
                        "Đồng nghiệp ENTJ giống như 'động cơ' của nhóm - luôn
                        thúc đẩy mọi người vượt qua giới hạn và đạt kết quả xuất
                        sắc, dù đôi khi hơi áp đặt."
                      </p>
                    </div>
                  </div>
                </div>

                {/* As Managers Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-blue-600">
                      ENTJ khi làm quản lý
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Phong cách lãnh đạo
                      </h4>
                      <p className="text-gray-700">
                        Giao tiếp rõ ràng mục tiêu. Phân công theo điểm mạnh
                        từng người. Đề cao hiệu quả công việc. Thúc đẩy đội nhóm
                        vượt giới hạn. Xây dựng chiến lược dài hạn.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Ưu tiên
                      </h4>
                      <p className="text-gray-700">
                        Đánh giá cao năng lực và tham vọng. Chú trọng kết quả
                        cuối cùng. Duy trì kỷ luật và tiến độ. Phát hiện và phát
                        triển tài năng. Loại bỏ yếu tố kém hiệu quả.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3 text-gray-600">⚠️</div>
                      <div>
                        <p className="text-gray-700 font-medium">
                          Lời khuyên cho lãnh đạo ENTJ: Cần cân bằng giữa hiệu
                          quả công việc và quan tâm đến cảm xúc nhân viên. Học
                          cách lắng nghe nhiều hơn và kiềm chế xu hướng độc
                          đoán.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career Path Section */}
                <div className="mt-10 bg-gradient-to-r from-blue-600 to-gray-700 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-3">
                    Con đường sự nghiệp lý tưởng
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-r from-gray-800 to-blue-600 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">Lãnh đạo & Quản lý</h4>
                      <p className="text-sm">
                        CEO, Giám đốc điều hành, Quản lý dự án, Giám đốc chiến
                        lược, Chủ doanh nghiệp
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-gray-800 to-blue-600 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">Tư vấn & Phân tích</h4>
                      <p className="text-sm">
                        Tư vấn quản lý, Nhà phân tích tài chính, Luật sư, Cố vấn
                        chiến lược, Chuyên gia tái cấu trúc
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-gray-800 to-blue-600 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Khởi nghiệp & Đổi mới
                      </h4>
                      <p className="text-sm">
                        Nhà đầu tư mạo hiểm, Nhà sáng lập startup, Nhà phát
                        triển kinh doanh, Chuyên gia đổi mới
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-blue-100 text-sm">
                    <p>
                      ENTJ phát triển mạnh trong môi trường cạnh tranh, nơi họ
                      có thể thực thi quyền lãnh đạo và tạo ra sự thay đổi. Họ
                      cần công việc mang tính thách thức với cơ hội thăng tiến
                      rõ ràng.
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
                    <span className="text-blue-700">NHÀ ĐIỀU HÀNH (ENTJ)</span>{" "}
                    VỚI
                    <span className="text-gray-700">
                      {" "}
                      NHÀ KHOA HỌC (INTJ)
                    </span>{" "}
                    VÀ
                    <span className="text-blue-400"> NGƯỜI NHÌN XA (ENTP)</span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Phân tích sâu về 3 nhóm tính cách thuộc nhóm "Chiến lược
                    gia" - những nhà tư duy logic và quyết đoán
                  </p>
                </div>

                {/* Core Similarities */}
                <div className="bg-gray-50 p-6 rounded-lg mb-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-2"
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
                    Điểm chung cốt lõi của bộ ba Chiến lược gia (NT)
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          N
                        </div>
                        <h4 className="font-bold text-gray-800">
                          Tư duy chiến lược
                        </h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Cả ba đều có khả năng nhìn xa trông rộng và tư duy hệ
                        thống
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          T
                        </div>
                        <h4 className="font-bold text-gray-800">
                          Quyết định lý trí
                        </h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Đưa ra quyết định dựa trên logic và hiệu quả thay vì cảm
                        xúc
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          🧠
                        </div>
                        <h4 className="font-bold text-gray-800">
                          Trí tuệ xuất chúng
                        </h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Có chỉ số thông minh cao và khả năng phân tích nhạy bén
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pair Comparisons */}
                <div className="space-y-10">
                  {/* ENTJ vs INTJ */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-blue-600 to-gray-600 w-2 h-10 mr-3 rounded-full"></div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        <span className="text-blue-700">ENTJ</span> vs{" "}
                        <span className="text-gray-700">INTJ</span>:
                        <span className="text-sm font-normal ml-2">
                          Nhà điều hành hướng ngoại vs Nhà khoa học hướng nội
                        </span>
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          Tương đồng chính
                        </h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Đều có tư duy chiến lược và logic mạnh mẽ</li>
                          <li>Quyết đoán và tự tin trong các quyết định</li>
                          <li>Đặt hiệu quả công việc lên hàng đầu</li>
                          <li>Có khả năng lãnh đạo xuất sắc</li>
                          <li>Đề cao năng lực và sự chuyên nghiệp</li>
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
                              ENTJ (E) thích tương tác xã hội, INTJ (I) thích
                              làm việc độc lập
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Phong cách lãnh đạo
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ENTJ trực tiếp và quyết liệt, INTJ kín đáo và
                              chiến lược
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Cách tiếp cận
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ENTJ hành động nhanh, INTJ phân tích sâu trước khi
                              hành động
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-100 border-l-4 border-gray-500 p-4 rounded-r-lg">
                      <p className="italic text-gray-700">
                        "ENTJ như một vị tướng trên chiến trường, INTJ như một
                        nhà chiến lược trong phòng làm việc. Cả hai đều xuất sắc
                        nhưng với cách tiếp cận khác biệt: một bên trực tiếp chỉ
                        huy, một bên lên kế hoạch tỉ mỉ."
                      </p>
                    </div>
                  </div>

                  {/* ENTJ vs ENTP */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-400 w-2 h-10 mr-3 rounded-full"></div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        <span className="text-blue-700">ENTJ</span> vs{" "}
                        <span className="text-blue-400">ENTP</span>:
                        <span className="text-sm font-normal ml-2">
                          Nhà điều hành nguyên tắc vs Người nhìn xa linh hoạt
                        </span>
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          Tương đồng chính
                        </h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Đều là người hướng ngoại và thích tranh luận</li>
                          <li>Có tư duy sáng tạo và chiến lược</li>
                          <li>Khả năng thuyết phục và giao tiếp xuất sắc</li>
                          <li>Thích thử thách và đổi mới</li>
                          <li>Không ngại xung đột khi cần thiết</li>
                        </ul>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 text-blue-400 mr-2"
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
                              Tính cách
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ENTJ (J) có tổ chức và quyết đoán, ENTP (P) linh
                              hoạt và tò mò
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Mục tiêu
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ENTJ tập trung vào kết quả, ENTP quan tâm đến quá
                              trình
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Phong cách
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ENTJ thích kiểm soát, ENTP thích khám phá khả năng
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-100 border-l-4 border-blue-400 p-4 rounded-r-lg">
                      <p className="italic text-gray-700">
                        "ENTJ như một nhà quản lý quyết đoán, ENTP như một nhà
                        phát minh sáng tạo. Cả hai đều thông minh nhưng ENTJ
                        hướng tới hiệu quả còn ENTP hướng tới khả năng."
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
                      <thead className="bg-blue-700 text-white">
                        <tr>
                          <th className="py-3 px-4 text-left font-semibold">
                            Đặc điểm
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            INTJ
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            ENTJ
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            ENTP
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {/* Row 1 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                            Chức năng nhận thức chính
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-gray-100">
                            Trực giác nội tâm (Ni) + Tư duy ngoại hướng (Te)
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-blue-50">
                            Tư duy ngoại hướng (Te) + Trực giác nội tâm (Ni)
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-blue-100">
                            Trực giác ngoại hướng (Ne) + Tư duy nội tâm (Ti)
                          </td>
                        </tr>
                        {/* Row 2 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Phong cách làm việc
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Độc lập, tập trung, phân tích sâu, ưa sự chính xác
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Quyết đoán, hiệu quả, tập trung vào kết quả, thích
                            lãnh đạo
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Sáng tạo, linh hoạt, thích thảo luận, khám phá khả
                            năng
                          </td>
                        </tr>
                        {/* Row 3 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                            Trong quan hệ
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-gray-100">
                            Kín đáo, ít nói, chọn lọc trong giao tiếp, trung
                            thành
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-blue-50">
                            Trực tiếp, quyết đoán, có xu hướng kiểm soát, thích
                            dẫn dắt
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-blue-100">
                            Hòa đồng, tranh luận, thích giao tiếp, ít kiểm soát
                          </td>
                        </tr>
                        {/* Row 4 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Ưu thế nghề nghiệp
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Khoa học, công nghệ, phân tích chiến lược, nghiên
                            cứu
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Quản lý cấp cao, kinh doanh, luật, chính trị
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Khởi nghiệp, marketing, tư vấn, sáng tạo nội dung
                          </td>
                        </tr>
                        {/* Row 5 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                            Điểm mạnh
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-gray-100">
                            Tầm nhìn dài hạn, độc lập, kiên định, phân tích sâu
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-blue-50">
                            Lãnh đạo xuất sắc, quyết đoán, hiệu quả, thực thi
                            mạnh mẽ
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-blue-100">
                            Sáng tạo, linh hoạt, thích ứng nhanh, thuyết phục
                            tốt
                          </td>
                        </tr>
                        {/* Row 6 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Điểm yếu
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Quá độc lập, khó thể hiện cảm xúc, cứng nhắc
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Áp đặt, thiếu kiên nhẫn, ít quan tâm cảm xúc người
                            khác
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Thiếu kiên định, dễ chán, hay tranh cãi, khó hoàn
                            thành
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
                    {/* INTJ Column */}
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
                              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-gray-700">INTJ</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span> Nhà khoa
                          học/Nghiên cứu
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span> Kỹ sư
                          phần mềm
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span> Chiến
                          lược gia
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span> Kiến
                          trúc sư hệ thống
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span> Nhà đầu
                          tư
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
                          <span className="text-blue-500 mr-2">•</span> CEO/Giám
                          đốc điều hành
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Luật sư
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Quản lý
                          cấp cao
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Chính
                          trị gia
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Nhà tư
                          vấn chiến lược
                        </li>
                      </ul>
                    </div>

                    {/* ENTP Column */}
                    <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-blue-400">ENTP</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span> Doanh
                          nhân
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span> Nhà sáng
                          tạo nội dung
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span> Nhà
                          marketing
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span> Nhà báo
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span> Luật sư
                          tranh tụng
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Final Thoughts */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    Nhận định cuối
                  </h3>
                  <p className="text-gray-700 mb-3">
                    ENTJ, INTJ và ENTP đều là những nhóm tính cách chiến lược và
                    thông minh, nhưng mỗi nhóm có thế mạnh riêng:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                    <li>
                      <span className="font-medium">INTJ</span> - Nhà chiến lược
                      độc lập và sâu sắc
                    </li>
                    <li>
                      <span className="font-medium">ENTJ</span> - Nhà lãnh đạo
                      quyết đoán và hiệu quả
                    </li>
                    <li>
                      <span className="font-medium">ENTP</span> - Nhà sáng tạo
                      linh hoạt và thuyết phục
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Sự khác biệt chính nằm ở cách họ tiếp cận vấn đề: INTJ với
                    sự phân tích độc lập, ENTJ với sự quyết đoán trong hành
                    động, ENTP với sự linh hoạt trong tư duy. Hiểu rõ những khác
                    biệt này giúp mỗi nhóm phát huy tối đa tiềm năng của mình.
                  </p>
                </div>
              </div>
            )}
            {activeSection === "advice" && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Main Header */}
                <h2 className="text-3xl font-bold text-blue-600 mb-8 border-b-2 border-blue-100 pb-4">
                  LỜI KHUYÊN PHÁT TRIỂN DÀNH CHO NHÀ ĐIỀU HÀNH (ENTJ)
                </h2>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-600 to-gray-700 p-8 rounded-lg mb-10 text-white">
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
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      Hành trình phát triển cho nhà lãnh đạo
                    </h3>
                    <p className="text-blue-200">
                      Là những người quyết đoán và có tầm nhìn, ENTJ cần học
                      cách cân bằng giữa hiệu quả công việc và quan hệ con
                      người, giữa sự quyết liệt và lòng trắc ẩn để trở thành nhà
                      lãnh đạo toàn diện.
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Phát huy thế mạnh
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Tận dụng tối đa khả năng lãnh đạo và tư duy chiến lược của
                      bạn:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Thể hiện khả năng đánh giá tình huống nhanh nhạy</li>
                      <li>Chủ động dẫn dắt trong các tình huống khó khăn</li>
                      <li>Phát triển tiềm năng lãnh đạo bẩm sinh</li>
                    </ul>
                  </div>

                  {/* Improve Weaknesses */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
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
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Khắc phục điểm yếu
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Những điều ENTJ cần lưu ý để phát triển:
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="italic text-gray-700">
                        "Lãnh đạo giỏi không chỉ biết đưa ra quyết định mà còn
                        biết lắng nghe"
                      </p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Chấp nhận rằng không ai hoàn hảo, kể cả bản thân</li>
                      <li>
                        Hiểu rằng quan điểm của bạn không phải là duy nhất đúng
                      </li>
                      <li>Cho phép mọi việc diễn ra tự nhiên khi cần thiết</li>
                    </ul>
                  </div>
                </div>

                {/* Key Advice Section */}
                <div className="mb-10 bg-gradient-to-r from-blue-50 to-gray-50 p-8 rounded-lg">
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
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                        Chiến lược phát triển then chốt
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                          <h4 className="font-semibold text-blue-700 mb-2">
                            Xây dựng quan hệ
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Tìm kiếm người có cùng tư duy chiến lược</li>
                            <li>Thể hiện sự tôn trọng chân thành</li>
                            <li>Luôn là chính mình trong mọi tình huống</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                          <h4 className="font-semibold text-blue-700 mb-2">
                            Lắng nghe tích cực
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Thấu hiểu suy nghĩ của người khác</li>
                            <li>Xem xét nhu cầu của đồng đội</li>
                            <li>Tạo sự hòa hợp trong công việc</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                          <h4 className="font-semibold text-blue-700 mb-2">
                            Tự chịu trách nhiệm
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Không đổ lỗi cho người khác</li>
                            <li>Tự tìm giải pháp cho vấn đề</li>
                            <li>Làm chủ cuộc sống của chính mình</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                          <h4 className="font-semibold text-blue-700 mb-2">
                            Phân tích đa chiều
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Xem xét mọi góc độ của vấn đề</li>
                            <li>Hiểu các yếu tố trừu tượng</li>
                            <li>Dành thời gian thư giãn để có ý tưởng mới</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Self-Improvement Section */}
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
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700">
                          Kiểm soát cảm xúc
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        ENTJ cần chú ý phát triển khả năng tự chủ:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Giữ bình tĩnh
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Tránh để cảm xúc chi phối quyết định</li>
                            <li>Kiểm soát cơn giận trong mọi tình huống</li>
                            <li>Nhận thức được sức mạnh của lời nói</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Tư duy tích cực
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Tránh soi mói điểm yếu của người khác</li>
                            <li>Nhìn nhận mặt tốt của mọi người</li>
                            <li>Biến cảm xúc thành sức mạnh</li>
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
                                Lắng nghe chủ động
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Mỗi ngày dành 15 phút lắng nghe mà không phản
                                biện
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              2
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Nhìn nhận đa chiều
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Mỗi tuần xem xét một vấn đề từ 3 góc độ khác
                                nhau
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              3
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Thư giãn sáng tạo
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Dành 30 phút mỗi ngày cho hoạt động không liên
                                quan công việc
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Encouragement */}
                <div className="bg-gradient-to-r from-blue-800 to-gray-900 p-8 rounded-lg text-white">
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
                      Sức mạnh của Nhà điều hành
                    </h3>
                    <p className="mb-4 text-blue-100">
                      Bạn được ban tặng tư duy chiến lược, khả năng lãnh đạo và
                      ý chí mạnh mẽ. Khi học cách kết hợp những điểm mạnh này
                      với sự đồng cảm và kiên nhẫn, bạn sẽ trở thành nhà lãnh
                      đạo mà mọi người ngưỡng mộ và tự nguyện đi theo.
                    </p>
                    <div className="bg-gray-800 bg-opacity-30 p-4 rounded-lg inline-block">
                      <p className="font-medium">
                        "Thế giới cần những nhà lãnh đạo như bạn - những người
                        biết dẫn dắt, tạo ra sự thay đổi và mang lại kết quả
                        xuất sắc. Hãy nhớ rằng thành công thực sự đến từ sự kết
                        hợp giữa hiệu quả công việc và sự thấu hiểu con người."
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
export default ENTJPage;
