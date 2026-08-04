"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { galleryItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export type LocalizedGalleryItem = {
  title: string;
  category: string;
  categoryKey: string;
  alt?: string;
  image: string;
};

type GalleryGridProps = {
  items: LocalizedGalleryItem[];
  allCategoryLabel: string;
  closeLightboxLabel: string;
  categoryLabels: Record<string, string>;
};

export function GalleryGrid({ items, allCategoryLabel, closeLightboxLabel, categoryLabels }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>(allCategoryLabel);
  const [lightbox, setLightbox] = useState<LocalizedGalleryItem | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  // Accessible dialog behaviour: focus moves into the lightbox on open,
  // Escape closes it from anywhere, and focus returns to the trigger.
  useEffect(() => {
    if (!lightbox) return;
    closeButtonRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lastTriggerRef.current?.focus();
    };
  }, [lightbox]);

  const categoryKeys = [...new Set(items.map((item) => item.categoryKey))];
  const filterButtons = [
    { key: allCategoryLabel, label: allCategoryLabel },
    ...categoryKeys.map((key) => ({ key, label: categoryLabels[key] ?? key })),
  ];

  const filtered =
    activeCategory === allCategoryLabel
      ? items
      : items.filter((item) => item.categoryKey === activeCategory);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filterButtons.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setActiveCategory(cat.key)}
            aria-pressed={activeCategory === cat.key}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              activeCategory === cat.key
                ? "bg-[color:var(--color-sage)] text-white shadow-md"
                : "bg-white/80 text-[color:var(--color-muted)] hover:bg-[color:var(--color-soft-green)]",
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mx-auto max-w-md rounded-2xl border border-[color:var(--color-border)] bg-white/70 px-6 py-10 text-center text-sm text-[color:var(--color-muted)]">
          No photos in this category yet.
        </p>
      ) : null}

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {filtered.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <button
              type="button"
              className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-3xl shadow-sm transition-all hover:shadow-xl"
              onClick={(e) => {
                lastTriggerRef.current = e.currentTarget;
                setLightbox(item);
              }}
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
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="absolute right-4 top-4 rounded-full p-2.5 text-white transition hover:text-[color:var(--color-soft-green)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            onClick={() => setLightbox(null)}
            aria-label={closeLightboxLabel}
          >
            <X className="h-8 w-8" aria-hidden />
          </button>
          <div className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.image}
              alt={lightbox.alt ?? lightbox.title}
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

export function buildGalleryItems(localeItems: { title: string; category: string; alt?: string }[]): LocalizedGalleryItem[] {
  return localeItems.map((item, index) => {
    const base = galleryItems[index];
    return {
      title: item.title,
      category: item.category,
      categoryKey: base?.category ?? item.category,
      alt: item.alt,
      image: base?.image ?? "",
    };
  });
}
