import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const filteredData = [
  {
    filterType: "Địa điểm",
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
    filterType: "Việc làm",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Fullstack Developer",
      "DevOps Engineer",
      "Data Scientist",
      "Graphics Designer",
      "UI/UX Designer",
      "Mobile Developer",
      "Game Developer",
    ],
  },
  {
    filterType: "Lương",
    array: [
      "0 - 1.000.000",
      "1.000.000 - 3.000.000",
      "3.000.000 - 5.000.000",
      "> 5.000.000",
    ],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Lọc công việc</h1>
      <hr className="mt-3" />

      <RadioGroup className="mt-3">
        {filteredData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.array.map((item, index) => {
              return (
                <div key={index} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem
                    value={item}
                    className="cursor-pointer h-5 w-5 border-2 border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:border-indigo-500 checked:bg-indigo-100"
                  />
                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
