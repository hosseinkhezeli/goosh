import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function HeaderAccountSection() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex">
        <DropdownMenuLabel className="font-normal text-sm">
          سینا فدوی
        </DropdownMenuLabel>
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-xs">
          <Settings strokeWidth={1.5} />
          <Link href="/setting">تنظیمات حساب کاربری</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-xs">
          <LogOut strokeWidth={1.5} className="stroke-red-800" />
          خروج
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
