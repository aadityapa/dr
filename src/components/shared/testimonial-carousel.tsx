"use client";

import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/site-data";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[index];

  return (
    <div className="relative">
      <Card key={active.parent} className="animate-[fadeUp_0.4s_ease-out]">
        <CardContent className="p-8">
          <p className="text-lg leading-relaxed text-[color:var(--color-sage-dark)]">&ldquo;{active.quote}&rdquo;</p>
          <p className="mt-4 text-sm font-semibold text-[color:var(--color-terracotta)]">{active.parent}</p>
          <p className="mt-2 text-sm text-[color:var(--color-muted)]">Milestone: {active.milestone}</p>
        </CardContent>
      </Card>
    </div>
  );
}
