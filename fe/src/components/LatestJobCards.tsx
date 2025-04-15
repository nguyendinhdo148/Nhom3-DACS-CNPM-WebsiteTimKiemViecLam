import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const LatestJobCards = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Tên công ty</h1>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            Vietnam
          </span>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Tiêu đề công việc
        </h1>
        <p className="text-gray-600 line-clamp-2">
          Mô tả công việc ở đây. Đây có thể là bản tóm tắt ngắn gọn về những gì
          công việc đòi hỏi và những bằng cấp cần thiết cho vị trí này.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
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

      <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 cursor-pointer">
        Ứng tuyển ngay
      </Button>
    </div>
  );
};

export default LatestJobCards;
