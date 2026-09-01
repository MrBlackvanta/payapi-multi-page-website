"use client";

import { type SubmitEvent, useId, useState } from "react";

import Button from "./Button";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function emailError(value: string) {
  const email = value.trim();
  if (!email) return "Enter your email address";
  if (!EMAIL_PATTERN.test(email)) return "Please use a valid email address";
  return null;
}

type EmailCaptureProps = {
  label: string;
  className?: string;
};

export default function EmailCapture({
  label,
  className = "",
}: EmailCaptureProps) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [sent, setSent] = useState(0);

  const error = attempts > 0 ? emailError(email) : null;
  const fieldId = `${id}-email`;
  const errorId = `${id}-error`;

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setAttempts((count) => count + 1);

    if (emailError(email)) {
      setSent(0);
      form.querySelector<HTMLInputElement>("input")?.focus();
      return;
    }

    setEmail("");
    setAttempts(0);
    setSent((count) => count + 1);
  }

  return (
    <form
      noValidate
      aria-label={label}
      onSubmit={handleSubmit}
      className={className}
    >
      <div className="relative md:mx-auto md:w-111.25 lg:mx-0">
        <label htmlFor={fieldId} className="sr-only">
          Email address
        </label>
        <input
          id={fieldId}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Enter email address"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`h-12 w-full rounded-full bg-surface px-6.75 text-ui font-bold tracking-normal text-ink shadow-card outline-offset-0 placeholder:text-ink-muted md:pr-45 ${
            error ? "outline-2 outline-danger focus-visible:outline-ink" : ""
          }`}
        />
        <Button
          type="submit"
          className="mt-4 w-full md:absolute md:top-0 md:right-0 md:mt-0 md:w-43.25"
        >
          Schedule a Demo
        </Button>
      </div>

      {error && (
        <p
          key={`error-${attempts}`}
          id={errorId}
          role="alert"
          className="mt-2 px-6.75 text-note text-danger"
        >
          {error}
        </p>
      )}

      {sent > 0 && (
        <p
          key={`sent-${sent}`}
          role="status"
          className="mt-2 px-6.75 text-note text-ink"
        >
          Thanks — we’ll be in touch to book your demo.
        </p>
      )}
    </form>
  );
}
