"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { TestimonialCarousel } from "@/components/shared/testimonial-carousel";
import { milestones } from "@/lib/site-data";

import { StitchCard, StitchHero, StitchSection, StitchShell } from "./ui";

export function StitchMilestonesPage() {
  return (
    <StitchShell>
      <StitchHero
        kicker="Milestones We Celebrated"
        title="Stories of progress, confidence, and joyful participation"
        description="Every milestone is meaningful. We celebrate growth while honoring each child's unique pace."
      />

      <StitchSection className="stitch-testimonials bg-surface-container-low pt-0">
        <div className="stitch-testimonials">
          <TestimonialCarousel />
        </div>
      </StitchSection>

      <StitchSection className="pb-24">
        <h2 className="font-headline-lg text-headline-lg mb-10 text-center">Achievement Timeline</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {milestones.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <StitchCard className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-body-md text-on-surface">{item}</p>
              </StitchCard>
            </motion.div>
          ))}
        </div>
      </StitchSection>
    </StitchShell>
  );
}
