"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-data";

const concernOptions = [
  "Sensory Processing",
  "Attention & Focus",
  "Autism",
  "Developmental Delay",
  "Learning Difficulties",
  "Handwriting",
  "Motor Coordination",
  "Emotional Regulation",
  "Feeding",
  "Other",
] as const;

const previousTherapyOptions = [
  "Occupational Therapy",
  "Speech Therapy",
  "Physiotherapy",
  "Special Education",
  "None",
] as const;

const appointmentSchema = z.object({
  parentName: z.string().min(2, "Parent name is required"),
  fatherName: z.string().optional(),
  motherName: z.string().optional(),
  guardianName: z.string().optional(),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  childName: z.string().min(2, "Child name is required"),
  dateOfBirth: z.string().optional(),
  age: z.string().min(1, "Child age is required"),
  gender: z.string().optional(),
  schoolGrade: z.string().optional(),
  concerns: z.array(z.string()).min(1, "Select at least one concern"),
  hasDiagnosis: z.enum(["yes", "no"], { message: "Please select" }),
  previousTherapies: z.array(z.string()).optional(),
  biggestConcern: z.string().min(10, "Please share your biggest concern"),
  preferredTime: z.string().min(1, "Preferred time is required"),
  consent: z.literal(true, { message: "Consent is required" }),
});

type AppointmentInput = z.infer<typeof appointmentSchema>;

const timeSlots = ["Morning (9–12)", "Afternoon (12–3)", "Late Afternoon (3–5)", "Saturday Morning"];

export function AppointmentForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { concerns: [], previousTherapies: [], hasDiagnosis: undefined },
  });

  const selectedConcerns = watch("concerns") ?? [];
  const selectedTherapies = watch("previousTherapies") ?? [];

  function toggleConcern(value: string) {
    const next = selectedConcerns.includes(value)
      ? selectedConcerns.filter((c) => c !== value)
      : [...selectedConcerns, value];
    setValue("concerns", next, { shouldValidate: true });
  }

  function toggleTherapy(value: string) {
    const next = selectedTherapies.includes(value)
      ? selectedTherapies.filter((t) => t !== value)
      : [...selectedTherapies, value];
    setValue("previousTherapies", next);
  }

  const onSubmit = async (values: AppointmentInput) => {
    setError(null);
    const res = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      setError("Something went wrong. Please call us directly or try WhatsApp.");
      return;
    }
    setSuccess(true);
    reset();
  };

  if (success) {
    return (
      <div className="rounded-2xl bg-[color:var(--color-soft-green)]/40 p-6 text-center">
        <p className="font-semibold text-[color:var(--color-sage-dark)]">Thank you — we received your request!</p>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">
          We will contact you within 24 hours. For faster response, message us on WhatsApp.
        </p>
        <Button asChild className="mt-4" variant="outline">
          <Link href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input placeholder="Parent Name *" {...register("parentName")} />
        <p className="text-xs text-red-600">{errors.parentName?.message}</p>
      </div>
      <div>
        <Input placeholder="Father Name" {...register("fatherName")} />
      </div>
      <div>
        <Input placeholder="Mother Name" {...register("motherName")} />
      </div>
      <div>
        <Input placeholder="Guardian Name" {...register("guardianName")} />
      </div>
      <div>
        <Input placeholder="Phone *" {...register("phone")} />
        <p className="text-xs text-red-600">{errors.phone?.message}</p>
      </div>
      <div>
        <Input type="email" placeholder="Email *" {...register("email")} />
        <p className="text-xs text-red-600">{errors.email?.message}</p>
      </div>
      <div>
        <Input placeholder="Child Name *" {...register("childName")} />
        <p className="text-xs text-red-600">{errors.childName?.message}</p>
      </div>
      <div>
        <Input type="date" placeholder="Date of Birth" {...register("dateOfBirth")} />
      </div>
      <div>
        <Input placeholder="Age *" {...register("age")} />
        <p className="text-xs text-red-600">{errors.age?.message}</p>
      </div>
      <div>
        <Input placeholder="Gender" {...register("gender")} />
      </div>
      <div>
        <Input placeholder="School Grade" {...register("schoolGrade")} />
      </div>

      <div className="md:col-span-2">
        <p className="mb-2 text-sm font-medium text-[color:var(--color-sage-dark)]">Concerns *</p>
        <div className="flex flex-wrap gap-2">
          {concernOptions.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => toggleConcern(c)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                selectedConcerns.includes(c)
                  ? "border-[color:var(--color-sage)] bg-[color:var(--color-sage)] text-white"
                  : "border-[color:var(--color-border)] bg-white text-[color:var(--color-muted)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="text-xs text-red-600">{errors.concerns?.message}</p>
      </div>

      <div className="md:col-span-2">
        <p className="mb-2 text-sm font-medium text-[color:var(--color-sage-dark)]">Diagnosis</p>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" value="yes" {...register("hasDiagnosis")} />
            Yes
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" value="no" {...register("hasDiagnosis")} />
            No
          </label>
        </div>
        <p className="text-xs text-red-600">{errors.hasDiagnosis?.message}</p>
      </div>

      <div className="md:col-span-2">
        <p className="mb-2 text-sm font-medium text-[color:var(--color-sage-dark)]">Previous Therapies</p>
        <div className="flex flex-wrap gap-2">
          {previousTherapyOptions.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => toggleTherapy(t)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                selectedTherapies.includes(t)
                  ? "border-[color:var(--color-sage)] bg-[color:var(--color-sage)]/10 text-[color:var(--color-sage-dark)]"
                  : "border-[color:var(--color-border)] bg-white text-[color:var(--color-muted)]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="md:col-span-2">
        <Textarea placeholder="Biggest Concern *" rows={3} {...register("biggestConcern")} />
        <p className="text-xs text-red-600">{errors.biggestConcern?.message}</p>
      </div>

      <div className="md:col-span-2">
        <p className="mb-2 text-sm font-medium text-[color:var(--color-sage-dark)]">Preferred Appointment Time *</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {timeSlots.map((slot) => (
            <label
              key={slot}
              className="flex cursor-pointer items-center rounded-xl border border-[color:var(--color-border)] bg-white px-3 py-2.5 text-sm"
            >
              <input type="radio" value={slot} className="mr-2" {...register("preferredTime")} />
              {slot}
            </label>
          ))}
        </div>
        <p className="text-xs text-red-600">{errors.preferredTime?.message}</p>
      </div>

      <div className="md:col-span-2">
        <label className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
          <input type="checkbox" className="mt-1" {...register("consent")} />
          <span>
            I consent to Thrive With Sharuja contacting me about this consultation request and storing my information
            for scheduling purposes. *
          </span>
        </label>
        <p className="text-xs text-red-600">{errors.consent?.message}</p>
      </div>

      <div className="md:col-span-2">
        <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
          {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
        </Button>
        {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
      </div>
    </form>
  );
}
