import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/shared/Navbar";
import { Link } from "react-router-dom";
import AIicon from "./images/AIicon.png";

// Danh sách đầy đủ 16 nhóm MBTI

const mbtiTypes = [
  {
    code: "INFP",
    icon: "/mbti_icons/infp.webp",
    label: "Người lý tưởng hóa",
    color: "from-pink-500 to-pink-300",
    bgColor: "bg-pink-100",
    description: "Giàu trí tưởng tượng, đề cao giá trị và niềm tin của bản thân",
    path: "/tools/mbti/tinh-cach/infp"
  },
  {
    code: "INFJ",
    icon: "/mbti_icons/infj.webp",
    label: "Người che chở",
    color: "from-purple-600 to-indigo-300",
    bgColor: "bg-purple-100",
    description: "Nuôi dưỡng những lý tưởng đứng đắn, cầu toàn, coi trọng sự toàn diện và đề cao tính chính trực",
    path: "/tools/mbti/tinh-cach/infj"
  },
  {
    code: "INTJ",
    icon: "/mbti_icons/intj.webp",
    label: "Nhà khoa học",
    color: "from-indigo-700 to-indigo-400",
    bgColor: "bg-indigo-100",
    description: "Phân tích - giải quyết vấn đề hiệu quả, có năng khiếu với cải thiện hệ thống và quy trình",
    path: "/tools/mbti/tinh-cach/intj"
  },
  {
    code: "INTP",
    icon: "/mbti_icons/intp.webp",
    label: "Nhà tư duy",
    color: "from-purple-400 to-purple-200",
    bgColor: "bg-purple-50",
    description: "Thông minh, triết lý, chỉ tin vào logic",
    path: "/tools/mbti/tinh-cach/intp"
  },
  {
    code: "ISTJ",
    icon: "/mbti_icons/istj.webp",
    label: "Người trách nhiệm",
    color: "from-blue-500 to-blue-300",
    bgColor: "bg-blue-100",
    description: "Thực tế, có tổ chức và đáng tin cậy. Luôn hoàn thành nhiệm vụ với sự chính xác và tận tâm.",
    path: "/tools/mbti/tinh-cach/istj"
  },
  {
    code: "ISFJ",
    icon: "/mbti_icons/isfj.webp",
    label: "Người nuôi dưỡng",
    color: "from-teal-500 to-teal-300",
    bgColor: "bg-teal-100",
    description: "Ấm áp, chu đáo và có trách nhiệm. Luôn quan tâm đến nhu cầu của người khác và giữ gìn truyền thống.",
    path: "/tools/mbti/tinh-cach/isfj"
  },
  {
    code: "ISTP",
    icon: "/mbti_icons/istp.webp",
    label: "Nhà kỹ thuật",
    color: "from-blue-400 to-blue-200",
    bgColor: "bg-blue-50",
    description: "Linh hoạt, bình tĩnh và giỏi giải quyết vấn đề. Có khả năng hiểu các hệ thống cơ khí và vận hành chúng.",
    path: "/tools/mbti/tinh-cach/istp"
  },
  {
    code: "ISFP",
    icon: "/mbti_icons/isfp.webp",
    label: "Người nghệ sĩ",
    color: "from-green-500 to-green-300",
    bgColor: "bg-green-100",
    description: "Nhạy cảm, ấm áp và sống theo hiện tại. Có gu thẩm mỹ tốt và khả năng thể hiện bản thân qua nghệ thuật.",
    path: "/tools/mbti/tinh-cach/isfp"
  },
  {
    code: "ESTP",
    icon: "/mbti_icons/estp.webp",
    label: "Người thực thi",
    color: "from-red-500 to-red-300",
    bgColor: "bg-red-100",
    description: "Năng động, hoạt bát và thích mạo hiểm. Giỏi xử lý khủng hoảng và tận hưởng những thử thách thực tế.",
    path: "/tools/mbti/tinh-cach/estp"
  },
  {
    code: "ESFP",
    icon: "/mbti_icons/esfp.webp",
    label: "Người trình diễn",
    color: "from-yellow-500 to-yellow-300",
    bgColor: "bg-yellow-100",
    description: "Vui vẻ, nhiệt tình và thích giao tiếp. Mang lại năng lượng tích cực và thích tạo niềm vui cho người khác.",
    path: "/tools/mbti/tinh-cach/esfp"
  },
  {
    code: "ENFP",
    icon: "/mbti_icons/enfp.webp",
    label: "Người truyền cảm hứng",
    color: "from-orange-500 to-orange-300",
    bgColor: "bg-orange-100",
    description: "Nhiệt tình, sáng tạo và lạc quan. Có khả năng nhìn thấy tiềm năng ở người khác và truyền cảm hứng.",
    path: "/tools/mbti/tinh-cach/enfp"
  },
  {
    code: "ENTP",
    icon: "/mbti_icons/entp.webp",
    label: "Người nhìn xa",
    color: "from-amber-500 to-amber-300",
    bgColor: "bg-amber-100",
    description: "Thông minh, nhanh trí và giỏi tranh luận. Luôn tìm kiếm những ý tưởng mới và thách thức hiện trạng.",
    path: "/tools/mbti/tinh-cach/entp"
  },
  {
    code: "ESTJ",
    icon: "/mbti_icons/estj.webp",
    label: "Người giám hộ",
    color: "from-emerald-500 to-emerald-300",
    bgColor: "bg-emerald-100",
    description: "Thực tế, có tổ chức và quyết đoán. Giỏi lập kế hoạch và thực hiện các nhiệm vụ một cách hiệu quả.",
    path: "/tools/mbti/tinh-cach/estj"
  },
  {
    code: "ESFJ",
    icon: "/mbti_icons/esfj.webp",
    label: "Người quan tâm",
    color: "from-cyan-500 to-cyan-300",
    bgColor: "bg-cyan-100",
    description: "Thân thiện, chu đáo và có trách nhiệm. Luôn quan tâm đến nhu cầu của người khác và tạo sự hài hòa.",
    path: "/tools/mbti/tinh-cach/esfj"
  },
  {
    code: "ENFJ",
    icon: "/mbti_icons/enfj.webp",
    label: "Người cho đi",
    color: "from-rose-500 to-rose-300",
    bgColor: "bg-rose-100",
    description: "Ấm áp, đồng cảm và có khả năng lãnh đạo. Luôn tìm cách giúp người khác phát triển tiềm năng của họ.",
    path: "/tools/mbti/tinh-cach/enfj"
  },
  {
    code: "ENTJ",
    icon: "/mbti_icons/entj.png",
    label: "Nhà điều hành",
    color: "from-violet-500 to-violet-300",
    bgColor: "bg-violet-100",
    description: "Kỹ năng lãnh đạo xuất sắc, lấy thay đổi làm động lực. Người quyết đoán với tầm nhìn chiến lược, luôn hướng tới hiệu quả và thành công.",
    path: "/tools/mbti/tinh-cach/entj"
  }
];

