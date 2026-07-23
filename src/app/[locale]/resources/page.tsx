import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { NewsletterSignup } from "@/components/forms/newsletter-signup";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { ReadingScene } from "@/components/illustrations/scene-illustrations";
import { Section } from "@/components/shared/section";
import { SectionCta } from "@/components/shared/section-cta";
import { ResourceGrid } from "@/components/resources/resource-grid";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import { getPageShells } from "@/lib/i18n/localize";
import { articles } from "@/lib/articles";
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

  return (
    <main>
      <Breadcrumbs items={[{ name: messages.nav.resources, url: `${siteConfig.url}/${locale}/resources` }]} />
      <PageHero
        photoKey="resources"
        art={<ReadingScene />}
        kicker={shells.resources.kicker}
        title={shells.resources.title}
        description={`${articles.length}+ ${shells.resources.description}`}
      />

      <Section>
        <ResourceGrid articles={articles} />

        <div className="mt-12">
          <NewsletterSignup className="mx-auto max-w-2xl" />
        </div>

        <div className="mt-10">
          <SectionCta
            title="Explore our digital library"
            description="Download free checklists, parent guides, and screening tools — with instant email delivery."
          />
        </div>
      </Section>
    </main>
  );
}
