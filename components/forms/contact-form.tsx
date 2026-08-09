"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Clock, Mail, Send } from "lucide-react";
import { contactInfo } from "@/data/contact";

type FieldName = "name" | "email" | "subject" | "message";
type FormErrors = Partial<Record<FieldName, string>>;

const inputBase =
  "w-full rounded-xl border border-ink/20 bg-panel px-4 py-3 text-[15px] text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink-subtle focus:border-brand focus:ring-4 focus:ring-brand/10";

function validate(formData: FormData): FormErrors {
  const values = Object.fromEntries(formData.entries());
  const errors: FormErrors = {};
  const name = String(values.name ?? "").trim();
  const email = String(values.email ?? "").trim();
  const subject = String(values.subject ?? "").trim();
  const message = String(values.message ?? "").trim();

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Please enter a valid email address.";
  if (subject.length < 2) errors.subject = "Please add a short subject.";
  if (message.length < 10) errors.message = "Please share at least a few details.";

  return errors;
}

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("Please correct the highlighted fields.");
      return;
    }

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const orderReference = String(formData.get("orderReference") ?? "").trim();
    const body = [
      `Name: ${name}`,
      `Reply email: ${email}`,
      orderReference ? `Order or account reference: ${orderReference}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    setStatus("Your email draft is ready. Review it in your email app before sending.");
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="bg-canvas">
      <div className="site-container grid gap-12 py-14 sm:py-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:py-20">
        <div className="max-w-md">
          <p className="text-sm font-semibold text-brand">Choose a contact route</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-ink">Talk to the eaglecast team</h2>
          <p className="mt-4 text-base leading-8 text-ink-muted">
            Email is the direct route for trial requests, setup help, billing questions, and technical support.
          </p>

          <div className="mt-9 divide-y divide-line border-y border-line">
            <div className="flex gap-4 py-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Mail size={18} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-ink">Support email</h3>
                <a href={`mailto:${contactInfo.email}`} className="mt-1 block text-sm font-semibold text-brand hover:text-brand-strong">
                  {contactInfo.email}
                </a>
                <p className="mt-1 text-xs leading-5 text-ink-muted">Trial, billing, setup, and technical questions.</p>
              </div>
            </div>

            <div className="flex gap-4 py-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint-soft text-mint-strong">
                <Clock size={18} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-ink">{contactInfo.hours}</h3>
                <p className="mt-1 text-xs leading-5 text-ink-muted">Include your device and account reference when relevant.</p>
              </div>
            </div>

            <div className="flex gap-4 py-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold">
                <Send size={18} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-ink">Telegram news channel</h3>
                <a
                  href={contactInfo.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm font-semibold text-brand hover:text-brand-strong"
                >
                  @eaglecastnews
                </a>
                <p className="mt-1 text-xs leading-5 text-ink-muted">Announcements and service updates—not a support inbox.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="contact-form" className="rounded-[1.5rem] border border-line bg-panel p-6 shadow-card sm:p-8 lg:p-9">
          <h2 className="text-2xl font-semibold text-ink">Prepare an email to support</h2>
          <p className="mt-2 text-sm leading-7 text-ink-muted">
            Complete the fields below and we will open a draft in your email app. Nothing is sent from this website.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" error={errors.name} required>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={inputBase}
                />
              </Field>
              <Field label="Email" name="email" error={errors.email} required>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputBase}
                />
              </Field>
            </div>

            <Field label="Subject" name="subject" error={errors.subject} required>
              <input
                id="subject"
                name="subject"
                required
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={inputBase}
              />
            </Field>

            <Field label="Message" name="message" error={errors.message} required>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${inputBase} resize-y`}
              />
            </Field>

            <label className="block" htmlFor="orderReference">
              <span className="mb-2 block text-sm font-medium text-ink">Order or account reference <span className="text-ink-subtle">(optional)</span></span>
              <input id="orderReference" name="orderReference" autoComplete="off" className={inputBase} />
            </label>

            <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-brand-strong"
              >
                <Mail size={16} aria-hidden="true" />
                Open email draft
              </button>
              <p className="text-xs leading-5 text-ink-muted sm:max-w-56 sm:text-right">
                Please review our <Link href="/privacy-policy" className="font-semibold text-brand">privacy policy</Link>.
              </p>
            </div>

            {status ? (
              <p className={`text-sm ${Object.keys(errors).length ? "text-coral" : "text-mint-strong"}`} role="status" aria-live="polite">
                {status}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  required,
  children,
}: {
  label: string;
  name: FieldName;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block" htmlFor={name}>
      <span className="mb-2 block text-sm font-medium text-ink">
        {label} {required ? <span className="text-coral" aria-hidden="true">*</span> : null}
        {required ? <span className="sr-only">(required)</span> : null}
      </span>
      {children}
      {error ? <span id={`${name}-error`} className="mt-1.5 block text-sm text-coral">{error}</span> : null}
    </label>
  );
}
