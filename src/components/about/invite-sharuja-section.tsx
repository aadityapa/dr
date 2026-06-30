"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getCardPastel } from "@/lib/pastel-palette";

import type { AboutPageProps } from "./about-types";

export function InviteSharujaSection({ about, shells }: AboutPageProps) {
  const reduced = useReducedMotion();

  return (
    <>
      <Section className="rounded-[2rem] bg-gradient-to-br from-[color:var(--color-almond)] to-[color:var(--color-soft-green)]/30">
        <SectionHeading title={about.inviteSharuja.title} />
        <div className="mt-6 max-w-3xl space-y-4">
          {about.inviteSharuja.paragraphs.map((para) => (
            <motion.p
              key={para.slice(0, 48)}
              className="leading-relaxed text-[color:var(--color-muted)]"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {para}
            </motion.p>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/invite-sharuja">{shells.inviteCta}</Link>
          </Button>
        </div>
      </Section>

      <Section className="bg-[color:var(--color-snow)]">
        <SectionHeading title={about.availableFor.title} center />
        <ul className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
          {about.availableFor.items.map((item, i) => {
            const pastel = getCardPastel(i);
            return (
              <motion.li
                key={item}
                className="flex items-start gap-2 rounded-xl border p-4 text-sm text-[color:var(--color-muted)] shadow-sm backdrop-blur-sm"
                style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <span className="mt-0.5 shrink-0 text-[color:var(--color-sage)]">✓</span>
                {item}
              </motion.li>
            );
          })}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            className="h-full rounded-[1.75rem] border border-[color:var(--color-border)]/60 bg-white/70 p-6 shadow-lg backdrop-blur-md md:p-8"
            initial={reduced ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-sage-dark)] md:text-2xl">
              {about.expertise.title}
            </h3>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {about.expertise.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-[color:var(--color-muted)]">
                  <span className="shrink-0 text-[color:var(--color-sage)]" aria-hidden>
                    –
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="h-full rounded-[1.75rem] border border-[color:var(--color-border)]/60 bg-[color:var(--color-almond)]/60 p-6 shadow-lg backdrop-blur-md md:p-8"
            initial={reduced ? false : { opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-sage-dark)] md:text-2xl">
              {about.suitableFor.title}
            </h3>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {about.suitableFor.items.map((item, i) => {
                const pastel = getCardPastel(i + 6);
                return (
                  <li
                    key={item}
                    className="rounded-lg border px-3 py-2 text-sm text-[color:var(--color-muted)]"
                    style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
