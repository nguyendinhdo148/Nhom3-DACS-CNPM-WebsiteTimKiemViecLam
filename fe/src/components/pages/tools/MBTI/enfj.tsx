import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faPen,faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const handleCopyLink = () => {
  const url = "http://localhost:5173/tools/mbti/tinh-cach/enfj";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Đã sao chép liên kết!");
    })
    .catch((err) => {
      console.error("Lỗi khi sao chép liên kết:", err);
    });
};
const ENFJPage = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Tổng quan" },
    { id: "strengths-weaknesses", title: "Điểm mạnh và điểm yếu" },
    { id: "relationship", title: "Mối quan hệ" },
    { id: "how-to-be-close", title: "Làm sao để thân thiết với ENFJ" },
    { id: "career-path", title: "Con đường sự nghiệp" },
    { id: "workplace-habits", title: "Thói quen nơi công sở" },
    { id: "compare", title: "So sánh ENFJ với INTJ, ENTP" },
    { id: "advice", title: "Lời khuyên dành cho ENFJ" },
  ];

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="ENFJ-page bg-gradient-to-b from-blue-50 to-purple-50">
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
                ENFJ - Người cho đi
              </h1>
            </div>
            <div className="relative w-full">
              <img
                src="/mbti_icons/enfj1.webp"
                alt="ENFJ - Người cho đi"
                className="pointer w-full h-120 object-cover rounded-lg shadow "
              />
            </div>

            {/* Description */}
            <div className="text-lg text-gray-700 max-w-4xl text-center">
              Nhóm tính cách ENFJ là những người có khả năng tác động mạnh tới người khác thông qua cả hành động lẫn lời nói. Họ là những người tham vọng nhưng không hề tư lợi mà luôn hướng đến mục tiêu và lợi ích chung của cộng đồng. Đặc biệt, khả năng thấu hiểu và đồng cảm mạnh mẽ khiến các ENFJ trở thành nhân tố quan trọng trong những lĩnh vực liên quan tới con người.
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
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-700 bg-clip-text text-transparent">
        TỔNG QUAN TÍNH CÁCH ENFJ
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 mx-auto"></div>
    </div>

    {/* Introduction */}
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
      <p className="text-lg text-gray-700 leading-relaxed">
        ENFJ (Người cho đi) là những người có khả năng tác động mạnh tới người khác 
        thông qua cả hành động lẫn lời nói. Họ tham vọng nhưng không tư lợi, luôn 
        hướng đến mục tiêu chung của cộng đồng. Khả năng thấu hiểu và đồng cảm mạnh mẽ 
        khiến ENFJ trở thành nhân tố quan trọng trong những lĩnh vực liên quan tới con người.
      </p>
    </div>

    {/* MBTI Breakdown */}
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-6 rounded-lg">
      <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Ý NGHĨA 4 CHỮ CÁI ENFJ
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "● E - Hướng ngoại (Extraverted)",
            color: "bg-blue-100",
            textColor: "text-blue-800",
            content: "ENFJ lấy năng lượng từ tương tác xã hội và thế giới bên ngoài. Họ yêu thích kết nối và truyền cảm hứng cho người khác."
          },
          {
            title: "● N - Trực giác (Intuitive)",
            color: "bg-purple-100",
            textColor: "text-purple-800",
            content: "Tập trung vào ý nghĩa và khả năng tiềm ẩn hơn là chi tiết cụ thể. ENFJ có tầm nhìn xa và sáng tạo."
          },
          {
            title: "● F - Cảm xúc (Feeling)",
            color: "bg-pink-100",
            textColor: "text-pink-800",
            content: "Ra quyết định dựa trên giá trị cá nhân và sự đồng cảm. ENFJ luôn cân nhắc tác động tới cảm xúc người khác."
          },
          {
            title: "● J - Nguyên tắc (Judging)",
            color: "bg-gradient-to-r from-blue-100 to-purple-100",
            textColor: "text-blue-800",
            content: "Thích sự có tổ chức và kế hoạch rõ ràng. ENFJ giỏi sắp xếp và dẫn dắt người khác hướng tới mục tiêu."
          }
        ].map((item, index) => (
          <div key={index} className={`${item.color} p-5 rounded-lg transition-transform hover:scale-105`}>
            <h4 className={`font-bold ${item.textColor} mb-3 text-lg`}>{item.title}</h4>
            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Core Traits */}
    <div className="space-y-8">
      {[
        {
          title: "Bậc thầy thấu hiểu",
          icon: "🔍",
          content: "ENFJ có khả năng đặc biệt trong việc 'đọc vị' suy nghĩ và cảm xúc người khác, như 'đi guốc trong bụng'."
        },
        {
          title: "Người truyền cảm hứng",
          icon: "✨",
          content: "Với khả năng diễn đạt xuất sắc, ENFJ dễ dàng thuyết phục và động viên người khác phát huy tiềm năng."
        },
        {
          title: "Cho đi vô điều kiện",
          icon: "💝",
          content: "ENFJ thường đặt nhu cầu người khác lên trước bản thân, coi việc giúp đỡ là niềm hạnh phúc."
        },
        {
          title: "Linh hoạt trong giao tiếp",
          icon: "🔄",
          content: "Dù là người hướng ngoại nhưng ENFJ biết cách điều chỉnh phong cách giao tiếp phù hợp với từng đối tượng."
        }
      ].map((section, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-400">
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-3">{section.icon}</span>
            <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
          </div>
          <p className="text-gray-700 pl-10">{section.content}</p>
        </div>
      ))}
    </div>

    {/* Strengths & Weaknesses */}
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-blue-700 mb-4">SIÊU NĂNG LỰC</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            <span>Khả năng lãnh đạo và truyền cảm hứng xuất sắc</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            <span>Trí tuệ cảm xúc và sự đồng cảm mạnh mẽ</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            <span>Kỹ năng giao tiếp và thuyết phục đỉnh cao</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            <span>Tinh thần trách nhiệm và đáng tin cậy</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            <span>Khả năng hòa giải xung đột khéo léo</span>
          </li>
        </ul>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-purple-700 mb-4">THỬ THÁCH</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-purple-600 mr-2">✗</span>
            <span>Dễ bị kiệt sức vì cho đi quá nhiều</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 mr-2">✗</span>
            <span>Nhạy cảm quá mức với chỉ trích</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 mr-2">✗</span>
            <span>Đôi khi áp đặt mong muốn của mình lên người khác</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 mr-2">✗</span>
            <span>Khó đưa ra quyết định khách quan khi cảm xúc lấn át</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 mr-2">✗</span>
            <span>Có xu hướng lý tưởng hóa mối quan hệ</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Career & Relationships */}
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-blue-700 mb-4">ENFJ TRONG SỰ NGHIỆP</h3>
        <p className="text-gray-700 mb-4">
          ENFJ tỏa sáng trong các lĩnh vực liên quan đến con người và phát triển cộng đồng:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Công việc tư vấn, huấn luyện</li>
          <li>Lĩnh vực giáo dục và đào tạo</li>
          <li>Nghệ thuật và truyền thông</li>
          <li>Công tác xã hội và nhân đạo</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Nghề nghiệp lý tưởng: Nhà tâm lý học, giáo viên, nhân viên xã hội, 
          chuyên viên nhân sự, nhà văn, diễn giả truyền cảm hứng.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-pink-700 mb-4">ENFJ TRONG TÌNH YÊU</h3>
        <p className="text-gray-700 mb-4">
          Trong các mối quan hệ, ENFJ là người:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Chân thành và tận tâm</li>
          <li>Biết lắng nghe và thấu hiểu</li>
          <li>Luôn nỗ lực vun đắp mối quan hệ</li>
          <li>Thể hiện tình cảm một cách hào phóng</li>
        </ul>
        <p className="mt-4 text-gray-700">
          ENFJ cần học cách cân bằng giữa việc chăm sóc người khác và chăm sóc bản thân, 
          tránh để cảm xúc chi phối quá nhiều.
        </p>
      </div>
    </div>

    {/* Famous People */}
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-6 rounded-lg mt-8">
      <h3 className="text-2xl font-bold text-center text-purple-700 mb-6">ENFJ NỔI TIẾNG</h3>
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { name: "Martin Luther King", role: "Nhà hoạt động nhân quyền" },
          { name: "Nelson Mandela", role: "Cựu Tổng thống Nam Phi" },
          { name: "Michael Jordan", role: "Vận động viên bóng rổ" },
          { name: "Jennifer Lawrence", role: "Diễn viên" },
          { name: "Emma Stone", role: "Diễn viên" },
          { name: "Dino (Seventeen)", role: "Ca sĩ" },
          { name: "Jung Yunho", role: "Ca sĩ (TVXQ)" },
          { name: "Kim Jaejoong", role: "Ca sĩ (JYJ)" }
        ].map((person, index) => (
          <div key={index} className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-full mx-auto mb-2 flex items-center justify-center text-purple-700 font-bold">
              {person.name.split(" ").map(n => n[0]).join("")}
            </div>
            <h4 className="font-bold text-gray-800 text-sm">{person.name}</h4>
            <p className="text-xs text-gray-600">{person.role}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Final Thought */}
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-lg mt-8 text-center">
      <p className="text-blue-800 italic font-medium">
        "ENFJ là những người truyền lửa với trái tim ấm áp và tầm nhìn sâu rộng. 
        Bằng sự đồng cảm và khả năng lãnh đạo thiên bẩm, họ có sức mạnh kết nối 
        mọi người và tạo ra những thay đổi tích cực cho xã hội. Dù đôi khi quá 
        tập trung vào người khác mà quên đi bản thân, không ai có thể phủ nhận 
        sức ảnh hưởng to lớn của ENFJ trong việc lan tỏa yêu thương và truyền 
        cảm hứng sống."
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
        <span className="text-blue-700">
          NHÓM TÍNH CÁCH ENFJ (NGƯỜI CHO ĐI)
        </span>
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        ENFJ - Nhóm tính cách nhiệt tình, có khả năng truyền cảm hứng và luôn hướng đến sự phát triển của người khác
      </p>
    </div>

    {/* Strengths Section */}
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-blue-700 flex items-center">
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
        <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 ml-4"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Strength 1 */}
        <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start mb-3">
            <div className="bg-blue-100 p-2 rounded-lg mr-4">
              <svg
                className="w-6 h-6 text-blue-700"
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
                Biết tiếp thu
              </h4>
              <p className="text-gray-700">
                ENFJ tuy bảo vệ quan điểm của mình nhưng vẫn cởi mở với ý kiến khác biệt. Họ hiểu giá trị của việc lắng nghe và tôn trọng góc nhìn đa chiều.
              </p>
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg mt-3">
            <p className="text-sm text-blue-700 italic">
              "ENFJ luôn tìm kiếm sự phát triển thông qua việc học hỏi từ mọi người xung quanh"
            </p>
          </div>
        </div>

        {/* Strength 2 */}
        <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start mb-3">
            <div className="bg-blue-100 p-2 rounded-lg mr-4">
              <svg
                className="w-6 h-6 text-blue-700"
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
                Truyền cảm hứng
              </h4>
              <p className="text-gray-700">
                ENFJ có khả năng đặc biệt trong việc thúc đẩy người khác. Họ tạo ra năng lượng tích cực và giúp mọi người cùng hướng tới mục tiêu chung.
              </p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              Động viên
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              Nhiệt huyết
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              Lãnh đạo
            </span>
          </div>
        </div>

        {/* Strength 3 */}
        <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
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
              <h4 className="font-bold text-gray-800 mb-1">
                Giao tiếp xuất sắc
              </h4>
              <p className="text-gray-700">
                ENFJ có khả năng diễn đạt ý tưởng rõ ràng và thuyết phục. Họ dễ dàng kết nối với mọi người và trở thành tâm điểm trong các tương tác xã hội.
              </p>
            </div>
          </div>
          <div className="mt-3">
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-purple-500 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>Kỹ năng giao tiếp</span>
              <span>90% người đánh giá cao khả năng của ENFJ</span>
            </div>
          </div>
        </div>

        {/* Strength 4 */}
        <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
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
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">
                Vị tha và quan tâm
              </h4>
              <p className="text-gray-700">
                ENFJ luôn mong muốn tạo ra thay đổi tích cực cho cộng đồng. Họ tin vào sức mạnh tập thể và không ngừng hỗ trợ người khác phát triển.
              </p>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">Biểu hiện:</span>
              Luôn đặt lợi ích tập thể lên hàng đầu, sẵn sàng giúp đỡ và truyền cảm hứng
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Weaknesses Section */}
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-pink-700 flex items-center">
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
        <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent flex-1 ml-4"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Weakness 1 */}
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">
                Thiếu thực tế
              </h4>
              <p className="text-gray-700">
                ENFJ đôi khi ôm đồm quá nhiều trách nhiệm không thuộc về mình. Họ khao khát giải quyết mọi vấn đề nhưng không nhận ra giới hạn của bản thân.
              </p>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">Gợi ý:</span>
              Học cách đặt ranh giới lành mạnh và tập trung vào những gì thực sự có thể thay đổi
            </div>
          </div>
        </div>

        {/* Weakness 2 */}
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">
                Nguyên tắc cứng nhắc
              </h4>
              <p className="text-gray-700">
                ENFJ có xu hướng áp đặt tiêu chuẩn đạo đức của mình lên người khác. Họ khó chấp nhận những quan điểm sống khác biệt với niềm tin cốt lõi của họ.
              </p>
            </div>
          </div>
          <div className="mt-3 bg-pink-50 p-3 rounded-lg">
            <p className="text-sm text-pink-700 italic">
              "ENFJ cần học cách chấp nhận sự đa dạng trong suy nghĩ và lối sống của mọi người"
            </p>
          </div>
        </div>

        {/* Weakness 3 */}
        <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
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
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">
                Nóng vội
              </h4>
              <p className="text-gray-700">
                ENFJ thường hành động theo cảm hứng mà không lập kế hoạch kỹ lưỡng. Họ cũng dễ thúc ép người khác theo nhịp độ của mình, gây căng thẳng trong nhóm.
              </p>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">Cải thiện:</span>
              Rèn luyện tính kiên nhẫn và học cách lắng nghe nhịp độ của người khác
            </div>
          </div>
        </div>

        {/* Weakness 4 */}
        <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">
                Cả nể
              </h4>
              <p className="text-gray-700">
                Lòng tốt quá mức khiến ENFJ dễ bị lợi dụng. Họ thường hy sinh bản thân vì người khác đến mức kiệt sức mà không dám từ chối yêu cầu.
              </p>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">Giải pháp:</span>
              Học cách nói "không" và ưu tiên chăm sóc bản thân trước khi giúp đỡ người khác
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Balance Section */}
    <div className="mt-12 bg-gradient-to-r from-blue-700 to-purple-600 p-8 rounded-xl text-white">
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
          CÂN BẰNG CUỘC SỐNG ENFJ
        </h3>
        <p className="mb-4 text-blue-100">
          Sức mạnh thực sự của ENFJ nằm ở khả năng kết hợp lòng trắc ẩn với sự khôn ngoan. Khi học được cách cân bằng giữa cho đi và nhận lại, giữa lý tưởng và thực tế, họ có thể trở thành những người dẫn dắt tài ba.
        </p>
        <div className="bg-opacity-20  p-4 rounded-lg inline-block">
          <p className="font-medium">
            "Một ENFJ trưởng thành hiểu rằng không thể giúp đỡ người khác nếu bản thân kiệt quệ. Học cách yêu thương chính mình chính là nền tảng để lan tỏa yêu thương đến thế giới."
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
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-700 bg-clip-text text-transparent mb-3">
        MỐI QUAN HỆ CỦA ENFJ
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 mx-auto rounded-full"></div>
      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        ENFJ được mệnh danh là "Người cho đi" với trái tim ấm áp và khả năng thấu hiểu tuyệt vời. 
        Họ xây dựng những mối quan hệ sâu sắc dựa trên sự chân thành, đồng cảm và mong muốn 
        cùng nhau phát triển.
      </p>
    </div>

    {/* General Relationship Traits */}
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800">Đặc điểm nổi bật</h3>
        </div>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Ấm áp, chân thành và giàu lòng trắc ẩn</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Khả năng lắng nghe và thấu hiểu xuất sắc</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Luôn mong muốn giúp đỡ người khác phát triển</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Giao tiếp khéo léo và truyền cảm hứng</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800">Phù hợp nhất với</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { type: "INFP", desc: "Sâu sắc" },
            { type: "ISFP", desc: "Chân thành" },
            { type: "ENFP", desc: "Nhiệt huyết" },
            { type: "INFJ", desc: "Tâm hồn đồng điệu" },
          ].map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-3 rounded-lg">
              <span className="font-bold text-blue-600">{item.type}</span>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Love Section */}
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-8 rounded-2xl mb-12">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
          <div className="bg-white p-4 rounded-full shadow-lg">
            <svg className="w-16 h-16 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h3 className="text-2xl font-bold text-pink-700 mb-4">ENFJ TRONG TÌNH YÊU</h3>
          <p className="text-gray-700 mb-4">
            ENFJ yêu bằng cả trái tim và lý tưởng. Họ tìm kiếm mối quan hệ sâu sắc, nơi cả hai cùng 
            phát triển và thực hiện những ước mơ. Tình yêu với ENFJ là hành trình đồng hành đầy 
            nhiệt huyết và cam kết.
          </p>
          <div className="bg-white bg-opacity-70 p-4 rounded-lg border-l-4 border-pink-400 mb-4">
            <p className="italic text-gray-700">
              "ENFJ không chấp nhận bất cứ điều gì không phù hợp với lý tưởng của họ. 
              Họ muốn yêu bằng vẻ đẹp tâm hồn hơn là vẻ đẹp ngoại hình."
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {[
          {
            title: "Chủ động trong tình yêu",
            icon: "💘",
            content: "Khi đã yêu, ENFJ dành trọn trái tim mình. Họ chủ động thể hiện tình cảm và không ngại theo đuổi người mình thích. ENFJ coi tình yêu là món quà quý giá cần được nâng niu."
          },
          {
            title: "Cùng nhau phát triển",
            icon: "🌱",
            content: "ENFJ quan tâm sâu sắc đến ước mơ của người yêu. Họ sẵn sàng coi mục tiêu của đối phương như của chính mình, cùng nhau xây dựng tương lai tốt đẹp hơn."
          },
          {
            title: "Thách thức",
            icon: "⚠️",
            content: "Đôi khi ENFJ quá nhiệt tình giúp đỡ khiến đối phương cảm thấy bị áp lực. Họ cần học cách tôn trọng không gian riêng và nhịp độ phát triển của người yêu."
          }
        ].map((item, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-sm flex items-start">
            <span className="text-2xl mr-4">{item.icon}</span>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-700">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Friendship Section */}
    <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
      <h3 className="text-2xl font-bold text-purple-700 mb-6 flex items-center">
        <svg className="w-8 h-8 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        ENFJ TRONG TÌNH BẠN
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-start mb-6">
            <div className="bg-blue-100 p-2 rounded-lg mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Người bạn chân thành</h4>
              <p className="text-gray-700">
                ENFJ đầu tư thời gian và tâm huyết cho tình bạn. Họ lắng nghe không phán xét, 
                luôn sẵn sàng giúp đỡ bạn bè vượt qua khó khăn và phát huy tiềm năng.
              </p>
            </div>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-400 mb-6">
            <p className="italic text-gray-700">
              "ENFJ kết bạn với mọi kiểu người, nhưng chỉ mở lòng hoàn toàn với những người 
              thực sự thân thiết. Họ trân trọng những mối quan hệ sâu sắc và bền chặt."
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-start mb-6">
            <div className="bg-pink-100 p-2 rounded-lg mr-4">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Thách thức</h4>
              <p className="text-gray-700">
                ENFJ dễ bị tổn thương khi lòng tốt không được đền đáp. Họ cần học cách 
                đặt giới hạn lành mạnh và không kỳ vọng quá nhiều ở người khác.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-gradient-to-r from-blue-100 to-pink-100 p-2 rounded-lg mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Người truyền cảm hứng</h4>
              <p className="text-gray-700">
                Bạn bè của ENFJ thường được truyền cảm hứng để trở thành phiên bản tốt nhất 
                của chính mình. ENFJ có khả năng đặc biệt trong việc nhìn thấy tiềm năng 
                ẩn sâu trong mỗi người.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Parenting Section */}
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
        <svg className="w-8 h-8 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        ENFJ KHI LÀM CHA MẸ
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {[
            {
              title: "Phong cách nuôi dạy",
              content: "ENFJ là những phụ huynh tận tâm, luôn tạo môi trường yêu thương để con cái phát triển. Họ khuyến khích sự độc lập nhưng vẫn đặt ra những giới hạn rõ ràng và phù hợp."
            },
            {
              title: "Ưu điểm",
              content: "ENFJ giúp con nhận ra tiềm năng của bản thân. Họ dạy con biết đồng cảm, quan tâm người khác và theo đuổi lý tưởng sống cao đẹp."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>

        <div>
          <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
            <h4 className="font-bold text-gray-800 mb-2">Thách thức</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>Đôi khi kỳ vọng quá cao vào con cái</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>Có xu hướng can thiệp quá mức vào cuộc sống của con</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>Khó chấp nhận khi con có lựa chọn khác biệt</span>
              </li>
            </ul>
          </div>

          <div className="bg-pink-100 p-5 rounded-lg border-l-4 border-pink-500">
            <p className="italic text-gray-700">
              "Các bậc cha mẹ ENFJ sẵn sàng làm bất cứ điều gì để con cái phát triển toàn diện. 
              Họ xây dựng nền tảng vững chắc cả về vật chất lẫn tinh thần, giúp con tự tin bước vào đời."
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Final Quote */}
    <div className="text-center mt-12">
      <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-xl inline-block max-w-2xl">
        <svg className="w-10 h-10 text-purple-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <p className="text-xl font-medium text-purple-800 mb-2">
          "ENFJ mang đến những mối quan hệ ấm áp và giàu ý nghĩa. Họ yêu thương bằng cả trái tim 
          và không ngừng truyền cảm hứng cho người thân phát triển. Để hiểu ENFJ, hãy trân trọng 
          sự chân thành, lòng vị tha và khát khao cống hiến không mệt mỏi của họ."
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
        <span className="text-blue-700">NGƯỜI CHO ĐI (ENFJ)</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        ENFJ - Nhóm tính cách ấm áp, truyền cảm hứng với khả năng kết nối con người tuyệt vời
      </p>
    </div>

    {/* Core Principles */}
    <div className="bg-blue-50 p-6 rounded-lg mb-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <div className="bg-white p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto shadow-sm">
            <svg
              className="w-10 h-10 text-blue-700"
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
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            Nguyên tắc vàng khi tiếp cận ENFJ
          </h3>
          <p className="text-gray-700">
            ENFJ là những người ấm áp, chân thành và coi trọng các mối quan hệ sâu sắc. Họ đánh giá cao sự tử tế, cởi mở và khả năng kết nối cảm xúc. Để xây dựng mối quan hệ với ENFJ, điều quan trọng nhất là:
            <span className="font-medium block mt-2">
              "Hãy thể hiện sự chân thành, tham gia các hoạt động xã hội cùng họ và luôn quan tâm đến cảm xúc của mọi người xung quanh"
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
                className="w-6 h-6 text-blue-700"
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
                Tham gia hoạt động nhóm
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Mời ENFJ tham gia các sự kiện xã hội</li>
                <li>Cùng tổ chức các buổi gặp mặt bạn bè</li>
                <li>Tham gia hoạt động tình nguyện, cộng đồng</li>
                <li>Tránh những cuộc gặp riêng tẻ nhạt một-một</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strategy 2 */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start mb-3">
            <div className="bg-blue-100 p-2 rounded-lg mr-4">
              <svg
                className="w-6 h-6 text-blue-700"
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
                Thể hiện sự chân thành
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Luôn trung thực trong mọi tình huống</li>
                <li>Tránh nói xấu sau lưng người khác</li>
                <li>Thể hiện cảm xúc thật của bạn</li>
                <li>Không sử dụng ngôn ngữ thô tục, tiêu cực</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strategy 3 */}
        <div className="bg-white p-5 rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
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
                Thoải mái và tự nhiên
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Đừng quá cứng nhắc trong giao tiếp</li>
                <li>Cho phép bản thân thể hiện cá tính</li>
                <li>Tạo không khí vui vẻ, thoải mái</li>
                <li>Tránh những cuộc trò chuyện căng thẳng</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strategy 4 */}
        <div className="bg-white p-5 rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
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
                Quan tâm cảm xúc
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Chú ý đến cảm xúc của ENFJ và mọi người</li>
                <li>Thể hiện sự đồng cảm khi cần thiết</li>
                <li>Đừng chỉ tập trung vào logic, lý trí</li>
                <li>Tránh phớt lờ hoặc coi nhẹ cảm xúc</li>
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
                  Tham gia các hoạt động nhóm cùng ENFJ
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-2 text-blue-500">
                  ✓
                </div>
                <span className="text-gray-700">
                  Thể hiện sự chân thành và tử tế
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-2 text-blue-500">
                  ✓
                </div>
                <span className="text-gray-700">
                  Giữ thái độ ôn hòa, điềm tĩnh
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-2 text-blue-500">
                  ✓
                </div>
                <span className="text-gray-700">
                  Quan tâm đến cảm xúc của mọi người
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Nên tránh
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-2 text-pink-500">
                  ✗
                </div>
                <span className="text-gray-700">
                  Hiểu nhầm sự thân thiện là tán tỉnh
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-2 text-pink-500">
                  ✗
                </div>
                <span className="text-gray-700">
                  Tranh luận căng thẳng, đối chất
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-2 text-pink-500">
                  ✗
                </div>
                <span className="text-gray-700">
                  Cư xử cứng nhắc, thiếu tự nhiên
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-2 text-pink-500">
                  ✗
                </div>
                <span className="text-gray-700">
                  Phớt lờ hoặc coi thường cảm xúc
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
        Xây dựng mối quan hệ với ENFJ cần sự chân thành và cởi mở. Một khi đã coi bạn là người đáng tin cậy, họ sẽ trở thành người bạn nhiệt tình, luôn lắng nghe và sẵn sàng hỗ trợ bạn. Hãy trân trọng sự ấm áp và năng lượng tích cực mà họ mang đến cho cuộc sống của bạn.
      </p>
      <div className="bg-white p-4 rounded-lg">
        <p className="italic text-gray-700">
          "Tình bạn với ENFJ như một nguồn năng lượng tích cực. Họ sẽ giúp bạn mở rộng mối quan hệ, truyền cảm hứng để bạn phát triển bản thân và luôn là chỗ dựa tinh thần đáng tin cậy trong mọi tình huống."
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Lưu ý: Đừng hiểu nhầm sự thân thiện của ENFJ là tình cảm đặc biệt. Họ thường quan tâm đến mọi người như nhau.
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
        <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-700 bg-clip-text text-transparent">
          NGƯỜI CHO ĐI (ENFJ)
        </span>
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        ENFJ - Những nhà lãnh đạo tâm huyết với khả năng truyền cảm hứng và thấu hiểu con người
      </p>
    </div>

    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 p-8 rounded-lg mb-10 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
        <h3 className="text-2xl font-bold mb-4">
          "ENFJ xây dựng sự nghiệp bằng sự đồng cảm, nhiệt huyết và mong muốn giúp người khác tỏa sáng"
        </h3>
        <p className="text-blue-100">
          Những người cho đi này luôn tìm kiếm công việc cho phép họ kết nối với mọi người và tạo ra tác động tích cực
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
              Giai đoạn khởi đầu: Kết nối và học hỏi
            </h4>
            <p className="text-gray-700 mb-3">
              Khi mới bước vào sự nghiệp, ENFJ tập trung vào việc xây dựng mạng lưới quan hệ và phát triển kỹ năng giao tiếp. 
              Họ xuất sắc trong các vị trí đòi hỏi sự tương tác và thấu hiểu con người.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="italic text-gray-700">
                "ENFJ cần môi trường làm việc năng động, nơi họ có thể giao tiếp và giúp đỡ người khác. 
                Họ học qua việc thấu hiểu nhu cầu của mọi người và tìm cách hỗ trợ"
              </p>
            </div>
          </div>
        </div>

        {/* Stage 2 */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <div className="bg-purple-100 text-purple-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              2
            </div>
          </div>
          <div className="md:w-3/4">
            <h4 className="font-bold text-gray-800 mb-2">
              Giai đoạn bứt phá: Dẫn dắt và truyền cảm hứng
            </h4>
            <p className="text-gray-700 mb-3">
              Sau khi tích lũy kinh nghiệm, ENFJ được đề bạt vào các vị trí lãnh đạo hoặc đào tạo. 
              Họ được đánh giá cao nhờ khả năng động viên, phát triển người khác và tạo ra môi trường làm việc tích cực.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                Lãnh đạo
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                Đào tạo
              </span>
              <span className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full">
                Truyền cảm hứng
              </span>
            </div>
          </div>
        </div>

        {/* Stage 3 */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <div className="bg-gradient-to-r from-blue-100 to-pink-100 text-blue-800 font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              3
            </div>
          </div>
          <div className="md:w-3/4">
            <h4 className="font-bold text-gray-800 mb-2">
              Giai đoạn chín muồi: Tạo ảnh hưởng xã hội
            </h4>
            <p className="text-gray-700">
              Ở đỉnh cao sự nghiệp, ENFJ trở thành người tạo ra thay đổi tích cực trong cộng đồng. 
              Họ thiết lập các chương trình đào tạo, tổ chức phi lợi nhuận hoặc tham gia hoạch định chính sách xã hội.
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
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">
                Giao tiếp xuất sắc
              </h4>
              <p className="text-gray-700">
                Khả năng thấu hiểu và truyền đạt ý tưởng một cách thuyết phục
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-start mb-3">
            <div className="bg-purple-100 p-2 rounded-lg mr-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">
                Phát triển người khác
              </h4>
              <p className="text-gray-700">
                Khả năng nhìn thấy tiềm năng và giúp người khác tỏa sáng
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-start mb-3">
            <div className="bg-pink-100 p-2 rounded-lg mr-4">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">
                Tổ chức sự kiện
              </h4>
              <p className="text-gray-700">
                Khả năng quản lý và điều phối các hoạt động tập thể hiệu quả
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-start mb-3">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-2 rounded-lg mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">
                Giải quyết xung đột
              </h4>
              <p className="text-gray-700">
                Khả năng hòa giải và tìm giải pháp đôi bên cùng có lợi
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
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-blue-700">
              Giáo dục & Đào tạo
            </h4>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span> Giáo viên/Giảng viên
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span> Huấn luyện viên
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span> Tư vấn hướng nghiệp
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span> Quản lý giáo dục
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-purple-700">
              Tâm lý & Xã hội
            </h4>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Nhà tâm lý học
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Công tác xã hội
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Tư vấn tâm lý
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Nhân viên tư vấn
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-pink-100 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h4 className="font-bold text-pink-700">
              Truyền thông & Quản lý
            </h4>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span> Quản lý nhân sự
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span> Quan hệ công chúng
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span> Tổ chức sự kiện
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span> Nhà ngoại giao
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Career Warnings */}
    <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
      <h3 className="text-xl font-semibold text-blue-700 mb-3">
        Cảnh báo nghề nghiệp
      </h3>
      <p className="text-gray-700 mb-4">
        ENFJ nên tránh những môi trường công việc:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Ít tương tác với con người, làm việc độc lập</li>
        <li>Đòi hỏi tính logic cao, ít liên quan đến cảm xúc</li>
        <li>Công việc lặp đi lặp lại, không có thử thách mới</li>
        <li>Môi trường tiêu cực, xung đột thường xuyên</li>
      </ul>
    </div>

    {/* Career Development */}
    <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-purple-700 mb-4">
        Lộ trình phát triển
      </h3>
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1 mr-3 text-blue-500 font-bold">
            1.
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-1">
              Giai đoạn học việc (0-5 năm)
            </h4>
            <p className="text-gray-700 text-sm">
              Phát triển kỹ năng giao tiếp, xây dựng mạng lưới quan hệ và hiểu sâu về nhu cầu con người
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1 mr-3 text-purple-500 font-bold">
            2.
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-1">
              Giai đoạn chuyên gia (5-10 năm)
            </h4>
            <p className="text-gray-700 text-sm">
              Đảm nhiệm vị trí lãnh đạo, đào tạo người khác và phát triển chương trình cộng đồng
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1 mr-3 text-pink-500 font-bold">
            3.
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-1">
              Giai đoạn ảnh hưởng (10+ năm)
            </h4>
            <p className="text-gray-700 text-sm">
              Tạo ra thay đổi xã hội tích cực, truyền cảm hứng cho thế hệ sau và xây dựng di sản
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
      THÓI QUEN NƠI CÔNG SỞ CỦA ENFJ
    </h2>

    {/* Introduction */}
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <p className="text-gray-700 leading-relaxed">
        Với sự ấm áp, khả năng giao tiếp xuất sắc và tinh thần lãnh đạo bẩm sinh, ENFJ mang đến nguồn năng lượng tích cực và sự gắn kết cho nơi làm việc. Họ coi trọng mối quan hệ đồng nghiệp và luôn tìm cách truyền cảm hứng cho người khác phát triển. Là những người có tầm nhìn, ENFJ tỏa sáng trong môi trường cho phép họ kết nối con người và thúc đẩy sự hợp tác.
      </p>
    </div>

    {/* As Employees Section */}
    <div className="mb-10">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 w-2 h-8 mr-3 rounded-full"></div>
        <h3 className="text-2xl font-semibold text-blue-700">
          ENFJ khi là nhân viên
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-2">
            Điểm mạnh nổi bật
          </h4>
          <p className="text-gray-700">
            Làm việc với thái độ tích cực và niềm nở. Sẵn sàng nhận nhiệm vụ khó. 
            Truyền cảm hứng cho đồng nghiệp bằng năng lượng tích cực. 
            Linh hoạt và sáng tạo trong giải quyết vấn đề. 
            Luôn tìm cách cải thiện môi trường làm việc.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-2">
            Thách thức
          </h4>
          <p className="text-gray-700">
            Dễ bị lợi dụng do quá nhiệt tình. Khó từ chối khi bị giao việc quá sức. 
            Đôi khi quá tập trung vào hòa khí mà bỏ qua hiệu quả. 
            Có thể kiệt sức vì ôm đồm quá nhiều. 
            Dễ bị tổn thương bởi phản hồi tiêu cực.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
        <p className="italic text-gray-700">
          "ENFJ là nhân viên đáng tin cậy và nhiệt huyết. Họ làm việc tốt nhất trong môi trường được ghi nhận và có cơ hội giúp đỡ người khác phát triển."
        </p>
      </div>
    </div>

    {/* As Colleagues Section */}
    <div className="mb-10">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 w-2 h-8 mr-3 rounded-full"></div>
        <h3 className="text-2xl font-semibold text-blue-700">
          ENFJ khi là đồng nghiệp
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-2">
            Giá trị mang lại
          </h4>
          <p className="text-gray-700">
            Xây dựng môi trường làm việc công bằng, bình đẳng. 
            Luôn tìm cách thúc đẩy tinh thần đồng đội. 
            Sẵn sàng giúp đỡ khi đồng nghiệp gặp khó khăn. 
            Giao tiếp cởi mở và chân thành. 
            Tạo không khí vui vẻ, tích cực trong nhóm.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-2">
            Điều cần lưu ý
          </h4>
          <p className="text-gray-700">
            Đôi khi quá nhiệt tình khiến người khác khó chịu. 
            Có thể bị hiểu nhầm là "vượt quyền". 
            Dễ bị lợi dụng lòng tốt. 
            Nên học cách đặt ranh giới rõ ràng hơn. 
            Cần cân bằng giữa quan tâm và chuyên môn.
          </p>
        </div>
      </div>

      <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex-shrink-0 mt-1 mr-3 text-blue-500 text-xl">
          🤝
        </div>
        <div>
          <p className="text-gray-700">
            "Đồng nghiệp ENFJ giống như 'chất kết dính' của nhóm - luôn biết cách kết nối mọi người và tạo ra môi trường làm việc tích cực, hợp tác."
          </p>
        </div>
      </div>
    </div>

    {/* As Managers Section */}
    <div>
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 w-2 h-8 mr-3 rounded-full"></div>
        <h3 className="text-2xl font-semibold text-blue-700">
          ENFJ khi làm quản lý
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-2">
            Phong cách lãnh đạo
          </h4>
          <p className="text-gray-700">
            Khuyến khích và truyền cảm hứng cho nhân viên. 
            Nhìn nhận điểm mạnh của từng thành viên. 
            Tạo môi trường làm việc cởi mở, sáng tạo. 
            Đặt lợi ích tập thể lên hàng đầu. 
            Luôn tìm cách phát triển đội ngũ.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-2">
            Ưu tiên
          </h4>
          <p className="text-gray-700">
            Xây dựng văn hóa doanh nghiệp tích cực. 
            Phát triển năng lực từng nhân viên. 
            Duy trì sự hài hòa trong nhóm. 
            Kết nối các thành viên với nhau. 
            Đảm bảo mọi người được lắng nghe.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex">
          <div className="flex-shrink-0 mr-3 text-blue-500">
            💡
          </div>
          <div>
            <p className="text-gray-700 font-medium">
              Lời khuyên cho lãnh đạo ENFJ: Hãy học cách nói "không" khi cần và đừng quá hy sinh bản thân. Sự cân bằng giữa quan tâm và chuyên môn sẽ giúp bạn quản lý hiệu quả hơn.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Career Path Section */}
    <div className="mt-10 bg-gradient-to-r from-blue-700 to-purple-600 p-6 rounded-lg text-white">
      <h3 className="text-xl font-bold mb-3">
        Con đường sự nghiệp lý tưởng
      </h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-blue-800 to-purple-700 bg-opacity-20 p-3 rounded-lg">
          <h4 className="font-semibold mb-2">
            Nhân sự & Đào tạo
          </h4>
          <p className="text-sm">
            Quản lý nhân sự, Chuyên gia đào tạo, Tư vấn nghề nghiệp, Cố vấn hướng nghiệp
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-800 to-purple-700 bg-opacity-20 p-3 rounded-lg">
          <h4 className="font-semibold mb-2">Truyền thông & Giáo dục</h4>
          <p className="text-sm">
            Quan hệ công chúng, Giáo viên, Giảng viên, Biên tập viên, Nhà báo
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-800 to-purple-700 bg-opacity-20 p-3 rounded-lg">
          <h4 className="font-semibold mb-2">
            Lãnh đạo & Tư vấn
          </h4>
          <p className="text-sm">
            Quản lý dự án, Tư vấn quản trị, Chuyên gia phát triển tổ chức, Nhà hoạt động xã hội
          </p>
        </div>
      </div>
      <div className="mt-4 text-blue-100 text-sm">
        <p>
          ENFJ phát triển mạnh trong môi trường cho phép họ kết nối con người, truyền cảm hứng và thúc đẩy sự phát triển của tập thể. Họ cần công việc có ý nghĩa và cơ hội giúp đỡ người khác.
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
        <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-700 bg-clip-text text-transparent">
          NGƯỜI CHO ĐI (ENFJ)
        </span>{" "}
        VỚI
        <span className="text-purple-600">
          {" "}
          NGƯỜI CHE CHỞ (INFJ)
        </span>{" "}
        VÀ
        <span className="text-pink-500">
          {" "}
          NGƯỜI TRUYỀN CẢM HỨNG (ENFP)
        </span>
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Phân tích sâu về 3 nhóm tính cách thuộc nhóm "Lý tưởng - Nhiệt huyết" - những người hướng đến giúp đỡ và truyền cảm hứng
      </p>
    </div>

    {/* Core Similarities */}
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-6 rounded-lg mb-10">
      <h3 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
        <svg className="w-6 h-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        Điểm chung cốt lõi của bộ ba Lý tưởng - Nhiệt huyết
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center mb-3">
            <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
              N
            </div>
            <h4 className="font-bold text-gray-800">Trực giác</h4>
          </div>
          <p className="text-gray-700 text-sm">
            Cả ba đều tập trung vào ý nghĩa và khả năng tiềm ẩn hơn chi tiết cụ thể
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center mb-3">
            <div className="bg-pink-100 text-pink-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
              F
            </div>
            <h4 className="font-bold text-gray-800">Cảm xúc</h4>
          </div>
          <p className="text-gray-700 text-sm">
            Ra quyết định dựa trên giá trị cá nhân và sự đồng cảm
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-to-r from-blue-100 to-pink-100 text-purple-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
              ❤
            </div>
            <h4 className="font-bold text-gray-800">
              Giúp đỡ người khác
            </h4>
          </div>
          <p className="text-gray-700 text-sm">
            Luôn mong muốn mang lại điều tốt đẹp cho mọi người
          </p>
        </div>
      </div>
    </div>

    {/* Pair Comparisons */}
    <div className="space-y-10">
      {/* ENFJ vs INFJ */}
      <div>
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-2 h-10 mr-3 rounded-full"></div>
          <h3 className="text-2xl font-semibold text-gray-800">
            <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              ENFJ
            </span>{" "}
            vs <span className="text-purple-600">INFJ</span>:
            <span className="text-sm font-normal ml-2">
              Người cho đi vs Người che chở
            </span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Tương đồng chính
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Đều hướng thiện và nhiệt tình giúp đỡ mọi người</li>
              <li>Ôn hòa, ngại va chạm và tránh mâu thuẫn</li>
              <li>Hướng tới môi trường hòa đồng, phát triển cùng nhau</li>
              <li>Có nguyên tắc (J) và tuân theo quy trình</li>
              <li>Nhạy cảm với cảm xúc của người khác</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center">
              <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Khác biệt then chốt
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-1">
                  Hướng năng lượng
                </h5>
                <p className="text-gray-700 text-sm">
                  ENFJ (E) được tiếp năng lượng từ tương tác xã hội, INFJ (I) cần thời gian một mình để nạp năng lượng
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-1">
                  Cách thể hiện
                </h5>
                <p className="text-gray-700 text-sm">
                  ENFJ hoạt ngôn và cởi mở, INFJ kín đáo và sâu sắc
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-1">
                  Phong cách lãnh đạo
                </h5>
                <p className="text-gray-700 text-sm">
                  ENFJ lãnh đạo bằng động viên trực tiếp, INFJ dẫn dắt bằng tầm nhìn và thấu hiểu
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
          <p className="italic text-gray-700">
            "ENFJ như ngọn đuốc tỏa sáng giữa đám đông, INFJ như ngọn hải đăng âm thầm chỉ lối. 
            Cả hai đều dẫn đường nhưng với cách thức khác biệt."
          </p>
        </div>
      </div>

      {/* ENFJ vs ENFP */}
      <div>
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-pink-500 w-2 h-10 mr-3 rounded-full"></div>
          <h3 className="text-2xl font-semibold text-gray-800">
            <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              ENFJ
            </span>{" "}
            vs <span className="text-pink-600">ENFP</span>:
            <span className="text-sm font-normal ml-2">
              Người cho đi vs Người truyền cảm hứng
            </span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Tương đồng chính
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Đều hướng ngoại (E) và cởi mở trong giao tiếp</li>
              <li>Quan tâm đến các mối quan hệ tích cực</li>
              <li>Có xu hướng lý tưởng hóa</li>
              <li>Thích khám phá và đón nhận cái mới</li>
              <li>Ấm áp, dễ gần và có khả năng giao tiếp tốt</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center">
              <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Khác biệt then chốt
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-1">
                  Cách tổ chức
                </h5>
                <p className="text-gray-700 text-sm">
                  ENFJ (J) có kế hoạch rõ ràng, ENFP (P) linh hoạt và tự phát
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-1">
                  Giải quyết mâu thuẫn
                </h5>
                <p className="text-gray-700 text-sm">
                  ENFJ tìm cách giải quyết triệt để, ENFP từ từ gỡ rối
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-1">
                  Phong cách làm việc
                </h5>
                <p className="text-gray-700 text-sm">
                  ENFJ nguyên tắc và hệ thống, ENFP sáng tạo và ít nguyên tắc hơn
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
          <p className="italic text-gray-700">
            "ENFJ như nhạc trưởng chỉ huy dàn nhạc, ENFP như nghệ sĩ ngẫu hứng. 
            Cả hai đều tạo ra giai điệu tuyệt vời nhưng với phong cách khác biệt."
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
          <thead className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">
                Đặc điểm
              </th>
              <th className="py-3 px-4 text-left font-semibold">
                ENFJ
              </th>
              <th className="py-3 px-4 text-left font-semibold">
                INFJ
              </th>
              <th className="py-3 px-4 text-left font-semibold">
                ENFP
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* Row 1 */}
            <tr>
              <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                Chức năng nhận thức chính
              </td>
              <td className="py-3 px-4 text-gray-600 bg-blue-50">
                Cảm xúc hướng ngoại (Fe) + Trực giác hướng nội (Ni)
              </td>
              <td className="py-3 px-4 text-gray-600 bg-purple-50">
                Trực giác hướng nội (Ni) + Cảm xúc hướng ngoại (Fe)
              </td>
              <td className="py-3 px-4 text-gray-600 bg-pink-50">
                Trực giác hướng ngoại (Ne) + Cảm xúc hướng nội (Fi)
              </td>
            </tr>
            {/* Row 2 */}
            <tr>
              <td className="py-3 px-4 font-medium text-gray-700">
                Phong cách giao tiếp
              </td>
              <td className="py-3 px-4 text-gray-600 bg-blue-50">
                Nhiệt tình, truyền cảm hứng, hướng đến hài hòa
              </td>
              <td className="py-3 px-4 text-gray-600 bg-purple-50">
                Sâu sắc, tinh tế, thích hội thoại 1-1
              </td>
              <td className="py-3 px-4 text-gray-600 bg-pink-50">
                Linh hoạt, hài hước, đầy nhiệt huyết
              </td>
            </tr>
            {/* Row 3 */}
            <tr>
              <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                Trong quan hệ
              </td>
              <td className="py-3 px-4 text-gray-600 bg-blue-50">
                Chủ động kết nối, quan tâm đến nhu cầu tập thể
              </td>
              <td className="py-3 px-4 text-gray-600 bg-purple-50">
                Kén chọn, trân trọng mối quan hệ sâu sắc
              </td>
              <td className="py-3 px-4 text-gray-600 bg-pink-50">
                Cởi mở, dễ kết bạn nhưng có thể thiếu ổn định
              </td>
            </tr>
            {/* Row 4 */}
            <tr>
              <td className="py-3 px-4 font-medium text-gray-700">
                Ưu thế nghề nghiệp
              </td>
              <td className="py-3 px-4 text-gray-600 bg-blue-50">
                Lãnh đạo, giáo dục, tư vấn, nhân sự
              </td>
              <td className="py-3 px-4 text-gray-600 bg-purple-50">
                Tâm lý học, viết lách, cố vấn
              </td>
              <td className="py-3 px-4 text-gray-600 bg-pink-50">
                Nghệ thuật, marketing, sáng tạo nội dung
              </td>
            </tr>
            {/* Row 5 */}
            <tr>
              <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                Điểm mạnh
              </td>
              <td className="py-3 px-4 text-gray-600 bg-blue-50">
                Truyền cảm hứng, tổ chức nhóm, đồng cảm
              </td>
              <td className="py-3 px-4 text-gray-600 bg-purple-50">
                Thấu hiểu sâu sắc, có tầm nhìn xa
              </td>
              <td className="py-3 px-4 text-gray-600 bg-pink-50">
                Sáng tạo, linh hoạt, nhiệt huyết
              </td>
            </tr>
            {/* Row 6 */}
            <tr>
              <td className="py-3 px-4 font-medium text-gray-700">
                Điểm yếu
              </td>
              <td className="py-3 px-4 text-gray-600 bg-blue-50">
                Quá quan tâm đến đánh giá của người khác
              </td>
              <td className="py-3 px-4 text-gray-600 bg-purple-50">
                Dễ kiệt sức vì quá nhạy cảm
              </td>
              <td className="py-3 px-4 text-gray-600 bg-pink-50">
                Thiếu kiên nhẫn, khó tập trung dài hạn
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
        {/* ENFJ Column */}
        <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-blue-700">ENFJ</h4>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span> Quản lý nhân sự
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span> Giáo viên/Giảng viên
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span> Tư vấn hướng nghiệp
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span> Nhà ngoại giao
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span> Tổ chức sự kiện
            </li>
          </ul>
        </div>

        {/* INFJ Column */}
        <div className="bg-white p-6 rounded-xl border border-purple-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-purple-700">INFJ</h4>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Nhà tâm lý học
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Nhà văn/Nhà thơ
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Cố vấn tâm lý
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Nhân viên xã hội
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Chuyên gia tâm linh
            </li>
          </ul>
        </div>

        {/* ENFP Column */}
        <div className="bg-white p-6 rounded-xl border border-pink-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-pink-100 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-bold text-pink-700">ENFP</h4>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span> Nhà báo/Phóng viên
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span> Diễn giả truyền cảm hứng
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span> Nhà thiết kế sáng tạo
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span> Chuyên gia marketing
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span> Nghệ sĩ/Nhạc sĩ
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Final Thoughts */}
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-purple-700 mb-3">
        Nhận định cuối
      </h3>
      <p className="text-gray-700 mb-3">
        ENFJ, INFJ và ENFP đều là những nhóm tính cách giàu lòng trắc ẩn và nhiệt huyết, nhưng mỗi nhóm có thế mạnh riêng:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>
          <span className="font-medium text-blue-600">ENFJ</span> - Nhà lãnh đạo tâm huyết với khả năng truyền cảm hứng và kết nối mọi người
        </li>
        <li>
          <span className="font-medium text-purple-600">INFJ</span> - Người thấu hiểu sâu sắc với trực giác nhạy bén
        </li>
        <li>
          <span className="font-medium text-pink-600">ENFP</span> - Người sáng tạo đầy nhiệt huyết với tinh thần tự do
        </li>
      </ul>
      <p className="text-gray-700">
        Sự khác biệt chính nằm ở cách họ tương tác với thế giới: ENFJ với sự nhiệt tình và tổ chức, INFJ với chiều sâu nội tâm, ENFP với sự linh hoạt và sáng tạo. Hiểu rõ những khác biệt này giúp mỗi nhóm phát huy tối đa tiềm năng của mình.
      </p>
    </div>
  </div>
)}
            {activeSection === "advice" && (
  <div className="bg-white p-6 rounded-lg shadow-md">
    {/* Main Header */}
    <h2 className="text-3xl font-bold text-blue-700 mb-8 border-b-2 border-blue-100 pb-4">
      LỜI KHUYÊN PHÁT TRIỂN DÀNH CHO NGƯỜI CHO ĐI (ENFJ)
    </h2>

    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-700 to-purple-600 p-8 rounded-lg mb-10 text-white">
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
          Hành trình phát triển cho Người cho đi
        </h3>
        <p className="text-blue-200">
          Là những người ấm áp và giàu lòng trắc ẩn, ENFJ cần học cách cân bằng giữa việc chăm sóc người khác và bản thân, giữa sự nhiệt tình và sáng suốt để duy trì năng lượng tích cực và các mối quan hệ lành mạnh.
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
              className="w-6 h-6 text-blue-700"
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
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Phát huy điểm mạnh
          </h3>
        </div>
        <p className="text-gray-700 mb-4">
          Tận dụng tối đa khả năng kết nối và truyền cảm hứng của bạn:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Động viên và ghi nhận thành tích của người khác</li>
          <li>Gắn kết mọi người trong môi trường tập thể</li>
          <li>Giúp đỡ người khác phát triển bản thân</li>
          <li>Tạo không khí tích cực nơi làm việc</li>
        </ul>
      </div>

      {/* Improve Weaknesses */}
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
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Cải thiện điểm yếu
          </h3>
        </div>
        <p className="text-gray-700 mb-4">
          Những điều ENFJ cần lưu ý để phát triển:
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="italic text-gray-700">
            "Chăm sóc người khác là đức tính tốt, nhưng biết đặt giới hạn là chìa khóa cho sự cân bằng"
          </p>
        </div>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
          <li>Học cách nói "không" khi cần thiết</li>
          <li>Đừng né tránh mâu thuẫn một cách thái quá</li>
          <li>Dành thời gian cho bản thân nhiều hơn</li>
          <li>Phát triển khả năng sáng tạo</li>
        </ul>
      </div>
    </div>

    {/* Emotional & Social Skills Section */}
    <div className="mb-10 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg">
            <svg
              className="w-10 h-10 text-blue-700"
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
            Phát triển kỹ năng cá nhân & xã hội
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
              <h4 className="font-semibold text-blue-700 mb-2">
                Nhìn nhận sâu sắc
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Dành thời gian tĩnh lặng để hiểu bản thân</li>
                <li>Đừng vội vàng trong quyết định quan trọng</li>
                <li>Đánh giá kỹ năng lực trước khi nhận việc</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
              <h4 className="font-semibold text-blue-700 mb-2">
                Giải quyết mâu thuẫn
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Đừng sợ những ý kiến trái chiều</li>
                <li>Xem mâu thuẫn là cơ hội để hiểu nhau hơn</li>
                <li>Thể hiện quan điểm cá nhân rõ ràng</li>
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
                className="w-6 h-6 text-blue-700"
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
              Chăm sóc bản thân
            </h3>
          </div>
          <p className="text-gray-700 mb-4">
            ENFJ cần chú ý cân bằng cuộc sống:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">
                Đặt giới hạn
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Biết lượng sức mình trước khi nhận việc</li>
                <li>Chia nhỏ công việc lớn thành các bước</li>
                <li>Không ôm đồm quá nhiều trách nhiệm</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">
                Nuôi dưỡng sáng tạo
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Thử các hoạt động nghệ thuật như viết lách, vẽ</li>
                <li>Khám phá góc nhìn mới mẻ về thế giới</li>
                <li>Dành thời gian cho sở thích cá nhân</li>
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
                    Thời gian riêng tư
                  </h5>
                  <p className="text-gray-700 text-sm">
                    Dành 30 phút mỗi ngày cho bản thân không làm việc
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                  2
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">
                    Nói "không"
                  </h5>
                  <p className="text-gray-700 text-sm">
                    Từ chối 1 yêu cầu mỗi tuần khi cảm thấy quá sức
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                  3
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">
                    Sáng tạo
                  </h5>
                  <p className="text-gray-700 text-sm">
                    Thử một hoạt động nghệ thuật mới mỗi tháng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Final Encouragement */}
    <div className="bg-gradient-to-r from-blue-800 to-purple-700 p-8 rounded-lg text-white">
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
          Sức mạnh của Người cho đi
        </h3>
        <p className="mb-4 text-blue-100">
          Bạn được ban tặng khả năng kết nối con người tuyệt vời, sự ấm áp và tinh thần lãnh đạo bẩm sinh. Khi học cách kết hợp những điểm mạnh này với sự tự chăm sóc bản thân và cân bằng, bạn sẽ trở thành người truyền cảm hứng tuyệt vời và người bạn đáng tin cậy.
        </p>
        <div className="bg-purple-800 bg-opacity-30 p-4 rounded-lg inline-block">
          <p className="font-medium">
            "Thế giới cần những người như bạn - những người biết cách gắn kết, động viên và giúp người khác phát triển. Hãy nhớ rằng để tiếp tục cho đi, bạn cần học cách nhận lại và chăm sóc chính mình."
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
export default ENFJPage;
