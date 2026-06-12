"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export function AnimatedCounter({ value, suffix = "", duration = 1.8 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : 0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "-20px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced, value]);

  useEffect(() => {
    if (!started || reduced) return;

    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, value, duration, reduced]);

  return (
    <motion.span
      ref={ref}
      className="inline-block min-w-[2ch] tabular-nums"
      animate={started || reduced ? { opacity: 1 } : { opacity: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      {display}
      {suffix}
    </motion.span>
  );
}
