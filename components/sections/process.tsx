import { Code, Compass, PaperPlaneTilt, PenNib } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/ui/reveal";
import { process } from "@/lib/site";

const ICONS: Icon[] = [Compass, PenNib, Code, PaperPlaneTilt];

export function Process() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-grotesk font-extrabold tracking-tight sm:text-5xl">
            How a project moves.
          </h2>
        </Reveal>

        <ol className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-6">
          <div
            aria-hidden="true"
            className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] bg-line sm:block"
          />
          {process.map((step, i) => {
            const IconComponent = ICONS[i];
            return (
              <Reveal key={step.verb} as="li" delay={i * 0.09}>
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-canvas text-crimson-400">
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
