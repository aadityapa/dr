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
    try {
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
    } catch {
      setError(formCopy.error);
    }
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
        <label htmlFor="appt-parent-name" className="sr-only">
          {formCopy.parentName}
        </label>
        <Input
          id="appt-parent-name"
          autoComplete="name"
          placeholder={formCopy.parentName}
          aria-invalid={Boolean(errors.parentName)}
          aria-describedby={errors.parentName ? "appt-parent-name-error" : undefined}
          {...register("parentName")}
        />
        {errors.parentName ? (
          <p id="appt-parent-name-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.parentName.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="appt-phone" className="sr-only">
          {formCopy.phone}
        </label>
        <Input
          id="appt-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder={formCopy.phone}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "appt-phone-error" : undefined}
          {...register("phone")}
        />
        {errors.phone ? (
          <p id="appt-phone-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.phone.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="appt-child-name" className="sr-only">
          {formCopy.childName}
        </label>
        <Input
          id="appt-child-name"
          placeholder={formCopy.childName}
          aria-invalid={Boolean(errors.childName)}
          aria-describedby={errors.childName ? "appt-child-name-error" : undefined}
          {...register("childName")}
        />
        {errors.childName ? (
          <p id="appt-child-name-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.childName.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="appt-age" className="sr-only">
          {formCopy.age}
        </label>
        <Input
          id="appt-age"
          placeholder={formCopy.age}
          aria-invalid={Boolean(errors.age)}
          aria-describedby={errors.age ? "appt-age-error" : undefined}
          {...register("age")}
        />
        {errors.age ? (
          <p id="appt-age-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.age.message}
          </p>
        ) : null}
      </div>

      <fieldset className="md:col-span-2">
        <legend className="mb-2 text-sm font-medium text-[color:var(--color-sage-dark)]">{formCopy.gender}</legend>
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
      </fieldset>

      <div className="md:col-span-2">
        <label htmlFor="appt-concern" className="sr-only">
          {formCopy.primaryConcern}
        </label>
        <Textarea
          id="appt-concern"
          placeholder={formCopy.primaryConcern}
          rows={4}
          aria-invalid={Boolean(errors.primaryConcern)}
          aria-describedby={errors.primaryConcern ? "appt-concern-error" : undefined}
          {...register("primaryConcern")}
        />
        {errors.primaryConcern ? (
          <p id="appt-concern-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.primaryConcern.message}
          </p>
        ) : null}
      </div>

      <div className="md:col-span-2">
        <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
          {isSubmitting ? formCopy.submitting : formCopy.submit}
        </Button>
        {error ? <p role="alert" className="mt-3 text-sm text-red-600">{error}</p> : null}
      </div>
    </form>
  );
}
