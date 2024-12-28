"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function AppBreadcrumb() {
  const pathname = usePathname();
  const path = pathname.split("/").slice(1);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">خانه</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {path.map((breadcrumb) => {
          return (
            <>
              <BreadcrumbSeparator className="rotate-180" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/${breadcrumb}`}>{breadcrumb}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
