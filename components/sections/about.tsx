import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { RibbonAccent } from "@/components/brand/ribbon-accent";
import { SpotlightCard } from "@/components/ui/spotlight-card";

/* ── Subtle grid background ──────────────────────────────────────────── */
function GridLines() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid-about" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--color-maroon-700)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-about)" />
    </svg>
  );
}

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <GridLines />
      <RibbonAccent className="pointer-events-none absolute -left-[60px] -top-[130px] z-0 hidden h-[260px] w-[260px] opacity-50 lg:block" />
      <RibbonAccent
        flip
        className="pointer-events-none absolute -bottom-[130px] -right-[60px] z-0 hidden h-[260px] w-[260px] opacity-50 lg:block"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <Reveal>
          <span className="inline-flex rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-maroon-400">
            Who we are
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-grotesk font-extrabold tracking-tight text-heading sm:text-5xl">
            What we&apos;re building toward.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-dim sm:text-lg">
            VibeScript specializes in fast, scalable, secure web platforms for startups and
            growing businesses.
          </p>
        </Reveal>

        {/* Brand mark — transparent, no card */}
        <Reveal delay={0.12}>
          <div className="relative mt-14 flex justify-center">
            <div
              aria-hidden="true"
              className="absolute h-64 w-64 rounded-full bg-gradient-to-br from-maroon-400/10 via-transparent to-gold-400/10 blur-2xl"
            />
            <Image
              src="/brand/vs-icon.png"
              alt="VibeScript"
              width={432}
              height={236}
              className="relative z-10 w-full max-w-[280px] object-contain sm:max-w-[340px]"
              priority
            />
          </div>
        </Reveal>

        {/* Mission / Vision */}
        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <SpotlightCard className="h-full rounded-[1.75rem] bg-line/40 p-1.5">
              <div className="h-full rounded-[1.4rem] bg-surface p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] sm:p-10">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-maroon-400">
                  Mission
                </span>
                <p className="mt-4 text-xl leading-relaxed text-ink sm:text-2xl">
                  To transform ideas into high-performance digital products through clean
                  engineering, modern UX, and scalable architectures.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.18}>
            <SpotlightCard className="h-full rounded-[1.75rem] bg-line/40 p-1.5">
              <div className="h-full rounded-[1.4rem] bg-surface p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] sm:p-10">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-maroon-400">
                  Vision
                </span>
                <p className="mt-4 text-xl leading-relaxed text-ink sm:text-2xl">
                  To become a trusted technology partner delivering world-class digital
                  products across industries and global markets.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
