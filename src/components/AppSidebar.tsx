import Link from "next/link";
import {
  Settings,
  LayoutDashboard,
  ShoppingCart,
  Users,
  ListMusic,
  CassetteTape,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "داشبورد",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "سفارشات",
    url: "orders",
    icon: ShoppingCart,
  },
  {
    title: "مشتریان",
    url: "customers",
    icon: Users,
  },
  {
    title: "پلی لیست",
    url: "playlists",
    icon: ListMusic,
  },
  {
    title: "میکس تیپ",
    url: "mixtapes",
    icon: CassetteTape,
  },
  {
    title: "تنظیمات",
    url: "settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar side="right" collapsible={"icon"}>
      <SidebarContent className="transition-all">
        <SidebarGroup>
          <SidebarGroupLabel>GOOSH</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon strokeWidth={1.5} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
