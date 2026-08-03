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
    </>
  );
}
