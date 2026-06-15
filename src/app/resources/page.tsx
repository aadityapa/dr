import type { Metadata } from "next";
import Link from "next/link";

import { NewsletterSignup } from "@/components/forms/newsletter-signup";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { articleCategories, articles } from "@/lib/articles";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Parent Resources & Articles",
  description: `Expert articles on pediatric OT, autism, ADHD, sensory processing, handwriting & child development from ${siteConfig.doctorName} in Mumbai.`,
  path: "/resources",
  keywords: mumbaiKeywords("parent resources pediatric OT", "child development articles Mumbai"),
});

export default function ResourcesPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "Resources", url: `${siteConfig.url}/resources` }]} />
      <PageHero
        kicker="Parent Resource Center"
        title="Guides for Your Child's Journey"
        description="Evidence-informed articles written for Mumbai parents — covering occupational therapy, development, and everyday strategies."
      />

      <Section>
        <div className="mb-8 flex flex-wrap gap-2">
          {articleCategories.map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-[color:var(--color-soft-green)] px-3 py-1 text-xs font-medium text-[color:var(--color-sage-dark)]"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.05}>
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
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--color-muted)]">{article.excerpt}</p>
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

        <div className="mt-12">
          <NewsletterSignup className="mx-auto max-w-2xl" />
        </div>
      </Section>
    </main>
  );
}
