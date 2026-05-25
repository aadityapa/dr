import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-28 text-center md:px-8">
      <p className="text-sm uppercase tracking-[0.15em] text-[color:var(--color-muted)]">Page Not Found</p>
      <h1 className="mt-3 font-[family-name:var(--font-serif)] text-5xl text-[color:var(--color-sage-dark)]">Let&apos;s bring you home</h1>
      <p className="mx-auto mt-4 max-w-xl text-[color:var(--color-muted)]">
        The page you are looking for may have moved, but caring support is always a click away.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Go to Home</Link>
      </Button>
    </main>
  );
}
