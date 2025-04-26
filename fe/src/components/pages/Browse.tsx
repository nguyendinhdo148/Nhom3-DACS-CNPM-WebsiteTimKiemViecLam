import Navbar from "../shared/Navbar";
import Job from "./components/Job";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Browse = () => {
  const location = useLocation(); // lấy URL hiện tại
  const dispatch = useDispatch();

  // Lấy query từ URL và set lại searchedQuery trong Redux (chỉ 1 lần khi component mount)
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query") || "";
    dispatch(setSearchedQuery(query));
  }, [location.search, dispatch]);

  const { allJobs, searchedQuery } = useSelector(
    (store: RootState) => store.job
  );

  const filteredJobs = allJobs.filter((job) => {
    const isActive = job.status === "active";
    const keyword = searchedQuery.toLowerCase();

    const matchesTitle = job.title.toLowerCase().includes(keyword);
    const matchesLocation = job.location.toLowerCase().includes(keyword);
    const matchesCompany = job.company.name.toLowerCase().includes(keyword);
    const matchesCategory = job.category.toLowerCase().includes(keyword);

    return (
      isActive &&
      (matchesTitle || matchesLocation || matchesCompany || matchesCategory)
    );
  });

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Kết quả tìm kiếm ({filteredJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {filteredJobs.map((job) => {
            return <Job key={job._id} job={job} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
