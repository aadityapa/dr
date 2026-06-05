"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  MessageCircle,
  PlayCircle,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { services, siteConfig, trustStats } from "@/lib/site-data";

import "@/components/stitch/stitch-theme.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const featureCards = [
  {
    title: "Personalized Care Plans",
    description:
      "Custom-tailored occupational therapy pathways designed for every child's unique rhythm and sensory profile.",
    icon: Sparkles,
    className: "md:col-span-2 md:row-span-2",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmvJgf5EvLXFHdxpriPfTKXHsB568eAekywtkhB-CvHO_HQj2Z3GQR1tEjzQyA7fyC-R1sVCP4l7i6NsKCkR8nGM4BkOENegL5hbpkXD-HGEaIFl_RR8HFnz_qXog16Z5bdN9gjHtemwF7QR8vsVoyLWek5x7Iewq2bQYfaqN5-u8cb5_znH9qdWIEgHWFStrB-KyNCBK6l4anAgraSdQG_dLGk-ejHobDy2oUbJZrUIbu3kSPaxPPnSEBXf5op3rt3EtBBVZJKI0",
  },
  {
    title: "Goal Tracking",
    description: "Real-time milestone visualization for parents and practitioners.",
    icon: BarChart3,
    className: "md:col-span-2 bg-primary-container text-on-primary-container",
  },
  {
    title: "Seamless Communication",
    description: "Stay connected with your therapist between sessions.",
    icon: MessageCircle,
    className: "bg-secondary-container",
  },
  {
    title: "Resource Library",
    description: "Guides, exercises, and home strategies at your fingertips.",
    icon: Users,
    className: "bg-tertiary-fixed",
  },
];

const steps = [
  { title: "Assess", description: "A comprehensive clinical evaluation to understand your child's unique needs." },
  { title: "Plan", description: "Crafting a bespoke therapy roadmap with clear, measurable milestones." },
  { title: "Thrive", description: "Continuous support and adjustments as your child reaches new heights." },
];

const serviceImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC29LH_JxNwRg5NpYHjhvDq5NA45UkK8YwYRUdb9UEXJl1cbAbMlDqAHJjssWxCojRpc1bGp9nfwvMpu9ntJ3n_6N0sgPd3DyscLoL_hunyb1KQwV-71k6SWkQfleHckuesfvfMBr8BbwO9lHSnMUn8CN_fPsmmBUmZbRBVuyzkn-i3RjvVRmRjdBvhTrOu5xei4FvfyoB3cug5aPgw9M5MSxXqtQdlXFfA0Z2F1tADBKUgZkJtNidvGLVdXtjl9AjFOHh0-qPICKg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB-sXoGWJZlwLa_DyZl_WEolt0qJ6LxUF2AZGbcoOZ8H5VYG6xnwSG9eA-p8gVI-ueyQkgaO4H7DvBizGVs2fX7uXnJxIGB5ayRm8ioMbmqc_hS85rxm63z_4r-wAVeU90F_74DWuzEwoA6CZH0nuL9PLtW3fb0pFb1jumcdUR6I2QMzP0TAB_jgugKznAWuVL6SBe90-qLyEqegeF4YQOTuNZY3lCuY65Mn9ls55vgO1KxBqcv6GBmvTbUERjzIebp-h3M_wvF4FI",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAsMMbuZvGB5nu9cTVwTwXw97-oBUpwYnew4HBt5rt1SuwcP9fQfcpY20TcxNDJIEVHeTQsyx4GaF8Gu_t7sWnV2ScCS4gao2KUJhWq4HLM9k9f5tdG6zxbj4l8vNLxtqUPvF689NYtixZkhGeTw3Azb7TtdRovPtvrVILfiMGkGuoM8cPAn5e-exvSX1Xb2Z1t375jj4eKVSu0zKMftPJRvN-jRBWAm2991hGVHxJzPvzG3Jc0tvJWs1O6Jda4JJ-HqNv1RK-XImA",
];

