import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import { getLabels, getLocalizedArticle, getPageShells } from "@/lib/i18n/localize";
import { articles, getArticle } from "@/lib/articles";
import { buildPageMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale; slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const base = getArticle(slug);
  if (!base) return {};
  const article = getLocalizedArticle(base, locale);

  return buildPageMetadata({
    title: article.title,
    description: article.description,
    path: `/resources/${slug}`,
    locale,
    keywords: article.keywords,
  });
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const base = getArticle(slug);
  if (!base) notFound();

  const article = getLocalizedArticle(base, locale);
  const messages = getMessages(locale);
  const labels = getLabels(locale);
  const shells = getPageShells(locale);

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
          { name: messages.nav.resources, url: `${siteConfig.url}/${locale}/resources` },
          { name: article.title, url: `${siteConfig.url}/${locale}/resources/${slug}` },
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
              <span>{labels.byAuthor} {siteConfig.doctorName}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString(locale === "en" ? "en-IN" : locale === "hi" ? "hi-IN" : "mr-IN", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span aria-hidden="true">·</span>
              <span>
                {article.readTime} {shells.resources.minRead}
              </span>
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
            <p className="font-semibold text-[color:var(--color-sage-dark)]">{shells.articleFooter.title}</p>
            <p className="mt-2 text-sm text-[color:var(--color-muted)]">{shells.articleFooter.description}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/appointment">{shells.articleFooter.book}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/resources">{shells.articleFooter.more}</Link>
              </Button>
            </div>
          </footer>
        </article>
      </Section>
    </main>
  );
}
