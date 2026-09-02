"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { LogoMark } from "@/components/brand/logo-mark";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { nav, site } from "@/lib/site";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 h-[var(--nav-height)] border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-canvas/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
          aria-label={`${site.name} home`}
        >
          <LogoMark className="h-8 w-8 shrink-0" priority />
          <span className="font-brand text-[13px] tracking-tight">
            <span className="text-crimson-400">Vibe</span>
            <span className="text-ink">Script</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group/nav relative py-1 text-sm text-ink-dim transition-colors hover:text-ink"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-crimson-400 transition-transform duration-300 ease-out group-hover/nav:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden rounded-full border border-line bg-surface-raised px-5 py-2 text-sm font-medium text-ink transition-colors hover:border-crimson-400/60 hover:text-crimson-300 lg:inline-block"
          >
            Let&apos;s Collaborate
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-line bg-canvas px-5 pb-6 lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 pt-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-ink-dim transition-colors hover:bg-surface hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-crimson-400 px-5 py-3 text-center text-sm font-medium text-silver-100"
              >
                Let&apos;s Collaborate
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
