"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

import { FloatingNature } from "@/components/shared/floating-nature";
import { HeroSoftDecor } from "@/components/home/hero-soft-decor";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { getSiteImage } from "@/lib/site-images";

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
        .from(".hero-cta", { opacity: 0, y: 20, duration: 0.6, stagger: 0.12 }, "-=0.2")
        .from(".hero-image", { opacity: 0, scale: 0.96, duration: 1 }, "-=0.6")
        .from(".hero-scroll", { opacity: 0, y: 10, duration: 0.5 }, "-=0.3");
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[78vh] items-center overflow-hidden bg-[color:var(--color-snow)] px-4 py-16 md:px-8 md:py-20"
    >
      <FloatingNature />
      <HeroSoftDecor />
      <div className="organic-blob pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[color:var(--color-sage)]/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Badge className="hero-badge mb-6">{copy.badge}</Badge>
          <h1 className="hero-title font-[family-name:var(--font-serif)] text-4xl leading-[1.08] tracking-tight text-[color:var(--color-sage-dark)] md:text-5xl lg:text-[3.5rem]">
            {copy.headline}
          </h1>
          <p className="hero-sub mt-7 max-w-xl text-lg leading-relaxed text-[color:var(--color-muted)] md:text-xl">
            {copy.subheadline}
          </p>
          {copy.subheadline2 && (
            <p className="hero-sub mt-4 max-w-xl text-lg leading-relaxed text-[color:var(--color-muted)] md:text-xl">
              {copy.subheadline2}
            </p>
          )}
          <p className="hero-tagline mt-5 font-[family-name:var(--font-serif)] text-xl italic text-[color:var(--color-terracotta)] md:text-2xl">
            {copy.tagline}
          </p>
          <div className="hero-cta mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/appointment">{copy.primaryCta ?? messages.cta.bookConsultation}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/expertise">{copy.secondaryCta ?? messages.cta.exploreServices}</Link>
            </Button>
          </div>
        </div>

        <div className="hero-image relative">
          <div className="water-reflection relative overflow-hidden rounded-[2rem] shadow-2xl shadow-[color:var(--color-sage)]/15 ring-1 ring-[color:var(--color-border)]/40">
            <Image
              src={getSiteImage("heroMain")}
              alt="Dr. Sharuja smiling with a baby on a textured therapy ball during a playful sensory session at Thrive With Sharuja"
              width={640}
              height={720}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>

      <a
        href="#meet-doctor"
        className="hero-scroll absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[color:var(--color-muted)] motion-safe:animate-bounce md:block"
        aria-label="Scroll to learn more"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}
