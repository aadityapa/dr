"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  organisation: z.string().min(2, "Organisation is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  eventType: z.string().min(2, "Event type is required"),
  message: z.string().min(20, "Please describe your program or event"),
  consent: z.literal(true, { message: "Consent is required" }),
});

type FormData = z.infer<typeof schema>;

export function InviteInquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parentName: data.name,
          phone: data.phone,
          email: data.email,
          message: `Invite Sharuja Inquiry\nOrganisation: ${data.organisation}\nEvent type: ${data.eventType}\n\n${data.message}`,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-[color:var(--color-soft-green)]/50 p-6 text-center">
        <p className="font-semibold text-[color:var(--color-sage-dark)]">Thank you!</p>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">
          Your inquiry has been sent. We&apos;ll respond within 2–3 working days.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Your Name *" {...register("name")} />
      <p className="text-xs text-red-600">{errors.name?.message}</p>
      <Input placeholder="Organisation / School *" {...register("organisation")} />
      <p className="text-xs text-red-600">{errors.organisation?.message}</p>
      <Input type="email" placeholder="Email *" {...register("email")} />
      <p className="text-xs text-red-600">{errors.email?.message}</p>
      <Input placeholder="Phone *" {...register("phone")} />
      <p className="text-xs text-red-600">{errors.phone?.message}</p>
      <Input placeholder="Event Type (e.g. Parent Workshop, School Training) *" {...register("eventType")} />
      <p className="text-xs text-red-600">{errors.eventType?.message}</p>
      <Textarea placeholder="Tell us about your program, audience, and preferred dates *" rows={5} {...register("message")} />
      <p className="text-xs text-red-600">{errors.message?.message}</p>
      <label className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
        <input type="checkbox" className="mt-1" {...register("consent")} />
        I consent to being contacted about this inquiry. *
      </label>
      <p className="text-xs text-red-600">{errors.consent?.message}</p>
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </Button>
      {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please email sharujasaraf@gmail.com</p>}
    </form>
  );
}
