import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate(`/browse?query=${query}`);
  };

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-6">
        <span className="mx-auto px-5 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 text-[#6a38c2] text-sm font-medium tracking-wide border border-purple-100 shadow-sm inline-flex items-center gap-2">
          <span className="animate-pulse">✨</span> Trang web tìm kiếm việc làm
          số 1
        </span>
        <h1 className="text-5xl font-bold">
          Tìm kiếm, Nộp đơn & <br /> Nhận công việc{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            mơ ước của bạn
          </span>{" "}
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Khám phá hơn{" "}
          <span className="font-medium text-gray-800">10,000+</span> cơ hội từ
          các công ty hàng đầu trên toàn thế giới.
        </p>
        <div className="flex w-[46%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="text"
            placeholder="Vị trí tuyển dụng, tên công ty..."
            className="outline-none border-none w-full"
          />
          <Button
            onClick={searchJobHandler}
            variant="default"
            className="rounded-r-full bg-[#6a38c2] cursor-pointer hover:opacity-90 transition-all duration-200 ease-in-out"
          >
            <Search className="size-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
