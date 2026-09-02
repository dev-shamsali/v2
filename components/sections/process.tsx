"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { Code, Compass, PaperPlaneTilt, PenNib } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/ui/reveal";
import { process } from "@/lib/site";

const ICONS: Icon[] = [Compass, PenNib, Code, PaperPlaneTilt];

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  return (
    <section className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="inline-flex rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-maroon-400">
            How it works
          </span>
          <h2 className="mt-4 max-w-xl text-3xl font-grotesk font-extrabold tracking-tight sm:text-5xl">
            How a project moves.
          </h2>
        </Reveal>

        <ol ref={ref} className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-6">
          {/* Track */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] bg-line sm:block"
          />
          {/* Progress fill — grows with scroll */}
          <motion.div
            aria-hidden="true"
            style={{ scaleX: reduce ? 1 : lineScale }}
            className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] origin-left bg-gradient-to-r from-maroon-700 via-maroon-400 to-gold-400 sm:block"
          />
          {process.map((step, i) => {
            const IconComponent = ICONS[i];
            return (
              <Reveal key={step.verb} as="li" delay={i * 0.09}>
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-maroon-700 bg-canvas text-maroon-400 shadow-[0_0_16px_rgba(107,15,39,0.4)]">
                      <IconComponent size={18} weight="bold" />
                    </span>
                    <span className="font-mono text-xs text-ink-faint">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-grotesk text-lg font-bold text-ink">{step.verb}</h3>
                  <p className="text-sm leading-relaxed text-ink-dim">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
