import type { Metadata } from "next";
import { Brain, HeartPulse, Puzzle, Timer, Waves } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { conditions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Conditions We Work With",
  description: "Parent-friendly guidance and therapy pathways for common developmental conditions.",
};

const icons = [Puzzle, Timer, HeartPulse, Brain, Waves];

export default function ConditionsPage() {
  return (
    <main>
      <Section>
        <SectionHeading
          kicker="Conditions"
          title="Care pathways for every developmental profile"
          description="Early intervention and consistent therapy can make a powerful long-term difference in participation and independence."
        />
      </Section>
      <Section className="grid gap-4 md:grid-cols-5">
        {conditions.map((item, i) => {
          const Icon = icons[i];
          return (
            <Card key={item.title}>
              <CardContent className="p-5">
                <Icon className="h-6 w-6 text-[color:var(--color-sage)]" />
                <p className="mt-3 text-sm font-semibold text-[color:var(--color-sage-dark)]">{item.title}</p>
              </CardContent>
            </Card>
          );
        })}
      </Section>

      <Section className="rounded-[2rem] bg-white/70">
        <SectionHeading title="Parent-Friendly Guidance" />
        <Accordion type="single" collapsible className="mt-6 space-y-3">
          {conditions.map((item, idx) => (
            <AccordionItem key={item.title} value={`condition-${idx}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>
                <p>{item.description}</p>
                <p className="mt-3 font-medium text-[color:var(--color-sage-dark)]">{item.reassurance}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </main>
  );
}
