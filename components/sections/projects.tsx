"use client";

import { useState, type MouseEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/site";

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.4 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    x.set(e.clientX);
    y.set(e.clientY);
  }

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32"
      onMouseMove={handleMove}
      onMouseLeave={() => setHovered(null)}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="inline-flex rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-maroon-400">
            Portfolio
          </span>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl text-3xl font-grotesk font-extrabold tracking-tight sm:text-5xl">
              Selected work.
            </h2>
            <span className="font-mono text-sm text-ink-faint">
              {String(projects.length).padStart(2, "0")} projects
            </span>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-line">
          {projects.map((project, i) => {
            const content = (
              <div className="flex flex-col gap-3 py-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-ink-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-grotesk text-2xl font-bold text-ink transition-colors duration-300 group-hover/row:text-maroon-300 sm:text-4xl">
                      {project.title}
                    </h3>
                    {project.href && (
                      <ArrowUpRight
                        size={20}
                        weight="bold"
                        className="text-maroon-400 opacity-0 transition-all duration-300 group-hover/row:translate-x-1 group-hover/row:-translate-y-1 group-hover/row:opacity-100"
                      />
                    )}
                  </div>
                  <span className="shrink-0 rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-faint">
                    {project.tag}
                  </span>
                </div>
                <p className="max-w-lg pl-9 text-sm leading-relaxed text-ink-dim">
                  {project.description}
                </p>
              </div>
            );

            return (
              <Reveal key={project.title} delay={i * 0.06}>
                <article
                  className="group/row border-b border-line transition-colors hover:border-maroon-700/60"
                  onMouseEnter={() => setHovered(i)}
                >
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Cursor-following image preview */}
      <AnimatePresence>
        {hovered !== null && projects[hovered].image && (
          <motion.div
            key={hovered}
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ x: springX, y: springY }}
            className="pointer-events-none fixed left-0 top-0 z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
          >
            <div className="w-[300px] overflow-hidden rounded-2xl border border-line/60 bg-surface p-1.5 shadow-[0_24px_60px_rgba(107,15,39,0.25)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src={projects[hovered].image}
                  alt=""
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
