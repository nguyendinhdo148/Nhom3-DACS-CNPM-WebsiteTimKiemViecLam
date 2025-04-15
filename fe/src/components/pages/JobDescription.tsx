import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const JobDescription = () => {
  const isApplied = false;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Frontend Developer</h1>
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
        </div>
        <Button
          disabled={isApplied}
          variant="outline"
          className={`rounded-lg ${
            isApplied
              ? "bg-black text-white"
              : "mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 cursor-pointer"
          }`}
        >
          {isApplied ? "Đã ứng tuyển" : "Ứng tuyển ngay"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
        Job description
      </h1>
      <div className="my-4">
        <h1 className="font-bold my-1">
          Role:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Frontend Developer
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Location:{" "}
          <span className="pl-4 font-normal text-gray-800">HCM City</span>
        </h1>
        <h1 className="font-bold my-1">
          Description:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:{" "}
          <span className="pl-4 font-normal text-gray-800">
            2 years experience
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Salary:{" "}
          <span className="pl-4 font-normal text-gray-800">5.000.000 VND</span>
        </h1>
        <h1 className="font-bold my-1">
          Total application:{" "}
          <span className="pl-4 font-normal text-gray-800">6</span>
        </h1>
        <h1 className="font-bold my-1">
          Posted date:{" "}
          <span className="pl-4 font-normal text-gray-800">01-01-2025</span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
