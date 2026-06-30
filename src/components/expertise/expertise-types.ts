import type { SharedLabels } from "@/lib/i18n/content/labels";
import type { PageShells } from "@/lib/i18n/content/page-shells";

export type ExpertisePageProps = {
  shells: PageShells["expertise"];
  labels: SharedLabels;
  homeLabel: string;
};