export function ThriveStitchLanding() {
  return (
    <div className="stitch-landing overflow-hidden bg-background text-on-background">
      {/* Hero */}
      <section className="relative px-4 pb-20 pt-10 md:px-16 md:pb-32 md:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(101,122,104,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(216,227,250,0.35),transparent_35%)]" />
        <motion.div
          className="pointer-events-none absolute -left-20 top-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          animate={{ y: [0, 18, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-tertiary-fixed/40 blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Pediatric care platform
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-headline-xl text-headline-xl max-w-4xl text-on-background md:text-[3.25rem] md:leading-[1.08]"
          >
            <span>{siteConfig.tagline.split(". Thriving")[0]}.</span>{" "}
            <span className="text-primary">Thriving{siteConfig.tagline.split("Thriving")[1]}</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-body-lg text-body-lg mt-6 max-w-2xl text-on-surface-variant"
          >
            Empowering children to reach their full potential through world-class clinical excellence, wrapped in the
            warmth of personalized, family-centered care.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="squishy-button bg-primary px-8 text-on-primary shadow-lg shadow-primary/20">
              <Link href="/appointment">
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="squishy-button bg-white/80 px-8 text-on-surface shadow-md backdrop-blur-sm hover:bg-white"
            >
              <Link href="/services">
                <PlayCircle className="h-4 w-4" />
                Explore Services
              </Link>
            </Button>
          </motion.div>

          <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="relative mt-20 w-full max-w-4xl">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-tertiary-fixed/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] bg-surface-container-lowest p-5 shadow-[0_24px_80px_-20px_rgba(47,77,59,0.25)] md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-error/30" />
                  <span className="h-3 w-3 rounded-full bg-primary/40" />
                  <span className="h-3 w-3 rounded-full bg-tertiary/40" />
                </div>
                <p className="text-label-sm text-outline">Clinical Dashboard · Progress Overview</p>
              </div>

              <div className="grid gap-4 md:grid-cols-12">
                <div className="space-y-4 rounded-2xl bg-surface-container p-5 md:col-span-4">
                  <div className="h-4 w-3/4 rounded-full bg-primary/15" />
                  <div className="flex h-32 items-end gap-1 rounded-xl bg-white p-3 shadow-inner">
                    {[50, 66, 75, 90].map((h) => (
                      <motion.div
                        key={h}
                        className="w-full rounded-t-md bg-primary"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.4 + h / 100, duration: 0.8, ease: "easeOut" }}
                        style={{ opacity: 0.35 + h / 150 }}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:col-span-8 md:grid-cols-2">
                  <div className="flex h-32 flex-col justify-between rounded-2xl bg-surface-container-high p-5 shadow-sm">
                    <Users className="h-6 w-6 text-primary" />
                    <div className="h-3 w-1/2 rounded-full bg-primary/15" />
                  </div>
                  <div className="flex h-32 flex-col justify-between rounded-2xl bg-surface-container-high p-5 shadow-sm">
                    <TrendingUp className="h-6 w-6 text-tertiary" />
                    <div className="h-3 w-2/3 rounded-full bg-tertiary/15" />
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-md md:col-span-2">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <CalendarDays className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="text-label-md text-on-surface">Next Session</p>
                        <p className="text-body-sm text-secondary">Tuesday at 4:00 PM</p>
                      </div>
                    </div>
                    <Link href="/appointment" className="rounded-full bg-secondary-container px-4 py-2 text-label-sm text-on-secondary-container transition hover:brightness-95">
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface-container-low py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-16">
          {trustStats.map((stat, i) => (
            <Reveal key={stat.label} y={20 + i * 6}>
              <div className="rounded-2xl bg-white/60 p-6 text-center shadow-[0_8px_30px_-12px_rgba(47,77,59,0.15)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(47,77,59,0.2)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm text-secondary">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features bento */}
      <section className="px-4 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-primary font-label-md tracking-widest uppercase">The Platform</p>
          <h2 className="font-headline-lg text-headline-lg mt-3">Modern tools for developmental growth</h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-4 md:grid-rows-2 md:min-h-[560px]">
          {featureCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.55 }}
              className={`flex flex-col justify-between rounded-[2rem] p-8 shadow-[0_12px_40px_-16px_rgba(47,77,59,0.18)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-16px_rgba(47,77,59,0.22)] ${card.className ?? "bg-white"}`}
            >
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 shadow-sm">
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-headline-md text-headline-md mb-3">{card.title}</h3>
                <p className="text-body-md text-on-surface-variant">{card.description}</p>
              </div>
              {card.image ? (
                <div className="mt-6 aspect-video overflow-hidden rounded-2xl bg-surface-container shadow-inner">
                  <Image src={card.image} alt={card.title} width={800} height={450} className="h-full w-full object-cover" unoptimized />
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface py-20 md:py-28" id="services">
        <div className="mx-auto max-w-6xl px-4 md:px-16">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-headline-lg text-headline-lg">Specialized services for every milestone</h2>
              <p className="text-body-md mt-3 text-secondary">
                Clinical expertise with a nurturing approach for your child&apos;s developmental journey.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 font-label-md text-primary transition hover:gap-3">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[1.75rem] bg-white shadow-[0_10px_40px_-15px_rgba(47,77,59,0.2)]"
              >
                <div className="h-56 overflow-hidden">
                  <Image
                    src={serviceImages[i]}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-headline-md text-headline-md mb-3">{service.title}</h3>
                  <p className="text-body-md mb-5 text-secondary">{service.summary}</p>
                  <Link href={`/services/${service.slug}`} className="font-label-md text-primary">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-20 md:px-16 md:py-28" id="how-it-works">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-headline-lg text-headline-lg mb-14">The Journey to Thriving</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.title} y={24 + i * 8}>
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-semibold text-on-primary shadow-lg shadow-primary/25"
                  >
                    {i + 1}
                  </motion.div>
                  <h3 className="font-headline-md text-headline-md mb-3">{step.title}</h3>
                  <p className="text-body-md max-w-xs text-secondary">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-surface-container py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-16">
          <Reveal>
            <h2 className="font-headline-lg text-headline-lg mb-8">Real stories from real families</h2>
            <div className="glass-card rounded-[1.75rem] p-8 shadow-[0_16px_50px_-20px_rgba(47,77,59,0.18)]">
              <p className="text-body-lg mb-6 font-medium italic text-on-surface">
                &ldquo;Thrive with sharuja didn&apos;t just give our daughter tools; they gave her confidence. The clinical
                expertise is evident, but the warmth is what made the difference.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1ALR6NAT-02otFYtoeZ28SfMeV7yExj434SAMvZQa0FrU1-3x9JrGL4832WF2ofHmBIK-yuVr4jrX1pOp1sbZ9vhh9uOxDhWVpMyCXyh-Z_5GHPj9KcuSCxadjX0yQT0JkBqJH7fImKKNDCHnPgvUGzQjn-ZcOZ_Qmtqv5K9h_UUdu0NZ5y3PxL6ufmz0DIj4wf2fAJFqriCOM3gAIoIFIm5YW3IjeO7DOurnEbctRZj8jWUcRvr64Y0Yze6hZcVtnGkQBcF9ZOY"
                  alt="Parent testimonial"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                  unoptimized
                />
                <div>
                  <p className="font-label-md text-on-surface">Sarah Mitchell</p>
                  <p className="text-body-sm text-secondary">Parent of 6-year-old Leo</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-[2.5rem] shadow-[0_24px_60px_-20px_rgba(47,77,59,0.25)] md:rotate-2">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvrMmv30GvqRzLwC7yMN3wdkEmn4gAQed5CkpMTR1M4JVd4q1u6dxR7fL_hYTZNg3ibyl-t01lJSShPAqSU367RVoau6FCkwJDnKKUYyjhfxVzbswLzO_Ui8gU4n4oe_emOYRTo84VFNS8scFA5r5UOOlru1iYZ0RSRv9FEOKiVmPo5yl0_sAK8rC7dOzY71ZLcQ2l0WnTo650jkTjt-E2L_RAuGI4_id5VTd5ok9UvicDp4HVEJ0TBon26g-UtOd2n68grkwYGjQ"
                  alt="Family celebrating progress"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
              <div className="glass-card absolute -bottom-6 -left-4 max-w-[240px] rounded-2xl p-5 shadow-xl md:-left-8">
                <div className="mb-2 flex gap-1 text-[#FFC107]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-body-sm font-medium">&ldquo;A life-changing platform for pediatric care.&rdquo;</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 md:px-16 md:py-28" id="pricing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 overflow-hidden rounded-[2.5rem] bg-primary p-8 shadow-[0_30px_80px_-20px_rgba(47,77,59,0.45)] md:flex-row md:p-14"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-black/10 blur-2xl" />
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="font-headline-lg text-headline-lg text-on-primary">Ready to start thriving?</h2>
            <p className="text-body-lg mt-4 text-on-primary/85">
              Book a consultation and receive a personalized therapy roadmap built around your child&apos;s strengths.
            </p>
          </div>
          <div className="relative z-10 w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl">
            <p className="text-primary font-label-md uppercase tracking-widest">Consultation</p>
            <p className="font-headline-lg text-headline-lg mt-2 text-on-background">Start today</p>
            <ul className="mt-6 space-y-4">
              {["Initial assessment with Dr. Sharuja", "Personalized therapy plan", "Parent coaching included"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-body-md text-on-surface">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="squishy-button mt-8 w-full bg-primary text-on-primary">
              <Link href="/appointment">Get Started Now</Link>
            </Button>
            <p className="text-body-sm mt-4 text-center text-secondary">Flexible scheduling · Mon–Sat · Pune clinic</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
