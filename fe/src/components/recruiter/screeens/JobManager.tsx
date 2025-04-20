import { useState, useCallback, useEffect } from "react";
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
import { Edit2, Eye, Plus, Trash2 } from "lucide-react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { API } from "@/utils/constant";
import Swal from "sweetalert2";
import { JobFormDialog } from "../components/JobFormDialog";
import { setJobsForRecruiter, setSelectedJob } from "@/redux/jobSlice";
import type { RootState } from "@/redux/store";
import SkeletonCompany from "../components/Skeleton/SkeletonCompany";
import type { JobFormData } from "../components/JobFormDialog";

const JobManager = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dispatch = useDispatch();
  const { jobsForRecruiter, selectedJob } = useSelector(
    (store: RootState) => store.job
  );

  // Fetch jobs
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

  // Thêm mới job
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
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
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

  // Sửa job
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
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
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

  // Xóa job
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
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "Không thể xóa tin tuyển dụng"
        );
      } else {
        toast.error("Không thể xóa tin tuyển dụng");
      }
    }
  };

  // Không filter theo status nữa
  const filteredJobs = jobsForRecruiter;

  if (isLoading) {
    return <SkeletonCompany />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản lý việc làm</h1>
          <p className="mt-1 text-gray-600">
            Đăng và quản lý các tin tuyển dụng của bạn
          </p>
        </div>
        <Button
          className="text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
          onClick={() => {
            dispatch(setSelectedJob(null));
            setIsDialogOpen(true);
          }}
        >
          <Plus className="w-4 h-4 mr-2" />
          Đăng tin tuyển dụng
        </Button>
      </div>

      {/* Jobs List */}
      <Card>
        <div className="p-6">
          {/* Bỏ filter badge theo status */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Vị trí & Công ty</TableHead>
                <TableHead>Địa điểm</TableHead>
                <TableHead>Mức lương</TableHead>
                <TableHead>Kinh nghiệm</TableHead>
                <TableHead>Ứng viên</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <TableRow key={job._id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{job.title}</div>
                      </div>
                    </TableCell>
                    <TableCell>{job.location}</TableCell>
                    <TableCell>{job.salary.toLocaleString()} Triệu</TableCell>
                    <TableCell>{job.experienceLevel} năm</TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        {job.applications?.length || 0}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-gray-100"
                          title="Xem chi tiết"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-blue-50 text-blue-600"
                          onClick={() => {
                            dispatch(setSelectedJob(job));
                            setIsDialogOpen(true);
                          }}
                          title="Chỉnh sửa"
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-red-50 text-red-600"
                          onClick={() => handleDelete(job._id)}
                          title="Xóa"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    <div className="text-gray-500">
                      Chưa có tin tuyển dụng nào
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

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
    </div>
  );
};

export default JobManager;
