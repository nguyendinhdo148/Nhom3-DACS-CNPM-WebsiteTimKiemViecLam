import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Job } from "@/types/job";
import { Bookmark, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale"; // dùng locale tiếng Việt nếu muốn

interface JobProps {
  job: Job;
}

const Job = ({ job }: JobProps) => {
  return (
    <div className="p-6 rounded-lg shadow-sm bg-white border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-medium text-gray-500">
          Đăng{" "}
          {formatDistanceToNow(new Date(job?.createdAt || new Date()), {
            addSuffix: true,
            locale: vi,
          })}
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full cursor-pointer"
          aria-label="Save job"
        >
          <Bookmark className="size-4" />
        </Button>
      </div>

      {/* Company info */}
      <div className="flex items-start gap-3 mb-5">
        <Avatar className="size-14 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all duration-200">
          <AvatarImage
            src={job?.company.logo || "/default_company_logo.jpg"}
            alt={job?.company.name}
            className="object-contain p-1"
          />
        </Avatar>

        <div>
          <h2 className="font-semibold text-gray-900 line-clamp-1">
            {job?.title}
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-sm text-gray-600">{job?.company.name}</p>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin className="h-3 w-3" />
              <span>{job?.company?.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Job description */}
      <div className="mb-5">
        <p className="text-gray-700 text-sm line-clamp-3">{job?.description}</p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Badge
          className="text-blue-600 bg-blue-50 hover:bg-blue-100 font-medium"
          variant="outline"
        >
          {job?.position} Vị trí
        </Badge>
        <Badge
          className="text-purple-600 bg-purple-50 hover:bg-purple-100 font-medium"
          variant="outline"
        >
          {job?.jobType}
        </Badge>
        <Badge
          className="text-green-600 bg-green-50 hover:bg-green-100 font-medium"
          variant="outline"
        >
          {job?.salary} triệu
        </Badge>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <Link to={`/jobs/description/${job?._id}`} className="flex-1">
          <Button className="w-full py-2 px-6 bg-[#00b14f] text-white hover:bg-[#009640] cursor-pointer">
            Xem chi tiết
          </Button>
        </Link>
        <Button className="flex-1 w-full py-1 px-4 border border-gray-300 hover:bg-gray-50 cursor-pointer">
          Lưu lại sau
        </Button>
      </div>
    </div>
  );
};

export default Job;
