import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { OutcomeComparison } from "@/components/therapy-outcomes/outcome-comparison";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import { getLabels, getPageShells } from "@/lib/i18n/localize";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";
import { therapyOutcomeAreas } from "@/lib/therapy-outcomes";

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const shells = getPageShells(locale);
  return buildPageMetadata({
    title: shells.outcomes.metaTitle,
    description: shells.outcomes.metaDescription,
    path: "/therapy-outcomes",
    locale,
    keywords: mumbaiKeywords("pediatric OT outcomes", "therapy results children Mumbai"),
  });
}

export default async function TherapyOutcomesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const shells = getPageShells(locale);
  const messages = getMessages(locale);
  const labels = getLabels(locale);

  return (
    <main>
      <Breadcrumbs items={[{ name: messages.nav.outcomes, url: `${siteConfig.url}/${locale}/therapy-outcomes` }]} />
      <PageHero kicker={shells.outcomes.kicker} title={shells.outcomes.title} description={shells.outcomes.description} />
      <Section>
        <OutcomeComparison areas={therapyOutcomeAreas} />
        <div className="mt-12 rounded-2xl bg-[color:var(--color-soft-green)]/40 p-8 text-center">
          <p className="font-semibold text-[color:var(--color-sage-dark)]">{labels.readyNextStep}</p>
          <p className="mt-2 text-sm text-[color:var(--color-muted)]">
            Book a consultation with {siteConfig.doctorName} to discuss your child&apos;s unique strengths and goals.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/appointment">{messages.cta.bookConsultation}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/screening">{messages.nav.screening}</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
