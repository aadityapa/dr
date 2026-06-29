import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getAboutContent, getPageShells } from "@/lib/i18n/localize";
import { getCardPastel } from "@/lib/pastel-palette";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { getSiteImage } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const shells = getPageShells(locale);
  return buildPageMetadata({
    title: shells.about.metaTitle,
    description: shells.about.metaDescription,
    path: "/about",
    locale,
    keywords: mumbaiKeywords(
      "Pediatric Occupational Therapist Mumbai",
      "OT Kandivali",
      "Dr. Sharuja Sarap OT",
      "Brain Gym Mumbai",
      "Sensory Integration Mumbai",
    ),
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const about = getAboutContent(locale);
  const shells = getPageShells(locale);

  return (
    <main>
      <PageHero kicker={shells.about.kicker} title={shells.about.title} description={shells.about.description}>
        <Button asChild>
          <Link href="/appointment">{shells.about.bookConversation}</Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src={getSiteImage("doctorPortrait")}
                alt={`${siteConfig.doctorName} — pediatric occupational therapist in Kandivali, Mumbai`}
                width={600}
                height={750}
                sizes="(max-width: 1024px) 100vw, 600px"
                className="aspect-[4/5] w-full object-cover"
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4">
              <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)] md:text-3xl">
                {about.aboutMe.greeting}
              </h2>
              {about.aboutMe.paragraphs.map((para) => (
                <p key={para.slice(0, 48)} className="leading-relaxed text-[color:var(--color-muted)]">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="rounded-[2rem] bg-[color:var(--color-almond)]">
        <SectionHeading title={about.inviteSharuja.title} />
        <div className="mt-6 max-w-3xl space-y-4">
          {about.inviteSharuja.paragraphs.map((para) => (
            <p key={para.slice(0, 48)} className="leading-relaxed text-[color:var(--color-muted)]">
              {para}
            </p>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/invite-sharuja">{shells.about.inviteCta}</Link>
          </Button>
        </div>
      </Section>

      <Section className="rounded-[2rem] bg-[color:var(--color-soft-green)]/30">
        <SectionHeading title={about.availableFor.title} center />
        <ul className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
          {about.availableFor.items.map((item, i) => {
            const pastel = getCardPastel(i);
            return (
              <Reveal key={item} delay={i * 0.04}>
                <li
                  className="flex items-start gap-2 rounded-xl border p-4 text-sm text-[color:var(--color-muted)]"
                  style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
                >
                  <span className="mt-0.5 shrink-0 text-[color:var(--color-sage)]">✓</span>
                  {item}
                </li>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-[color:var(--color-border)]/60 bg-[color:var(--color-almond)] p-6 md:p-8">
              <h3 className="font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-sage-dark)] md:text-2xl">
                {about.expertise.title}
              </h3>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {about.expertise.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-[color:var(--color-muted)]">
                    <span className="shrink-0 text-[color:var(--color-sage)]" aria-hidden>
                      –
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-[color:var(--color-border)]/60 bg-white/80 p-6 md:p-8">
              <h3 className="font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-sage-dark)] md:text-2xl">
                {about.suitableFor.title}
              </h3>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {about.suitableFor.items.map((item, i) => {
                  const pastel = getCardPastel(i + 6);
                  return (
                    <li
                      key={item}
                      className="rounded-lg border px-3 py-2 text-sm text-[color:var(--color-muted)]"
                      style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
