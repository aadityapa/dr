"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/shared/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { Article } from "@/lib/articles";

type ResourceGridProps = {
  articles: Article[];
};

const PAGE_SIZE = 12;

export function ResourceGrid({ articles }: ResourceGridProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => ["All", ...new Set(articles.map((a) => a.category))], [articles]);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory = category === "All" || a.category === category;
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [articles, category, query]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Input
          type="search"
          placeholder="Search articles…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          aria-label="Search articles"
          className="max-w-md"
        />
        <p className="text-sm text-[color:var(--color-muted)]">
          {filtered.length} article{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setCategory(cat);
              setPage(1);
            }}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              category === cat
                ? "bg-[color:var(--color-sage-dark)] text-white"
                : "bg-[color:var(--color-soft-green)] text-[color:var(--color-sage-dark)] hover:bg-[color:var(--color-sage)]/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

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

      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
            className="rounded-full border border-[color:var(--color-border)] px-4 py-2 text-sm disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-sm text-[color:var(--color-muted)]">
            Page {page} of {totalPages}
          </span>
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="rounded-full border border-[color:var(--color-border)] px-4 py-2 text-sm disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
