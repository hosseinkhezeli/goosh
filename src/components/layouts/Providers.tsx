import { SidebarProvider } from "../ui/sidebar";

export default function ProvidersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
