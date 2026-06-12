"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  childAge: z.string().optional(),
  concern: z.string().min(5, "Please describe your concern briefly"),
});

type FormData = z.infer<typeof schema>;

export function QuickConsultationForm() {
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
          email: "consult@thrivewithsharuja.local",
          message: `Quick consultation request.\nChild age: ${data.childAge ?? "Not specified"}\n\nConcern: ${data.concern}`,
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
          Dr. Sharuja Sarap&apos;s team will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" aria-label="Quick consultation form">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="qc-name" className="mb-1 block text-sm font-medium text-[color:var(--color-sage-dark)]">
            Parent Name
          </label>
          <Input id="qc-name" {...register("name")} placeholder="Your name" aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="qc-phone" className="mb-1 block text-sm font-medium text-[color:var(--color-sage-dark)]">
            Phone
          </label>
          <Input id="qc-phone" {...register("phone")} placeholder="9820525197" aria-invalid={!!errors.phone} />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="qc-age" className="mb-1 block text-sm font-medium text-[color:var(--color-sage-dark)]">
          Child&apos;s Age (optional)
        </label>
        <Input id="qc-age" {...register("childAge")} placeholder="e.g. 5 years" />
      </div>
      <div>
        <label htmlFor="qc-concern" className="mb-1 block text-sm font-medium text-[color:var(--color-sage-dark)]">
          Your Concern
        </label>
        <Textarea
          id="qc-concern"
          {...register("concern")}
          placeholder="Briefly describe what you're noticing..."
          rows={3}
          aria-invalid={!!errors.concern}
        />
        {errors.concern && <p className="mt-1 text-xs text-red-600">{errors.concern.message}</p>}
      </div>
      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Request a Call Back"}
      </Button>
      {status === "error" && (
        <p className="text-center text-sm text-red-600">Something went wrong. Please call 9820525197 directly.</p>
      )}
    </form>
  );
}
