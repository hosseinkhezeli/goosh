import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { AppBreadcrumb } from "./BreadCrumbs";
import { Notifs } from "./Notifs";
import { HeaderAccountSection } from "./HeaderAccountSection";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
export function AppHeader() {
  return (
    <div className="border-b-[1px] p-2 flex justify-between items-center h-full">
      <Input
        enterKeyHint="search"
        type="text"
        placeholder="جست و جو ..."
        className="w-52 hidden sm:flex"
        icon={
          <Search strokeWidth={1.5} width={18} className="stroke-gray-400" />
        }
      />
      <SidebarTrigger  className="block sm:hidden"/>
      <AppBreadcrumb />
      <div className="flex gap-1 h-full">
        <Notifs />
        <Separator orientation="vertical" style={{ height: "100%" }} />
        <HeaderAccountSection />
      </div>
    </div>
  );
}
