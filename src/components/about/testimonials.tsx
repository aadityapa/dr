"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

import type { AboutPageProps } from "./about-types";

export function AboutTestimonials({ shells, testimonials }: AboutPageProps) {
  const reduced = useReducedMotion();

  return (
    <Section className="rounded-[2rem] bg-white/60">
      <SectionHeading
        kicker={shells.sections.testimonialsKicker}
        title={shells.sections.testimonialsTitle}
        description={shells.sections.testimonialsDescription}
        center
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((item, i) => (
          <motion.article
            key={item.parent}
            className="flex h-full flex-col rounded-[1.75rem] border border-[color:var(--color-border)]/40 bg-white/80 p-6 shadow-md"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <div className="flex gap-0.5 text-[color:var(--color-terracotta)]">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-3.5 w-3.5 fill-current" aria-hidden />
              ))}
            </div>
            <Quote className="mt-3 h-5 w-5 text-[color:var(--color-sage)]/40" aria-hidden />
            <p className="mt-2 flex-1 text-sm italic leading-relaxed text-[color:var(--color-muted)]">
              &ldquo;{item.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-[color:var(--color-sage-dark)]">{item.parent}</p>
            <p className="text-xs text-[color:var(--color-terracotta)]">{item.milestone}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link href="/testimonials-milestones">{shells.sections.readMoreStories}</Link>
        </Button>
      </div>
    </Section>
  );
}
