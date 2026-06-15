"use client";

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

import { getPageNumbers, getShowingRange } from "@/lib/pagination";
import { cn } from "@/lib/utils";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems?: number;
  pageSize?: number;
  className?: string;
  id?: string;
};

export function Pagination({
  page,
  totalPages,
  onPageChange,
  totalItems,
  pageSize,
  className,
  id = "pagination",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(page, totalPages);
  const range =
    totalItems !== undefined && pageSize !== undefined
      ? getShowingRange(page, pageSize, totalItems)
      : null;

  function goTo(next: number) {
    const clamped = Math.min(Math.max(1, next), totalPages);
    if (clamped !== page) onPageChange(clamped);
  }

  const btnBase =
    "inline-flex h-9 min-w-9 items-center justify-center rounded-lg border text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sage)]/40 disabled:pointer-events-none disabled:opacity-40";

  return (
    <nav
      id={id}
      aria-label="Pagination"
      className={cn("flex flex-col items-center gap-4 sm:flex-row sm:justify-between", className)}
    >
      {range && totalItems !== undefined ? (
        <p className="text-sm text-[color:var(--color-muted)]">
          Showing <span className="font-medium text-[color:var(--color-sage-dark)]">{range.start}</span>
          {" – "}
          <span className="font-medium text-[color:var(--color-sage-dark)]">{range.end}</span>
          {" of "}
          <span className="font-medium text-[color:var(--color-sage-dark)]">{totalItems}</span>
        </p>
      ) : (
        <p className="text-sm text-[color:var(--color-muted)]">
          Page <span className="font-medium text-[color:var(--color-sage-dark)]">{page}</span> of{" "}
          <span className="font-medium text-[color:var(--color-sage-dark)]">{totalPages}</span>
        </p>
      )}

      <div className="flex flex-wrap items-center justify-center gap-1.5">
        <button
          type="button"
          onClick={() => goTo(1)}
          disabled={page <= 1}
          className={cn(btnBase, "border-[color:var(--color-border)] bg-white text-[color:var(--color-muted)] hover:border-[color:var(--color-sage)] hover:text-[color:var(--color-sage-dark)]")}
          aria-label="First page"
        >
          <ChevronsLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => goTo(page - 1)}
          disabled={page <= 1}
          className={cn(btnBase, "border-[color:var(--color-border)] bg-white px-3 text-[color:var(--color-muted)] hover:border-[color:var(--color-sage)] hover:text-[color:var(--color-sage-dark)]")}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4 sm:mr-1" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        <div className="flex items-center gap-1">
          {pages.map((p, i) =>
            p === "ellipsis" ? (
              <span key={`ellipsis-${i}`} className="px-1 text-sm text-[color:var(--color-muted)]" aria-hidden>
                …
              </span>
            ) : (
              <button
                key={p}
                type="button"
                onClick={() => goTo(p)}
                aria-label={`Page ${p}`}
                aria-current={p === page ? "page" : undefined}
                className={cn(
                  btnBase,
                  p === page
                    ? "border-[color:var(--color-sage-dark)] bg-[color:var(--color-sage-dark)] text-white shadow-sm"
                    : "border-[color:var(--color-border)] bg-white text-[color:var(--color-muted)] hover:border-[color:var(--color-sage)] hover:text-[color:var(--color-sage-dark)]",
                )}
              >
                {p}
              </button>
            ),
          )}
        </div>

        <button
          type="button"
          onClick={() => goTo(page + 1)}
          disabled={page >= totalPages}
          className={cn(btnBase, "border-[color:var(--color-border)] bg-white px-3 text-[color:var(--color-muted)] hover:border-[color:var(--color-sage)] hover:text-[color:var(--color-sage-dark)]")}
          aria-label="Next page"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-4 w-4 sm:ml-1" />
        </button>
        <button
          type="button"
          onClick={() => goTo(totalPages)}
          disabled={page >= totalPages}
          className={cn(btnBase, "border-[color:var(--color-border)] bg-white text-[color:var(--color-muted)] hover:border-[color:var(--color-sage)] hover:text-[color:var(--color-sage-dark)]")}
          aria-label="Last page"
        >
          <ChevronsRight className="h-4 w-4" />
        </button>
      </div>
    </nav>
  );
}
