import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { articles, getArticle } from "@/lib/articles";
import { buildPageMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return buildPageMetadata({
    title: article.title,
    description: article.description,
    path: `/resources/${slug}`,
    keywords: article.keywords,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main>
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.description,
          slug: article.slug,
          publishedAt: article.publishedAt,
          updatedAt: article.updatedAt,
        })}
        id="article-schema"
      />
      <Breadcrumbs
        items={[
          { name: "Resources", url: `${siteConfig.url}/resources` },
          { name: article.title, url: `${siteConfig.url}/resources/${slug}` },
        ]}
      />

      <Section className="pt-8">
        <article className="mx-auto max-w-3xl">
          <header>
            <span className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-terracotta)]">
              {article.category}
            </span>
            <h1 className="mt-2 font-[family-name:var(--font-serif)] text-3xl text-[color:var(--color-sage-dark)] md:text-4xl">
              {article.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-[color:var(--color-muted)]">
              <span>By {siteConfig.doctorName}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString("en-IN", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span aria-hidden="true">·</span>
              <span>{article.readTime} read</span>
            </div>
          </header>

          <div className="mt-10 space-y-6">
            {article.content.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-[color:var(--color-muted)]">
                {paragraph}
              </p>
            ))}
          </div>

          <footer className="mt-12 rounded-2xl bg-[color:var(--color-soft-green)]/40 p-8 text-center">
            <p className="font-semibold text-[color:var(--color-sage-dark)]">Ready to take the next step?</p>
            <p className="mt-2 text-sm text-[color:var(--color-muted)]">
              Book a consultation with {siteConfig.doctorName} at our Kandivali West clinic.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/appointment">Book Consultation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/resources">More Articles</Link>
              </Button>
            </div>
          </footer>
        </article>
      </Section>
    </main>
  );
}
