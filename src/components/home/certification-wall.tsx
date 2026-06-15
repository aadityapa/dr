"use client";

import { Award } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { certificationCards } from "@/lib/certifications";

export function CertificationWall({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <div>
      {!hideHeading && (
        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[color:var(--color-sage-dark)]">
          <Award className="h-4 w-4 text-[color:var(--color-terracotta)]" aria-hidden="true" />
          Specialized Certifications
        </h3>
      )}
      <div className={hideHeading ? "grid gap-3 sm:grid-cols-2" : "mt-4 grid gap-3 sm:grid-cols-2"}>
        {certificationCards.map((cert, i) => (
          <Reveal key={cert.id} delay={i * 0.04}>
            <div
              className="group rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: cert.bg,
                borderColor: cert.border,
              }}
            >
              <div className="flex items-start gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white"
                  style={{ backgroundColor: cert.icon }}
                >
                  {cert.shortName.slice(0, 3)}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-[color:var(--color-sage-dark)]">{cert.shortName}</p>
                  <p className="text-[11px] font-medium leading-snug text-[color:var(--color-muted)]">
                    {cert.fullName}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[color:var(--color-muted)] line-clamp-2 group-hover:line-clamp-none">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
