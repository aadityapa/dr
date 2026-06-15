"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto max-w-3xl px-4 py-28 text-center md:px-8">
      <p className="text-sm uppercase tracking-[0.15em] text-[color:var(--color-muted)]">
        Something went wrong
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-serif)] text-4xl text-[color:var(--color-sage-dark)] md:text-5xl">
        We hit an unexpected snag
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-[color:var(--color-muted)]">
        Please try again. If the problem continues, you can reach our clinic directly and
        we&apos;ll be glad to help.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button type="button" onClick={() => reset()}>
          Try again
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Go to Home</Link>
        </Button>
        <Button asChild variant="outline">
          <a href={`tel:${siteConfig.phone}`}>Call {siteConfig.phoneDisplay}</a>
        </Button>
      </div>
    </main>
  );
}
