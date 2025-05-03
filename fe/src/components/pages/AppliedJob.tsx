import Navbar from "../shared/Navbar";
import AppliedJobTable from "./components/AppliedJobTable";

const AppliedJob = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 mt-10">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Công việc đã ứng tuyển
          </h1>
          <AppliedJobTable />
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
