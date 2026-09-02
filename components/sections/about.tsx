import { Reveal } from "@/components/ui/reveal";
import { RibbonAccent } from "@/components/brand/ribbon-accent";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <RibbonAccent className="pointer-events-none absolute -left-[60px] -top-[130px] z-0 hidden h-[260px] w-[260px] opacity-80 lg:block" />
      <RibbonAccent
        flip
        className="pointer-events-none absolute -bottom-[130px] -right-[60px] z-0 hidden h-[260px] w-[260px] opacity-80 lg:block"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-grotesk font-extrabold tracking-tight sm:text-5xl">
            What we&apos;re building toward.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-dim sm:text-lg">
            VibeScript specializes in fast, scalable, secure web platforms for startups and
            growing businesses.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-line pt-12 lg:grid-cols-2 lg:gap-16 lg:divide-x lg:divide-line">
          <Reveal delay={0.1} className="lg:pr-16">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-crimson-400">
              Mission
            </span>
            <p className="mt-4 text-xl leading-relaxed text-ink sm:text-2xl">
              To transform ideas into high-performance digital products through clean
              engineering, modern UX, and scalable architectures.
            </p>
          </Reveal>
          <Reveal delay={0.18} className="lg:pl-16">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-crimson-400">
              Vision
            </span>
            <p className="mt-4 text-xl leading-relaxed text-ink sm:text-2xl">
              To become a trusted technology partner delivering world-class digital products
              across industries and global markets.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
