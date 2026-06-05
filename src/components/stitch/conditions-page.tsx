"use client";

import { Brain, HeartPulse, Puzzle, Timer, Waves } from "lucide-react";
import { motion } from "framer-motion";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { conditions } from "@/lib/site-data";

import { StitchCard, StitchHero, StitchSection, StitchShell } from "./ui";

const icons = [Puzzle, Timer, HeartPulse, Brain, Waves];

export function StitchConditionsPage() {
  return (
    <StitchShell>
      <StitchHero
        kicker="Conditions"
        title="Care pathways for every developmental profile"
        description="Early intervention and consistent therapy can make a powerful long-term difference in participation and independence."
      />

      <StitchSection className="bg-surface-container-low pt-0">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
          {conditions.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <StitchCard className="text-center">
                  <Icon className="mx-auto h-7 w-7 text-primary" />
                  <p className="font-label-md mt-4 text-on-surface">{item.title}</p>
                </StitchCard>
              </motion.div>
            );
          })}
        </div>
      </StitchSection>

      <StitchSection className="pb-24">
        <h2 className="font-headline-lg text-headline-lg mb-8 text-center">Parent-Friendly Guidance</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {conditions.map((item, idx) => (
            <AccordionItem
              key={item.title}
              value={`condition-${idx}`}
              className="overflow-hidden rounded-2xl bg-white/80 px-6 shadow-[0_8px_30px_-12px_rgba(47,77,59,0.12)]"
            >
              <AccordionTrigger className="font-headline-md text-headline-md hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-body-md text-secondary">{item.description}</p>
                <p className="text-body-md mt-4 font-medium text-primary">{item.reassurance}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </StitchSection>
    </StitchShell>
  );
}
