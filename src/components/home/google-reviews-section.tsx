"use client";

import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { JsonLd } from "@/components/shared/json-ld";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { aggregateRatingSchema, reviewListSchema } from "@/lib/schema";
import { googleReviews } from "@/lib/site-data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.round(rating) ? "fill-[color:var(--color-terracotta)] text-[color:var(--color-terracotta)]" : "text-[color:var(--color-border)]"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function GoogleReviewsSection() {
  const { content, locale } = useLanguage();
  const copy = content.googleReviews;
  const dateLocale = locale === "en" ? "en-IN" : locale === "hi" ? "hi-IN" : "mr-IN";

  return (
    <Section id="reviews" compact className="rounded-[2rem] bg-white/70">
      <JsonLd data={aggregateRatingSchema()} id="aggregate-rating-schema" />
      <JsonLd data={reviewListSchema()} id="review-list-schema" />

      <SectionHeading kicker={copy.kicker} title={copy.title} description={copy.description} center />

      <Reveal className="mt-8 flex flex-col items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="font-[family-name:var(--font-serif)] text-5xl text-[color:var(--color-sage-dark)]">
            {googleReviews.rating}
          </span>
          <div>
            <StarRating rating={googleReviews.rating} />
            <p className="mt-1 text-sm text-[color:var(--color-muted)]">
              {copy.basedOnReviews.replace("{count}", String(googleReviews.reviewCount))}
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {copy.items.map((review, i) => (
          <Reveal key={review.author} delay={i * 0.08}>
            <Card className="h-full transition-all hover:-translate-y-0.5 hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[color:var(--color-sage-dark)]">{review.author}</p>
                    <p className="text-xs text-[color:var(--color-muted)]">
                      {new Date(googleReviews.reviews[i]?.date ?? "").toLocaleDateString(dateLocale, {
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <StarRating rating={googleReviews.reviews[i]?.rating ?? 5} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted)]">
                  &ldquo;{review.text}&rdquo;
                </p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <Button asChild variant="outline" size="lg">
          <a href={googleReviews.mapsUrl} target="_blank" rel="noopener noreferrer">
            {copy.viewAll}
            <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
        <p className="mt-3 text-sm text-[color:var(--color-muted)]">
          {copy.orReadMore}{" "}
          <Link href="/testimonials-milestones" className="font-semibold text-[color:var(--color-sage-dark)] hover:underline">
            {copy.testimonialsLink}
          </Link>
        </p>
      </Reveal>
    </Section>
  );
}
