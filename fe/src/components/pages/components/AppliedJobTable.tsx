import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Badge } from "../../ui/badge";
import {
  Clock,
  CheckCircle2,
  XCircle,
  Briefcase,
  MapPin,
  Building2,
} from "lucide-react";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { API } from "@/utils/constant";
import axios from "axios";
import { setApplications } from "@/redux/applicationSlice";
import toast from "react-hot-toast";
import { Application } from "@/types/application";

const AppliedJobTable = () => {
  const { applications } = useSelector((store: RootState) => store.application);
  const dispatch = useDispatch();

  const fetchApplications = useCallback(async () => {
    try {
      const res = await axios.get(`${API}/application/applied-jobs`, {
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setApplications(res.data.applications));
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
      toast.error("Lỗi khi tải danh sách ứng viên");
    }
  }, [dispatch]);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const getStatusBadge = (status: Application["status"]) => {
    const variants = {
      pending: {
        icon: <Clock className="h-4 w-4" />,
        text: "Đang xem xét",
        style: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
      },
      accepted: {
        icon: <CheckCircle2 className="h-4 w-4" />,
        text: "Đã chấp nhận",
        style: "bg-green-100 text-green-800 hover:bg-green-200",
      },
      rejected: {
        icon: <XCircle className="h-4 w-4" />,
        text: "Đã từ chối",
        style: "bg-red-100 text-red-800 hover:bg-red-200",
      },
    };

    return (
      <Badge
        className={`gap-1.5 px-2 py-1 text-sm font-medium ${variants[status].style}`}
      >
        {variants[status].icon}
        {variants[status].text}
      </Badge>
    );
  };

  return (
    <div className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white">
      <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-800">
          Đơn ứng tuyển gần đây
        </h2>
        <p className="text-sm text-gray-500">
          Danh sách các công việc bạn đã nộp đơn
        </p>
      </div>

      <Table className="min-w-full text-sm">
        <TableCaption className="py-4 text-gray-500">
          Bạn sẽ nhận được thông báo khi trạng thái thay đổi
        </TableCaption>
        <TableHeader className="bg-white">
          <TableRow className="text-gray-600">
            <TableHead className="w-[140px] text-center">Ngày ứng tuyển</TableHead>
            <TableHead className="min-w-[180px]">Vị trí công việc</TableHead>
            <TableHead className="min-w-[140px]">Công ty</TableHead>
            <TableHead className="min-w-[200px]">Địa điểm</TableHead>
            <TableHead className="text-left w-[140px]">Trạng thái</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.length > 0 ? (
            applications.map((application) => (
              <TableRow
                key={application._id}
                className="hover:bg-gray-50 transition"
              >
                <TableCell className="text-gray-700 font-medium text-center">
                  {new Date(application.createdAt).toLocaleDateString("vi-VN")}
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2 truncate max-w-[200px]">
                    <Briefcase className="w-4 h-4 text-gray-400 shrink-0" />
                    <span className="truncate">{application.job.title}</span>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2 truncate max-w-[140px]">
                    <Building2 className="w-4 h-4 text-gray-400 shrink-0" />
                    <span className="truncate">{application.job.company.name}</span>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2 truncate max-w-[220px]">
                    <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                    <span className="truncate">{application.job.location}</span>
                  </div>
                </TableCell>

                <TableCell className="text-left">
                  {getStatusBadge(application.status)}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={5}
                className="text-center py-10 text-gray-400"
              >
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Clock className="w-10 h-10" />
                  <p className="text-sm">
                    Hiện bạn chưa ứng tuyển công việc nào
                  </p>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
