"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const screeningFieldIds = [
  "soundSensitivity",
  "textureAvoidance",
  "movementSeeking",
  "transitionDifficulty",
  "attentionSpan",
  "motorClumsiness",
  "handwritingConcern",
  "meltdowns",
  "selfCareDelay",
  "socialWithdrawal",
] as const;

type ScreeningFieldId = (typeof screeningFieldIds)[number];

type ScreeningInput = {
  parentName: string;
  childName: string;
  childAge: string;
  email: string;
  phone: string;
  concerns: string;
} & Record<ScreeningFieldId, boolean>;

export function ScreeningForm() {
  const { messages } = useLanguage();
  const formCopy = messages.forms.screening;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const screeningSchema = useMemo(() => {
    const booleanFields = Object.fromEntries(
      screeningFieldIds.map((id) => [id, z.boolean()]),
    ) as Record<ScreeningFieldId, z.ZodBoolean>;

    return z.object({
      parentName: z.string().min(2, formCopy.errors.parentName),
      childName: z.string().min(2, formCopy.errors.childName),
      childAge: z.string().min(1, formCopy.errors.childAge),
      email: z.string().email(formCopy.errors.email),
      phone: z.string().min(10, formCopy.errors.phone),
      concerns: z.string().min(8, formCopy.errors.concerns),
      ...booleanFields,
    });
  }, [formCopy]);

  const defaultValues = useMemo(
    () =>
      Object.fromEntries(screeningFieldIds.map((id) => [id, false])) as Record<ScreeningFieldId, boolean>,
    [],
  );

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ScreeningInput>({
    resolver: zodResolver(screeningSchema),
    defaultValues: {
      parentName: "",
      childName: "",
      childAge: "",
      email: "",
      phone: "",
      concerns: "",
      ...defaultValues,
    },
  });

  const onSubmit = async (values: ScreeningInput) => {
    setError(null);
    const res = await fetch("/api/screening", {
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
      </div>
    );
  }

  return (
    <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Input placeholder={formCopy.parentName} {...register("parentName")} />
          <p className="text-xs text-red-600">{errors.parentName?.message}</p>
        </div>
        <div>
          <Input placeholder={formCopy.childName} {...register("childName")} />
          <p className="text-xs text-red-600">{errors.childName?.message}</p>
        </div>
        <div>
          <Input placeholder={formCopy.childAge} {...register("childAge")} />
          <p className="text-xs text-red-600">{errors.childAge?.message}</p>
        </div>
        <div>
          <Input type="email" placeholder={formCopy.email} {...register("email")} />
          <p className="text-xs text-red-600">{errors.email?.message}</p>
        </div>
        <div className="md:col-span-2">
          <Input placeholder={formCopy.phone} {...register("phone")} />
          <p className="text-xs text-red-600">{errors.phone?.message}</p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[color:var(--color-sage-dark)]">{formCopy.screeningTitle}</h3>
        <div className="mt-4 space-y-3">
          {formCopy.questions.map((q) => (
            <label
              key={q.id}
              className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[color:var(--color-border)] bg-white/70 px-4 py-3 text-sm"
            >
              <input type="checkbox" className="mt-1" {...register(q.id as ScreeningFieldId)} />
              <span className="text-[color:var(--color-muted)]">{q.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <Textarea placeholder={formCopy.additionalConcerns} rows={4} {...register("concerns")} />
        <p className="text-xs text-red-600">{errors.concerns?.message}</p>
      </div>

      <div>
        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? formCopy.submitting : formCopy.submit}
        </Button>
        {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
        <p className="mt-3 text-xs text-[color:var(--color-muted)]">{formCopy.disclaimer}</p>
      </div>
    </form>
  );
}
