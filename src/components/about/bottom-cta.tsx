"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MessageCircle, Phone } from "lucide-react";

import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-data";

import type { AboutPageProps } from "./about-types";

export function BottomCta({ shells }: AboutPageProps) {
  const reduced = useReducedMotion();

  return (
    <Section compact className="relative overflow-hidden">
      <motion.div
        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[color:var(--color-sage-dark)] via-[color:var(--color-sage)] to-[color:var(--color-terracotta)]/80 px-8 py-12 text-center text-white md:px-16 md:py-16"
        initial={reduced ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
          aria-hidden
        />

        <h2 className="relative font-[family-name:var(--font-serif)] text-3xl md:text-4xl">
          {shells.sections.ctaTitle}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base text-white/85">{shells.sections.ctaDescription}</p>

        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="onColor">
            <Link href="/appointment">
              <Calendar className="mr-2 h-4 w-4" aria-hidden />
              {shells.bookConversation}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white/10"
          >
            <a href={`tel:${siteConfig.phone}`}>
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              {shells.sections.callCta}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white/10"
          >
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" aria-hidden />
              {shells.sections.whatsappCta}
            </a>
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
