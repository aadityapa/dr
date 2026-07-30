"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { doctorProfile } from "@/lib/site-data";
import { getCardPastel } from "@/lib/pastel-palette";

import type { AboutPageProps } from "./about-types";

export function CertCarousel({ shells }: AboutPageProps) {
  const reduced = useReducedMotion();
  const certs = doctorProfile.certifications;
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % certs.length);
  }, [certs.length]);

  const prev = useCallback(() => {
    setActive((i) => (i === 0 ? certs.length - 1 : i - 1));
  }, [certs.length]);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(next, 4500);
    return () => window.clearInterval(timer);
  }, [next, reduced]);

  const pastel = getCardPastel(active);

  return (
    <Section className="rounded-[2rem] bg-[color:var(--color-soft-green)]/20">
      <SectionHeading
        title={shells.sections.certificationsTitle}
        description={shells.sections.certificationsDescription}
        center
      />

      <div className="mx-auto mt-10 max-w-2xl">
        <motion.div
          key={certs[active]}
          className="relative rounded-[2rem] border p-8 text-center shadow-xl backdrop-blur-md md:p-12"
          style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
          initial={reduced ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Award className="mx-auto mb-4 h-10 w-10 text-[color:var(--color-sage)]" aria-hidden />
          <p className="font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-sage-dark)] md:text-2xl">
            {certs[active]}
          </p>
          <div className="absolute inset-y-0 left-3 flex items-center">
            <button
              type="button"
              onClick={prev}
              className="rounded-full bg-white/80 p-2 shadow-md transition hover:bg-white"
              aria-label={shells.sections.certPrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-3 flex items-center">
            <button
              type="button"
              onClick={next}
              className="rounded-full bg-white/80 p-2 shadow-md transition hover:bg-white"
              aria-label={shells.sections.certNext}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {certs.map((c, i) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(i)}
              className="h-2.5 rounded-full transition-all"
              style={{
                width: i === active ? 24 : 10,
                backgroundColor: i === active ? "var(--color-sage)" : "var(--color-sage)",
                opacity: i === active ? 1 : 0.35,
              }}
              aria-label={c}
            />
          ))}
        </div>

        <ul className="mt-8 grid gap-2 sm:grid-cols-2">
          {certs.map((c, i) => {
            const itemPastel = getCardPastel(i + 2);
            return (
              <li
                key={c}
                className="rounded-xl border px-3 py-2 text-xs text-[color:var(--color-muted)]"
                style={{ backgroundColor: itemPastel.bg, borderColor: itemPastel.border }}
              >
                {c}
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
