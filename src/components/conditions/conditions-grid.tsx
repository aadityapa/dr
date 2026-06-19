"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { Pagination } from "@/components/shared/pagination";
import { Reveal } from "@/components/shared/reveal";
import { clientConditions } from "@/lib/client-content/conditions";
import { getCardPastel } from "@/lib/pastel-palette";
import { paginateItems } from "@/lib/pagination";

const PAGE_SIZE = 9;

export function ConditionsGrid() {
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.max(1, Math.ceil(clientConditions.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paginated = paginateItems(clientConditions, safePage, PAGE_SIZE);

  function handlePageChange(next: number) {
    setPage(next);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div ref={gridRef}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginated.map((condition, i) => {
          const globalIndex = (safePage - 1) * PAGE_SIZE + i;
          const pastel = getCardPastel(globalIndex);
          return (
            <Reveal key={condition.slug} delay={i * 0.05}>
              <div
                className="h-full rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
              >
                <h2 className="font-[family-name:var(--font-serif)] text-xl" style={{ color: pastel.text }}>
                  <Link href={`/conditions/${condition.slug}`} className="hover:underline">
                    {condition.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)] line-clamp-3">
                  {condition.understanding}
                </p>
                <Link
                  href={`/conditions/${condition.slug}`}
                  className="mt-4 inline-block text-sm font-semibold hover:underline"
                  style={{ color: pastel.accent }}
                >
                  Read full guide →
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Pagination
        className="mt-10"
        page={safePage}
        totalPages={totalPages}
        totalItems={clientConditions.length}
        pageSize={PAGE_SIZE}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
