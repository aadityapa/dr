import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

export function CtaSection() {
  return (
    <Reveal>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[color:var(--color-sage)] to-[color:var(--color-sage-dark)] px-8 py-16 text-center text-white md:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[color:var(--color-terracotta)]/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl">
              Ready to take the first step?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Book a consultation with {siteConfig.doctorName} — we&apos;d love to hear about your child and answer your questions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="warm">
                <Link href="/appointment">Book Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
