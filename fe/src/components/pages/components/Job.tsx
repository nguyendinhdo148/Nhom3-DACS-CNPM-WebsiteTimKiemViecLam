import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "123"
  return (
    <div className="p-6 rounded-lg shadow-sm bg-white border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-medium text-gray-500">Đăng 2 ngày trước</p>
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
      <div className="flex items-start gap-3 mb-5 cursor-pointer">
        <Avatar className="h-12 w-12 border border-gray-200 cursor-pointer">
          <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" />
        </Avatar>
        <div>
          <h2 className="font-semibold text-gray-900">
            Senior Frontend Developer
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-sm text-gray-600">Google</p>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin className="h-3 w-3" />
              <span>Ho Chi Minh City</span>
            </div>
          </div>
        </div>
      </div>

      {/* Job description */}
      <div className="mb-5 cursor-pointer">
        <p className="text-gray-700 text-sm line-clamp-3">
          We're looking for an experienced Frontend Developer to join our team.
          You'll work with modern technologies like React, TypeScript, and
          Next.js to build innovative web applications that serve millions of
          users worldwide.
        </p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Badge
          className="text-blue-600 bg-blue-50 hover:bg-blue-100 font-medium"
          variant="outline"
        >
          12 Vị trí
        </Badge>
        <Badge
          className="text-purple-600 bg-purple-50 hover:bg-purple-100 font-medium"
          variant="outline"
        >
          Part Time
        </Badge>
        <Badge
          className="text-green-600 bg-green-50 hover:bg-green-100 font-medium"
          variant="outline"
        >
          5 triệu
        </Badge>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <Button
        onClick={() => navigate(`description/${jobId}`)}
          variant="outline"
          className="flex-1 border-gray-300 hover:bg-gray-50 cursor-pointer"
        >
          Xem chi tiết
        </Button>
        <Button className="flex-1 bg-[#00b14f] hover:bg-[#009640] cursor-pointer">
          Lưu lại sau
        </Button>
      </div>
    </div>
  );
};

export default Job;
