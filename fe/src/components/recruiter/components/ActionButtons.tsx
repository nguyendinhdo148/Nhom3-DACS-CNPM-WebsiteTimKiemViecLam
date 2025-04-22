// components/ActionButtons.tsx

import { Button } from "@/components/ui/button";
import { CheckCircle2, Eye, XCircle } from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface ActionButtonsProps {
  status: string;
  onView: () => void;
  onAccept?: () => void;
  onReject?: () => void;
}

const ActionButtons = ({ status, onView, onAccept, onReject }: ActionButtonsProps) => {
  return (
    <TooltipProvider>
      <div className="flex items-center justify-end gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={onView}
              className="hover:bg-gray-100 transition"
            >
              <Eye className="h-4 w-4 text-gray-600" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Xem chi tiết</p>
          </TooltipContent>
        </Tooltip>

        {status === "pending" && (
          <>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onAccept}
                  className="hover:bg-green-100 text-green-600 transition"
                >
                  <CheckCircle2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Chấp nhận ứng viên</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onReject}
                  className="hover:bg-red-100 text-red-600 transition"
                >
                  <XCircle className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Từ chối ứng viên</p>
              </TooltipContent>
            </Tooltip>
          </>
        )}
      </div>
    </TooltipProvider>
  );
};

export default ActionButtons;
