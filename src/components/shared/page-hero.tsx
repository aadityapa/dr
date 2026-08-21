import { FloatingNature } from "@/components/shared/floating-nature";
import { SoftColorWash } from "@/components/illustrations/scene-illustrations";
import { HeroPhoto } from "@/components/shared/hero-photo";
import { PhotoCluster } from "@/components/shared/photo-cluster";
import { heroClusters, stockPhotos, type StockPhotoKey } from "@/lib/stock-photos";
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

/**
 * Shared inner-page hero.
 *
 * Invite Sharuja gets a full-bleed seminar banner; every other page gets the
 * homepage-style organic photo cluster, centred between heading and copy.
 */
export function PageHero({ kicker, title, description, credentials, children, art, photoKey }: PageHeroProps) {
  const banner = photoKey && photoKey in stockPhotos ? stockPhotos[photoKey as keyof typeof stockPhotos] : undefined;
  const cluster =
    photoKey && photoKey in heroClusters ? heroClusters[photoKey as keyof typeof heroClusters] : undefined;

  const body = (
    <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center md:px-8">
      <Reveal className="flex w-full flex-col items-center">
        {credentials && credentials.length > 0 ? (
          <ul className="max-w-2xl space-y-1 text-lg leading-relaxed text-[color:var(--color-muted)]">
            {credentials.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        ) : description ? (
          <p className="max-w-2xl text-lg leading-relaxed text-[color:var(--color-muted)]">{description}</p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Reveal>
    </div>
  );

  return (
    <section className="hero-aurora relative overflow-hidden bg-gradient-to-br from-[color:var(--color-peach)]/50 via-[color:var(--color-cream)] to-[color:var(--color-sky)]/30 py-20 md:py-28">
      <SoftColorWash />
      <FloatingNature />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center md:px-8">
        <Reveal className="flex w-full flex-col items-center">
          {kicker ? <Badge className="mb-4">{kicker}</Badge> : null}
          <h1 className="heading-gradient font-[family-name:var(--font-serif)] text-4xl leading-tight md:text-6xl">
            {title}
          </h1>
        </Reveal>
      </div>

      {banner ? (
        /* full-bleed banner sits outside the centred container */
        <HeroPhoto src={banner.src} alt={banner.alt} fallback={art} />
      ) : cluster ? (
        <div className="relative mx-auto my-10 w-full max-w-2xl px-4 md:my-12 md:px-8">
          <PhotoCluster photos={cluster} />
        </div>
      ) : (
        art
      )}

      {body}
    </section>
  );
}
