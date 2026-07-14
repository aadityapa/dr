import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { ConditionDetailCard } from "@/components/conditions/condition-detail-card";
import { ConditionsBottomCta } from "@/components/conditions/conditions-bottom-cta";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { Section } from "@/components/shared/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import { buildLocalizedConditionFaqs, getLabels, getLocalizedClientCondition, getPageShells } from "@/lib/i18n/localize";
import { clientConditions } from "@/lib/client-content/conditions";
import { getCardPastelByKey } from "@/lib/pastel-palette";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return clientConditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const condition = getLocalizedClientCondition(slug, locale);
  if (!condition) notFound();

  return buildPageMetadata({
    title: `${condition.title} — Pediatric OT Mumbai`,
    description: condition.metaDescription,
    path: `/conditions/${slug}`,
    locale,
    keywords: mumbaiKeywords(condition.title, condition.pillLabel, "OT Kandivali"),
  });
}

export default async function ConditionDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const condition = getLocalizedClientCondition(slug, locale);
  if (!condition) notFound();

  const messages = getMessages(locale);
  const labels = getLabels(locale);
  const shells = getPageShells(locale);
  const faqs = buildLocalizedConditionFaqs(condition.title, locale);
  const pastel = getCardPastelByKey(slug);

  return (
    <main className="bg-gradient-to-b from-[#FFFDF9] via-[#FAF8F4] to-[#F9FCFB]">
      <JsonLd
        id="condition-breadcrumb"
        data={breadcrumbSchema([
          { name: labels.home, url: `${siteConfig.url}/${locale}` },
          { name: messages.nav.conditions, url: `${siteConfig.url}/${locale}/conditions` },
          { name: condition.title, url: `${siteConfig.url}/${locale}/conditions/${slug}` },
        ])}
      />
      <JsonLd id="condition-faq" data={faqPageSchema(faqs)} />
      <Breadcrumbs
        items={[
          { name: messages.nav.conditions, url: `${siteConfig.url}/${locale}/conditions` },
          { name: condition.title, url: `${siteConfig.url}/${locale}/conditions/${slug}` },
        ]}
      />

      <section className="relative overflow-hidden px-4 py-14 md:px-8 md:py-20">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: `${pastel.bg}99` }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#4A9B73]">{labels.forParents}</p>
          <h1 className="mt-3 font-[family-name:var(--font-serif)] text-3xl font-bold text-[#004d4d] md:text-4xl lg:text-5xl">
            {condition.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#444] md:text-lg">
            {condition.understanding.slice(0, 200)}…
          </p>
        </div>
      </section>

      <Section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <ConditionDetailCard condition={condition} labels={labels} hideTitle />

          <div className="rounded-[1.75rem] border border-white/60 bg-white/50 p-6 shadow-lg backdrop-blur-md md:p-8">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[#004d4d]">
              {labels.questionsParentsAsk}
            </h2>
            <Accordion type="single" collapsible className="mt-4 space-y-2">
              {faqs.map((faq, idx) => (
                <AccordionItem key={faq.q} value={`condition-faq-${idx}`} className="border-[#E8E4DC]">
                  <AccordionTrigger className="text-left text-[#333] hover:text-[#004d4d]">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-[#555]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-[#004d4d] hover:bg-[#2D6047]">
              <Link href="/appointment">{labels.bookConsultation}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#4A9B73]/30 text-[#004d4d]">
              <Link href="/expertise">{labels.exploreExpertise}</Link>
            </Button>
          </div>
        </div>
      </Section>

      <ConditionsBottomCta shells={shells.conditions} labels={labels} />
    </main>
  );
}
