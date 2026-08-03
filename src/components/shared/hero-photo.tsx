"use client";

import Image from "next/image";
import { useState } from "react";

type HeroPhotoProps = {
  src: string;
  alt: string;
  /** Kept for API compatibility; the banner is full-width for every source. */
  wide?: boolean;
  /** Rendered instead of the photo if the image fails to load. */
  fallback?: React.ReactNode;
};

/**
 * Inner-page hero photo — a full-bleed banner running from the left screen
 * edge to the right, sitting between the heading and the description, with an
 * animated glowing brand-gradient edge along the top and bottom.
 *
 * Falls back to the page illustration if the image fails to load.
 */
export function HeroPhoto({ src, alt, fallback }: HeroPhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback ?? null}</>;

  return (
    <div className="glow-banner relative w-full my-9 h-[200px] sm:h-[260px] md:my-11 md:h-[320px] lg:h-[380px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
        onError={() => setFailed(true)}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--color-sage-dark)]/20 via-transparent to-[color:var(--color-sage-dark)]/10" />
    </div>
  );
}
