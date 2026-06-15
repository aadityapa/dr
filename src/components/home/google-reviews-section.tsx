import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";

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
  return (
    <Section id="reviews" compact className="rounded-[2rem] bg-white/70">
      <JsonLd data={aggregateRatingSchema()} id="aggregate-rating-schema" />
      <JsonLd data={reviewListSchema()} id="review-list-schema" />

      <SectionHeading
        kicker="What parents say"
        title="Words that mean a lot to us"
        description="Real reviews from families who've walked through our doors in Kandivali. Your trust is something we never take lightly."
        center
      />

      <Reveal className="mt-8 flex flex-col items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="font-[family-name:var(--font-serif)] text-5xl text-[color:var(--color-sage-dark)]">
            {googleReviews.rating}
          </span>
          <div>
            <StarRating rating={googleReviews.rating} />
            <p className="mt-1 text-sm text-[color:var(--color-muted)]">
              Based on {googleReviews.reviewCount}+ Google reviews
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {googleReviews.reviews.map((review, i) => (
          <Reveal key={review.author} delay={i * 0.08}>
            <Card className="h-full transition-all hover:-translate-y-0.5 hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[color:var(--color-sage-dark)]">{review.author}</p>
                    <p className="text-xs text-[color:var(--color-muted)]">
                      {new Date(review.date).toLocaleDateString("en-IN", {
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <StarRating rating={review.rating} />
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
            View All Reviews on Google
            <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
        <p className="mt-3 text-sm text-[color:var(--color-muted)]">
          Or read more on our{" "}
          <Link href="/testimonials-milestones" className="font-semibold text-[color:var(--color-sage-dark)] hover:underline">
            testimonials page
          </Link>
        </p>
      </Reveal>
    </Section>
  );
}
