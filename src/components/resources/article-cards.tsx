import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { Card, CardContent } from "@/components/ui/card";
import type { Article } from "@/lib/articles";

/** A small, curated grid of article cards — no search, no pagination. */
export function ArticleCards({
  articles,
  readMoreLabel,
}: {
  articles: Article[];
  readMoreLabel: string;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {articles.map((article, i) => (
        <Reveal key={article.slug} delay={i * 0.06}>
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
              <div className="mt-5 flex items-center justify-between text-xs text-[color:var(--color-muted)]">
                <span className="font-semibold text-[color:var(--color-sage-text)]">{readMoreLabel}</span>
                <span>{article.readTime}</span>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
