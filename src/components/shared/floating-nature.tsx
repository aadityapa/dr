"use client";

import { motion, useReducedMotion } from "framer-motion";

export function FloatingNature() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-16 top-1/4 h-48 w-48 rounded-full bg-[color:var(--color-soft-green)]/40 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-10 top-1/3 h-64 w-64 rounded-full bg-[color:var(--color-sky)]/30 blur-3xl"
        animate={{ y: [0, 24, 0], x: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 h-32 w-32 rounded-3xl bg-[color:var(--color-terracotta)]/15 blur-2xl"
        animate={{ rotate: [0, 8, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}
