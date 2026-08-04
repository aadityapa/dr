"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProgressiveListProps = {
  items: string[];
  initialVisible?: number;
  icon?: "bullet" | "check";
  className?: string;
  expandLabel?: string;
  collapseLabel?: string;
};

export function ProgressiveList({
  items,
  initialVisible = 4,
  icon = "bullet",
  className,
  expandLabel = "Show more",
  collapseLabel = "Show less",
}: ProgressiveListProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, initialVisible);
  const hasMore = items.length > initialVisible;

  return (
    <div className={className}>
      <ul className="grid gap-3 sm:grid-cols-2">
        {visible.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 rounded-xl border border-[color:var(--color-border)]/60 bg-white/80 p-4 text-sm leading-relaxed text-[color:var(--color-muted)]"
          >
            <span
              className={cn(
                "mt-0.5 shrink-0",
                icon === "check" ? "text-[color:var(--color-sage-dark)]" : "text-[color:var(--color-terracotta)]",
              )}
            >
              {icon === "check" ? "✓" : "•"}
            </span>
            {item}
          </li>
        ))}
      </ul>
      {hasMore && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="mt-3 text-[color:var(--color-sage-dark)]"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? collapseLabel : expandLabel}
        </Button>
      )}
    </div>
  );
}
