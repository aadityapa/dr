"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { galleryItems } from "@/lib/site-data";
import { getSiteImage } from "@/lib/site-images";

import type { AboutPageProps } from "./about-types";

const CLINIC_IMAGE_SOURCES = [
  ...galleryItems.filter((item) => item.image.includes("/gallery/") || item.image.includes("/therapy")),
  {
    title: "Sensory Gym",
    alt: "Indoor pediatric sensory gym with colorful climbing equipment",
    image: getSiteImage("sensoryGym"),
  },
  {
    title: "Assessment Room",
    alt: "Calm assessment room for pediatric occupational therapy evaluations",
    image: getSiteImage("assessmentRoom"),
  },
  {
    title: "Climbing Wall",
    alt: "Pediatric therapy climbing wall for balance and motor development",
    image: getSiteImage("climbingWall"),
  },
].slice(0, 9);

/**
 * Swipeable clinic gallery with a curved "arc" motion.
 *
 * Cards sit on a native scroll-snap rail (so touch, trackpad and keyboard all
 * work natively), and each card is transformed by its distance from the centre
 * of the viewport — dipping down, rotating and receding as it moves away. The
 * result reads as a gentle arc that the photos travel along as you swipe.
 *
 * Mouse users can also click-and-drag. `prefers-reduced-motion` flattens the
 * arc to a plain, still rail.
 */
export function ClinicGallery({ shells, clinicImages }: AboutPageProps) {
  const reduced = useReducedMotion();
  const { messages } = useLanguage();
  const images = clinicImages.length > 0 ? clinicImages : CLINIC_IMAGE_SOURCES;

  const railRef = useRef<HTMLUListElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);

  /** Position each card along the arc based on its distance from centre. */
  const paint = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const railBox = rail.getBoundingClientRect();
    const centre = railBox.left + railBox.width / 2;

    let nearest = 0;
    let nearestDist = Infinity;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const box = card.getBoundingClientRect();
      const cardCentre = box.left + box.width / 2;
      // -1 … 0 … 1 across the rail
      const d = Math.max(-1.6, Math.min(1.6, (cardCentre - centre) / (railBox.width / 2)));
      const abs = Math.abs(d);

      if (abs < nearestDist) {
        nearestDist = abs;
        nearest = i;
      }

      if (reduced) {
        card.style.transform = "";
        card.style.opacity = "1";
        card.style.zIndex = "1";
        return;
      }

      const dip = Math.pow(abs, 1.7) * 64; // arc: centre sits highest
      const rotate = d * 7; // lean into the curve
      const scale = 1 - abs * 0.13;
      const opacity = 1 - abs * 0.35;

      card.style.transform = `translate3d(0, ${dip}px, 0) rotate(${rotate}deg) scale(${Math.max(0.7, scale)})`;
      card.style.opacity = String(Math.max(0.3, opacity));
      card.style.zIndex = String(100 - Math.round(abs * 100));
    });

    setActive(nearest);
  }, [reduced]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(paint);
    };

    paint();
    rail.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      rail.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [paint]);

  const scrollToCard = (index: number) => {
    const card = cardRefs.current[index];
    card?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", inline: "center", block: "nearest" });
  };

  const step = (dir: -1 | 1) => {
    scrollToCard(Math.min(images.length - 1, Math.max(0, active + dir)));
  };

  // click-and-drag for mouse users (touch already works natively)
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const rail = railRef.current;
    if (!rail) return;
    drag.current = { down: true, startX: e.clientX, startScroll: rail.scrollLeft, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const rail = railRef.current;
    if (!drag.current.down || !rail) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    rail.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
  };

  // Swallow the click that follows a drag so a swipe never counts as a tap.
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <Section id="clinic-gallery">
      <SectionHeading
        title={shells.sections.clinicTitle}
        description={shells.sections.clinicDescription}
        center
      />

      <div className="relative mt-12">
        <ul
          ref={railRef}
          className="clinic-rail flex snap-x snap-mandatory gap-6 overflow-x-auto pb-20 pt-6"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={onClickCapture}
        >
          {/* leading spacer so the first card can reach the centre */}
          <li aria-hidden className="shrink-0 basis-[calc(50%-9.5rem)] sm:basis-[calc(50%-11.5rem)]" />

          {images.map((item, i) => (
            <li
              key={`${item.title}-${i}`}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="clinic-card relative w-[19rem] shrink-0 snap-center sm:w-[23rem]"
            >
              <figure className="glossy-frame overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/60 shadow-[0_22px_60px_rgba(45,96,71,0.20)] backdrop-blur-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 19rem, 23rem"
                    className="pointer-events-none object-cover"
                    draggable={false}
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm font-medium text-[color:var(--color-sage-dark)]">
                  {item.title}
                </figcaption>
              </figure>
            </li>
          ))}

          <li aria-hidden className="shrink-0 basis-[calc(50%-9.5rem)] sm:basis-[calc(50%-11.5rem)]" />
        </ul>

        {/* controls */}
        <div className="pointer-events-none absolute inset-x-0 top-[38%] hidden justify-between px-2 md:flex">
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={active === 0}
            aria-label={messages.common.previousSlide}
            className="pointer-events-auto rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-snow)]/90 p-3 shadow-lg backdrop-blur transition hover:bg-[color:var(--color-soft-green)]/60 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5 text-[color:var(--color-sage-dark)]" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={active === images.length - 1}
            aria-label={messages.common.nextSlide}
            className="pointer-events-auto rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-snow)]/90 p-3 shadow-lg backdrop-blur transition hover:bg-[color:var(--color-soft-green)]/60 disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5 text-[color:var(--color-sage-dark)]" />
          </button>
        </div>

        {/* dots */}
        <div className="mt-2 flex items-center justify-center gap-2">
          {images.map((item, i) => (
            <button
              key={`dot-${item.title}-${i}`}
              type="button"
              onClick={() => scrollToCard(i)}
              aria-label={`${messages.common.goToSlide} ${i + 1}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all ${
                i === active
                  ? "w-7 bg-[color:var(--color-sage-dark)]"
                  : "w-2 bg-[color:var(--color-sage)]/40 hover:bg-[color:var(--color-sage)]/70"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link href="/gallery">{shells.sections.viewGallery}</Link>
        </Button>
      </div>
    </Section>
  );
}
