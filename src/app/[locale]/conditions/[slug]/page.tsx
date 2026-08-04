import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { ConditionDetailCard } from "@/components/conditions/condition-detail-card";
import { ConditionsBottomCta } from "@/components/conditions/conditions-bottom-cta";
import Image from "next/image";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import { getLabels, getLocalizedClientCondition, getPageShells } from "@/lib/i18n/localize";
import { clientConditions } from "@/lib/client-content/conditions";
import { getCardPastelByKey } from "@/lib/pastel-palette";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { getConditionImage } from "@/lib/condition-images";
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
  const conditionImage = getConditionImage(slug);
  const shells = getPageShells(locale);
  const pastel = getCardPastelByKey(slug);

  return (
    <main className="bg-gradient-to-b from-[color:var(--surface-ivory)] via-[color:var(--surface-linen)] to-[color:var(--surface-mist)]">
      <JsonLd
        id="condition-breadcrumb"
        data={breadcrumbSchema([
          { name: labels.home, url: `${siteConfig.url}/${locale}` },
          { name: messages.nav.conditions, url: `${siteConfig.url}/${locale}/conditions` },
          { name: condition.title, url: `${siteConfig.url}/${locale}/conditions/${slug}` },
        ])}
      />
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
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand-green)]">{labels.forParents}</p>
          <h1 className="mt-3 font-[family-name:var(--font-serif)] text-3xl font-bold text-[color:var(--ink-teal)] md:text-4xl lg:text-5xl">
            {condition.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[color:var(--ink-body)] md:text-lg">
            {condition.understanding.slice(0, 200)}…
          </p>

          {conditionImage ? (
            <div className="glow-frame mx-auto mt-9 aspect-[16/9] w-full max-w-3xl md:mt-11">
              <div className="glow-frame__inner h-full w-full">
                <Image
                  src={conditionImage.src}
                  alt={conditionImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <Section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <ConditionDetailCard condition={condition} labels={labels} hideTitle />


          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-[color:var(--fill-teal)] hover:bg-[color:var(--fill-forest)]">
              <Link href="/appointment">{labels.bookConsultation}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[color:var(--brand-green)]/30 text-[color:var(--ink-teal)]">
              <Link href="/expertise">{labels.exploreExpertise}</Link>
            </Button>
          </div>
        </div>
      </Section>

      <ConditionsBottomCta shells={shells.conditions} labels={labels} />
    </main>
  );
}
