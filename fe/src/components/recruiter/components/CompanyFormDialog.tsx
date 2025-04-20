import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { ImagePlus } from "lucide-react";
import { Company } from "@/types/comapany";
import toast from "react-hot-toast";

interface CompanyFormDialogProps {
  open: boolean;
  onClose: () => void;
  company?: Company | null;
  onSuccess: (data: FormData) => void;
}

// form data initial value for new company
const initialFormData = {
  name: "",
  description: "",
  website: "",
  location: "",
  logo: null as File | null,
};

const CompanyFormDialog = ({
  open,
  onClose,
  company,
  onSuccess,
}: CompanyFormDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const [formData, setFormData] = useState(initialFormData);

  // reset form data and logo preview when dialog is closed or company is changed
  const resetForm = () => {
    setFormData(initialFormData);
    setLogoPreview(null);
  };

  useEffect(() => {
    if (!open) {
      resetForm();
      return;
    }

    if (company) {
      setFormData({
        name: company.name || "",
        description: company.description || "",
        website: company.website || "",
        location: company.location || "",
        logo: null,
      });
      setLogoPreview(company.logo || null);
    } else {
      resetForm();
    }
  }, [company, open]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, logo: file });
      const previewURL = URL.createObjectURL(file);
      setLogoPreview(previewURL);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Vui lòng nhập tên công ty");
      return;
    }

    setIsSubmitting(true);

    try {
      const submitFormData = new FormData();
      submitFormData.append("name", formData.name.trim());
      submitFormData.append("description", formData.description.trim());
      submitFormData.append("website", formData.website.trim());
      submitFormData.append("location", formData.location.trim());
      if (formData.logo) {
        submitFormData.append("file", formData.logo);
      }

      // Pass the FormData to parent component instead of making API call here
      onSuccess(submitFormData);
      handleClose();
    } catch (error) {
      console.error("Form error:", error);
      toast.error("Có lỗi xảy ra khi xử lý form");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData(initialFormData);
    setLogoPreview(null);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] bg-white rounded-lg shadow-xl">
        <DialogHeader>
          <DialogTitle>
            {company ? "Cập nhật thông tin công ty" : "Thêm công ty mới"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Logo Upload */}
          <div className="flex items-center gap-4">
            <div
              className="size-24 border-2 border-dashed rounded-xl flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundImage: logoPreview ? `url(${logoPreview})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {!logoPreview && (
                <div className="text-center">
                  <ImagePlus className="w-8 h-8 mx-auto text-gray-400" />
                  <span className="text-xs text-gray-500">Logo</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            <div className="flex-1">
              <Label>Logo công ty</Label>
              <p className="text-sm text-gray-500 mt-1">
                Tải lên logo công ty của bạn. Đề xuất sử dụng hình ảnh PNG hoặc
                JPG với kích thước tối thiểu 200x200px.
              </p>
            </div>
          </div>

          {/* Company Name */}
          <div className="grid gap-2">
            <Label htmlFor="name">
              Tên công ty <span className="text-red-700">*</span>
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Nhập tên công ty"
              required
            />
          </div>

          {/* Description */}
          <div className="grid gap-2">
            <Label htmlFor="description">Mô tả công ty</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Mô tả về công ty của bạn"
              rows={4}
            />
          </div>

          {/* Website */}
          <div className="grid gap-2">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              value={formData.website}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
              placeholder="https://example.com"
              type="url"
            />
          </div>

          {/* Location */}
          <div className="grid gap-2">
            <Label htmlFor="location">Địa điểm</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              placeholder="Địa chỉ công ty"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-600 hover:bg-gray-50 cursor-pointer"
              disabled={isSubmitting}
            >
              Hủy
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
            >
              {isSubmitting
                ? "Đang xử lý..."
                : company
                ? "Cập nhật"
                : "Tạo mới"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyFormDialog;
