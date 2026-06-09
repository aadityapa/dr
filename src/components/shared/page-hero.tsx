import { FloatingNature } from "@/components/shared/floating-nature";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";

type PageHeroProps = {
  kicker?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHero({ kicker, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[color:var(--color-cream)] to-[color:var(--color-soft-green)]/30 px-4 py-20 md:px-8 md:py-28">
      <FloatingNature />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          {kicker ? <Badge className="mb-4">{kicker}</Badge> : null}
          <h1 className="max-w-4xl font-[family-name:var(--font-serif)] text-4xl leading-tight text-[color:var(--color-sage-dark)] md:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[color:var(--color-muted)]">{description}</p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
