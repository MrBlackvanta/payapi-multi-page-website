"use client";

import { type SubmitEvent, useId, useState } from "react";

import { CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { contactFields } from "@/data";

const REQUIRED = "This field is required";
const INVALID_EMAIL = "Please use a valid email address";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Values = {
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
  updates: boolean;
};

const emptyValues: Values = {
  name: "",
  email: "",
  company: "",
  title: "",
  message: "",
  updates: false,
};

type Errors = Partial<Record<keyof Values, string>>;

function collectErrors(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = REQUIRED;
  if (!values.email.trim()) errors.email = REQUIRED;
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = INVALID_EMAIL;
  if (!values.message.trim()) errors.message = REQUIRED;
  return errors;
}

const fieldBase =
  "text-ui block w-full border-b bg-transparent pb-4 pl-5 text-ink focus:border-ink focus:outline-none";
const fieldRest = "border-field-line placeholder:text-ink-muted";
const fieldInvalid = "border-danger placeholder:text-danger";

export default function ContactForm({
  className = "",
}: {
  className?: string;
}) {
  const id = useId();
  const [values, setValues] = useState(emptyValues);
  const [attempts, setAttempts] = useState(0);
  const [sent, setSent] = useState(0);

  const errors = attempts > 0 ? collectErrors(values) : {};
  const fieldId = (name: string) => `${id}-${name}`;
  const errorId = (name: string) => `${id}-${name}-error`;

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setAttempts((count) => count + 1);

    const [firstInvalid] = Object.keys(collectErrors(values));
    if (firstInvalid) {
      setSent(0);
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setValues(emptyValues);
    setAttempts(0);
    setSent((count) => count + 1);
  }

  function update(name: keyof Values, value: string | boolean) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  function fieldClass(name: keyof Values) {
    return `${fieldBase} ${errors[name] ? fieldInvalid : fieldRest}`;
  }

  function errorFor(name: keyof Values) {
    if (!errors[name]) return null;
    return (
      <p
        key={`${name}-${attempts}`}
        id={errorId(name)}
        role="alert"
        className="mt-1 pl-5 text-note text-danger"
      >
        {errors[name]}
      </p>
    );
  }

  return (
    <form
      noValidate
      aria-label="Submit a help request"
      onSubmit={handleSubmit}
      className={`flex flex-col gap-6 ${className}`}
    >
      {contactFields.map(({ name, label, type, autoComplete }) => (
        <div key={name}>
          <label htmlFor={fieldId(name)} className="sr-only">
            {label}
          </label>
          <input
            id={fieldId(name)}
            name={name}
            type={type}
            autoComplete={autoComplete}
            placeholder={label}
            value={values[name]}
            onChange={(event) => update(name, event.currentTarget.value)}
            aria-invalid={Boolean(errors[name])}
            aria-describedby={errors[name] ? errorId(name) : undefined}
            className={fieldClass(name)}
          />
          {errorFor(name)}
        </div>
      ))}

      <div>
        <label htmlFor={fieldId("message")} className="sr-only">
          Message
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={1}
          placeholder="Message"
          value={values.message}
          onChange={(event) => update("message", event.currentTarget.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? errorId("message") : undefined}
          className={`${fieldClass("message")} min-h-22.25 resize-y`}
        />
        {errorFor("message")}
      </div>

      <div className="flex gap-6.5">
        <span className="relative mt-3.25 flex size-6 shrink-0">
          <input
            id={fieldId("updates")}
            name="updates"
            type="checkbox"
            checked={values.updates}
            onChange={(event) => update("updates", event.currentTarget.checked)}
            className="peer size-6 cursor-pointer appearance-none border border-checkbox-line bg-ink/25 checked:border-accent checked:bg-accent"
          />
          <CheckIcon
            aria-hidden="true"
            className="pointer-events-none absolute top-2 left-1.5 w-2.75 stroke-3 text-white opacity-0 peer-checked:opacity-100"
          />
        </span>
        <label
          htmlFor={fieldId("updates")}
          className="cursor-pointer text-ui text-ink"
        >
          Stay up-to-date with company announcements and updates to our API
        </label>
      </div>

      <Button type="submit" variant="dark" className="w-38">
        Submit
      </Button>

      {sent > 0 && (
        <p key={`sent-${sent}`} role="status" className="text-ui text-ink">
          Thanks for getting in touch — we’ll reply shortly.
        </p>
      )}
    </form>
  );
}
