"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { faqCategories } from "@/lib/faqs";

const HOME_FAQS = faqCategories.slice(0, 3).flatMap((cat) => cat.faqs.slice(0, 2));

export function HomeFaqSection() {
  return (
    <Section id="faq" className="bg-[color:var(--color-snow)]">
      <SectionHeading
        kicker="FAQ"
        title="Questions parents ask us most"
        description="Quick answers — with the option to explore everything in our full FAQ library."
        center
      />

      <div className="mx-auto mt-8 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {HOME_FAQS.map((faq, idx) => (
            <AccordionItem key={faq.q} value={`home-faq-${idx}`}>
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
          <Link href="/faqs">Browse All FAQs →</Link>
        </Button>
      </div>
    </Section>
  );
}
