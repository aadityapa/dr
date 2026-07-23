/**
 * Curated free stock photos (Pexels — free for commercial use, no attribution
 * required) used as warm hero imagery. Each entry maps to a page hero.
 *
 * Reliability: if any URL fails to load, the <HeroPhoto> component falls back
 * to the page's colourful illustration, so the live site never shows a broken
 * image. Swap any `id` below to re-theme a page.
 *
 * Pexels CDN URLs are deterministic from the numeric photo id.
 */

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900&h=1000&fit=crop`;

export type HeroPhoto = { src: string; alt: string };

export const stockPhotos = {
  resources: { src: pexels(6437505), alt: "Two children reading a picture book together" },
  library: { src: pexels(10638213), alt: "Children reading books side by side" },
  contact: { src: pexels(4473314), alt: "A parent smiling and hugging their children" },
  faqs: { src: pexels(8342189), alt: "A child focused on reading a book" },
  gallery: { src: pexels(1148998), alt: "A child's hands covered in bright, colourful paint" },
  locations: { src: pexels(4474043), alt: "A happy family together at home" },
  screening: { src: pexels(7269694), alt: "A child placing a wooden block, building fine-motor skills" },
  "testimonials-milestones": { src: pexels(5896818), alt: "Happy children jumping outdoors" },
  "therapy-outcomes": { src: pexels(8535890), alt: "A joyful child playing on a playground" },
  "invite-sharuja": { src: pexels(8613089), alt: "An educator reading to a group of children" },
  appointment: { src: pexels(6743134), alt: "A smiling parent holding their happy child" },
} satisfies Record<string, HeroPhoto>;

export type StockPhotoKey = keyof typeof stockPhotos;
