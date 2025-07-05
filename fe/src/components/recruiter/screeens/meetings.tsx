import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarClock, Briefcase, User, Video, Plus, Eye, Pencil, Trash2, Mail } from "lucide-react";
import { API } from "@/utils/constant";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import toast from "react-hot-toast";

// Định nghĩa các kiểu dữ liệu
interface User {
  _id: string;
  fullname: string;
  email: string;
}

type Candidate = User;
type Recruiter = User;

interface Job {
  _id: string;
  title: string;
}

interface Meeting {
  _id: string;
  title: string;
  recruiter: Recruiter;
  candidate: Candidate;
  job: Job;
  scheduledAt: string;
  roomName: string;
  participantEmails?: string[];
}

interface Application {
  applicant: Candidate;
}

const MeetingsPage = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // For create meeting dialog
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [candidateId, setCandidateId] = useState<string>("");
  const [jobId, setJobId] = useState<string>("");
  const [scheduledAt, setScheduledAt] = useState<string>("");
  const [participantEmails, setParticipantEmails] = useState<string>("");
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const { user } = useSelector((store: RootState) => store.auth);

  // For view/edit/delete/resend mail
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const [viewDialog, setViewDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editScheduledAt, setEditScheduledAt] = useState("");
  const [editLoading, setEditLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [mailLoading, setMailLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false); // Thêm state cho loading khi tạo meeting

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const res = await axios.get<{ meetings: Meeting[] }>(`${API}/meetings`, {
          withCredentials: true,
        });
        setMeetings(res.data.meetings || []);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          toast.error(err.response?.data?.message || "Lỗi khi lấy danh sách cuộc họp");
        } else {
          toast.error("Lỗi khi lấy danh sách cuộc họp");
        }
        console.error("Lỗi khi lấy danh sách cuộc họp:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  // Fetch candidates and jobs for recruiter
  useEffect(() => {
    if (user?.role === "recruiter" && openDialog) {
      // Fetch candidates (applicants)
      axios
        .get<{ applications: Application[] }>(
          `${API}/application/applicantsForRecruiter`,
          { withCredentials: true }
        )
        .then((res) => {
          const apps = res.data.applications || [];
          const seen = new Set<string>();
          const uniqueCandidates = apps
            .map((a) => a.applicant)
            .filter((a) => {
              if (a && !seen.has(a._id)) {
                seen.add(a._id);
                return true;
              }
              return false;
            });
          setCandidates(uniqueCandidates);
        })
        .catch((err: AxiosError) => {
          const data = err.response?.data as { message?: string } | undefined;
          toast.error(data?.message || "Không thể tải danh sách ứng viên");
        });
      
      // Fetch jobs
      axios
        .get<{ jobs: Job[] }>(`${API}/job/recruiter-jobs`, { withCredentials: true })
        .then((res) => setJobs(res.data.jobs || []))
        .catch((err: AxiosError) => {
          const data = err.response?.data as { message?: string } | undefined;
          toast.error(data?.message || "Không thể tải danh sách công việc");
        });
    }
  }, [openDialog, user?.role]);

  // Jitsi Meet URL generator
  const getJitsiUrl = (roomName: string) =>
    `https://meet.jit.si/${roomName}`;

  // Create meeting handler
  const handleCreateMeeting = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !candidateId || !jobId || !scheduledAt) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    // Parse emails từ input
    const emails = participantEmails
      .split(',')
      .map(email => email.trim())
      .filter(email => email);

    setCreateLoading(true); // Bật trạng thái loading
    try {
      const res = await axios.post<{ meeting: Meeting }>(
        `${API}/meetings`,
        { 
          title, 
          candidateId, 
          jobId, 
          scheduledAt,
          participantEmails: emails
        },
        { withCredentials: true }
      );
      setMeetings((prev) => [res.data.meeting, ...prev]);
      setOpenDialog(false);
      setTitle("");
      setCandidateId("");
      setJobId("");
      setScheduledAt("");
      setParticipantEmails("");
      toast.success("Tạo cuộc họp thành công!");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message || "Tạo cuộc họp thất bại");
      } else {
        toast.error("Tạo cuộc họp thất bại");
      }
    } finally {
      setCreateLoading(false); // Tắt trạng thái loading
    }
  };

  // Xem chi tiết
  const handleView = (meeting: Meeting) => {
    setSelectedMeeting(meeting);
    setViewDialog(true);
  };

  // Sửa meeting
  const handleEdit = (meeting: Meeting) => {
    setSelectedMeeting(meeting);
    setEditTitle(meeting.title);
    setEditScheduledAt(meeting.scheduledAt.slice(0, 16));
    setEditDialog(true);
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMeeting) return;
    setEditLoading(true);
    try {
      const res = await axios.put<{ meeting: Meeting }>(
        `${API}/meetings/${selectedMeeting._id}`,
        { title: editTitle, scheduledAt: editScheduledAt },
        { withCredentials: true }
      );
      setMeetings((prev) =>
        prev.map((m) =>
          m._id === selectedMeeting._id ? res.data.meeting : m
        )
      );
      toast.success("Cập nhật thành công");
      setEditDialog(false);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message || "Cập nhật thất bại");
      } else {
        toast.error("Cập nhật thất bại");
      }
    } finally {
      setEditLoading(false);
    }
  };

  // Xoá meeting
  const handleDelete = async (meeting: Meeting) => {
    if (!window.confirm("Bạn chắc chắn muốn xoá cuộc họp này?")) return;
    setDeleteLoading(true);
    try {
      await axios.delete(`${API}/meetings/${meeting._id}`, {
        withCredentials: true,
      });
      setMeetings((prev) => prev.filter((m) => m._id !== meeting._id));
      toast.success("Đã xoá cuộc họp");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message || "Xoá thất bại");
      } else {
        toast.error("Xoá thất bại");
      }
    } finally {
      setDeleteLoading(false);
    }
  };

  // Gửi lại mail mời phỏng vấn
  const handleResendMail = async (meeting: Meeting) => {
    setMailLoading(true);
    try {
      await axios.post(
        `${API}/meetings/resend-invite`,
        {
          meetingId: meeting._id
        },
        { withCredentials: true }
      );
      toast.success("Đã gửi lại mail mời phỏng vấn!");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message || "Gửi mail thất bại");
      } else {
        toast.error("Gửi mail thất bại");
      }
    } finally {
      setMailLoading(false);
    }
  };

  // Kiểm tra xem user có phải là người tạo meeting không
  const isOwner = (meeting: Meeting) => {
    return user?._id === meeting.recruiter._id;
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-2xl shadow-md text-white flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">📅 Quản lý cuộc họp</h1>
          <p className="mt-1 text-indigo-100">
            Xem và quản lý các cuộc phỏng vấn sắp tới
          </p>
        </div>
        {user?.role === "recruiter" && (
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button className="bg-white text-indigo-700 font-semibold flex items-center gap-2 shadow hover:bg-indigo-50 hover:text-indigo-800 transition-colors cursor-pointer">
                <Plus className="size-4" /> Tạo cuộc họp
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md bg-white">
              <DialogHeader>
                <DialogTitle>Tạo cuộc họp mới</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleCreateMeeting} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Tiêu đề
                  </label>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="VD: Phỏng vấn vòng 1"
                    className="bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Ứng viên chính
                  </label>
                  <Select
                    value={candidateId}
                    onValueChange={setCandidateId}
                    required
                  >
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Chọn ứng viên" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {candidates.map((c) => (
                        <SelectItem key={c._id} value={c._id} className="cursor-pointer hover:bg-gray-100">
                          {c.fullname} ({c.email})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Vị trí
                  </label>
                  <Select 
                    value={jobId} 
                    onValueChange={setJobId}
                    required
                  >
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Chọn vị trí" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {jobs.map((j) => (
                        <SelectItem key={j._id} value={j._id} className="cursor-pointer hover:bg-gray-100">
                          {j.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Người tham gia (tuỳ chọn)
                  </label>
                  <Input
                    value={participantEmails}
                    onChange={(e) => setParticipantEmails(e.target.value)}
                    placeholder="Nhập email, cách nhau bằng dấu phẩy"
                    className="bg-white"
                  />
                  <p className="text-xs text-gray-500 mt-1">Ví dụ: email1@example.com, email2@example.com</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Thời gian
                  </label>
                  <Input
                    type="datetime-local"
                    value={scheduledAt}
                    onChange={(e) => setScheduledAt(e.target.value)}
                    className="bg-white"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer"
                  disabled={createLoading}
                >
                  {createLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">↻</span>
                      Đang tạo...
                    </span>
                  ) : (
                    "Tạo cuộc họp"
                  )}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <div className="grid gap-4">
        {loading ? (
          <p className="text-gray-600 text-sm">Đang tải dữ liệu...</p>
        ) : meetings.length === 0 ? (
          <p className="text-gray-600 text-sm">Chưa có cuộc họp nào.</p>
        ) : (
          meetings.map((meeting) => {
            const isPast = new Date(meeting.scheduledAt) < new Date();
            return (
              <Card key={meeting._id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {meeting.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mt-2">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>
                            {meeting.candidate?.fullname || "Ứng viên"}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{meeting.job?.title || "Vị trí"}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarClock className="w-4 h-4" />
                          <span>
                            {new Date(meeting.scheduledAt).toLocaleString("vi-VN")}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span
                            className={
                              isPast
                                ? "px-2 py-0.5 rounded bg-gray-200 text-gray-500 text-xs"
                                : "px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs"
                            }
                          >
                            {isPast ? "Đã diễn ra" : "Sắp tới"}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Video className="w-4 h-4" />
                          <a
                            href={getJitsiUrl(meeting.roomName)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline font-medium hover:text-blue-800 transition-colors cursor-pointer"
                          >
                            Tham gia phòng họp
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleView(meeting)}
                        title="Xem chi tiết"
                        className="hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      {isOwner(meeting) && (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(meeting)}
                            title="Sửa"
                            className="hover:bg-gray-100 transition-colors cursor-pointer"
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(meeting)}
                            disabled={deleteLoading}
                            title="Xoá"
                            className="hover:bg-gray-100 transition-colors cursor-pointer hover:text-red-600"
                          >
                            {deleteLoading ? (
                              <span className="animate-spin">...</span>
                            ) : (
                              <Trash2 className="w-4 h-4" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleResendMail(meeting)}
                            disabled={mailLoading}
                            title="Gửi lại mail"
                            className="hover:bg-gray-100 transition-colors cursor-pointer hover:text-blue-600"
                          >
                            {mailLoading ? (
                              <span className="animate-spin">...</span>
                            ) : (
                              <Mail className="w-4 h-4" />
                            )}
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>

      {/* Dialog xem chi tiết */}
      <Dialog open={viewDialog} onOpenChange={setViewDialog}>
        <DialogContent className="max-w-md bg-white">
          <DialogHeader>
            <DialogTitle>Chi tiết cuộc họp</DialogTitle>
          </DialogHeader>
          {selectedMeeting && (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Thông tin cơ bản</h3>
                <div className="mt-2 space-y-2">
                  <div>
                    <b>Tiêu đề:</b> {selectedMeeting.title}
                  </div>
                  <div>
                    <b>Ứng viên:</b> {selectedMeeting.candidate?.fullname} ({selectedMeeting.candidate?.email})
                  </div>
                  <div>
                    <b>Vị trí:</b> {selectedMeeting.job?.title}
                  </div>
                  <div>
                    <b>Thời gian:</b> {new Date(selectedMeeting.scheduledAt).toLocaleString("vi-VN")}
                  </div>
                  <div>
                    <b>Phòng họp:</b>{" "}
                    <a
                      href={getJitsiUrl(selectedMeeting.roomName)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800 transition-colors cursor-pointer"
                    >
                      {selectedMeeting.roomName}
                    </a>
                  </div>
                </div>
              </div>
              
              {selectedMeeting.participantEmails && selectedMeeting.participantEmails.length > 0 && (
                <div>
                  <h3 className="font-medium text-gray-900">Người tham gia</h3>
                  <div className="mt-2 space-y-2">
                    {selectedMeeting.participantEmails.map((email, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{email}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Dialog sửa */}
      <Dialog open={editDialog} onOpenChange={setEditDialog}>
        <DialogContent className="max-w-md bg-white">
          <DialogHeader>
            <DialogTitle>Sửa cuộc họp</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Tiêu đề
              </label>
              <Input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Thời gian
              </label>
              <Input
                type="datetime-local"
                value={editScheduledAt}
                onChange={(e) => setEditScheduledAt(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer"
              disabled={editLoading}
            >
              {editLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">↻</span>
                  Đang lưu...
                </span>
              ) : (
                "Lưu thay đổi"
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MeetingsPage;