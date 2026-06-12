"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export function AnimatedCounter({ value, suffix = "", duration = 1.6 }: AnimatedCounterProps) {
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }

    let frame: number;
    let start: number | null = null;
    setDisplay(0);

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    const timer = window.setTimeout(() => {
      frame = requestAnimationFrame(step);
    }, 200);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [value, duration, reduced]);

  return (
    <span className="inline-block tabular-nums" aria-label={`${value}${suffix}`}>
      {display}
      {suffix}
    </span>
  );
}
