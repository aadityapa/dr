"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * PhotoCluster — an organic-blob photo collage used in place of a single
 * hero image. Three real clinic photos in soft, asymmetric "squircle" frames
 * plus a floating accent shape, so hero areas feel warm and editorial rather
 * than like one flat rectangle.
 *
 * Each photo keeps the site's glossy-frame sheen and gently floats
 * (disabled for `prefers-reduced-motion`).
 */

export type ClusterPhoto = { src: string; alt: string };

type PhotoClusterProps = {
  photos: [ClusterPhoto, ClusterPhoto, ClusterPhoto];
  className?: string;
  /** Prioritise the largest image (use for above-the-fold heroes). */
  priority?: boolean;
};

export function PhotoCluster({ photos, className, priority = false }: PhotoClusterProps) {
  const reduced = useReducedMotion();
  const [main, top, bottom] = photos;

  const float = (delay: number, distance = 10) =>
    reduced
      ? undefined
      : {
          y: [0, -distance, 0],
          transition: { duration: 6 + delay, repeat: Infinity, ease: "easeInOut" as const, delay },
        };

  return (
    <div className={`relative mx-auto w-full max-w-[34rem] ${className ?? ""}`}>
      {/* soft brand wash behind the cluster */}
      <div
        aria-hidden
        className="organic-blob pointer-events-none absolute -inset-6 bg-[color:var(--color-soft-green)]/45 blur-2xl"
      />

      <div className="relative aspect-[1/1.06] w-full">
        {/* MAIN — large tall blob, right side */}
        <motion.div
          animate={float(0)}
          className="glossy-frame absolute right-0 top-[6%] h-[74%] w-[62%] overflow-hidden blob-frame-a shadow-[0_24px_60px_rgba(45,96,71,0.20)] ring-4 ring-white/70"
        >
          <Image
            src={main.src}
            alt={main.alt}
            fill
            sizes="(max-width: 768px) 60vw, 340px"
            priority={priority}
            className="object-cover"
          />
        </motion.div>

        {/* TOP-LEFT — round blob */}
        <motion.div
          animate={float(1.2, 8)}
          className="glossy-frame absolute left-0 top-0 h-[42%] w-[48%] overflow-hidden blob-frame-b shadow-[0_18px_44px_rgba(45,96,71,0.18)] ring-4 ring-white/70"
        >
          <Image
            src={top.src}
            alt={top.alt}
            fill
            sizes="(max-width: 768px) 46vw, 260px"
            className="object-cover"
          />
        </motion.div>

        {/* BOTTOM-LEFT — soft rounded rectangle */}
        <motion.div
          animate={float(2.1, 9)}
          className="glossy-frame absolute bottom-0 left-[4%] h-[40%] w-[54%] overflow-hidden blob-frame-c shadow-[0_18px_44px_rgba(45,96,71,0.18)] ring-4 ring-white/70"
        >
          <Image
            src={bottom.src}
            alt={bottom.alt}
            fill
            sizes="(max-width: 768px) 52vw, 290px"
            className="object-cover"
          />
        </motion.div>

      </div>
    </div>
  );
}
