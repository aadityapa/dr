import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullItems: BreadcrumbItem[] = [{ name: "Home", url: siteConfig.url }, ...items];

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
                <Link href={item.url.replace(siteConfig.url, "") || "/"} className="hover:text-[color:var(--color-sage-dark)]">
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
