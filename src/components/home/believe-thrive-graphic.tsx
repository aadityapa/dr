"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Bike, Blocks, Heart, Users } from "lucide-react";

/**
 * BelieveThriveGraphic — a poster-style word stack that replaces the hero
 * paragraphs: BELIEVE / BUILD / THRIVE / TOGETHER, each word paired with a
 * real clinic photo in an organic blob frame, an accent icon chip and a soft
 * watercolor wash — inspired by the reference artwork, rebuilt with the
 * site's own palette and photography.
 */

type Row = {
  word: string;
  color: string;
  wash: string;
  photo: { src: string; alt: string };
  Icon: typeof Heart;
  align: "left" | "right" | "center";
  blob: string;
};

const ROWS: Row[] = [
  {
    word: "Believe",
    color: "#1a4a3a",
    wash: "#DCEFE3",
    photo: {
      src: "/images/gallery/infant-crawling-guidance.jpg",
      alt: "A baby crawling forward with gentle guidance",
    },
    Icon: Heart,
    align: "left",
    blob: "blob-frame-a",
  },
  {
    word: "Build",
    color: "#1E4A6E",
    wash: "#DDEAF7",
    photo: {
      src: "/images/gallery/ball-pit-xylophone-play.jpg",
      alt: "A child playing with a xylophone in a ball pit",
    },
    Icon: Blocks,
    align: "right",
    blob: "blob-frame-b",
  },
  {
    word: "Thrive",
    color: "#5A7A2F",
    wash: "#E9F2D8",
    photo: {
      src: "/images/gallery/jumping-rings-motor-planning.jpg",
      alt: "A boy jumping through colourful floor rings",
    },
    Icon: Bike,
    align: "left",
    blob: "blob-frame-a",
  },
  {
    word: "Together",
    color: "#5B3E8E",
    wash: "#EBE2F6",
    photo: {
      src: "/images/gallery/therapist-guided-balance-play.jpg",
      alt: "Therapist and child celebrating a balance game together",
    },
    Icon: Users,
    align: "center",
    blob: "blob-frame-b",
  },
];

const ALIGN_CLASS: Record<Row["align"], string> = {
  left: "justify-start",
  right: "justify-end",
  center: "justify-center",
};

export function BelieveThriveGraphic({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <div className={className} role="img" aria-label="Believe, build, thrive — together">
      <div className="flex max-w-xl flex-col gap-3 md:gap-4">
        {ROWS.map(({ word, color, wash, photo, Icon, align, blob }, i) => {
          const reverse = align === "right";

          return (
            <motion.div
              key={word}
              className={`relative flex items-center gap-3 md:gap-4 ${ALIGN_CLASS[align]} ${
                reverse ? "flex-row-reverse" : ""
              }`}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
            >
              {/* watercolor wash behind the row */}
              <div
                className="organic-blob pointer-events-none absolute -inset-y-2 left-1/2 h-[130%] w-3/4 -translate-x-1/2 blur-xl"
                style={{ backgroundColor: wash, opacity: 0.7 }}
                aria-hidden
              />

              <motion.div
                className={`glossy-frame relative h-16 w-20 shrink-0 overflow-hidden ${blob} shadow-[0_10px_28px_rgba(45,96,71,0.18)] ring-2 ring-white/80 md:h-20 md:w-24`}
                animate={reduced ? undefined : { y: [0, -5, 0] }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </motion.div>

              <span
                className="relative font-[family-name:var(--font-serif)] text-4xl font-bold uppercase leading-none tracking-tight md:text-5xl"
                style={{ color }}
              >
                {word}
              </span>

              <span
                className="relative hidden h-10 w-10 shrink-0 items-center justify-center rounded-full sm:flex md:h-11 md:w-11"
                style={{ backgroundColor: wash }}
                aria-hidden
              >
                <Icon className="h-5 w-5" style={{ color }} />
              </span>

              {/* dotted motion trail */}
              <span
                className="pointer-events-none absolute -bottom-1 hidden gap-1 sm:flex"
                style={reverse ? { left: "8%" } : { right: "8%" }}
                aria-hidden
              >
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="h-1 w-1 rounded-full"
                    style={{ backgroundColor: color, opacity: 0.35 - d * 0.08 }}
                  />
                ))}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
