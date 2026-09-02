"use client";

import { useRef, useState, type MouseEvent } from "react";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "motion/react";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { statusItems } from "@/lib/site";

const CAPABILITIES = [
  "Full-Stack Development",
  "SaaS Platforms",
  "API Engineering",
  "UI/UX Design",
  "Cloud Infrastructure",
  "Performance Tuning",
];

/* ── Dot grid — darker dots visible on beige ─────────────────────────── */
function DotGrid() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="var(--color-maroon-700)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [cursor, setCursor] = useState({ x: 50, y: 40 });

  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 160]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const smoothContentY = useSpring(contentY, { stiffness: 60, damping: 20 });

  function handlePointerMove(e: MouseEvent<HTMLElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handlePointerMove}
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-[var(--nav-height)]"
    >
      <DotGrid />

      {/* Cursor-reactive spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden transition-[background] duration-300 ease-out sm:block"
        style={{
          background: `radial-gradient(480px circle at ${cursor.x}% ${cursor.y}%, color-mix(in oklab, var(--color-maroon-300) 12%, transparent), transparent 70%)`,
        }}
      />

      {/* Soft maroon glow — tuned for beige canvas */}
      <motion.div
        aria-hidden="true"
        style={{ y: glowY }}
        className="pointer-events-none absolute right-[-8%] top-[-12%] h-[640px] w-[640px] rounded-full bg-maroon-300/15 blur-[160px] animate-pulse-glow"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: glowY }}
        className="pointer-events-none absolute -left-48 bottom-[-18%] h-[480px] w-[480px] rounded-full bg-maroon-400/10 blur-[140px]"
      />
      {/* Gold glow centre */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-gold-400/10 blur-[100px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 bottom-2 select-none font-grotesk text-[5rem] font-extrabold uppercase leading-none tracking-tighter text-maroon-900/[0.04] sm:text-[8rem] md:text-[10rem]"
      >
        Vibe
      </span>

      {/* Content — parallaxes out on scroll */}
      <motion.div
        style={reduce ? {} : { y: smoothContentY, opacity: contentOpacity }}
        className="relative mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:py-12"
      >
        {/* Status badge */}
        <motion.div
          initial={reduce ? false : "hidden"}
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="inline-flex -rotate-3 items-center gap-2 rounded-md bg-maroon-400 px-3 py-1 font-mono text-[0.7rem] font-bold uppercase tracking-widest text-beige-50 shadow-[0_4px_20px_rgba(168,32,64,0.35)]"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-beige-100 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-beige-50" />
          </span>
          {statusItems[0].label}
        </motion.div>

        <h1 className="mt-5 select-none">
          <motion.span
            initial={reduce ? false : "hidden"}
            animate="visible"
            custom={0.05}
            variants={fadeUp}
            className="block font-grotesk text-[2rem] font-extrabold uppercase leading-[0.95] tracking-tight text-heading sm:text-[3rem] md:text-[3.8rem] lg:text-[4.6rem]"
          >
            Build digital
          </motion.span>
          <motion.span
            initial={reduce ? false : "hidden"}
            animate="visible"
            custom={0.13}
            variants={fadeUp}
            className="-mt-1 block pb-1 font-editorial text-[1.7rem] italic leading-[1.15] text-maroon-400 sm:text-[2.5rem] md:text-[3.1rem] lg:text-[3.7rem]"
          >
            products that actually
          </motion.span>
          <motion.span
            initial={reduce ? false : "hidden"}
            animate="visible"
            custom={0.21}
            variants={fadeUp}
            className="-mt-1 block font-grotesk text-[2rem] font-extrabold uppercase leading-[0.95] tracking-tight text-heading sm:text-[3rem] md:text-[3.8rem] lg:text-[4.6rem]"
          >
            scale.
          </motion.span>
        </h1>

        <motion.p
          initial={reduce ? false : "hidden"}
          animate="visible"
          custom={0.32}
          variants={fadeUp}
          className="mt-6 max-w-md text-base leading-relaxed text-ink-dim sm:text-lg"
        >
          VibeScript is a digital solutions studio helping startups and businesses build
          scalable platforms, high-performance websites, and modern SaaS products.
        </motion.p>

        <motion.div
          initial={reduce ? false : "hidden"}
          animate="visible"
          custom={0.4}
          variants={fadeUp}
          className="mt-7 flex flex-wrap items-center gap-4"
        >
          <MagneticLink
            href="#projects"
            className="group inline-flex items-center gap-3 rounded-full bg-maroon-400 py-2 pl-6 pr-2 text-sm font-medium text-beige-50 shadow-[0_4px_20px_rgba(168,32,64,0.3)] transition-shadow duration-300 hover:shadow-[0_6px_28px_rgba(168,32,64,0.45)]"
          >
            View Our Work
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-beige-50/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </MagneticLink>
          <MagneticLink
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-maroon-400 px-6 py-3 text-sm font-medium text-maroon-400 transition-all hover:bg-maroon-400 hover:text-beige-50"
          >
            Let&apos;s Collaborate
          </MagneticLink>
        </motion.div>

        {/* Capability marquee */}
        <motion.div
          initial={reduce ? false : "hidden"}
          animate="visible"
          custom={0.5}
          variants={fadeUp}
          className="relative mt-14 max-w-xl overflow-hidden border-t border-line pt-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="flex w-max gap-8 animate-marquee">
            {[...CAPABILITIES, ...CAPABILITIES].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex shrink-0 items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-faint"
              >
                <span className="h-1 w-1 rounded-full bg-maroon-400" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
