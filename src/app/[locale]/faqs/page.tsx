import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { FaqAccordion } from "@/components/faqs/faq-accordion";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { QuestionScene } from "@/components/illustrations/scene-illustrations";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import { getLocalizedFaqs, getPageShells } from "@/lib/i18n/localize";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { faqPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const shells = getPageShells(locale);
  return buildPageMetadata({
    title: shells.faqs.metaTitle,
    description: shells.faqs.metaDescription,
    path: "/faqs",
    locale,
    keywords: mumbaiKeywords("pediatric OT FAQ", "occupational therapy questions Mumbai", "autism therapy FAQ Kandivali"),
  });
}

export default async function FaqsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const shells = getPageShells(locale);
  const messages = getMessages(locale);
  const allFaqs = getLocalizedFaqs(locale).flatMap((cat) => cat.faqs);

  return (
    <main>
      <JsonLd data={faqPageSchema(allFaqs)} id="faq-page-schema" />
      <Breadcrumbs items={[{ name: messages.nav.faqs, url: `${siteConfig.url}/${locale}/faqs` }]} />
      <PageHero photoKey="faqs" art={<QuestionScene />} kicker={shells.faqs.kicker} title={shells.faqs.title} description={shells.faqs.description} />
      <Section>
        <FaqAccordion />
        <div className="mt-12 rounded-2xl bg-[color:var(--color-soft-green)]/40 p-8 text-center">
          <p className="font-semibold text-[color:var(--color-sage-dark)]">{shells.faqs.stillHaveQuestions}</p>
          <p className="mt-2 text-sm text-[color:var(--color-muted)]">{shells.faqs.stillDescription}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/appointment">{messages.cta.bookConsultation}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">{messages.nav.contact}</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
