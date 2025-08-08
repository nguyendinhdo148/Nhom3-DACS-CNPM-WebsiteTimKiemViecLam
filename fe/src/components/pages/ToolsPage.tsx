import { Calculator, Brain, HeartPulse, Coins, Banknote, PiggyBank, ScrollText, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../shared/Navbar";

const ToolsPage = () => {
  const tools = [
    {
      id: 1,
      name: "Trắc nghiệm MBTI",
      description: "Khám phá tính cách của bạn thông qua bài trắc nghiệm MBTI chính xác",
      icon: <Brain className="text-white" size={24} />,
      path: "/tools/mbti",
      color: "from-purple-600 to-purple-400",
      bgColor: "bg-purple-500",
      iconBg: "bg-purple-700"
    },
    {
      id: 2,
      name: "Trắc nghiệm MI",
      description: "Xác định loại hình thông minh nổi trội của bạn theo thuyết Đa trí tuệ",
      icon: <HeartPulse className="text-white" size={24} />,
      path: "/tools/mi",
      color: "from-blue-600 to-blue-400",
      bgColor: "bg-blue-500",
      iconBg: "bg-blue-700"
    },
    {
      id: 3,
      name: "Tính lương Gross - Net",
      description: "Chuyển đổi giữa lương Gross và Net, tính toán các khoản khấu trừ",
      icon: <Calculator className="text-white" size={24} />,
      path: "/tools/salary-converter",
      color: "from-emerald-600 to-emerald-400",
      bgColor: "bg-emerald-500",
      iconBg: "bg-emerald-700"
    },
    {
      id: 4,
      name: "Tính thuế thu nhập cá nhân",
      description: "Tính toán số thuế TNCN phải nộp theo quy định mới nhất",
      icon: <Coins className="text-white" size={24} />,
      path: "/tools/tax-calculator",
      color: "from-amber-600 to-amber-400",
      bgColor: "bg-amber-500",
      iconBg: "bg-amber-700"
    },
    {
      id: 5,
      name: "Tính lãi suất kép",
      description: "Tính toán lợi nhuận từ lãi suất kép cho các khoản đầu tư dài hạn",
      icon: <TrendingUp className="text-white" size={24} />,
      path: "/tools/compound-interest",
      color: "from-rose-600 to-rose-400",
      bgColor: "bg-rose-500",
      iconBg: "bg-rose-700"
    },
    {
      id: 6,
      name: "Tính bảo hiểm thất nghiệp",
      description: "Tính mức hưởng bảo hiểm thất nghiệp theo thời gian đóng BH",
      icon: <ScrollText className="text-white" size={24} />,
      path: "/tools/unemployment-insurance",
      color: "from-pink-600 to-pink-400",
      bgColor: "bg-pink-500",
      iconBg: "bg-pink-700"
    },
    {
      id: 7,
      name: "Tính bảo hiểm xã hội một lần",
      description: "Tính mức hưởng bảo hiểm xã hội một lần khi nghỉ việc",
      icon: <Banknote className="text-white" size={24} />,
      path: "/tools/social-insurance",
      color: "from-orange-600 to-orange-400",
      bgColor: "bg-orange-500",
      iconBg: "bg-orange-700"
    },
    {
      id: 8,
      name: "Lập kế hoạch tiết kiệm",
      description: "Lập kế hoạch tiết kiệm để đạt mục tiêu tài chính cá nhân",
      icon: <PiggyBank className="text-white" size={24} />,
      path: "/tools/saving-planner",
      color: "from-teal-600 to-teal-400",
      bgColor: "bg-teal-500",
      iconBg: "bg-teal-700"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              Bộ công cụ chuyên nghiệp
            </span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-4">
            <span className="bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent">
              Nâng tầm sự nghiệp
            </span> của bạn
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-600">
            Khám phá bộ công cụ toàn diện giúp bạn phát triển bản thân và quản lý tài chính một cách thông minh
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {tools.map((tool) => (
            <motion.div 
              key={tool.id}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Link
                to={tool.path}
                className={`group relative block h-full overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-white/20`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col p-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${tool.iconBg} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    {tool.icon}
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{tool.name}</h3>
                    <p className="text-gray-100 opacity-90 mb-6">{tool.description}</p>
                  </div>
                  
                  {/* Button */}
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium text-sm border-b border-transparent group-hover:border-white transition-all">
                      Bắt đầu ngay
                    </span>
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-16 h-16 -mr-8 -mt-8 rounded-full bg-white bg-opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 -ml-12 -mb-12 rounded-full bg-white bg-opacity-5"></div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Categories Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Khám phá theo danh mục</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-5 py-2 bg-white text-indigo-600 font-medium rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-indigo-300">
                Phát triển bản thân
              </button>
              <button className="px-5 py-2 bg-white text-emerald-600 font-medium rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-emerald-300">
                Quản lý tài chính
              </button>
              <button className="px-5 py-2 bg-white text-amber-600 font-medium rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-amber-300">
                Tính toán thu nhập
              </button>
              <button className="px-5 py-2 bg-white text-rose-600 font-medium rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-rose-300">
                Bảo hiểm
              </button>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-24 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-2xl p-8 sm:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Bạn cần công cụ khác?</h3>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-6">
            Chúng tôi luôn sẵn sàng lắng nghe và phát triển thêm các công cụ hữu ích cho cộng đồng
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:shadow-lg transition-shadow hover:bg-gray-50">
              Đề xuất công cụ mới
            </button>
            <button className="px-6 py-3 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white/10 transition-colors">
              Liên hệ hỗ trợ
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ToolsPage;