const MBTIPage = () => {
  const [isBannerHovered, setIsBannerHovered] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const animationDuration = 40000; // 40s
  const bannerWidthRef = useRef(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  const addToRefs = (el: HTMLElement | null, index: number) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current[index] = el;
    }
  };
  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLElement
            );
            if (index !== -1 && !visibleSections.includes(index)) {
              setVisibleSections((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [visibleSections]);
  useEffect(() => {
    if (!bannerRef.current) return;

    if (bannerWidthRef.current === 0) {
      bannerWidthRef.current = bannerRef.current.scrollWidth / 2;
    }

    let requestId: number | undefined;
    const startTime =
      performance.now() -
      (translateX / -bannerWidthRef.current) * animationDuration;

    const update = () => {
      if (!isBannerHovered && bannerRef.current) {
        const elapsed = (performance.now() - startTime) % animationDuration;
        const percent = elapsed / animationDuration;
        const newTranslateX = -percent * bannerWidthRef.current;
        setTranslateX(newTranslateX);
        bannerRef.current.style.transform = `translateX(${newTranslateX}px)`;
        requestId = requestAnimationFrame(update);
      }
    };

    if (!isBannerHovered) {
      requestId = requestAnimationFrame(update);
    }

    return () => {
      if (typeof requestId === "number") {
        cancelAnimationFrame(requestId);
      }
    };
  }, [isBannerHovered, translateX]);

  return (
    <div className="mbti-intro bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={(el) => addToRefs(el, 0)}
        className={`hero-section relative bg-gradient-to-r from-violet-600 via-blue-500 to-purple-600 text-white py-24 overflow-hidden shadow-xl transition-all duration-700 ease-out ${
          visibleSections.includes(0)
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        style={{
          minHeight: "530px",
          backgroundImage: `url('/mbti_icons/bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay màu đen nằm phía trên ảnh nền */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Nội dung nằm phía trên lớp phủ */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow mb-4 animate-fadeIn text-center">
            Khám phá tính cách <span className="gradient-text-pink">MBTI</span>
          </h1>
          <p className="text-2xl mb-8 drop-shadow-md animate-fadeIn delay-100 text-center max-w-2xl">
            Hiểu rõ bản thân – Định hướng tương lai, phát triển sự nghiệp
          </p>
          <img
            src={AIicon}
            alt="MBTI Hero"
            className="mx-auto mb-6 animate-floatUp w-40 md:w-56"
          />
          <Link
            to="/tools/mbti/test"
            className="inline-block bg-gradient-to-r from-violet-600 to-purple-400 text-white font-extrabold py-4 px-10 rounded-full text-xl transition-all duration-300 shadow-xl mt-2 animate-fadeIn delay-150 hover:scale-105 hover:shadow-2xl hover:brightness-110"
          >
            Làm bài test ngay
          </Link>

        </div>
      </section>

      {/* Interactive MBTI Banner */}
      <section
        ref={(el) => addToRefs(el, 1)}
        className={`py-16 bg-gradient-to-r from-blue-50 to-purple-50 transition-all duration-700 delay-100 ease-out ${
          visibleSections.includes(1)
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <h3 className="text-center text-3xl font-bold mb-8 text-violet-600">
            16 Nhóm tính cách MBTI
          </h3>

          <div
            className="relative h-[200px] overflow-hidden"
            style={{ cursor: "pointer" }}
          >
            <div
              ref={bannerRef}
              className="absolute top-0 left-0 flex gap-6 whitespace-nowrap"
              style={{
                willChange: "transform",
                transform: `translateX(${translateX}px)`,
                transition: "transform 0.1s linear",
              }}
              onMouseEnter={() => setIsBannerHovered(true)}
              onMouseLeave={() => setIsBannerHovered(false)}
            >
              {[...mbtiTypes, ...mbtiTypes].map((type, idx) => (
                <div
                  key={idx}
                  className={`flex w-[400px] h-[200px] ${
                    type.bgColor
                  } rounded-xl shadow-md border-2 border-transparent overflow-hidden transition-all duration-300 ${
                    isBannerHovered ? "hover:border-yellow-400" : ""
                  }`}
                >
                  <Link to={type.path} className="flex w-full h-full">
                  {/* Ảnh bên trái */}
                  <div
                    className={`w-44 h-full bg-gradient-to-br ${type.color} flex items-center justify-center`}
                  >
                    <img
                      src={type.icon}
                      alt={type.code}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Nội dung bên phải */}
                  <div className="flex flex-col justify-center px-5 py-4 text-left w-full overflow-hidden">
                    <div className="font-bold text-xl gradient-text-pink mb-2">
                      {type.code} - {type.label}
                    </div>
                    <div className="text-base text-gray-800 leading-relaxed whitespace-normal w-full break-words">
                      {type.description}
                    </div>
                    
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MBTI Explanation Section */}
      <section
        ref={(el) => addToRefs(el, 2)}
        className={`py-20 bg-white transition-all duration-700 delay-100 ease-out ${
          visibleSections.includes(2)
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Main title with indentation and emphasis */}
          <h2 className="text-4xl md:text-4xl font-bold mb-16 pl-6 border-l-4 border-blue-500">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Trắc nghiệm tính cách MBTI là gì?
            </span>
          </h2>

          <div className="mb-16 flex flex-col md:flex-row items-start gap-10">
            {/* Left image */}
            <div className="w-full md:w-2/5 flex justify-center">
              <img
                src="/mbti_icons/mbti-la-gi.jpg"
                alt="MBTI"
                className="w-full h-auto max-w-[360px] object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Right content */}
            <div className="w-full md:w-3/5">
              <h3 className="text-3xl font-semibold mb-6 text-indigo-600">
                Trắc nghiệm tính cách MBTI
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-5">
                Trắc nghiệm tính cách MBTI (Myers-Briggs Type Indicator) là một
                phương pháp sử dụng hàng loạt các câu hỏi trắc nghiệm để phân
                tích tính cách con người. Kết quả trắc nghiệm MBTI chỉ ra cách
                con người nhận thức thế giới xung quanh và ra quyết định cho mọi
                vấn đề trong cuộc sống.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hiện nay, MBTI được coi là công cụ khám phá tính cách phổ biến
                và chính xác nhất trên thế giới. Trong công việc, MBTI giúp mỗi
                cá nhân có thêm thông tin để định hướng và lựa chọn nghề nghiệp.
                Nhà tuyển dụng cũng có thể sử dụng MBTI để đánh giá mức độ phù
                hợp của ứng viên với vị trí công việc và văn hoá doanh nghiệp.
              </p>
            </div>
          </div>

          {/* Classification section */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-4xl font-bold gradient-text-pink mb-10 pl-6 border-l-4 border-green-500">
              Cách MBTI phân loại 16 nhóm tính cách
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Trắc nghiệm MBTI dùng một chuỗi các câu hỏi trắc nghiệm liên quan
              đến những vấn đề cơ bản trong cuộc sống với các đáp án sẵn có để
              bạn lựa chọn. Tổng kết bài trắc nghiệm sẽ cho ra kết quả đánh giá
              bạn là người có tính cách như thế nào thông qua phương pháp phân
              loại.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Sự phân loại này dựa trên 4 nhóm tính cách cơ bản, mỗi nhóm là một
              cặp lưỡng phân của 8 yếu tố chức năng, nhận thức sau:
            </p>

            {/* Personality dimensions grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Item 1 */}
              <div className="flex flex-col bg-[#f0f7f0] rounded-2xl p-8">
                <img
                  src="/mbti_icons/img_1.webp"
                  alt="Hướng ngoại - Hướng nội"
                  className="w-full rounded-xl mb-6"
                />
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-blue-600">01</span>
                  </div>
                  <h3 className="text-xl text-gray-700 font-semibold mt-1">
                    Cách bạn tương tác với thế giới xung quanh, tập trung sự chú
                    ý và nạp thêm năng lượng
                  </h3>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col bg-[#f0f7f0] rounded-2xl p-8">
                <img
                  src="/mbti_icons/img_2.webp"
                  alt="Cảm giác - Trực giác"
                  className="w-full rounded-xl mb-6"
                />
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-purple-600">
                      02
                    </span>
                  </div>
                  <h3 className="text-xl text-gray-800 font-semibold mt-1">
                    Cách bạn tiếp nhận thông tin và nhận thức thế giới
                  </h3>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col bg-[#f0f7f0] rounded-2xl p-8">
                <img
                  src="/mbti_icons/img_3.webp"
                  alt="Lý trí - Cảm xúc"
                  className="w-full rounded-xl mb-6"
                />
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-green-600">
                      03
                    </span>
                  </div>
                  <h3 className="text-xl text-gray-800 font-semibold mt-1">
                    Cách bạn lựa chọn và đưa ra quyết định
                  </h3>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col bg-[#f0f7f0] rounded-2xl p-8">
                <img
                  src="/mbti_icons/img_4.webp"
                  alt="Nguyên tắc - Linh hoạt"
                  className="w-full rounded-xl mb-6"
                />
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-yellow-600">
                      04
                    </span>
                  </div>
                  <h3 className="text-xl text-gray-800 font-semibold mt-1">
                    Cách bạn tiếp cận với cuộc sống hàng ngày
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mt-12">
              Bằng cách kết hợp từng khía cạnh của những cặp đối lập này, MBTI
              hình thành 16 nhóm tính cách và định nghĩa chúng dựa trên những
              nghiên cứu về tâm lý học của Katherine Cook Briggs và con gái bà,
              Isabel Briggs Myers.
            </p>
          </div>
        </div>
      </section>

      {/* 16 Personality Types Grid */}
      <section
        ref={(el) => addToRefs(el, 3)}
        className={`py-20 bg-gray-50 transition-all duration-700 delay-100 ease-out ${
          visibleSections.includes(3)
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 gradient-text-blue">
            16 Nhóm tính cách MBTI
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {mbtiTypes.map((type) => (
              <div
                key={type.code}
                className="flip-card h-64 w-full perspective-1000"
              >
                {/* Flip card inner container */}
                <div className="flip-card-inner relative w-full h-full transition-transform duration-500 transform-style-preserve-3d">
                  {/* Front side */}
                  <div
                    className={`flip-card-front absolute w-full h-full backface-hidden rounded-2xl ${type.bgColor} p-6 shadow-lg flex flex-col items-center justify-center`}
                  >
                    <div
                      className={`w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br ${type.color} mb-4`}
                    >
                      <img
                        src={type.icon}
                        alt={type.code}
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-800 mb-1">
                      {type.code}
                    </h3>
                    <p className="text-gray-800 font-semibold">{type.label}</p>
                  </div>

                  {/* Back side */}
                  <div
                    className={`flip-card-back absolute w-full h-full backface-hidden rounded-2xl ${type.bgColor} p-6 shadow-lg transform rotate-y-180 flex flex-col justify-center`}
                  >
                    <h3 className="font-bold text-xl text-gray-800 mb-2">
                      {type.code} - {type.label}
                    </h3>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      {type.description}
                    </p>
                    <div className="mt-4 flex justify-center">
                      <Link
                        to={type.path}
                        className="text-xs font-medium text-white px-3 py-1 rounded-full bg-black/80 hover:bg-black transition"
                      >
                        Xem chi tiết
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom CSS for flip effect */}
        <style>{`
    .flip-card {
      perspective: 1000px;
    }
    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }
    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
    .flip-card-front, .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
    .flip-card-back {
      transform: rotateY(180deg);
    }
    .gradient-text-blue {
      background: linear-gradient(90deg, #3b82f6 25%, #8b5cf6 75%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  `}</style>
      </section>

      {/* How it works */}
      <section
        ref={(el) => addToRefs(el, 4)}
        className={`py-20 bg-white transition-all duration-700 delay-100 ease-out ${
          visibleSections.includes(4)
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 gradient-text-pink">
            Làm thế nào để có kết quả chính xác?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] border border-gray-100">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-3xl font-bold">1</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">
                Trả lời trung thực
              </h3>
              <p className="text-gray-600">
                Chọn đáp án phản ánh đúng nhất con người thật của bạn, không
                phải con người bạn mong muốn
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] border border-gray-100">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 text-3xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">
                Theo bản năng
              </h3>
              <p className="text-gray-600">
                Hãy chọn theo phản ứng đầu tiên của bạn, đừng phân tích quá
                nhiều
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] border border-gray-100">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-pink-600 text-3xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">
                Kiểm tra định kỳ
              </h3>
              <p className="text-gray-600">
                Tính cách có thể thay đổi theo thời gian và trải nghiệm cuộc
                sống
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section - Accordion Style */}

      <section
        ref={(el) => addToRefs(el, 5)}
        className={`py-5 bg-gray-50 transition-all duration-700 delay-100 ease-out ${
          visibleSections.includes(5)
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center py-10 gradient-text-blue">
            Câu hỏi thường gặp
          </h2>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <button
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(1)}
              >
                <h3 className="text-xl font-bold text-gray-800">
                  Trắc nghiệm MBTI là gì?
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    activeFAQ === 1 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 pb-6 ${activeFAQ === 1 ? "block" : "hidden"}`}
              >
                <p className="text-gray-600 leading-relaxed">
                  Trắc nghiệm MBTI (Myers-Briggs Type Indicator) là một phương
                  pháp sử dụng hàng loạt các câu hỏi trắc nghiệm để phân tích
                  tính cách con người. Kết quả trắc nghiệm MBTI chỉ ra cách con
                  người nhận thức thế giới xung quanh và ra quyết định cho mọi
                  vấn đề trong cuộc sống.
                </p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <button
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(2)}
              >
                <h3 className="text-xl font-bold text-gray-800">
                  Trắc nghiệm MBTI bắt nguồn từ đâu?
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    activeFAQ === 2 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 pb-6 ${activeFAQ === 2 ? "block" : "hidden"}`}
              >
                <p className="text-gray-600 leading-relaxed">
                  Bài test MBTI có nền tảng từ thuyết phân loại tính cách của
                  Carl Gustav Jung - bác sĩ tâm thần học người Thụy Sĩ, cha đẻ
                  của Tâm lý học phân tích; sau đó được Katharine Cook Briggs
                  cùng con gái của bà, Isabel Briggs Myers phát triển và hoàn
                  thiện trong chiến tranh thế giới thứ hai. Tuy nhiên, MBTI chỉ
                  thực sự trở nên nổi tiếng và phổ biến khi được giới thiệu ở
                  hai cuốn "Please understand me" I và II của nhà tâm lý học
                  David Keirsey từ những năm 50 của thế kỷ 20, và được người
                  Nhật đưa vào ứng dụng thực tiễn từ năm 1962.
                </p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <button
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(3)}
              >
                <h3 className="text-xl font-bold text-gray-800">
                  MBTI có bao nhiêu loại tính cách?
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    activeFAQ === 3 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 pb-6 ${activeFAQ === 3 ? "block" : "hidden"}`}
              >
                <p className="text-gray-600 leading-relaxed">
                  MBTI phân loại tính cách thành 16 nhóm khác nhau dựa trên 4
                  tiêu chí đánh giá: Hướng ngoại/Hướng nội, Giác quan/Trực giác,
                  Lý trí/Cảm xúc, Nguyên tắc/Linh hoạt.
                </p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <button
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(4)}
              >
                <h3 className="text-xl font-bold text-gray-800">
                  Kết quả MBTI có thay đổi không?
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    activeFAQ === 4 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 pb-6 ${activeFAQ === 4 ? "block" : "hidden"}`}
              >
                <p className="text-gray-600 leading-relaxed">
                  Có, kết quả MBTI có thể thay đổi theo thời gian do trải nghiệm
                  sống, môi trường làm việc và sự phát triển cá nhân. Tuy nhiên,
                  sự thay đổi này thường diễn ra từ từ và không quá đột ngột.
                </p>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <button
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(5)}
              >
                <h3 className="text-xl font-bold text-gray-800">
                  MBTI có thể dự đoán tương lai không?
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    activeFAQ === 5 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 pb-6 ${activeFAQ === 5 ? "block" : "hidden"}`}
              >
                <p className="text-gray-600 leading-relaxed">
                  Không, MBTI không phải là công cụ để dự đoán tương lai. Nó chỉ
                  giúp bạn hiểu rõ hơn về tính cách, điểm mạnh, điểm yếu của bản
                  thân để có thể phát triển và cải thiện bản thân tốt hơn.
                </p>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <button
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(6)}
              >
                <h3 className="text-xl font-bold text-gray-800">
                  Đâu là nhóm tính cách MBTI phổ biến nhất?
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    activeFAQ === 6 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 pb-6 ${activeFAQ === 6 ? "block" : "hidden"}`}
              >
                <p className="text-gray-600 leading-relaxed">
                  Theo thống kê, ISFJ (Người nuôi dưỡng) và ESFJ (Người quan
                  tâm) là hai nhóm tính cách phổ biến nhất trong dân số.
                </p>
              </div>
            </div>

            {/* FAQ Item 7 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <button
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(7)}
              >
                <h3 className="text-xl font-bold text-gray-800">
                  Đâu là nhóm tính cách MBTI hiếm nhất?
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    activeFAQ === 7 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 pb-6 ${activeFAQ === 7 ? "block" : "hidden"}`}
              >
                <p className="text-gray-600 leading-relaxed">
                  INFJ (Người che chở) và ENTJ (Nhà điều hành) được xem là hai
                  nhóm tính cách hiếm gặp nhất trong dân số.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section
        ref={(el) => addToRefs(el, 6)}
        className={`py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-violet-700 text-white transition-all duration-700 delay-100 ease-out ${
          visibleSections.includes(6)
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {" "}
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md">
              Sẵn sàng khám phá bản thân?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90">
              Bài test chỉ mất 5 phút nhưng có thể thay đổi cách bạn nhìn nhận
              chính mình và mối quan hệ với người khác
            </p>
            <Link
              to="/tools/mbti/test"
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-bold py-5 px-16 rounded-full text-lg shadow-2xl transition duration-300 hover:scale-105"
            >
              Bắt đầu ngay →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-white/80 text-gray-600 text-sm border-t border-gray-200">
        <div className="container mx-auto px-4">
          <p className="mb-2">
            &copy; 2025 MBTI AI | Được xây dựng bởi{" "}
            <a
              href="mailto:VieJobs@email.vn"
              className="underline hover:text-blue-600"
            >
              VieJobs
            </a>
          </p>
          <p className="text-xs opacity-75">
            Ảnh MBTI sử dụng minh họa bản quyền miễn phí. MBTI là thương hiệu đã
            đăng ký của Myers & Briggs Foundation.
          </p>
        </div>
      </footer>

      {/* Custom CSS */}
      <style>{`
        .gradient-text-blue {
          background: linear-gradient(90deg, #3b82f6 25%, #8b5cf6 75%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .gradient-text-pink {
          background: linear-gradient(90deg, #f472b6 10%, #6366f1 90%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .animate-floatUp {
          animation: floatUp 3s infinite alternate ease-in-out;
        }
        @keyframes floatUp {
          from { transform: translateY(0) rotate(-2deg); }
          to { transform: translateY(-16px) rotate(2deg); }
        }
        .fade-in {
          animation: fadeIn 0.8s ease-out both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
          .transition-all {
    transition-property: all;
  }
  .duration-700 {
    transition-duration: 700ms;
  }
  .ease-out {
    transition-timing-function: ease-out;
  }
  .delay-100 {
    transition-delay: 100ms;
  }
  .delay-200 {
    transition-delay: 200ms;
  }
  .delay-300 {
    transition-delay: 300ms;
  }
  .delay-400 {
    transition-delay: 400ms;
  }
  .delay-500 {
    transition-delay: 500ms;
  }
  .delay-600 {
    transition-delay: 600ms;
  }
  .translate-y-10 {
    transform: translateY(40px);
  }
  .translate-y-0 {
    transform: translateY(0);
  }
      `}</style>
    </div>
  );
};

export default MBTIPage;
