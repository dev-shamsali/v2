"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { statusItems } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);

  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-[var(--nav-height)]"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: glowY }}
        className="pointer-events-none absolute right-[-10%] top-[-10%] h-[560px] w-[560px] rounded-full bg-crimson-700/20 blur-[140px]"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: glowY }}
        className="pointer-events-none absolute -left-40 bottom-[-15%] h-[420px] w-[420px] rounded-full bg-crimson-500/10 blur-[130px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 bottom-2 select-none font-grotesk text-[5rem] font-extrabold uppercase leading-none tracking-tighter text-ink/[0.03] sm:text-[8rem] md:text-[10rem]"
      >
        Vibe
      </span>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:py-12">
        <motion.div
          initial={reduce ? false : "hidden"}
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="inline-flex -rotate-3 items-center rounded-md bg-crimson-400 px-3 py-1 font-mono text-[0.7rem] font-bold uppercase tracking-widest text-silver-100 shadow-[0_0_24px_rgba(216,38,90,0.45)]"
        >
          {statusItems[0].label}
        </motion.div>

        <h1 className="mt-5 select-none">
          <motion.span
            initial={reduce ? false : "hidden"}
            animate="visible"
            custom={0.05}
            variants={fadeUp}
            className="block font-grotesk text-[2rem] font-extrabold uppercase leading-[0.95] tracking-tight sm:text-[3rem] md:text-[3.8rem] lg:text-[4.6rem]"
          >
            Build digital
          </motion.span>
          <motion.span
            initial={reduce ? false : "hidden"}
            animate="visible"
            custom={0.13}
            variants={fadeUp}
            className="-mt-1 block pb-1 font-editorial text-[1.7rem] italic leading-[1.15] text-crimson-400 sm:text-[2.5rem] md:text-[3.1rem] lg:text-[3.7rem]"
          >
            products that actually
          </motion.span>
          <motion.span
            initial={reduce ? false : "hidden"}
            animate="visible"
            custom={0.21}
            variants={fadeUp}
            className="-mt-1 block font-grotesk text-[2rem] font-extrabold uppercase leading-[0.95] tracking-tight sm:text-[3rem] md:text-[3.8rem] lg:text-[4.6rem]"
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
            className="inline-flex items-center gap-2 rounded-full bg-crimson-400 px-6 py-3 text-sm font-medium text-silver-100 transition-colors hover:bg-crimson-300"
          >
            View Our Work
            <ArrowUpRight size={16} weight="bold" />
          </MagneticLink>
          <MagneticLink
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-crimson-400/60 hover:text-crimson-300"
          >
            Let&apos;s Collaborate
          </MagneticLink>
        </motion.div>
      </div>
    </section>
  );
}
