import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faPen, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const handleCopyLink = () => {
  const url = "http://localhost:5173/tools/mbti/tinh-cach/isfj";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Đã sao chép liên kết!");
    })
    .catch((err) => {
      console.error("Lỗi khi sao chép liên kết:", err);
    });
};
const ISFJPage = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Tổng quan" },
    { id: "strengths-weaknesses", title: "Điểm mạnh và điểm yếu" },
    { id: "relationship", title: "Mối quan hệ" },
    { id: "how-to-be-close", title: "Làm sao để thân thiết với ISFJ" },
    { id: "career-path", title: "Con đường sự nghiệp" },
    { id: "workplace-habits", title: "Thói quen nơi công sở" },
    { id: "compare", title: "So sánh ISFJ với INFJ, ESFJ" },
    { id: "advice", title: "Lời khuyên dành cho ISFJ" },
  ];

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="ISFJ-page bg-gradient-to-b from-blue-50 to-purple-50">
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
                ISFJ - Người nuôi dưỡng
              </h1>
            </div>
            <div className="relative w-full">
              <img
                src="/mbti_icons/isfj1.webp"
                alt="ISFJ - Người nuôi dưỡng"
                className="pointer w-full h-120 object-cover rounded-lg shadow "
              />
            </div>

            {/* Description */}
            <div className="text-lg text-gray-700 max-w-4xl text-center">
              ISFJ là nhóm tính cách phổ biến và đặc biệt toả sáng với lòng vị
              tha luôn đong đầy. Các ISFJ như những tấm khiên vững chắc nhất,
              sẵn sàng hi sinh vì những người mà họ yêu thương và trân quý. ISFJ
              đồng thời cũng có khả năng thấu cảm sâu sắc, có khả năng tạo nên
              một bầu không gian yên bình, ấm áp và an tâm tuyệt đối cho những
              người ở cạnh bên.{" "}
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
                  <h2 className="text-3xl font-bold text-rose-700 mb-4">
                    TỔNG QUAN TÍNH CÁCH ISFJ
                  </h2>
                  <div className="w-20 h-1 bg-rose-500 mx-auto"></div>
                </div>

                {/* Introduction */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-rose-400">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    ISFJ (Người nuôi dưỡng) là loại tính cách giàu lòng nhân ái
                    nhất, luôn sẵn sàng hy sinh vì người khác. Với sự trung
                    thành tuyệt đối và tinh thần trách nhiệm cao, họ được ví như
                    "phiên bản giàu cảm xúc" của nhóm ISTJ. ISFJ mang đến sự ấm
                    áp, dịu dàng và sự ổn định trong mọi mối quan hệ.
                  </p>
                </div>

                {/* MBTI Breakdown */}
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-rose-700 mb-6 text-center">
                    Ý NGHĨA 4 CHỮ CÁI ISFJ
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "● I - Hướng nội (Introverted)",
                        color: "bg-rose-100",
                        textColor: "text-rose-800",
                        content:
                          "ISFJ tìm thấy năng lượng từ thế giới nội tâm phong phú. Họ thể hiện sâu sắc nhất khi ở không gian riêng tư, khác với những người hướng ngoại (E) luôn tràn đầy năng lượng khi tương tác xã hội.",
                      },
                      {
                        title: "● S - Giác quan (Sensing)",
                        color: "bg-pink-100",
                        textColor: "text-pink-800",
                        content:
                          "ISFJ tập trung vào thực tế cụ thể qua năm giác quan. Họ tin tưởng vào những gì có thể quan sát và kiểm chứng, khác với nhóm trực giác (N) thường đi sâu vào ý nghĩa ẩn sau sự việc.",
                      },
                      {
                        title: "● F - Cảm xúc (Feeling)",
                        color: "bg-fuchsia-100",
                        textColor: "text-fuchsia-800",
                        content:
                          "ISFJ đưa ra quyết định dựa trên giá trị cá nhân và tác động đến người khác. Họ đề cao sự hòa hợp, khác với nhóm lý trí (T) thường ưu tiên logic và các tiêu chuẩn khách quan.",
                      },
                      {
                        title: "● J - Nguyên tắc (Judging)",
                        color: "bg-purple-100",
                        textColor: "text-purple-800",
                        content:
                          "ISFJ thích cuộc sống có kế hoạch rõ ràng và kết cấu ổn định. Họ làm việc hiệu quả nhất khi có hướng dẫn cụ thể, khác với nhóm linh hoạt (P) thích sự tự phát và mở rộng các lựa chọn.",
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
                      title: "Trái tim nhân ái",
                      icon: "❤️",
                      content:
                        "ISFJ được mệnh danh là 'người nuôi dưỡng' nhờ khả năng đồng cảm đặc biệt. Họ luôn quan tâm đến nhu cầu người khác trước bản thân, sẵn sàng dành thời gian và công sức để hỗ trợ mọi người. Đây cũng là nhóm tính cách có xu hướng chọn nghề nghiệp trong lĩnh vực chăm sóc sức khỏe, giáo dục.",
                    },
                    {
                      title: "Tinh thần trách nhiệm cao",
                      icon: "🏅",
                      content:
                        "Khi nhận nhiệm vụ, ISFJ sẽ hoàn thành với độ chính xác gần như tuyệt đối. Họ có khả năng ghi nhớ chi tiết đáng kinh ngạc, thậm chí nhớ được biểu cảm khuôn mặt của người khác sau nhiều năm. Sự tỉ mỉ và cầu toàn giúp họ trở thành nhân viên lý tưởng.",
                    },
                    {
                      title: "Đề cao sự ổn định",
                      icon: "🏠",
                      content:
                        "ISFJ coi trọng an toàn và truyền thống. Họ thường hoài nghi với ý tưởng mới trừ khi được giải thích cặn kẽ. Trong tổ chức, ISFJ đóng vai trò gìn giữ các giá trị cốt lõi và hướng dẫn thành viên mới tuân thủ quy tắc.",
                    },
                    {
                      title: "Biểu hiện cảm xúc kín đáo",
                      icon: "🎭",
                      content:
                        "Dù có đời sống nội tâm phong phú, ISFJ hiếm khi bộc lộ cảm xúc ra ngoài. Họ tạo vỏ bọc hoàn hảo để che giấu suy nghĩ thật, chỉ chia sẻ khi thực sự cần thiết. Điều này khiến họ dễ bị tổn thương bởi lời phê bình, thường tự hình dung những kịch bản tiêu cực.",
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
                        <span>Trung thành và đáng tin cậy tuyệt đối</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-500 mr-2">✓</span>
                        <span>
                          Khả năng quan sát và ghi nhớ chi tiết xuất sắc
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-500 mr-2">✓</span>
                        <span>Tinh thần phục vụ vị tha không mệt mỏi</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-500 mr-2">✓</span>
                        <span>Thực tế và có óc tổ chức cao</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-500 mr-2">✓</span>
                        <span>Khiếu thẩm mỹ và sắp xếp không gian tốt</span>
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
                        <span>
                          Dễ kiệt sức vì đặt nhu cầu người khác lên đầu
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✗</span>
                        <span>Nhạy cảm quá mức với chỉ trích</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✗</span>
                        <span>Khó thích nghi với thay đổi đột ngột</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✗</span>
                        <span>Xu hướng kìm nén cảm xúc cá nhân</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✗</span>
                        <span>Đôi khi cứng nhắc trong các nguyên tắc</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Career & Relationships */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-rose-700 mb-4">
                      ISFJ TRONG CÔNG VIỆC
                    </h3>
                    <p className="text-gray-700 mb-4">
                      ISFJ tỏa sáng trong các ngành đòi hỏi sự chu đáo và kiên
                      nhẫn như y tế, giáo dục, dịch vụ xã hội. Họ là những nhân
                      viên tận tâm, luôn đảm bảo mọi chi tiết được hoàn thành
                      hoàn hảo. Môi trường lý tưởng của ISFJ cần có:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Cấu trúc rõ ràng và kỳ vọng được xác định</li>
                      <li>Không gian làm việc yên tĩnh, ít xung đột</li>
                      <li>Cơ hội hỗ trợ người khác một cách thiết thực</li>
                      <li>Sự ghi nhận thành quả từ cấp trên</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-pink-700 mb-4">
                      ISFJ TRONG QUAN HỆ
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Trong tình yêu và tình bạn, ISFJ thể hiện tình cảm qua
                      hành động chăm sóc hơn là lời nói hoa mỹ. Họ đánh giá cao
                      mối quan hệ lâu dài và ổn định. Đặc điểm nổi bật:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>
                        Luôn nhớ các ngày kỷ niệm và sở thích của đối phương
                      </li>
                      <li>Ưu tiên hạnh phúc người thân hơn bản thân</li>
                      <li>
                        Cần thời gian để mở lòng nhưng một khi tin tưởng sẽ rất
                        sâu sắc
                      </li>
                      <li>Dễ bị tổn thương bởi sự thờ ơ hoặc vô ơn</li>
                    </ul>
                  </div>
                </div>

                {/* Famous People */}
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold text-center text-rose-700 mb-6">
                    ISFJ NỔI TIẾNG
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {[
                      { name: "Mother Teresa", role: "Nhà truyền giáo" },
                      { name: "Kate Middleton", role: "Công nương Anh" },
                      { name: "Beyoncé", role: "Ca sĩ" },
                      { name: "Selena Gomez", role: "Ca sĩ, diễn viên" },
                      { name: "Anne Hathaway", role: "Diễn viên" },
                      { name: "Vin Diesel", role: "Diễn viên" },
                      { name: "Daesung (BIGBANG)", role: "Ca sĩ" },
                      { name: "Dr. Dre", role: "Rapper, nhà sản xuất" },
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
                    "ISFJ là những người nuôi dưỡng không mệt mỏi của thế giới.
                    Bằng sự dịu dàng và tận tụy, họ âm thầm xây dựng nền tảng
                    cho xã hội. Dù ít khi đòi hỏi sự công nhận, những đóng góp
                    của ISFJ trong việc chăm sóc người khác là vô giá và không
                    thể thay thế."
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
                      NGƯỜI NUÔI DƯỠNG (ISFJ)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    ISFJ - Nhóm tính cách "Người bảo vệ" (13% dân số) với lòng
                    trắc ẩn sâu sắc và tinh thần phục vụ tận tâm
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
                      THẾ MẠNH ĐẶC TRƯNG
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
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Tận Tâm Hỗ Trợ
                          </h4>
                          <p className="text-gray-700">
                            ISFJ như những thiên thần luôn sẵn sàng giúp đỡ mà
                            không đòi hỏi. Họ chia sẻ kiến thức, kinh nghiệm và
                            dành sự quan tâm chu đáo cho mọi người xung quanh.
                          </p>
                        </div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg mt-3">
                        <p className="text-sm text-green-700 italic">
                          "ISFJ được mệnh danh là 'những người chăm sóc' tự
                          nhiên trong hệ thống MBTI"
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Đáng Tin Cậy Tuyệt Đối
                          </h4>
                          <p className="text-gray-700">
                            Với ISFJ, chữ tín quý hơn vàng. Họ làm việc tỉ mỉ,
                            cẩn thận đến từng chi tiết và luôn hoàn thành nhiệm
                            vụ vượt mong đợi, khiến họ trở thành trụ cột trong
                            mọi tổ chức.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          Tận tâm
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          Tỉ mỉ
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          Trách nhiệm
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
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Quan Sát Tinh Tế
                          </h4>
                          <p className="text-gray-700">
                            ISFJ ghi nhớ chi tiết nhu cầu và cảm xúc của người
                            khác. Sự ân cần của họ khiến mọi người cảm thấy được
                            thấu hiểu và trân trọng.
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
                          <span>Khả năng thấu cảm</span>
                          <span>90% ISFJ nhạy bén với nhu cầu người khác</span>
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
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Nhiệt Huyết và Kiên Trì
                          </h4>
                          <p className="text-gray-700">
                            Khi theo đuổi mục tiêu ý nghĩa, ISFJ làm việc không
                            mệt mỏi. Họ gắn bó lâu dài với các dự án và chỉ dừng
                            lại khi mang lại kết quả tích cực.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Biểu hiện:</span>
                          Làm việc vượt giờ, không ngại khó khăn, luôn tìm cách
                          cải thiện kết quả
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
                      ĐIỂM CẦN LƯU Ý
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
                            Bảo Thủ và Ngại Thay Đổi
                          </h4>
                          <p className="text-gray-700">
                            ISFJ coi trọng truyền thống và các quy trình đã được
                            thiết lập. Họ thường khó chấp nhận cái mới và không
                            thoải mái khi phải ra khỏi vùng an toàn.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Gợi ý:</span>
                          Thử nghiệm phương pháp mới ở quy mô nhỏ trước, tìm
                          kiếm bằng chứng về hiệu quả của đổi mới
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
                            Khiêm Tốn Quá Mức
                          </h4>
                          <p className="text-gray-700">
                            ISFJ thường xem nhẹ thành tích của bản thân và ngại
                            thể hiện năng lực. Họ có xu hướng đánh giá thấp giá
                            trị bản thân và không dám nhận sự công nhận xứng
                            đáng.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 bg-red-50 p-3 rounded-lg">
                        <p className="text-sm text-red-700 italic">
                          "ISFJ cần học cách chấp nhận lời khen và hiểu rằng
                          việc thể hiện năng lực không phải là khoe khoang"
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
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Dễ Để Bụng và Ấm Ức
                          </h4>
                          <p className="text-gray-700">
                            ISFJ nhạy cảm với đánh giá từ người khác và thường
                            "ghim" lại những lời chỉ trích dù nhỏ nhất. Họ có xu
                            hướng coi phản biện như sự công kích cá nhân.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Cải thiện:</span>
                          Học cách phân biệt giữa phê bình mang tính xây dựng và
                          công kích cá nhân
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
                              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Ôm Đồm và Quá Tải
                          </h4>
                          <p className="text-gray-700">
                            Không biết nói "không", ISFJ thường nhận quá nhiều
                            việc dẫn đến kiệt sức. Họ cố gồng mình giải quyết
                            mọi thứ một mình thay vì tìm kiếm sự giúp đỡ.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Giải pháp:</span>
                          Thực hành từ chối khéo léo, ưu tiên công việc quan
                          trọng và học cách ủy quyền
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      CÂN BẰNG CUỘC SỐNG ISFJ
                    </h3>
                    <p className="mb-4 text-purple-100">
                      Sức mạnh thực sự của ISFJ nằm ở khả năng kết hợp lòng trắc
                      ẩn với ranh giới cá nhân lành mạnh. Khi học được cách cân
                      bằng giữa cho đi và nhận lại, giữa chăm sóc người khác và
                      bản thân, họ có thể tỏa sáng như những người nuôi dưỡng
                      hạnh phúc và viên mãn.
                    </p>
                    <div className="bg-opacity-20 p-4 rounded-lg inline-block">
                      <p className="font-medium">
                        "Một ISFJ trưởng thành hiểu rằng họ không thể đổ đầy ly
                        người khác khi ly mình cạn kiệt. Tự chăm sóc bản thân
                        không phải là ích kỷ, mà là điều kiện tiên quyết để tiếp
                        tục yêu thương."
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
                  <h2 className="text-3xl font-bold text-rose-700 mb-3">
                    MỐI QUAN HỆ CỦA ISFJ
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto rounded-full"></div>
                  <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    ISFJ là những người bạn và người yêu ấm áp, vị tha. Họ xây
                    dựng mối quan hệ dựa trên sự chân thành và cam kết lâu dài.
                    Với trái tim nhân hậu, ISFJ luôn đặt nhu cầu người khác lên
                    trước và mong muốn tạo dựng những mối quan hệ bền vững.
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
                        <span>Ấm áp và chu đáo trong mọi mối quan hệ</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-500 mr-2">•</span>
                        <span>
                          Luôn đặt nhu cầu người khác lên trước bản thân
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-500 mr-2">•</span>
                        <span>Thể hiện tình cảm qua hành động chăm sóc</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-500 mr-2">•</span>
                        <span>
                          Cần thời gian để mở lòng nhưng một khi đã tin tưởng sẽ
                          rất sâu sắc
                        </span>
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
                        { type: "ESFJ", desc: "Cùng chia sẻ giá trị" },
                        { type: "ESTJ", desc: "Bổ sung sự quyết đoán" },
                        { type: "ISTJ", desc: "Hiểu được sự tận tâm" },
                        { type: "ENFJ", desc: "Cân bằng cảm xúc" },
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
                        ISFJ TRONG TÌNH YÊU
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Trong tình yêu, ISFJ bộc lộ những khía cạnh sâu kín nhất
                        của mình. Dưới vẻ ngoài khiêm tốn là tình cảm nồng nhiệt
                        dành cho người mình yêu. Họ thể hiện tình yêu qua những
                        hành động chăm sóc thiết thực hàng ngày.
                      </p>
                      <div className="bg-white bg-opacity-70 p-4 rounded-lg border-l-4 border-rose-400 mb-4">
                        <p className="italic text-gray-700">
                          "ISFJ yêu thầm lặng nhưng sâu sắc. Một khi đã cam kết,
                          họ sẽ làm mọi thứ để xây dựng mối quan hệ bền vững và
                          hướng tới hôn nhân."
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
                          "ISFJ không giỏi nói lời yêu thương nhưng họ thể hiện qua việc ghi nhớ sở thích của đối phương, chuẩn bị bữa ăn ngon, hay lên kế hoạch cho những chuyến đi đặc biệt.",
                      },
                      {
                        title: "Thách thức",
                        icon: "⚠️",
                        content:
                          "ISFJ khó từ bỏ mối quan hệ dù không hạnh phúc. Họ cần học cách cân bằng giữa hy sinh cho người yêu và chăm sóc bản thân.",
                      },
                      {
                        title: "Lời khuyên",
                        icon: "💡",
                        content:
                          "ISFJ nên mạnh dạn bày tỏ nhu cầu cá nhân và học cách chấp nhận rằng không phải mọi mối quan hệ đều có thể cứu vãn.",
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
                    ISFJ TRONG TÌNH BẠN
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
                            Bạn bè chất lượng
                          </h4>
                          <p className="text-gray-700">
                            ISFJ có vòng bạn bè nhỏ nhưng bền chặt. Họ đánh giá
                            cao bạn bè trung thực, biết tôn trọng không gian
                            riêng tư. Một khi đã coi ai là bạn, họ sẽ sẵn sàng
                            giúp đỡ bất cứ khi nào cần.
                          </p>
                        </div>
                      </div>

                      <div className="bg-pink-50 p-5 rounded-lg border-l-4 border-pink-400 mb-6">
                        <p className="italic text-gray-700">
                          "ISFJ có thể không phải là người bạn vui vẻ nhất,
                          nhưng họ chắc chắn là người bạn đáng tin cậy nhất -
                          luôn xuất hiện đúng lúc bạn cần nhất."
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
                            ISFJ thường gặp khó khăn khi từ chối yêu cầu của bạn
                            bè, dẫn đến kiệt sức vì luôn đặt nhu cầu người khác
                            lên trước. Họ cần học cách thiết lập ranh giới lành
                            mạnh.
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
                            Cần được công nhận
                          </h4>
                          <p className="text-gray-700">
                            ISFJ mong muốn được bạn bè trân trọng và công nhận
                            những gì họ đã làm. Tuy nhiên, họ thường ngại yêu
                            cầu sự giúp đỡ khi cần, dẫn đến cảm giác mất cân
                            bằng trong tình bạn.
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
                    ISFJ KHI LÀM CHA MẸ
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {[
                        {
                          title: "Phong cách nuôi dạy",
                          content:
                            "ISFJ là những cha mẹ tận tâm và chu đáo. Họ tạo môi trường an toàn, ổn định để con cái phát triển. Các giá trị về trách nhiệm, lòng tốt và sự tôn trọng luôn được nhấn mạnh.",
                        },
                        {
                          title: "Ưu điểm",
                          content:
                            "ISFJ rất giỏi trong việc đáp ứng nhu cầu thể chất và tình cảm của con cái. Họ kiên nhẫn lắng nghe và luôn cố gắng hiểu quan điểm của con.",
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
                              Có xu hướng kiểm soát khi con bước vào tuổi vị
                              thành niên
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            <span>
                              Khó chấp nhận khi con có lựa chọn khác với kỳ vọng
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            <span>Ít thể hiện tình cảm bằng lời nói</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-amber-100 p-5 rounded-lg border-l-4 border-amber-500">
                        <p className="italic text-gray-700">
                          "Dù có đôi chút nghiêm khắc, các bậc cha mẹ ISFJ luôn
                          yêu thương con vô điều kiện. Họ sẵn sàng hỗ trợ con
                          theo cách của riêng mình, ngay cả khi con chọn con
                          đường khác với mong đợi."
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
                      "ISFJ mang đến sự ấm áp và ổn định trong mọi mối quan hệ.
                      Họ yêu thương bằng cách chăm sóc, hy sinh thầm lặng và
                      luôn đặt người khác lên hàng đầu. Để hạnh phúc trọn vẹn,
                      ISFJ cần học cách cân bằng giữa cho đi và nhận lại."
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
                    <span className="text-pink-600">
                      NGƯỜI NUÔI DƯỠNG (ISFJ)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    ISFJ - Nhóm tính cách "Người bảo vệ" (13% dân số) với lòng
                    trắc ẩn sâu sắc và tinh thần phục vụ tận tâm
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
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-pink-800 mb-3">
                        Nguyên tắc vàng khi tiếp cận ISFJ
                      </h3>
                      <p className="text-gray-700">
                        ISFJ đánh giá cao sự chân thành, lòng biết ơn và tôn
                        trọng không gian cá nhân. Họ nhạy cảm với sự giả tạo và
                        cần thời gian để mở lòng. Để xây dựng mối quan hệ với
                        ISFJ, điều quan trọng nhất là:
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connection Strategies */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
                    Chiến lược kết nối sâu sắc
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
                              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Thể hiện sự trân trọng
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Cảm ơn họ bằng lời nói và hành động cụ thể</li>
                            <li>Ghi nhận những đóng góp thầm lặng của họ</li>
                            <li>Khen ngợi chân thành về phẩm chất tốt</li>
                            <li>
                              Đáp lại lòng tốt của họ bằng sự quan tâm thực sự
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
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Lắng nghe chủ động
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Khuyến khích họ chia sẻ cảm xúc thật</li>
                            <li>Đặt câu hỏi về sở thích và giá trị cá nhân</li>
                            <li>Ghi nhớ các chi tiết nhỏ họ từng đề cập</li>
                            <li>Tránh phán xét khi họ mở lòng</li>
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
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Tôn trọng không gian
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Không ép họ tham gia sự kiện đông người</li>
                            <li>Cho họ thời gian riêng để nạp năng lượng</li>
                            <li>Luôn báo trước khi muốn gặp mặt</li>
                            <li>Hiểu khi họ cần im lặng</li>
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
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Hành động thiết thực
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Giúp đỡ họ khi thấy họ quá tải</li>
                            <li>Tặng quà có ý nghĩa sử dụng</li>
                            <li>Nhớ ngày quan trọng của họ</li>
                            <li>Thể hiện quan tâm qua việc nhỏ hàng ngày</li>
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
                              Chủ động hỏi về nhu cầu và cảm xúc của họ
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Tạo không gian yên tĩnh cho các cuộc trò chuyện
                              sâu
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Để họ có thời gian suy nghĩ trước khi quyết định
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-green-500">
                              ✓
                            </div>
                            <span className="text-gray-700">
                              Thể hiện sự biết ơn cụ thể bằng hành động
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
                              Phớt lờ hoặc xem nhẹ sự giúp đỡ của họ
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Ép họ tham gia các hoạt động xã hội ồn ào
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Chỉ trích hoặc làm họ xấu hổ trước đám đông
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2 text-red-500">
                              ✗
                            </div>
                            <span className="text-gray-700">
                              Lợi dụng lòng tốt của họ một cách thường xuyên
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
                    Lời khuyên từ trái tim
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Xây dựng mối quan hệ với ISFJ là một hành trình cần sự kiên
                    nhẫn và chân thành. Một khi đã mở lòng, họ sẽ là người bạn
                    trọn đời tận tâm, luôn sẵn sàng hy sinh vì người mình yêu
                    quý. Hãy trân trọng sự dịu dàng và ấm áp mà họ mang đến cho
                    cuộc đời bạn.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="italic text-gray-700">
                      "Tình yêu của ISFJ không phô trương nhưng sâu sắc vô cùng.
                      Họ yêu bằng hành động hơn lời nói, bằng sự chăm chút tỉ mỉ
                      hàng ngày hơn những cử chỉ lớn lao."
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
                    <span className="text-rose-600">
                      NGƯỜI NUÔI DƯỠNG (ISFJ)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    ISFJ - Những người hỗ trợ đáng tin cậy với trái tim nhân hậu
                    và tinh thần trách nhiệm cao
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      "ISFJ xây dựng sự nghiệp bằng sự tận tâm và chu đáo"
                    </h3>
                    <p className="text-rose-100">
                      Những người nuôi dưỡng này luôn tìm kiếm công việc có ý
                      nghĩa, nơi họ có thể chăm sóc và hỗ trợ người khác bằng
                      tài năng tổ chức và sự nhạy cảm của mình
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
                          Giai đoạn khởi đầu: Học hỏi và hỗ trợ
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Khi mới bước vào sự nghiệp, ISFJ tập trung vào việc
                          quan sát và học hỏi nhu cầu của người khác. Họ xuất
                          sắc trong các vị trí hỗ trợ, nơi có thể phát huy sự
                          chu đáo và tỉ mỉ.
                        </p>
                        <div className="bg-rose-50 p-4 rounded-lg">
                          <p className="italic text-gray-700">
                            "ISFJ cần thời gian để hiểu rõ hệ thống làm việc,
                            nhưng một khi đã quen, họ trở thành nhân viên không
                            thể thiếu nhờ sự đáng tin cậy và tận tâm"
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
                          Giai đoạn bứt phá: Người chăm sóc đáng tin cậy
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Sau khi tích lũy kinh nghiệm, ISFJ trở thành chuyên
                          gia trong việc đáp ứng nhu cầu người khác. Họ được tin
                          tưởng giao những nhiệm vụ quan trọng nhờ sự chu đáo và
                          khả năng tổ chức.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-rose-100 text-rose-800 text-xs px-3 py-1 rounded-full">
                            Chăm sóc tận tâm
                          </span>
                          <span className="bg-rose-100 text-rose-800 text-xs px-3 py-1 rounded-full">
                            Tổ chức xuất sắc
                          </span>
                          <span className="bg-rose-100 text-rose-800 text-xs px-3 py-1 rounded-full">
                            Độ tin cậy cao
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
                          Giai đoạn chín muồi: Lãnh đạo nuôi dưỡng
                        </h4>
                        <p className="text-gray-700">
                          Ở đỉnh cao sự nghiệp, ISFJ trở thành những nhà lãnh
                          đạo biết quan tâm. Họ xây dựng môi trường làm việc hài
                          hòa và hỗ trợ sự phát triển của từng thành viên.
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Quan sát và thấu hiểu
                          </h4>
                          <p className="text-gray-700">
                            Khả năng nhận biết nhu cầu chưa được nói ra của
                            người khác và chủ động đáp ứng.
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
                            Tổ chức và kiên nhẫn
                          </h4>
                          <p className="text-gray-700">
                            Khả năng sắp xếp công việc hệ thống và kiên trì với
                            các nhiệm vụ tỉ mỉ.
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
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Thực tế và chi tiết
                          </h4>
                          <p className="text-gray-700">
                            Chú ý đến từng chi tiết nhỏ và tập trung vào giải
                            pháp thiết thực.
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
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Hỗ trợ và hợp tác
                          </h4>
                          <p className="text-gray-700">
                            Luôn sẵn sàng giúp đỡ đồng nghiệp và làm việc nhóm
                            hiệu quả.
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
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-rose-700">
                          Chăm sóc sức khỏe
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Y tá
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Bác sĩ
                          tâm lý
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Dược sĩ
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Nhà trị
                          liệu
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
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-rose-700">
                          Giáo dục & Tư vấn
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Giáo
                          viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Cố vấn
                          học đường
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Công tác
                          xã hội
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Thủ thư
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
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-rose-700">
                          Hành chính & Sáng tạo
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Trợ lý
                          giám đốc
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Quản lý
                          hành chính
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Thiết kế
                          nội thất
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span> Kế toán
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
                    ISFJ nên tránh những môi trường công việc:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Cạnh tranh khốc liệt và thiếu sự hỗ trợ đồng nghiệp</li>
                    <li>
                      Đòi hỏi phải đưa ra quyết định nhanh chóng mà không có đủ
                      thông tin
                    </li>
                    <li>
                      Yêu cầu phê phán hoặc đối đầu với người khác thường xuyên
                    </li>
                    <li>Thiếu cấu trúc rõ ràng và quy trình làm việc</li>
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
                          Giai đoạn hỗ trợ (0-5 năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Phát triển kỹ năng chăm sóc và hỗ trợ, học hỏi quy
                          trình làm việc
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-rose-500 font-bold">
                        2.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn chuyên môn (5-10 năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Trở thành chuyên gia trong lĩnh vực, đảm nhận vị trí
                          quản lý đội nhóm
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-rose-500 font-bold">
                        3.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn dẫn dắt (10+ năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Đảm nhiệm vị trí lãnh đạo, xây dựng môi trường làm
                          việc hỗ trợ và phát triển
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
                <h2 className="text-3xl font-bold text-pink-700 mb-6 border-b-2 border-pink-100 pb-4">
                  PHONG CÁCH LÀM VIỆC CỦA ISFJ
                </h2>

                {/* Introduction */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    ISFJ tỏa sáng trong môi trường làm việc cho phép họ hỗ trợ
                    và chăm sóc người khác. Với lòng trắc ẩn sâu sắc và tinh
                    thần trách nhiệm cao, họ xuất sắc trong các vai trò đòi hỏi
                    sự kiên nhẫn, tỉ mỉ và thấu hiểu nhu cầu con người.
                  </p>
                </div>

                {/* As Employees Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-pink-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-pink-600">
                      ISFJ khi là nhân viên
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Điểm mạnh nổi bật
                      </h4>
                      <p className="text-gray-700">
                        Làm việc tận tâm, không ngại hy sinh vì tập thể. Luôn
                        chú ý đến chi tiết và đảm bảo công việc được hoàn thành
                        chu đáo. Đặc biệt giỏi trong các công việc chăm sóc, hỗ
                        trợ người khác.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Thách thức
                      </h4>
                      <p className="text-gray-700">
                        Khiêm tốn quá mức khiến thành tích bị lu mờ. Khó nói lên
                        nhu cầu bản thân và dễ bị lợi dụng. Cần học cách tự
                        quảng bá và thiết lập ranh giới lành mạnh.
                      </p>
                    </div>
                  </div>

                  <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
                    <p className="italic text-gray-700">
                      "ISFJ là nhân viên 'thầm lặng' nhưng không thể thiếu. Họ
                      không đòi hỏi sự công nhận nhưng luôn là trụ cột đáng tin
                      cậy của tổ chức."
                    </p>
                  </div>
                </div>

                {/* As Colleagues Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-pink-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-pink-600">
                      ISFJ khi là đồng nghiệp
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Giá trị mang lại
                      </h4>
                      <p className="text-gray-700">
                        Luôn sẵn lòng giúp đỡ mà không tính toán. Tạo bầu không
                        khí hòa hợp trong nhóm. Nhớ những chi tiết nhỏ về đồng
                        nghiệp và quan tâm chân thành.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Điều cần lưu ý
                      </h4>
                      <p className="text-gray-700">
                        Dễ bị tổn thương bởi xung đột hoặc lời nói thiếu tế nhị.
                        Có xu hướng ôm đồm việc thay vì nhờ hỗ trợ. Cần được
                        động viên chia sẻ ý kiến cá nhân.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 mt-1 mr-3 text-pink-500 text-xl">
                      💞
                    </div>
                    <div>
                      <p className="text-gray-700">
                        "Đồng nghiệp ISFJ giống như 'người giữ lửa' của nhóm -
                        âm thầm gắn kết mọi người bằng sự quan tâm chân thành và
                        những hành động nhỏ đầy ấm áp."
                      </p>
                    </div>
                  </div>
                </div>

                {/* As Managers Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-pink-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-pink-600">
                      ISFJ khi làm quản lý
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Phong cách lãnh đạo
                      </h4>
                      <p className="text-gray-700">
                        Quản lý bằng sự đồng cảm và hỗ trợ. Tạo môi trường làm
                        việc ấm áp, gắn kết. Luôn sẵn sàng hướng dẫn tỉ mỉ và
                        công nhận nỗ lực của nhân viên.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Ưu tiên
                      </h4>
                      <p className="text-gray-700">
                        Đánh giá cao nhân viên trung thành, tận tâm. Chú trọng
                        hạnh phúc và phát triển của từng thành viên. Khó đưa ra
                        quyết định cứng rắn khi cần thiết.
                      </p>
                    </div>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3 text-pink-500">✨</div>
                      <div>
                        <p className="text-gray-700 font-medium">
                          Lời khuyên cho lãnh đạo ISFJ: Đừng ngại thể hiện uy
                          quyền khi cần. Sự dịu dàng là thế mạnh, nhưng đôi khi
                          cần cứng rắn để bảo vệ đội nhóm và hoàn thành mục
                          tiêu.
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
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">Chăm sóc & Y tế</h4>
                      <p className="text-sm">
                        Y tá, Bác sĩ, Vật lý trị liệu, Tư vấn tâm lý
                      </p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">Giáo dục & Cố vấn</h4>
                      <p className="text-sm">
                        Giáo viên, Cố vấn học đường, Quản lý giáo dục
                      </p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Hỗ trợ & Hành chính
                      </h4>
                      <p className="text-sm">
                        HR, Trợ lý, Quản lý văn phòng, CSKH
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-pink-100 text-sm">
                    <p>
                      ISFJ phát triển mạnh trong môi trường cho phép họ kết nối
                      con người và mang lại giá trị thực tế cho cộng đồng.
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
                    <span className="text-pink-600">
                      NGƯỜI NUÔI DƯỠNG (ISFJ)
                    </span>{" "}
                    VỚI
                    <span className="text-purple-600">
                      {" "}
                      NGƯỜI CHE CHỞ (INFJ)
                    </span>{" "}
                    VÀ
                    <span className="text-orange-500">
                      {" "}
                      NGƯỜI QUAN TÂM (ESFJ)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Phân tích sâu về 3 nhóm tính cách thuộc nhóm "Người bảo vệ
                    tâm hồn" - những người giàu lòng trắc ẩn và tận tâm
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    Điểm chung cốt lõi của bộ ba Trái tim - Nguyên tắc (Fe/Fi +
                    Si/Ni)
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-pink-100 text-pink-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          F
                        </div>
                        <h4 className="font-bold text-gray-800">
                          Quyết định bằng cảm xúc
                        </h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Cả ba đều coi trọng giá trị con người và hòa hợp trong
                        các mối quan hệ
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-pink-100 text-pink-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          J
                        </div>
                        <h4 className="font-bold text-gray-800">Nguyên tắc</h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Có kế hoạch rõ ràng và tuân thủ các cam kết đã đặt ra
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-pink-100 text-pink-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          ❤
                        </div>
                        <h4 className="font-bold text-gray-800">
                          Tận tâm chăm sóc
                        </h4>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Luôn sẵn sàng giúp đỡ và quan tâm đến nhu cầu của người
                        khác
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pair Comparisons */}
                <div className="space-y-10">
                  {/* ISFJ vs INFJ */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-2 h-10 mr-3 rounded-full"></div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        <span className="text-pink-600">ISFJ</span> vs{" "}
                        <span className="text-purple-600">INFJ</span>:
                        <span className="text-sm font-normal ml-2">
                          Người nuôi dưỡng thực tế vs Người che chở tầm nhìn
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
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                          Tương đồng chính
                        </h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Đều là người hướng nội và nhạy cảm</li>
                          <li>Có xu hướng kìm nén cảm xúc cá nhân</li>
                          <li>Né tránh xung đột trực tiếp</li>
                          <li>Hướng đến công việc ý nghĩa giúp đỡ cộng đồng</li>
                          <li>Cần thời gian riêng để nạp năng lượng</li>
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
                              Nhận thức thế giới
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ISFJ (S) tập trung vào chi tiết cụ thể, INFJ (N)
                              hướng đến bức tranh tổng thể và ý nghĩa sâu xa
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Tiêu chuẩn quan hệ
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ISFJ dễ kết nối hơn, INFJ kén chọn và đòi hỏi sự
                              kết nối tâm hồn sâu sắc
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Công việc lý tưởng
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ISFJ phù hợp công việc thực tế, INFJ thiên về các
                              lĩnh vực sáng tạo và triết lý
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
                      <p className="italic text-gray-700">
                        "ISFJ như một người làm vườn chăm chút từng bông hoa,
                        INFJ như một nhà tiên tri thấu hiểu quy luật của khu
                        vườn. Cả hai đều yêu thiên nhiên nhưng với cách tiếp cận
                        khác biệt."
                      </p>
                    </div>
                  </div>

                  {/* ISFJ vs ESFJ */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-2 h-10 mr-3 rounded-full"></div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        <span className="text-pink-600">ISFJ</span> vs{" "}
                        <span className="text-orange-500">ESFJ</span>:
                        <span className="text-sm font-normal ml-2">
                          Người hỗ trợ âm thầm vs Người kết nối nhiệt tình
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
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                          Tương đồng chính
                        </h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Đều coi trọng sự ổn định và an toàn</li>
                          <li>
                            Có tinh thần trách nhiệm cao với gia đình và cộng
                            đồng
                          </li>
                          <li>Quan tâm đến nhu cầu thực tế của người khác</li>
                          <li>Thích môi trường có cấu trúc rõ ràng</li>
                          <li>Đánh giá cao các giá trị truyền thống</li>
                        </ul>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 text-orange-500 mr-2"
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
                              ISFJ (I) cần không gian riêng, ESFJ (E) được tiếp
                              thêm năng lượng từ tương tác xã hội
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Cách cho đi
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ISFJ cho đi vô điều kiện, ESFJ mong đợi sự đáp lại
                              tương xứng
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-1">
                              Phong cách lãnh đạo
                            </h5>
                            <p className="text-gray-700 text-sm">
                              ISFJ lãnh đạo bằng gương mẫu, ESFJ chủ động chỉ
                              đạo và giao tiếp rõ ràng
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                      <p className="italic text-gray-700">
                        "ISFJ như một người mẹ âm thầm chăm lo từng bữa ăn, ESFJ
                        như một người tổ chức nhiệt tình các buổi sum họp. Cả
                        hai đều nuôi dưỡng gia đình nhưng với cách thể hiện khác
                        biệt."
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
                            ISFJ
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            INFJ
                          </th>
                          <th className="py-3 px-4 text-left font-semibold">
                            ESFJ
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
                            Cảm nhận nội tâm (Si) + Cảm xúc hướng ngoại (Fe)
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Trực giác nội tâm (Ni) + Cảm xúc hướng ngoại (Fe)
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Cảm xúc hướng ngoại (Fe) + Cảm nhận nội tâm (Si)
                          </td>
                        </tr>
                        {/* Row 2 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Phong cách làm việc
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-pink-50">
                            Tỉ mỉ, chu đáo, tập trung vào nhu cầu cụ thể
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-purple-50">
                            Sáng tạo, tầm nhìn, hướng đến ý nghĩa sâu xa
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-orange-50">
                            Nhiệt tình, tổ chức, chú trọng hòa hợp nhóm
                          </td>
                        </tr>
                        {/* Row 3 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                            Trong quan hệ
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Ân cần, khiêm tốn, ít đòi hỏi
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Sâu sắc, chọn lọc, kết nối tâm hồn
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Nồng nhiệt, rộng mở, mong đợi đáp trả
                          </td>
                        </tr>
                        {/* Row 4 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Ưu thế nghề nghiệp
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-pink-50">
                            Y tá, giáo viên, quản lý văn phòng
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-purple-50">
                            Nhà tâm lý, cố vấn, nhà văn
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-orange-50">
                            Quản lý nhân sự, tổ chức sự kiện, bác sĩ
                          </td>
                        </tr>
                        {/* Row 5 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                            Điểm mạnh
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Thực tế, kiên nhẫn, trung thành
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Sâu sắc, sáng tạo, có tầm nhìn
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            Nhiệt tình, tổ chức, giao tiếp tốt
                          </td>
                        </tr>
                        {/* Row 6 */}
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-700">
                            Điểm yếu
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-pink-50">
                            Dễ bị lợi dụng, khó nói không
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-purple-50">
                            Quá lý tưởng, dễ kiệt sức
                          </td>
                          <td className="py-3 px-4 text-gray-600 bg-orange-50">
                            Quá quan tâm đến đánh giá bên ngoài
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
                    {/* ISFJ Column */}
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
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-pink-700">ISFJ</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Y
                          tá/Điều dưỡng
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Giáo
                          viên mầm non
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Quản lý
                          văn phòng
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Nhân
                          viên xã hội
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span> Thủ thư
                        </li>
                      </ul>
                    </div>

                    {/* INFJ Column */}
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
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-purple-700">INFJ</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Nhà
                          tâm lý học
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Cố vấn
                          tâm lý
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Nhà
                          văn/Nhà báo
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Giáo
                          viên tâm lý
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Nhà
                          hoạt động xã hội
                        </li>
                      </ul>
                    </div>

                    {/* ESFJ Column */}
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
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-orange-700">ESFJ</h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span> Quản
                          lý nhân sự
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span> Bác sĩ
                          gia đình
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span> Tổ
                          chức sự kiện
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span> Giáo
                          viên tiểu học
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span> Quản
                          lý khách sạn
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
                    ISFJ, INFJ và ESFJ đều là những nhóm tính cách giàu lòng
                    trắc ẩn và tận tâm, nhưng mỗi nhóm có thế mạnh riêng:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                    <li>
                      <span className="font-medium">ISFJ</span> - Người nuôi
                      dưỡng thực tế với sự kiên nhẫn vô hạn
                    </li>
                    <li>
                      <span className="font-medium">INFJ</span> - Người dẫn
                      đường tâm linh với tầm nhìn sâu rộng
                    </li>
                    <li>
                      <span className="font-medium">ESFJ</span> - Người kết nối
                      nhiệt thành với năng lượng xã hội
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Sự khác biệt chính nằm ở cách họ tiếp cận thế giới: ISFJ với
                    sự tỉ mỉ và khiêm tốn, INFJ với chiều sâu và sáng tạo, ESFJ
                    với sự nhiệt tình và tổ chức. Hiểu rõ những khác biệt này
                    giúp mỗi nhóm phát huy tối đa tiềm năng của mình.
                  </p>
                </div>
              </div>
            )}
            {activeSection === "advice" && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Main Header */}
                <h2 className="text-3xl font-bold text-rose-700 mb-8 border-b-2 border-rose-100 pb-4">
                  LỜI KHUYÊN PHÁT TRIỂN DÀNH CHO NGƯỜI NUÔI DƯỠNG (ISFJ)
                </h2>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-rose-800 to-pink-900 p-8 rounded-lg mb-10 text-white">
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
                      Hành trình cân bằng cho trái tim nhân hậu
                    </h3>
                    <p className="text-rose-200">
                      Là những người chu đáo và tận tâm, ISFJ cần học cách cân
                      bằng giữa chăm sóc người khác và yêu thương bản thân để có
                      cuộc sống viên mãn.
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
                      Tận dụng tối đa khả năng quan tâm và hỗ trợ của bạn:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Duy trì sự chu đáo và tận tâm với mọi người</li>
                      <li>
                        Phát huy khả năng quan sát và thấu hiểu nhu cầu người
                        khác
                      </li>
                      <li>Xây dựng môi trường hài hòa, ổn định xung quanh</li>
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
                      Những điều ISFJ cần lưu ý để phát triển:
                    </p>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="italic text-gray-700">
                        "Yêu thương người khác bắt đầu từ việc yêu thương chính
                        mình"
                      </p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Học cách nói "không" khi cần thiết</li>
                      <li>Đừng quá khắt khe với bản thân</li>
                      <li>Chia sẻ cảm xúc thay vì kìm nén</li>
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
                            Mở rộng thế giới quan
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Dành thời gian khám phá điều mới mỗi tuần</li>
                            <li>Tiếp xúc với những góc nhìn khác biệt</li>
                            <li>Tham gia hoạt động cộng đồng</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-rose-100 shadow-sm">
                          <h4 className="font-semibold text-rose-700 mb-2">
                            Biểu đạt cảm xúc
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Tập thói quen viết nhật ký cảm xúc</li>
                            <li>Chia sẻ suy nghĩ với người tin cậy</li>
                            <li>Học cách nhận sự giúp đỡ từ người khác</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Self-Care Section */}
                <div className="mb-10">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 bg-pink-50 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-sm">
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
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-pink-700">
                          Chăm sóc bản thân
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        ISFJ thường quên dành thời gian cho chính mình:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Thiết lập ranh giới
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Học cách từ chối khéo léo</li>
                            <li>Đừng ôm đồm quá nhiều việc</li>
                            <li>Dành thời gian riêng tư mỗi ngày</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Nuôi dưỡng bản thân
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Tự thưởng cho bản thân những điều nhỏ bé</li>
                            <li>Theo đuổi sở thích cá nhân</li>
                            <li>Đừng quá khắt khe với chính mình</li>
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
                                Thử điều mới mỗi tháng
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Mỗi tháng thử một trải nghiệm hoàn toàn mới
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-rose-100 text-rose-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              2
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Tự chăm sóc bản thân
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Mỗi tuần dành 1 ngày chỉ tập trung vào nhu cầu
                                của bản thân
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-rose-100 text-rose-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              3
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Nhật ký biết ơn
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Mỗi tối ghi lại 3 điều bạn cảm thấy biết ơn về
                                bản thân
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Encouragement */}
                <div className="bg-gradient-to-r from-rose-900 to-pink-800 p-8 rounded-lg text-white">
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
                      Sức mạnh của Người Nuôi Dưỡng
                    </h3>
                    <p className="mb-4 text-rose-100">
                      Bạn được ban tặng trái tim nhân hậu, sự chu đáo và tinh
                      thần trách nhiệm hiếm có. Khi học cách cân bằng giữa cho
                      đi và nhận lại, bạn sẽ tỏa sáng rực rỡ và lan tỏa năng
                      lượng tích cực đến mọi người xung quanh.
                    </p>
                    <div className="bg-pink-700 bg-opacity-30 p-4 rounded-lg inline-block">
                      <p className="font-medium">
                        "Thế giới cần những người như bạn - những người biết
                        quan tâm và thấu hiểu. Hãy nhớ rằng để chăm sóc người
                        khác tốt nhất, trước hết bạn cần chăm sóc chính mình."
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
export default ISFJPage;
