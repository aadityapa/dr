"use client";

import { useRef, useState } from "react";

import { Pagination } from "@/components/shared/pagination";
import { Reveal } from "@/components/shared/reveal";
import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { clientConditions } from "@/lib/client-content/conditions";
import { getLocalizedClientCondition } from "@/lib/i18n/localize";
import { getCardPastel } from "@/lib/pastel-palette";
import { paginateItems } from "@/lib/pagination";

const PAGE_SIZE = 9;

export function ConditionsGrid() {
  const { locale, messages } = useLanguage();
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
          const localized = getLocalizedClientCondition(condition.slug, locale) ?? condition;
          const globalIndex = (safePage - 1) * PAGE_SIZE + i;
          const pastel = getCardPastel(globalIndex);
          return (
            <Reveal key={condition.slug} delay={i * 0.05}>
              <div
                className="relative flex h-full flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
              >
                <h2 className="font-[family-name:var(--font-serif)] text-xl" style={{ color: pastel.text }}>
                  <Link href={`/conditions/${condition.slug}`} className="hover:underline">
                    {localized.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--color-muted)] line-clamp-3">
                  {localized.understanding}
                </p>
                <Link
                  href={`/conditions/${condition.slug}`}
                  className="mt-4 inline-block text-sm font-semibold hover:underline after:absolute after:inset-0 after:content-['']"
                  style={{ color: pastel.accent }}
                  aria-label={localized.title}
                >
                  {messages.common.learnMore} →
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
