"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { getCardPastel } from "@/lib/pastel-palette";
import { galleryItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const TOUR_ROOM_IMAGES = [0, 1, 2, 3] as const;

export function ClinicTourSection() {
  const [active, setActive] = useState(0);
  const { content } = useLanguage();
  const copy = content.clinicTour;
  const room = copy.rooms[active];
  const roomImage =
    galleryItems[TOUR_ROOM_IMAGES[active]]?.image ?? galleryItems[0]?.image;

  function prev() {
    setActive((i) => (i === 0 ? copy.rooms.length - 1 : i - 1));
  }
  function next() {
    setActive((i) => (i === copy.rooms.length - 1 ? 0 : i + 1));
  }

  return (
    <Section id="clinic-tour" compact className="bg-[color:var(--color-almond)]">
      <SectionHeading kicker={copy.kicker} title={copy.title} description={copy.description} center />

      <Reveal className="mt-10">
        <div className="overflow-hidden rounded-[2rem] border border-[color:var(--color-border)]/60 bg-white shadow-xl">
          <div className="relative aspect-[16/9] w-full bg-[color:var(--color-soft-sage)]">
            {roomImage && (
              <Image
                src={roomImage}
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
              aria-label={content.common.previousRoom}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition hover:bg-white"
              aria-label={content.common.nextRoom}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto p-4">
            {copy.rooms.map((r, i) => {
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
            {copy.fullGallery}
          </Link>
        </Button>
        <Button asChild>
          <Link href="/appointment">{copy.bookVisit}</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
