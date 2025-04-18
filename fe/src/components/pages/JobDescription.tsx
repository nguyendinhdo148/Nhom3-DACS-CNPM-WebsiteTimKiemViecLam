import { useParams } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import axios from "axios";
import { API } from "@/utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "@/redux/jobSlice";
import { RootState } from "@/redux/store";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale"; // dùng locale tiếng Việt nếu muốn
import { Avatar, AvatarImage } from "../ui/avatar";
import { motion } from "framer-motion"; // Import framer-motion
import { CircleCheck, Dot } from "lucide-react";
import toast from "react-hot-toast";

const JobDescription = () => {
  const { singleJob } = useSelector((store: RootState) => store.job);
  const { user } = useSelector((store: RootState) => store.auth);

  const isApplied =
    singleJob?.applications?.some((app) => app?.applicant._id === user?._id) ||
    false;

  const params = useParams();
  const jobId = params.id;

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${API}/job/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          console.log(res.data.job);
          dispatch(setSingleJob(res.data.job));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch]);

  const appliedJobHandle = async () => {
    try {
      const res = await axios.post(
        `${API}/application/apply-job/${jobId}`,
        {},
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success("Ứng tuyển thành công!");
        dispatch(
          setSingleJob({
            ...singleJob,
            applications: [
              ...(singleJob?.applications || []),
              { applicant: user },
            ],
          })
        );
      }
    } catch (error) {
      console.log(error);
      toast.error(error instanceof Error ? error.message : "An unknown error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <div className="flex items-start justify-between gap-4">
        {/* Left: Company Info & Job Title */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="size-16 rounded-xl border border-gray-300 bg-white shadow-sm">
              <AvatarImage
                src={singleJob?.company?.logo || "/default_company_logo.jpg"}
                alt={singleJob?.company?.name}
                className="object-contain p-1"
              />
            </Avatar>
            <div>
              <h1 className="font-bold text-2xl">{singleJob?.title}</h1>
              <p className="text-gray-600">
                {singleJob?.company?.name || "Công ty chưa xác định"}
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex items-center gap-3 flex-wrap mb-6">
            <Badge className="text-blue-600 bg-blue-100 font-medium rounded-full px-3 py-1">
              {singleJob?.position} Vị trí
            </Badge>
            <Badge className="text-purple-600 bg-purple-100 font-medium rounded-full px-3 py-1">
              {singleJob?.jobType}
            </Badge>
            <Badge className="text-green-600 bg-green-100 font-medium rounded-full px-3 py-1">
              {singleJob?.salary} triệu
            </Badge>
          </div>
        </div>

        {/* Right: Apply Button */}
        <div>
          <Button
            onClick={isApplied ? undefined : appliedJobHandle}
            disabled={isApplied}
            variant="outline"
            className={`rounded-lg cursor-pointer px-5 py-2 text-sm font-semibold shadow-md transition-colors duration-200 ${
              isApplied
                ? "bg-black text-white cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isApplied ? "Đã ứng tuyển" : "Ứng tuyển ngay"}
          </Button>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 border-b pb-2">
          Mô tả công việc
        </h2>
        <ul className="list-none text-gray-700 leading-relaxed space-y-2 pl-0">
          {singleJob?.description
            .split(/\.\s+/)
            .filter((sentence) => sentence.trim().length > 0)
            .map((sentence, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <Dot className="size-5 text-black flex-shrink-0 mt-1" />
                <span>
                  {sentence.trim()}
                  {/* Thêm dấu chấm nếu câu không kết thúc bằng dấu chấm */}
                  {!sentence.trim().endsWith(".") && "."}
                </span>
              </motion.li>
            ))}
        </ul>
      </div>

      {/* Requirements Section */}
      {singleJob?.requirements && singleJob.requirements.length > 0 && (
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
            Yêu cầu công việc
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
            {singleJob?.requirements.map((req, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col gap-1"
              >
                {/* Xử lý từng đoạn văn bản có dấu chấm */}
                {req
                  .split(/\.\s+/)
                  .filter((sentence) => sentence.trim().length > 0)
                  .map((sentence, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CircleCheck className="size-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {sentence.trim()}
                        {/* Thêm dấu chấm nếu câu không kết thúc bằng dấu chấm */}
                        {!sentence.trim().endsWith(".") && "."}
                      </span>
                    </div>
                  ))}
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {/* Job Details */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
          Chi tiết công việc
        </h2>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-gray-700"
        >
          <p>
            <strong className="text-gray-800">Vị trí:</strong>{" "}
            {singleJob?.title}
          </p>
          <p>
            <strong className="text-gray-800">Địa điểm:</strong>{" "}
            {singleJob?.location}
          </p>
          <p>
            <strong className="text-gray-800">Kinh nghiệm:</strong>{" "}
            {singleJob?.experienceLevel} năm
          </p>
          <p>
            <strong className="text-gray-800">Mức lương:</strong>{" "}
            {singleJob?.salary} triệu
          </p>
          <p>
            <strong className="text-gray-800">Số lượng tuyển:</strong>{" "}
            {singleJob?.position}
          </p>
          <p>
            <strong className="text-gray-800">Ngày đăng:</strong>{" "}
            {formatDistanceToNow(new Date(singleJob?.createdAt || new Date()), {
              addSuffix: true,
              locale: vi,
            })}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default JobDescription;
