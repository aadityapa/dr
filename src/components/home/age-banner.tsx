import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-data";
import { Baby } from "lucide-react";

export function AgeBanner() {
  return (
    <Reveal>
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-[color:var(--color-sage-dark)] px-8 py-10 text-center text-white md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <Baby className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-white/70">Age Group</p>
              <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl">
                Supporting Children From Birth To 14 Years
              </h2>
            </div>
          </div>
          <p className="rounded-full bg-white/10 px-6 py-3 text-lg font-semibold">{siteConfig.ageRange}</p>
        </div>
      </section>
    </Reveal>
  );
}
