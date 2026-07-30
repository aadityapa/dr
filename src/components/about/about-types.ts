import type { AboutContent } from "@/lib/i18n/content/about-locale";
import type { PageShells } from "@/lib/i18n/content/page-shells";

export type AboutPageProps = {
  about: AboutContent;
  shells: PageShells["about"];
  homeLabel: string;
  faqs: { q: string; a: string }[];
  testimonials: { parent: string; quote: string; milestone: string }[];
  clinicImages: { title: string; alt: string; image: string }[];
};
