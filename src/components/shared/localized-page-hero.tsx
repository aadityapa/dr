"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { PageHero } from "@/components/shared/page-hero";
import { getLocalizedConditionDetail } from "@/lib/i18n/content";

export function LocalizedPageHero({
  page,
  title,
  description,
  children,
}: {
  page: "conditionsList" | "servicesList";
  title?: string;
  description?: string;
  children?: React.ReactNode;
}) {
  const { content } = useLanguage();
  const copy = content.pages[page];
  return (
    <PageHero
      kicker={copy.kicker}
      title={title ?? copy.title}
      description={description ?? copy.description}
    >
      {children}
    </PageHero>
  );
}

export function ConditionLocalizedHero({ slug }: { slug: string }) {
  const { content, locale } = useLanguage();
  const detail = getLocalizedConditionDetail(slug, locale);
  const labels = content.pages.conditionsDetail;
  if (!detail) return null;

  return <PageHero kicker={labels.kicker} title={detail.title} description={detail.intro} />;
}
