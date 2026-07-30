"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

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

export function ClinicGallery({ shells, clinicImages }: AboutPageProps) {
  const reduced = useReducedMotion();
  const images = clinicImages.length > 0 ? clinicImages : CLINIC_IMAGE_SOURCES;

  return (
    <Section id="clinic-gallery">
      <SectionHeading
        title={shells.sections.clinicTitle}
        description={shells.sections.clinicDescription}
        center
      />

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((item, i) => (
          <motion.figure
            key={`${item.title}-${i}`}
            className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/50 bg-white/40 shadow-lg"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <figcaption className="px-4 py-3 text-sm font-medium text-[color:var(--color-sage-dark)]">
              {item.title}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link href="/gallery">{shells.sections.viewGallery}</Link>
        </Button>
      </div>
    </Section>
  );
}
