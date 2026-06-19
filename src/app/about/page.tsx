import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CertificationWall } from "@/components/home/certification-wall";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { aboutContent } from "@/lib/client-content/about";
import { getCardPastel } from "@/lib/pastel-palette";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { getSiteImage } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata({
  title: `About ${siteConfig.doctorName}`,
  description: aboutContent.hero.description,
  path: "/about",
  keywords: mumbaiKeywords("pediatric occupational therapist Mumbai", "Dr. Sharuja Sarap OT"),
});

export default function AboutPage() {
  return (
    <main>
      <PageHero kicker={aboutContent.hero.kicker} title={aboutContent.hero.title} description={aboutContent.hero.description}>
        <Button asChild>
          <Link href="/appointment">Book a Conversation</Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src={getSiteImage("doctorPortrait")}
                alt="Dr. Sharuja Sarap — pediatric occupational therapist in Kandivali, Mumbai"
                width={600}
                height={750}
                sizes="(max-width: 1024px) 100vw, 600px"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4">
              {aboutContent.intro.paragraphs.map((para) => (
                <p key={para.slice(0, 48)} className="leading-relaxed text-[color:var(--color-muted)]">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="rounded-[2rem] bg-[color:var(--color-almond)]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutContent.highlights.map((item, i) => {
            const pastel = getCardPastel(i);
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div
                  className="h-full rounded-2xl border p-5"
                  style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
                >
                  <h3 className="font-semibold" style={{ color: pastel.text }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading title={aboutContent.research.title} description={aboutContent.research.description} center />
        <ul className="mx-auto mt-8 grid max-w-2xl gap-3">
          {aboutContent.research.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
              <span className="text-[color:var(--color-sage)]">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="rounded-[2rem] bg-[color:var(--color-soft-green)]/30">
        <SectionHeading
          title={aboutContent.familyCentered.title}
          description={aboutContent.familyCentered.description}
          center
        />
        <ul className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
          {aboutContent.familyCentered.bullets.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-[color:var(--color-border)]/60 bg-white/80 p-4 text-sm text-[color:var(--color-muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/invite-sharuja">Invite Sharuja to Your Program</Link>
          </Button>
        </div>
      </Section>

      <Section id="certifications">
        <SectionHeading
          kicker="Certifications"
          title={aboutContent.certifications.title}
          description={aboutContent.certifications.description}
          center
        />
        <Reveal className="mt-10">
          <CertificationWall hideHeading />
        </Reveal>
      </Section>
    </main>
  );
}
