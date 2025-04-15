import LatestJobCards from "./LatestJobCards";

const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold">
        Việc làm{" "}
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          mới nhất và hàng đầu
        </span>
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <LatestJobCards key={index} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
