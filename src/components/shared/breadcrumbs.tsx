import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { JsonLd } from "@/components/shared/json-ld";
import { routing, type AppLocale } from "@/i18n/routing";
import { getLabels } from "@/lib/i18n/localize";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

/**
 * Every caller passes absolute URLs that already carry the locale segment
 * (`${siteConfig.url}/${locale}/...`), so the plain Next `Link` is correct for
 * them. The Home crumb, however, used to point at the bare origin — an
 * unprefixed URL that the middleware 307s to `/en`. Google crawled that
 * redirecting URL from every page and reported it as "crawled, not indexed".
 * We now derive the locale from the first crumb so Home is `/${locale}` in
 * both the visible link and the BreadcrumbList JSON-LD.
 */
function localeFromItems(items: BreadcrumbItem[]): AppLocale {
  const firstPath = items[0]?.url.replace(siteConfig.url, "") ?? "";
  const segment = firstPath.split("/")[1] ?? "";
  return (routing.locales as readonly string[]).includes(segment)
    ? (segment as AppLocale)
    : routing.defaultLocale;
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const locale = localeFromItems(items);
  const labels = getLabels(locale);
  const fullItems: BreadcrumbItem[] = [
    { name: labels.home, url: `${siteConfig.url}/${locale}` },
    ...items,
  ];

  return (
    <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-7xl px-4 pt-6 md:px-8">
      <JsonLd data={breadcrumbSchema(fullItems)} id="breadcrumb-schema" />
      <ol className="flex flex-wrap items-center gap-1 text-sm text-[color:var(--color-muted)]">
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
              {isLast ? (
                <span aria-current="page" className="font-medium text-[color:var(--color-sage-dark)]">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url.replace(siteConfig.url, "")} className="hover:text-[color:var(--color-sage-dark)]">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
