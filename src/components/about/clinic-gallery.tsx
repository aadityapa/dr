"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

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

/** Pixels per second the rail glides. Slow enough to read each caption. */
const SPEED = 34;

/**
 * Auto-gliding clinic gallery with curved motion.
 *
 * The rail scrolls itself continuously and loops seamlessly (the set is
 * rendered twice; when the first copy has passed, the scroll position jumps
 * back by exactly one copy — invisible because the content is identical).
 *
 * Each card is transformed by its distance from the centre of the rail, so the
 * photos dip, lean and recede along an arc as they travel.
 *
 * Motion pauses on hover/focus and when the tab or section is out of view.
 * With `prefers-reduced-motion` the rail stops animating and becomes a normal
 * swipeable strip instead.
 */
export function ClinicGallery({ shells, clinicImages }: AboutPageProps) {
  const reduced = useReducedMotion();
  const images = clinicImages.length > 0 ? clinicImages : CLINIC_IMAGE_SOURCES;
  const loop = [...images, ...images];

  const railRef = useRef<HTMLUListElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const paused = useRef(false);
  const visible = useRef(true);

  /** Lay each card on the arc according to its distance from centre. */
  const paint = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const box = rail.getBoundingClientRect();
    const centre = box.left + box.width / 2;

    for (const card of cardRefs.current) {
      if (!card) continue;
      const b = card.getBoundingClientRect();
      const d = Math.max(-1.6, Math.min(1.6, (b.left + b.width / 2 - centre) / (box.width / 2)));
      const abs = Math.abs(d);

      if (reduced) {
        card.style.transform = "";
        card.style.opacity = "1";
        card.style.zIndex = "1";
        continue;
      }

      const dip = Math.pow(abs, 1.7) * 64;
      const rotate = d * 7;
      const scale = Math.max(0.7, 1 - abs * 0.13);
      card.style.transform = `translate3d(0, ${dip}px, 0) rotate(${rotate}deg) scale(${scale})`;
      card.style.opacity = String(Math.max(0.3, 1 - abs * 0.35));
      card.style.zIndex = String(100 - Math.round(abs * 100));
    }
  }, [reduced]);

  // continuous auto-glide with a seamless wrap
  useEffect(() => {
    const rail = railRef.current;
    if (!rail || reduced) {
      paint();
      return;
    }

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(64, now - last); // clamp after a background tab stall
      last = now;

      if (!paused.current && visible.current) {
        // Exact loop period = distance from card 0 to the first duplicate.
        // (scrollWidth / 2 is subtly wrong: it misses half an inter-copy gap
        // and makes the wrap visibly jump.)
        const first = cardRefs.current[0];
        const firstDuplicate = cardRefs.current[images.length];
        const period =
          first && firstDuplicate ? firstDuplicate.offsetLeft - first.offsetLeft : rail.scrollWidth / 2;

        let next = rail.scrollLeft + (SPEED * dt) / 1000;
        if (period > 0 && next >= period) next -= period; // identical content → invisible
        rail.scrollLeft = next;
      }
      paint();
    };

    raf = requestAnimationFrame(tick);

    const onVisibility = () => {
      visible.current = document.visibilityState === "visible";
      last = performance.now();
    };
    document.addEventListener("visibilitychange", onVisibility);

    // don't animate while the section is off screen
    const io = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting && document.visibilityState === "visible";
        last = performance.now();
      },
      { threshold: 0.05 },
    );
    io.observe(rail);

    window.addEventListener("resize", paint);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      io.disconnect();
      window.removeEventListener("resize", paint);
    };
  }, [paint, reduced, images.length]);

  const hold = () => {
    paused.current = true;
  };
  const release = () => {
    paused.current = false;
  };

  return (
    <Section id="clinic-gallery">
      <SectionHeading
        title={shells.sections.clinicTitle}
        description={shells.sections.clinicDescription}
        center
      />

      <div
        className="relative mt-12"
        onMouseEnter={hold}
        onMouseLeave={release}
        onFocusCapture={hold}
        onBlurCapture={release}
      >
        {/* soft edge fades so cards melt away instead of cutting off */}
        <div className="clinic-fade-left pointer-events-none absolute inset-y-0 left-0 z-[200] w-16 md:w-32" aria-hidden />
        <div className="clinic-fade-right pointer-events-none absolute inset-y-0 right-0 z-[200] w-16 md:w-32" aria-hidden />

        <ul
          ref={railRef}
          className={`clinic-rail flex gap-6 pb-20 pt-6 ${reduced ? "overflow-x-auto" : "overflow-x-hidden"}`}
        >
          {loop.map((item, i) => (
            <li
              key={`${item.title}-${i}`}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              aria-hidden={i >= images.length}
              className="clinic-card relative w-[19rem] shrink-0 sm:w-[23rem]"
            >
              <figure className="glossy-frame overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/60 shadow-[0_22px_60px_rgba(45,96,71,0.20)] backdrop-blur-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={i < images.length ? item.alt : ""}
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
        </ul>
      </div>

      <div className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link href="/gallery">{shells.sections.viewGallery}</Link>
        </Button>
      </div>
    </Section>
  );
}
