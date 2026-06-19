import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MapPin } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getLocalizedLocation, getPageShells } from "@/lib/i18n/localize";
import { locationPages } from "@/lib/locations";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const shells = getPageShells(locale);
  return buildPageMetadata({
    title: shells.locations.metaTitle,
    description: shells.locations.metaDescription,
    path: "/locations",
    locale,
    keywords: mumbaiKeywords(
      "occupational therapist Kandivali",
      "pediatric therapy Mumbai",
      "OT clinic Kandivali West",
    ),
  });
}

export default async function LocationsIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const shells = getPageShells(locale);

  return (
    <main>
      <PageHero kicker={shells.locations.kicker} title={shells.locations.title} description={shells.locations.description} />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {locationPages.map((location, i) => {
            const localized = getLocalizedLocation(location.slug, locale) ?? location;
            return (
              <Reveal key={location.slug} delay={i * 0.05}>
                <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-2 text-[color:var(--color-sage-text)]">
                      <MapPin className="h-4 w-4" aria-hidden />
                      <span className="text-xs font-semibold uppercase tracking-widest">{shells.locations.breadcrumb}</span>
                    </div>
                    <h2 className="font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-sage-dark)]">
                      {localized.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)] line-clamp-3">
                      {localized.intro}
                    </p>
                    <Button asChild variant="outline" size="sm" className="mt-4">
                      <Link href={`/locations/${location.slug}`}>View local page</Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </main>
  );
}
