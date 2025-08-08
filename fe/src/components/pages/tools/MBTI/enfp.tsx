import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faPen, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const handleCopyLink = () => {
  const url = "http://localhost:5173/tools/mbti/tinh-cach/enfp";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Đã sao chép liên kết!");
    })
    .catch((err) => {
      console.error("Lỗi khi sao chép liên kết:", err);
    });
};
const ENFPPage = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Tổng quan" },
    { id: "strengths-weaknesses", title: "Điểm mạnh và điểm yếu" },
    { id: "relationship", title: "Mối quan hệ" },
    { id: "how-to-be-close", title: "Làm sao để thân thiết với ENFP" },
    { id: "career-path", title: "Con đường sự nghiệp" },
    { id: "workplace-habits", title: "Thói quen nơi công sở" },
    { id: "compare", title: "So sánh ENFP với INFP, ESFP" },
    { id: "advice", title: "Lời khuyên dành cho ENFP" },
  ];

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="ENFP-page bg-gradient-to-b from-blue-50 to-purple-50">
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
                ENFP - Người truyền cảm hứng
              </h1>
            </div>
            <div className="relative w-full">
              <img
                src="/mbti_icons/enfp1.webp"
                alt="ENFP - Người truyền cảm hứng"
                className="pointer w-full h-120 object-cover rounded-lg shadow "
              />
            </div>

            {/* Description */}
            <div className="text-lg text-gray-700 max-w-4xl text-center">
              ENFP là nhóm tính cách nổi bật với khả năng sáng tạo không giới
              hạn, sẵn sàng lan tỏa những ý tưởng mới tới những người xung
              quanh. Các ENFP nhiệt tình, ấm áp và khá “quấn người”. Đối với họ,
              cuộc sống là để khám phá và tận hưởng từng phút giây, từng khoảnh
              khắc.
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
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">
                    TỔNG QUAN TÍNH CÁCH ENFP
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-blue-400 mx-auto"></div>
                </div>

                {/* Introduction */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-300">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    ENFP (Người truyền cảm hứng) là nhóm tính cách nổi bật với
                    khả năng sáng tạo không giới hạn, sẵn sàng lan tỏa những ý
                    tưởng mới tới mọi người. Với năng lượng hồn nhiên và trái
                    tim ấm áp, các ENFP biến cuộc sống thành chuỗi ngày đầy màu
                    sắc. Họ tin rằng thế giới này là nơi để khám phá và tận
                    hưởng từng khoảnh khắc.
                  </p>
                </div>

                {/* MBTI Breakdown */}
                <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-pink-600 mb-6 text-center">
                    Ý NGHĨA 4 CHỮ CÁI ENFP
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "● E - Hướng ngoại (Extraverted)",
                        color: "bg-pink-100",
                        textColor: "text-pink-800",
                        content:
                          "ENFP lấy năng lượng từ tương tác xã hội. Họ là những tia nắng tỏa sáng trong đám đông và không ngừng kết nối với thế giới bên ngoài.",
                      },
                      {
                        title: "● N - Trực giác (Intuitive)",
                        color: "bg-blue-100",
                        textColor: "text-blue-800",
                        content:
                          "ENFP nhìn thế giới qua lăng kính của khả năng và ý nghĩa. Họ luôn tìm kiếm những mối liên hệ sâu xa ẩn sau bề mặt sự việc.",
                      },
                      {
                        title: "● F - Cảm xúc (Feeling)",
                        color: "bg-red-100",
                        textColor: "text-red-800",
                        content:
                          "ENFP đưa ra quyết định bằng trái tim ấm áp. Giá trị cá nhân và sự hòa hợp trong các mối quan hệ là kim chỉ nam của họ.",
                      },
                      {
                        title: "● P - Linh hoạt (Perceiving)",
                        color: "bg-gradient-to-r from-pink-100 to-blue-100",
                        textColor: "text-purple-800",
                        content:
                          "ENFP yêu tự do như chim trời. Họ thích ứng nhanh với thay đổi và luôn giữ tâm hồn rộng mở cho những điều bất ngờ.",
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
                      title: "Nhiệt huyết tỏa sáng",
                      icon: "✨",
                      content:
                        "ENFP là những ngọn lửa ấm áp không ngừng lan tỏa năng lượng tích cực. Họ truyền cảm hứng bằng chính niềm đam mê cháy bỏng với cuộc sống.",
                    },
                    {
                      title: "Sáng tạo không biên giới",
                      icon: "🎨",
                      content:
                        "Với trí tưởng tượng phong phú, ENFP nhìn thấy tiềm năng ở mọi nơi. Họ là bậc thầy trong việc biến ý tưởng điên rồ thành hiện thực.",
                    },
                    {
                      title: "Kết nối từ trái tim",
                      icon: "💞",
                      content:
                        "ENFP có khả năng đặc biệt trong việc thấu hiểu người khác. Những mối quan hệ với họ luôn chân thành và đầy cảm xúc.",
                    },
                    {
                      title: "Tâm hồn phiêu lưu",
                      icon: "🌍",
                      content:
                        "ENFP luôn khao khát những chân trời mới. Họ xem cuộc đời là chuyến hành trình không ngừng khám phá bản thân và thế giới.",
                    },
                  ].map((section, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-pink-300"
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
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-pink-700 mb-4">
                      SIÊU NĂNG LỰC
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        <span>Khả năng truyền cảm hứng xuất chúng</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        <span>Tư duy sáng tạo đột phá</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        <span>Giao tiếp lôi cuốn như nghệ sĩ</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        <span>Thích ứng nhanh như tắc kè hoa</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        <span>Lạc quan vô địch</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-700 mb-4">
                      THỬ THÁCH
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✗</span>
                        <span>Dễ phân tán năng lượng</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✗</span>
                        <span>Khó hoàn thành dự án dài hơi</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✗</span>
                        <span>Nhạy cảm quá mức với chỉ trích</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✗</span>
                        <span>Thiếu kiên nhẫn với chi tiết</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✗</span>
                        <span>Đôi khi quá lý tưởng hóa</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Career & Relationships */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-pink-700 mb-4">
                      ENFP TRONG SỰ NGHIỆP
                    </h3>
                    <p className="text-gray-700 mb-4">
                      ENFP tỏa sáng nhất khi được thỏa sức sáng tạo và kết nối:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Môi trường linh hoạt không gò bó</li>
                      <li>Cơ hội thể hiện ý tưởng độc đáo</li>
                      <li>Được làm việc với con người đa dạng</li>
                      <li>Công việc mang tính nhân văn</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                      Nghề nghiệp lý tưởng: Nhà văn, diễn giả, nhà tâm lý, nhà
                      báo, nhà hoạt động xã hội, giáo viên, nhà marketing sáng
                      tạo.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-blue-700 mb-4">
                      ENFP TRONG TÌNH YÊU
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Trong tình yêu, ENFP là những người:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Lãng mạn như tiểu thuyết</li>
                      <li>Luôn bất ngờ với sáng tạo mới</li>
                      <li>Cần không gian tự do</li>
                      <li>Yêu bằng cả trái tim</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                      ENFP cần học cách cân bằng giữa nhu cầu khám phá và cam
                      kết sâu sắc để xây dựng mối quan hệ bền vững.
                    </p>
                  </div>
                </div>

                {/* Famous People */}
                <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold text-center text-pink-700 mb-6">
                    ENFP NỔI TIẾNG
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {[
                      { name: "Walt Disney", role: "Huyền thoại giải trí" },
                      { name: "Will Smith", role: "Diễn viên" },
                      { name: "Jennifer Aniston", role: "Diễn viên" },
                      { name: "John Lennon", role: "Nhạc sĩ" },
                      { name: "Mark Twain", role: "Nhà văn" },
                      { name: "Sandra Bullock", role: "Diễn viên" },
                      { name: "Keanu Reeves", role: "Diễn viên" },
                      { name: "Bob Dylan", role: "Nhạc sĩ" },
                    ].map((person, index) => (
                      <div
                        key={index}
                        className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="h-12 w-12 bg-gradient-to-r from-pink-200 to-blue-200 rounded-full mx-auto mb-2 flex items-center justify-center text-pink-700 font-bold">
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
                <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-6 rounded-lg mt-8 text-center">
                  <p className="text-pink-800 italic font-medium">
                    "ENFP là những người kể chuyện bằng trái tim, biến cuộc sống
                    thành bức tranh đầy màu sắc. Họ nhìn thế giới qua lăng kính
                    của khả năng vô hạn và không ngừng truyền cảm hứng cho người
                    khác dám mơ ước và sống trọn vẹn. Dù đôi khi bồng bột, ENFP
                    luôn mang đến niềm vui và ý nghĩa cho mọi khoảnh khắc họ
                    chạm vào."
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
                      NHÓM TÍNH CÁCH ENFP (NGƯỜI TRUYỀN CẢM HỨNG)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    ENFP - Nhóm tính cách sáng tạo, nhiệt huyết với trái tim ấm
                    áp và tâm hồn lạc quan
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
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Ham học hỏi
                          </h4>
                          <p className="text-gray-700">
                            Các ENFP luôn nhìn thấy vô vàn những điều đẹp đẽ và
                            thú vị xung quanh. Với trí tưởng tượng phong phú và
                            tính cách cởi mở, họ sẵn sàng bước ra khỏi vùng an
                            toàn để trải nghiệm những điều mới mẻ.
                          </p>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg mt-3">
                        <p className="text-sm text-blue-700 italic">
                          "Mỗi trải nghiệm mới là cơ hội để ENFP mở rộng thế
                          giới quan và hoàn thiện bản thân"
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
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Đồng điệu trong tâm hồn
                          </h4>
                          <p className="text-gray-700">
                            ENFP có khả năng đồng cảm đặc biệt, họ dễ dàng đặt
                            mình vào vị trí người khác để thấu hiểu cảm xúc dù
                            là nhỏ nhất. Điều này giúp họ trở thành người bạn
                            tâm giao tuyệt vời.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          Thấu cảm
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          Kết nối
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          Tâm lý
                        </span>
                      </div>
                    </div>

                    {/* Strength 3 */}
                    <div className="bg-white p-6 rounded-xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-pink-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-pink-600"
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
                            Lắng nghe và được lắng nghe
                          </h4>
                          <p className="text-gray-700">
                            ENFP nhiệt tình chia sẻ những điều thú vị và cũng
                            sẵn sàng lắng nghe quan điểm của người khác. Đây là
                            cách họ mở rộng thế giới quan và nâng cao giá trị
                            bản thân.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-pink-500 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-600 mt-1">
                          <span>Khả năng giao tiếp</span>
                          <span>90% ENFP là người trò chuyện xuất sắc</span>
                        </div>
                      </div>
                    </div>

                    {/* Strength 4 */}
                    <div className="bg-white p-6 rounded-xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-pink-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-pink-600"
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
                            Lạc quan và tốt bụng
                          </h4>
                          <p className="text-gray-700">
                            ENFP luôn giữ nụ cười thân thiện và tìm thấy niềm
                            vui ngay cả trong khó khăn. Họ sở hữu trái tim ấm
                            áp, luôn kết nối và lan tỏa năng lượng tích cực đến
                            mọi người.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Biểu hiện:</span>
                          Tích cực, hài hước, giàu tình yêu thương và có vòng
                          bạn bè rộng lớn
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
                            Cả nể
                          </h4>
                          <p className="text-gray-700">
                            ENFP thường cố gắng làm hài lòng tất cả mọi người,
                            dễ thỏa hiệp trong tranh luận hoặc cho phép người
                            khác lấn át ý kiến của mình chỉ để giữ hòa khí.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Gợi ý:</span>
                          Học cách thiết lập ranh giới và bảo vệ quan điểm cá
                          nhân khi cần thiết
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
                            Thiếu tập trung
                          </h4>
                          <p className="text-gray-700">
                            Ham học hỏi nhưng dễ bị phân tán bởi những ý tưởng
                            mới, ENFP thường ôm đồm nhiều dự án cùng lúc dẫn đến
                            thiếu tập trung và khó hoàn thành.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 bg-red-50 p-3 rounded-lg">
                        <p className="text-sm text-red-700 italic">
                          "ENFP cần học cách ưu tiên và cam kết hoàn thành một
                          việc trước khi bắt đầu việc mới"
                        </p>
                      </div>
                    </div>

                    {/* Weakness 3 */}
                    <div className="bg-white p-6 rounded-xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-pink-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-pink-600"
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
                            Thiếu ngăn nắp
                          </h4>
                          <p className="text-gray-700">
                            ENFP thường tránh né những công việc thực tế nhàm
                            chán như dọn dẹp, giấy tờ. Việc tích tụ những việc
                            nhỏ này lâu ngày có thể trở thành vấn đề lớn.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Cải thiện:</span>
                          Tạo thói quen xử lý công việc thực tế theo lịch trình
                          cố định
                        </div>
                      </div>
                    </div>

                    {/* Weakness 4 */}
                    <div className="bg-white p-6 rounded-xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-pink-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-pink-600"
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
                            Ngây thơ và âm thầm chịu đựng
                          </h4>
                          <p className="text-gray-700">
                            Quá lạc quan khiến ENFP đôi khi đưa ra quyết định
                            thiếu thực tế. Họ cũng có xu hướng âm thầm giải
                            quyết vấn đề mà không chia sẻ, dẫn đến kiệt sức về
                            lâu dài.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Giải pháp:</span>
                          Cân bằng giữa lạc quan và thực tế, học cách chia sẻ
                          khó khăn với người tin cậy
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Balance Section */}
                <div className="mt-12 bg-gradient-to-r from-red-500 to-pink-500 p-8 rounded-xl text-white">
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
                      CÂN BẰNG CUỘC SỐNG ENFP
                    </h3>
                    <p className="mb-4 text-red-100">
                      Sức mạnh thực sự của ENFP nằm ở khả năng kết hợp sự sáng
                      tạo với lòng trắc ẩn. Khi học được cách cân bằng giữa
                      nhiệt huyết và tập trung, giữa lạc quan và thực tế, họ có
                      thể trở thành những người truyền cảm hứng mạnh mẽ.
                    </p>
                    <div className="bg-opacity-20 p-4 rounded-lg inline-block">
                      <p className="font-medium">
                        "Một ENFP trưởng thành hiểu rằng đôi khi cần chậm lại để
                        hoàn thành dự án, và rằng chăm sóc bản thân cũng quan
                        trọng như chăm sóc người khác. Đây là chìa khóa để họ
                        tỏa sáng trọn vẹn."
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
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-3">
                    MỐI QUAN HỆ CỦA ENFP
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto rounded-full"></div>
                  <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Với sự chân thành và cởi mở, ENFP hiếm khi gặp khó khăn
                    trong việc kết nối với mọi người. Họ là những người truyền
                    cảm hứng, biến mỗi mối quan hệ thành một chuyến phiêu lưu
                    đầy màu sắc và ý nghĩa.
                  </p>
                </div>

                {/* General Relationship Traits */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-pink-100 p-3 rounded-full mr-4">
                        <svg
                          className="w-6 h-6 text-pink-600"
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
                        <span className="text-pink-500 mr-2">•</span>
                        <span>
                          Giao tiếp chân thành, cởi mở và đầy cảm hứng
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Luôn nhiệt tình giúp đỡ bạn bè</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Khả năng thấu hiểu cảm xúc tuyệt vời</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Yêu thích những cuộc trò chuyện sâu sắc</span>
                      </li>
                    </ul>
                  </div>

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
                        { type: "INFJ", desc: "Kết nối tâm hồn" },
                        { type: "INTJ", desc: "Cân bằng lý trí" },
                        { type: "ENFJ", desc: "Cùng đam mê" },
                        { type: "ENTP", desc: "Sáng tạo không ngừng" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-pink-50 to-blue-50 p-3 rounded-lg"
                        >
                          <span className="font-bold text-pink-600">
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
                <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-8 rounded-2xl mb-12">
                  <div className="flex flex-col md:flex-row items-center mb-8">
                    <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                      <div className="bg-white p-4 rounded-full shadow-lg">
                        <svg
                          className="w-16 h-16 text-pink-500"
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
                      <h3 className="text-2xl font-bold text-pink-700 mb-4">
                        ENFP TRONG TÌNH YÊU
                      </h3>
                      <p className="text-gray-700 mb-4">
                        ENFP yêu say đắm và lãng mạn như những câu chuyện cổ
                        tích. Họ dành trọn trái tim mình cho người mình yêu và
                        luôn tìm cách làm mới mối quan hệ bằng những ý tưởng
                        sáng tạo.
                      </p>
                      <div className="bg-white bg-opacity-70 p-4 rounded-lg border-l-4 border-pink-400 mb-4">
                        <p className="italic text-gray-700">
                          "Tình yêu của ENFP như ngọn lửa rực cháy - nhiệt
                          thành, mãnh liệt và không ngừng sáng tạo. Họ tin vào
                          định mệnh và luôn tìm kiếm sự kết nối tâm hồn sâu
                          sắc."
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
                          "ENFP thể hiện tình yêu qua những cử chỉ lãng mạn bất ngờ và những lời nói chân thành từ trái tim. Họ thích tạo ra những kỷ niệm đặc biệt cho người mình yêu.",
                      },
                      {
                        title: "Thách thức",
                        icon: "⚠️",
                        content:
                          "ENFP dễ thất vọng khi tình yêu không như mong đợi. Họ cũng có xu hướng lý tưởng hóa mối quan hệ và đôi khi quên mất những khía cạnh thực tế.",
                      },
                      {
                        title: "Lời khuyên",
                        icon: "💡",
                        content:
                          "ENFP cần học cách cân bằng giữa lý tưởng và thực tế trong tình yêu. Đối tác nên trân trọng sự lãng mạn của ENFP nhưng cũng cần giúp họ nhìn nhận mối quan hệ một cách toàn diện.",
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
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    ENFP TRONG TÌNH BẠN
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
                            Người bạn tâm giao
                          </h4>
                          <p className="text-gray-700">
                            ENFP là những người bạn chân thành luôn sẵn sàng
                            lắng nghe và thấu hiểu. Họ có khả năng kết nối sâu
                            sắc và tạo cảm giác an toàn cho bạn bè khi chia sẻ.
                          </p>
                        </div>
                      </div>

                      <div className="bg-pink-50 p-5 rounded-lg border-l-4 border-pink-400 mb-6">
                        <p className="italic text-gray-700">
                          "ENFP biến mỗi cuộc gặp gỡ thành một trải nghiệm đáng
                          nhớ. Với sự nhiệt tình và sáng tạo, họ luôn biết cách
                          làm mới những hoạt động thường ngày với bạn bè."
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start mb-6">
                        <div className="bg-pink-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-pink-600"
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
                            ENFP đôi khi quá nhiệt tình khiến bạn bè cảm thấy áp
                            lực. Họ cũng dễ thất vọng khi không nhận được sự
                            quan tâm tương xứng từ phía bạn bè.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-2 rounded-lg mr-4">
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
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Tình bạn sâu sắc
                          </h4>
                          <p className="text-gray-700">
                            Khi đã coi ai là bạn thân, ENFP sẽ trở thành người
                            bạn trung thành và đáng tin cậy. Họ sẵn sàng dành
                            thời gian và năng lượng để giúp đỡ bạn bè thân
                            thiết.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Parenting Section */}
                <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-8 rounded-2xl">
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
                    ENFP KHI LÀM CHA MẸ
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {[
                        {
                          title: "Phong cách nuôi dạy",
                          content:
                            "ENFP là những phụ huynh sáng tạo và cởi mở. Họ khuyến khích con cái khám phá thế giới và phát triển cá tính riêng. Môi trường gia đình luôn tràn ngập tiếng cười và những ý tưởng mới lạ.",
                        },
                        {
                          title: "Ưu điểm",
                          content:
                            "ENFP dạy con cách tư duy độc lập và sáng tạo. Họ là người truyền cảm hứng, giúp con nhìn thấy vẻ đẹp và tiềm năng trong mọi thứ. Trẻ được nuôi dạy bởi ENFP thường rất tự tin và giàu trí tưởng tượng.",
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
                            <span className="text-pink-500 mr-2">•</span>
                            <span>Khó duy trì kỷ luật và nề nếp nhất quán</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-pink-500 mr-2">•</span>
                            <span>
                              Đôi khi quá tập trung vào sự sáng tạo mà bỏ qua
                              các nhu cầu thực tế
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-pink-500 mr-2">•</span>
                            <span>
                              Có thể cảm thấy khó khăn khi con cái lớn lên và
                              trở nên độc lập
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-100 p-5 rounded-lg border-l-4 border-blue-500">
                        <p className="italic text-gray-700">
                          "Dù không phải mẫu phụ huynh nguyên tắc nhất, ENFP
                          mang đến cho con cái tuổi thơ đầy ắp cảm hứng và sự
                          sáng tạo. Họ dạy con cách nhìn thế giới qua lăng kính
                          của những khả năng vô hạn."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Quote */}
                <div className="text-center mt-12">
                  <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-6 rounded-xl inline-block max-w-2xl">
                    <svg
                      className="w-10 h-10 text-pink-500 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xl font-medium text-pink-800 mb-2">
                      "ENFP mang đến sự ấm áp và cảm hứng trong mọi mối quan hệ.
                      Họ yêu thương bằng cả trái tim và luôn tìm cách làm cho
                      cuộc sống của những người thân yêu trở nên đặc biệt. Để
                      hiểu ENFP, hãy mở lòng đón nhận sự chân thành và sáng tạo
                      không ngừng của họ."
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
                    <span className="text-purple-600">
                      NGƯỜI TRUYỀN CẢM HỨNG (ENFP)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    ENFP - Nhóm tính cách sáng tạo, nhiệt huyết với trái tim ấm
                    áp và khát khao kết nối sâu sắc
                  </p>
                </div>

                {/* Core Principles */}
                <div className="bg-purple-50 p-6 rounded-lg mb-8">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <div className="bg-white p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto shadow-sm">
                        <svg
                          className="w-10 h-10 text-purple-600"
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
                      <h3 className="text-xl font-semibold text-purple-800 mb-3">
                        Nguyên tắc vàng khi tiếp cận ENFP
                      </h3>
                      <p className="text-gray-700">
                        ENFP là những người chân thành, sáng tạo và khao khát
                        những mối quan hệ có chiều sâu. Họ đánh giá cao sự chân
                        thật, cởi mở và những cuộc trò chuyện ý nghĩa. Để xây
                        dựng mối quan hệ với ENFP, điều quan trọng nhất là:
                        <span className="font-medium block mt-2">
                          "Hãy cùng họ khám phá những ý tưởng mới mẻ và xây dựng
                          sự kết nối chân thành từ tâm hồn"
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
                        <div className="bg-pink-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-pink-600"
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
                            Thiết kế buổi hẹn sáng tạo
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                              Tổ chức các hoạt động mới lạ, khác biệt với thường
                              ngày
                            </li>
                            <li>
                              Chuẩn bị những câu chuyện và chủ đề thú vị để thảo
                              luận
                            </li>
                            <li>
                              Kết hợp yếu tố bất ngờ trong kế hoạch hẹn hò
                            </li>
                            <li>
                              Tránh những hoạt động nhàm chán, lặp đi lặp lại
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Strategy 2 */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-pink-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-pink-600"
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
                            Hỗ trợ thực tế
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                              Giúp đỡ họ trong các công việc tỉ mỉ, chi tiết
                            </li>
                            <li>
                              Nhắc nhở về các nhiệm vụ hàng ngày quan trọng
                            </li>
                            <li>
                              Đề nghị hỗ trợ khi thấy họ ôm đồm quá nhiều việc
                            </li>
                            <li>Chia sẻ các mẹo quản lý thời gian hiệu quả</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Strategy 3 */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-purple-100 p-2 rounded-lg mr-4">
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
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Trò chuyện sâu sắc
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                              Dành thời gian tâm sự về cuộc sống và ước mơ
                            </li>
                            <li>
                              Lắng nghe tích cực các ý tưởng sáng tạo của họ
                            </li>
                            <li>Chia sẻ quan điểm sống và giá trị cá nhân</li>
                            <li>
                              Tránh những cuộc nói chuyện hời hợt, vô nghĩa
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Strategy 4 */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-purple-100 p-2 rounded-lg mr-4">
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
                              d="M12 8v13m8-8v7m-16-7v7m8-12v4m-4-4h8m-8 0H4m8 0h8"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Tạo bất ngờ ý nghĩa
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                              Chuẩn bị những món quà nhỏ mang tính cá nhân hóa
                            </li>
                            <li>
                              Tổ chức tiệc bất ngờ với những người họ yêu quý
                            </li>
                            <li>Ghi lại những khoảnh khắc đẹp để tặng họ</li>
                            <li>Thể hiện sự quan tâm bằng hành động cụ thể</li>
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
                              Chân thành lắng nghe và chia sẻ cảm xúc
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Khuyến khích những ý tưởng sáng tạo của họ
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Thể hiện sự trân trọng với tính cách độc đáo của
                              họ
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Xin lời khuyên khi gặp khó khăn trong cuộc sống
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
                              Giả tạo hoặc che giấu cảm xúc thật
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Phớt lờ hoặc coi thường ý tưởng của họ
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Ép buộc họ vào khuôn khổ cứng nhắc
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Chỉ duy trì những cuộc trò chuyện hời hợt
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Advice */}
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">
                    Lời khuyên từ chuyên gia
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Xây dựng mối quan hệ với ENFP cần sự chân thành và cởi mở.
                    Một khi đã coi bạn là người thân thiết, họ sẽ mang đến nguồn
                    năng lượng tích cực, sự sáng tạo không ngừng và lòng trung
                    thành sâu sắc. Hãy trân trọng sự nhiệt huyết và tấm lòng
                    rộng mở mà họ mang đến cho cuộc sống của bạn.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="italic text-gray-700">
                      "Tình bạn với ENFP như một nguồn cảm hứng bất tận. Họ sẽ
                      khơi dậy những ý tưởng mới trong bạn, động viên bạn vượt
                      qua khó khăn, và luôn là người bạn đồng hành đáng tin cậy
                      trên mọi nẻo đường cuộc sống."
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
                    <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                      NGƯỜI TRUYỀN CẢM HỨNG (ENFP)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    ENFP - Những người sáng tạo với trí tưởng tượng phong phú và
                    khả năng truyền cảm hứng tuyệt vời
                  </p>
                </div>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-pink-500 to-blue-600 p-8 rounded-lg mb-10 text-white">
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
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      "ENFP xây dựng sự nghiệp bằng sự sáng tạo không biên giới
                      và khả năng kết nối con người"
                    </h3>
                    <p className="text-pink-100">
                      Những người truyền cảm hứng này luôn tìm kiếm công việc
                      cho phép họ được tự do thể hiện ý tưởng và giúp đỡ người
                      khác
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
                        <div className="bg-pink-100 text-pink-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          1
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Giai đoạn khởi đầu: Khám phá đa dạng
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Khi mới bước vào sự nghiệp, ENFP thử sức với nhiều
                          lĩnh vực khác nhau để tìm ra đam mê thực sự. Họ xuất
                          sắc trong các vị trí đòi hỏi giao tiếp và sáng tạo.
                        </p>
                        <div className="bg-pink-50 p-4 rounded-lg">
                          <p className="italic text-gray-700">
                            "ENFP cần môi trường làm việc linh hoạt để phát
                            triển. Họ học qua trải nghiệm thực tế và kết nối con
                            người hơn là những quy trình cứng nhắc"
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
                          Giai đoạn bứt phá: Chuyên môn hóa
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Sau khi tích lũy kinh nghiệm, ENFP tìm được lĩnh vực
                          phù hợp nhất với giá trị cá nhân. Họ được đánh giá cao
                          nhờ khả năng truyền cảm hứng và tư duy đổi mới.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full">
                            Sáng tạo
                          </span>
                          <span className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full">
                            Giao tiếp
                          </span>
                          <span className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full">
                            Linh hoạt
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stage 3 */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="bg-gradient-to-r from-pink-100 to-blue-100 text-purple-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          3
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Giai đoạn chín muồi: Dẫn dắt bằng cảm hứng
                        </h4>
                        <p className="text-gray-700">
                          Ở đỉnh cao sự nghiệp, ENFP trở thành người dẫn dắt các
                          dự án sáng tạo. Họ tạo ra môi trường làm việc cởi mở,
                          khuyến khích mọi người phát huy tiềm năng.
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
                        <div className="bg-pink-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-pink-600"
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
                            Truyền cảm hứng
                          </h4>
                          <p className="text-gray-700">
                            Khả năng động viên và thúc đẩy người khác hành động
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
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Tư duy sáng tạo
                          </h4>
                          <p className="text-gray-700">
                            Liên tục đưa ra những ý tưởng mới lạ và đột phá
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-start mb-3">
                        <div className="bg-pink-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-pink-600"
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
                            Kết nối con người
                          </h4>
                          <p className="text-gray-700">
                            Xây dựng mạng lưới quan hệ rộng và sâu sắc
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
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Giải quyết vấn đề
                          </h4>
                          <p className="text-gray-700">
                            Tiếp cận vấn đề từ nhiều góc độ sáng tạo
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
                        <div className="bg-pink-100 p-3 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-pink-600"
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
                        <h4 className="font-bold text-pink-700">
                          Truyền thông & Sáng tạo
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Nhà
                          văn/Nhà báo
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Diễn giả
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Nhà
                          thiết kế
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Nghệ sĩ
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
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
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-blue-700">
                          Giáo dục & Tâm lý
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Giáo
                          viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Nhà tâm
                          lý học
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Tư vấn
                          viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span> Huấn
                          luyện viên
                        </li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-3 rounded-lg mr-4">
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
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-purple-700">
                          Kinh doanh & Khởi nghiệp
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Doanh
                          nhân
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Nhà
                          marketing
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Chuyên
                          viên PR
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Nhà tổ
                          chức sự kiện
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Career Warnings */}
                <div className="mb-12 bg-gradient-to-r from-pink-50 to-blue-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">
                    Cảnh báo nghề nghiệp
                  </h3>
                  <p className="text-gray-700 mb-4">
                    ENFP nên tránh những môi trường công việc:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Lặp lại nhàm chán với quy trình cứng nhắc</li>
                    <li>Làm việc độc lập ít tương tác xã hội</li>
                    <li>
                      Yêu cầu tập trung vào chi tiết nhỏ trong thời gian dài
                    </li>
                    <li>Thiếu cơ hội sáng tạo và đổi mới</li>
                  </ul>
                </div>

                {/* Career Development */}
                <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">
                    Lộ trình phát triển
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-pink-500 font-bold">
                        1.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn khám phá (0-5 năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Thử nghiệm nhiều lĩnh vực, xây dựng mạng lưới quan hệ
                          đa dạng
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-blue-500 font-bold">
                        2.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn tập trung (5-10 năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Chuyên sâu vào lĩnh vực phù hợp, phát triển thương
                          hiệu cá nhân
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-purple-500 font-bold">
                        3.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn dẫn dắt (10+ năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Truyền cảm hứng và dẫn dắt các dự án sáng tạo, cố vấn
                          cho thế hệ sau
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
                <h2 className="text-3xl font-bold text-purple-600 mb-6 border-b-2 border-purple-100 pb-4">
                  THÓI QUEN NƠI CÔNG SỞ CỦA ENFP
                </h2>

                {/* Introduction */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    Với sự cởi mở và nhiệt huyết, ENFP mang đến nguồn năng lượng
                    sáng tạo cho nơi làm việc. Họ coi trọng sự tự do, khám phá
                    và các mối quan hệ chân thành. Là những người truyền cảm
                    hứng bẩm sinh, ENFP tỏa sáng trong môi trường linh hoạt, nơi
                    họ có thể kết nối mọi người và theo đuổi những ý tưởng mới
                    mẻ.
                  </p>
                </div>

                {/* As Employees Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-purple-600">
                      ENFP khi là nhân viên
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Điểm mạnh nổi bật
                      </h4>
                      <p className="text-gray-700">
                        Sáng tạo không ngừng với nhiều ý tưởng độc đáo. Khả năng
                        thích nghi vượt trội. Giao tiếp tốt và lắng nghe đồng
                        nghiệp. Nhiệt tình truyền cảm hứng cho team. Theo đuổi
                        công việc đến khi hoàn thành 100%.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Thách thức
                      </h4>
                      <p className="text-gray-700">
                        Dễ chán nản khi công việc mất đi sự thú vị. Cần nhiều
                        lời động viên để duy trì động lực. Đôi khi quá tập trung
                        vào cách làm của mình. Khó làm việc trong môi trường
                        cứng nhắc. Có thể ôm đồm quá nhiều việc cùng lúc.
                      </p>
                    </div>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <p className="italic text-gray-700">
                      "ENFP là nhân viên sáng tạo cần không gian tự do. Họ làm
                      việc tốt nhất khi được truyền cảm hứng và công nhận giá
                      trị đóng góp."
                    </p>
                  </div>
                </div>

                {/* As Colleagues Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-purple-600">
                      ENFP khi là đồng nghiệp
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Giá trị mang lại
                      </h4>
                      <p className="text-gray-700">
                        Luôn mang năng lượng tích cực cho nhóm. Giỏi động viên
                        đồng nghiệp khi căng thẳng. Tìm kiếm giải pháp đôi bên
                        cùng có lợi. Lắng nghe và tôn trọng ý kiến khác biệt.
                        Khả năng dẫn dắt nhóm linh hoạt khi cần.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Điều cần lưu ý
                      </h4>
                      <p className="text-gray-700">
                        Đôi khi quá tập trung vào mối quan hệ mà bỏ qua hiệu quả
                        công việc. Có thể gặp khó khăn khi phải làm việc với
                        người thiếu nhiệt huyết. Cần học cách nói "không" để
                        tránh ôm đồm quá nhiều.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 mt-1 mr-3 text-purple-500 text-xl">
                      ✨
                    </div>
                    <div>
                      <p className="text-gray-700">
                        "Đồng nghiệp ENFP giống như 'linh hồn' của nhóm - luôn
                        biết cách kết nối mọi người và tạo ra bầu không khí làm
                        việc đầy cảm hứng."
                      </p>
                    </div>
                  </div>
                </div>

                {/* As Managers Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-purple-600">
                      ENFP khi làm quản lý
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Phong cách lãnh đạo
                      </h4>
                      <p className="text-gray-700">
                        Tạo môi trường làm việc cởi mở, sáng tạo. Đặt mình vào
                        vị trí nhân viên để thấu hiểu. Khuyến khích nhân viên
                        phát triển ý tưởng. Tránh quản lý vi mô. Tập trung vào
                        mục tiêu dài hạn thay vì chi tiết nhỏ.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Ưu tiên
                      </h4>
                      <p className="text-gray-700">
                        Xây dựng văn hóa team tích cực. Đánh giá cao sự sáng tạo
                        và nhiệt huyết. Tạo không gian tự do cho nhân viên.
                        Tránh khiển trách trực tiếp. Cân bằng giữa linh hoạt và
                        kỷ luật.
                      </p>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3 text-purple-500">
                        💡
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">
                          Lời khuyên cho lãnh đạo ENFP: Đừng ngại thiết lập ranh
                          giới rõ ràng. Sự cân bằng giữa thân thiện và chuyên
                          nghiệp sẽ giúp bạn quản lý hiệu quả hơn.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career Path Section */}
                <div className="mt-10 bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-3">
                    Con đường sự nghiệp lý tưởng
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Sáng tạo & Truyền thông
                      </h4>
                      <p className="text-sm">
                        Nhà văn, Nhà báo, Nhà thiết kế, Biên tập viên, Nghệ sĩ
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">Giáo dục & Tư vấn</h4>
                      <p className="text-sm">
                        Giáo viên, Nhà tâm lý học, Huấn luyện viên, Tư vấn hướng
                        nghiệp
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Kinh doanh & Khởi nghiệp
                      </h4>
                      <p className="text-sm">
                        Doanh nhân, Nhân sự, Marketing, Quan hệ công chúng, Bán
                        hàng
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-purple-100 text-sm">
                    <p>
                      ENFP phát triển mạnh trong môi trường sáng tạo, linh hoạt,
                      nơi họ có thể kết nối với mọi người, truyền cảm hứng và
                      theo đuổi những ý tưởng mới mẻ mang lại ý nghĩa tích cực.
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
                    <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                      NGƯỜI TRUYỀN CẢM HỨNG (ENFP)
                    </span>{" "}
                    VỚI
                    <span className="text-purple-500">
                      {" "}
                      NGƯỜI LÝ TƯỞNG (INFP)
                    </span>{" "}
                    VÀ
                    <span className="text-red-500">
                      {" "}
                      NGƯỜI TRÌNH DIỄN (ESFP)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Phân tích sâu về 3 nhóm tính cách thuộc nhóm "Lãng mạn -
                    Sáng tạo" - những người sống bằng cảm xúc và trực giác
                  </p>
                </div>

                {/* Core Similarities */}
                <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg mb-10">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-4 flex items-center">
                    <svg
                      className="w-6 h-6 text-pink-500 mr-2"
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
                    Điểm chung cốt lõi của bộ ba Lãng mạn - Sáng tạo
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-pink-100 text-pink-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          F
                        </div>
                        <h4 className="font-bold text-gray-800">
                          Cảm xúc sâu sắc
                        </h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Cả ba đều đưa ra quyết định dựa trên cảm xúc và giá trị
                        cá nhân
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
                        kế hoạch cứng nhắc
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-gradient-to-r from-pink-100 to-blue-100 text-purple-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          ✨
                        </div>
                        <h4 className="font-bold text-gray-800">
                          Sáng tạo không ngừng
                        </h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Có trí tưởng tượng phong phú và khả năng sáng tạo đa
                        dạng
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pair Comparisons */}
                <div className="space-y-10">
                  {/* ENFP vs INFP */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-2 h-10 mr-3 rounded-full"></div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                          ENFP
                        </span>{" "}
                        vs <span className="text-purple-500">INFP</span>:
                        <span className="text-sm font-normal ml-2">
                          Người truyền cảm hứng vs Người lý tưởng hóa
                        </span>
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 text-pink-500 mr-2"
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
                            Đều sử dụng trực giác (N) và cảm xúc (F) làm chức
                            năng chính
                          </li>
                          <li>
                            Có khả năng sáng tạo và trí tưởng tượng phong phú
                          </li>
                          <li>
                            Quan tâm đến giá trị cá nhân và ý nghĩa sâu xa
                          </li>
                          <li>
                            Hướng đến giúp đỡ người khác và cải thiện xã hội
                          </li>
                          <li>Ghét sự ràng buộc và quy tắc cứng nhắc</li>
                        </ul>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 text-purple-500 mr-2"
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
                              ENFP (E) được tiếp năng lượng từ giao tiếp xã hội,
                              INFP (I) cần thời gian một mình để nạp năng lượng
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Cách thể hiện
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ENFP hướng ngoại và nhiệt tình, INFP trầm lắng và
                              kín đáo
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Phong cách làm việc
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ENFP thích hợp với các dự án nhóm, INFP làm việc
                              hiệu quả hơn khi độc lập
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                      <p className="italic text-gray-700">
                        "ENFP như ngọn đuốc tỏa sáng giữa đám đông, INFP như
                        ngọn nến ấm áp trong phòng riêng. Cả hai đều truyền cảm
                        hứng nhưng theo cách hoàn toàn khác biệt."
                      </p>
                    </div>
                  </div>

                  {/* ENFP vs ESFP */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-pink-500 to-red-500 w-2 h-10 mr-3 rounded-full"></div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                          ENFP
                        </span>{" "}
                        vs <span className="text-red-500">ESFP</span>:
                        <span className="text-sm font-normal ml-2">
                          Người truyền cảm hứng vs Người trình diễn
                        </span>
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 text-pink-500 mr-2"
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
                          <li>Đều là người hướng ngoại (E) và linh hoạt (P)</li>
                          <li>Tràn đầy năng lượng và nhiệt huyết</li>
                          <li>Yêu thích giao tiếp và kết nối xã hội</li>
                          <li>Học hỏi tốt nhất qua trải nghiệm thực tế</li>
                          <li>Ghét sự nhàm chán và lặp lại</li>
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
                              Cách tiếp nhận thông tin
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ENFP (N) tập trung vào ý nghĩa và khả năng, ESFP
                              (S) tập trung vào thực tế và chi tiết cụ thể
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Mục tiêu công việc
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ENFP hướng đến ý nghĩa và cảm hứng, ESFP hướng đến
                              kết quả và trải nghiệm
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Phong cách giao tiếp
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ENFP nói về ý tưởng và khả năng, ESFP nói về trải
                              nghiệm và thực tế
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <p className="italic text-gray-700">
                        "ENFP như nhà tiên tri của những ý tưởng mới, ESFP như
                        người dẫn dắt của những trải nghiệm thực tế. Cả hai đều
                        tỏa sáng nhưng ở những lĩnh vực khác nhau."
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
                      <thead className="bg-gradient-to-r from-pink-600 to-blue-600 text-white">
                        <tr>
                          <th className="py-3 px-4 text-left font-semibold">
                            Đặc điểm
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            ENFP
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            INFP
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            ESFP
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
                            Trực giác hướng ngoại (Ne) + Cảm xúc hướng nội (Fi)
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Cảm xúc hướng nội (Fi) + Trực giác hướng ngoại (Ne)
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Cảm nhận hướng ngoại (Se) + Cảm xúc hướng nội (Fi)
                          </td>
                        </tr>
                        {/* Row 2 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Phong cách giao tiếp
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-pink-50">
                            Nhiệt tình, sáng tạo, đầy ý tưởng
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-purple-50">
                            Trầm lắng, sâu sắc, giàu cảm xúc
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-red-50">
                            Vui vẻ, thực tế, tràn đầy năng lượng
                          </td>
                        </tr>
                        {/* Row 3 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                            Trong quan hệ
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Hòa đồng, truyền cảm hứng, kết nối sâu sắc
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Chân thành, trung thành, cần không gian riêng
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Nhiệt tình, vui vẻ, thích là trung tâm
                          </td>
                        </tr>
                        {/* Row 4 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Ưu thế nghề nghiệp
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-pink-50">
                            Nhà văn, diễn giả, nhà tâm lý, nhà báo
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-purple-50">
                            Nghệ sĩ, nhà thơ, tư vấn viên, giáo viên
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-red-50">
                            Diễn viên, MC, nhân viên bán hàng, tổ chức sự kiện
                          </td>
                        </tr>
                        {/* Row 5 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                            Điểm mạnh
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Sáng tạo, linh hoạt, truyền cảm hứng
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Nhạy cảm, chân thành, giàu lòng trắc ẩn
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Năng động, thực tế, giải quyết vấn đề nhanh
                          </td>
                        </tr>
                        {/* Row 6 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Điểm yếu
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-pink-50">
                            Dễ phân tán, thiếu kiên nhẫn với chi tiết
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-purple-50">
                            Dễ tổn thương, khó đưa ra quyết định
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-red-50">
                            Thiếu chiều sâu, dễ chán nản
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
                    {/* ENFP Column */}
                    <div className="bg-white p-6 rounded-xl border border-pink-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-pink-100 p-3 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-pink-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-pink-700">ENFP</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Nhà
                          văn/Nhà báo
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Diễn giả
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Nhà tâm
                          lý học
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Nhà hoạt
                          động xã hội
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Giáo
                          viên sáng tạo
                        </li>
                      </ul>
                    </div>

                    {/* INFP Column */}
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
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-purple-700">INFP</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Nhà
                          thơ/Nhà văn
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Nghệ
                          sĩ
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Tư vấn
                          viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Nhân
                          viên xã hội
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Biên
                          tập viên
                        </li>
                      </ul>
                    </div>

                    {/* ESFP Column */}
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
                              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-red-700">ESFP</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span> Diễn viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span> MC/Dẫn
                          chương trình
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span> Nhân viên
                          bán hàng
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span> Huấn
                          luyện viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span> Tổ chức
                          sự kiện
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Final Thoughts */}
                <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-pink-700 mb-3">
                    Nhận định cuối
                  </h3>
                  <p className="text-gray-700 mb-3">
                    ENFP, INFP và ESFP đều là những nhóm tính cách sáng tạo và
                    giàu cảm xúc, nhưng mỗi nhóm có thế mạnh riêng:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                    <li>
                      <span className="font-medium">ENFP</span> - Nhà truyền cảm
                      hứng với năng lượng tích cực và tầm nhìn sáng tạo
                    </li>
                    <li>
                      <span className="font-medium">INFP</span> - Người lý tưởng
                      hóa với trái tim nhân hậu và chiều sâu nội tâm
                    </li>
                    <li>
                      <span className="font-medium">ESFP</span> - Người trình
                      diễn với sự năng động và khả năng kết nối thực tế
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Sự khác biệt chính nằm ở cách họ tiếp cận thế giới: ENFP với
                    trực giác và khả năng truyền cảm hứng, INFP với chiều sâu
                    cảm xúc và giá trị cá nhân, ESFP với sự thực tế và năng
                    lượng tràn đầy. Hiểu rõ những khác biệt này giúp mỗi nhóm
                    phát huy tối đa tiềm năng của mình.
                  </p>
                </div>
              </div>
            )}
            {activeSection === "advice" && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Main Header */}
                <h2 className="text-3xl font-bold text-purple-600 mb-8 border-b-2 border-purple-100 pb-4">
                  LỜI KHUYÊN PHÁT TRIỂN DÀNH CHO NGƯỜI TRUYỀN CẢM HỨNG (ENFP)
                </h2>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-purple-700 to-pink-700 p-8 rounded-lg mb-10 text-white">
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
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      Hành trình phát triển cho người truyền cảm hứng
                    </h3>
                    <p className="text-purple-200">
                      Là những người sáng tạo và nhiệt huyết, ENFP cần học cách
                      cân bằng giữa việc kết nối với người khác và chăm sóc bản
                      thân, giữa sự tự do và trách nhiệm để tỏa sáng trọn vẹn.
                    </p>
                  </div>
                </div>

                {/* Core Advice Sections */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Develop Strengths */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Phát huy điểm mạnh
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Tận dụng tối đa khả năng sáng tạo và kết nối của bạn:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        Ứng dụng trí tưởng tượng phong phú vào các dự án mới
                      </li>
                      <li>Phát huy khả năng truyền cảm hứng cho người khác</li>
                      <li>Tận dụng sự nhiệt tình để khám phá cơ hội mới</li>
                    </ul>
                  </div>

                  {/* Improve Weaknesses */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-pink-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-6 h-6 text-pink-600"
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
                      Những điều ENFP cần lưu ý để phát triển:
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="italic text-gray-700">
                        "Sự nhiệt huyết là sức mạnh, nhưng tập trung và kiên
                        định là chìa khóa thành công lâu dài"
                      </p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Học cách yêu thương và chăm sóc bản thân</li>
                      <li>Phát triển khả năng đưa ra quyết định dứt khoát</li>
                      <li>Tiếp nhận lời chỉ trích như cơ hội phát triển</li>
                    </ul>
                  </div>
                </div>

                {/* Emotional & Social Skills Section */}
                <div className="mb-10 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg">
                        <svg
                          className="w-10 h-10 text-purple-600"
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
                      <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                        Phát triển kỹ năng xã hội & cảm xúc
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
                          <h4 className="font-semibold text-purple-700 mb-2">
                            Yêu thương bản thân
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Trung thực với cảm xúc của chính mình</li>
                            <li>Đáp ứng nhu cầu cá nhân trước tiên</li>
                            <li>Xem bản thân là trọng tâm quan trọng</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
                          <h4 className="font-semibold text-purple-700 mb-2">
                            Hiểu và tôn trọng người khác
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Nhận ra sự khác biệt trong quan điểm</li>
                            <li>Tiếp nhận phản hồi với thái độ cởi mở</li>
                            <li>Đặt câu hỏi để thấu hiểu sâu sắc hơn</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Self-Care Section */}
                <div className="mb-10">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 bg-purple-50 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-sm">
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
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-purple-700">
                          Phát triển bản thân
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        ENFP cần chú ý phát triển toàn diện:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Quyết đoán và trách nhiệm
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Mạnh dạn bày tỏ quan điểm cá nhân</li>
                            <li>Chịu trách nhiệm với lựa chọn của mình</li>
                            <li>Không đổ lỗi cho hoàn cảnh hay người khác</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Cân bằng cuộc sống
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Dành thời gian chất lượng cho bản thân</li>
                            <li>Học cách nói "không" khi cần thiết</li>
                            <li>Xây dựng thói quen hoàn thành dự án</li>
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
                            <div className="flex-shrink-0 bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              1
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Nhật ký cảm xúc
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Viết ra 3 cảm xúc mỗi ngày và nguyên nhân
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              2
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Quyết định nhỏ
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Mỗi ngày đưa ra 1 quyết định dứt khoát
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              3
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Phản hồi tích cực
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Ghi lại 1 lời chỉ trích và bài học rút ra
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Encouragement */}
                <div className="bg-gradient-to-r from-purple-800 to-pink-700 p-8 rounded-lg text-white">
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
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      Sức mạnh của Người truyền cảm hứng
                    </h3>
                    <p className="mb-4 text-purple-100">
                      Bạn được ban tặng khả năng kết nối tuyệt vời, trí tưởng
                      tượng phong phú và trái tim ấm áp. Khi học cách kết hợp
                      những điểm mạnh này với sự tự chăm sóc và kiên định, bạn
                      sẽ tỏa sáng rực rỡ nhất.
                    </p>
                    <div className="bg-pink-800 bg-opacity-30 p-4 rounded-lg inline-block">
                      <p className="font-medium">
                        "Thế giới cần những người truyền cảm hứng như bạn -
                        những người thắp lửa nhiệt huyết, kết nối trái tim và
                        mang lại những ý tưởng mới mẻ. Hãy nhớ rằng bạn chỉ có
                        thể thực sự tỏa sáng khi học cách yêu thương và trân
                        trọng chính mình trước tiên."
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
export default ENFPPage;
