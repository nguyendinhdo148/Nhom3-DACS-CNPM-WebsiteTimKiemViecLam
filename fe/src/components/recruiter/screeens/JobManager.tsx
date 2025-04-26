import { useState, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Edit2,
  Eye,
  FileText,
  MapPin,
  Plus,
  Trash2,
  XCircle,
} from "lucide-react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { API } from "@/utils/constant";
import Swal from "sweetalert2";
import { JobFormDialog } from "../components/JobFormDialog";
import { setJobsForRecruiter, setSelectedJob } from "@/redux/jobSlice";
import type { RootState } from "@/redux/store";
import type { JobFormData } from "../components/JobFormDialog";
import { paginate } from "@/components/helpers/pagination";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { JobDetailDialog } from "../components/JobDetailDialog";
import { Job } from "@/types/job";
import { PaginationButtons } from "@/components/helpers/PaginationButtons";
import CommonSkeleton from "../components/Skeleton/CommonSkeleton";

const JobManager = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedDetailJob, setSelectedDetailJob] = useState<Job | null>(null);

  const dispatch = useDispatch();
  const { jobsForRecruiter, selectedJob } = useSelector(
    (store: RootState) => store.job
  );

  // filter jobs by status
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredJobs = jobsForRecruiter.filter((job) =>
    statusFilter === "all" ? true : job.status === statusFilter
  );

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6; // Number of jobs per page

  const { paginatedData: paginatedJobs, totalPages } = paginate(
    filteredJobs,
    currentPage,
    jobsPerPage
  );

  // Reset current page when status filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter]);

  const fetchJobs = useCallback(async () => {
    try {
      const response = await axios.get(`${API}/job/recruiter-jobs`, {
        withCredentials: true,
      });
      if (response.data.success) {
        dispatch(setJobsForRecruiter(response.data.jobs));
      }
    } catch (error) {
      console.error("Fetch jobs error:", error);
      toast.error("Không thể tải danh sách việc làm");
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleAddJob = async (formData: JobFormData) => {
    try {
      const response = await axios.post(
        `${API}/job/create-job`,
        {
          ...formData,
          requirements: formData.requirements,
          benefits: formData.benefits,
          salary: formData.salary,
          company: formData.company._id,
          category: formData.category,
          status: formData.status,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success("Đăng tin tuyển dụng thành công!");
        await fetchJobs();
      }
    } catch (error) {
      console.error("Add job error:", error);
      toast.error(
        axios.isAxiosError(error)
          ? error.response?.data.message
          : "Không thể đăng tin tuyển dụng mới"
      );
    }
  };

  const handleEditJob = async (formData: JobFormData) => {
    if (!selectedJob) return;

    try {
      const response = await axios.put(
        `${API}/job/update-job/${selectedJob._id}`,
        {
          ...formData,
          requirements: formData.requirements,
          benefits: formData.benefits,
          salary: formData.salary,
          company: formData.company._id,
          category: formData.category,
          status: formData.status,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success("Cập nhật tin tuyển dụng thành công!");
        await fetchJobs();
      }
    } catch (error) {
      console.error("Edit job error:", error);
      toast.error(
        axios.isAxiosError(error)
          ? error.response?.data.message
          : "Không thể cập nhật tin tuyển dụng"
      );
    }
  };

  const handleDelete = async (job_id: string) => {
    const result = await Swal.fire({
      title: "Bạn có chắc muốn xóa tin tuyển dụng này?",
      text: "Hành động này không thể hoàn tác!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });

    if (!result.isConfirmed) return;

    try {
      const response = await axios.delete(`${API}/job/delete-job/${job_id}`, {
        withCredentials: true,
      });

      if (response.data.success) {
        await fetchJobs();
        toast.success("Xóa tin tuyển dụng thành công!");
      }
    } catch (error) {
      console.error("Delete job error:", error);
      toast.error("Không thể xóa tin tuyển dụng");
    }
  };

  const jobsRef = useRef<HTMLDivElement | null>(null);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    jobsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) return <CommonSkeleton />;

  return (
    <div ref={jobsRef} className="space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
            🎯 Quản lý việc làm
          </h1>
          <p className="text-gray-500 mt-1">
            Đăng và quản lý các tin tuyển dụng của bạn
          </p>
        </div>
        <Button
          className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md hover:shadow-lg transition"
          onClick={() => {
            dispatch(setSelectedJob(null));
            setIsDialogOpen(true);
          }}
        >
          <div className="flex items-center gap-2">
            <Plus className="size-5" />
            <span className="text-[16px]">Đăng tin tuyển dụng</span>
          </div>
        </Button>
      </div>

      {/* Filter by status */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-4 items-center">
          <label className="text-sm text-gray-600 font-medium">
            Lọc theo trạng thái:
          </label>
          <Select
            onValueChange={(value) => setStatusFilter(value)}
            defaultValue="all"
          >
            <SelectTrigger className="w-[180px] border-gray-300 rounded-md shadow-sm hover:border-gray-400 transition-all duration-200 cursor-pointer">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-lg rounded-md border border-gray-200 hover:shadow-xl transition-all duration-200">
              <SelectItem
                value="all"
                className="cursor-pointer hover:bg-gray-100"
              >
                Tất cả
              </SelectItem>
              <SelectItem
                value="active"
                className="cursor-pointer hover:bg-gray-100"
              >
                Hoạt động
              </SelectItem>
              <SelectItem
                value="draft"
                className="cursor-pointer hover:bg-gray-100"
              >
                Nháp
              </SelectItem>
              <SelectItem
                value="closed"
                className="cursor-pointer hover:bg-gray-100"
              >
                Đã đóng
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="shadow-sm border border-gray-200 rounded-xl">
        <div className="p-4 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 text-gray-700">
                <TableHead className="w-[280px]">Vị trí & Công ty</TableHead>
                <TableHead className="w-[240px]">Địa điểm</TableHead>
                <TableHead className="w-[140px]">Trạng thái</TableHead>
                <TableHead className="w-[100px]">Mức lương</TableHead>
                <TableHead className="w-[100px]">Kinh nghiệm</TableHead>
                <TableHead className="w-[80px]">Ứng viên</TableHead>
                <TableHead className="w-[100px] text-center">
                  Thao tác
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedJobs.length > 0 ? (
                paginatedJobs.map((job) => (
                  <TableRow
                    key={job._id}
                    className="hover:bg-gray-50 transition-all duration-150"
                  >
                    <TableCell className="font-medium text-gray-800 max-w-[240px] truncate">
                      {job.title}
                    </TableCell>
                    <TableCell className="text-gray-600 max-w-[200px] truncate">
                      <MapPin className="size-4 mr-1 text-gray-500 inline" />
                      {job.location}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          "px-3 py-1 rounded-full font-medium shadow-sm " +
                          (job.status === "active"
                            ? "bg-green-100 text-green-700"
                            : job.status === "draft"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700")
                        }
                        variant="outline"
                        style={{ minWidth: 110, justifyContent: "center" }}
                      >
                        {job.status === "active" && (
                          <CheckCircle2 className="w-4 h-4 mr-1 text-green-500" />
                        )}
                        {job.status === "draft" && (
                          <FileText className="w-4 h-4 mr-1 text-yellow-500" />
                        )}
                        {job.status === "closed" && (
                          <XCircle className="w-4 h-4 mr-1 text-red-500" />
                        )}
                        {job.status === "active"
                          ? "Hoạt động"
                          : job.status === "draft"
                          ? "Nháp"
                          : "Đã đóng"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-800 font-medium">
                      {job.salary.toLocaleString()} Triệu VNĐ
                    </TableCell>
                    <TableCell className="text-[14px] text-gray-800 font-medium text-center">
                      {job.experienceLevel} năm
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="text-sm px-3 py-1 rounded-2xl font-medium shadow-sm bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-all duration-200"
                        style={{ minWidth: 40, justifyContent: "center" }}
                      >
                        {job.applications?.length || 0}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-gray-100 cursor-pointer"
                          title="Xem chi tiết"
                          onClick={() => {
                            setSelectedDetailJob(job);
                            setIsDetailOpen(true);
                          }}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-blue-100 text-blue-600 cursor-pointer"
                          onClick={() => {
                            dispatch(setSelectedJob(job));
                            setIsDialogOpen(true);
                          }}
                          title="Chỉnh sửa"
                        >
                          <Edit2 className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-red-100 text-red-600 cursor-pointer"
                          onClick={() => handleDelete(job._id)}
                          title="Xóa"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-10">
                    <div className="text-gray-500 text-lg flex flex-col items-center gap-2">
                      <span>📭 Không có tin tuyển dụng nào</span>
                      <span className="text-sm text-gray-400">
                        Hãy bắt đầu bằng cách đăng tin mới
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Pagination Buttons */}
      <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Job Form Dialog */}
      <JobFormDialog
        open={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
          dispatch(setSelectedJob(null));
        }}
        job={selectedJob}
        onSuccess={async (formData) => {
          try {
            if (selectedJob) {
              await handleEditJob(formData);
            } else {
              await handleAddJob(formData);
            }
            setIsDialogOpen(false);
            dispatch(setSelectedJob(null));
          } catch (error) {
            console.error("Form submission error:", error);
          }
        }}
      />

      {/* Job Detail Dialog */}
      <JobDetailDialog
        open={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        job={selectedDetailJob}
      />
    </div>
  );
};

export default JobManager;
