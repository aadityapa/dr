import { FloatingNature } from "@/components/shared/floating-nature";
import { SoftColorWash } from "@/components/illustrations/scene-illustrations";
import { HeroPhoto } from "@/components/shared/hero-photo";
import { stockPhotos, type HeroPhoto as HeroPhotoData, type StockPhotoKey } from "@/lib/stock-photos";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";

type PageHeroProps = {
  kicker?: string;
  title: string;
  description?: string;
  credentials?: string[];
  children?: React.ReactNode;
  art?: React.ReactNode;
  photoKey?: StockPhotoKey;
};

export function PageHero({ kicker, title, description, credentials, children, art, photoKey }: PageHeroProps) {
  const photo: HeroPhotoData | undefined = photoKey ? stockPhotos[photoKey] : undefined;
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[color:var(--color-peach)]/50 via-[color:var(--color-cream)] to-[color:var(--color-sky)]/30 px-4 py-20 md:px-8 md:py-28">
      <SoftColorWash />
      <FloatingNature />
      {photo ? <HeroPhoto src={photo.src} alt={photo.alt} wide={photo.wide} fallback={art} /> : art}
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          {kicker ? <Badge className="mb-4">{kicker}</Badge> : null}
          <h1 className="max-w-4xl font-[family-name:var(--font-serif)] text-4xl leading-tight text-[color:var(--color-sage-dark)] md:text-6xl">
            {title}
          </h1>
          {credentials && credentials.length > 0 ? (
            <ul className="mt-5 max-w-2xl space-y-1 text-lg leading-relaxed text-[color:var(--color-muted)]">
              {credentials.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ) : description ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[color:var(--color-muted)]">{description}</p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
