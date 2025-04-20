import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Job } from "@/types/job";

interface LatestJobCardsProps {
  job: Job;
}

const LatestJobCards = ({ job }: LatestJobCardsProps) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {job?.company.logo && (
              <img
                src={job.company.logo}
                alt={`${job.company.name} logo`}
                className="h-8 object-contain"
                style={{ maxWidth: "80px" }}
              />
            )}
            <h1 className="text-xl font-bold text-gray-800">
              {job?.company.name}
            </h1>
          </div>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {job?.company.location}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2 line-clamp-1">
          {job?.title}
        </h1>
        <p className="text-gray-600 line-clamp-2">{job?.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge
          className="text-blue-600 bg-blue-50 hover:bg-blue-100 font-medium"
          variant="outline"
        >
          {job?.position} vị trí
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

      <Link to={`/jobs/description/${job?._id}`}>
        <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 cursor-pointer">
          Ứng tuyển ngay
        </Button>
      </Link>
    </div>
  );
};

export default LatestJobCards;
