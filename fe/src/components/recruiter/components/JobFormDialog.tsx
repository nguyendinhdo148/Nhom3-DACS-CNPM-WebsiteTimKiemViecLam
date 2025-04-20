import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import type { Job } from "@/types/job";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setCompanies } from "@/redux/companySlice";
import axios from "axios";
import { API } from "@/utils/constant";

export interface JobFormData {
  title: string;
  description: string;
  requirements: string[];
  salary: number;
  benefits: string[];
  location: string;
  jobType: string;
  experienceLevel: number;
  position: number;
  company: {
    _id: string;
    name: string;
  };
}

interface JobFormDialogProps {
  open: boolean;
  onClose: () => void;
  job: Job | null;
  onSuccess: (data: JobFormData) => Promise<void>;
}

const initialFormData: JobFormData = {
  title: "",
  description: "",
  requirements: [],
  benefits: [],
  salary: 0,
  location: "",
  jobType: "",
  experienceLevel: 0,
  position: 1,
  company: {
    _id: "",
    name: "",
  },
};

export const JobFormDialog = ({
  open,
  onClose,
  job,
  onSuccess,
}: JobFormDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<JobFormData>(initialFormData);
  const dispatch = useDispatch();

  const { companies } = useSelector((state: RootState) => state.company);

  const fetchCompanies = useCallback(async () => {
    try {
      const res = await axios.get(`${API}/company`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setCompanies(res.data.companies));
      }
    } catch (error) {
      console.error("Fetch companies error:", error);
      toast.error("Không thể tải danh sách công ty!");
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  useEffect(() => {
    if (!open) {
      setFormData(initialFormData);
      return;
    }
    if (job) {
      setFormData({
        title: job.title,
        description: job.description,
        requirements: job.requirements,
        benefits: job.benefits,
        salary: Number(job.salary) || 0,
        location: job.location,
        jobType: job.jobType,
        experienceLevel: job.experienceLevel,
        position: job.position,
        company: {
          _id: job.company?._id || "",
          name: job.company?.name || "",
        },
      });
    } else {
      setFormData(initialFormData);
    }
  }, [job, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error("Vui lòng nhập tiêu đề công việc");
      return;
    }
    if (!formData.description.trim()) {
      toast.error("Vui lòng nhập mô tả công việc");
      return;
    }
    if (!formData.location.trim()) {
      toast.error("Vui lòng nhập địa điểm làm việc");
      return;
    }
    if (!formData.company._id) {
      toast.error("Vui lòng chọn công ty");
      return;
    }
    if (formData.salary <= 0) {
      toast.error("Vui lòng nhập mức lương hợp lệ");
      return;
    }
    if (formData.experienceLevel < 0) {
      toast.error("Vui lòng nhập số năm kinh nghiệm hợp lệ");
      return;
    }

    setIsSubmitting(true);

    try {
      await onSuccess({
        ...formData,
        salary: Number(formData.salary),
        requirements: formData.requirements,
        benefits: formData.benefits,
        experienceLevel: Number(formData.experienceLevel),
        position: Number(formData.position),
      });
      onClose();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Có lỗi xảy ra khi xử lý form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {job ? "Chỉnh sửa tin tuyển dụng" : "Đăng tin tuyển dụng mới"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sửa trường company */}
            <div className="grid gap-2">
              <Label htmlFor="company">
                Công ty <span className="text-red-700">*</span>
              </Label>
              <Select
                value={formData.company._id}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    company: { ...formData.company, _id: value },
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Chọn công ty">
                    {
                      companies.find((c) => c._id === formData.company._id)
                        ?.name
                    }
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-white max-h-[300px] overflow-y-auto">
                  {companies.map((company) => (
                    <SelectItem key={company._id} value={company._id}>
                      {company.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="title">
                Tiêu đề công việc <span className="text-red-700">*</span>
              </Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="VD: Senior Frontend Developer"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">
                Địa điểm <span className="text-red-700">*</span>
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                placeholder="VD: Hồ Chí Minh"
                required
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">
              Mô tả công việc <span className="text-red-700">*</span>
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Mô tả chi tiết về công việc. Mỗi đoạn mô tả đều kết thúc bằng dấu chấm."
              required
              rows={5}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="requirements">Yêu cầu ứng viên</Label>
              <Textarea
                id="requirements"
                value={formData.requirements}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    requirements: e.target.value.split("\n").filter(Boolean),
                  })
                }
                placeholder="Mỗi yêu cầu đều kết thúc bằng dấu chấm."
                rows={5}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="benefits">Quyền lợi</Label>
              <Textarea
                id="benefits"
                value={formData.benefits.join("\n")}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    benefits: e.target.value.split("\n").filter(Boolean),
                  })
                }
                placeholder="Mỗi quyền lợi đều kết thúc bằng dấu chấm"
                rows={5}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="jobType">
                Hình thức làm việc <span className="text-red-700">*</span>
              </Label>
              <Select
                value={formData.jobType}
                onValueChange={(value) =>
                  setFormData({ ...formData, jobType: value })
                }
              >
                <SelectTrigger id="jobType">
                  <SelectValue placeholder="Chọn hình thức" />
                </SelectTrigger>
                <SelectContent className="bg-white max-h-[300px] overflow-y-auto">
                  <SelectItem value="Full-Time">Toàn thời gian</SelectItem>
                  <SelectItem value="Part-Time">Bán thời gian</SelectItem>
                  <SelectItem value="Remote">Từ xa</SelectItem>
                  <SelectItem value="Internship">Thực tập</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="experienceLevel">
                Kinh nghiệm (năm) <span className="text-red-700">*</span>
              </Label>
              <Input
                id="experienceLevel"
                type="number"
                min="0"
                value={formData.experienceLevel}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    experienceLevel: parseInt(e.target.value) || 0,
                  })
                }
                placeholder="VD: 2"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="salary">
                Mức lương (Triệu) <span className="text-red-700">*</span>
              </Label>
              <Input
                id="salary"
                type="number"
                value={formData.salary}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    salary: parseInt(e.target.value) || 0,
                  })
                }
                placeholder="VD: 15"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="position">
                Số lượng tuyển <span className="text-red-700">*</span>
              </Label>
              <Input
                id="position"
                type="number"
                min="1"
                value={formData.position}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    position: parseInt(e.target.value) || 1,
                  })
                }
                placeholder="VD: 1"
                required
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Hủy
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting ? "Đang xử lý..." : job ? "Cập nhật" : "Đăng tin"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
