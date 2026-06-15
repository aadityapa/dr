"use client";

import Link from "next/link";
import { Star } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { getCardPastel } from "@/lib/pastel-palette";
import { googleReviews, testimonials } from "@/lib/site-data";

export function SuccessStoriesSection() {
  return (
    <Section id="success-stories" className="bg-[color:var(--color-almond)]">
      <SectionHeading
        kicker="Success Stories"
        title="Real families. Real progress."
        description="Parents across Mumbai share what therapy at our clinic has meant for their children."
        center
      />

      <div className="mt-6 flex items-center justify-center gap-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-[color:var(--color-sun)] text-[color:var(--color-sun)]" />
          ))}
        </div>
        <span className="text-sm font-semibold text-[color:var(--color-sage-dark)]">
          {googleReviews.rating} · {googleReviews.reviewCount}+ reviews
        </span>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 3).map((t, i) => {
          const pastel = getCardPastel(i + 6);
          return (
            <Reveal key={t.parent} delay={i * 0.08}>
              <blockquote
                className="flex h-full flex-col rounded-2xl border p-6 shadow-sm"
                style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
              >
                <p className="flex-1 text-sm leading-relaxed text-[color:var(--color-muted)]">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 border-t pt-4" style={{ borderColor: pastel.border }}>
                  <p className="text-sm font-semibold" style={{ color: pastel.text }}>
                    {t.parent}
                  </p>
                  <p className="text-xs" style={{ color: pastel.accent }}>
                    {t.milestone}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {googleReviews.reviews.slice(0, 2).map((review, i) => {
          const pastel = getCardPastel(i + 10);
          return (
            <Reveal key={review.author} delay={0.1 + i * 0.05}>
              <div
                className="rounded-2xl border p-5"
                style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-[color:var(--color-sun)] text-[color:var(--color-sun)]" />
                  ))}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">&ldquo;{review.text}&rdquo;</p>
                <p className="mt-2 text-xs font-medium" style={{ color: pastel.text }}>
                  — {review.author}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <p className="mt-6 text-center text-xs text-[color:var(--color-muted)]">
        Stories shared with parental consent. Individual outcomes vary.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild variant="outline">
          <a href={googleReviews.mapsUrl} target="_blank" rel="noopener noreferrer">
            Google Reviews
          </a>
        </Button>
        <Button asChild>
          <Link href="/testimonials-milestones">More Stories</Link>
        </Button>
      </div>
    </Section>
  );
}
