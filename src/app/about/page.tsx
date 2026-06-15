import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ProfessionalJourneySection } from "@/components/about/professional-journey-section";
import { CertificationWall } from "@/components/home/certification-wall";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { getCardPastel } from "@/lib/pastel-palette";
import { aboutVoice } from "@/lib/parent-voice-conditions";
import { doctorProfile, siteConfig } from "@/lib/site-data";
import { getSiteImage } from "@/lib/site-images";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { GraduationCap } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: `About ${siteConfig.doctorName}`,
  description: aboutVoice.heroDescription,
  path: "/about",
  keywords: mumbaiKeywords("pediatric occupational therapist Mumbai", "Dr. Sharuja Sarap OT"),
});

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker={aboutVoice.heroKicker}
        title={aboutVoice.heroTitle}
        description={aboutVoice.heroDescription}
      >
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
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--color-terracotta)]">
                {siteConfig.title}
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-serif)] text-3xl text-[color:var(--color-sage-dark)]">
                {aboutVoice.storyTitle}
              </h2>
              <div className="mt-4 space-y-4">
                {aboutVoice.storyParagraphs.map((para) => (
                  <p key={para.slice(0, 48)} className="leading-relaxed text-[color:var(--color-muted)]">
                    {para}
                  </p>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl p-4" style={{ backgroundColor: "#D6E8F5", border: "1px solid #A8CCE8" }}>
                  <p className="text-2xl font-bold text-[#1E4A6E]">{siteConfig.experienceYears}+</p>
                  <p className="text-sm text-[color:var(--color-muted)]">Years walking with families</p>
                </div>
                <div className="rounded-2xl p-4" style={{ backgroundColor: "#E4DDF5", border: "1px solid #C9BCE8" }}>
                  <p className="text-2xl font-bold text-[#4A3570]">500+</p>
                  <p className="text-sm text-[color:var(--color-muted)]">Families supported</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="rounded-[2rem] bg-[color:var(--color-almond)]">
        <SectionHeading
          kicker="Background"
          title={aboutVoice.qualificationsTitle}
          description={aboutVoice.qualificationsDescription}
          center
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {doctorProfile.qualifications.map((q, i) => {
            const pastel = getCardPastel(i);
            return (
              <Reveal key={q} delay={i * 0.08}>
                <div
                  className="flex items-start gap-3 rounded-2xl border p-5"
                  style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
                >
                  <GraduationCap className="mt-0.5 h-5 w-5 shrink-0" style={{ color: pastel.accent }} />
                  <p className="text-sm font-medium" style={{ color: pastel.text }}>
                    {q}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading
          kicker="Certifications"
          title={aboutVoice.certificationsTitle}
          description={aboutVoice.certificationsDescription}
          center
        />
        <Reveal className="mt-10">
          <CertificationWall hideHeading />
        </Reveal>
      </Section>

      <ProfessionalJourneySection />
    </main>
  );
}
