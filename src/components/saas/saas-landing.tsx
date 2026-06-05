"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  BarChart3,
  Check,
  HeartHandshake,
  Layers,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";
import { motion } from "framer-motion";

import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { cldImage } from "@/lib/cloudinary";
import { services, siteConfig, trustStats } from "@/lib/site-data";

const TestimonialCarousel = dynamic(
  () => import("@/components/shared/testimonial-carousel").then((mod) => mod.TestimonialCarousel),
  {
    loading: () => <div className="h-56 animate-pulse rounded-3xl bg-slate-100" />,
  },
);

const featureCards = [
  {
    icon: Sparkles,
    title: "Sensory-first sessions",
    description: "Regulation-led therapy that helps children feel safe before skill-building begins.",
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-emerald-50 to-teal-50",
  },
  {
    icon: Waves,
    title: "Aquatic & movement labs",
    description: "Water and play-based circuits for coordination, confidence, and body awareness.",
    className: "bg-sky-50",
  },
  {
    icon: HeartHandshake,
    title: "Parent coaching built in",
    description: "Clear home strategies and progress updates at every milestone.",
    className: "bg-amber-50",
  },
  {
    icon: Layers,
    title: "Personalized care plans",
    description: "Evidence-informed pathways tailored to each child's strengths and goals.",
    className: "bg-violet-50",
  },
  {
    icon: BarChart3,
    title: "Measurable progress",
    description: "Track functional wins from first session through everyday independence.",
    className: "md:col-span-2 bg-slate-50",
  },
];

const workflow = [
  "Book a consultation",
  "Complete child assessment",
  "Receive a personalized plan",
  "Start play-led therapy sessions",
  "Celebrate milestones with your family",
];

export function SaasLanding() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative border-b border-slate-200/70 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />

        <Section className="relative grid items-center gap-12 pb-20 pt-10 md:grid-cols-2 md:pb-28 md:pt-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Pediatric care platform
            </div>
            <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl md:leading-[1.05]">
              {siteConfig.shortName}
            </h1>
            <p className="mt-5 max-w-xl text-lg font-medium text-emerald-800">{siteConfig.tagline}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              A modern therapy experience for families — structured clinical care with the warmth of play, progress
              tracking, and parent guidance in one seamless journey.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800">
                <Link href="/appointment">
                  Start free consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 bg-white">
                <Link href="/services">Explore services</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Evidence-informed care
              </span>
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4 text-emerald-600" />
                1,800+ families supported
              </span>
            </div>
          </div>

          <Reveal>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-100 via-white to-sky-100 blur-xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/60">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Care dashboard</p>
                    <p className="text-sm font-semibold text-slate-900">Weekly progress snapshot</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    On track
                  </span>
                </div>
                <Image
                  src={cldImage("samples/people/kitchen-bar", { width: 1200, height: 900 })}
                  alt="Child therapy session preview"
                  width={1200}
                  height={900}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="aspect-[4/3] w-full object-cover"
                  priority
                />
                <div className="grid grid-cols-3 gap-3 border-t border-slate-100 p-4">
                  {["Regulate", "Connect", "Thrive"].map((item) => (
                    <div key={item} className="rounded-xl bg-slate-50 px-3 py-2 text-center">
                      <p className="text-[10px] uppercase tracking-wide text-slate-400">Goal</p>
                      <p className="text-xs font-semibold text-slate-800">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Section>
      </section>

      {/* Social proof */}
      <Section className="py-12 md:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <AnimatedCounter value={item.value} suffix={item.suffix} />
              <p className="mt-2 text-sm text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Bento features */}
      <Section className="rounded-[2rem] bg-slate-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">Platform features</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Everything families need in one care experience
          </h2>
          <p className="mt-4 text-base text-slate-300 md:text-lg">
            Modular therapy services, parent coaching, and progress visibility — designed like a modern product, delivered
            with clinical depth.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {featureCards.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06 }}
              className={`rounded-3xl border border-white/10 p-6 text-slate-900 shadow-lg ${feature.className}`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80">
                <feature.icon className="h-5 w-5 text-slate-800" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services grid */}
      <Section>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">Services</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Pick the right module for your child
            </h2>
          </div>
          <Button asChild variant="outline" className="w-fit border-slate-300">
            <Link href="/services">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
            >
              <p className="text-lg font-semibold text-slate-900 group-hover:text-emerald-800">{service.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-700">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Workflow */}
      <Section className="rounded-[2rem] border border-slate-200 bg-white">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              From first call to confident milestones
            </h2>
            <p className="mt-4 text-slate-600">
              A clear onboarding flow keeps parents informed and children supported at every step.
            </p>
          </div>
          <ol className="space-y-3">
            {workflow.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span className="pt-1 text-sm font-medium text-slate-800">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-gradient-to-b from-emerald-50/80 to-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">Social proof</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Loved by parents, trusted by clinicians
          </h2>
        </div>
        <div className="mt-10">
          <TestimonialCarousel />
        </div>
      </Section>

      {/* Pricing-style CTA */}
      <Section>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border-b border-slate-100 p-8 md:p-12 lg:border-b-0 lg:border-r">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">Get started</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Ready to begin your child&apos;s journey?
              </h2>
              <p className="mt-4 max-w-lg text-slate-600">
                Book a consultation to receive a personalized therapy roadmap, parent coaching plan, and session schedule.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Initial assessment with Dr. Sharuja",
                  "Custom sensory and skill-building plan",
                  "Parent strategy session included",
                  "Flexible in-clinic and follow-up support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center bg-slate-950 p-8 text-white md:p-12">
              <p className="text-sm uppercase tracking-[0.14em] text-slate-400">Consultation</p>
              <p className="mt-2 text-4xl font-semibold">Book today</p>
              <p className="mt-3 text-sm text-slate-300">Flexible scheduling · Mon–Sat · Pune clinic</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button asChild size="lg" variant="warm" className="w-full">
                  <Link href="/appointment">Book consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-slate-600 bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/contact">Talk to our team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
