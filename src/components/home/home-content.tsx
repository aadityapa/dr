"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { MagneticButton } from "@/components/shared/magnetic-button";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cldImage } from "@/lib/cloudinary";
import { conditions, services, therapyFlow, trustStats } from "@/lib/site-data";

const ContactForm = dynamic(() => import("@/components/forms/contact-form").then((mod) => mod.ContactForm), {
  loading: () => <div className="h-72 animate-pulse rounded-3xl bg-[color:var(--color-soft-green)]/50" />,
});
const GalleryGrid = dynamic(() => import("@/components/shared/gallery-grid").then((mod) => mod.GalleryGrid), {
  loading: () => <div className="h-80 animate-pulse rounded-3xl bg-[color:var(--color-soft-green)]/50" />,
});
const TestimonialCarousel = dynamic(
  () => import("@/components/shared/testimonial-carousel").then((mod) => mod.TestimonialCarousel),
  {
    loading: () => <div className="h-56 animate-pulse rounded-3xl bg-[color:var(--color-soft-green)]/50" />,
  },
);

export function HomeContent() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#dce5d7,transparent_45%),radial-gradient(circle_at_bottom_left,#f1d8cc,transparent_35%)]" />
        <motion.div
          className="absolute -left-16 top-24 h-60 w-60 rounded-full bg-[color:var(--color-soft-green)]/60 blur-3xl"
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-0 top-10 h-56 w-56 rounded-full bg-[color:var(--color-terracotta)]/30 blur-3xl"
          animate={{ y: [10, -20, 10] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <Section className="relative grid items-center gap-10 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[color:var(--color-sage)]">
              Pediatric Occupational Therapy
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-serif)] text-4xl leading-tight text-[color:var(--color-sage-dark)] md:text-6xl">
              Helping Children Regulate, Connect, Participate & Thrive
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[color:var(--color-muted)]">
              Compassionate Pediatric Occupational Therapy designed to nurture confidence, independence, and joyful
              participation in everyday life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton>
                <Button asChild size="lg">
                  <Link href="/appointment">Book Consultation</Link>
                </Button>
              </MagneticButton>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-sm text-[color:var(--color-muted)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--color-sage)]" />
              Scroll to discover our care journey
            </div>
          </div>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--color-border)] bg-white/70 p-3 shadow-2xl">
              <Image
                src={cldImage("samples/people/kitchen-bar", { width: 1200, height: 900 })}
                alt="Warm child therapy support session"
                width={1200}
                height={900}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="rounded-[1.5rem] object-cover"
                priority
              />
            </div>
          </Reveal>
        </Section>
      </section>

      <Section id="trust">
        <SectionHeading
          kicker="Parent Trust"
          title="Safe, ethical, and deeply personalized therapy care"
          description="Every care plan is evidence-informed, child-centered, and designed with parental collaboration."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {trustStats.map((item) => (
            <Card key={item.label}>
              <CardContent className="p-6">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="rounded-[2rem] bg-white/60">
        <SectionHeading
          kicker="Therapy Philosophy"
          title="Regulate → Connect → Participate → Thrive"
          description="Our therapy roadmap creates sustainable progress from nervous system regulation to functional independence."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {therapyFlow.map((step, i) => (
            <Reveal key={step} y={20 + i * 8}>
              <Card>
                <CardContent className="p-6">
                  <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--color-muted)]">Step {i + 1}</p>
                  <p className="mt-2 text-xl font-semibold text-[color:var(--color-sage-dark)]">{step}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="services">
        <SectionHeading
          kicker="Services"
          title="Specialized therapy services for every developmental stage"
          description="Interactive, play-based interventions tailored to your child's sensory, motor, and functional needs."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div key={service.slug} whileHover={{ y: -6 }}>
              <Card className="h-full transition-shadow hover:shadow-2xl">
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-soft-green)]">
                    <ServiceIcon name={service.icon} className="h-5 w-5 text-[color:var(--color-sage-dark)]" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[color:var(--color-muted)]">{service.summary}</p>
                  <Button asChild variant="ghost" className="mt-4 px-0">
                    <Link href={`/services/${service.slug}`}>
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="conditions" className="rounded-[2rem] bg-[color:var(--color-soft-green)]/35">
        <SectionHeading
          kicker="Conditions We Work With"
          title="Supportive care for diverse developmental needs"
          description="Parent-friendly therapy pathways for Autism, ADHD, Cerebral Palsy, Developmental Delay, and Sensory Processing Difficulties."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {conditions.map((condition) => (
            <Card key={condition.title}>
              <CardContent className="p-6">
                <p className="text-lg font-semibold text-[color:var(--color-sage-dark)]">{condition.title}</p>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">{condition.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          kicker="Therapy Roadmap"
          title="How your child progresses with us"
          description="A premium care journey designed for clarity, continuity, and measurable growth."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "Initial Assessment",
            "Goal Setting",
            "Personalized Therapy Plan",
            "Parent Collaboration",
            "Skill Development",
            "Functional Independence",
          ].map((step) => (
            <Card key={step}>
              <CardContent className="flex items-start gap-3 p-6">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[color:var(--color-sage)]" />
                <p className="text-sm text-[color:var(--color-sage-dark)]">{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="rounded-[2rem] bg-white/65">
        <SectionHeading
          kicker="Milestones We Celebrated"
          title="Parent stories filled with progress and joy"
          description="Ethical, anonymized testimonials that celebrate meaningful everyday wins."
        />
        <div className="mt-8">
          <TestimonialCarousel />
        </div>
      </Section>

      <Section id="gallery">
        <SectionHeading kicker="Gallery" title="A warm, child-friendly healing environment" />
        <div className="mt-8">
          <GalleryGrid preview />
        </div>
      </Section>

      <Section className="rounded-[2.2rem] bg-gradient-to-r from-[color:var(--color-sage)] to-[color:var(--color-sage-dark)] text-white">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-serif)] text-4xl">Begin your child&apos;s therapy journey with confidence</h2>
            <p className="mt-4 text-white/85">
              Book a consultation and receive a personalized plan focused on your child&apos;s unique strengths and needs.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="warm">
                <Link href="/appointment">Book Session</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Contact Clinic</Link>
              </Button>
            </div>
          </div>
          <Card className="bg-white/95">
            <CardContent className="p-6">
              <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
                Quick Consultation Form
              </h3>
              <p className="mt-2 text-sm text-[color:var(--color-muted)]">Share your concern and we will call you back.</p>
              <div className="mt-4">
                <ContactForm />
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
