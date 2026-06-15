import Image from "next/image";
import Link from "next/link";
import { GraduationCap } from "lucide-react";

import { CertificationWall } from "@/components/home/certification-wall";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { doctorProfile, doctorTimeline, siteConfig } from "@/lib/site-data";

const DOCTOR_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCeoZkBYzn93ZY5eHYUUVXZKScDqSl4PilFvk0YMZi7yu3lIqh9KXLHADwpsnMvceBYYu6UR2bZUrv9KQYVwNvnE92ZZpbHcJLKLCxB80CEA13jwP7A6sjZ0GT5LFUn9d7OrsX3MK6-1eKi69xngkuoLl7Wos_8Xva82ZTiFzWKb2696wF702noRassWo_iPwVmpbj-45zzcxcBBvWZUtJN0h7QSWmYY-VGxNoSADl7wzyN0wF6jajP7hmQsjvg7pULU-fceNNYYUc";

export function DoctorAuthoritySection() {
  return (
    <Section id="meet-doctor" className="bg-[color:var(--color-almond)]">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative mx-auto max-w-md lg:mx-0 lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src={DOCTOR_IMAGE}
                alt={`${siteConfig.doctorName} — Pediatric Occupational Therapist in Kandivali, Mumbai`}
                width={480}
                height={560}
                className="aspect-[5/6] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl border border-white/80 bg-white px-5 py-4 shadow-xl">
              <p className="text-2xl font-[family-name:var(--font-serif)] text-[color:var(--color-sage-dark)]">
                {siteConfig.experienceYears}+
              </p>
              <p className="text-xs font-medium text-[color:var(--color-muted)]">Years Experience</p>
              <p className="mt-1 text-[10px] text-[color:var(--color-muted)]">Reg. {siteConfig.registrationNumber}</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              kicker="Meet Your Therapist"
              title={`Meet ${siteConfig.doctorName}`}
              description="Ph.D. Scholar · Master's in Pediatric OT · Certified Brain Gym Instructor"
            />
            <p className="mt-4 max-w-prose leading-relaxed text-[color:var(--color-muted)]">{doctorProfile.bio}</p>
          </Reveal>

          <Reveal delay={0.06} className="mt-6 flex flex-wrap gap-2">
            {doctorProfile.qualifications.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-border)] bg-white px-3 py-1.5 text-xs font-medium text-[color:var(--color-sage-dark)]"
              >
                <GraduationCap className="h-3.5 w-3.5 text-[color:var(--color-sage)]" aria-hidden="true" />
                {item}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <CertificationWall />
          </Reveal>

          <Reveal delay={0.14} className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-sage-dark)]">
              Professional Journey
            </h3>
            <div className="mt-4 space-y-3">
              {doctorTimeline.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-[color:var(--color-border)]/50 bg-white p-4"
                >
                  <span className="shrink-0 text-xs font-bold text-[color:var(--color-terracotta)]">{item.year}</span>
                  <div>
                    <p className="font-semibold text-[color:var(--color-sage-dark)]">{item.title}</p>
                    <p className="text-sm text-[color:var(--color-muted)] line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.18} className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/about">Full Profile</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/appointment">Book Consultation</Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
