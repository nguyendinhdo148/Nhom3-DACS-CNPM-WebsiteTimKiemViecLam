import { useCallback, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { API } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setApplications } from "@/redux/applicationSlice";
import toast from "react-hot-toast";
import { RootState } from "@/redux/store";
import { setLoading } from "@/redux/jobSlice";
import CommonSkeleton from "../components/Skeleton/CommonSkeleton";
import ActionButtons from "../components/ActionButtons";

const Candidates = () => {
  const { applications, isLoading } = useSelector(
    (store: RootState) => store.application
  );
  const dispatch = useDispatch();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">Đang xem xét</Badge>
        );
      case "accepted":
        return (
          <Badge className="bg-green-100 text-green-800">Đã chấp nhận</Badge>
        );
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Đã từ chối</Badge>;
      default:
        return null;
    }
  };

  const fetchApplications = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API}/application/applicantsForRecruiter`, {
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setApplications(res.data.applications));
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
      toast.error("Lỗi khi tải danh sách ứng viên");
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  if (isLoading) {
    return <CommonSkeleton />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          📋 Quản lý ứng viên
        </h1>
        <p className="mt-2 text-gray-600 text-sm">
          Xem và quản lý danh sách ứng viên ứng tuyển vào các vị trí công việc
        </p>
      </div>

      {/* Filters */}
      <Card className="p-6 shadow-md border rounded-2xl">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Tìm kiếm ứng viên..."
                className="pl-10 rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="cursor-pointer rounded-full px-4 py-1 text-sm hover:bg-gray-100"
            >
              Tất cả ({applications.length})
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer rounded-full px-4 py-1 text-sm hover:bg-yellow-50 text-yellow-700 border-yellow-300"
            >
              Đang xem xét (1)
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer rounded-full px-4 py-1 text-sm hover:bg-green-50 text-green-700 border-green-300"
            >
              Đã chấp nhận (1)
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer rounded-full px-4 py-1 text-sm hover:bg-red-50 text-red-700 border-red-300"
            >
              Đã từ chối (1)
            </Badge>
          </div>
        </div>
      </Card>

      {/* Candidates List */}
      <Card className="shadow-md border rounded-2xl">
        <div className="p-6 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-[300px] text-gray-700 font-semibold">
                  Ứng viên
                </TableHead>
                <TableHead className="text-gray-700 font-semibold">
                  Vị trí ứng tuyển
                </TableHead>
                <TableHead className="text-gray-700 font-semibold">
                  Ngày ứng tuyển
                </TableHead>
                <TableHead className="text-gray-700 font-semibold">
                  Trạng thái
                </TableHead>
                <TableHead className="text-right text-gray-700 font-semibold">
                  Thao tác
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.length > 0 ? (
                applications.map((app) => (
                  <TableRow
                    key={app._id}
                    className="hover:bg-gray-50 transition"
                  >
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 rounded-full shadow">
                          <AvatarImage
                            src={app.applicant?.profile?.profilePhoto || ""}
                          />
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            {app.applicant?.fullname.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">
                            {app.applicant?.fullname}
                          </div>
                          <div className="text-sm text-gray-500">
                            {app.applicant?.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{app.job?.title}</div>
                        <div className="text-sm text-gray-500">
                          {app.job?.company?.name}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {new Date(app.createdAt).toLocaleDateString("vi-VN")}
                    </TableCell>
                    <TableCell>{getStatusBadge(app.status)}</TableCell>
                    <TableCell className="text-right">
                      <ActionButtons
                        status={app.status}
                        onView={() => console.log("Xem chi tiết", app._id)}
                        onAccept={() => console.log("Chấp nhận", app._id)}
                        onReject={() => console.log("Từ chối", app._id)}
                      />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-10">
                    <div className="text-gray-500 text-lg flex flex-col items-center gap-2">
                      <span>📭 Không có ứng viên nào</span>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Candidates;
