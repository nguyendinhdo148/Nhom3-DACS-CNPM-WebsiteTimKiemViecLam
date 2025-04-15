import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { Clock, CheckCircle2, XCircle } from "lucide-react";

// Type definitions
type JobApplication = {
  id: string;
  date: string;
  role: string;
  company: string;
  status: "pending" | "accepted" | "rejected";
  location?: string;
};

const AppliedJobTable = () => {
  // Mock data - replace with actual API data
  const applications: JobApplication[] = [
    {
      id: "1",
      date: "2024-02-19",
      role: "Frontend Developer",
      company: "Google",
      status: "accepted",
      location: "Ho Chi Minh City",
    },
    {
      id: "2",
      date: "2024-03-05",
      role: "Backend Engineer",
      company: "Microsoft",
      status: "pending",
      location: "Remote",
    },
    {
      id: "3",
      date: "2024-03-15",
      role: "Full Stack Developer",
      company: "Amazon",
      status: "rejected",
      location: "Singapore",
    },
  ];

  const getStatusBadge = (status: JobApplication["status"]) => {
    const variants = {
      pending: {
        icon: <Clock className="h-3 w-3" />,
        text: "Pending",
        style: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
      },
      accepted: {
        icon: <CheckCircle2 className="h-3 w-3" />,
        text: "Accepted",
        style: "bg-green-100 text-green-800 hover:bg-green-200",
      },
      rejected: {
        icon: <XCircle className="h-3 w-3" />,
        text: "Rejected",
        style: "bg-red-100 text-red-800 hover:bg-red-200",
      },
    };

    return (
      <Badge className={`gap-1.5 ${variants[status].style}`}>
        {variants[status].icon}
        {variants[status].text}
      </Badge>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <Table>
        <TableCaption className="py-4 text-gray-500">
          Your recent job applications
        </TableCaption>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="w-[120px]">Date Applied</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <TableRow key={application.id} className="hover:bg-gray-50">
              <TableCell className="font-medium">
                {formatDate(application.date)}
              </TableCell>
              <TableCell>{application.role}</TableCell>
              <TableCell className="font-medium">
                {application.company}
              </TableCell>
              <TableCell>{application.location}</TableCell>
              <TableCell className="text-right">
                {getStatusBadge(application.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
