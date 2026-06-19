"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { Reveal } from "@/components/shared/reveal";
import { ServiceIcon } from "@/components/shared/service-icon";
import {
  certificationCards,
  certificationGroupLabels,
  certificationGroups,
  type CertificationGroup,
} from "@/lib/certifications";

gsap.registerPlugin(ScrollTrigger);

export function CertificationWall({ hideHeading = false }: { hideHeading?: boolean }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || !gridRef.current) return;

      gsap.from(".cert-card", {
        scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
        opacity: 0,
        y: 24,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
      });
    },
    { scope: gridRef },
  );

  const byGroup = certificationGroups.reduce(
    (acc, group) => {
      acc[group] = certificationCards.filter((c) => c.group === group);
      return acc;
    },
    {} as Record<CertificationGroup, typeof certificationCards>,
  );

  return (
    <div ref={gridRef}>
      {!hideHeading && (
        <h3 className="text-center font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
          Certification Wall
        </h3>
      )}

      <div className={hideHeading ? "space-y-10" : "mt-10 space-y-10"}>
        {certificationGroups.map((group) => {
          const cards = byGroup[group];
          if (!cards.length) return null;
          return (
            <div key={group}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[color:var(--color-terracotta)]">
                {certificationGroupLabels[group]}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map((cert) => (
                  <Reveal key={cert.id}>
                    <div
                      className="cert-card group h-full rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                      style={{ backgroundColor: cert.bg, borderColor: cert.border }}
                    >
                      <div
                        className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 shadow-sm transition-transform duration-300 group-hover:scale-110"
                      >
                        <ServiceIcon name={cert.iconName} className="h-5 w-5" style={{ color: cert.icon }} />
                      </div>
                      <p className="font-semibold text-[color:var(--color-sage-dark)]">{cert.shortName}</p>
                      <p className="mt-0.5 text-[11px] font-medium leading-snug text-[color:var(--color-muted)]">
                        {cert.fullName}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-[color:var(--color-muted)]">{cert.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
