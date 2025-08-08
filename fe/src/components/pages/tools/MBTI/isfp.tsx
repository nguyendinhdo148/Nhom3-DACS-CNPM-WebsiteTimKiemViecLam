import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faPen, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const handleCopyLink = () => {
  const url = "http://localhost:5173/tools/mbti/tinh-cach/isfp";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Đã sao chép liên kết!");
    })
    .catch((err) => {
      console.error("Lỗi khi sao chép liên kết:", err);
    });
};
const ISFPPage = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Tổng quan" },
    { id: "strengths-weaknesses", title: "Điểm mạnh và điểm yếu" },
    { id: "relationship", title: "Mối quan hệ" },
    { id: "how-to-be-close", title: "Làm sao để thân thiết với ISFP" },
    { id: "career-path", title: "Con đường sự nghiệp" },
    { id: "workplace-habits", title: "Thói quen nơi công sở" },
    { id: "compare", title: "So sánh ISFP với ISTP, ESFP" },
    { id: "advice", title: "Lời khuyên dành cho ISFP" },
  ];

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="ISFP-page bg-gradient-to-b from-blue-50 to-purple-50">
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
                ISFP - Người nghệ sĩ
              </h1>
            </div>
            <div className="relative w-full">
              <img
                src="/mbti_icons/isfp1.webp"
                alt="ISFP - Người nghệ sĩ"
                className="pointer w-full h-120 object-cover rounded-lg shadow "
              />
            </div>

            {/* Description */}
            <div className="text-lg text-gray-700 max-w-4xl text-center">
              Ẩn dưới vẻ ngoài trầm lặng, ISFP sở hữu một trái tim tràn đầy
              nhiệt huyết của người nghệ sĩ. Họ vừa hướng nội vừa hướng ngoại,
              dễ vui dễ buồn, khó đoán và tự phát. ISFP cũng là người yêu tự do
              và đam mê trải nghiệm, biết lắng nghe và quan tâm đến những người
              xung quanh.
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
                  <h2 className="text-3xl font-bold text-rose-600 mb-4">
                    TỔNG QUAN TÍNH CÁCH ISFP
                  </h2>
                  <div className="w-20 h-1 bg-rose-400 mx-auto"></div>
                </div>

                {/* Introduction */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-rose-300">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Ẩn dưới vẻ ngoài trầm lặng, ISFP (Người nghệ sĩ) sở hữu một
                    trái tim tràn đầy nhiệt huyết. Họ là những cá nhân đa cảm,
                    yêu tự do và đam mê trải nghiệm. ISFP kết hợp nét duyên dáng
                    hướng nội với sự tinh tế nghệ thuật, luôn biết cách lắng
                    nghe và quan tâm đến thế giới xung quanh.
                  </p>
                </div>

                {/* MBTI Breakdown */}
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-rose-600 mb-6 text-center">
                    Ý NGHĨA 4 CHỮ CÁI ISFP
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "● I - Hướng nội (Introverted)",
                        color: "bg-rose-100",
                        textColor: "text-rose-800",
                        content:
                          "ISFP tìm năng lượng từ thế giới nội tâm phong phú. Họ thích những cuộc trò chuyện sâu sắc với số ít người thân thiết hơn là những bữa tiệc ồn ào.",
                      },
                      {
                        title: "● S - Giác quan (Sensing)",
                        color: "bg-pink-100",
                        textColor: "text-pink-800",
                        content:
                          "ISFP trân trọng vẻ đẹp cụ thể qua năm giác quan. Họ sống trọn vẹn trong hiện tại và tận hưởng những khoảnh khắc nhỏ bé đời thường.",
                      },
                      {
                        title: "● F - Cảm xúc (Feeling)",
                        color: "bg-red-100",
                        textColor: "text-red-800",
                        content:
                          "ISFP đưa ra quyết định dựa trên giá trị cá nhân và cảm nhận. Họ quan tâm sâu sắc đến cảm xúc của người khác và luôn tìm kiếm sự hài hòa.",
                      },
                      {
                        title: "● P - Linh hoạt (Perceiving)",
                        color: "bg-fuchsia-100",
                        textColor: "text-fuchsia-800",
                        content:
                          "ISFP yêu tự do và ghét bị gò bó. Họ thích ứng biến với cuộc sống hơn là tuân theo kế hoạch định sẵn, luôn mở cửa cho những trải nghiệm mới.",
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
                      title: "Tâm hồn nghệ sĩ",
                      icon: "🎨",
                      content:
                        "ISFP sở hữu con mắt thẩm mỹ tinh tế và khả năng sáng tạo phi thường. Họ thể hiện bản thân qua nghệ thuật, thời trang hoặc bất kỳ hình thức sáng tạo nào cho phép họ bộc lộ cảm xúc.",
                    },
                    {
                      title: "Tinh thần phiêu lưu",
                      icon: "🌄",
                      content:
                        "Dù hướng nội, ISFP luôn khao khát khám phá thế giới. Họ là những kẻ mộng mơ thích lang thang một mình, tìm kiếm vẻ đẹp ẩn giấu trong những góc khuất của cuộc sống.",
                    },
                    {
                      title: "Sự nhạy cảm sâu sắc",
                      icon: "💞",
                      content:
                        "ISFP dễ dàng thấu hiểu nỗi đau của người khác. Họ giỏi lắng nghe và luôn tìm cách giúp đỡ mà không phán xét, dù hiếm khi khoe khoang về những việc tốt mình làm.",
                    },
                    {
                      title: "Phong cách sống tự do",
                      icon: "🕊️",
                      content:
                        "ISFP căm ghét sự ràng buộc và quy tắc cứng nhắc. Họ muốn được là chính mình mà không cần đáp ứng kỳ vọng của xã hội, sống theo cách riêng đầy cá tính.",
                    },
                  ].map((section, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-rose-300"
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
                  <div className="bg-rose-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-rose-700 mb-4">
                      ĐIỂM MẠNH NỔI BẬT
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-rose-500 mr-2">✓</span>
                        <span>Khiếu thẩm mỹ và sáng tạo xuất sắc</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-500 mr-2">✓</span>
                        <span>Khả năng đồng cảm và lắng nghe sâu sắc</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-500 mr-2">✓</span>
                        <span>Tận hưởng hiện tại trọn vẹn</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-500 mr-2">✓</span>
                        <span>Linh hoạt và dễ thích nghi</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-500 mr-2">✓</span>
                        <span>Trung thành với giá trị cá nhân</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-pink-700 mb-4">
                      ĐIỂM YẾU CẦN LƯU Ý
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✗</span>
                        <span>Dễ bị tổn thương bởi chỉ trích</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✗</span>
                        <span>Khó chia sẻ cảm xúc thật sự</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✗</span>
                        <span>Thiếu kiên nhẫn với lý thuyết trừu tượng</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✗</span>
                        <span>Trốn tránh xung đột</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✗</span>
                        <span>Khó lập kế hoạch dài hạn</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Career & Relationships */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-rose-700 mb-4">
                      ISFP TRONG CÔNG VIỆC
                    </h3>
                    <p className="text-gray-700 mb-4">
                      ISFP tỏa sáng trong các lĩnh vực cho phép họ thể hiện sự
                      sáng tạo và giúp đỡ người khác. Môi trường lý tưởng của họ
                      cần:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Tự do thể hiện cá tính và ý tưởng</li>
                      <li>Không gian làm việc linh hoạt, ít quy tắc</li>
                      <li>Cơ hội làm việc thực tế với giác quan</li>
                      <li>Ý nghĩa nhân văn trong công việc</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                      Nghề nghiệp phù hợp: Nghệ sĩ, nhà thiết kế, nhiếp ảnh gia,
                      nhạc sĩ, nhân viên xã hội, bác sĩ thú y, giáo viên nghệ
                      thuật.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-pink-700 mb-4">
                      ISFP TRONG QUAN HỆ
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Trong tình yêu và tình bạn, ISFP là những người bạn tận
                      tâm nhưng cần không gian riêng:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Thể hiện tình cảm qua hành động hơn lời nói</li>
                      <li>Cần thời gian riêng để nuôi dưỡng nội tâm</li>
                      <li>Ghét sự kiểm soát và ràng buộc</li>
                      <li>Đánh giá cao những trải nghiệm cùng nhau</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                      ISFP kết nối sâu sắc với những người tôn trọng sự tự do và
                      thấu hiểu cảm xúc phức tạp của họ.
                    </p>
                  </div>
                </div>

                {/* Famous People */}
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold text-center text-rose-700 mb-6">
                    ISFP NỔI TIẾNG
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {[
                      { name: "Lana Del Rey", role: "Ca sĩ, nhạc sĩ" },
                      { name: "Billie Eilish", role: "Ca sĩ" },
                      { name: "Marilyn Monroe", role: "Diễn viên" },
                      { name: "Lionel Messi", role: "Cầu thủ bóng đá" },
                      { name: "Lady Gaga", role: "Ca sĩ" },
                      { name: "Michael Jackson", role: "Ca sĩ" },
                      { name: "Britney Spears", role: "Ca sĩ" },
                      { name: "Jungkook (BTS)", role: "Ca sĩ" },
                    ].map((person, index) => (
                      <div
                        key={index}
                        className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="h-12 w-12 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full mx-auto mb-2 flex items-center justify-center text-rose-700 font-bold">
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
                <div className="bg-rose-100 p-6 rounded-lg mt-8 text-center">
                  <p className="text-rose-800 italic font-medium">
                    "ISFP là những linh hồn tự do với trái tim nghệ sĩ. Họ nhìn
                    thế giới qua lăng kính cảm xúc tinh tế, biến những khoảnh
                    khắc bình thường thành tác phẩm nghệ thuật. Dù ít nói, ISFP
                    để lại dấu ấn sâu đậm qua sự chân thành và vẻ đẹp họ mang
                    đến cho đời."
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
                      NHÓM TÍNH CÁCH ISFP (NGHỆ SĨ)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    ISFP - Nhóm tính cách "Người nghệ sĩ" với trái tim nhạy cảm,
                    tâm hồn sáng tạo và lối sống tự do
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
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Hấp dẫn và ấm áp
                          </h4>
                          <p className="text-gray-700">
                            ISFP như những người nghệ sĩ với phong cách sống
                            "hết mình như thể hôm nay là ngày cuối". Sự thoải
                            mái và ấm áp của họ khiến mọi người xung quanh luôn
                            ngưỡng mộ.
                          </p>
                        </div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg mt-3">
                        <p className="text-sm text-green-700 italic">
                          "ISFP mang đến năng lượng tích cực và cảm hứng sống
                          cho những người xung quanh"
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
                            Đồng cảm sâu sắc
                          </h4>
                          <p className="text-gray-700">
                            ISFP có khả năng thấu hiểu cảm xúc tuyệt vời. Họ
                            luôn quan tâm đến người khác và là người hòa giải
                            tốt trong các xung đột nhờ sự nhạy cảm của mình.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          Nhạy cảm
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          Hòa giải
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          Thấu hiểu
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
                              d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Sáng tạo nghệ thuật
                          </h4>
                          <p className="text-gray-700">
                            ISFP sở hữu trí tưởng tượng phong phú và khả năng
                            sáng tạo đặc biệt. Họ thể hiện bản thân qua nghệ
                            thuật và luôn tìm cách chạm đến trái tim người khác.
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
                          <span>Khả năng sáng tạo</span>
                          <span>90% ISFP có năng khiếu nghệ thuật</span>
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
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Đam mê nhiệt huyết
                          </h4>
                          <p className="text-gray-700">
                            Ẩn sau vẻ ngoài trầm lặng là trái tim đầy nhiệt
                            huyết. Khi tìm thấy điều yêu thích, ISFP sẽ dành
                            toàn bộ thời gian và năng lượng để theo đuổi đến
                            cùng.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Biểu hiện:</span>
                          Tập trung cao độ, cống hiến hết mình, không ngại khó
                          khăn
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
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Ghét sự ràng buộc
                          </h4>
                          <p className="text-gray-700">
                            ISFP cực kỳ đề cao tự do cá nhân. Họ khó chịu với
                            các quy tắc cứng nhắc và thường gặp khó khăn trong
                            môi trường có kỷ luật nghiêm ngặt.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Gợi ý:</span>
                          Học cách thích nghi với một số nguyên tắc cần thiết
                          trong công việc và cuộc sống
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
                            Khó lập kế hoạch dài hạn
                          </h4>
                          <p className="text-gray-700">
                            ISFP sống trong hiện tại và thường tránh các cam kết
                            lâu dài. Điều này có thể gây khó khăn trong quản lý
                            tài chính và các mối quan hệ nghiêm túc.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 bg-red-50 p-3 rounded-lg">
                        <p className="text-sm text-red-700 italic">
                          "ISFP cần học cách cân bằng giữa nhu cầu tự do và
                          trách nhiệm với các cam kết quan trọng"
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
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Cảm xúc thất thường
                          </h4>
                          <p className="text-gray-700">
                            ISFP sống bằng cảm xúc nên dễ dao động tâm trạng.
                            Khi gặp tình huống ngoài tầm kiểm soát, họ có thể
                            mất bình tĩnh và tự tin.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Cải thiện:</span>
                          Rèn luyện kỹ năng quản lý cảm xúc, học cách giữ bình
                          tĩnh trong khủng hoảng
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
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Tính hiếu thắng
                          </h4>
                          <p className="text-gray-700">
                            ISFP có xu hướng cạnh tranh ngay cả trong những việc
                            nhỏ. Điều này đôi khi khiến họ mất tập trung vào mục
                            tiêu chính và dễ thất vọng.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Giải pháp:</span>
                          Tập trung vào bức tranh tổng thể, học cách chấp nhận
                          thất bại nhỏ để đạt thành công lớn
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Balance Section */}
                <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-xl text-white">
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
                      CÂN BẰNG CUỘC SỐNG ISFP
                    </h3>
                    <p className="mb-4 text-purple-100">
                      Sức mạnh thực sự của ISFP nằm ở khả năng kết hợp trí tưởng
                      tượng phong phú với sự đồng cảm sâu sắc. Khi học được cách
                      cân bằng giữa nhu cầu tự do và trách nhiệm, giữa cảm xúc
                      và lý trí, họ có thể tỏa sáng với tất cả tiềm năng nghệ
                      thuật của mình.
                    </p>
                    <div className="bg-opacity-20 p-4 rounded-lg inline-block">
                      <p className="font-medium">
                        "Một ISFP trưởng thành hiểu rằng không phải lúc nào cũng
                        có thể sống hoàn toàn tự do. Đôi khi, những cam kết và
                        kỷ luật tự giác mới chính là chìa khóa để phát triển tài
                        năng."
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
                  <h2 className="text-3xl font-bold text-rose-600 mb-3">
                    MỐI QUAN HỆ CỦA ISFP
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto rounded-full"></div>
                  <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    ISFP là những người bạn chân thành và người yêu tinh tế. Với
                    trái tim nhạy cảm và tâm hồn nghệ sĩ, họ xây dựng mối quan
                    hệ bằng sự đồng cảm sâu sắc. ISFP mang đến sự ấm áp, tự do
                    và những khoảnh khắc đẹp đẽ đáng nhớ trong từng mối quan hệ.
                  </p>
                </div>

                {/* General Relationship Traits */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-rose-100 p-3 rounded-full mr-4">
                        <svg
                          className="w-6 h-6 text-rose-600"
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
                        <span className="text-rose-500 mr-2">•</span>
                        <span>
                          Trân trọng tự do cá nhân và không gian riêng
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-500 mr-2">•</span>
                        <span>Thể hiện tình cảm qua hành động chu đáo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-500 mr-2">•</span>
                        <span>Sống trọn vẹn hiện tại, ít lo xa</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-500 mr-2">•</span>
                        <span>Nhạy cảm và đồng cảm sâu sắc</span>
                      </li>
                    </ul>
                  </div>

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
                        { type: "ESFJ", desc: "Mang lại sự ổn định" },
                        { type: "ENFJ", desc: "Hiểu cảm xúc sâu sắc" },
                        { type: "ISTP", desc: "Cùng đam mê trải nghiệm" },
                        { type: "INFP", desc: "Hòa hợp tâm hồn" },
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <span className="font-bold text-rose-600">
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
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-8 rounded-2xl mb-12">
                  <div className="flex flex-col md:flex-row items-center mb-8">
                    <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                      <div className="bg-white p-4 rounded-full shadow-lg">
                        <svg
                          className="w-16 h-16 text-rose-500"
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
                      <h3 className="text-2xl font-bold text-rose-700 mb-4">
                        ISFP TRONG TÌNH YÊU
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Tình yêu của ISFP như một bản nhạc dịu dàng với những
                        nốt cao trào đầy cảm xúc. Họ yêu bằng cả trái tim nhạy
                        cảm, luôn quan tâm đến nhu cầu của đối phương. ISFP cần
                        sự tự do để thể hiện tình yêu theo cách riêng của mình.
                      </p>
                      <div className="bg-white bg-opacity-70 p-4 rounded-lg border-l-4 border-rose-400 mb-4">
                        <p className="italic text-gray-700">
                          "ISFP yêu thầm lặng nhưng sâu sắc. Họ thể hiện tình
                          cảm qua những cử chỉ nhỏ - một bữa ăn tự nấu, một món
                          quà tự làm, hay đơn giản là sự hiện diện đầy ấm áp."
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
                          "ISFP thể hiện tình yêu qua hành động chăm sóc tỉ mỉ. Họ nhớ từng chi tiết nhỏ về người mình yêu và luôn tìm cách làm đối phương ngạc nhiên bằng những món quà ý nghĩa.",
                      },
                      {
                        title: "Thách thức",
                        icon: "⚠️",
                        content:
                          "ISFP khó chia sẻ cảm xúc thật sự và dễ tổn thương trước lời chỉ trích. Họ cần thời gian để mở lòng và tin tưởng hoàn toàn.",
                      },
                      {
                        title: "Lời khuyên",
                        icon: "💡",
                        content:
                          "ISFP nên học cách bày tỏ nhu cầu của bản thân. Đối tác nên tôn trọng không gian riêng và cùng họ tạo ra những kỷ niệm đẹp thay vì ép buộc vào khuôn khổ.",
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
                  <h3 className="text-2xl font-bold text-pink-700 mb-6 flex items-center">
                    <svg
                      className="w-8 h-8 mr-3 text-pink-500"
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
                    ISFP TRONG TÌNH BẠN
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Bạn bè đa dạng
                          </h4>
                          <p className="text-gray-700">
                            ISFP kết bạn với những người cùng sở thích nghệ
                            thuật và trải nghiệm. Họ tạo mối quan hệ qua những
                            hoạt động thực tế như vẽ tranh, nghe nhạc hay khám
                            phá thiên nhiên.
                          </p>
                        </div>
                      </div>

                      <div className="bg-rose-50 p-5 rounded-lg border-l-4 border-rose-400 mb-6">
                        <p className="italic text-gray-700">
                          "ISFP không phải người bạn ồn ào nhất, nhưng là người
                          bạn biết lắng nghe nhất. Họ luôn có mặt khi bạn cần
                          với sự đồng cảm chân thành."
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start mb-6">
                        <div className="bg-rose-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-rose-600"
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
                            ISFP đôi khi cần nhiều thời gian ở một mình để tái
                            tạo năng lượng. Bạn bè có thể hiểu nhầm khi họ đột
                            ngột rút lui khỏi các tương tác xã hội.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-fuchsia-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-fuchsia-600"
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
                            Khi đã thân thiết, ISFP trở thành người bạn trung
                            thành và đáng tin cậy. Họ sẵn sàng giúp đỡ bạn bè mà
                            không cần lời cảm ơn, chỉ cần sự chân thành.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Parenting Section */}
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-rose-700 mb-6 flex items-center">
                    <svg
                      className="w-8 h-8 mr-3 text-rose-500"
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
                    ISFP KHI LÀM CHA MẸ
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {[
                        {
                          title: "Phong cách nuôi dạy",
                          content:
                            "ISFP là những phụ huynh ấm áp và thoải mái. Họ khuyến khích con cái phát triển cá tính riêng thông qua nghệ thuật và trải nghiệm thực tế. Môi trường gia đình luôn tràn ngập tình yêu thương và sự sáng tạo.",
                        },
                        {
                          title: "Ưu điểm",
                          content:
                            "ISFP dạy con cách trân trọng vẻ đẹp cuộc sống và bày tỏ cảm xúc lành mạnh. Họ là người bạn đồng hành trong các hoạt động nghệ thuật, giúp con phát triển khiếu thẩm mỹ và sự nhạy cảm.",
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
                            <span className="text-rose-500 mr-2">•</span>
                            <span>
                              Khó khăn khi đặt ra kỷ luật và giới hạn rõ ràng
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            <span>
                              Ít quan tâm đến kế hoạch giáo dục dài hạn
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            <span>
                              Dễ bị tổn thương bởi thái độ của con cái
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-rose-100 p-5 rounded-lg border-l-4 border-rose-500">
                        <p className="italic text-gray-700">
                          "Dù không phải mẫu phụ huynh nguyên tắc nhất, ISFP
                          mang đến cho con cái tình yêu thương vô điều kiện. Họ
                          dạy con cách sống chân thật và trân trọng từng khoảnh
                          khắc đẹp đẽ trong cuộc sống."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Quote */}
                <div className="text-center mt-12">
                  <div className="bg-rose-100 p-6 rounded-xl inline-block max-w-2xl">
                    <svg
                      className="w-10 h-10 text-rose-500 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xl font-medium text-rose-800 mb-2">
                      "ISFP mang đến sự chân thành và ấm áp trong mọi mối quan
                      hệ. Họ yêu bằng cách lắng nghe, thấu hiểu và tôn trọng
                      không gian riêng của mỗi người. Để hiểu ISFP, hãy trân
                      trọng sự nhạy cảm của họ và cùng họ khám phá vẻ đẹp giản
                      dị của cuộc sống."
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
                    <span className="text-pink-600">NGHỆ SĨ (ISFP)</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    ISFP - Nhóm tính cách nhạy cảm, sáng tạo với trái tim ấm áp
                    và tâm hồn nghệ thuật
                  </p>
                </div>

                {/* Core Principles */}
                <div className="bg-pink-50 p-6 rounded-lg mb-8">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <div className="bg-white p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto shadow-sm">
                        <svg
                          className="w-10 h-10 text-pink-600"
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
                      <h3 className="text-xl font-semibold text-pink-800 mb-3">
                        Nguyên tắc vàng khi tiếp cận ISFP
                      </h3>
                      <p className="text-gray-700">
                        ISFP là những người nhạy cảm, sáng tạo và đề cao sự chân
                        thành. Họ có vẻ ngoài trầm lặng nhưng ẩn chứa trái tim
                        đầy nhiệt huyết. Để xây dựng mối quan hệ với ISFP, điều
                        quan trọng nhất là:
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
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Kiên nhẫn và tôn trọng
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                              Chấp nhận giai đoạn làm quen ban đầu có thể lâu
                            </li>
                            <li>Không ép buộc họ mở lòng quá nhanh</li>
                            <li>
                              Tôn trọng nhịp độ phát triển mối quan hệ tự nhiên
                            </li>
                            <li>Cho họ thời gian riêng khi cần thiết</li>
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Chân thành và nhạy cảm
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Luôn trung thực trong mọi tình huống</li>
                            <li>Nhạy cảm với cảm xúc của họ</li>
                            <li>Tránh phán xét hay chỉ trích người khác</li>
                            <li>Thể hiện sự đồng cảm chân thành</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Strategy 3 */}
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
                              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Cùng sáng tạo và trải nghiệm
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Cùng tham gia hoạt động nghệ thuật</li>
                            <li>Khám phá những trải nghiệm mới mẻ</li>
                            <li>Chia sẻ những ý tưởng sáng tạo</li>
                            <li>Đánh giá cao tài năng của họ</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Strategy 4 */}
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
                              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Tổ chức các hoạt động nhẹ nhàng
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                              Chủ động lên kế hoạch nhưng không gây áp lực
                            </li>
                            <li>Chọn hoạt động không quá ồn ào, náo nhiệt</li>
                            <li>Cân bằng giữa vui chơi và nghỉ ngơi</li>
                            <li>Tạo không gian thoải mái, tự nhiên</li>
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
                              Kiên nhẫn chờ đợi họ mở lòng
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Tôn trọng không gian và thời gian riêng của họ
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Chia sẻ những trải nghiệm nghệ thuật cùng nhau
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Thể hiện sự trân trọng với tài năng của họ
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
                              Ép buộc họ phải giao tiếp khi chưa sẵn sàng
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Kiểm soát hoặc đặt quá nhiều quy tắc
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Chỉ trích hay nói xấu người khác
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Tổ chức những hoạt động quá ồn ào, náo nhiệt
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Advice */}
                <div className="bg-pink-50 p-6 rounded-lg border border-pink-100">
                  <h3 className="text-xl font-semibold text-pink-800 mb-3">
                    Lời khuyên từ chuyên gia
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Xây dựng mối quan hệ với ISFP cần sự chân thành và kiên
                    nhẫn. Một khi đã tin tưởng bạn, họ sẽ trở thành người bạn
                    trung thành, ấm áp và sẵn sàng hỗ trợ bạn bằng cả trái tim.
                    Hãy trân trọng sự nhạy cảm và tâm hồn nghệ thuật mà họ mang
                    đến cho cuộc sống của bạn.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="italic text-gray-700">
                      "Tình bạn với ISFP như một bức tranh cần thời gian để hoàn
                      thiện. Khi đã hoàn thành, đó sẽ là một kiệt tác của sự
                      chân thành, sáng tạo và thấu hiểu sâu sắc."
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
                    <span className="text-rose-600">NGHỆ SĨ (ISFP)</span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    ISFP - Những tâm hồn sáng tạo với trực giác nhạy bén và đôi
                    tay khéo léo
                  </p>
                </div>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-rose-500 to-pink-600 p-8 rounded-lg mb-10 text-white">
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
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      "ISFP xây dựng sự nghiệp bằng sự sáng tạo và cảm nhận tinh
                      tế"
                    </h3>
                    <p className="text-rose-100">
                      Những nghệ sĩ này luôn tìm kiếm công việc cho phép họ tự
                      do thể hiện bản thân và kết nối với thế giới qua giác quan
                      và cảm xúc
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
                        <div className="bg-rose-100 text-rose-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          1
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Giai đoạn khởi đầu: Khám phá đam mê
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Khi mới bước vào sự nghiệp, ISFP thử nghiệm nhiều lĩnh
                          vực sáng tạo để tìm ra con đường phù hợp. Họ xuất sắc
                          trong các vị trí cho phép thể hiện cá tính và làm việc
                          độc lập.
                        </p>
                        <div className="bg-rose-50 p-4 rounded-lg">
                          <p className="italic text-gray-700">
                            "ISFP cần môi trường làm việc linh hoạt để phát
                            triển. Họ học qua trải nghiệm thực tế và cảm nhận cá
                            nhân hơn là lý thuyết cứng nhắc"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stage 2 */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="bg-rose-100 text-rose-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          2
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Giai đoạn bứt phá: Phát triển phong cách riêng
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Sau khi tích lũy kinh nghiệm, ISFP hình thành phong
                          cách độc đáo của riêng mình. Họ được đánh giá cao nhờ
                          khả năng cảm nhận tinh tế và tạo ra những tác phẩm đầy
                          cảm xúc.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-rose-100 text-rose-800 text-xs px-3 py-1 rounded-full">
                            Sáng tạo độc đáo
                          </span>
                          <span className="bg-rose-100 text-rose-800 text-xs px-3 py-1 rounded-full">
                            Cảm nhận nghệ thuật
                          </span>
                          <span className="bg-rose-100 text-rose-800 text-xs px-3 py-1 rounded-full">
                            Kỹ năng thực hành
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stage 3 */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="bg-rose-100 text-rose-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          3
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Giai đoạn chín muồi: Truyền cảm hứng
                        </h4>
                        <p className="text-gray-700">
                          Ở đỉnh cao sự nghiệp, ISFP trở thành người truyền cảm
                          hứng thông qua tác phẩm của mình. Họ tạo ra môi trường
                          làm việc tự do, khuyến khích sáng tạo cho thế hệ sau.
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
                        <div className="bg-rose-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-rose-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Sáng tạo độc đáo
                          </h4>
                          <p className="text-gray-700">
                            Khả năng tạo ra những ý tưởng mới mẻ và cách tiếp
                            cận khác biệt
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-start mb-3">
                        <div className="bg-rose-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-rose-600"
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
                            Kỹ năng thực hành khéo léo
                          </h4>
                          <p className="text-gray-700">
                            Khả năng biến ý tưởng thành hiện thực qua đôi tay
                            tài hoa
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-start mb-3">
                        <div className="bg-rose-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-rose-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Đồng cảm sâu sắc
                          </h4>
                          <p className="text-gray-700">
                            Khả năng thấu hiểu và kết nối với cảm xúc của người
                            khác
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-start mb-3">
                        <div className="bg-rose-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-rose-600"
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
                            Linh hoạt và thích ứng
                          </h4>
                          <p className="text-gray-700">
                            Dễ dàng thích nghi với thay đổi và tìm hướng đi mới
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
                        <div className="bg-rose-100 p-3 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-rose-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-rose-700">
                          Nghệ thuật & Sáng tạo
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Nghệ sĩ
                          thị giác
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Nhạc
                          sĩ/Nhạc công
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Nhiếp
                          ảnh gia
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Nhà
                          thiết kế
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-rose-100 p-3 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-rose-600"
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
                        <h4 className="font-bold text-rose-700">
                          Chăm sóc & Giúp đỡ
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Nhân
                          viên xã hội
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Tư vấn
                          tâm lý
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Giáo
                          viên nghệ thuật
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Bác sĩ
                          thú y
                        </li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-rose-100 p-3 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-rose-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-rose-700">
                          Thể thao & Ngoài trời
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Hướng
                          dẫn viên du lịch
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Vận động
                          viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Kiểm lâm
                          viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Huấn
                          luyện viên
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Career Warnings */}
                <div className="mb-12 bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-rose-700 mb-3">
                    Cảnh báo nghề nghiệp
                  </h3>
                  <p className="text-gray-700 mb-4">
                    ISFP nên tránh những môi trường công việc:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Có cấu trúc cứng nhắc và quy tắc nghiêm ngặt</li>
                    <li>Đòi hỏi làm việc lặp đi lặp lại theo quy trình</li>
                    <li>Yêu cầu nhiều công việc giấy tờ hành chính</li>
                    <li>Thiếu không gian cho sự sáng tạo cá nhân</li>
                  </ul>
                </div>

                {/* Career Development */}
                <div className="bg-rose-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-rose-700 mb-4">
                    Lộ trình phát triển
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-rose-500 font-bold">
                        1.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn khám phá (0-5 năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Thử nghiệm nhiều lĩnh vực sáng tạo, tìm ra đam mê thực
                          sự
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-rose-500 font-bold">
                        2.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn chuyên môn hóa (5-10 năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Phát triển phong cách riêng và xây dựng thương hiệu cá
                          nhân
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-rose-500 font-bold">
                        3.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn truyền cảm hứng (10+ năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Tạo ảnh hưởng và dẫn dắt thế hệ sau trong lĩnh vực
                          sáng tạo
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
                <h2 className="text-3xl font-bold text-pink-600 mb-6 border-b-2 border-pink-100 pb-4">
                  THÓI QUEN NƠI CÔNG SỞ CỦA ISFP
                </h2>

                {/* Introduction */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    ISFP tỏa sáng trong môi trường làm việc cho phép họ thể hiện
                    sự sáng tạo và linh hoạt. Với tâm hồn nghệ thuật và khả năng
                    thấu hiểu con người, họ xuất sắc trong các vai trò đòi hỏi
                    sự nhạy cảm, thẩm mỹ và kết nối với mọi người.
                  </p>
                </div>

                {/* As Employees Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-pink-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-pink-600">
                      ISFP khi là nhân viên
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Điểm mạnh nổi bật
                      </h4>
                      <p className="text-gray-700">
                        Sáng tạo và có gu thẩm mỹ tốt. Làm việc hiệu quả khi
                        được tự do thể hiện. Giỏi giải quyết vấn đề theo cách
                        độc đáo. Đặc biệt nhạy cảm với nhu cầu của người khác.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Thách thức
                      </h4>
                      <p className="text-gray-700">
                        Khó chịu với các quy tắc cứng nhắc. Dễ kiệt sức khi phải
                        giao tiếp quá nhiều. Cần được công nhận và khen ngợi để
                        có động lực. Khó tập trung vào công việc nhàm chán.
                      </p>
                    </div>
                  </div>

                  <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
                    <p className="italic text-gray-700">
                      "ISFP là nhân viên sáng tạo nhưng cần không gian tự do. Họ
                      làm việc tốt nhất khi được tin tưởng và đánh giá cao những
                      đóng góp độc đáo của mình."
                    </p>
                  </div>
                </div>

                {/* As Colleagues Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-pink-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-pink-600">
                      ISFP khi là đồng nghiệp
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Giá trị mang lại
                      </h4>
                      <p className="text-gray-700">
                        Luôn thấu hiểu và hỗ trợ đồng nghiệp. Mang lại không khí
                        hài hòa cho nhóm. Có góc nhìn nghệ thuật và sáng tạo độc
                        đáo. Giỏi hòa giải xung đột.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Điều cần lưu ý
                      </h4>
                      <p className="text-gray-700">
                        Cần thời gian nghỉ ngơi sau khi giao tiếp nhiều. Đôi khi
                        khó đoán do cảm xúc thay đổi. Không thích những cuộc
                        tranh luận căng thẳng. Cần được công nhận đóng góp.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 mt-1 mr-3 text-pink-500 text-xl">
                      🎨
                    </div>
                    <div>
                      <p className="text-gray-700">
                        "Đồng nghiệp ISFP giống như 'nghệ sĩ' của nhóm - luôn
                        mang lại góc nhìn tươi mới và không khí hài hòa cho môi
                        trường làm việc."
                      </p>
                    </div>
                  </div>
                </div>

                {/* As Managers Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-pink-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-pink-600">
                      ISFP khi làm quản lý
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Phong cách lãnh đạo
                      </h4>
                      <p className="text-gray-700">
                        Quản lý bằng sự thấu hiểu và động viên. Tạo không gian
                        tự do sáng tạo cho nhân viên. Đề cao sự hài hòa trong
                        nhóm. Ít khi chỉ trích trực tiếp.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Ưu tiên
                      </h4>
                      <p className="text-gray-700">
                        Đánh giá cao sự trung thực và chân thành. Chú trọng môi
                        trường làm việc thoải mái. Khuyến khích nhân viên phát
                        triển cá nhân.
                      </p>
                    </div>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3 text-pink-500">💡</div>
                      <div>
                        <p className="text-gray-700 font-medium">
                          Lời khuyên cho lãnh đạo ISFP: Đừng ngại đưa ra phản
                          hồi thẳng thắn khi cần. Sự rõ ràng trong mong đợi sẽ
                          giúp nhân viên hiểu và phát triển tốt hơn.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career Path Section */}
                <div className="mt-10 bg-gradient-to-r from-pink-500 to-purple-500 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-3">
                    Con đường sự nghiệp lý tưởng
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Nghệ thuật & Sáng tạo
                      </h4>
                      <p className="text-sm">
                        Nghệ sĩ, Nhà thiết kế, Nhiếp ảnh gia, Nhạc sĩ, Biên tập
                        viên
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">Chăm sóc & Hỗ trợ</h4>
                      <p className="text-sm">
                        Y tá, Bác sĩ tâm lý, Giáo viên mầm non, Công tác xã hội
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Thiên nhiên & Môi trường
                      </h4>
                      <p className="text-sm">
                        Kiến trúc sư cảnh quan, Nhà bảo tồn, Hướng dẫn viên du
                        lịch sinh thái
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-pink-100 text-sm">
                    <p>
                      ISFP phát triển mạnh trong môi trường cho phép họ thể hiện
                      sự sáng tạo, làm việc với con người và có sự linh hoạt về
                      thời gian.
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
                    <span className="text-pink-600">NGHỆ SĨ (ISFP)</span> VỚI
                    <span className="text-amber-600">
                      {" "}
                      NHÀ KỸ THUẬT (ISTP)
                    </span>{" "}
                    VÀ
                    <span className="text-purple-500">
                      {" "}
                      NGƯỜI TRÌNH DIỄN (ESFP)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Phân tích sâu về 3 nhóm tính cách thuộc nhóm "Nghệ sĩ - Thực
                    tế" - những người sống bằng cảm xúc và giác quan
                  </p>
                </div>

                {/* Core Similarities */}
                <div className="bg-gray-50 p-6 rounded-lg mb-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
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
                    Điểm chung cốt lõi của bộ ba Nghệ sĩ - Thực tế (SP)
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-pink-100 text-pink-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          S
                        </div>
                        <h4 className="font-bold text-gray-800">
                          Giác quan nhạy bén
                        </h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Cả ba đều tập trung vào thực tế qua những gì có thể cảm
                        nhận được bằng giác quan
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-pink-100 text-pink-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
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
                        <div className="bg-pink-100 text-pink-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          🎨
                        </div>
                        <h4 className="font-bold text-gray-800">
                          Thiên hướng nghệ thuật
                        </h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Có gu thẩm mỹ tốt và khả năng sáng tạo trong nhiều lĩnh
                        vực
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pair Comparisons */}
                <div className="space-y-10">
                  {/* ISFP vs ISTP */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-pink-500 to-amber-500 w-2 h-10 mr-3 rounded-full"></div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        <span className="text-pink-600">ISFP</span> vs{" "}
                        <span className="text-amber-600">ISTP</span>:
                        <span className="text-sm font-normal ml-2">
                          Nghệ sĩ nhạy cảm vs Nhà kỹ thuật lý trí
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
                          <li>Đều là người hướng nội và sống thực tế</li>
                          <li>Có khả năng thích nghi cao với môi trường mới</li>
                          <li>Thích làm việc độc lập và có không gian riêng</li>
                          <li>Đề cao sự tự do cá nhân</li>
                          <li>Giỏi xử lý các tình huống thực tế</li>
                        </ul>
                      </div>

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
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          Khác biệt then chốt
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Cách ra quyết định
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ISFP (F) dựa trên cảm xúc và giá trị cá nhân, ISTP
                              (T) dựa trên logic và phân tích khách quan
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Biểu hiện cảm xúc
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ISFP nhạy cảm và dễ bộc lộ cảm xúc hơn, ISTP kín
                              đáo và ít thể hiện tình cảm
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Sở thích nghề nghiệp
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ISFP thiên về nghệ thuật và chăm sóc, ISTP thiên
                              về kỹ thuật và thể thao
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                      <p className="italic text-gray-700">
                        "ISFP như một nghệ sĩ dùng cảm xúc để tạo ra tác phẩm,
                        ISTP như một kỹ sư dùng logic để giải quyết vấn đề. Cả
                        hai đều giỏi trong lĩnh vực của mình nhưng với cách tiếp
                        cận khác biệt."
                      </p>
                    </div>
                  </div>

                  {/* ISFP vs ESFP */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-2 h-10 mr-3 rounded-full"></div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        <span className="text-pink-600">ISFP</span> vs{" "}
                        <span className="text-purple-500">ESFP</span>:
                        <span className="text-sm font-normal ml-2">
                          Nghệ sĩ trầm lắng vs Người trình diễn năng động
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
                            Đều sống trong hiện tại và thích trải nghiệm mới
                          </li>
                          <li>Có gu thẩm mỹ và khả năng sáng tạo tốt</li>
                          <li>Quan tâm đến nhu cầu của người khác</li>
                          <li>Học hỏi tốt nhất qua thực hành</li>
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
                              ISFP (I) cần thời gian một mình, ESFP (E) được
                              tiếp năng lượng từ giao tiếp xã hội
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Phong cách giao tiếp
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ISFP trầm lắng và kín đáo, ESFP hướng ngoại và
                              thích làm trung tâm
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Cách thể hiện bản thân
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ISFP thể hiện qua tác phẩm nghệ thuật, ESFP thể
                              hiện qua phong cách và hành động
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                      <p className="italic text-gray-700">
                        "ISFP như một nghệ sĩ âm thầm sáng tác trong xưởng vẽ,
                        ESFP như một ngôi sao tỏa sáng trên sân khấu. Cả hai đều
                        tài năng nhưng với cách thể hiện hoàn toàn khác biệt."
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
                      <thead className="bg-pink-600 text-white">
                        <tr>
                          <th className="py-3 px-4 text-left font-semibold">
                            Đặc điểm
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            ISFP
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            ISTP
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
                            Cảm xúc nội tâm (Fi) + Cảm nhận ngoại hướng (Se)
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Tư duy nội tâm (Ti) + Cảm nhận ngoại hướng (Se)
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Cảm nhận ngoại hướng (Se) + Cảm xúc nội tâm (Fi)
                          </td>
                        </tr>
                        {/* Row 2 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Phong cách làm việc
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-pink-50">
                            Sáng tạo, nhạy cảm, chú trọng giá trị cá nhân
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-amber-50">
                            Thực tế, logic, tập trung giải quyết vấn đề
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-purple-50">
                            Năng động, nhiệt tình, thích tương tác xã hội
                          </td>
                        </tr>
                        {/* Row 3 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                            Trong quan hệ
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Trầm lắng, chân thành, sâu sắc
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Kín đáo, độc lập, ít bày tỏ cảm xúc
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Hòa đồng, vui vẻ, thích giao tiếp
                          </td>
                        </tr>
                        {/* Row 4 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Ưu thế nghề nghiệp
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-pink-50">
                            Nghệ sĩ, nhà thiết kế, tư vấn tâm lý
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-amber-50">
                            Kỹ thuật viên, thợ cơ khí, vận động viên
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-purple-50">
                            Diễn viên, MC, nhân viên bán hàng
                          </td>
                        </tr>
                        {/* Row 5 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                            Điểm mạnh
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Nhạy cảm, sáng tạo, đồng cảm
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Bình tĩnh, khéo léo, xử lý khủng hoảng tốt
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Nhiệt tình, thuyết phục, năng lượng tích cực
                          </td>
                        </tr>
                        {/* Row 6 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Điểm yếu
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-pink-50">
                            Dễ tổn thương, khó từ chối
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-amber-50">
                            Khó bày tỏ cảm xúc, dễ chán nản
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-purple-50">
                            Thiếu kiên nhẫn, dễ phân tâm
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
                    {/* ISFP Column */}
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
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-pink-700">ISFP</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Nghệ sĩ
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Nhà
                          thiết kế
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Nhiếp
                          ảnh gia
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Tư vấn
                          tâm lý
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Giáo
                          viên mỹ thuật
                        </li>
                      </ul>
                    </div>

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
                          <span className="text-amber-500 mr-2">•</span> Vận
                          động viên
                        </li>
                      </ul>
                    </div>

                    {/* ESFP Column */}
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
                              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-purple-700">ESFP</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Diễn
                          viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> MC/Dẫn
                          chương trình
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Nhân
                          viên bán hàng
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Huấn
                          luyện viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Tổ
                          chức sự kiện
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Final Thoughts */}
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-pink-800 mb-3">
                    Nhận định cuối
                  </h3>
                  <p className="text-gray-700 mb-3">
                    ISFP, ISTP và ESFP đều là những nhóm tính cách thực tế và
                    sáng tạo, nhưng mỗi nhóm có thế mạnh riêng:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                    <li>
                      <span className="font-medium">ISFP</span> - Nghệ sĩ nhạy
                      cảm với trái tim ấm áp và tâm hồn sáng tạo
                    </li>
                    <li>
                      <span className="font-medium">ISTP</span> - Nhà kỹ thuật
                      tài ba với tư duy logic và khả năng xử lý vấn đề
                    </li>
                    <li>
                      <span className="font-medium">ESFP</span> - Người trình
                      diễn năng động với năng lượng tích cực
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Sự khác biệt chính nằm ở cách họ tiếp cận thế giới: ISFP với
                    sự nhạy cảm và sáng tạo, ISTP với logic và thực tế, ESFP với
                    năng lượng và sự nhiệt tình. Hiểu rõ những khác biệt này
                    giúp mỗi nhóm phát huy tối đa tiềm năng của mình.
                  </p>
                </div>
              </div>
            )}
            {activeSection === "advice" && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Main Header */}
                <h2 className="text-3xl font-bold text-rose-600 mb-8 border-b-2 border-rose-100 pb-4">
                  LỜI KHUYÊN PHÁT TRIỂN DÀNH CHO NGHỆ SĨ (ISFP)
                </h2>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-rose-700 to-pink-800 p-8 rounded-lg mb-10 text-white">
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
                      Hành trình phát triển cho tâm hồn nghệ sĩ
                    </h3>
                    <p className="text-rose-200">
                      Là những người nhạy cảm và sáng tạo, ISFP cần học cách cân
                      bằng giữa thế giới nội tâm và kết nối bên ngoài để tỏa
                      sáng trọn vẹn.
                    </p>
                  </div>
                </div>

                {/* Core Advice Sections */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Develop Strengths */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-rose-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-6 h-6 text-rose-600"
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
                      Tận dụng tối đa khả năng sáng tạo và cảm nhận tinh tế của
                      bạn:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Nuôi dưỡng tài năng nghệ thuật và thẩm mỹ</li>
                      <li>Ứng dụng trực giác vào các dự án sáng tạo</li>
                      <li>Tận hưởng sự tự do trong biểu đạt cá nhân</li>
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
                      Những điều ISFP cần lưu ý để phát triển:
                    </p>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="italic text-gray-700">
                        "Sự nhạy cảm là sức mạnh, nhưng kiên cường là chìa khóa
                        để tỏa sáng"
                      </p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Học cách bảo vệ ranh giới cá nhân</li>
                      <li>Xây dựng kế hoạch dài hạn cơ bản</li>
                      <li>Đối mặt với phê bình một cách xây dựng</li>
                    </ul>
                  </div>
                </div>

                {/* Emotional & Social Skills Section */}
                <div className="mb-10 bg-gradient-to-r from-rose-50 to-pink-50 p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg">
                        <svg
                          className="w-10 h-10 text-rose-600"
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
                      <h3 className="text-2xl font-semibold text-rose-800 mb-4">
                        Phát triển kỹ năng xã hội
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-rose-100 shadow-sm">
                          <h4 className="font-semibold text-rose-700 mb-2">
                            Tự tin thể hiện
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Chia sẻ tác phẩm/tài năng của bạn</li>
                            <li>Thể hiện quan điểm cá nhân</li>
                            <li>Đón nhận lời khen một cách cởi mở</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-rose-100 shadow-sm">
                          <h4 className="font-semibold text-rose-700 mb-2">
                            Xây dựng mối quan hệ
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Kết nối với người cùng đam mê nghệ thuật</li>
                            <li>Tham gia cộng đồng sáng tạo</li>
                            <li>Chia sẻ cảm nhận với người tin cậy</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Self-Care Section */}
                <div className="mb-10">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 bg-rose-50 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-sm">
                          <svg
                            className="w-6 h-6 text-rose-600"
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
                        <h3 className="text-xl font-semibold text-rose-700">
                          Chăm sóc bản thân
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        ISFP cần chú ý nuôi dưỡng tâm hồn nhạy cảm:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Cân bằng cảm xúc
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Dành thời gian cho nghệ thuật trị liệu</li>
                            <li>Thực hành thiền hoặc yoga</li>
                            <li>Viết nhật ký cảm xúc</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Quản lý năng lượng
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Đặt giới hạn trong các mối quan hệ</li>
                            <li>Có không gian riêng để tái tạo năng lượng</li>
                            <li>Học cách nói "không" khi cần</li>
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
                            <div className="flex-shrink-0 bg-rose-100 text-rose-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              1
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Thể hiện bản thân
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Mỗi tuần chia sẻ một tác phẩm/tài năng với người
                                khác
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-rose-100 text-rose-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              2
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Kế hoạch nhỏ
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Lập kế hoạch 3 tháng cho một dự án sáng tạo
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-rose-100 text-rose-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              3
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Đối mặt chỉ trích
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Mỗi tháng xin feedback từ 1 người đáng tin cậy
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Encouragement */}
                <div className="bg-gradient-to-r from-rose-800 to-pink-700 p-8 rounded-lg text-white">
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
                      Sức mạnh của Nghệ sĩ
                    </h3>
                    <p className="mb-4 text-rose-100">
                      Bạn được ban tặng khả năng cảm nhận tinh tế, trí tưởng
                      tượng phong phú và trái tim ấm áp. Khi học cách kết hợp
                      những điểm mạnh này với sự tự tin và kiên cường, bạn sẽ
                      tỏa sáng theo cách riêng độc đáo của mình.
                    </p>
                    <div className="bg-pink-800 bg-opacity-30 p-4 rounded-lg inline-block">
                      <p className="font-medium">
                        "Thế giới cần vẻ đẹp bạn mang lại - những khoảnh khắc
                        chân thực, những tác phẩm đầy cảm xúc. Hãy nhớ rằng sự
                        vĩ đại thực sự đến từ việc cân bằng giữa nhạy cảm và
                        mạnh mẽ, giữa nội tâm và biểu đạt."
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
export default ISFPPage;
