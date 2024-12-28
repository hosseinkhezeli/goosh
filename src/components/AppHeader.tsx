import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Calculator,
  Calendar,
  CreditCard,
  Search,
  Settings,
  Smile,
  User,
} from "lucide-react";
import { Input } from "./ui/input";
import { AppBreadcrumb } from "./BreadCrumbs";
import { Notifs } from "./Notifs";
import { HeaderAccountSection } from "./HeaderAccountSection";
export function AppHeader() {
  return (
    <div className="border-b-[1px] p-2 flex justify-between items-center">
      <Input
        enterKeyHint="search"
        type="text"
        placeholder="جست و جو ..."
        className="w-52"
        icon={
          <Search strokeWidth={1.5} width={18} className="stroke-gray-400" />
        }
      />
      <AppBreadcrumb />
      <div className="flex">
        <Notifs />
        <HeaderAccountSection />
      </div>
    </div>
  );
}
