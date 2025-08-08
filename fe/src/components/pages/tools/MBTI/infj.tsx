import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faPen, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const handleCopyLink = () => {
  const url = "http://localhost:5173/tools/mbti/tinh-cach/infj";
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Đã sao chép liên kết!");
    })
    .catch((err) => {
      console.error("Lỗi khi sao chép liên kết:", err);
    });
};
const INFJPage = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Tổng quan" },
    { id: "strengths-weaknesses", title: "Điểm mạnh và điểm yếu" },
    { id: "relationship", title: "Mối quan hệ" },
    { id: "how-to-be-close", title: "Làm sao để thân thiết với INFJ" },
    { id: "career-path", title: "Con đường sự nghiệp" },
    { id: "workplace-habits", title: "Thói quen nơi công sở" },
    { id: "compare", title: "So sánh INFJ với ENFJ, INFP" },
    { id: "advice", title: "Lời khuyên dành cho INFJ" },
  ];

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="infj-page bg-gradient-to-b from-blue-50 to-purple-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumb */}

        {/* Header */}
        <div className="mbti-result-header bg-white rounded-xl shadow-md p-6 mb-8 relative">
  {/* Back to MBTI Home button */}
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
        INFJ - Người che chở
      </h1>
    </div>
    <div className="relative w-full">
      <img
        src="/mbti_icons/infj1.png"
        alt="INFJ - Người lý tưởng hóa"
        className="pointer w-full h-120 object-cover rounded-lg shadow "
      />
    </div>

    {/* Description */}
    <div className="text-lg text-gray-700 max-w-4xl text-center">
      INFJ là những người có tư duy sâu sắc và vô cùng nhạy bén trong
      việc nắm bắt tâm lý của người khác. Họ sở hữu lòng trắc ẩn vĩ đại,
      tràn đầy khát vọng mãnh liệt về một thế giới tốt đẹp hơn. Chính vì
      vậy, các INFJ luôn đặt tâm huyết vào việc xây dựng mối quan hệ,
      coi việc giúp đỡ, động viên người khác như một phần không thể
      thiếu trong cuộc sống.
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
                    TỔNG QUAN TÍNH CÁCH INFJ
                  </h2>
                  <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
                </div>

                {/* Introduction */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    INFJ (Người che chở) là những người có tư duy sâu sắc và vô
                    cùng nhạy bén trong việc nắm bắt tâm lý của người khác. Họ
                    sở hữu lòng trắc ẩn vĩ đại, tràn đầy khát vọng mãnh liệt về
                    một thế giới tốt đẹp hơn. Chính vì vậy, các INFJ luôn đặt
                    tâm huyết vào việc xây dựng mối quan hệ, coi việc giúp đỡ,
                    động viên người khác như một phần không thể thiếu trong cuộc
                    sống.
                  </p>
                </div>

                {/* MBTI Breakdown */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
                    Ý NGHĨA 4 CHỮ CÁI INFJ
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "● I - Hướng nội (Introverted)",
                        color: "bg-indigo-100",
                        textColor: "text-indigo-800",
                        content:
                          "Đối với những người thuộc nhóm tính cách INFJ, thế giới ẩn sâu bên trong mỗi chúng ta mới là thế giới thật. Ngược lại, thế giới bên ngoài là nơi thuộc về những người E - Hướng ngoại.",
                      },
                      {
                        title: "● N - Trực giác (Intuitive)",
                        color: "bg-purple-100",
                        textColor: "text-purple-800",
                        content:
                          "INFJ tập trung vào ý nghĩa của sự vật, sự việc, khác với những người có tính cách S - Giác quan sử dụng cả năm giác quan thị giác, thính giác, khứu giác, vị giác, cảm giác để nhìn nhận và đánh giá.",
                      },
                      {
                        title: "● F - Cảm xúc (Feeling)",
                        color: "bg-pink-100",
                        textColor: "text-pink-800",
                        content:
                          "INFJ đưa ra quyết định chủ yếu dựa trên cảm nhận cá nhân. Ngược lại, những người có tính cách T - Lý trí lại đưa ra quyết định dựa vào số liệu và đo lường chính xác.",
                      },
                      {
                        title: "● J - Nguyên tắc (Judging)",
                        color: "bg-teal-100",
                        textColor: "text-teal-800",
                        content:
                          "INFJ dựa vào cấu trúc sẵn có để thoải mái đưa ra quan điểm mà không phải mất công suy xét nhiều. Trong khi đó, những người thiên về tính cách P - Linh hoạt lại thích môi trường tự do và họ sẽ tự sắp đặt quy tắc bên trong cho mình.",
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
                      title: "Trực giác mạnh mẽ",
                      icon: "🔮",
                      content:
                        "Các INFJ tập trung vào cuộc sống nội tâm bên trong, suy nghĩ và đánh giá sự việc thông qua trực giác. Mặt khác, họ cũng đánh giá sự việc bằng cách cảm nhận thực tế thông qua các giác quan, tuy nhiên điều này thường hiếm khi xảy ra bởi các INFJ thường thiên về tính cách N (Trực giác).",
                    },
                    {
                      title: "Trật tự và ngăn nắp",
                      icon: "📅",
                      content:
                        "Các INFJ thích sự trật tự và ngăn nắp. Trước khi bắt tay vào làm một việc gì đó, những người thuộc nhóm tính cách INFJ sẽ dành thời gian để phân tích mức độ ưu tiên, liệt kê ra các biện pháp thực hiện cũng như phương án dự phòng thích hợp, sắp xếp các bước tiến hành, từ đó cho ra đáp án tối ưu nhất kể cả về mặt hiệu quả lẫn năng suất. Tuy nhiên, bởi sâu thẳm trong thâm tâm các INFJ vẫn bị tính cách N (Trực giác) ảnh hưởng rất nhiều, nên đôi khi họ sẽ vô thức làm ra những hành động có phần “nổi loạn”, hoàn toàn không đi theo bất cứ trật tự, quy tắc nào mà họ đã vẽ ra.",
                    },
                    {
                      title: "Trong nóng ngoài lạnh",
                      icon: "🔥❄️",
                      content:
                        "Tuy tâm hồn có phần “hỗn loạn” nhưng các INFJ là những người vô cùng ấm áp, “trong nóng ngoài lạnh”, tuy thờ ơ ở mặt ngoài như trong lòng lại đang dậy sóng. Đối với những người thân cận, các INFJ luôn chiếm một vị trí đặc biệt không thể thay thế. Các INFJ biết đặt mình vào góc nhìn của người khác và luôn cố gắng để không làm phật lòng bất cứ ai. Họ luôn né tránh xung đột ở mức tối đa bởi những cuộc cãi vã sẽ khiến các INFJ rơi vào tâm trạng nóng nảy, bực bội, ảnh hưởng tới sức khỏe tinh thần trong một thời gian dài.",
                    },

                    {
                      title: "Cầu toàn và tham vọng",
                      icon: "🎯",
                      content: `Tính trực giác trong mỗi INFJ mạnh mẽ tới mức đôi khi họ sẽ bỏ ngoài tai những ý kiến đóng góp của người khác và chỉ khăng khăng nghe theo con tim mình. Họ cũng là những người cầu toàn và tham vọng, luôn tự hỏi xem bản thân đã đạt tới giới hạn của bản thân hay chưa. Các INFJ không bao giờ cảm thấy là đủ, họ muốn không ngừng học hỏi và phát triển bản thân, không bao giờ thỏa hiệp với “tôi” ở hiện tại. Và để đạt được điều đó, những người thuộc nhóm tính cách INFJ sẽ đặt ra những quy định, nguyên tắc cho chính bản thân mình.`,
                    },
                  ].map((section, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-300"
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
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-indigo-700 mb-4">
                      INFJ trong vai trò phụ huynh
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Các INFJ là những bậc phụ huynh rất kiên nhẫn, tận tụy và
                      yêu thương con cái. Họ đặt kỳ vọng cao vào những đứa trẻ,
                      hướng chúng đạt tới những thành tựu cao nhất trong cuộc
                      sống. Họ có thể dành nhiều giờ, thậm chí là nhiều ngày để
                      từng bước hướng dẫn con cái hoàn thành một công việc nào
                      đó. Nhưng cũng vì vậy mà đôi khi những phụ huynh thuộc
                      nhóm tính cách INFJ bị coi là khó tính và khắt khe.
                    </p>
                  </div>

                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-pink-700 mb-4">
                      INFJ trong công việc
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Ở nơi làm việc, các nhiệm vụ liên quan tới sáng tạo (đặc
                      biệt khi công việc ấy cho phép họ làm việc một mình) là
                      nơi những người thuộc nhóm tính cách INFJ phát huy được
                      tối đa thế mạnh của mình. Là một người có kỹ năng đàm phán
                      tốt và sự nhạy cảm với từng tiểu tiết trong công việc, các
                      INFJ cũng rất hợp với những công việc trong ngành dịch vụ.
                      Tuy vậy, do quá tập trung vào những chi tiết nhỏ mà các
                      INFJ có thể lỡ mất bức tranh toàn cảnh lớn hơn, quan trọng
                      hơn; lỡ mất những kế hoạch dài hơi mà họ cần chuẩn bị cho
                      những năm sắp tới.
                    </p>
                  </div>
                </div>

                {/* Famous People */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold text-center text-purple-700 mb-6">
                    INFJ NỔI TIẾNG
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        name: "Taylor Swift",
                        role: "Ca sĩ kiêm nhạc sĩ sáng tác bài hát",
                      },
                      { name: "J. K. Rowling", role: "Nhà văn" },
                      { name: "Cate Blanchett", role: "Diễn viên Hollywood" },
                      { name: "Nicole Kidman", role: "Diễn viên và ca sĩ" },
                      { name: "Hilary Duff", role: "Diễn viên và ca sĩ" },
                      {
                        name: "Jeon Wonwoo",
                        role: "Thành viên SEVENTEEN",
                      },
                      {
                        name: "Lee Jihoon - Woozi",
                        role: "Thành viên SEVENTEEN",
                      },
                      {
                        name: "Xu Minghao - THE8",
                        role: "Thành viên SEVENTEEN",
                      },
                    ].map((person, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="h-16 w-16 bg-indigo-200 rounded-full mx-auto mb-3 flex items-center justify-center text-indigo-700 text-xl font-bold">
                          {person.name.charAt(0)}
                        </div>
                        <h4 className="font-bold text-gray-800">
                          {person.name}
                        </h4>
                        <p className="text-sm text-gray-600">{person.role}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final Thought */}
                <div className="bg-indigo-100 p-6 rounded-lg mt-8 text-center">
                  <p className="text-indigo-800 italic font-medium">
                    "INFJ là những người có tầm nhìn xa và luôn khao khát tạo ra
                    sự khác biệt trong thế giới này. Họ là những người bạn đồng
                    hành tuyệt vời, luôn sẵn sàng lắng nghe và thấu hiểu."
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
                    <span className="text-purple-600">
                      NHÓM TÍNH CÁCH INFJ (NGƯỜI CHE CHỞ)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    INFJ - Nhóm tính cách hiếm gặp với trực giác mạnh mẽ, sự sâu
                    sắc và khả năng thấu hiểu con người đặc biệt
                  </p>
                </div>

                {/* Strengths Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-purple-600 flex items-center">
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
                    <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1 ml-4"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Strength 1 - Creative */}
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
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Sáng tạo
                          </h4>
                          <p className="text-gray-700">
                            Người che chở là những người độc đáo và khác biệt,
                            họ liên tục nắm bắt cơ hội để sáng tạo và thể hiện
                            bản thân theo hướng hoàn toàn mới. Với tư duy cởi
                            mở, INFJ sẵn sàng bước ra khỏi vùng an toàn để tìm
                            kiếm những hướng đi táo bạo.
                          </p>
                        </div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg mt-3">
                        <p className="text-sm text-purple-700 italic">
                          "INFJ thường có góc nhìn độc đáo không giống ai, giúp
                          họ tạo ra những giải pháp sáng tạo cho các vấn đề phức
                          tạp"
                        </p>
                      </div>
                    </div>

                    {/* Strength 2 - Insightful */}
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
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Sâu sắc
                          </h4>
                          <p className="text-gray-700">
                            INFJ biết rằng vẻ ngoài có thể đánh lừa thị giác. Họ
                            ưu tiên đào sâu vào cốt lõi vấn đề để thấu hiểu sự
                            việc và con người. Khả năng đọc hiểu cảm xúc và động
                            cơ người khác khiến họ trở thành những người thấu
                            cảm đặc biệt.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                          Thấu hiểu
                        </span>
                        <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                          Trực giác mạnh
                        </span>
                        <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                          Nhìn xa trông rộng
                        </span>
                      </div>
                    </div>

                    {/* Strength 3 - Principled */}
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Có nguyên tắc
                          </h4>
                          <p className="text-gray-700">
                            INFJ đặt niềm tin vào các giá trị đạo đức vững chắc.
                            Khi thảo luận về vấn đề họ quan tâm, họ truyền tải
                            bằng cả niềm tin và lý tưởng một cách chân thành,
                            thẳng thắn, có khả năng thuyết phục ngay cả những
                            người cứng nhắc nhất.
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
                          <span>Mức độ kiên định</span>
                          <span>90% INFJ sống theo nguyên tắc rõ ràng</span>
                        </div>
                      </div>
                    </div>

                    {/* Strength 4 - Passionate */}
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
                              d="M17 13l-5 5m0 0l-5-5m5 5V6"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Sống có đam mê
                          </h4>
                          <p className="text-gray-700">
                            INFJ khao khát một cuộc sống ý nghĩa, có mục đích.
                            Họ không mơ lớn nhưng giấc mơ luôn gắn với những
                            điều đẹp đẽ, quý giá mà họ theo đuổi. Khi tin vào
                            điều gì, họ sẽ cống hiến hết mình với niềm đam mê
                            mãnh liệt.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Biểu hiện:</span>
                          Nhiệt huyết, tận tâm, theo đuổi lý tưởng đến cùng
                        </div>
                      </div>
                    </div>

                    {/* Strength 5 - Altruistic */}
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
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Hướng tới mục tiêu chung
                          </h4>
                          <p className="text-gray-700">
                            INFJ không muốn chiến thắng bằng cách hạ thấp người
                            khác. Họ luôn nghĩ cho lợi ích tập thể và cộng đồng.
                            Với khả năng nhìn thấy bức tranh tổng thể, họ góp
                            phần xây dựng một thế giới tốt đẹp hơn từ những điều
                            nhỏ bé.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                          Vị tha
                        </span>
                        <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                          Cống hiến
                        </span>
                        <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                          Tinh thần cộng đồng
                        </span>
                      </div>
                    </div>

                    {/* Strength 6 - Inspiring */}
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
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Truyền cảm hứng
                          </h4>
                          <p className="text-gray-700">
                            Với sự chân thành và thấu hiểu sâu sắc, INFJ có khả
                            năng truyền cảm hứng mạnh mẽ cho người khác. Họ giúp
                            mọi người nhìn thấy tiềm năng của bản thân và khuyến
                            khích họ phát triển.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 bg-purple-50 p-3 rounded-lg">
                        <p className="text-sm text-purple-700 italic">
                          "INFJ thường trở thành người cố vấn đáng tin cậy nhờ
                          khả năng lắng nghe và đưa ra lời khuyên sâu sắc, chạm
                          đến trái tim người khác"
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
                    <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent flex-1 ml-4"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Weakness 1 - Sensitive to Criticism */}
                    <div className="bg-white p-6 rounded-xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-teal-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-teal-700"
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
                            Nhạy cảm với lời phê bình
                          </h4>
                          <p className="text-gray-700">
                            Khi đầu tư tâm huyết vào ý tưởng hay mối quan hệ,
                            INFJ rất dễ bị tổn thương bởi những lời phê bình, dù
                            nhỏ. Họ coi trọng những điều này như một phần bản
                            thân, nên khi bị chỉ trích sẽ cảm thấy bị phủ nhận
                            giá trị cá nhân.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Gợi ý:</span>
                          Học cách tách biệt giữa phản hồi về công việc và giá
                          trị bản thân
                        </div>
                      </div>
                    </div>

                    {/* Weakness 2 - Private */}
                    <div className="bg-white p-6 rounded-xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-teal-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-teal-700"
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
                            Giấu kín nỗi lòng
                          </h4>
                          <p className="text-gray-700">
                            Dù coi trọng sự trung thực, INFJ lại thường giấu kín
                            cảm xúc và suy nghĩ thật của mình vì không muốn làm
                            phiền người khác. Điều này khiến họ dần trở nên xa
                            cách và mất kết nối với những người thân thiết.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 bg-teal-50 p-3 rounded-lg">
                        <p className="text-sm text-teal-700 italic">
                          "INFJ cần học cách cởi mở hơn về cảm xúc của mình, vì
                          chia sẻ chân thành sẽ giúp các mối quan hệ trở nên sâu
                          sắc hơn"
                        </p>
                      </div>
                    </div>

                    {/* Weakness 3 - Perfectionist */}
                    <div className="bg-white p-6 rounded-xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-teal-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-teal-700"
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
                            Cầu toàn
                          </h4>
                          <p className="text-gray-700">
                            Với lý tưởng cao đẹp, INFJ thường đặt ra tiêu chuẩn
                            không tưởng cho bản thân và người khác. Khi thực tế
                            không đạt được như mong muốn, họ dễ rơi vào thất
                            vọng và tự trách bản thân quá mức.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">
                          Tiêu chuẩn cao
                        </span>
                        <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">
                          Tự phê bình khắc nghiệt
                        </span>
                        <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">
                          Khó chấp nhận sai sót
                        </span>
                      </div>
                    </div>

                    {/* Weakness 4 - Dislike Mundane */}
                    <div className="bg-white p-6 rounded-xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-teal-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-teal-700"
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
                            Không thích những điều bình thường
                          </h4>
                          <p className="text-gray-700">
                            INFJ luôn tìm kiếm những điều phi thường và ý nghĩa
                            sâu sắc. Điều này khiến họ khó hài lòng với cuộc
                            sống thường nhật và dễ bỏ qua những giá trị nhỏ bé
                            nhưng quan trọng trong hiện tại.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-teal-500 rounded-full"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-600 mt-1">
                          <span>Mức độ hài lòng với hiện tại</span>
                          <span>
                            Chỉ 25% INFJ cảm thấy hài lòng với cuộc sống thường
                            ngày
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Weakness 5 - Prone to Burnout */}
                    <div className="bg-white p-6 rounded-xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-teal-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-teal-700"
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
                            Dễ bị kiệt sức
                          </h4>
                          <p className="text-gray-700">
                            Vì luôn cố gắng hoàn hảo và giúp đỡ người khác quá
                            mức, INFJ dễ kiệt sức cả về thể chất lẫn tinh thần.
                            Họ thường không biết cách nhờ giúp đỡ và tự gánh vác
                            mọi thứ một mình.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Giải pháp:</span>
                          Học cách đặt giới hạn, ưu tiên chăm sóc bản thân và
                          chấp nhận sự không hoàn hảo
                        </div>
                      </div>
                    </div>

                    {/* Weakness 6 - Overidealistic */}
                    <div className="bg-white p-6 rounded-xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-teal-100 p-2 rounded-lg mr-4">
                          <svg
                            className="w-6 h-6 text-teal-700"
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
                            Lý tưởng hóa quá mức
                          </h4>
                          <p className="text-gray-700">
                            INFJ thường có kỳ vọng không thực tế về con người và
                            cuộc sống. Khi thực tế không đáp ứng được những kỳ
                            vọng này, họ dễ rơi vào thất vọng và mất niềm tin.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium mr-2">Cải thiện:</span>
                          Cân bằng giữa lý tưởng và thực tế, học cách chấp nhận
                          những khiếm khuyết tự nhiên
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Balance Section */}
                <div className="mt-12 bg-gradient-to-r from-purple-600 to-teal-600 p-8 rounded-xl text-white">
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
                      PHÁT HUY TIỀM NĂNG INFJ
                    </h3>
                    <p className="mb-4 text-purple-100">
                      Sức mạnh thực sự của INFJ nằm ở khả năng kết hợp trực giác
                      sâu sắc với lòng trắc ẩn chân thành. Khi học được cách cân
                      bằng giữa lý tưởng và thực tế, giữa cho đi và nhận lại, họ
                      có thể trở thành những người truyền cảm hứng và thay đổi
                      tích cực cho thế giới.
                    </p>
                    <div className=" bg-opacity-20 p-4 rounded-lg inline-block">
                      <p className="font-medium">
                        "Một INFJ trưởng thành hiểu rằng sự hoàn hảo thực sự nằm
                        ở khả năng chấp nhận những khiếm khuyết. Khi biết yêu
                        thương bản thân và giữ vững niềm tin, họ có thể tỏa sáng
                        theo cách riêng độc đáo của mình."
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
                  <h2 className="text-3xl font-bold text-indigo-800 mb-3">
                    MỐI QUAN HỆ CỦA INFJ
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-indigo-500 mx-auto rounded-full"></div>
                  <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Các INFJ có xu hướng tương đối lý tưởng hóa và mong muốn mọi
                    thứ thật hoàn hảo. Tuy nhiên điều này giống như con dao hai
                    lưỡi, vừa giúp họ tìm thấy người bạn đời lý tưởng nhưng cũng
                    đồng thời khiến mối quan hệ trở nên căng thẳng.
                  </p>
                </div>

                {/* General Relationship Traits */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
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
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>Lý tưởng hóa và mong muốn sự hoàn hảo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>Dễ bị tổn thương khi mối quan hệ đổ vỡ</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>Tìm kiếm sự đồng điệu tâm hồn sâu sắc</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          Khôn ngoan và là "quân sư" đắc lực cho bạn bè
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
                        { type: "ENFJ", desc: "Bổ sung năng lượng và cởi mở" },
                        { type: "ENFP", desc: "Cùng chia sẻ giá trị sống" },
                        { type: "INTJ", desc: "Tôn trọng không gian riêng" },
                        { type: "INFP", desc: "Hiểu được chiều sâu nội tâm" },
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <span className="font-bold text-indigo-600">
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
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl mb-12">
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
                        INFJ TRONG TÌNH YÊU
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Những Người che chở luôn tìm kiếm sự thấu hiểu sâu sắc
                        trong tình yêu. Họ theo đuổi tình yêu đích thực thay vì
                        các mối quan hệ hời hợt.
                      </p>
                      <div className="bg-white bg-opacity-70 p-4 rounded-lg border-l-4 border-pink-400 mb-4">
                        <p className="italic text-gray-700">
                          "Tình yêu của các INFJ sâu sắc tới mức không thể diễn
                          tả bằng lời. Họ khiến nửa kia cảm thấy được trân trọng
                          và quan tâm hết mực."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Tiêu chuẩn cao",
                        icon: "💭",
                        content:
                          "INFJ có tiêu chuẩn rất cao với người yêu tương lai do theo đuổi chủ nghĩa hoàn hảo.",
                      },
                      {
                        title: "Cam kết lâu dài",
                        icon: "💌",
                        content:
                          "Đối với INFJ, tình yêu là cơ hội để học hỏi và trưởng thành, không phải cảm xúc nhất thời.",
                      },
                      {
                        title: "Thách thức",
                        icon: "⚠️",
                        content:
                          "Khi căng thẳng lên cao, INFJ dễ rơi vào trạng thái lạc lõng kiếm tìm tâm hồn đồng điệu.",
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
                    INFJ TRONG TÌNH BẠN
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
                            Chất lượng hơn số lượng
                          </h4>
                          <p className="text-gray-700">
                            INFJ không chấp nhận tình bạn hời hợt. Họ mong chờ
                            tình bạn đích thực, nơi họ có thể là chính mình và
                            chia sẻ đam mê.
                          </p>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-400 mb-6">
                        <p className="italic text-gray-700">
                          "Trong tình bạn, các INFJ không chỉ tìm bạn cho có mà
                          họ cần một người bạn đồng điệu về mặt tâm hồn."
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start mb-6">
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
                            Trung thành và trung thực
                          </h4>
                          <p className="text-gray-700">
                            INFJ luôn ủng hộ bạn bè nhiệt tình. Họ sẵn sàng bảo
                            vệ bạn bè dù không thích thể hiện trước đám đông.
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
                            Kỳ vọng cao
                          </h4>
                          <p className="text-gray-700">
                            INFJ kỳ vọng bạn bè phải trung thực và thẳng thắn.
                            Nếu không, họ sẽ lựa chọn "đường ai nấy đi" ngay lập
                            tức.
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
                    INFJ KHI LÀM CHA MẸ
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {[
                        {
                          title: "Phong cách nuôi dạy",
                          content:
                            "INFJ muốn con cái trở nên độc lập và toàn diện. Họ nghiêm túc trong việc định hình cách sống của con nhưng cũng cho chúng trải nghiệm thế giới.",
                        },
                        {
                          title: "Giá trị cốt lõi",
                          content:
                            "INFJ dạy con về lòng nhân ái, sự chân thành và trách nhiệm. Họ muốn con trở thành người tốt hơn là chỉ đạt thành tích cao.",
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
                              Dễ áp đặt tiêu chuẩn cứng nhắc lên con cái
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>
                              Đau lòng khi con có suy nghĩ đi ngược giá trị quan
                              của họ
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>
                              Mong đợi quá nhiều khiến con chịu áp lực
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-100 p-5 rounded-lg border-l-4 border-green-500">
                        <p className="italic text-gray-700">
                          "Các cha mẹ INFJ muốn con cái lớn lên là những công
                          dân tốt, biết phân biệt đúng sai, và sống đúng với bản
                          ngã của chúng."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Quote */}
                <div className="text-center mt-12">
                  <div className="bg-indigo-100 p-6 rounded-xl inline-block max-w-2xl">
                    <svg
                      className="w-10 h-10 text-indigo-500 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xl font-medium text-indigo-800 mb-2">
                      "INFJ là những người ấm áp và đáng tin cậy, luôn tìm kiếm
                      và xây dựng các mối quan hệ lâu dài, bền chặt dựa trên sự
                      đồng điệu tâm hồn."
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* How to Be Close Section */}
            {activeSection === "how-to-be-close" && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-100 pb-4">
                  LÀM SAO ĐỂ THÂN THIẾT VỚI INFJ?
                </h2>

                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    INFJ là nhóm tính cách nổi bật với đặc điểm: Đặt kỳ vọng rất
                    cao vào đối tượng kết giao, chỉ kiếm tìm những mối quan hệ
                    có sự kết nối sâu sắc về mặt tâm hồn. INFJ tuyệt nhiên không
                    chấp nhận những mối quan hệ hời hợt, không cùng giá trị quan
                    hoặc không trợ giúp họ về bất kỳ khía cạnh nào trong cuộc
                    sống.
                  </p>

                  <p className="text-gray-700 leading-relaxed font-medium bg-blue-50 p-4 rounded-lg">
                    Chính vì vậy, để trở thành một mắt xích quan trọng trong
                    vòng tròn quan hệ của INFJ thì bạn nên thực hiện 4 điều sau:
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Bí quyết kết nối sâu sắc với INFJ:
                    </h3>

                    <div className="space-y-5">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-indigo-500 text-xl">
                          ●
                        </div>
                        <div>
                          <p className="text-gray-700">
                            <span className="font-bold text-indigo-700">
                              Thảo luận rõ về niềm tin và triết lý sống.
                            </span>{" "}
                            Bằng cách này, bạn sẽ nhanh chóng xây dựng được sự
                            hiểu biết sâu sắc với INFJ - điều mà nhóm tính cách
                            này coi trọng nhất. Đừng quên chia sẻ những cảm xúc
                            và trải nghiệm riêng của bạn để cuộc trò chuyện thêm
                            phần ý nghĩa.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-indigo-500 text-xl">
                          ●
                        </div>
                        <div>
                          <p className="text-gray-700">
                            <span className="font-bold text-indigo-700">
                              Chia sẻ trải nghiệm nghệ thuật.
                            </span>{" "}
                            Đa số INFJ đều có niềm đam mê mãnh liệt với nghệ
                            thuật. Hãy chủ động thảo luận hoặc mời họ tham gia
                            trải nghiệm nghệ thuật mà họ quan tâm, cùng phân
                            tích các tác phẩm ý nghĩa.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-indigo-500 text-xl">
                          ●
                        </div>
                        <div>
                          <p className="text-gray-700">
                            <span className="font-bold text-indigo-700">
                              Cùng nhau đương đầu thách thức.
                            </span>{" "}
                            Một mối quan hệ không mang lại giá trị thực tế sẽ
                            không bao giờ được INFJ coi trọng. Bạn phải thể hiện
                            rõ sự hiện diện khi họ đối mặt với khó khăn, nếu
                            không sẽ nhận lại sự lạnh nhạt.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-indigo-500 text-xl">
                          ●
                        </div>
                        <div>
                          <p className="text-gray-700">
                            <span className="font-bold text-indigo-700">
                              Chân thành và kiên nhẫn.
                            </span>{" "}
                            Khi INFJ bảo thủ theo trực giác, hãy tôn trọng góc
                            nhìn của họ nhưng vẫn kiên nhẫn dùng lý lẽ giúp họ
                            nhận thức vấn đề, tránh những quyết định sai lầm do
                            cảm tính.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed italic border-l-4 border-indigo-200 pl-4">
                    Thân thiết với INFJ đòi hỏi sự đầu tư nghiêm túc về thời
                    gian và tâm huyết. Hãy chủ động chia sẻ giá trị sống, đam mê
                    và mục tiêu dài hạn để tạo dựng mối quan hệ đậm tính tương
                    hỗ, vừa ý nghĩa vừa bền chặt.
                  </p>
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
                    <span className="text-indigo-700">
                      NGƯỜI CHE CHỞ (INFJ)
                    </span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    INFJ - Những người lý tưởng hóa với khát khao tạo ra sự thay
                    đổi tích cực cho xã hội
                  </p>
                </div>

                {/* Hero Section */}
                <div className="bg-gradient-to-l from-indigo-500 to-purple-600 p-8 rounded-lg mb-10 text-white">
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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">
                      "INFJ xây dựng sự nghiệp bằng sự đồng cảm và mong muốn
                      cống hiến"
                    </h3>
                    <p className="text-indigo-100">
                      Những người che chở phát triển mạnh trong môi trường có ý
                      nghĩa nhân văn, nơi họ có thể giúp đỡ người khác và phát
                      huy khả năng sáng tạo
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
                          Giai đoạn khởi đầu: Tìm kiếm ý nghĩa
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Khi mới bắt đầu, INFJ thường tìm kiếm công việc phù
                          hợp với giá trị cá nhân. Họ xuất sắc trong các vai trò
                          hỗ trợ, giúp đỡ người khác và thể hiện khả năng thấu
                          hiểu sâu sắc.
                        </p>
                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <p className="italic text-gray-700">
                            "INFJ cần môi trường làm việc có mục đích rõ ràng,
                            nơi họ có thể phát huy khả năng thấu cảm và sáng
                            tạo"
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
                          Sau khi tích lũy kinh nghiệm, INFJ phát triển chuyên
                          môn trong lĩnh vực họ chọn. Họ được đánh giá cao nhờ
                          khả năng kết nối con người và giải quyết vấn đề một
                          cách sáng tạo.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                            Thấu cảm
                          </span>
                          <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                            Sáng tạo
                          </span>
                          <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                            Lý tưởng
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
                          Giai đoạn chín muồi: Lan tỏa giá trị
                        </h4>
                        <p className="text-gray-700">
                          Ở đỉnh cao sự nghiệp, INFJ trở thành những nhà tư vấn,
                          nhà trị liệu, nhà văn hoặc lãnh đạo tinh thần. Họ tạo
                          ra ảnh hưởng tích cực thông qua việc truyền cảm hứng
                          và giúp đỡ cộng đồng.
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
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Thấu hiểu sâu sắc
                          </h4>
                          <p className="text-gray-700">
                            Khả năng đồng cảm và hiểu được nhu cầu thực sự của
                            người khác
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
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Sáng tạo độc đáo
                          </h4>
                          <p className="text-gray-700">
                            Cách tiếp cận vấn đề mới mẻ và khả năng tưởng tượng
                            phong phú
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            Lý tưởng cao đẹp
                          </h4>
                          <p className="text-gray-700">
                            Theo đuổi các giá trị nhân văn và mong muốn cải
                            thiện xã hội
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
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
                            Giao tiếp chân thành
                          </h4>
                          <p className="text-gray-700">
                            Khả năng kết nối sâu sắc và truyền đạt ý tưởng một
                            cách rõ ràng
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
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-indigo-700">
                          Tâm lý & Tư vấn
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Nhà
                          tâm lý học
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Nhà
                          trị liệu
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Cố vấn
                          tinh thần
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Nhân
                          viên công tác xã hội
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
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
                        <h4 className="font-bold text-purple-700">
                          Giáo dục & Sáng tạo
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Giáo
                          viên
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Nhà
                          văn/Nhà thơ
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Nghệ
                          sĩ
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span> Nhà
                          thiết kế
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
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-indigo-700">
                          Y tế & Cộng đồng
                        </h4>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Bác
                          sĩ/Nha sĩ
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Điều
                          dưỡng
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Chuyên
                          gia dinh dưỡng
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span> Nhà
                          hoạt động cộng đồng
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Career Warnings */}
                <div className="mb-12 bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                    Cảnh báo nghề nghiệp
                  </h3>
                  <p className="text-gray-700 mb-4">
                    INFJ nên tránh những môi trường công việc:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Mang tính cạnh tranh khốc liệt, thiếu sự hợp tác</li>
                    <li>Đòi hỏi làm việc độc lập quá nhiều</li>
                    <li>Có cấu trúc cứng nhắc, quy trình máy móc</li>
                    <li>Không có ý nghĩa xã hội rõ ràng</li>
                  </ul>
                </div>

                {/* Career Development */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
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
                          Tìm hiểu bản thân, xác định giá trị cốt lõi và thử
                          nghiệm các lĩnh vực khác nhau
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-indigo-500 font-bold">
                        2.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn chuyên sâu (5-10 năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Phát triển chuyên môn trong lĩnh vực đã chọn, xây dựng
                          uy tín cá nhân
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-indigo-500 font-bold">
                        3.
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Giai đoạn cống hiến (10+ năm)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Tạo ra ảnh hưởng tích cực, truyền cảm hứng và hướng
                          dẫn thế hệ sau
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Quote */}
                <div className="text-center mt-12">
                  <div className="bg-indigo-100 p-6 rounded-xl inline-block max-w-2xl">
                    <svg
                      className="w-10 h-10 text-indigo-500 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xl font-medium text-indigo-800 mb-2">
                      "INFJ xây dựng sự nghiệp bằng sự đồng cảm và lý tưởng cao
                      đẹp. Họ là những người che chở bẩm sinh, luôn hướng tới
                      việc tạo ra giá trị nhân văn. Để phát huy hết tiềm năng,
                      INFJ cần môi trường có ý nghĩa, tôn trọng sự sáng tạo và
                      cho phép họ kết nối sâu sắc với người khác."
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
                  THÓI QUEN NƠI CÔNG SỞ
                </h2>

                {/* Introduction */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    Các INFJ có một số yêu cầu đối với môi trường làm việc: Phù
                    hợp với giá trị quan của họ, cho phép họ được giúp đỡ người
                    khác, đồng thời phát triển các kỹ năng của bản thân.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Bất cứ điều gì đi ngược lại với lý tưởng của họ, buộc họ
                    phải làm việc với những quy tắc vô nghĩa và đồng nghiệp cứng
                    nhắc đều sẽ ảnh hưởng tiêu cực tới năng suất làm việc của
                    các INFJ. Trong công việc, những người thuộc nhóm tính cách
                    INFJ tìm kiếm một môi trường làm việc bình đẳng, bản thân họ
                    cũng không muốn đặt mình ở vị trí cao hơn người khác.
                  </p>
                </div>

                {/* As Employees Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-blue-600">
                      INFJ khi là nhân viên
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Đặc điểm tích cực
                      </h4>
                      <p className="text-gray-700">
                        Các nhân viên INFJ coi trọng sự độc lập trong công việc,
                        thấu hiểu lẫn nhau và cùng hợp tác để phát triển. Họ
                        luôn nỗ lực làm việc chăm chỉ và dễ bị thu hút bởi những
                        cấp trên biết lắng nghe.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Thách thức
                      </h4>
                      <p className="text-gray-700">
                        Dễ bị tổn thương khi đối mặt với lời phê bình, đặc biệt
                        khi không chính đáng. Những quy tắc cứng nhắc và nhiệm
                        vụ lặp đi lặp lại sẽ ảnh hưởng tiêu cực đến họ.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="italic text-gray-700">
                      "Người quản lý có giá trị quan tương đồng, biết lắng nghe
                      và khích lệ nhân viên cấp dưới sẽ là một người cấp trên
                      tuyệt vời đối với các INFJ."
                    </p>
                  </div>
                </div>

                {/* As Colleagues Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-blue-600">
                      INFJ khi là đồng nghiệp
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Điểm mạnh
                      </h4>
                      <p className="text-gray-700">
                        Được đồng nghiệp kính trọng bởi tính cách xởi lởi, tốt
                        bụng. Có khả năng phân tích và tìm ra nguyên nhân cốt
                        lõi của vấn đề để giải quyết triệt để.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Điểm cần lưu ý
                      </h4>
                      <p className="text-gray-700">
                        Lòng tốt dễ bị lợi dụng, có thể phải gánh việc cho người
                        khác. Có xu hướng thu mình lại trong không gian riêng để
                        tập trung làm việc.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 mt-1 mr-3 text-blue-500 text-xl">
                      💡
                    </div>
                    <div>
                      <p className="text-gray-700">
                        "Lòng tốt của những người thuộc nhóm tính cách INFJ rất
                        dễ bị lợi dụng trong môi trường công sở."
                      </p>
                    </div>
                  </div>
                </div>

                {/* As Managers Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-blue-600">
                      INFJ khi làm quản lý
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Phong cách lãnh đạo
                      </h4>
                      <p className="text-gray-700">
                        Tôn trọng sự bình đẳng, không phân biệt trên dưới.
                        Khuyến khích nhân viên độc lập trong công việc. Thường
                        xuyên động viên cấp dưới để xây dựng môi trường làm việc
                        lành mạnh.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Tiêu chuẩn công việc
                      </h4>
                      <p className="text-gray-700">
                        Có tiêu chuẩn rõ ràng và mong muốn tất cả cấp dưới đều
                        đáp ứng được. Đánh giá cao những nhân viên nghiêm túc,
                        trung thực và đáng tin cậy.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3 text-gray-600">⚠️</div>
                      <div>
                        <p className="text-gray-700 font-medium">
                          "Không chỉ là một cấp trên tốt bụng và công tâm, các
                          INFJ còn rất giỏi trong việc tìm ra điểm mạnh trong
                          công việc của cấp dưới."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career Path Section */}
                <div className="mt-10 bg-gradient-to-r from-blue-600 to-gray-700 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-3">
                    Môi trường làm việc lý tưởng
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-r from-gray-800 to-blue-600 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">Giá trị cốt lõi</h4>
                      <p className="text-sm">
                        Phù hợp với hệ giá trị cá nhân, có ý nghĩa giúp đỡ người
                        khác, cho phép phát triển kỹ năng bản thân
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-gray-800 to-blue-600 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">Văn hóa làm việc</h4>
                      <p className="text-sm">
                        Môi trường bình đẳng, tôn trọng lẫn nhau, không có sự
                        phân biệt đẳng cấp, khuyến khích sự hợp tác
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-gray-800 to-blue-600 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">Quản lý</h4>
                      <p className="text-sm">
                        Cấp trên biết lắng nghe, thấu hiểu, có giá trị quan
                        tương đồng, tạo điều kiện phát triển
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-blue-100 text-sm">
                    <p>
                      INFJ phát triển mạnh trong môi trường có ý nghĩa nhân văn,
                      nơi họ có thể cống hiến vì lợi ích chung. Họ cần không
                      gian làm việc độc lập nhưng vẫn có sự kết nối với đồng
                      nghiệp.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeSection === "compare" && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Main Header */}
                <h2 className="text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-100 pb-4">
                  SO SÁNH INFJ VỚI INFP VÀ ENFJ
                </h2>

                {/* Introduction */}
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    Khi so sánh INFJ (Người che chở) với INFP (Người lý tưởng
                    hóa) và ENFJ (Người cho đi), chúng ta thấy rõ hơn đặc điểm
                    riêng của từng nhóm tính cách. Cả ba đều thuộc nhóm NF (Trực
                    giác - Cảm xúc) với nhiều điểm tương đồng nhưng cũng có
                    những khác biệt thú vị.
                  </p>
                </div>

                {/* Similarities Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-green-700">
                      Điểm chung của nhóm NF
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm mr-2">
                          N
                        </span>
                        Trực giác mạnh mẽ
                      </h4>
                      <p className="text-gray-700">
                        Cả INFJ, INFP và ENFJ đều có trực giác nhạy bén, tập
                        trung vào ý nghĩa và khả năng tiềm ẩn hơn chi tiết cụ
                        thể. Họ thích suy nghĩ về tương lai và các khả năng có
                        thể xảy ra.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-sm mr-2">
                          F
                        </span>
                        Đồng cảm sâu sắc
                      </h4>
                      <p className="text-gray-700">
                        Cả ba nhóm đều có khả năng thấu hiểu cảm xúc tuyệt vời,
                        quan tâm đến giá trị nhân văn và mong muốn giúp đỡ người
                        khác. Họ đánh giá cao các mối quan hệ chân thành.
                      </p>
                    </div>
                  </div>
                </div>

                {/* INFJ vs INFP Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-purple-700">
                      INFJ vs INFP
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Điểm tương đồng
                      </h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Cùng là người hướng nội và có trực giác mạnh</li>
                        <li>Theo đuổi chủ nghĩa hoàn hảo và lý tưởng cao</li>
                        <li>Coi trọng sự sâu sắc trong các mối quan hệ</li>
                        <li>Có xu hướng né tránh xung đột</li>
                        <li>Sáng tạo và giàu trí tưởng tượng</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Khác biệt chính
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-gray-700">
                            Nguyên tắc vs Linh hoạt
                          </h5>
                          <p className="text-gray-600 text-sm">
                            INFJ (J) có khuynh hướng nguyên tắc và quyết đoán
                            hơn, trong khi INFP (P) linh hoạt và cởi mở với các
                            khả năng.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-700">
                            Cách ra quyết định
                          </h5>
                          <p className="text-gray-600 text-sm">
                            INFJ cân nhắc tác động đến người khác (Fe), trong
                            khi INFP tập trung vào giá trị nội tâm (Fi).
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-700">
                            Trong công việc
                          </h5>
                          <p className="text-gray-600 text-sm">
                            INFJ tìm kiếm công việc có tổ chức và ý nghĩa, trong
                            khi INFP ưa thích môi trường linh hoạt và sáng tạo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <p className="italic text-gray-700">
                      "Nếu INFJ là người tổ chức với tầm nhìn rõ ràng, thì INFP
                      là người mơ mộng với trái tim đầy cảm xúc. Cả hai đều sâu
                      sắc nhưng thể hiện khác biệt."
                    </p>
                  </div>
                </div>

                {/* INFJ vs ENFJ Section */}
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-teal-100 w-2 h-8 mr-3 rounded-full"></div>
                    <h3 className="text-2xl font-semibold text-teal-700">
                      INFJ vs ENFJ
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Điểm tương đồng
                      </h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>
                          Đều có chức năng nhận thức chính là Trực giác hướng
                          nội (Ni) và Cảm xúc hướng ngoại (Fe)
                        </li>
                        <li>Có tính nguyên tắc và kỷ luật cao</li>
                        <li>Mong muốn giúp đỡ và cống hiến cho xã hội</li>
                        <li>Có thể hành động theo trực giác và cảm xúc</li>
                        <li>Đặt tiêu chuẩn cao cho bản thân và người khác</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Khác biệt chính
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-gray-700">
                            Năng lượng
                          </h5>
                          <p className="text-gray-600 text-sm">
                            ENFJ (hướng ngoại) được tiếp năng lượng từ tương tác
                            xã hội, trong khi INFJ (hướng nội) cần thời gian một
                            mình để nạp năng lượng.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-700">
                            Giao tiếp
                          </h5>
                          <p className="text-gray-600 text-sm">
                            ENFJ thoải mái và nhiệt tình trong giao tiếp, trong
                            khi INFJ kín đáo và chọn lọc hơn về người họ chia
                            sẻ.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-700">
                            Lãnh đạo
                          </h5>
                          <p className="text-gray-600 text-sm">
                            ENFJ thích đứng đầu và truyền cảm hứng trực tiếp,
                            trong khi INFJ thường lãnh đạo một cách âm thầm và
                            gián tiếp.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                    <p className="italic text-gray-700">
                      "ENFJ như mặt trời tỏa sáng giữa đám đông, trong khi INFJ
                      như ngọn hải đăng âm thầm dẫn đường. Cả hai đều có sức ảnh
                      hưởng mạnh mẽ nhưng theo cách khác biệt."
                    </p>
                  </div>
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Bảng so sánh chi tiết
                  </h3>
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-indigo-100">
                      <tr>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold">
                          Đặc điểm
                        </th>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold">
                          INFP
                        </th>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold">
                          INFJ
                        </th>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold">
                          ENFJ
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-700">
                          Năng lượng
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Hướng nội (I)
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Hướng nội (I)
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Hướng ngoại (E)
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-700">
                          Quyết định
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Giá trị cá nhân (Fi)
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Hòa hợp xã hội (Fe)
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Hòa hợp xã hội (Fe)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-700">
                          Phong cách
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Mềm mỏng, linh hoạt (P)
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Nguyên tắc, quyết đoán (J)
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Nguyên tắc, quyết đoán (J)
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-700">
                          Trong quan hệ
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Kín đáo, chọn lọc
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Sâu sắc, tận tâm
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Nhiệt tình, bao quát
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-700">
                          Trong công việc
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Sáng tạo, linh hoạt
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Chiến lược, có tổ chức
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Truyền cảm hứng, lãnh đạo
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-700">
                          Điểm mạnh
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Đồng cảm, trung thành
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Thấu hiểu, tầm nhìn
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          Giao tiếp, kết nối
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Career Comparison */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    So sánh nghề nghiệp phù hợp
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-purple-100">
                      <h4 className="font-bold text-purple-700 mb-3">INFP</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>Nhà văn/Nhà thơ</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>Tư vấn tâm lý</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>Nhân viên xã hội</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>Giáo viên nghệ thuật</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-indigo-100">
                      <h4 className="font-bold text-indigo-700 mb-3">INFJ</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          <span>Nhà tâm lý học</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          <span>Cố vấn hướng nghiệp</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          <span>Nhà hoạt động xã hội</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          <span>Chuyên gia phát triển cá nhân</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-teal-100">
                      <h4 className="font-bold text-teal-700 mb-3">ENFJ</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          <span>Quản lý nhân sự</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          <span>Diễn giả truyền cảm hứng</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          <span>Giáo viên/Đào tạo</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          <span>Nhà ngoại giao</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Final Thoughts */}
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                    Kết luận
                  </h3>
                  <p className="text-gray-700 mb-3">
                    INFJ, INFP và ENFJ đều là những người giàu lòng trắc ẩn,
                    sáng tạo và có khả năng thấu hiểu người khác. Họ đều mong
                    muốn cống hiến cho xã hội và xây dựng các mối quan hệ chân
                    thành.
                  </p>
                  <p className="text-gray-700">
                    Sự khác biệt chính nằm ở cách họ tiếp cận thế giới: INFP với
                    trái tim nhạy cảm và tinh thần tự do, INFJ với tầm nhìn
                    chiến lược và nguyên tắc, ENFJ với năng lượng xã hội và khả
                    năng lãnh đạo. Mỗi nhóm đều có những đóng góp độc đáo riêng,
                    tạo nên sự đa dạng phong phú trong nhóm tính cách NF.
                  </p>
                </div>
              </div>
            )}
            {activeSection === "advice" && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Main Header */}
                <h2 className="text-3xl font-bold text-blue-600 mb-8 border-b-2 border-blue-100 pb-4">
                  LỜI KHUYÊN DÀNH CHO CÁC INFJ
                </h2>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 rounded-lg mb-10 text-white">
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
                      Hành trình phát triển cho Người che chở
                    </h3>
                    <p className="text-indigo-200">
                      Là những người giàu lòng trắc ẩn và sâu sắc, INFJ cần học
                      cách cân bằng giữa trực giác và lý trí, giữa lý tưởng và
                      thực tế để phát huy tối đa tiềm năng của mình.
                    </p>
                  </div>
                </div>

                {/* Core Advice Sections */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Develop Strengths */}
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
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Phát huy thế mạnh
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Tận dụng tối đa trực giác và sự sâu sắc của bạn:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Khả năng thấu hiểu người khác một cách phi thường</li>
                      <li>Tầm nhìn dài hạn và khả năng dự đoán xu hướng</li>
                      <li>Sự sáng tạo và trí tưởng tượng phong phú</li>
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
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Khắc phục điểm yếu
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Những điều INFJ cần lưu ý để phát triển:
                    </p>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="italic text-gray-700">
                        "Sức mạnh thực sự nằm ở sự cân bằng giữa trái tim và lý
                        trí"
                      </p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Kiểm soát trực giác quá mạnh bằng lý trí</li>
                      <li>Học cách chấp nhận sự không hoàn hảo</li>
                      <li>Nhìn vào bức tranh tổng thể thay vì chỉ tiểu tiết</li>
                    </ul>
                  </div>
                </div>

                {/* Key Advice Section */}
                <div className="mb-10 bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg">
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
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
                        Chiến lược phát triển then chốt
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm">
                          <h4 className="font-semibold text-indigo-700 mb-2">
                            Kiểm soát trực giác
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Sử dụng nguyên tắc để cân bằng trực giác</li>
                            <li>Xem xét vấn đề từ nhiều góc độ</li>
                            <li>Kết hợp cảm xúc và lý trí khi ra quyết định</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm">
                          <h4 className="font-semibold text-indigo-700 mb-2">
                            Chấp nhận khuyết điểm
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Hiểu rằng không ai hoàn hảo</li>
                            <li>
                              Đặt kỳ vọng hợp lý với bản thân và người khác
                            </li>
                            <li>Tìm kiếm sự cân bằng trong mọi việc</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm">
                          <h4 className="font-semibold text-indigo-700 mb-2">
                            Tầm nhìn tổng thể
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Tránh sa đà vào tiểu tiết</li>
                            <li>Nhìn nhận vấn đề ở cấp độ chiến lược</li>
                            <li>Kết nối các yếu tố rời rạc thành hệ thống</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm">
                          <h4 className="font-semibold text-indigo-700 mb-2">
                            Mở lòng với thế giới
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Dũng cảm thể hiện bản thân</li>
                            <li>Tin vào giá trị độc đáo của mình</li>
                            <li>Xây dựng mối quan hệ chất lượng</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Self-Improvement Section */}
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
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-indigo-700">
                          Cân bằng cảm xúc
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        INFJ cần chú ý phát triển khả năng quản lý cảm xúc:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Bảo vệ năng lượng
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Đặt ranh giới lành mạnh</li>
                            <li>Dành thời gian tái tạo năng lượng</li>
                            <li>Học cách nói "không" khi cần</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Thể hiện bản thân
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Dũng cảm bày tỏ quan điểm</li>
                            <li>Tìm người đồng cảm để chia sẻ</li>
                            <li>Viết nhật ký để giải tỏa cảm xúc</li>
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
                            <div className="flex-shrink-0 bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              1
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Thiền định hàng ngày
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Dành 10-15 phút mỗi ngày để tĩnh tâm và kết nối
                                với bản thân
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              2
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Viết cảm nhận
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Ghi lại những hiểu biết sâu sắc mỗi tuần
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                              3
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800">
                                Kết nối xã hội
                              </h5>
                              <p className="text-gray-700 text-sm">
                                Mỗi tuần dành thời gian chất lượng với 1-2 người
                                thân thiết
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Encouragement */}
                <div className="bg-gradient-to-r from-indigo-800 to-purple-900 p-8 rounded-lg text-white">
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
                      Sức mạnh của Người che chở
                    </h3>
                    <p className="mb-4 text-indigo-100">
                      Bạn được ban tặng sự sâu sắc, trực giác nhạy bén và lòng
                      trắc ẩn vô hạn. Khi học cách kết hợp những điểm mạnh này
                      với sự thực tế và cân bằng cảm xúc, bạn sẽ trở thành người
                      truyền cảm hứng và tạo ra sự thay đổi tích cực.
                    </p>
                    <div className="bg-gray-800 bg-opacity-30 p-4 rounded-lg inline-block">
                      <p className="font-medium">
                        "Thế giới cần những người như bạn - những người biết
                        lắng nghe, thấu hiểu và mang lại sự an lành cho người
                        khác. Hãy tin vào sức mạnh nội tại của mình, bởi bạn có
                        khả năng đặc biệt để nhìn thấy những điều mà người khác
                        không thấy."
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
export default INFJPage;
