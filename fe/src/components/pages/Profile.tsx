import { Camera, Contact, Mail, UserPen } from "lucide-react";
import Navbar from "../shared/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import AppliedJobTable from "./AppliedJobTable";
import { useEffect, useState } from "react";
import UpdateProfileDialog from "./components/UpdateProfileDialog";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import axios from "axios";
import { API } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useSelector((store: RootState) => store.auth);
  const [open, setOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Xử lý tải lên hình ảnh
  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setIsUploading(true);
      const res = await axios.put(`${API}/user/profile/avatar`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        console.log(res.data.user);
        dispatch(setUser(res.data.user));
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success("Cập nhật ảnh đại diện thành công!");
      }
    } catch (error) {
      console.error("Avatar upload error:", error);
      toast.error("Đã có lỗi xảy ra khi tải lên ảnh đại diện.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <Navbar />

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-6 p-8 shadow-sm">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-6">
            <div className="relative">
              <Avatar className="size-18">
                <AvatarImage
                  src={user?.profile?.profilePhoto}
                  alt={user?.fullname}
                  className="object-cover"
                />
                <AvatarFallback className="bg-gray-100 text-gray-700">
                  {user?.fullname
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {/* Input để tải lên hình ảnh */}
              <Label
                htmlFor="avatar-upload"
                className="absolute bottom-0 right-0 bg-gray-400 text-white p-1 rounded-full cursor-pointer hover:bg-gray-500 transition"
              >
                <Camera className="size-4 transition-transform duration-200 group-hover:scale-110" />
              </Label>
              <Input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                disabled={isUploading} // Vô hiệu hóa khi đang tải lên
                className="hidden"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{user?.fullname}</h1>
              <p className="text-gray-600 text-sm mt-1">{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            variant="ghost"
            size="icon"
            className="w-8 h-8 rounded-full cursor-pointer text-gray-500 hover:text-gray-700 bg-transparent hover:bg-gray-100 transition-colors duration-200 shadow-sm hover:shadow-md border border-gray-200 hover:border-gray-300 group"
          >
            <UserPen className="size-4 transition-transform duration-200 group-hover:scale-110" />
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-6 space-y-2 text-gray-700">
          <div className="flex items-center gap-3">
            <Mail className="size-4" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact className="size-4" />
            <span>0{user?.phoneNumber}</span>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Kỹ năng</h2>
          <div className="flex flex-wrap gap-2">
            {user?.profile?.skills?.length !== 0 ? (
              (user?.profile?.skills ?? []).map((skill, index) => (
                <Badge
                  key={index}
                  className="bg-gray-200 hover:bg-gray-300 transition cursor-pointer px-3 py-1 text-sm font-medium"
                >
                  {skill}
                </Badge>
              ))
            ) : (
              <span className="text-sm text-gray-500">N/A</span>
            )}
          </div>
        </div>

        {/* Resume Section */}
        <div className="mt-8">
          <Label className="text-[18px] font-bold mb-1 block">Resume</Label>
          {user?.profile?.resume ? (
            <a
              href={user?.profile?.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span className="text-sm text-gray-500">N/A</span>
          )}
        </div>
      </div>

      {/* Applied Jobs */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl mt-10 py-6">
        <h2 className="text-lg font-bold mb-4">Applied Jobs:</h2>
        <AppliedJobTable />
      </div>

      <div>
        <UpdateProfileDialog open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Profile;
