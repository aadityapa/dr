import type { Metadata } from "next";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCarousel } from "@/components/shared/testimonial-carousel";
import { Card, CardContent } from "@/components/ui/card";
import { milestones } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Testimonials & Milestones",
  description: "Parent stories and child milestones presented with empathy and ethical care.",
};

export default function TestimonialsMilestonesPage() {
  return (
    <main>
      <Section>
        <SectionHeading
          kicker="Milestones We Celebrated"
          title="Stories of progress, confidence, and joyful participation"
          description={"Every milestone is meaningful. We celebrate growth while honoring each child's unique pace."}
        />
        <div className="mt-8">
          <TestimonialCarousel />
        </div>
      </Section>
      <Section className="rounded-[2rem] bg-white/70">
        <SectionHeading title="Achievement Timeline" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {milestones.map((item) => (
            <Card key={item}>
              <CardContent className="p-6 text-sm text-[color:var(--color-sage-dark)]">{item}</CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
