import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-2xl border border-[color:var(--color-border)] bg-white px-4 py-2 text-sm text-[color:var(--color-sage-dark)] shadow-sm transition-colors placeholder:text-[color:var(--color-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sage)]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
