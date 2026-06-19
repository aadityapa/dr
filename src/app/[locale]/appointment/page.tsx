import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { AppointmentForm } from "@/components/forms/appointment-form";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import type { AppLocale } from "@/i18n/routing";
import { getPageShells } from "@/lib/i18n/localize";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const shells = getPageShells(locale);
  return buildPageMetadata({
    title: shells.appointment.metaTitle,
    description: shells.appointment.metaDescription,
    path: "/appointment",
    locale,
    keywords: mumbaiKeywords("book occupational therapist Mumbai", "pediatric OT appointment Kandivali"),
  });
}

export default async function AppointmentPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const shells = getPageShells(locale);

  return (
    <main>
      <PageHero
        kicker={shells.appointment.kicker}
        title={shells.appointment.title}
        description={shells.appointment.description}
      />

      <Section className="pb-24">
        <Reveal>
          <Card className="mx-auto max-w-3xl">
            <CardContent className="p-6 md:p-8">
              <p className="text-sm text-[color:var(--color-muted)]">{shells.appointment.clinicHours}</p>
              <div className="mt-6">
                <AppointmentForm />
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </Section>
    </main>
  );
}
