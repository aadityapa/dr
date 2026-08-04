"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

type SectionCtaProps = {
  title?: string;
  description?: string;
  className?: string;
};

export function SectionCta({
  title = "Ready to take the next step?",
  description = "Book a conversation with Dr. Sharuja Sarap. No pressure — just a warm first step toward support that fits your child.",
  className = "",
}: SectionCtaProps) {
  return (
    <div
      className={`flex flex-col items-center gap-4 rounded-2xl border border-[color:var(--color-border)]/60 bg-[color:var(--color-soft-green)]/20 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left ${className}`}
    >
      <div>
        <p className="font-[family-name:var(--font-serif)] text-lg text-[color:var(--color-sage-dark)]">{title}</p>
        <p className="mt-1 text-sm text-[color:var(--color-muted)]">{description}</p>
      </div>
      <div className="flex shrink-0 flex-wrap gap-3">
        <Button asChild size="sm">
          <Link href="/appointment">Book Assessment</Link>
        </Button>
        <Button asChild variant="outline" size="sm">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
