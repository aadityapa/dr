"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

import { JsonLd } from "@/components/shared/json-ld";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { faqCategories } from "@/lib/faqs";
import { faqPageSchema } from "@/lib/schema";

const HOME_FAQS = faqCategories.slice(0, 3).flatMap((cat) => cat.faqs.slice(0, 2));

export function HomeFaqSection() {
  return (
    <Section id="faq" compact className="bg-[color:var(--color-snow)]">
      <JsonLd data={faqPageSchema(HOME_FAQS)} id="home-faq-schema" />
      <SectionHeading
        kicker="FAQ"
        title="Questions parents ask us most"
        description="Honest answers — and a full library of 100+ FAQs if you want to dig deeper."
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
