"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { LibraryResource } from "@/lib/library-resources";

type LibraryDownloadFormProps = {
  resource: LibraryResource;
};

export function LibraryDownloadForm({ resource }: LibraryDownloadFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/library", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, resourceId: resource.id, resourceTitle: resource.title }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage(`Thank you! Your download link for "${resource.title}" has been sent to ${email}.`);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please call 9820525197 or email sharujasaraf@gmail.com.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[color:var(--color-sage)]/30 bg-[color:var(--color-soft-green)]/30 p-6 text-center">
        <Download className="mx-auto h-8 w-8 text-[color:var(--color-sage-dark)]" aria-hidden="true" />
        <p className="mt-3 text-sm text-[color:var(--color-sage-dark)]">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor={`name-${resource.id}`} className="mb-1.5 block text-sm font-medium text-[color:var(--color-sage-dark)]">
          Parent Name
        </label>
        <Input
          id={`name-${resource.id}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor={`email-${resource.id}`} className="mb-1.5 block text-sm font-medium text-[color:var(--color-sage-dark)]">
          Email
        </label>
        <Input
          id={`email-${resource.id}`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor={`phone-${resource.id}`} className="mb-1.5 block text-sm font-medium text-[color:var(--color-sage-dark)]">
          Phone (optional)
        </label>
        <Input
          id={`phone-${resource.id}`}
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="9820525197"
        />
      </div>
      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Download className="mr-2 h-4 w-4" aria-hidden="true" />
            Download Free Guide
          </>
        )}
      </Button>
      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {message}
        </p>
      )}
      <p className="text-xs text-[color:var(--color-muted)]">
        By downloading, you agree to receive occasional parent resources from Thrive with sharuja. Unsubscribe anytime.
      </p>
    </form>
  );
}
