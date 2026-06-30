import type { AboutContent } from "@/lib/i18n/content/about-locale";
import type { PageShells } from "@/lib/i18n/content/page-shells";

export type AboutPageProps = {
  about: AboutContent;
  shells: PageShells["about"];
  homeLabel: string;
};
