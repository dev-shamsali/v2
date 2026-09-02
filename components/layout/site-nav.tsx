"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { LogoMark } from "@/components/brand/logo-mark";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { nav, site } from "@/lib/site";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 transition-all duration-500 ${
          scrolled ? "sm:pt-4" : "sm:pt-6"
        }`}
      >
        <div
          className={`flex h-14 w-full max-w-3xl items-center justify-between gap-3 rounded-full border px-3 pl-4 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] sm:pr-3 ${
            scrolled || open
              ? "border-line bg-beige-100/80 shadow-[0_8px_32px_rgba(107,15,39,0.12)] backdrop-blur-xl"
              : "border-transparent bg-surface-raised/50 backdrop-blur-md"
          }`}
        >
          <a
            href="#home"
            className="group flex shrink-0 items-center gap-2.5"
            onClick={() => setOpen(false)}
            aria-label={`${site.name} home`}
          >
            <motion.div
              whileHover={{ scale: 1.06, rotate: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="relative h-8 w-14 shrink-0"
            >
              <LogoMark className="h-full w-full" priority />
            </motion.div>
            <span className="font-brand text-[13px] uppercase tracking-[0.08em] leading-none select-none">
              <span className="text-maroon-400">Vibe</span>
              <span className="text-gold-600">Script</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 ${
                  active === item.href
                    ? "text-maroon-400"
                    : "text-ink-dim hover:text-ink"
                }`}
              >
                {active === item.href && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-maroon-400/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden items-center gap-2 rounded-full bg-maroon-400 py-2 pl-4 pr-2 text-[13px] font-medium text-beige-50 shadow-[0_4px_16px_rgba(168,32,64,0.3)] transition-shadow hover:shadow-[0_6px_22px_rgba(168,32,64,0.42)] lg:inline-flex"
            >
              Let&apos;s talk
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-beige-50/20">
                <span className="text-[13px] leading-none">↗</span>
              </span>
            </motion.a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span
                className={`absolute h-[1.5px] w-4 bg-current transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-[3px] rotate-0"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-4 bg-current transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-[3px] rotate-0"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-2 bg-beige-100/95 backdrop-blur-2xl lg:hidden"
          >
            {nav.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-grotesk text-3xl font-extrabold uppercase tracking-tight text-heading"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + nav.length * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 rounded-full bg-maroon-400 px-7 py-3 text-sm font-medium text-beige-50"
            >
              Let&apos;s Collaborate
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
