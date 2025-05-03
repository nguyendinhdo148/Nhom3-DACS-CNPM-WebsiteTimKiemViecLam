import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import FilterCard from "./components/FilterCard";
import Job from "./components/Job";
import { RootState } from "@/redux/store";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import NoJobFound from "../helpers/NoJobFound";

const Jobs = () => {
  const { allJobs } = useSelector((store: RootState) => store.job);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    location: [] as string[],
    jobType: [] as string[],
    salary: [] as string[],
  });

  useGetAllJobs();

  // Cập nhật state filters từ URL params
  useEffect(() => {
    const queryFilters = {
      location: searchParams.get("location")?.split(",") || [],
      jobType: searchParams.get("jobType")?.split(",") || [],
      salary: searchParams.get("salary")?.split(",") || [],
    };
    setFilters(queryFilters);
  }, [searchParams]);

  // Cập nhật URL khi lọc thay đổi
  const updateURL = (updatedFilters: typeof filters) => {
    const params = new URLSearchParams();
    Object.entries(updatedFilters).forEach(([key, values]) => {
      if (values.length > 0) {
        params.set(key, values.join(","));
      }
    });
    navigate(`?${params.toString()}`, { replace: true });
  };

  const handleFilterChange = (type: string, value: string) => {
    setFilters((prev) => {
      const current = prev[type as keyof typeof prev];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];

      const newFilters = { ...prev, [type]: updated };
      updateURL(newFilters);
      return newFilters;
    });
  };

  const resetFilters = () => {
    const cleared = { location: [], jobType: [], salary: [] };
    setFilters(cleared);
    updateURL(cleared);
  };

  const locationAliasMap: Record<string, string[]> = {
    "Hồ Chí Minh": ["hochiminh", "hcm", "ho chi minh"],
    "Hà Nội": ["hanoi", "hn"],
    "Đà Nẵng": ["danang", "dn"],
    "Quảng Ninh": ["quangninh"],
    "Cần Thơ": ["cantho"],
    "Thái Bình": ["thaibinh"],
    "Hải Phòng": ["haiphong"],
  };

  const normalize = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD") // xóa dấu tiếng Việt
      .replace(/[\u0300-\u036f]/g, "") // loại bỏ ký tự dấu
      .replace(/\s/g, "") // xóa khoảng trắng
      .replace(/\./g, ""); // xóa dấu chấm nếu có

  // Lọc job theo filters
  const filteredJobs = allJobs.filter((job) => {
    const matchLocation =
      filters.location.length === 0 ||
      filters.location.some((filterLoc) => {
        const jobLocNorm = normalize(job.company.location ?? "");
        const aliases = locationAliasMap[filterLoc] || [normalize(filterLoc)];
        return aliases.some((alias) => jobLocNorm.includes(alias));
      });

    const matchJobType =
      filters.jobType.length === 0 ||
      filters.jobType.some((filter) =>
        job.title.toLowerCase().includes(filter.toLowerCase())
      );

    const matchSalary =
      filters.salary.length === 0 ||
      filters.salary.some((range) => {
        if (range.includes(">")) {
          return job.salary > 40; // > 40 triệu
        } else {
          const [min, max] = range
            .split(" - ")
            .map((x) => Number(x.replace(/\./g, "")) / 1_000_000); // chuyển về triệu
          return job.salary >= min && job.salary <= max;
        }
      });

    return (
      job.status === "active" && matchLocation && matchJobType && matchSalary
    );
  });

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-5">
          <div className="w-[20%] h-[88vh] overflow-y-auto">
            <FilterCard
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={resetFilters}
            />
          </div>
          <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
            {filteredJobs.length === 0 ? (
              <NoJobFound />
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {filteredJobs.map((job, index) => (
                  <Job key={index} job={job} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
