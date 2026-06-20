"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useLocaleContent } from "@/lib/i18n/use-locale-content";
import { siteConfig } from "@/lib/site-data";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { system } = useLocaleContent();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto max-w-3xl px-4 py-28 text-center md:px-8">
      <p className="text-sm uppercase tracking-[0.15em] text-[color:var(--color-muted)]">{system.error.kicker}</p>
      <h1 className="mt-3 font-[family-name:var(--font-serif)] text-4xl text-[color:var(--color-sage-dark)] md:text-5xl">
        {system.error.title}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-[color:var(--color-muted)]">{system.error.description}</p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button type="button" onClick={() => reset()}>
          {system.error.tryAgain}
        </Button>
        <Button asChild variant="outline">
          <Link href="/">{system.error.goHome}</Link>
        </Button>
        <Button asChild variant="outline">
          <a href={`tel:${siteConfig.phone}`}>{system.error.call(siteConfig.phoneDisplay)}</a>
        </Button>
      </div>
    </main>
  );
}
