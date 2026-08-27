"use client";

import Image from "next/image";
import type { KeyboardEvent } from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";

export type MediaShowcaseSlide = {
  title: string;
  category: string;
  categoryKey: string;
  alt?: string;
  image: string;
};

export type MediaShowcaseVideo = {
  title: string;
  description: string;
  category: string;
  src: string;
  poster: string;
};

type MediaShowcaseCopy = {
  kicker: string;
  title: string;
  description: string;
  photoLabel: string;
  previous: string;
  next: string;
  goToSlideLabel: string;
  videoTitle: string;
  videoDescription: string;
  playVideoLabel: string;
};

type ClinicMediaShowcaseProps = {
  slides: MediaShowcaseSlide[];
  videos: MediaShowcaseVideo[];
  copy: MediaShowcaseCopy;
};

export function ClinicMediaShowcase({ slides, videos, copy }: ClinicMediaShowcaseProps) {
  const [active, setActive] = useState(0);
  const current = slides[active];

  if (!current) return null;

  function previousSlide() {
    setActive((index) => (index === 0 ? slides.length - 1 : index - 1));
  }

  function nextSlide() {
    setActive((index) => (index === slides.length - 1 ? 0 : index + 1));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previousSlide();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextSlide();
    }
  }

  return (
    <div className="space-y-12">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--color-sage-text)]">
            {copy.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--color-sage-dark)] md:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--color-muted)]">{copy.description}</p>
        </div>
      </Reveal>

      <Reveal>
        <div
          className="overflow-hidden rounded-[2rem] border border-[color:var(--color-border)]/70 bg-white shadow-xl"
          role="region"
          aria-label={copy.photoLabel}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div>
            <div className="relative aspect-[4/5] min-h-[420px] bg-[color:var(--color-soft-sage)] sm:aspect-[16/10]">
              <Image
                key={current.image}
                src={current.image}
                alt={current.alt ?? current.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute bottom-5 right-5 flex items-end justify-end">
                <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[color:var(--color-sage-dark)]">
                  {active + 1}/{slides.length}
                </span>
              </div>
              <button
                type="button"
                onClick={previousSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-[color:var(--color-sage-dark)] shadow-md transition hover:bg-white"
                aria-label={copy.previous}
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-[color:var(--color-sage-dark)] shadow-md transition hover:bg-white"
                aria-label={copy.next}
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

          </div>
        </div>
      </Reveal>

      {videos.length > 0 ? (
        <Reveal>
          <div>
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-soft-green)] text-[color:var(--color-sage-dark)]">
                <PlayCircle className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[color:var(--color-sage-dark)]">{copy.videoTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">{copy.videoDescription}</p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {videos.map((video) => (
                <article
                  key={video.src}
                  className="overflow-hidden rounded-[1.5rem] border border-[color:var(--color-border)]/70 bg-white shadow-sm"
                >
                  <video
                    className="aspect-video w-full bg-black object-cover"
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    aria-label={`${copy.playVideoLabel}: ${video.title}`}
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-sage-text)]">
                      {video.category}
                    </p>
                    <h4 className="mt-2 text-lg font-semibold text-[color:var(--color-sage-dark)]">{video.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">{video.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}
