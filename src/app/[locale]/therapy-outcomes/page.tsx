import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { OutcomeComparison } from "@/components/therapy-outcomes/outcome-comparison";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { GrowthScene } from "@/components/illustrations/scene-illustrations";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import { getLabels, getPageShells, getPhase3Content } from "@/lib/i18n/localize";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

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
  const outcomes = getPhase3Content(locale).outcomes;

  return (
    <main>
      <Breadcrumbs items={[{ name: messages.nav.outcomes, url: `${siteConfig.url}/${locale}/therapy-outcomes` }]} />
      <PageHero photoKey="therapy-outcomes" art={<GrowthScene />} kicker={shells.outcomes.kicker} title={shells.outcomes.title} description={shells.outcomes.description} />
      <Section>
        <OutcomeComparison
          areas={outcomes.areas}
          beforeLabel={outcomes.beforeLabel}
          afterLabel={outcomes.afterLabel}
          tabListLabel={outcomes.tabListLabel}
        />
        <div className="mt-12 rounded-2xl bg-[color:var(--color-soft-green)]/40 p-8 text-center">
          <p className="font-semibold text-[color:var(--color-sage-dark)]">{labels.readyNextStep}</p>
          <p className="mt-2 text-sm text-[color:var(--color-muted)]">
            {outcomes.ctaDescription(siteConfig.doctorName)}
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
