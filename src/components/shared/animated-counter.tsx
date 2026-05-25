"use client";

import { useEffect, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};

export function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1100;
    const increment = Math.max(1, Math.floor(value / 70));
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / 70);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="font-[family-name:var(--font-serif)] text-4xl text-[color:var(--color-sage-dark)]">
      {count}
      {suffix}
    </span>
  );
}
