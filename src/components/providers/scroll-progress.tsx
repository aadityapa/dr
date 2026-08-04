"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(maxScroll > 0 ? scrollTop / maxScroll : 0);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-gradient-to-r from-[color:var(--color-sage)] via-[color:var(--color-terracotta)] to-[color:var(--color-sage-dark)]"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
