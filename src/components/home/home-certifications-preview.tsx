import Link from "next/link";
import { Award } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { certificationCards } from "@/lib/certifications";

export function HomeCertificationsPreview() {
  return (
    <Section compact className="border-y border-[color:var(--color-border)]/50 bg-white">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-sage)]/10">
              <Award className="h-5 w-5 text-[color:var(--color-sage)]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[color:var(--color-sage-dark)]">Specialized Certifications</p>
              <p className="text-xs text-[color:var(--color-muted)]">
                Evidence-based training across sensory, motor, and learning programs
              </p>
            </div>
          </div>
          <Button asChild variant="outline" size="sm" className="shrink-0">
            <Link href="/about#certifications">View All →</Link>
          </Button>
        </div>
      </Reveal>

      <div className="mt-6 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {certificationCards.map((cert) => (
          <div
            key={cert.id}
            className="flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5"
            style={{ backgroundColor: cert.bg, borderColor: cert.border }}
            title={cert.fullName}
          >
            <span className="text-sm font-bold" style={{ color: cert.icon }}>
              {cert.shortName}
            </span>
            <span className="hidden max-w-[140px] truncate text-xs text-[color:var(--color-muted)] sm:inline">
              {cert.fullName}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
