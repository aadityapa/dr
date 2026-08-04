"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

import { useLanguage } from "@/components/providers/language-provider";
import { JsonLd } from "@/components/shared/json-ld";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { faqPageSchema } from "@/lib/schema";

export function HomeFaqSection() {
  const { content } = useLanguage();
  const copy = content.homeFaq;

  return (
    <Section id="faq" compact className="bg-[color:var(--color-snow)]">
      <JsonLd data={faqPageSchema(copy.items)} id="home-faq-schema" />
      <SectionHeading kicker={copy.kicker} title={copy.title} description={copy.description} center />

      <div className="mx-auto mt-8 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {copy.items.map((faq, idx) => (
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
          <Link href="/faqs">{copy.browseAll}</Link>
        </Button>
      </div>
    </Section>
  );
}
