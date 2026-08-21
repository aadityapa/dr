"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { ExpertiseArea } from "@/lib/client-content/expertise";
import type { SharedLabels } from "@/lib/i18n/content/labels";

import { fadeUp, staggerContainer } from "./animations";
import { getExpertisePastelByKey } from "./expertise-pastels";

type ExpertiseDetailCardProps = {
  area: ExpertiseArea;
  labels: SharedLabels;
  hideTitle?: boolean;
};

export function ExpertiseDetailCard({ area, labels, hideTitle }: ExpertiseDetailCardProps) {
  const reduced = useReducedMotion();
  const pastel = getExpertisePastelByKey(area.slug);

  return (
    <motion.article
      className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-white/70 bg-white/55 shadow-[0_20px_60px_rgba(45,96,71,0.08)] backdrop-blur-xl"
      variants={fadeUp}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
    >
      <div className="border-b border-white/60 bg-gradient-to-r from-white/40 via-white/20 to-white/40 px-6 py-8 md:px-10 md:py-10">
        {hideTitle ? null : (
          <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--ink-forest-deep)] md:text-3xl">
            {area.title}
          </h2>
        )}

        <div className="mt-8">
          <h3 className="text-lg font-medium text-[color:var(--ink-forest)] md:text-xl">{labels.whatIsIt}</h3>
          <motion.div
            className="mt-4 space-y-4 leading-[1.75] text-[color:var(--ink-soft)]"
            variants={staggerContainer(0.08)}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
          >
            {area.understanding.split("\n\n").map((paragraph) => (
              <motion.p key={paragraph.slice(0, 48)} variants={fadeUp} className="max-w-[70ch]">
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>

      {area.whatParentsMayNotice.length > 0 ? (
        <div className="border-b border-white/50 px-6 py-8 md:px-10 md:py-10">
          <h3 className="text-lg font-medium text-[color:var(--ink-forest)] md:text-xl">{labels.whatParentsNotice}</h3>
          {area.whatParentsNoticeIntro ? (
            <p className="mt-3 max-w-[70ch] leading-[1.75] text-[color:var(--ink-soft)]">{area.whatParentsNoticeIntro}</p>
          ) : null}
          <ul className="mt-5 space-y-3">
            {area.whatParentsMayNotice.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-[color:var(--ink-soft)] md:text-base"
                initial={reduced ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <span
                  className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: pastel.accent }}
                  aria-hidden
                />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      ) : null}

      {area.approachSummary?.length ? (
        <div className="border-b border-white/50 px-6 py-8 md:px-10 md:py-10">
          <div className="space-y-4 leading-[1.75] text-[color:var(--ink-soft)]">
            {area.approachSummary.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="max-w-[70ch]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ) : null}

      {area.areasCommonlySupported.length > 0 ? (
        <div className="px-6 py-8 md:px-10 md:py-10">
          <div
            className="light-wash-panel rounded-[1.5rem] border border-white/70 p-6 md:p-8"
            style={{
              background: `linear-gradient(135deg, ${pastel.bg}99, #EAFBF2CC)`,
              boxShadow: `inset 0 1px 0 rgba(255,255,255,0.8)`,
            }}
          >
            <h3 className="text-lg font-medium text-[color:var(--ink-forest)] md:text-xl">{labels.areasCommonlySupported}</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {area.areasCommonlySupported.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-[color:var(--ink-soft)] md:text-base"
                >
                  <span className="mt-0.5 shrink-0 font-semibold text-[color:var(--brand-green)]" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {area.closingLine ? (
        <p className="border-t border-white/50 px-6 py-8 text-center font-[family-name:var(--font-serif)] text-lg italic text-[color:var(--ink-soft)] md:px-10 md:py-10 md:text-xl">
          {area.closingLine}
        </p>
      ) : null}
    </motion.article>
  );
}
