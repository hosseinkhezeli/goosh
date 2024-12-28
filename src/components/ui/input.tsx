import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & {
    icon: React.ReactNode;
  }
>(({ className, type, icon, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex h-8 items-center rounded-md border border-input bg-white pl-3 text-sm  focus-within:border-gray-300 ",
        className
      )}
    >
      {icon}
      <input
        {...props}
        ref={ref}
        className="w-full p-1 placeholder:text-muted-foreground placeholder:text-gray-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input };
