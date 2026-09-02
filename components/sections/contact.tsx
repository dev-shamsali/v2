"use client";

import { useState, type FormEvent } from "react";
import {
  EnvelopeSimple,
  MapPin,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { Reveal } from "@/components/ui/reveal";
import { RibbonAccent } from "@/components/brand/ribbon-accent";
import { site } from "@/lib/site";

type Status = "idle" | "error" | "success";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Tell us your name.";
    if (!email) nextErrors.email = "We need an email to reply to.";
    else if (!EMAIL_RE.test(email)) nextErrors.email = "That email doesn't look right.";
    if (!message) nextErrors.message = "Add a few words about the project.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`New project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n- ${name} (${email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    form.reset();
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <RibbonAccent className="pointer-events-none absolute -left-[60px] -top-[130px] z-0 hidden h-[260px] w-[260px] opacity-80 lg:block" />
      <RibbonAccent
        flip
        className="pointer-events-none absolute -bottom-[130px] -right-[60px] z-0 hidden h-[260px] w-[260px] opacity-80 lg:block"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <Reveal>
            <span className="inline-flex rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-maroon-400">
              Get in touch
            </span>
            <h2 className="mt-4 text-3xl font-grotesk font-extrabold tracking-tight sm:text-5xl">
              Let&apos;s build something that scales.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-dim">
              Currently accepting new projects. Reach out and we&apos;ll get back to you within
              a day.
            </p>

            <ul className="mt-10 flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-sm text-ink transition-colors hover:text-maroon-300"
                >
                  <EnvelopeSimple size={18} className="text-maroon-400" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="flex items-center gap-3 text-sm text-ink transition-colors hover:text-maroon-300"
                >
                  <Phone size={18} className="text-maroon-400" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-ink transition-colors hover:text-maroon-300"
                >
                  <WhatsappLogo size={18} className="text-maroon-400" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-dim">
                <MapPin size={18} className="text-maroon-400" />
                {site.locationShort}
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5 rounded-[1.75rem] bg-line/40 p-1.5"
            >
            <div className="flex flex-col gap-5 rounded-[1.4rem] bg-surface p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] sm:p-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-ink">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="rounded-lg border border-line bg-surface-raised px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-maroon-400 focus:outline-none focus:ring-2 focus:ring-maroon-400/30"
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-maroon-300">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="rounded-lg border border-line bg-surface-raised px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-maroon-400 focus:outline-none focus:ring-2 focus:ring-maroon-400/30"
                  placeholder="you@company.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-maroon-300">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-ink">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="resize-none rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-maroon-400 focus:outline-none focus:ring-2 focus:ring-maroon-400/30"
                  placeholder="What are you looking to build?"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-maroon-300">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="group mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-maroon-400 py-2 pl-6 pr-2 text-sm font-medium text-beige-50 transition-shadow hover:shadow-[0_0_20px_rgba(168,32,64,0.4)]"
              >
                Send message
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-beige-50/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </button>

              <p role="status" aria-live="polite" className="text-xs text-ink-faint">
                {status === "success" && "Opening your email client to finish sending."}
                {status === "error" && "Check the highlighted fields and try again."}
              </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
