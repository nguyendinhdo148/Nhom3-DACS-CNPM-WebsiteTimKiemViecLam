import { useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Eye, Search, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Candidates = () => {
  const [candidates] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      avatar: null,
      email: "nguyenvana@example.com",
      position: "Frontend Developer",
      company: "Tech Corp",
      appliedDate: "2024-04-19",
      status: "pending",
      experience: "3 years",
    },
    {
      id: 2,
      name: "Trần Thị B",
      avatar: null,
      email: "tranthib@example.com",
      position: "Backend Developer",
      company: "Digital Solutions",
      appliedDate: "2024-04-18",
      status: "accepted",
      experience: "4 years",
    },
    {
      id: 3,
      name: "Lê Văn C",
      avatar: null,
      email: "levanc@example.com",
      position: "UI/UX Designer",
      company: "Tech Corp",
      appliedDate: "2024-04-17",
      status: "rejected",
      experience: "2 years",
    },
  ]);

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Quản lý ứng viên</h1>
        <p className="mt-1 text-gray-600">
          Xem và quản lý danh sách ứng viên ứng tuyển
        </p>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input placeholder="Tìm kiếm ứng viên..." className="pl-10" />
            </div>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="cursor-pointer">
              Tất cả ({candidates.length})
            </Badge>
            <Badge variant="outline" className="cursor-pointer">
              Đang xem xét (1)
            </Badge>
            <Badge variant="outline" className="cursor-pointer">
              Đã chấp nhận (1)
            </Badge>
            <Badge variant="outline" className="cursor-pointer">
              Đã từ chối (1)
            </Badge>
          </div>
        </div>
      </Card>

      {/* Candidates List */}
      <Card>
        <div className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Ứng viên</TableHead>
                <TableHead>Vị trí ứng tuyển</TableHead>
                <TableHead>Kinh nghiệm</TableHead>
                <TableHead>Ngày ứng tuyển</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidates.map((candidate) => (
                <TableRow key={candidate.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={candidate.avatar || ""} />
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          {candidate.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{candidate.name}</div>
                        <div className="text-sm text-gray-500">
                          {candidate.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{candidate.position}</div>
                      <div className="text-sm text-gray-500">
                        {candidate.company}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{candidate.experience}</TableCell>
                  <TableCell>
                    {new Date(candidate.appliedDate).toLocaleDateString(
                      "vi-VN"
                    )}
                  </TableCell>
                  <TableCell>{getStatusBadge(candidate.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-gray-100"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      {candidate.status === "pending" && (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-green-50 text-green-600"
                          >
                            <CheckCircle2 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-red-50 text-red-600"
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Candidates;
