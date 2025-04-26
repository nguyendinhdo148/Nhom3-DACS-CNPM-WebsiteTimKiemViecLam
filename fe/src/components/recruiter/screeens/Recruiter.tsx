import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Users2,
  BriefcaseIcon,
  Users,
  Clock,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { API } from "@/utils/constant";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DashboardSkeleton from "../components/Skeleton/DashboardSkeleton";
import type { Application } from "@/types/application";
import type { Job } from "@/types/job";

const Recruiter = () => {
  const { user } = useSelector((store: RootState) => store.auth);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [dashboardData, setDashboardData] = useState<{
    todayApplications: number;
    activeJobs: number;
    pendingApplications: number;
    upcomingInterviews: number;
    recentApplications: Application[];
    popularJobs: Job[];
    yesterdayApplications: number;
    yesterdayActiveJobs: number;
    yesterdayPendingApplications: number;
    yesterdayUpcomingInterviews: number;
  }>({
    todayApplications: 0,
    activeJobs: 0,
    pendingApplications: 0,
    upcomingInterviews: 0,
    recentApplications: [],
    popularJobs: [],
    yesterdayApplications: 0,
    yesterdayActiveJobs: 0,
    yesterdayPendingApplications: 0,
    yesterdayUpcomingInterviews: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await axios.get(`${API}/application/overview`, {
          withCredentials: true,
        });
        if (res.data.success) {
          setDashboardData(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const getPercentChange = (today: number, yesterday: number) => {
    if (yesterday === 0) return today === 0 ? "0%" : "+100%";
    const change = ((today - yesterday) / yesterday) * 100;
    return `${change >= 0 ? "+" : ""}${change.toFixed(1)}%`;
  };

  const getStatusBadge = (status: Application["status"]) => {
    const config = {
      pending: {
        label: "Chờ xem xét",
        className: "bg-yellow-100 text-yellow-800",
      },
      reviewing: {
        label: "Đang xem xét",
        className: "bg-blue-100 text-blue-800",
      },
      accepted: {
        label: "Đã chấp nhận",
        className: "bg-green-100 text-green-800",
      },
      rejected: { label: "Đã từ chối", className: "bg-red-100 text-red-800" },
    }[status];
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  if (isLoading) return <DashboardSkeleton />;

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          👋 Xin chào, {user?.fullname}
        </h1>
        <p className="mt-2 text-gray-600">
          Chào mừng bạn quay trở lại với trang quản lý tuyển dụng
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          icon={<Users2 className="h-8 w-8 text-blue-600" />}
          label="Ứng viên mới"
          value={dashboardData.todayApplications}
          badge="Hôm nay"
          trend={getPercentChange(
            dashboardData.todayApplications,
            dashboardData.yesterdayApplications
          )}
        />
        <StatsCard
          icon={<BriefcaseIcon className="h-8 w-8 text-green-600" />}
          label="Vị trí đang tuyển"
          value={dashboardData.activeJobs}
          badge="Đang mở"
          trend={getPercentChange(
            dashboardData.activeJobs,
            dashboardData.yesterdayActiveJobs
          )}
        />
        <StatsCard
          icon={<Users className="h-8 w-8 text-purple-600" />}
          label="Đang chờ duyệt"
          value={dashboardData.pendingApplications}
          badge="Cần xem xét"
          trend={getPercentChange(
            dashboardData.pendingApplications,
            dashboardData.yesterdayPendingApplications
          )}
        />
        <StatsCard
          icon={<Clock className="h-8 w-8 text-orange-600" />}
          label="Phỏng vấn sắp tới"
          value={dashboardData.upcomingInterviews}
          badge="Tuần này"
          trend={getPercentChange(
            dashboardData.upcomingInterviews,
            dashboardData.yesterdayUpcomingInterviews
          )}
        />
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Applications */}
        <Card className="lg:col-span-2 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Ứng viên gần đây
            </h2>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => navigate("/recruiter/candidates")}
            >
              Xem tất cả <ChevronRight className="ml-1 h-4 w-4" />
            </Badge>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead>Ứng viên</TableHead>
                  <TableHead>Vị trí ứng tuyển</TableHead>
                  <TableHead>Ngày ứng tuyển</TableHead>
                  <TableHead>Trạng thái</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dashboardData.recentApplications.map((app) => (
                  <TableRow
                    key={app._id}
                    className="hover:bg-muted transition-all duration-200"
                  >
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 border">
                          <AvatarImage
                            src={app.applicant?.profile?.profilePhoto}
                          />
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            {app.applicant?.fullname?.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">
                            {app.applicant?.fullname}
                          </div>
                          <div className="text-sm text-gray-500">
                            {app.applicant?.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      <div>
                        <div className="font-medium text-ellipsis overflow-hidden whitespace-nowrap">
                          {app.job?.title}
                        </div>
                        <div className="text-gray-500">
                          {app.job?.company?.name}
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="text-sm text-gray-600">
                      {new Date(app.createdAt).toLocaleDateString("vi-VN")}
                    </TableCell>
                    <TableCell>{getStatusBadge(app.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Popular Jobs */}
        <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Tin tuyển dụng nổi bật
            </h2>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => navigate("/recruiter/jobs")}
            >
              Quản lý
            </Badge>
          </div>
          <div className="space-y-4">
            {dashboardData.popularJobs.map((job) => (
              <div
                key={job._id}
                className="p-4 rounded-lg border hover:bg-gray-50 transition"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 line-clamp-1">
                    {job.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {job.applications?.length || 0} ứng viên
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-gray-500">{job.location}</p>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {job.experienceLevel} năm
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {job.salary} triệu
                  </Badge>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Cập nhật:{" "}
                    {new Date(job.updatedAt).toLocaleDateString("vi-VN")}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-emerald-600">
                    <ArrowUpRight className="h-4 w-4" />
                    <span>
                      {(job.applications?.length || 0) * 2.5}% tăng trưởng
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

// StatsCard làm đẹp hơn
const StatsCard = ({
  icon,
  label,
  value,
  badge,
  trend,
}: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  badge: string;
  trend?: string;
}) => {
  const isPositive = trend?.startsWith("+");

  return (
    <Card className="p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between">
        {icon}
        <Badge variant="secondary" className="text-xs">
          {badge}
        </Badge>
      </div>
      <p className="mt-4 text-sm font-medium text-gray-600">{label}</p>
      <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>

      {trend && (
        <div className="mt-4 flex items-center gap-2">
          <div
            className={`h-2 w-2 rounded-full ${
              isPositive ? "bg-green-500" : "bg-red-500"
            } animate-pulse`}
          />
          <span
            className={`text-sm font-medium ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {trend}
          </span>
        </div>
      )}
    </Card>
  );
};

export default Recruiter;
