import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";

export function Notifs() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Bell strokeWidth={1.5} width={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>اطلاعیه ها</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-xs">
          !اطلاعیه جدیدی ندارید
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
