"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { JsonLd } from "@/components/shared/json-ld";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { allFaqs } from "@/lib/faqs";
import { faqPageSchema } from "@/lib/schema";

import type { AboutPageProps } from "./about-types";

const ABOUT_FAQ_QUESTIONS = [
  "What age children does Dr. Sharuja Sarap treat?",
  "Is Dr. Sharuja Sarap certified in Brain Gym?",
  "How do I book an appointment with Dr. Sharuja Sarap?",
] as const;

const aboutFaqs = ABOUT_FAQ_QUESTIONS.map((q) => allFaqs.find((faq) => faq.q === q)).filter(
  (faq): faq is { q: string; a: string } => Boolean(faq),
);

export function FaqAccordion({ shells }: AboutPageProps) {
  if (aboutFaqs.length === 0) return null;

  return (
    <Section compact className="bg-[color:var(--color-snow)]">
      <JsonLd data={faqPageSchema(aboutFaqs)} id="about-faq-schema" />
      <SectionHeading
        kicker={shells.sections.faqKicker}
        title={shells.sections.faqTitle}
        description={shells.sections.faqDescription}
        center
      />

      <div className="mx-auto mt-8 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {aboutFaqs.map((faq, idx) => (
            <AccordionItem key={faq.q} value={`about-faq-${idx}`} className="rounded-xl border bg-white/70 px-4">
              <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link href="/faqs">{shells.sections.browseAllFaqs}</Link>
        </Button>
      </div>
    </Section>
  );
}
