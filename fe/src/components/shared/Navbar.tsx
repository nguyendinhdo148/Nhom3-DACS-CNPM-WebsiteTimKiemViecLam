import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { User2, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Vie<span className="text-[#f83002]">Jobs</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5 cursor-pointer">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
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
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex space-y-2 gap-4">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Alison Paker</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 my-2 text-gray-600">
                  <div className="flex w-fit items-center gap-2">
                    <User2 />
                    <Button variant="link" className="hover:cursor-pointer">
                      View profile
                    </Button>
                  </div>
                  <div className="flex w-fit items-center gap-2">
                    <LogOut />
                    <Button variant="link" className="hover:cursor-pointer">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
