"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function DynamicCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    setEnabled(true);

    const move = (event: MouseEvent) => {
      x.set(event.clientX - 12);
      y.set(event.clientY - 12);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[90] hidden h-6 w-6 rounded-full border border-[color:var(--color-sage)]/40 bg-[color:var(--color-soft-green)]/30 backdrop-blur md:block"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
