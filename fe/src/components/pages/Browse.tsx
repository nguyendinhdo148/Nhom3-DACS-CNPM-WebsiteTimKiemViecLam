import Navbar from "../shared/Navbar";
import Job from "./components/Job";

const randomJobs = [1, 2, 3, 4, 5, 6];

const Browse = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl font-bold text-gray-900">
          Kết quả tìm kiếm ({randomJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {randomJobs.map((_, index) => {
            return <Job key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
