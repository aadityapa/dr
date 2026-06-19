"use client";

import { useId, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Mail } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type FormData = { email: string };

type NewsletterSignupProps = {
  className?: string;
};

export function NewsletterSignup({ className }: NewsletterSignupProps) {
  const { messages } = useLanguage();
  const formCopy = messages.forms.newsletter;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const emailId = useId();

  const schema = useMemo(
    () => z.object({ email: z.string().email(formCopy.emailError) }),
    [formCopy.emailError],
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
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={cn("rounded-3xl border border-[color:var(--color-border)] bg-white/80 p-6 md:p-8", className)}>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-soft-green)]">
          <Mail className="h-5 w-5 text-[color:var(--color-sage-dark)]" aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-sage-dark)]">
            {formCopy.title}
          </h2>
          <p className="text-sm text-[color:var(--color-muted)]">{formCopy.description}</p>
        </div>
      </div>

      {status === "success" ? (
        <div className="mt-5 rounded-2xl bg-[color:var(--color-soft-green)]/50 p-4 text-sm font-medium text-[color:var(--color-sage-dark)]">
          {formCopy.success}
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5" aria-label="Newsletter signup form">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex-1">
              <label htmlFor={emailId} className="sr-only">
                {formCopy.emailLabel}
              </label>
              <Input
                id={emailId}
                type="email"
                autoComplete="email"
                placeholder={formCopy.placeholder}
                aria-invalid={!!errors.email}
                {...register("email")}
              />
            </div>
            <Button type="submit" disabled={status === "loading"} className="sm:w-auto">
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                formCopy.subscribe
              )}
            </Button>
          </div>
          {errors.email && <p className="mt-2 text-xs text-red-600">{errors.email.message}</p>}
          {status === "error" && <p className="mt-2 text-xs text-red-600">{formCopy.error}</p>}
        </form>
      )}
    </div>
  );
}
