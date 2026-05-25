"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { X } from "lucide-react";

import { cldImage } from "@/lib/cloudinary";
import { galleryCategories, galleryItems } from "@/lib/site-data";

type GalleryGridProps = {
  preview?: boolean;
};

export function GalleryGrid({ preview = false }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof galleryCategories)[number] | "All">("All");
  const [selected, setSelected] = useState<string | null>(null);

  const items = useMemo(() => {
    const base = preview ? galleryItems.slice(0, 4) : galleryItems;
    if (activeCategory === "All") return base;
    return base.filter((item) => item.category === activeCategory);
  }, [activeCategory, preview]);

  return (
    <>
      {!preview ? (
        <div className="mb-6 flex flex-wrap gap-2">
          {["All", ...galleryCategories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category as (typeof galleryCategories)[number] | "All")}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activeCategory === category
                  ? "bg-[color:var(--color-sage)] text-white"
                  : "bg-[color:var(--color-soft-green)] text-[color:var(--color-sage-dark)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}
      <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
        {items.map((item) => (
          <button
            key={`${item.title}-${item.imageId}`}
            type="button"
            onClick={() => setSelected(item.imageId)}
            className="group relative block w-full overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-white text-left transition duration-300 hover:-translate-y-1"
          >
            <Image
              src={cldImage(item.imageId, { width: 1000, height: 900 })}
              alt={item.title}
              width={1000}
              height={900}
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white">
              <p className="text-sm font-medium">{item.title}</p>
            </div>
          </button>
        ))}
      </div>
      {selected ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4" onClick={() => setSelected(null)}>
            <button type="button" className="absolute right-6 top-6 text-white" aria-label="Close lightbox">
              <X className="h-6 w-6" />
            </button>
            <Image
              src={cldImage(selected, { width: 1400, height: 1000, crop: "fit" })}
              alt="Gallery preview"
              width={1400}
              height={1000}
              sizes="90vw"
              className="max-h-[90vh] w-auto rounded-3xl object-contain"
            />
        </div>
      ) : null}
    </>
  );
}
