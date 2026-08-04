import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/site-data";
import { Quote, Star } from "lucide-react";

export function TestimonialsPreview() {
  return (
    <Section className="rounded-[2rem] bg-white/70">
      <SectionHeading
        kicker="Milestones We Celebrated"
        title="Voices of progress"
        description="Real stories from families who found hope, support, and meaningful growth."
        center
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.slice(0, 3).map((item, i) => (
          <Reveal key={item.parent} delay={i * 0.1}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex gap-0.5 text-[color:var(--color-terracotta)]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <Quote className="mt-4 h-6 w-6 text-[color:var(--color-sage)]/40" />
                <p className="mt-2 text-sm italic leading-relaxed text-[color:var(--color-muted)]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold text-[color:var(--color-sage-dark)]">{item.parent}</p>
                <p className="text-xs text-[color:var(--color-terracotta)]">{item.milestone}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link href="/testimonials-milestones">Read More Stories</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
