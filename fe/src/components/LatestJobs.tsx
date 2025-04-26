import { useSelector } from "react-redux";
import LatestJobCards from "./LatestJobCards";
import { RootState } from "@/redux/store";
import { useState, useMemo, useCallback } from "react";
import { paginate } from "./helpers/pagination";
import { PaginationButtons } from "./helpers/PaginationButtons";
import { Button } from "./ui/button";
import LatestJobsSkeleton from "./skeletons/LatestJobsSkeleton";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

const LatestJobs = () => {
  const { allJobs } = useSelector((store: RootState) => store.job);

  const jobsRef = useRef<HTMLDivElement | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = parseInt(searchParams.get("page") || "1");
  const categoryParam = searchParams.get("category") || "all";

  const [currentPage, setCurrentPage] = useState(pageParam);
  const [filterCategory, setFilterCategory] = useState(categoryParam);

  const itemPerPage = 9;
  const categories = ["all", "it", "marketing", "design", "sales"];

  const activeJobs = useMemo(
    () => allJobs.filter((job) => job.status === "active"),
    [allJobs]
  );

  // Lọc công việc theo category
  const filteredJobs = useMemo(() => {
    if (filterCategory === "all") return activeJobs;
    return activeJobs.filter(
      (job) =>
        job.category &&
        job.category.toLowerCase() === filterCategory.toLowerCase()
    );
  }, [activeJobs, filterCategory]);

  // Tính toán phân trang
  const { paginatedData: paginatedJobs, totalPages } = useMemo(
    () => paginate(filteredJobs, currentPage, itemPerPage),
    [filteredJobs, currentPage]
  );

  // Hàm xử lý thay đổi category
  const handleCategoryChange = useCallback(
    (category: string) => {
      setCurrentPage(1);
      setFilterCategory(category);
      setSearchParams({ page: "1", category });
    },
    [setSearchParams]
  );

  // Hàm xử lý thay đổi trang
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString(), category: filterCategory });
    jobsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (allJobs.length === 0) {
    return <LatestJobsSkeleton />;
  }

  return (
    <div
      ref={jobsRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6"
    >
      <h1 className="text-4xl font-bold">
        Việc làm{" "}
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          mới nhất và hàng đầu
        </span>
      </h1>

      {/* Bộ lọc ngành */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <Button
            key={category}
            className={`px-4 py-2 rounded-full border text-sm cursor-pointer transition duration-300 ease-in-out
              ${
                filterCategory === category
                  ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700"
                  : "text-gray-700 border-gray-300 hover:text-blue-600 hover:border-blue-600"
              }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category === "all" ? "Tất cả" : category.toUpperCase()}
          </Button>
        ))}
      </div>

      {/* Hiển thị công việc */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedJobs.length === 0 ? (
          <span className="text-gray-500 col-span-full">
            Không có bài tuyển dụng nào phù hợp
          </span>
        ) : (
          paginatedJobs.map((job, index) => (
            <LatestJobCards key={index} job={job} />
          ))
        )}
      </div>

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className="flex justify-center pt-4">
          <PaginationButtons
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default LatestJobs;
