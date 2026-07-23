"use client";

import Image from "next/image";
import { useState } from "react";

type HeroPhotoProps = {
  src: string;
  alt: string;
  /** Rendered instead of the photo if the image fails to load. */
  fallback?: React.ReactNode;
};

/**
 * Warm hero photo, framed in a pastel card on the right side of a hero.
 * Desktop only (md+). If the remote image fails, it silently falls back to
 * the page's illustration so the live site never shows a broken image.
 */
export function HeroPhoto({ src, alt, fallback }: HeroPhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback ?? null}</>;

  return (
    <div className="pointer-events-none absolute inset-y-0 right-4 hidden items-center md:flex lg:right-10">
      <div className="relative h-[300px] w-[280px] rotate-2 overflow-hidden rounded-[2rem] border-[6px] border-white shadow-[0_20px_60px_rgba(45,96,71,0.18)] ring-4 ring-[color:var(--color-peach)] lg:h-[380px] lg:w-[360px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 280px, 360px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--color-sage-dark)]/15 to-transparent" />
      </div>
      <span
        className="pointer-events-none absolute -left-5 top-8 h-14 w-14 rounded-full bg-[color:var(--color-sun)]/70 blur-[2px]"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -bottom-3 right-10 h-10 w-10 rounded-full bg-[color:var(--color-sky)]/70"
        aria-hidden
      />
    </div>
  );
}
