"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { fadeIn, fadeInUp, staggerContainer } from "./../framer-motion-config"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Về VieJobs",
      links: [
        { name: "Giới thiệu", href: "#" },
        { name: "Liên hệ", href: "#" },
        { name: "Tuyển dụng", href: "#" },
      ],
    },
    {
      title: "Xây dựng sự nghiệp",
      links: [
        { name: "Việc làm tốt nhất", href: "#" },
        { name: "Việc làm lương cao", href: "#" },
        { name: "Việc làm quản lý", href: "#" },
        { name: "Việc làm IT", href: "#" },
        { name: "Việc làm bán thời gian", href: "#" },
      ],
    },
    {
      title: "Khám phá",
      links: [
        { name: "Blog việc làm", href: "#" },
        { name: "Mẹo phỏng vấn", href: "#" },
        { name: "Mẫu CV", href: "#" },
        { name: "Tính lương", href: "#" },
      ],
    },
    {
      title: "Hỗ trợ",
      links: [
        { name: "Trung tâm trợ giúp", href: "#" },
        { name: "Cộng đồng", href: "#" },
        { name: "Live Chat", href: "#" },
      ],
    },
    {
      title: "Pháp lý",
      links: [
        { name: "Điều khoản dịch vụ", href: "#" },
        { name: "Điều khoản sử dụng", href: "#" },
        { name: "Chính sách bảo mật", href: "#" },
      ],
    },
  ]

  const socialMedia = [
    {
      name: "LinkedIn",
      icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
      color: "text-[#0077B5] hover:text-[#006097]",
      href: "https://www.linkedin.com/",
    },
    {
      name: "Twitter",
      icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
      color: "text-[#1DA1F2] hover:text-[#1991db]",
      href: "https://www.twitter.com/",
    },
    {
      name: "Facebook",
      icon: "M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z",
      color: "text-[#4267B2] hover:text-[#365899]",
      href: "https://www.facebook.com/",
    },
    {
      name: "Instagram",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
      color: "text-[#E1306C] hover:text-[#C13584]",
      href: "https://www.instagram.com/",
    },
  ]

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200"
    >
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center mb-6"
            >
              <h2 className="text-3xl font-bold tracking-tight">
                <span className="text-gray-900">Vie</span>
                <motion.span
                  animate={{
                    color: ["#FF3C00", "#FF5E00", "#FF7F00", "#FF5E00", "#FF3C00"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="text-[#FF3C00]"
                >
                  Jobs
                </motion.span>
              </h2>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-gray-600 mb-8 leading-relaxed">
              Kết nối những tài năng hàng đầu với các công ty đẳng cấp thế giới. Nền tảng của chúng tôi giúp hàng triệu
              người tìm được công việc mơ ước và xây dựng sự nghiệp có ý nghĩa.
            </motion.p>

            {/* Social Media */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Kết nối với chúng tôi
              </h4>
              <div className="flex space-x-5">
                {socialMedia.map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      to={social.href}
                      className={`${social.color} transition-all duration-300`}
                      aria-label={social.name}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={social.icon} />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Link Columns */}
          {footerLinks.map((column, colIndex) => (
            <motion.div key={column.title} variants={fadeInUp} custom={colIndex} transition={{ delay: colIndex * 0.1 }}>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-5">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: colIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-600 hover:text-[#FF3C00] transition-all duration-300 text-sm leading-6 flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span>{link.name}</span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div variants={fadeIn} className="border-t border-gray-200 my-10"></motion.div>

        {/* Bottom Footer */}
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <motion.p variants={fadeInUp} className="text-sm text-gray-500 order-2 md:order-1">
            &copy; {currentYear} VieJobs, Inc. All rights reserved.
          </motion.p>
          <div className="flex flex-wrap gap-6 order-1 md:order-2">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ y: -2 }}
                className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
