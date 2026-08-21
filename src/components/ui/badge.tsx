import * as React from "react";

import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "badge-premium inline-flex items-center rounded-full px-3.5 py-1 text-xs font-semibold text-[color:var(--color-sage-text)]",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
