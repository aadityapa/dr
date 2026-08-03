"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-data";

type AppointmentInput = {
  parentName: string;
  phone: string;
  childName: string;
  age: string;
  gender?: string;
  primaryConcern: string;
};

export function AppointmentForm() {
  const { messages } = useLanguage();
  const formCopy = messages.forms.appointment;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const appointmentSchema = useMemo(
    () =>
      z.object({
        parentName: z.string().min(2, formCopy.errors.parentName),
        phone: z.string().min(8, formCopy.errors.phone),
        childName: z.string().min(2, formCopy.errors.childName),
        age: z.string().min(1, formCopy.errors.age),
        gender: z.string().optional(),
        primaryConcern: z.string().min(10, formCopy.errors.primaryConcern),
      }),
    [formCopy],
  );

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
      setError(formCopy.error);
      return;
    }
    setSuccess(true);
    reset();
  };

  if (success) {
    return (
      <div className="rounded-2xl bg-[color:var(--color-soft-green)]/40 p-6 text-center">
        <p className="font-semibold text-[color:var(--color-sage-dark)]">{formCopy.successTitle}</p>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">{formCopy.successMessage}</p>
        <Button asChild className="mt-4" variant="outline">
          <Link href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            {formCopy.whatsappUs}
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input placeholder={formCopy.parentName} {...register("parentName")} />
        <p className="text-xs text-red-600">{errors.parentName?.message}</p>
      </div>

      <div>
        <Input type="tel" inputMode="tel" placeholder={formCopy.phone} {...register("phone")} />
        <p className="text-xs text-red-600">{errors.phone?.message}</p>
      </div>

      <div>
        <Input placeholder={formCopy.childName} {...register("childName")} />
        <p className="text-xs text-red-600">{errors.childName?.message}</p>
      </div>

      <div>
        <Input placeholder={formCopy.age} {...register("age")} />
        <p className="text-xs text-red-600">{errors.age?.message}</p>
      </div>

      <div className="md:col-span-2">
        <p className="mb-2 text-sm font-medium text-[color:var(--color-sage-dark)]">{formCopy.gender}</p>
        <div className="flex flex-wrap gap-4">
          {formCopy.genderOptions.map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-sm text-[color:var(--color-muted)]">
              <input
                type="radio"
                value={opt}
                {...register("gender")}
                className="accent-[color:var(--color-sage)]"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div className="md:col-span-2">
        <Textarea placeholder={formCopy.primaryConcern} rows={4} {...register("primaryConcern")} />
        <p className="text-xs text-red-600">{errors.primaryConcern?.message}</p>
      </div>

      <div className="md:col-span-2">
        <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
          {isSubmitting ? formCopy.submitting : formCopy.submit}
        </Button>
        {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
      </div>
    </form>
  );
}
