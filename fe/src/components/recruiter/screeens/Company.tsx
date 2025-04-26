import { useState, useEffect, useCallback } from "react";
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
import { Edit2, Plus, Trash2 } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import CompanyFormDialog from "../components/CompanyFormDialog";
import axios from "axios";
import { API } from "@/utils/constant";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { setCompanies, setSelectedCompany } from "@/redux/companySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import type { Company } from "@/types/company";
import CommonSkeleton from "../components/Skeleton/CommonSkeleton";

const Company = () => {
  const { companies, selectedCompany } = useSelector(
    (store: RootState) => store.company
  );

  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useDispatch();

  const fetchCompanies = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${API}/company`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setCompanies(res.data.companies));
      }
    } catch (error) {
      console.error("Fetch companies error:", error);
      toast.error("Không thể tải danh sách công ty!");
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  // handleAddCompany function
  const handleAddCompany = async (formData: FormData) => {
    try {
      const response = await axios.post(`${API}/company/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      console.log(response);

      if (response.data.success) {
        toast.success("Thêm công ty thành công!");
        fetchCompanies(); // Refresh the list
        setIsDialogOpen(false);
      }
    } catch (error) {
      console.error("Add company error:", error);
      toast.error(
        axios.isAxiosError(error)
          ? error.response?.data.message
          : "Không thể thêm công ty"
      );
    }
  };

  // handleEditCompany function
  const handleEditCompany = async (formData: FormData) => {
    try {
      const response = await axios.put(
        `${API}/company/update-company/${selectedCompany?._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success("Cập nhật công ty thành công!");
        fetchCompanies();
        setIsDialogOpen(false);
      }
    } catch (error) {
      console.error("Edit company error:", error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      } else {
        toast.error("Không thể cập nhật công ty");
      }
    }
  };

  // handleDelete function
  const handleDelete = async (company_id: string) => {
    const result = await Swal.fire({
      title: "Bạn có chắc muốn xóa công ty này?",
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
      const response = await axios.delete(`${API}/company/${company_id}`, {
        withCredentials: true,
      });
      if (response.data.success) {
        toast.success("Xóa công ty thành công!");
        fetchCompanies();
      }
    } catch (error) {
      console.error("Delete company error:", error);
      toast.error("Không thể xóa công ty");
    }
  };

  if (isLoading) {
    return <CommonSkeleton />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
            🏢 <span>Quản lý công ty</span>
          </h1>

          <p className="mt-1 text-gray-500">
            Quản lý thông tin, giấy tờ và trạng thái hoạt động của công ty
          </p>
        </div>
        <Button
          size="lg"
          className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md hover:shadow-lg transition"
          onClick={() => {
            setSelectedCompany(null);
            setIsDialogOpen(true);
          }}
        >
          <div className="flex items-center gap-2">
            <Plus className="mr-2 size-4" />
            <span>Thêm công ty mới</span>
          </div>
        </Button>
      </div>

      {/* Company List */}
      <Card>
        <div className="p-6">
          {companies.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-gray-50 transition">
                  <TableHead className="w-[300px]">Công ty</TableHead>
                  <TableHead>Địa điểm</TableHead>
                  <TableHead>Website</TableHead>
                  <TableHead>Mã số thuế</TableHead>
                  <TableHead>Giấy phép kinh doanh</TableHead>
                  <TableHead>Ngày tạo</TableHead>
                  <TableHead>Ngày cập nhật</TableHead>
                  <TableHead className="text-right">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {companies.map((company) => (
                  <TableRow key={company._id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={company.logo || ""}
                            alt={company.name}
                          />
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            {company.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{company.name}</div>
                          <div className="text-sm text-gray-500 line-clamp-2 max-w-[350px]">
                            {company.description}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="truncate max-w-[400px]">
                        {company.location}
                      </div>
                    </TableCell>
                    <TableCell>
                      {company.website && (
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {new URL(company.website).hostname}
                        </a>
                      )}
                    </TableCell>
                    <TableCell>{company.taxCode}</TableCell>
                    <TableCell>
                      {company.businessLicense && (
                        <a
                          href={company.businessLicense}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Xem Giấy phép
                        </a>
                      )}
                    </TableCell>
                    <TableCell>
                      {new Date(company.createdAt).toLocaleDateString("vi-VN", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </TableCell>
                    <TableCell>
                      {new Date(company.updatedAt).toLocaleDateString("vi-VN", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-blue-50 text-blue-600 cursor-pointer"
                          onClick={() => {
                            dispatch(setSelectedCompany(company));
                            setIsDialogOpen(true);
                          }}
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-red-50 text-red-600 cursor-pointer"
                          onClick={() => handleDelete(company?._id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-6">
              <p className="text-gray-500">Chưa có công ty nào được thêm.</p>
              <Button
                className="mt-4 bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  setSelectedCompany(null);
                  setIsDialogOpen(true);
                }}
              >
                <Plus className="size-4 mr-2" />
                Thêm công ty mới
              </Button>
            </div>
          )}
        </div>
      </Card>

      <CompanyFormDialog
        open={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
          dispatch(setSelectedCompany(null));
        }}
        company={selectedCompany}
        onSuccess={(formData: FormData) => {
          if (selectedCompany) {
            handleEditCompany(formData);
          } else {
            handleAddCompany(formData);
          }
        }}
      />
    </div>
  );
};

export default Company;
