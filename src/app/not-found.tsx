import Link from "next/link";

/** Root 404 — for URLs outside the locale segment. Styled to match the brand
 *  without needing the locale providers. */
export default function RootNotFound() {
  return (
    <main
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
      className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-24 text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-terracotta)]">
        404 — Page not found
      </p>
      <h1 className="mt-4 font-[family-name:var(--font-serif)] text-4xl text-[color:var(--color-sage-dark)] md:text-5xl">
        This page seems to have wandered off to play
      </h1>
      <p className="mx-auto mt-4 max-w-md text-[color:var(--color-muted)]">
        The page you are looking for does not exist or may have moved. Let us take
        you back to safety.
      </p>
      <Link
        href="/en"
        className="glossy-btn mt-8 inline-flex h-11 items-center justify-center rounded-full bg-[color:var(--color-sage)] px-6 text-sm font-medium text-white shadow-lg transition-all hover:bg-[color:var(--color-sage-dark)]"
      >
        Go to Homepage
      </Link>
    </main>
  );
}
