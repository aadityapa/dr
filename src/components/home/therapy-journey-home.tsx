"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

import { useLanguage } from "@/components/providers/language-provider";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/ui/button";
import { getCardPastel } from "@/lib/pastel-palette";
import { therapyJourneySteps } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger);

export function TherapyJourneyHome() {
  const ref = useRef<HTMLDivElement>(null);
  const { content } = useLanguage();
  const copy = content.therapyJourney;

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || !ref.current) return;

      gsap.from(".home-journey-step", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        opacity: 0,
        y: 32,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      });
    },
    { scope: ref },
  );

  return (
    <Section compact className="bg-white">
      <SectionHeading kicker={copy.kicker} title={copy.title} description={copy.description} center />

      <div ref={ref} className="mt-10 grid gap-4 md:grid-cols-5">
        {copy.steps.map((step, i) => {
          const pastel = getCardPastel(i + 3);
          return (
            <div
              key={step.title}
              className="home-journey-step flex flex-col items-center rounded-2xl border p-5 text-center"
              style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
                <ServiceIcon name={therapyJourneySteps[i]?.icon ?? "HeartHandshake"} className="h-6 w-6" style={{ color: pastel.accent }} />
              </div>
              <p className="mt-1 text-xs font-bold" style={{ color: pastel.accent }}>
                {content.common.step} {i + 1}
              </p>
              <h3 className="mt-1 font-semibold" style={{ color: pastel.text }}>
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[color:var(--color-muted)] line-clamp-2">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link href="/therapy-journey">{copy.fullJourney}</Link>
        </Button>
      </div>
    </Section>
  );
}
