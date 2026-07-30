"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormData = {
  name: string;
  phone: string;
  dateOfBirth?: string;
  concern: string;
};

export function QuickConsultationForm() {
  const { messages } = useLanguage();
  const copy = messages.forms.quickConsultation;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, copy.errors.name),
        phone: z.string().min(10, copy.errors.phone),
        dateOfBirth: z.string().optional(),
        concern: z.string().min(5, copy.errors.concern),
      }),
    [copy.errors.name, copy.errors.phone, copy.errors.concern],
  );

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
          message: `Quick consultation request.\nDate of birth: ${data.dateOfBirth || "Not specified"}\n\nConcern: ${data.concern}`,
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
        <p className="font-semibold text-[color:var(--color-sage-dark)]">{copy.successTitle}</p>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">{copy.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" aria-label={copy.formAriaLabel}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="qc-name" className="mb-1 block text-sm font-medium text-[color:var(--color-sage-dark)]">
            {copy.parentName}
          </label>
          <Input id="qc-name" {...register("name")} placeholder={copy.namePlaceholder} aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="qc-phone" className="mb-1 block text-sm font-medium text-[color:var(--color-sage-dark)]">
            {copy.phone}
          </label>
          <Input id="qc-phone" {...register("phone")} placeholder="9820505197" aria-invalid={!!errors.phone} />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="qc-dob" className="mb-1 block text-sm font-medium text-[color:var(--color-sage-dark)]">
          {copy.dateOfBirth}
        </label>
        <Input
          id="qc-dob"
          type="date"
          {...register("dateOfBirth")}
          aria-label={copy.dateOfBirthAriaLabel}
        />
      </div>
      <div>
        <label htmlFor="qc-concern" className="mb-1 block text-sm font-medium text-[color:var(--color-sage-dark)]">
          {copy.concern}
        </label>
        <Textarea
          id="qc-concern"
          {...register("concern")}
          placeholder={copy.concernPlaceholder}
          rows={3}
          aria-invalid={!!errors.concern}
        />
        {errors.concern && <p className="mt-1 text-xs text-red-600">{errors.concern.message}</p>}
      </div>
      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : copy.submit}
      </Button>
      {status === "error" && <p className="text-center text-sm text-red-600">{copy.error}</p>}
    </form>
  );
}
