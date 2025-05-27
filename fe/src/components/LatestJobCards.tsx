import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import type { Job } from "@/types/job"
import { AnimatePresence, motion } from "framer-motion"
import { MapPin, Briefcase, Clock, DollarSign, Award } from "lucide-react"

interface LatestJobCardsProps {
  job: Job
}

const LatestJobCards = ({ job }: LatestJobCardsProps) => {
  const [showDetails, setShowDetails] = useState(false)
  const [showOnLeft, setShowOnLeft] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Check if the card is near the right edge of the screen
  useEffect(() => {
    const checkPosition = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const windowWidth = window.innerWidth
        // If the right edge of the card is close to the right edge of the window
        // or if there's not enough space for the panel on the right
        setShowOnLeft(rect.right > windowWidth - 300)
      }
    }

    checkPosition()
    window.addEventListener("resize", checkPosition)
    return () => window.removeEventListener("resize", checkPosition)
  }, [])

  return (
    <div className="relative" ref={cardRef}>
      <div
        className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {job?.company.logo && (
                <img
                  src={job.company.logo || "/placeholder.svg"}
                  alt={`${job.company.name} logo`}
                  className="h-8 object-contain"
                  style={{ maxWidth: "80px" }}
                />
              )}
              <h1 className="text-xl font-bold text-gray-800">{job?.company.name}</h1>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{job?.company.location}</span>
          </div>
        </div>

        <div className="mb-6 relative">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors duration-200">
            {job?.title}
          </h1>
          <p className="text-gray-600 line-clamp-2">{job?.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge className="text-blue-600 bg-blue-50 hover:bg-blue-100 font-medium" variant="outline">
            {job?.position} vị trí
          </Badge>
          <Badge className="text-purple-600 bg-purple-50 hover:bg-purple-100 font-medium" variant="outline">
            {job?.jobType}
          </Badge>
          <Badge className="text-green-600 bg-green-50 hover:bg-green-100 font-medium" variant="outline">
            {job?.salary} triệu
          </Badge>
        </div>

        <Link to={`/jobs/description/${job?._id}`}>
          <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 cursor-pointer">
            Ứng tuyển ngay
          </Button>
        </Link>
      </div>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, x: showOnLeft ? -10 : 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: showOnLeft ? -10 : 10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-0 ${
              showOnLeft ? "right-full mr-4" : "left-full ml-4"
            } w-100 bg-white rounded-lg shadow-xl border border-gray-200 z-50`}
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                {job?.company.logo && (
                  <img
                    src={job.company.logo || "/placeholder.svg"}
                    alt={`${job.company.name} logo`}
                    className="h-8 object-contain"
                    style={{ maxWidth: "80px" }}
                  />
                )}
                <h2 className="text-lg font-bold text-gray-800">{job?.company.name}</h2>
              </div>
              <h3 className="text-lg font-semibold text-blue-600 mb-1">{job?.title}</h3>
              <div className="flex items-center text-sm text-gray-500 gap-1">
                <MapPin size={14} className="text-gray-400" />
                <span>{job?.company.location}</span>
              </div>
            </div>

            <div className="p-4 max-h-[300px] overflow-y-auto">
              <div className="space-y-3 text-sm">
                {/* Key details in a compact format */}
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="text-blue-500 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-700">Vị trí:</span>{" "}
                    <span className="text-gray-600">{job?.position} vị trí</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-purple-500 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-700">Loại hình:</span>{" "}
                    <span className="text-gray-600">{job?.jobType}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <DollarSign size={16} className="text-green-500 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-700">Lương:</span>{" "}
                    <span className="text-gray-600">{job?.salary} triệu</span>
                  </div>
                </div>

                {job?.experienceLevel && (
                  <div className="flex items-start gap-2">
                    <Award size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-700">Kinh nghiệm:</span>{" "}
                      <span className="text-gray-600">{job?.experienceLevel}</span>
                    </div>
                  </div>
                )}

                {/* Collapsible sections for longer content */}
                <div className="pt-2">
                  <div className="font-medium text-gray-700 mb-1">Mô tả công việc:</div>
                  <p className="text-gray-600 line-clamp-3">{job?.description}</p>
                </div>

                {job?.requirements && (
                  <div className="pt-2">
                    <div className="font-medium text-gray-700 mb-1">Yêu cầu:</div>
                    <p className="text-gray-600 line-clamp-3">{job?.requirements}</p>
                  </div>
                )}

                {job?.benefits && (
                  <div className="pt-2">
                    <div className="font-medium text-gray-700 mb-1">Phúc lợi:</div>
                    <p className="text-gray-600 line-clamp-3">{job?.benefits}</p>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-2">
                <Link to={`/jobs/description/${job?._id}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 cursor-pointer text-sm">
                    Ứng tuyển ngay
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LatestJobCards
