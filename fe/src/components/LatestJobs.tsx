import { useSelector } from "react-redux";
import LatestJobCards from "./LatestJobCards";
import { RootState } from "@/redux/store";

const LatestJobs = () => {
  const { allJobs } = useSelector((store: RootState) => store.job);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold">
        Việc làm{" "}
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          mới nhất và hàng đầu
        </span>
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length <= 0 ? (
          <span>Không có bài tuyển dụng nào có sẵn</span>
        ) : (
          allJobs.map((job, index) => <LatestJobCards key={index} job={job} />)
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
