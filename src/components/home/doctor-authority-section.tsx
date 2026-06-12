import Image from "next/image";
import Link from "next/link";
import { Award, BadgeCheck, GraduationCap, MapPin } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { doctorProfile, doctorTimeline, siteConfig } from "@/lib/site-data";

const DOCTOR_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCeoZkBYzn93ZY5eHYUUVXZKScDqSl4PilFvk0YMZi7yu3lIqh9KXLHADwpsnMvceBYYu6UR2bZUrv9KQYVwNvnE92ZZpbHcJLKLCxB80CEA13jwP7A6sjZ0GT5LFUn9d7OrsX3MK6-1eKi69xngkuoLl7Wos_8Xva82ZTiFzWKb2696wF702noRassWo_iPwVmpbj-45zzcxcBBvWZUtJN0h7QSWmYY-VGxNoSADl7wzyN0wF6jajP7hmQsjvg7pULU-fceNNYYUc";

export function DoctorAuthoritySection() {
  return (
    <Section id="meet-doctor" className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[color:var(--color-soft-green)]/30 via-white/80 to-[color:var(--color-cream)]">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-[color:var(--color-sage)]/15">
              <Image
                src={DOCTOR_IMAGE}
                alt={`${siteConfig.doctorName} — Pediatric Occupational Therapist in Kandivali, Mumbai`}
                width={480}
                height={560}
                className="aspect-[5/6] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-sage-dark)]/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-sm">
              <p className="text-2xl font-[family-name:var(--font-serif)] text-[color:var(--color-sage-dark)]">
                {siteConfig.experienceYears}+
              </p>
              <p className="text-xs font-medium text-[color:var(--color-muted)]">Years Experience</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              kicker="Meet Your Therapist"
              title={`Meet ${siteConfig.doctorName}`}
              description={`${siteConfig.title} · Kandivali West, Mumbai · Reg. No. ${siteConfig.registrationNumber}`}
            />
            <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">{doctorProfile.bio}</p>
            <p className="mt-3 font-[family-name:var(--font-serif)] text-lg italic text-[color:var(--color-terracotta)]">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-6 flex flex-wrap gap-2">
            {doctorProfile.qualifications.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-border)] bg-white/80 px-3 py-1.5 text-xs font-medium text-[color:var(--color-sage-dark)]"
              >
                <GraduationCap className="h-3.5 w-3.5 text-[color:var(--color-sage)]" aria-hidden="true" />
                {item}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.12} className="mt-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[color:var(--color-sage-dark)]">
              <Award className="h-4 w-4 text-[color:var(--color-terracotta)]" aria-hidden="true" />
              Specialized Certifications
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {doctorProfile.certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1 rounded-lg bg-[color:var(--color-sage)]/10 px-2.5 py-1 text-xs text-[color:var(--color-sage-dark)]"
                >
                  <BadgeCheck className="h-3 w-3 shrink-0" aria-hidden="true" />
                  {cert}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.16} className="mt-8">
            <div className="space-y-4 border-l-2 border-[color:var(--color-sage)]/30 pl-6">
              {doctorTimeline.map((item) => (
                <div key={item.title} className="relative">
                  <span className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-[color:var(--color-terracotta)]" />
                  <p className="text-xs font-bold uppercase tracking-wider text-[color:var(--color-terracotta)]">
                    {item.year}
                  </p>
                  <p className="font-semibold text-[color:var(--color-sage-dark)]">{item.title}</p>
                  <p className="text-sm text-[color:var(--color-muted)]">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild>
              <Link href="/about">Full Profile</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/appointment">Book Consultation</Link>
            </Button>
            <span className="flex items-center gap-1.5 text-sm text-[color:var(--color-muted)]">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Kandivali West, Mumbai
            </span>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
