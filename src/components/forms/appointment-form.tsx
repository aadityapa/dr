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

const appointmentTypes = [
  { value: "initial-assessment", label: "Initial Assessment", duration: "60–90 min" },
  { value: "therapy-session", label: "Therapy Session", duration: "45–60 min" },
  { value: "parent-consultation", label: "Parent Consultation", duration: "30–45 min" },
] as const;

const appointmentSchema = z.object({
  appointmentType: z.string().min(1, "Please select an appointment type"),
  parentName: z.string().min(2, "Parent name is required"),
  childName: z.string().min(2, "Child name is required"),
  childAge: z.string().min(1, "Child age is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  date: z.string().min(1, "Preferred date is required"),
  timeSlot: z.string().min(1, "Please select a time slot"),
  concerns: z.string().min(8, "Please describe your therapy concern"),
});

type AppointmentInput = z.infer<typeof appointmentSchema>;

const slots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

export function AppointmentForm() {
  const [success, setSuccess] = useState<AppointmentInput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
  });

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
    setSuccess(values);
    reset();
  };

  const whatsappMessage = success
    ? encodeURIComponent(
        `Hello ${siteConfig.doctorName}, I would like to confirm my appointment request.\n\nType: ${appointmentTypes.find((t) => t.value === success.appointmentType)?.label ?? success.appointmentType}\nParent: ${success.parentName}\nChild: ${success.childName} (Age ${success.childAge})\nDate: ${success.date}\nTime: ${success.timeSlot}\nConcern: ${success.concerns}`,
      )
    : "";

  if (success) {
    return (
      <div className="rounded-2xl bg-[color:var(--color-soft-green)]/40 p-6 text-center">
        <p className="font-semibold text-[color:var(--color-sage-dark)]">Appointment request submitted!</p>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">
          We will confirm your slot shortly. For faster confirmation, message us on WhatsApp.
        </p>
        <Button asChild className="mt-4" variant="outline">
          <Link
            href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Confirm via WhatsApp
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-medium text-[color:var(--color-sage-dark)]">
          Appointment type *
        </label>
        <div className="grid gap-2 sm:grid-cols-3">
          {appointmentTypes.map((type) => (
            <label
              key={type.value}
              className="flex cursor-pointer flex-col rounded-2xl border border-[color:var(--color-border)] bg-white px-3 py-3 text-sm"
            >
              <span className="flex items-center gap-2">
                <input type="radio" value={type.value} className="shrink-0" {...register("appointmentType")} />
                <span className="font-medium text-[color:var(--color-sage-dark)]">{type.label}</span>
              </span>
              <span className="ml-6 text-xs text-[color:var(--color-muted)]">{type.duration}</span>
            </label>
          ))}
        </div>
        <p className="text-xs text-red-600">{errors.appointmentType?.message}</p>
        <p className="mt-2 text-xs text-[color:var(--color-muted)]">
          Consultation timings — Online: 11 AM – 1 PM · Offline: 9 AM – 5 PM · Monday – Saturday · By prior appointment
          only
        </p>
      </div>
      <div>
        <Input placeholder="Parent name *" {...register("parentName")} />
        <p className="text-xs text-red-600">{errors.parentName?.message}</p>
      </div>
      <div>
        <Input placeholder="Child name *" {...register("childName")} />
        <p className="text-xs text-red-600">{errors.childName?.message}</p>
      </div>
      <div>
        <Input placeholder="Child age *" {...register("childAge")} />
        <p className="text-xs text-red-600">{errors.childAge?.message}</p>
      </div>
      <div>
        <Input type="email" placeholder="Email *" {...register("email")} />
        <p className="text-xs text-red-600">{errors.email?.message}</p>
      </div>
      <div>
        <Input placeholder="Contact number *" {...register("phone")} />
        <p className="text-xs text-red-600">{errors.phone?.message}</p>
      </div>
      <div>
        <Input type="date" {...register("date")} />
        <p className="text-xs text-red-600">{errors.date?.message}</p>
      </div>
      <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-medium text-[color:var(--color-sage-dark)]">
          Preferred time *
        </label>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {slots.map((slot) => (
            <label
              key={slot}
              className="flex cursor-pointer items-center rounded-2xl border border-[color:var(--color-border)] bg-white px-3 py-2 text-sm"
            >
              <input type="radio" value={slot} className="mr-2" {...register("timeSlot")} />
              {slot}
            </label>
          ))}
        </div>
        <p className="text-xs text-red-600">{errors.timeSlot?.message}</p>
      </div>
      <div className="md:col-span-2">
        <Textarea placeholder="Therapy concern / goals *" rows={4} {...register("concerns")} />
        <p className="text-xs text-red-600">{errors.concerns?.message}</p>
      </div>
      <div className="md:col-span-2">
        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? "Submitting..." : "Book Consultation"}
        </Button>
        {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
      </div>
    </form>
  );
}
