import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faPen, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const handleCopyLink = () => {
  const url = "http://localhost:5173/tools/mbti/tinh-cach/intp";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Đã sao chép liên kết!");
    })
    .catch((err) => {
      console.error("Lỗi khi sao chép liên kết:", err);
    });
};
const INTPPage = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Tổng quan" },
    { id: "strengths-weaknesses", title: "Điểm mạnh và điểm yếu" },
    { id: "relationship", title: "Mối quan hệ" },
    { id: "how-to-be-close", title: "Làm sao để thân thiết với INTP" },
    { id: "career-path", title: "Con đường sự nghiệp" },
    { id: "workplace-habits", title: "Thói quen nơi công sở" },
    { id: "compare", title: "So sánh INTP với ENTP, ISTP" },
    { id: "advice", title: "Lời khuyên dành cho INTP" },
  ];

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="INTP-page bg-gradient-to-b from-blue-50 to-purple-50">
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
                INTP - Nhà tư duy
              </h1>
            </div>
            <div className="relative w-full">
              <img
                src="/mbti_icons/intp1.webp"
                alt="INTP - Nhà tư duy"
                className="pointer w-full h-120 object-cover rounded-lg shadow "
              />
            </div>

            {/* Description */}
            <div className="text-lg text-gray-700 max-w-4xl text-center">
              INTP là những người yêu thích tìm tòi về thế giới xung quanh, về
              nhân sinh và vũ trụ. Giống với nhóm ISTP, các INTP cũng đánh giá
              sự vật sự việc và ra quyết định dựa trên tư duy logic thay vì cảm
              xúc hay ý kiến chủ quan. Những Nhà tư duy có khả năng tập trung
              cao độ và thích một mình tìm tòi về thế giới, họ muốn hoàn thiện
              bản thân ở tất cả những lĩnh vực mà mình yêu thích.
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
                  <h2 className="text-3xl font-bold text-indigo-800 mb-4">
                    TỔNG QUAN TÍNH CÁCH INTP
                  </h2>
                  <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
                </div>

                {/* Introduction */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    INTP (Nhà tư duy) là những người yêu thích tìm tòi về thế
                    giới xung quanh, về nhân sinh và vũ trụ. Giống với nhóm
                    ISTP, các INTP cũng đánh giá sự vật sự việc và ra quyết định
                    dựa trên tư duy logic thay vì cảm xúc hay ý kiến chủ quan.
                    Những Nhà tư duy có khả năng tập trung cao độ và thích một
                    mình tìm tòi về thế giới, họ muốn hoàn thiện bản thân ở tất
                    cả những lĩnh vực mà mình yêu thích.
                  </p>
                </div>

                {/* MBTI Breakdown */}
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
                    Ý NGHĨA 4 CHỮ CÁI INTP
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "● I - Hướng nội (Introverted)",
                        color: "bg-indigo-100",
                        textColor: "text-indigo-800",
                        content:
                          "Đối với những người thuộc nhóm tính cách INTP, thế giới ẩn sâu bên trong mỗi chúng ta mới là thế giới thật. Ngược lại, thế giới bên ngoài là nơi thuộc về những người E - Hướng ngoại.",
                      },
                      {
                        title: "● N - Trực giác (Intuitive)",
                        color: "bg-blue-100",
                        textColor: "text-blue-800",
                        content:
                          "Bạn tập trung vào ý nghĩa của sự vật, sự việc, khác với những người có tính cách S - Giác quan sử dụng cả năm giác quan thị giác, thính giác, khứu giác, vị giác, cảm giác để nhìn nhận và đánh giá.",
                      },
                      {
                        title: "● T - Lý trí (Thinking)",
                        color: "bg-teal-100",
                        textColor: "text-teal-800",
                        content:
                          "Bạn đưa ra quyết định dựa trên góc nhìn thực tế bằng số liệu và đo lường chính xác. Ngược lại, các F - Tình cảm ưu tiên đưa ra quyết định dựa trên cảm nhận cá nhân.",
                      },
                      {
                        title: "● P - Linh hoạt (Perceiving)",
                        color: "bg-purple-100",
                        textColor: "text-purple-800",
                        content:
                          "Bạn thỏa thích vẫy vùng trong thế giới của riêng mình với những quy tắc ngầm được bạn tự tay sắp xếp. Trái lại, những người thuộc nhóm J - Nguyên tắc lại cảm thấy ổn khi được áp cho những luật lệ được sắp đặt sẵn.",
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
                      title: "Cuộc sống thu mình",
                      icon: "🏡",
                      content:
                        "Những người thuộc nhóm tính cách INTP sống trong vòng tròn của riêng mình, nơi họ tìm kiếm lời giải đáp cho những vấn đề cá nhân (thường là mang tính học thuật) mặc cho thế giới ngoài kia đang xoay vần ra sao.",
                    },
                    {
                      title: "Tri thức là tất cả",
                      icon: "📚",
                      content:
                        "Các INTP đánh giá cao tri thức hơn mọi thứ. Bộ não của họ liên tục hoạt động để tạo nên những lý thuyết mới và chứng minh cũng như phản biện những lý thuyết sẵn có. Đối với những Nhà tư duy, không có quy luật gì là bất biến, chỉ có logic là trường tồn.",
                    },
                    {
                      title: "Đề cao tính logic",
                      icon: "🧠",
                      content:
                        "Là một người yêu sự logic, các INTP không đánh giá những kết luận được đưa ra dựa trên tình cảm hoặc bị chi phối quá nhiều bởi cảm xúc. Họ cần khắc phục điểm yếu là thiếu tinh tế trong nhìn nhận cảm xúc người khác.",
                    },
                    {
                      title: "Độc lập và độc đáo",
                      icon: "✨",
                      content:
                        "Các INTP thường rất độc lập và độc đáo trong lối tư duy. Họ luôn bị thu hút bởi những ý tưởng mới, vì vậy rất nhiều nghiên cứu khoa học đột phá trên thế giới được tìm ra bởi những người thuộc nhóm tính cách INTP.",
                    },
                  ].map((section, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-300"
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

                {/* Career & Relationships */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-700 mb-4">
                      INTP trong công việc
                    </h3>
                    <p className="text-gray-700 mb-4">
                      INTP phát huy thế mạnh trong các lĩnh vực đòi hỏi tư duy
                      sáng tạo và phân tích sâu như khoa học, nghiên cứu, công
                      nghệ thông tin. Họ là những nhà lý thuyết xuất sắc nhưng
                      có thể gặp khó khăn trong việc áp dụng thực tiễn. Môi
                      trường làm việc lý tưởng của INTP là nơi họ được tự do
                      khám phá ý tưởng mới mà không bị gò bó bởi quy tắc cứng
                      nhắc.
                    </p>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-indigo-700 mb-4">
                      INTP trong quan hệ
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Trong các mối quan hệ, INTP thường kín đáo và dè dặt. Họ
                      ít khi chủ động mở rộng mối quan hệ nhưng rất trung thành
                      với những người bạn thân thiết. INTP đánh giá cao những
                      cuộc trò chuyện sâu sắc về ý tưởng và lý thuyết hơn là
                      những tán gẫu xã giao thông thường.
                    </p>
                  </div>
                </div>

                {/* Famous People */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold text-center text-blue-700 mb-6">
                    INTP NỔI TIẾNG
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {[
                      { name: "Albert Einstein", role: "Nhà vật lý học" },
                      { name: "Charles Darwin", role: "Nhà tự nhiên học" },
                      { name: "Marie Curie", role: "Nhà vật lý, hóa học" },
                      { name: "Abraham Lincoln", role: "Tổng thống Mỹ" },
                      { name: "Larry Page", role: "Đồng sáng lập Google" },
                      { name: "Kristen Stewart", role: "Diễn viên" },
                      { name: "SUGA (BTS)", role: "Ca sĩ, nhạc sĩ" },
                      { name: "Soyeon ((G)I-DLE)", role: "Ca sĩ, rapper" },
                    ].map((person, index) => (
                      <div
                        key={index}
                        className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="h-12 w-12 bg-blue-200 rounded-full mx-auto mb-2 flex items-center justify-center text-blue-700 font-bold">
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
                    "INTP là những nhà tư tưởng độc lập với trí tuệ sắc bén. Họ
                    không ngừng đặt câu hỏi và tìm kiếm chân lý, luôn khao khát
                    hiểu biết những nguyên lý cơ bản chi phối thế giới xung
                    quanh."
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
                    PHÂN TÍCH SWOT CỦA{" "}
                    <span className="text-indigo-600">
                      NHÀ LÝ THUYẾT (INTP)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    INTP - Nhóm tính cách hiếm gặp (3% dân số) với tư duy phân
                    tích sắc bén và trí tò mò vô tận
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
                      THẾ MẠNH CỐT LÕI
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
                              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Tư Duy Phân Tích
                          </h4>
                          <p className="text-gray-700">
                            Khả năng nhìn thấy mối liên hệ giữa các ý tưởng
                            tưởng chừng không liên quan, phát hiện các mô hình
                            ẩn giấu và giải quyết vấn đề bằng cách tiếp cận độc
                            đáo.
                          </p>
                        </div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg mt-3">
                        <p className="text-sm text-green-700 italic">
                          "INTP có thể phân tích cùng lúc nhiều lớp thông tin để
                          tìm ra giải pháp tối ưu"
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
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Sáng Tạo Đột Phá
                          </h4>
                          <p className="text-gray-700">
                            Trí tưởng tượng phong phú giúp INTP đưa ra những ý
                            tưởng mới lạ, kết hợp các khái niệm theo cách chưa
                            từng có tiền lệ.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          Tư duy đa chiều
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          Liên tưởng độc đáo
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          Giải pháp sáng tạo
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
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Ham Học Hỏi
                          </h4>
                          <p className="text-gray-700">
                            Khát khao tri thức không giới hạn, luôn tìm kiếm và
                            hấp thu thông tin mới trong các lĩnh vực đa dạng.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Ứng dụng:</span>
                          Nghiên cứu đa ngành, phát triển lý thuyết mới, giải
                          quyết vấn đề phức tạp
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
                              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Tư Duy Khách Quan
                          </h4>
                          <p className="text-gray-700">
                            Đánh giá mọi vấn đề dựa trên logic và bằng chứng,
                            không bị ảnh hưởng bởi định kiến hay cảm xúc cá
                            nhân.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-green-500 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-600 mt-1">
                          <span>Độ khách quan</span>
                          <span>90% INTP ưu tiên sự thật hơn quan điểm</span>
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
                      ĐIỂM CẦN CẢI THIỆN
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
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Thiếu Kết Nối Xã Hội
                          </h4>
                          <p className="text-gray-700">
                            Thường đắm chìm trong thế giới nội tâm đến mức bỏ
                            qua các tương tác xã hội, dẫn đến cảm giác cô lập và
                            khó xây dựng mạng lưới quan hệ.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Giải pháp:</span>
                          Đặt mục tiêu giao tiếp nhỏ hàng ngày, tham gia nhóm có
                          chung sở thích
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
                            Trì Hoãn Kinh Niên
                          </h4>
                          <p className="text-gray-700">
                            Luôn tìm kiếm thêm thông tin hoặc chờ "thời điểm
                            hoàn hảo", dẫn đến việc trì hoãn quyết định và hành
                            động, đặc biệt với các nhiệm vụ thực tế.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Mẹo:</span>
                          Áp dụng nguyên tắc 80/20 - hành động khi đạt 80% thông
                          tin cần thiết
                        </div>
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
                              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Thiếu Tế Nhị Cảm Xúc
                          </h4>
                          <p className="text-gray-700">
                            Thường bỏ qua hoặc đánh giá thấp yếu tố cảm xúc
                            trong giao tiếp, có thể vô tình làm tổn thương người
                            khác bằng sự thẳng thắn quá mức.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 bg-red-50 p-3 rounded-lg">
                        <p className="text-sm text-red-700 italic">
                          "INTP thường quên rằng không phải ai cũng coi logic là
                          ưu tiên hàng đầu như họ"
                        </p>
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
                              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Bất Mãn Với Thực Tế
                          </h4>
                          <p className="text-gray-700">
                            Luôn tìm kiếm sự hoàn hảo lý thuyết, dễ thất vọng
                            với những hạn chế của thực tế, dẫn đến bỏ dở nhiều
                            dự án giữa chừng.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Cải thiện:</span>
                          Học cách chấp nhận "đủ tốt" và tập trung vào tính ứng
                          dụng thực tế
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Balance Section */}
                <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-xl text-white">
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
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      CÂN BẰNG LÀ CHÌA KHÓA
                    </h3>
                    <p className="mb-4 text-indigo-100">
                      Sức mạnh thực sự của INTP nằm ở khả năng kết hợp tư duy
                      phân tích với sự cởi mở, trí tuệ lý thuyết với ứng dụng
                      thực tế. Khi học được cách cân bằng giữa thế giới ý tưởng
                      và nhu cầu thực tiễn, họ có thể biến những suy nghĩ phức
                      tạp thành đóng góp cụ thể.
                    </p>
                    <div className="bg-opacity-20 p-4 rounded-lg inline-block">
                      <p className="font-medium">
                        "Một INTP trưởng thành hiểu rằng giá trị của kiến thức
                        không nằm ở sự phức tạp, mà ở khả năng ứng dụng nó để
                        cải thiện thế giới thực."
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
                  <h2 className="text-3xl font-bold text-blue-800 mb-3">
                    MỐI QUAN HỆ CỦA INTP
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
                  <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    INTP tiếp cận các mối quan hệ với tư duy phân tích và độc
                    lập. Họ đánh giá cao những kết nối trí tuệ và thường cần
                    thời gian để mở lòng với người khác.
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
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Tính cách trong quan hệ
                      </h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Độc lập và cần nhiều không gian riêng</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Đánh giá cao trí tuệ và sự sáng tạo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Trực tiếp và logic trong giao tiếp</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Không giỏi thể hiện cảm xúc</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-indigo-100 p-3 rounded-full mr-4">
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
                        { type: "ENTJ", desc: "Kích thích trí tuệ" },
                        { type: "ENFJ", desc: "Cân bằng cảm xúc" },
                        { type: "INTJ", desc: "Cùng chia sẻ đam mê tri thức" },
                        { type: "INFJ", desc: "Hiểu được chiều sâu tư duy" },
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
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl mb-12">
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
                        INTP TRONG TÌNH YÊU
                      </h3>
                      <p className="text-gray-700 mb-4">
                        INTP tiếp cận tình yêu với sự tò mò và phân tích. Họ tìm
                        kiếm đối tác có thể chia sẻ đam mê tri thức và tôn trọng
                        sự độc lập của nhau. Khi đã cam kết, họ là những người
                        chân thành và trung thành.
                      </p>
                      <div className="bg-white bg-opacity-70 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
                        <p className="italic text-gray-700">
                          "Trong tình yêu, INTP có thể dùng khả năng sáng tạo
                          của mình để làm mọi thứ luôn mới mẻ và tạo ra những
                          bất ngờ nhỏ bé để khiến nửa kia cảm thấy đặc biệt."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Tiêu chuẩn đặc biệt",
                        icon: "🎯",
                        content:
                          "INTP có tiêu chuẩn rất riêng với người yêu, thường tìm kiếm sự tương đồng về trí tuệ và khả năng tư duy độc lập.",
                      },
                      {
                        title: "Thể hiện tình cảm",
                        icon: "💡",
                        content:
                          "INTP không giỏi thể hiện tình cảm theo cách lãng mạn thông thường, nhưng họ thể hiện qua việc chia sẻ ý tưởng và dành thời gian chất lượng.",
                      },
                      {
                        title: "Thách thức",
                        icon: "⚠️",
                        content:
                          "INTP cần học cách cân bằng giữa thế giới nội tâm và nhu cầu cảm xúc của đối phương, cũng như chấp nhận sự không hoàn hảo trong các mối quan hệ.",
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
                  <h3 className="text-2xl font-bold text-indigo-700 mb-6 flex items-center">
                    <svg
                      className="w-8 h-8 mr-3 text-indigo-500"
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
                    INTP TRONG TÌNH BẠN
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-start mb-6">
                        <div className="bg-indigo-100 p-2 rounded-lg mr-4">
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Chất lượng hơn số lượng
                          </h4>
                          <p className="text-gray-700">
                            INTP có rất ít bạn nhưng những tình bạn này thường
                            bền chặt và sâu sắc. Họ đánh giá cao bạn bè có thể
                            thảo luận về ý tưởng và chia sẻ kiến thức chuyên
                            sâu.
                          </p>
                        </div>
                      </div>

                      <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-400 mb-6">
                        <p className="italic text-gray-700">
                          "Phong cách sống của các INTP không áp dụng cho tất cả
                          mọi người, nhưng không sao cả, đa số các INTP thích có
                          vài người bạn tốt hơn là quá nhiều bạn xã giao."
                        </p>
                      </div>
                    </div>

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
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Giao tiếp đặc biệt
                          </h4>
                          <p className="text-gray-700">
                            INTP thích những cuộc trò chuyện có chiều sâu về ý
                            tưởng triết học, khoa học hơn là tán gẫu thông
                            thường. Họ đánh giá cao sự trung thực và thẳng thắn
                            trong giao tiếp.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-teal-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-teal-600"
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
                            Ranh giới rõ ràng
                          </h4>
                          <p className="text-gray-700">
                            INTP cần nhiều không gian riêng và tôn trọng không
                            gian của người khác. Họ không thích sự gắn bó quá
                            mức hay những đòi hỏi về thời gian từ bạn bè.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Parenting Section */}
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl">
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
                    INTP KHI LÀM CHA MẸ
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {[
                        {
                          title: "Phong cách nuôi dạy",
                          content:
                            "INTP dạy con tính độc lập và tư duy phản biện. Họ khuyến khích con tự khám phá thế giới và tìm ra câu trả lời cho riêng mình thay vì áp đặt quan điểm.",
                        },
                        {
                          title: "Giá trị cốt lõi",
                          content:
                            "INTP coi trọng sự phát triển trí tuệ và khả năng tư duy độc lập. Họ muốn con trở thành người có chính kiến và không ngừng học hỏi.",
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
                              Khó thể hiện tình cảm bằng lời nói với con cái
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>
                              Thiếu kiên nhẫn với những cảm xúc trẻ con
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Có thể buông lỏng kỷ luật quá mức</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-100 p-5 rounded-lg border-l-4 border-green-500">
                        <p className="italic text-gray-700">
                          "Các bậc cha mẹ INTP cần học cách cân bằng giữa việc
                          khuyến khích con độc lập và việc cung cấp đủ sự hỗ trợ
                          cảm xúc mà trẻ cần để phát triển."
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
                      "INTP là những người bạn trung thành, những người yêu chân
                      thành và những bậc cha mẹ tôn trọng sự độc lập của con
                      cái. Họ có thể không giỏi thể hiện cảm xúc, nhưng luôn thể
                      hiện sự quan tâm qua việc chia sẻ kiến thức và ý tưởng."
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
                    NGHỆ THUẬT KẾT NỐI VỚI{" "}
                    <span className="text-indigo-600">
                      NHÀ LÝ THUYẾT (INTP)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    INTP - Nhóm tính cách hiếm gặp (3% dân số) với tư duy phân
                    tích sâu sắc và đam mê tri thức
                  </p>
                </div>

                {/* Core Principles */}
                <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <div className="bg-white p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto shadow-sm">
                        <svg
                          className="w-10 h-10 text-indigo-600"
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
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                        Nguyên tắc vàng khi tiếp cận INTP
                      </h3>
                      <p className="text-gray-700">
                        INTP đánh giá cao sự chân thành, trí tuệ và tự do cá
                        nhân. Họ không quan tâm đến các quy tắc xã hội thông
                        thường và sẽ tránh xa sự giả tạo. Để xây dựng mối quan
                        hệ với INTP, bạn cần:
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
                        <div className="bg-indigo-100 p-2 rounded-lg mr-4">
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
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Kích thích trí tuệ
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Thảo luận ý tưởng mới lạ, khác thường</li>
                            <li>Đặt câu hỏi thách thức tư duy</li>
                            <li>Chia sẻ quan điểm độc đáo</li>
                            <li>Tránh những chủ đề tầm thường, hời hợt</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Strategy 2 */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-indigo-100 p-2 rounded-lg mr-4">
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
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Tôn trọng không gian
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Không xâm phạm thời gian ở một mình của họ</li>
                            <li>Hẹn trước khi gặp mặt</li>
                            <li>Tránh những cuộc gọi không báo trước</li>
                            <li>Cho phép họ "biến mất" khi cần</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Strategy 3 */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-indigo-100 p-2 rounded-lg mr-4">
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Thể hiện sự đáng tin
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Giữ lời hứa một cách tuyệt đối</li>
                            <li>Thẳng thắn thừa nhận sai lầm</li>
                            <li>Không nói xấu sau lưng</li>
                            <li>Tránh những lời khen giả tạo</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Strategy 4 */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-indigo-100 p-2 rounded-lg mr-4">
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
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Chấp nhận sự khác biệt
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Không ép họ tuân theo chuẩn mực xã hội</li>
                            <li>Tôn trọng cách sống độc đáo của họ</li>
                            <li>Không chỉ trích sự vụng về xã giao</li>
                            <li>Cho phép họ có quan điểm khác biệt</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Practical Tips */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
                    Mẹo thực tế khi tương tác
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
                              Bắt đầu bằng những câu hỏi về lĩnh vực họ đam mê
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Nhờ tư vấn khi gặp vấn đề phức tạp
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Tặng sách hoặc khóa học thay vì quà vật chất
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Nhắc nhở họ về các việc thực tế (hẹn giờ, đồ
                              đạc...)
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
                              Nói chuyện phiếm vô nghĩa
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Gọi điện/ghé thăm đột xuất
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Ép họ thể hiện cảm xúc
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Chỉ trích cách sống khác biệt của họ
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Advice */}
                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                    Lời khuyên cuối
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Xây dựng mối quan hệ với INTP cần thời gian và sự kiên nhẫn.
                    Họ có thể khó tiếp cận ban đầu, nhưng khi đã chấp nhận bạn
                    vào thế giới của mình, họ sẽ là những người bạn trung thành,
                    sáng tạo và luôn mang đến những góc nhìn độc đáo.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="italic text-gray-700">
                      "Đừng cố gắng thay đổi một INTP. Thay vào đó, hãy học cách
                      trân trọng sự sáng tạo, trí tuệ và tính cách độc đáo mà họ
                      mang đến cho mối quan hệ."
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
                    <span className="text-indigo-600">NHÀ TƯ DUY (INTP)</span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    INTP - Nhóm tính cách hiếm gặp (3% dân số) với tư duy phân
                    tích sắc bén và khát khao khám phá không ngừng
                  </p>
                </div>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-lg mb-10 text-white">
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
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      "INTP không làm việc vì tiền - họ làm việc để thỏa mãn trí
                      tò mò vô tận"
                    </h3>
                    <p className="text-indigo-100">
                      Những bộ óc phân tích này luôn khao khát một sự nghiệp cho
                      phép họ khám phá ý tưởng mới, giải quyết vấn đề phức tạp
                      và có đủ tự do để sáng tạo
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
                        <div className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          1
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Giai đoạn khởi đầu: Khám phá
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Khi mới bước vào sự nghiệp, INTP thường thử nghiệm
                          nhiều lĩnh vực khác nhau để tìm kiếm điều thực sự kích
                          thích trí tuệ họ. Họ dễ chán với công việc lặp lại và
                          khao khát được giải quyết vấn đề phức tạp.
                        </p>
                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <p className="italic text-gray-700">
                            "Hãy dành thời gian thử nghiệm nhiều lĩnh vực - đây
                            là cách INTP tìm ra con đường phù hợp nhất"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stage 2 */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          2
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Giai đoạn bứt phá: Chuyên môn hóa
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Khi tìm được lĩnh vực yêu thích, INTP bắt đầu đào sâu
                          kiến thức và trở thành chuyên gia. Đây là giai đoạn họ
                          tỏa sáng với những giải pháp sáng tạo và cách tiếp cận
                          độc đáo.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                            Nghiên cứu chuyên sâu
                          </span>
                          <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                            Giải quyết vấn đề
                          </span>
                          <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                            Tư duy đột phá
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stage 3 */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          3
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Giai đoạn chín muồi: Đóng góp
                        </h4>
                        <p className="text-gray-700">
                          Ở đỉnh cao sự nghiệp, INTP trở thành những nhà tư
                          tưởng có ảnh hưởng, đóng góp những ý tưởng đột phá cho
                          lĩnh vực của mình. Họ tìm thấy ý nghĩa trong việc chia
                          sẻ kiến thức và truyền cảm hứng.
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
                        <div className="bg-indigo-100 p-2 rounded-lg mr-4">
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
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Tư duy phân tích
                          </h4>
                          <p className="text-gray-700">
                            Khả năng phân tích vấn đề từ nhiều góc độ, nhìn thấy
                            các mối liên hệ ẩn giấu và đưa ra giải pháp logic.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-start mb-3">
                        <div className="bg-indigo-100 p-2 rounded-lg mr-4">
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
                              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Sáng tạo đột phá
                          </h4>
                          <p className="text-gray-700">
                            Khả năng nghĩ ra những ý tưởng hoàn toàn mới, cách
                            tiếp cận độc đáo cho các vấn đề cũ.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-start mb-3">
                        <div className="bg-indigo-100 p-2 rounded-lg mr-4">
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
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Độc lập & tự chủ
                          </h4>
                          <p className="text-gray-700">
                            Làm việc hiệu quả một mình, không cần giám sát và
                            luôn tìm cách tiếp cận riêng để giải quyết vấn đề.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-start mb-3">
                        <div className="bg-indigo-100 p-2 rounded-lg mr-4">
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
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Học hỏi không ngừng
                          </h4>
                          <p className="text-gray-700">
                            Luôn tìm tòi kiến thức mới, đặc biệt trong lĩnh vực
                            họ quan tâm, và có khả năng tiếp thu nhanh chóng.
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
                        <div className="bg-indigo-100 p-3 rounded-lg mr-4">
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
                              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-indigo-700">
                          Khoa học & Công nghệ
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Nhà
                          khoa học nghiên cứu
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Lập
                          trình viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Nhà
                          toán học
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Kỹ sư
                          phần mềm
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-indigo-100 p-3 rounded-lg mr-4">
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
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-indigo-700">
                          Sáng tạo & Phân tích
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Nhà
                          phát triển game
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Kiến
                          trúc sư
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Nhà
                          phân tích hệ thống
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Nhà
                          thiết kế UX/UI
                        </li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-indigo-100 p-3 rounded-lg mr-4">
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
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-indigo-700">
                          Học thuật & Tư vấn
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Giáo
                          sư đại học
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Nhà
                          nghiên cứu
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Tư vấn
                          chiến lược
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Chuyên
                          gia pháp y
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Career Warnings */}
                <div className="mb-12 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-red-700 mb-3">
                    Cảnh báo nghề nghiệp
                  </h3>
                  <p className="text-gray-700 mb-4">
                    INTP nên tránh những môi trường công việc:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Quá nhiều quy tắc cứng nhắc và thủ tục hành chính</li>
                    <li>
                      Đòi hỏi giao tiếp xã hội liên tục và làm việc nhóm cao
                    </li>
                    <li>Lặp đi lặp lại, không có thử thách trí tuệ</li>
                    <li>Không có tự do sáng tạo và đổi mới</li>
                  </ul>
                </div>

                {/* Career Development */}
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                    Lộ trình phát triển
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-indigo-500 font-bold">
                        1.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn khám phá (0-5 năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Thử nghiệm nhiều lĩnh vực, tìm kiếm chuyên ngành phù
                          hợp với đam mê và thế mạnh
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-indigo-500 font-bold">
                        2.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn chuyên môn hóa (5-10 năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Đào sâu kiến thức chuyên ngành, phát triển kỹ năng
                          giải quyết vấn đề phức tạp
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-indigo-500 font-bold">
                        3.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn đóng góp (10+ năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Tạo ra những đóng góp đột phá trong lĩnh vực, chia sẻ
                          kiến thức và truyền cảm hứng
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
                <h2 className="text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-100 pb-4">
                  THÓI QUEN NƠI CÔNG SỞ CỦA INTP
                </h2>

                {/* Introduction */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    INTP tìm kiếm môi trường làm việc cho phép họ tự do sáng tạo
                    và tư duy độc lập. Với trí tuệ sắc bén và khả năng giải
                    quyết vấn đề độc đáo, họ xuất sắc trong các công việc đòi
                    hỏi tư duy chiến lược, nhưng có thể gặp khó khăn với các quy
                    trình cứng nhắc và yêu cầu giao tiếp xã hội thường xuyên.
                  </p>
                </div>

                {/* As Employees Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-indigo-700">
                      INTP khi là nhân viên
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Phong cách làm việc
                      </h4>
                      <p className="text-gray-700">
                        INTP cần không gian làm việc độc lập và linh hoạt. Họ
                        phát huy tốt nhất khi được tự do khám phá giải pháp theo
                        cách riêng, không bị ràng buộc bởi quy trình cứng nhắc.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Thách thức
                      </h4>
                      <p className="text-gray-700">
                        Dễ chán nản với công việc lặp lại, thiếu thử thách trí
                        tuệ. Cần học cách kiên nhẫn với các nhiệm vụ thực tế và
                        hoàn thiện chi tiết cuối cùng.
                      </p>
                    </div>
                  </div>

                  <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                    <p className="italic text-gray-700">
                      "INTP làm việc hiệu quả nhất khi được tự do theo đuổi ý
                      tưởng mới. Họ coi các quy tắc cứng nhắc là rào cản cho sự
                      sáng tạo."
                    </p>
                  </div>
                </div>

                {/* As Colleagues Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-indigo-700">
                      INTP khi là đồng nghiệp
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Ưu điểm
                      </h4>
                      <p className="text-gray-700">
                        Mang đến góc nhìn độc đáo và giải pháp sáng tạo. Sẵn
                        sàng giúp đỡ khi đồng nghiệp gặp vấn đề phức tạp cần tư
                        duy logic.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Hạn chế
                      </h4>
                      <p className="text-gray-700">
                        Không giỏi giao tiếp xã giao, có thể vô tình làm mất
                        lòng bằng sự thẳng thắn quá mức. Khó chịu khi bị gián
                        đoạn lúc đang tập trung.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 mt-1 mr-3 text-indigo-500 text-xl">
                      💡
                    </div>
                    <div>
                      <p className="text-gray-700">
                        "INTP thích làm việc độc lập nhưng vẫn đánh giá cao đồng
                        nghiệp có thể thảo luận ý tưởng sâu sắc. Họ cần không
                        gian riêng nhưng không phải là người cô độc."
                      </p>
                    </div>
                  </div>
                </div>

                {/* As Managers Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-indigo-700">
                      INTP khi làm cấp trên
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Phong cách lãnh đạo
                      </h4>
                      <p className="text-gray-700">
                        Trao quyền tự chủ cao cho nhân viên, khuyến khích tư duy
                        độc lập và sáng tạo. Tập trung vào chiến lược dài hạn
                        hơn quản lý vi mô.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Tiêu chuẩn
                      </h4>
                      <p className="text-gray-700">
                        Đánh giá cao nhân viên có tư duy phản biện và khả năng
                        giải quyết vấn đề độc lập. Không kiên nhẫn với người chỉ
                        chờ chỉ dẫn từng bước.
                      </p>
                    </div>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3 text-indigo-500">
                        ⚠️
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">
                          Lãnh đạo INTP cần chú ý: Sự thẳng thắn quá mức có thể
                          làm nhụt chí nhân viên. Học cách cân bằng giữa phê
                          bình xây dựng và động viên là chìa khóa thành công.
                        </p>
                      </div>
                    </div>
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
                    <span className="text-blue-600">NHÀ TƯ DUY (INTP)</span> VỚI
                    <span className="text-purple-600">
                      {" "}
                      NGƯỜI NHÌN XA (ENTP)
                    </span>{" "}
                    VÀ
                    <span className="text-orange-600">
                      {" "}
                      NHÀ KỸ THUẬT (ISTP)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Phân tích sâu về 3 nhóm tính cách thuộc nhóm "Thợ thủ công
                    trí tuệ" - những bộ óc phân tích và linh hoạt
                  </p>
                </div>

                {/* Core Similarities */}
                <div className="bg-gray-50 p-6 rounded-lg mb-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <svg
                      className="w-6 h-6 mr-2 text-blue-600"
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
                    Điểm chung cốt lõi của bộ ba Tư duy - Linh hoạt (Ti/Te + P)
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          T
                        </div>
                        <h4 className="font-bold text-gray-800">
                          Tư duy logic
                        </h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Cả ba đều ra quyết định dựa trên phân tích khách quan
                        thay vì cảm xúc, coi trọng sự thật và hiệu quả
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          P
                        </div>
                        <h4 className="font-bold text-gray-800">Linh hoạt</h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Thích ứng nhanh với thay đổi, không thích bị gò bó bởi
                        quy tắc cứng nhắc
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          ★
                        </div>
                        <h4 className="font-bold text-gray-800">Độc lập</h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Làm việc hiệu quả một mình, có chính kiến riêng và không
                        dễ bị ảnh hưởng bởi người khác
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pair Comparisons */}
                <div className="space-y-10">
                  {/* INTP vs ENTP */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-2 h-10 mr-3 rounded-full"></div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        <span className="text-blue-600">INTP</span> vs{" "}
                        <span className="text-purple-600">ENTP</span>:
                        <span className="text-sm font-normal ml-2">
                          Nhà phân tích lý thuyết vs Người tranh luận
                        </span>
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                          Tương đồng chính
                        </h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>
                            Đều có tư duy phân tích sắc bén và trí tưởng tượng
                            phong phú
                          </li>
                          <li>Ham học hỏi, thích khám phá ý tưởng mới</li>
                          <li>
                            Có xu hướng đặt câu hỏi và thách thức hiện trạng
                          </li>
                          <li>Giỏi nhìn thấy các khả năng và mô hình</li>
                          <li>Thích tự do và không thích bị kiểm soát</li>
                        </ul>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 text-purple-600 mr-2"
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
                              Năng lượng
                            </h5>
                            <p className="text-gray-700 text-sm">
                              INTP (I) cần thời gian ở một mình, ENTP (E) được
                              tiếp năng lượng từ tương tác xã hội
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Phong cách giao tiếp
                            </h5>
                            <p className="text-gray-700 text-sm">
                              INTP kín đáo và ít nói, ENTP hoạt ngôn và thích
                              tranh luận
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Mục tiêu
                            </h5>
                            <p className="text-gray-700 text-sm">
                              INTP tìm kiếm sự hiểu biết toàn diện, ENTP tìm
                              kiếm khả năng và ý tưởng mới
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <p className="italic text-gray-700">
                        "Nếu INTP là nhà khoa học trầm lặng trong phòng thí
                        nghiệm, thì ENTP là nhà phát minh năng động trên sân
                        khấu. Cả hai đều sáng tạo nhưng với phong cách hoàn toàn
                        khác biệt."
                      </p>
                    </div>
                  </div>

                  {/* INTP vs ISTP */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-blue-600 to-orange-600 w-2 h-10 mr-3 rounded-full"></div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        <span className="text-blue-600">INTP</span> vs{" "}
                        <span className="text-orange-600">ISTP</span>:
                        <span className="text-sm font-normal ml-2">
                          Nhà lý thuyết vs Thợ thủ công
                        </span>
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                          Tương đồng chính
                        </h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Đều là những người kín đáo và độc lập</li>
                          <li>Có khả năng phân tích vấn đề logic</li>
                          <li>Thích tự do và không thích bị kiểm soát</li>
                          <li>Không giỏi thể hiện cảm xúc</li>
                          <li>Thích làm việc một mình</li>
                        </ul>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 text-orange-600 mr-2"
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
                              Cách tiếp cận thông tin
                            </h5>
                            <p className="text-gray-700 text-sm">
                              INTP (N) tập trung vào lý thuyết và khả năng, ISTP
                              (S) tập trung vào thực tế và chi tiết
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Phong cách làm việc
                            </h5>
                            <p className="text-gray-700 text-sm">
                              INTP thích nghiên cứu lý thuyết, ISTP thích làm
                              việc thực hành
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Sở thích
                            </h5>
                            <p className="text-gray-700 text-sm">
                              INTP đam mê ý tưởng trừu tượng, ISTP đam mê kỹ
                              năng thực tế
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                      <p className="italic text-gray-700">
                        "INTP như nhà khoa học mải mê với lý thuyết trong phòng
                        nghiên cứu, ISTP như kỹ sư tài ba với công cụ trong
                        xưởng máy. Cả hai đều tài năng nhưng ở những lĩnh vực
                        khác nhau."
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
                      <thead className="bg-blue-600 text-white">
                        <tr>
                          <th className="py-3 px-4 text-left font-semibold">
                            Đặc điểm
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            INTP
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            ENTP
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            ISTP
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
                            Tư duy hướng nội (Ti)
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Trực giác hướng ngoại (Ne)
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Tư duy hướng nội (Ti)
                          </td>
                        </tr>
                        {/* Row 2 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Phong cách làm việc
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-blue-50">
                            Nghiên cứu lý thuyết, phân tích
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-purple-50">
                            Tranh luận, khám phá ý tưởng
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-orange-50">
                            Thực hành, giải quyết vấn đề cụ thể
                          </td>
                        </tr>
                        {/* Row 3 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                            Trong quan hệ
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Kín đáo, ít bạn bè
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Hoạt ngôn, nhiều mối quan hệ
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Thực tế, thoải mái
                          </td>
                        </tr>
                        {/* Row 4 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Ưu thế nghề nghiệp
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-blue-50">
                            Khoa học, lập trình, triết học
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-purple-50">
                            Kinh doanh, luật sư, marketing
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-orange-50">
                            Kỹ thuật, cơ khí, thể thao
                          </td>
                        </tr>
                        {/* Row 5 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                            Điểm mạnh
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Phân tích sâu, tư duy logic
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Linh hoạt, thuyết phục
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Thực tế, khéo léo
                          </td>
                        </tr>
                        {/* Row 6 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Điểm yếu
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-blue-50">
                            Thiếu quyết đoán, xa cách
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-purple-50">
                            Thiếu kiên nhẫn, hay tranh cãi
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-orange-50">
                            Khó thể hiện cảm xúc, bốc đồng
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
                    {/* INTP Column */}
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
                              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-blue-700">INTP</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Nhà khoa
                          học nghiên cứu
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Lập
                          trình viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Nhà
                          triết học
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Nhà toán
                          học
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Kiến
                          trúc sư hệ thống
                        </li>
                      </ul>
                    </div>

                    {/* ENTP Column */}
                    <div className="bg-white p-6 rounded-xl border border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-purple-100 p-3 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-purple-600"
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
                        <h4 className="font-bold text-purple-700">ENTP</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Doanh
                          nhân
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Luật
                          sư
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Nhà
                          marketing
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Chính
                          trị gia
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Nhà
                          phát triển sản phẩm
                        </li>
                      </ul>
                    </div>

                    {/* ISTP Column */}
                    <div className="bg-white p-6 rounded-xl border border-orange-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-orange-100 p-3 rounded-lg mr-4">
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
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-orange-700">ISTP</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span> Kỹ sư
                          cơ khí
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span> Thợ
                          sửa chữa
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span> Vận
                          động viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span> Cảnh
                          sát
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span> Phi
                          công
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
                    INTP, ENTP và ISTP đều là những nhóm tính cách có tư duy
                    logic và linh hoạt, nhưng mỗi nhóm có thế mạnh riêng:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                    <li>
                      <span className="font-medium">INTP</span> - Nhà lý thuyết
                      xuất sắc với khả năng phân tích sâu
                    </li>
                    <li>
                      <span className="font-medium">ENTP</span> - Người tranh
                      luận tài ba với trí tưởng tượng phong phú
                    </li>
                    <li>
                      <span className="font-medium">ISTP</span> - Thợ thủ công
                      khéo léo với kỹ năng thực tế
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Sự khác biệt chính nằm ở cách họ tiếp cận thế giới: INTP với
                    tư duy trừu tượng, ENTP với sự năng động xã hội, ISTP với sự
                    thực hành cụ thể. Hiểu rõ những khác biệt này giúp mỗi nhóm
                    phát huy tối đa tiềm năng của mình.
                  </p>
                </div>
              </div>
            )}
            {activeSection === "advice" && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Main Header */}
                <h2 className="text-3xl font-bold text-indigo-800 mb-8 border-b-2 border-indigo-100 pb-4">
                  LỜI KHUYÊN PHÁT TRIỂN DÀNH CHO NHÀ LÝ THUYẾT (INTP)
                </h2>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-gray-800 to-indigo-900 p-8 rounded-lg mb-10 text-white">
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
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      Chiến lược hoàn thiện dành cho INTP
                    </h3>
                    <p className="text-gray-300">
                      Là những nhà tư duy sáng tạo xuất sắc, INTP cần cân bằng
                      giữa trí tuệ siêu việt và kỹ năng thực tế để biến ý tưởng
                      thành hiện thực.
                    </p>
                  </div>
                </div>

                {/* Advice Sections */}
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
                        Phát triển điểm mạnh
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Tận dụng tối đa khả năng phân tích và sáng tạo của bạn:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Dành thời gian cho các dự án nghiên cứu cá nhân</li>
                      <li>Tham gia các diễn đàn học thuật phù hợp</li>
                      <li>Phát triển hệ thống kiến thức đa ngành</li>
                    </ul>
                  </div>

                  {/* Improve Weaknesses */}
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
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Cải thiện điểm yếu
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Chấp nhận và cải thiện những hạn chế:
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="italic text-gray-700">
                        "Sự hoàn hảo thực sự nằm ở khả năng chấp nhận và cải
                        thiện không ngừng"
                      </p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Đặt lời nhắc cho các nhiệm vụ thực tế</li>
                      <li>Thực hành kỹ năng xã hội từng bước nhỏ</li>
                    </ul>
                  </div>
                </div>

                {/* Emotional & Social Skills Section */}
                <div className="mb-10 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg">
                        <svg
                          className="w-10 h-10 text-red-600"
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
                      <h3 className="text-2xl font-semibold text-red-800 mb-4">
                        Phát triển kỹ năng xã hội
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-red-100 shadow-sm">
                          <h4 className="font-semibold text-red-700 mb-2">
                            Giao tiếp hiệu quả
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Học cách lắng nghe chủ động</li>
                            <li>Thực hành diễn đạt ý tưởng đơn giản</li>
                            <li>Chấp nhận các quan điểm khác biệt</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-red-100 shadow-sm">
                          <h4 className="font-semibold text-red-700 mb-2">
                            Quản lý cảm xúc
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Nhận diện và đặt tên cảm xúc</li>
                            <li>Chia sẻ cảm xúc với người tin cậy</li>
                            <li>Thực hành thiền định để cân bằng</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Practical Life Skills */}
                <div className="mb-10">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 bg-indigo-50 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-sm">
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
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-indigo-700">
                          Kỹ năng sống thực tế
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        INTP thường cần cải thiện các kỹ năng thực tế để cân
                        bằng cuộc sống:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Tổ chức công việc
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Sử dụng công cụ quản lý thời gian</li>
                            <li>Chia nhỏ dự án thành các bước cụ thể</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Tuân thủ xã hội
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Học các quy tắc xã giao cơ bản</li>
                            <li>Đặt lời nhắc cho các nghĩa vụ xã hội</li>
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
                                Thử thách mỗi ngày
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Mỗi ngày thực hiện một việc nhỏ ngoài vùng an
                                toàn
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              2
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Ghi chép cảm xúc
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Viết ra 3 cảm nhận mỗi ngày về các mối quan hệ
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              3
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Quy tắc xã hội
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Mỗi tuần học và áp dụng 1 quy tắc xã giao mới
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Encouragement */}
                <div className="bg-gradient-to-r from-gray-900 to-blue-900 p-8 rounded-lg text-white">
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
                      Sức mạnh của Nhà Lý Thuyết
                    </h3>
                    <p className="mb-4 text-gray-300">
                      Bạn được ban tặng khả năng tư duy sáng tạo và phân tích
                      sâu sắc hiếm có. Khi kết hợp với kỹ năng thực tế và giao
                      tiếp, bạn có thể biến những ý tưởng phức tạp thành giải
                      pháp thực tiễn thay đổi thế giới.
                    </p>
                    <div className="bg-indigo-800 bg-opacity-30 p-4 rounded-lg inline-block">
                      <p className="font-medium">
                        "Thế giới cần những bộ óc tò mò như bạn. Hãy mở rộng tầm
                        ảnh hưởng bằng cách học cách kết nối ý tưởng của bạn với
                        nhu cầu thực tế của mọi người."
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
export default INTPPage;
