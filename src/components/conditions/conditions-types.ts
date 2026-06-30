import type { SharedLabels } from "@/lib/i18n/content/labels";
import type { PageShells } from "@/lib/i18n/content/page-shells";

export type ConditionsPageProps = {
  shells: PageShells["conditions"];
  labels: SharedLabels;
  homeLabel: string;
};
