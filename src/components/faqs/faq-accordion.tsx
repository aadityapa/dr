"use client";

import { useState } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqCategories } from "@/lib/faqs";

export function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]?.id ?? "");

  const category = faqCategories.find((c) => c.id === activeCategory) ?? faqCategories[0];

  return (
    <div>
      <div className="mb-4 text-sm text-[color:var(--color-muted)]">
        {faqCategories.reduce((sum, cat) => sum + cat.faqs.length, 0)} questions across {faqCategories.length} categories
      </div>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">
        {faqCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat.id
                ? "bg-[color:var(--color-sage-dark)] text-white"
                : "bg-white/70 text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)]"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {category?.faqs.map((faq, idx) => (
          <AccordionItem key={`${category.id}-${idx}`} value={`faq-${idx}`}>
            <AccordionTrigger>{faq.q}</AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
