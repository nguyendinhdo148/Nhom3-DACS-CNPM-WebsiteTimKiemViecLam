import Navbar from "../shared/Navbar";
import FilterCard from "./components/FilterCard";
import Job from "./components/Job";

const jobsArr = [1, 2, 3, 4, 5, 6];

const Jobs = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="max-w-7xl mx-auto">
        <div className="flex gap-5">
          <div className="w-[20%] h-[88vh] overflow-y-auto">
            {/* Filter Page */}
            <FilterCard />
          </div>
          {/* Job Cards */}
          {jobsArr.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {jobsArr.map((_, index) => (
                  <Job key={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
