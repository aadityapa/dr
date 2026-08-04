"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { ExpertiseCta } from "@/components/expertise/cta";
import { ExpertiseDetailCard } from "@/components/expertise/expertise-detail-card";
import { fadeUp } from "@/components/expertise/animations";
import { getExpertisePastelByKey } from "@/components/expertise/expertise-pastels";
import { ExpertiseSpot } from "@/components/illustrations/scene-illustrations";
import { Section } from "@/components/shared/section";
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
};

export function ExpertiseDetailContent({
  area,
  labels,
  shells,
  expertiseLabel,
}: ExpertiseDetailContentProps) {
  const reduced = useReducedMotion();
  const pastel = getExpertisePastelByKey(area.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-[color:var(--surface-cream)] px-4 pt-12 pb-8 md:px-8 md:pt-16 md:pb-10">
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
          className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand-green)]">{expertiseLabel}</p>
            <h1 className="mt-3 max-w-[20ch] font-[family-name:var(--font-serif)] text-3xl font-bold leading-[1.08] text-[color:var(--ink-forest-deep)] md:text-4xl lg:text-5xl">
              {area.title}
            </h1>
            <p className="mt-5 max-w-[70ch] font-[family-name:var(--font-serif)] text-lg italic leading-relaxed text-[color:var(--ink-body)] md:text-xl">
              {area.tagline}
            </p>
          </div>
          <ExpertiseSpot className="hidden lg:block" />
        </motion.div>
      </section>

      <Section compact className="bg-[color:var(--surface-paper)]">
        <div className="mx-auto max-w-4xl space-y-8">
          <ExpertiseDetailCard area={area} labels={labels} hideTitle />


          <motion.div
            className="flex flex-wrap gap-3"
            variants={fadeUp}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="rounded-full bg-[color:var(--fill-forest-deep)] hover:bg-[color:var(--fill-forest)]">
              <Link href="/appointment">{labels.bookConsultation}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-[color:var(--brand-green)]/35 text-[color:var(--ink-forest-deep)]"
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
