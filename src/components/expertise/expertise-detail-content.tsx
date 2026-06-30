"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { ExpertiseCta } from "@/components/expertise/cta";
import { ExpertiseDetailCard } from "@/components/expertise/expertise-detail-card";
import { fadeUp } from "@/components/expertise/animations";
import { getExpertisePastelByKey } from "@/components/expertise/expertise-pastels";
import { Section } from "@/components/shared/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { ExpertiseArea } from "@/lib/client-content/expertise";
import type { SharedLabels } from "@/lib/i18n/content/labels";
import type { PageShells } from "@/lib/i18n/content/page-shells";

type ExpertiseDetailContentProps = {
  area: ExpertiseArea;
  labels: SharedLabels;
  shells: PageShells["expertise"];
  expertiseLabel: string;
  faqs: { q: string; a: string }[];
};

export function ExpertiseDetailContent({
  area,
  labels,
  shells,
  expertiseLabel,
  faqs,
}: ExpertiseDetailContentProps) {
  const reduced = useReducedMotion();
  const pastel = getExpertisePastelByKey(area.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-[#FFFDFB] px-4 py-12 md:px-8 md:py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_20%,#EAF4FF_0%,transparent_55%)]"
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: `${pastel.bg}99` }}
          animate={reduced ? undefined : { scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <motion.div
          className="relative mx-auto max-w-4xl"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-[#4A9B73]">{expertiseLabel}</p>
          <h1 className="mt-3 max-w-[20ch] font-[family-name:var(--font-serif)] text-3xl font-bold leading-[1.08] text-[#1a4a3a] md:text-4xl lg:text-5xl">
            {area.title}
          </h1>
          <p className="mt-5 max-w-[70ch] font-[family-name:var(--font-serif)] text-lg italic leading-relaxed text-[#444] md:text-xl">
            {area.tagline}
          </p>
        </motion.div>
      </section>

      <Section compact className="bg-[#FCFAF8]">
        <div className="mx-auto max-w-4xl space-y-8">
          <ExpertiseDetailCard area={area} labels={labels} hideTitle />

          <motion.div
            className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/55 p-6 shadow-[0_16px_48px_rgba(45,96,71,0.06)] backdrop-blur-xl md:p-8"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[#1a4a3a] md:text-3xl">
              {labels.questionsParentsAsk}
            </h2>
            <Accordion type="single" collapsible className="mt-5 space-y-2">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={faq.q}
                  value={`expertise-faq-${idx}`}
                  className="rounded-xl border border-white/60 bg-white/40 px-4"
                >
                  <AccordionTrigger className="text-left text-[#333] hover:text-[#1a4a3a] hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-[1.75] text-[#555]">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            variants={fadeUp}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="rounded-full bg-[#1a4a3a] hover:bg-[#2D6047]">
              <Link href="/appointment">{labels.bookConsultation}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-[#4A9B73]/35 text-[#1a4a3a]"
            >
              <Link href="/expertise">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden />
                {labels.exploreExpertise}
              </Link>
            </Button>
          </motion.div>
        </div>
      </Section>

      <ExpertiseCta shells={shells} labels={labels} />
    </>
  );
}
