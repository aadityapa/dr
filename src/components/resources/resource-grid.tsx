"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";

import { Pagination } from "@/components/shared/pagination";
import { Reveal } from "@/components/shared/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { Article } from "@/lib/articles";
import { paginateItems } from "@/lib/pagination";

type ResourceGridProps = {
  articles: Article[];
  labels: {
    searchPlaceholder: string;
    articleCountOne: string;
    articleCountMany: string;
    noResults: string;
  };
};

const PAGE_SIZE = 12;

export function ResourceGrid({ articles, labels }: ResourceGridProps) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q);
      return matchesQuery;
    });
  }, [articles, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paginated = paginateItems(filtered, safePage, PAGE_SIZE);

  function handlePageChange(next: number) {
    setPage(next);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div ref={gridRef}>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Input
          type="search"
          placeholder={labels.searchPlaceholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          aria-label={labels.searchPlaceholder}
          className="max-w-md"
        />
        <p className="text-sm text-[color:var(--color-muted)]">
          {filtered.length} {filtered.length === 1 ? labels.articleCountOne : labels.articleCountMany}
        </p>
      </div>


      {paginated.length === 0 ? (
        <p className="py-12 text-center text-sm text-[color:var(--color-muted)]">
          {labels.noResults}
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginated.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.03}>
              <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-6">
                  <span className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-terracotta)]">
                    {article.category}
                  </span>
                  <h2 className="mt-2 font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-sage-dark)]">
                    <Link href={`/resources/${article.slug}`} className="hover:underline">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--color-muted)]">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-[color:var(--color-muted)]">
                    <span>{article.readTime} read</span>
                    <time dateTime={article.publishedAt}>
                      {new Date(article.publishedAt).toLocaleDateString("en-IN", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      )}

      <Pagination
        className="mt-10"
        page={safePage}
        totalPages={totalPages}
        totalItems={filtered.length}
        pageSize={PAGE_SIZE}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
