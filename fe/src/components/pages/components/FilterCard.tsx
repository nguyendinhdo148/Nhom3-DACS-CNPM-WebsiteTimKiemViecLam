import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react"; // Icon đẹp, nếu bạn dùng Lucide

const filteredData = [
  {
    label: "Địa điểm",
    filterType: "location",
    array: [
      "Hà Nội",
      "Hồ Chí Minh",
      "Đà Nẵng",
      "Quảng Ninh",
      "Cần Thơ",
      "Thái Bình",
      "Hải Phòng",
    ],
  },
  {
    label: "Việc làm",
    filterType: "jobType",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Fullstack Developer",
      "DevOps Engineer",
      "AWS Cloud",
      "Graphic Designer",
      "AI Engineer",
      "Mobile Developer",
      "Sales",
      "Marketing",
    ],
  },
  {
    label: "Lương",
    filterType: "salary",
    array: [
      "0 - 5.000.000",
      "5.000.000 - 15.000.000",
      "15.000.000 - 40.000.000",
      "> 40.000.000",
    ],
  },
];

const FilterCard = ({
  filters,
  onFilterChange,
  onResetFilters,
}: {
  filters: {
    location: string[];
    jobType: string[];
    salary: string[];
  };
  onFilterChange: (type: string, value: string) => void;
  onResetFilters: () => void;
}) => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-semibold text-sm text-gray-800">Lọc công việc</h1>
        <button
          onClick={onResetFilters}
          className="flex items-center gap-1 px-3 py-1.5 text-sm text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition-all"
        >
          <Trash2 size={14} />
          Xóa bộ lọc
        </button>
      </div>

      {filteredData.map((section, index) => (
        <div key={index} className="mt-4">
          <h2 className="font-medium text-base text-gray-700 mb-2 border-b pb-1">
            {section.label}
          </h2>
          <div className="grid grid-cols-1 gap-y-2">
            {section.array.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <Checkbox
                  id={`${section.filterType}-${item}`}
                  checked={
                    filters[section.filterType as keyof typeof filters].includes(item)
                  }
                  onCheckedChange={() =>
                    onFilterChange(section.filterType, item)
                  }
                />
                <Label
                  htmlFor={`${section.filterType}-${item}`}
                  className="cursor-pointer text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
