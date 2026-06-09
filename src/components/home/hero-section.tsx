"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

import { FloatingNature } from "@/components/shared/floating-nature";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAm8al5naOx-QQ-lNFcajeZGEjjiIGhO-kj_rAIxSvkEFrAW-2DEaxpjwDUhEfYFwZ40gTWfaq2Uz3DCzE2YUT9ndY30fpKW0PcTojUJpU6-QpyvGQKA4rkSV6IHdFxxPyZBf3QlQRnykgsxKp2-zyhQn3Z5aNOgUacjeoBbm7fu6xhG2CNF0Ng-o1Hrq2y2D4Udu_MV4nirnsKhnlACWz4PO6xOvZBv5skM9KrBsONS02KWLcGnAYAxCn4MlEnlwO2HsJ_rlwgb5g";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { opacity: 0, y: 20, duration: 0.6 })
        .from(".hero-title", { opacity: 0, y: 40, duration: 0.8 }, "-=0.3")
        .from(".hero-sub", { opacity: 0, y: 24, duration: 0.7 }, "-=0.4")
        .from(".hero-tagline", { opacity: 0, y: 16, duration: 0.6 }, "-=0.3")
        .from(".hero-cta", { opacity: 0, y: 20, duration: 0.6, stagger: 0.12 }, "-=0.2")
        .from(".hero-image", { opacity: 0, scale: 0.96, duration: 1 }, "-=0.6")
        .from(".hero-scroll", { opacity: 0, y: 10, duration: 0.5 }, "-=0.3");
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[92vh] items-center overflow-hidden px-4 py-16 md:px-8"
    >
      <FloatingNature />
      <div className="organic-blob pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[color:var(--color-sage)]/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Badge className="hero-badge mb-5">Pediatric Occupational Therapy · Mumbai</Badge>
          <h1 className="hero-title font-[family-name:var(--font-serif)] text-4xl leading-[1.1] text-[color:var(--color-sage-dark)] md:text-5xl lg:text-6xl">
            {siteConfig.heroHeadline}
          </h1>
          <p className="hero-sub mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--color-muted)]">
            {siteConfig.heroSubheadline}
          </p>
          <p className="hero-tagline mt-4 font-[family-name:var(--font-serif)] text-xl italic text-[color:var(--color-terracotta)]">
            {siteConfig.tagline}
          </p>
          <div className="hero-cta mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/appointment">Book Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>

        <div className="hero-image relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-[color:var(--color-sage)]/15">
            <Image
              src={HERO_IMAGE}
              alt="Child engaging in sensory play in a warm pediatric therapy environment"
              width={640}
              height={800}
              className="aspect-[4/5] w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-sage-dark)]/20 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur-md md:block">
            <p className="text-sm font-semibold text-[color:var(--color-sage-dark)]">
              {siteConfig.experienceYears}+ Years Experience
            </p>
            <p className="text-xs text-[color:var(--color-muted)]">Reg. No. {siteConfig.registrationNumber}</p>
          </div>
        </div>
      </div>

      <a
        href="#trust"
        className="hero-scroll absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-[color:var(--color-muted)] transition-colors hover:text-[color:var(--color-sage-dark)]"
        aria-label="Scroll to learn more"
      >
        <span className="text-xs uppercase tracking-widest">Discover</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
