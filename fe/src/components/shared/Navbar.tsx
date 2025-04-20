import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User2, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import axios from "axios";
import { API } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import toast from "react-hot-toast";
// import { useEffect } from "react";

const Navbar = () => {
  const { user } = useSelector((store: RootState) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItemClass = (path: string) =>
    `pb-1 border-b-2 ${
      isActive(path)
        ? "text-blue-600 border-blue-600 font-semibold"
        : "text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-500 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
    }`;

  const logoutHandler = async () => {
    try {
      const res = await axios.post(
        `${API}/user/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success("Đăng xuất thành công!");
      }
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : "An unknown error");
    }
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <Link to="/">
            <h1 className="text-3xl font-bold">
              Vie<span className="text-[#f83002]">Jobs</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5 cursor-pointer">
            {user && user?.role === "student" && (
              <>
                <li>
                  <Link to="/" className={navItemClass("/")}>
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link to="/jobs" className={navItemClass("/jobs")}>
                    Việc làm
                  </Link>
                </li>
                <li>
                  <Link to="/browse" className={navItemClass("/browse")}>
                    Browse
                  </Link>
                </li>
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="cursor-pointer border-[1px] border-gray-300 bg-white text-black hover:bg-gray-100 rounded-md"
                >
                  Đăng nhập
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="cursor-pointer bg-black text-white hover:bg-gray-800 transition-colors duration-200 rounded-md">
                  Đăng ký
                </Button>
              </Link>
            </div>
          ) : (
            user?.role === "student" && (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user.profile?.profilePhoto}
                      alt={user.fullname}
                      className="object-cover hover:scale-105 transition-transform duration-200"
                    />
                    <AvatarFallback className="bg-gray-100 text-gray-700">
                      {user.fullname
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-4 bg-white rounded-lg shadow-lg border border-gray-100">
                  {/* User Profile Section */}
                  <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
                    <Avatar className="size-12">
                      <AvatarImage
                        src={user.profile?.profilePhoto}
                        alt={user.fullname}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-gray-100 text-gray-700">
                        {user.fullname
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="overflow-hidden">
                      <h4 className="font-medium text-gray-900 truncate">
                        {user.fullname}
                      </h4>
                      <p className="text-sm text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  {/* Menu Actions */}
                  <div className="mt-3 space-y-1.5">
                    <Button
                      variant="default"
                      className="w-full justify-start gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50"
                      asChild
                    >
                      <Link to="/profile">
                        <User2 className="h-4 w-4 text-gray-500" />
                        <span>Xem hồ sơ</span>
                      </Link>
                    </Button>

                    <Button
                      variant="default"
                      className="cursor-pointer w-full justify-start gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50"
                      onClick={logoutHandler}
                    >
                      <LogOut className="h-4 w-4 text-gray-500" />
                      <span>Đăng xuất</span>
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
