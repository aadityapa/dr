"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { galleryCategories, galleryItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[number] | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {["All", ...galleryCategories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              activeCategory === cat
                ? "bg-[color:var(--color-sage)] text-white shadow-md"
                : "bg-white/80 text-[color:var(--color-muted)] hover:bg-[color:var(--color-soft-green)]",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {filtered.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <button
              type="button"
              className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-3xl shadow-sm transition-all hover:shadow-xl"
              onClick={() => setLightbox(item)}
            >
              <Image
                src={item.image}
                alt={item.alt ?? item.title}
                width={600}
                height={400}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="bg-white/90 px-4 py-3 text-left">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-sage-text)]">
                  {item.category}
                </p>
                <p className="text-sm font-medium text-[color:var(--color-sage-dark)]">{item.title}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-6 top-6 text-white hover:text-[color:var(--color-soft-green)]"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.image}
              alt={lightbox.title}
              width={1200}
              height={800}
              className="max-h-[80vh] w-auto rounded-2xl object-contain"
            />
            <p className="mt-4 text-center text-lg text-white">{lightbox.title}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
