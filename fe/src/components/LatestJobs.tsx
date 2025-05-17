import { useSelector } from "react-redux";
import LatestJobCards from "./LatestJobCards";
import { RootState } from "@/redux/store";
import { useState, useMemo, useCallback, useEffect } from "react";
import { paginate } from "./helpers/pagination";
import { PaginationButtons } from "./helpers/PaginationButtons";
import { Button } from "./ui/button";
import LatestJobsSkeleton from "./skeletons/LatestJobsSkeleton";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import NoJobFound from "./helpers/NoJobFound";
import { motion } from "framer-motion";
import {
  fadeIn,
  buttonHover,
  buttonTap,
  slideInLeft,
  slideInRight,
} from "./../framer-motion-config";

const LatestJobs = () => {
  const { allJobs } = useSelector((store: RootState) => store.job);

  const jobsRef = useRef<HTMLDivElement | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = parseInt(searchParams.get("page") || "1");
  const categoryParam = searchParams.get("category") || "all";

  const [currentPage, setCurrentPage] = useState(pageParam);
  const [filterCategory, setFilterCategory] = useState(categoryParam);

  const itemPerPage = 9;
  const categories = ["all", "it", "marketing", "design", "sales", "abc"];

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
      setCurrentPage(1); // Đặt lại trang về 1
      setFilterCategory(category);
      setSearchParams({ page: "1", category }); // Cập nhật searchParams với trang 1 và category đã chọn
    },
    [setSearchParams]
  );

  // Hàm xử lý thay đổi trang
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString(), category: filterCategory }); // Cập nhật URL khi thay đổi trang
  };

  useEffect(() => {
    // Cập nhật lại state từ URL params khi URL thay đổi
    const pageFromUrl = parseInt(searchParams.get("page") || "1");
    const categoryFromUrl = searchParams.get("category") || "all";

    setCurrentPage(pageFromUrl);
    setFilterCategory(categoryFromUrl);

    // Cuộn lên đầu trang khi thay đổi trang hoặc category
    if (jobsRef.current) {
      jobsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchParams]);

  if (allJobs.length === 0) {
    return <LatestJobsSkeleton />;
  }

  return (
    <div
      ref={jobsRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Việc làm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          mới nhất và hàng đầu
        </span>
      </h2>

      {/* Bộ lọc ngành */}
      <motion.div variants={fadeIn} className="flex gap-3 flex-wrap">
        {categories.map((category, index) => (
          <motion.div
            key={category}
            variants={index % 2 === 0 ? slideInLeft : slideInRight}
            custom={index}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            <Button
              className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out shadow-sm
                  ${
                    filterCategory === category
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent hover:shadow-md"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-purple-300 hover:text-purple-700 hover:shadow-md"
                  }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category === "all" ? "Tất cả" : category.toUpperCase()}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Hiển thị công việc */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedJobs.length === 0 ? (
          <NoJobFound />
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
