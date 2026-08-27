"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bike, Blocks, Heart, Users } from "lucide-react";

/**
 * BelieveThriveGraphic — a poster-style word stack that replaces the hero
 * paragraphs: BELIEVE / BUILD / THRIVE / TOGETHER, each word paired with an
 * accent icon chip and a soft watercolor wash — inspired by the reference
 * artwork, rebuilt with the site's own palette.
 */

type Row = {
  word: string;
  color: string;
  /** Light variant used when dark mode is active (see globals.css .btg-*) */
  darkColor: string;
  wash: string;
  Icon: typeof Heart;
  /** Staggered left indent, mimicking the original poster arrangement. */
  offset: string;
};

const ROWS: Row[] = [
  {
    word: "Believe",
    color: "#1a4a3a",
    darkColor: "#9fd4b5",
    wash: "#DCEFE3",
    Icon: Heart,
    offset: "ml-12 md:ml-20",
  },
  {
    word: "Build",
    color: "#1E4A6E",
    darkColor: "#9cc3e8",
    wash: "#DDEAF7",
    Icon: Blocks,
    offset: "ml-0",
  },
  {
    word: "Thrive",
    color: "#5A7A2F",
    darkColor: "#bcd48a",
    wash: "#E9F2D8",
    Icon: Bike,
    offset: "ml-6 md:ml-10",
  },
  {
    word: "Together",
    color: "#5B3E8E",
    darkColor: "#c9b3ef",
    wash: "#EBE2F6",
    Icon: Users,
    offset: "ml-20 md:ml-32",
  },
];

export function BelieveThriveGraphic({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <div className={className} role="img" aria-label="Believe, build, thrive — together">
      <div className="flex max-w-xl flex-col gap-3 md:gap-4">
        {ROWS.map(({ word, color, darkColor, wash, Icon, offset }, i) => {
          return (
            <motion.div
              key={word}
              className={`relative flex items-center justify-start gap-3 md:gap-4 ${offset}`}
              style={{ "--btg-dark": darkColor } as React.CSSProperties}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
            >
              {/* watercolor wash behind the row */}
              <div
                className="btg-wash organic-blob pointer-events-none absolute -inset-y-2 left-1/2 h-[130%] w-3/4 -translate-x-1/2 blur-xl"
                style={{ backgroundColor: wash, opacity: 0.7 }}
                aria-hidden
              />

              <span
                className="btg-word relative font-[family-name:var(--font-serif)] text-4xl font-bold uppercase leading-none tracking-tight md:text-5xl"
                style={{ color }}
              >
                {word}
              </span>

              <span
                className="btg-chip relative hidden h-10 w-10 shrink-0 items-center justify-center rounded-full sm:flex md:h-11 md:w-11"
                style={{ backgroundColor: wash }}
                aria-hidden
              >
                <Icon className="h-5 w-5" style={{ color }} />
              </span>

              {/* dotted motion trail */}
              <span
                className="pointer-events-none absolute -bottom-1 hidden gap-1 sm:flex"
                style={{ right: "8%" }}
                aria-hidden
              >
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="h-1 w-1 rounded-full"
                    style={{ backgroundColor: color, opacity: 0.35 - d * 0.08 }}
                  />
                ))}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
