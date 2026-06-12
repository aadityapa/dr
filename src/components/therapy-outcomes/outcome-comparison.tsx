"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

export type OutcomeArea = {
  title: string;
  before: string[];
  after: string[];
};

type OutcomeComparisonProps = {
  areas: OutcomeArea[];
};

export function OutcomeComparison({ areas }: OutcomeComparisonProps) {
  const [active, setActive] = useState(0);
  const current = areas[active];

  if (!current) return null;

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Therapy outcome areas">
        {areas.map((area, i) => (
          <button
            key={area.title}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === i
                ? "bg-[color:var(--color-sage-dark)] text-white"
                : "bg-white/70 text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]",
            )}
          >
            {area.title}
          </button>
        ))}
      </div>

      <Reveal key={current.title} className="mt-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
          <div className="rounded-3xl border border-red-200/60 bg-red-50/40 p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-700/80">Before Therapy</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
              {current.before.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-red-400" aria-hidden="true">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden items-center justify-center md:flex" aria-hidden="true">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-sage)] text-white shadow-lg">
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>

          <div className="rounded-3xl border border-[color:var(--color-sage)]/30 bg-[color:var(--color-soft-green)]/40 p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[color:var(--color-sage-dark)]">
              After Therapy
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
              {current.after.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[color:var(--color-sage)]" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
