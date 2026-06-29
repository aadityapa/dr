"use client";

import { useEffect, useRef } from "react";

import { FloatingNature } from "@/components/shared/floating-nature";
import { HeroSoftDecor } from "@/components/home/hero-soft-decor";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/providers/language-provider";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { messages } = useLanguage();
  const copy = messages.hero;

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !containerRef.current) return;

    let cancelled = false;

    void import("gsap").then(({ default: gsap }) => {
      if (cancelled || !containerRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { opacity: 0, y: 20, duration: 0.6 })
        .from(".hero-title", { opacity: 0, y: 40, duration: 0.8 }, "-=0.3")
        .from(".hero-sub", { opacity: 0, y: 24, duration: 0.7 }, "-=0.4")
        .from(".hero-tagline", { opacity: 0, y: 16, duration: 0.6 }, "-=0.3")
        .from(".hero-cta", { opacity: 0, y: 20, duration: 0.6, stagger: 0.12 }, "-=0.2");
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[color:var(--color-snow)] px-4 py-12 md:px-8 md:py-16"
    >
      <FloatingNature />
      <HeroSoftDecor />
      <div className="organic-blob pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[color:var(--color-sage)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Badge className="hero-badge mb-5">{copy.badge}</Badge>
        <h1 className="hero-title font-[family-name:var(--font-serif)] text-4xl leading-[1.12] tracking-tight text-[color:var(--color-sage-dark)] md:text-5xl">
          {copy.headline}
        </h1>
        <p className="hero-sub mt-6 text-lg leading-relaxed text-[color:var(--color-muted)] md:text-xl">
          {copy.subheadline}
        </p>
        {copy.subheadline2 && (
          <p className="hero-sub mt-4 text-lg leading-relaxed text-[color:var(--color-muted)] md:text-xl">
            {copy.subheadline2}
          </p>
        )}
        <p className="hero-tagline mt-5 font-[family-name:var(--font-serif)] text-lg italic text-[color:var(--color-terracotta)] md:text-xl">
          {copy.tagline}
        </p>
        <div className="hero-cta mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/appointment">{copy.primaryCta ?? messages.cta.bookConsultation}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">{copy.secondaryCta ?? messages.common.learnMore}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
