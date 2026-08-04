"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Decorative SVGs for the home hero. Markup is identical on server and client;
 * reduced-motion only disables animation (never removes the wrapper tree).
 */
export function HeroSoftDecor() {
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.svg
        className="absolute left-[6%] top-[18%] h-16 w-16 text-[color:var(--color-sage)]/25 md:h-20 md:w-20"
        viewBox="0 0 64 64"
        fill="currentColor"
        animate={reduced ? undefined : { y: [0, -10, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M32 4c-4 8-12 14-12 24 0 8 5 14 12 16 7-2 12-8 12-16 0-10-8-16-12-24z" />
      </motion.svg>

      <motion.svg
        className="absolute right-[10%] top-[22%] h-14 w-14 text-[color:var(--color-terracotta)]/20 md:h-18 md:w-18"
        viewBox="0 0 72 72"
        fill="currentColor"
        animate={reduced ? undefined : { y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <circle cx="36" cy="36" r="28" opacity="0.35" />
        <circle cx="48" cy="30" r="18" opacity="0.25" />
        <circle cx="24" cy="32" r="14" opacity="0.2" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-[28%] right-[18%] h-12 w-12 text-[color:var(--color-sky)]/30"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        animate={reduced ? undefined : { rotate: [0, -6, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <path d="M8 32c8-16 24-20 32-8-6 10-18 14-32 8z" fill="currentColor" opacity="0.15" />
        <path d="M12 28c6-10 18-12 24-4" />
      </motion.svg>
    </div>
  );
}
