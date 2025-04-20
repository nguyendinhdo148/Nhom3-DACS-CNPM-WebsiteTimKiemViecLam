import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Users2, BriefcaseIcon, Users, Clock } from "lucide-react";
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

const Recruiter = () => {
  const { user } = useSelector((store: RootState) => store.auth);

  // Mock data for recent applications
  const recentApplications = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      position: "Frontend Developer",
      experience: "3 năm",
      date: "2024-04-19",
      status: "pending",
    },
    {
      id: 2,
      name: "Trần Thị B",
      position: "UI/UX Designer",
      experience: "2 năm",
      date: "2024-04-18",
      status: "reviewed",
    },
    {
      id: 3,
      name: "Lê Văn C",
      position: "Backend Developer",
      experience: "4 năm",
      date: "2024-04-17",
      status: "contacted",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Xin chào, {user?.fullname}
        </h1>
        <p className="mt-1 text-gray-600">
          Dưới đây là tổng quan về các ứng viên và vị trí tuyển dụng của bạn
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <Users2 className="h-8 w-8 text-blue-600" />
            <Badge variant="secondary">Hôm nay</Badge>
          </div>
          <p className="text-sm font-medium text-gray-600">Ứng viên mới</p>
          <p className="text-2xl font-bold">5</p>
        </Card>

        <Card className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <BriefcaseIcon className="h-8 w-8 text-green-600" />
            <Badge variant="secondary">Đang mở</Badge>
          </div>
          <p className="text-sm font-medium text-gray-600">Vị trí đang tuyển</p>
          <p className="text-2xl font-bold">8</p>
        </Card>

        <Card className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <Users className="h-8 w-8 text-purple-600" />
            <Badge variant="secondary">Cần xem xét</Badge>
          </div>
          <p className="text-sm font-medium text-gray-600">Đang chờ duyệt</p>
          <p className="text-2xl font-bold">12</p>
        </Card>

        <Card className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <Clock className="h-8 w-8 text-orange-600" />
            <Badge variant="secondary">Tuần này</Badge>
          </div>
          <p className="text-sm font-medium text-gray-600">Phỏng vấn sắp tới</p>
          <p className="text-2xl font-bold">3</p>
        </Card>
      </div>

      {/* Recent Applications */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Ứng viên gần đây
          </h2>
          <Badge variant="outline" className="cursor-pointer">
            Xem tất cả
          </Badge>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ứng viên</TableHead>
              <TableHead>Vị trí ứng tuyển</TableHead>
              <TableHead>Kinh nghiệm</TableHead>
              <TableHead>Ngày ứng tuyển</TableHead>
              <TableHead>Trạng thái</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentApplications.map((application) => (
              <TableRow key={application.id}>
                <TableCell className="font-medium">
                  {application.name}
                </TableCell>
                <TableCell>{application.position}</TableCell>
                <TableCell>{application.experience}</TableCell>
                <TableCell>
                  {new Date(application.date).toLocaleDateString("vi-VN")}
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      application.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : application.status === "reviewed"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }
                  >
                    {application.status === "pending"
                      ? "Chờ xem xét"
                      : application.status === "reviewed"
                      ? "Đã xem hồ sơ"
                      : "Đã liên hệ"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Recruiter;
