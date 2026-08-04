"use client";

import Image from "next/image";
import type { KeyboardEvent } from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

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
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative aspect-[4/5] min-h-[420px] bg-[color:var(--color-soft-sage)] sm:aspect-[16/10] lg:aspect-auto">
              <Image
                key={current.image}
                src={current.image}
                alt={current.alt ?? current.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                <div aria-live="polite">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">{current.category}</p>
                  <p className="mt-2 text-2xl font-semibold">{current.title}</p>
                </div>
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

            <div className="flex flex-col justify-between bg-[color:var(--color-almond)] p-6 md:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-sage-text)]">
                  {copy.photoLabel}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[color:var(--color-sage-dark)]">{current.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">{current.alt ?? current.title}</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.image}
                    type="button"
                    onClick={() => setActive(index)}
                    className={cn(
                      "rounded-2xl border px-3 py-2 text-left text-xs font-semibold transition",
                      index === active
                        ? "border-[color:var(--color-sage)] bg-[color:var(--color-sage)] text-white shadow-md"
                        : "border-[color:var(--color-border)] bg-white/80 text-[color:var(--color-sage-dark)] hover:border-[color:var(--color-sage)]",
                    )}
                    aria-label={`${copy.goToSlideLabel}: ${slide.title}`}
                    aria-current={index === active ? "true" : undefined}
                  >
                    <span className="block text-[10px] uppercase tracking-[0.18em] opacity-75">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 line-clamp-2 block">{slide.title}</span>
                  </button>
                ))}
              </div>
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
