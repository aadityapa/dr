"use client";

import { Award, GraduationCap, ShieldCheck, Stethoscope } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";

const TRUST_ICONS = [Stethoscope, GraduationCap, ShieldCheck, Award] as const;

export function HeroTrustBar() {
  const { content } = useLanguage();

  return (
    <div className="hero-trust mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {content.heroTrust.items.map(({ label, sub }, i) => {
        const Icon = TRUST_ICONS[i] ?? Stethoscope;
        return (
          <div
            key={label}
            className="flex items-center gap-2.5 rounded-xl border border-[color:var(--color-border)]/60 bg-white/80 px-3 py-2.5 shadow-sm backdrop-blur-sm"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[color:var(--color-sage)]/10">
              <Icon className="h-4 w-4 text-[color:var(--color-sage)]" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-[color:var(--color-sage-dark)]">{label}</p>
              <p className="truncate text-[10px] text-[color:var(--color-muted)]">{sub}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
