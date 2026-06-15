"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";

import { Pagination } from "@/components/shared/pagination";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { faqCategories } from "@/lib/faqs";
import { paginateItems } from "@/lib/pagination";

const FAQ_PAGE_SIZE = 10;

export function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const listRef = useRef<HTMLDivElement>(null);

  const totalCount = faqCategories.reduce((sum, cat) => sum + cat.faqs.length, 0);

  const searchResults = useMemo(() => {
    if (!query.trim()) return null;
    const lower = query.toLowerCase();
    return faqCategories.flatMap((cat) =>
      cat.faqs
        .filter((faq) => faq.q.toLowerCase().includes(lower) || faq.a.toLowerCase().includes(lower))
        .map((faq) => ({ ...faq, category: cat.title })),
    );
  }, [query]);

  const category = faqCategories.find((c) => c.id === activeCategory) ?? faqCategories[0];
  const allDisplayFaqs =
    searchResults ?? category?.faqs.map((faq) => ({ ...faq, category: category.title })) ?? [];

  const totalPages = Math.max(1, Math.ceil(allDisplayFaqs.length / FAQ_PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const displayFaqs = paginateItems(allDisplayFaqs, safePage, FAQ_PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [activeCategory, query]);

  function handlePageChange(next: number) {
    setPage(next);
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div ref={listRef}>
      <div className="mb-4 text-sm text-[color:var(--color-muted)]">
        {totalCount} questions across {faqCategories.length} categories
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--color-muted)]" aria-hidden="true" />
        <Input
          type="search"
          placeholder="Search FAQs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-11"
          aria-label="Search frequently asked questions"
        />
      </div>

      {!searchResults && (
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-[color:var(--color-sage-dark)] text-white"
                  : "bg-white/70 text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      )}

      {searchResults && searchResults.length === 0 && (
        <p className="mb-6 text-sm text-[color:var(--color-muted)]">No FAQs match your search. Try different keywords.</p>
      )}

      {searchResults && searchResults.length > 0 && (
        <p className="mb-4 text-sm text-[color:var(--color-muted)]">
          {searchResults.length} result{searchResults.length === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
        </p>
      )}

      <Accordion type="single" collapsible className="space-y-3">
        {displayFaqs.map((faq, idx) => (
          <AccordionItem key={`${faq.category}-${faq.q}-${idx}`} value={`faq-${safePage}-${idx}`}>
            <AccordionTrigger>
              <span className="text-left">
                {searchResults && (
                  <span className="mb-1 block text-xs font-medium text-[color:var(--color-terracotta)]">
                    {faq.category}
                  </span>
                )}
                {faq.q}
              </span>
            </AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Pagination
        className="mt-10"
        page={safePage}
        totalPages={totalPages}
        totalItems={allDisplayFaqs.length}
        pageSize={FAQ_PAGE_SIZE}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
