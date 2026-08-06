import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { NewsletterSignup } from "@/components/forms/newsletter-signup";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { ReadingScene } from "@/components/illustrations/scene-illustrations";
import { Section } from "@/components/shared/section";
import { SectionCta } from "@/components/shared/section-cta";
import { ArticleCards } from "@/components/resources/article-cards";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import { getPageShells } from "@/lib/i18n/localize";
import { articles } from "@/lib/articles";
import { localizeArticle } from "@/lib/i18n/content/articles-localize";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const shells = getPageShells(locale);
  return buildPageMetadata({
    title: shells.resources.metaTitle,
    description: shells.resources.metaDescription,
    path: "/resources",
    locale,
    keywords: mumbaiKeywords("parent resources pediatric OT", "child development articles Mumbai"),
  });
}

export default async function ResourcesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const shells = getPageShells(locale);
  const messages = getMessages(locale);
  // Curated selection shown on the listing page, in this exact order.
  const FEATURED_SLUGS = [
    "the-power-of-play",
    "signs-your-child-may-benefit-from-occupational-therapy",
    "preparing-your-child-for-first-occupational-therapy-appointment",
    "why-early-intervention-matters",
  ];
  const featuredArticles = FEATURED_SLUGS.map((slug) => articles.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))
    .map((a) => localizeArticle(a, locale));

  return (
    <main>
      <Breadcrumbs items={[{ name: messages.nav.resources, url: `${siteConfig.url}/${locale}/resources` }]} />
      <PageHero
        photoKey="resources"
        art={<ReadingScene />}
        kicker={shells.resources.kicker}
        title={shells.resources.title}
        description={shells.resources.description}
      />

      <Section>
        <ArticleCards articles={featuredArticles} locale={locale} readMoreLabel={shells.resources.readGuide} />

        <div className="mt-12">
          <NewsletterSignup className="mx-auto max-w-2xl" />
        </div>

        <div className="mt-10">
          <SectionCta
            title={shells.resources.libraryCtaTitle}
            description={shells.resources.libraryCtaDescription}
          />
        </div>
      </Section>
    </main>
  );
}
