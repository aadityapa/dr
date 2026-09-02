"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Heart, MessageCircle, Phone, Sparkles } from "lucide-react";

import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { SharedLabels } from "@/lib/i18n/content/labels";
import { siteConfig } from "@/lib/site-data";

import { fadeUp, scrollReveal } from "./animations";
import type { ExpertisePageProps } from "./expertise-types";

type CtaProps = Pick<ExpertisePageProps, "shells"> & { labels: SharedLabels };

export function ExpertiseCta({ shells, labels }: CtaProps) {
  const reduced = useReducedMotion();

  return (
    <Section compact className="bg-[color:var(--surface-foam)] !pb-8 md:!pb-10">
      <motion.div
        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[color:var(--fill-forest-deep)] via-[color:var(--fill-forest)] to-[color:var(--fill-green)] px-6 py-10 text-center text-white md:px-12 md:py-12"
        variants={fadeUp}
        {...scrollReveal}
        transition={{ duration: 0.6 }}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_20%,rgba(255,255,255,0.12)_0%,transparent_55%),radial-gradient(ellipse_60%_50%_at_85%_80%,rgba(255,255,255,0.08)_0%,transparent_50%)]"
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl"
          animate={reduced ? undefined : { scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute -bottom-20 -right-12 h-56 w-56 rounded-full bg-white/10 blur-2xl"
          animate={reduced ? undefined : { scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          aria-hidden
        />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center">
          <div className="mb-4 flex items-center gap-3" aria-hidden>
            <Sparkles className="h-6 w-6 text-white/70" />
            <Heart className="h-7 w-7 text-white/85" />
            <Sparkles className="h-6 w-6 text-white/70" />
          </div>

          <h2 className="font-[family-name:var(--font-serif)] text-3xl leading-tight md:text-4xl lg:text-[2.75rem]">
            {shells.ctaTitle}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/88 md:text-lg">
            {shells.ctaDescription}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              variant="onColor"
              className="rounded-full px-7 shadow-lg"
            >
              <Link href="/appointment">
                <Calendar className="mr-2 h-4 w-4" aria-hidden />
                {labels.bookConsultation}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/45 bg-white/10 px-7 text-white backdrop-blur-sm hover:bg-white/15"
            >
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {shells.callCta}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/45 bg-white/10 px-7 text-white backdrop-blur-sm hover:bg-white/15"
            >
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" aria-hidden />
                {shells.whatsappCta}
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
