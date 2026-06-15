"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { getCardPastel } from "@/lib/pastel-palette";
import { galleryItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const TOUR_ROOMS = [
  {
    title: "Sensory Gym",
    description: "Swings, climbing structures, and tactile materials — where regulation meets play.",
    image: galleryItems[0]?.image,
    hotspot: "Therapeutic equipment for sensory integration",
  },
  {
    title: "Assessment Room",
    description: "A calm, child-friendly space for understanding your child's unique strengths.",
    image: galleryItems[1]?.image ?? galleryItems[0]?.image,
    hotspot: "Play-based evaluation areas",
  },
  {
    title: "Therapy Rooms",
    description: "Warm, inviting rooms designed to help children feel safe and ready to engage.",
    image: galleryItems[2]?.image ?? galleryItems[0]?.image,
    hotspot: "One-on-one therapy spaces",
  },
  {
    title: "Waiting Area",
    description: "Comfortable for parents — because your peace of mind matters too.",
    image: galleryItems[3]?.image ?? galleryItems[0]?.image,
    hotspot: "Family-friendly reception",
  },
];

export function ClinicTourSection() {
  const [active, setActive] = useState(0);
  const room = TOUR_ROOMS[active];

  function prev() {
    setActive((i) => (i === 0 ? TOUR_ROOMS.length - 1 : i - 1));
  }
  function next() {
    setActive((i) => (i === TOUR_ROOMS.length - 1 ? 0 : i + 1));
  }

  return (
    <Section id="clinic-tour" compact className="bg-[color:var(--color-almond)]">
      <SectionHeading
        kicker="Clinic Tour"
        title="Walk through our space before you visit"
        description="A warm, child-friendly clinic in Kandivali West — designed so families feel at home from day one."
        center
      />

      <Reveal className="mt-10">
        <div className="overflow-hidden rounded-[2rem] border border-[color:var(--color-border)]/60 bg-white shadow-xl">
          <div className="relative aspect-[16/9] w-full bg-[color:var(--color-soft-sage)]">
            {room.image && (
              <Image
                src={room.image}
                alt={`${room.title} at Thrive With Sharuja pediatric therapy clinic`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
              <div className="text-white">
                <p className="text-lg font-semibold">{room.title}</p>
                <p className="mt-1 max-w-md text-sm text-white/85">{room.description}</p>
              </div>
              <span className="hidden rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-[color:var(--color-sage-dark)] sm:inline-block">
                {room.hotspot}
              </span>
            </div>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition hover:bg-white"
              aria-label="Previous room"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition hover:bg-white"
              aria-label="Next room"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto p-4">
            {TOUR_ROOMS.map((r, i) => {
              const pastel = getCardPastel(i + 14);
              return (
                <button
                  key={r.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "shrink-0 rounded-xl border px-4 py-2 text-sm font-medium transition",
                    i === active ? "text-white shadow-md" : "hover:opacity-90",
                  )}
                  style={
                    i === active
                      ? { backgroundColor: pastel.accent, borderColor: pastel.accent }
                      : { backgroundColor: pastel.bg, borderColor: pastel.border, color: pastel.text }
                  }
                >
                  {r.title}
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild variant="outline">
          <Link href="/gallery">
            <MapPin className="mr-2 h-4 w-4" aria-hidden="true" />
            Full Gallery
          </Link>
        </Button>
        <Button asChild>
          <Link href="/appointment">Book a Visit</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
