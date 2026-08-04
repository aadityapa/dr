import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getPhase3Content } from "@/lib/i18n/content/phase3-locale";
import type { AppLocale } from "@/i18n/routing";
import { getLocale } from "next-intl/server";

export default async function NotFound() {
  const locale = (await getLocale()) as AppLocale;
  const { system } = getPhase3Content(locale);

  return (
    <main className="mx-auto max-w-7xl px-4 py-28 text-center md:px-8">
      <p className="text-sm uppercase tracking-[0.15em] text-[color:var(--color-muted)]">{system.notFound.kicker}</p>
      <h1 className="mt-3 font-[family-name:var(--font-serif)] text-3xl md:text-5xl text-[color:var(--color-sage-dark)]">
        {system.notFound.title}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-[color:var(--color-muted)]">{system.notFound.description}</p>
      <Button asChild className="mt-6">
        <Link href="/">{system.notFound.goHome}</Link>
      </Button>
    </main>
  );
}
