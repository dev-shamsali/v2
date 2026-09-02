import {
  Gauge,
  HardDrives,
  Plugs,
  Rocket,
  ShieldCheck,
  Stack,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { services } from "@/lib/site";

const ICONS: Record<string, Icon> = {
  Stack,
  HardDrives,
  Plugs,
  Rocket,
  ShieldCheck,
  Gauge,
};

const SPAN_CLASS: Record<string, string> = {
  wide: "sm:col-span-2 lg:col-span-2",
  narrow: "sm:col-span-1",
  full: "sm:col-span-2 lg:col-span-3",
};

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="inline-flex rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-maroon-400">
            Services
          </span>
          <h2 className="mt-4 max-w-xl text-3xl font-grotesk font-extrabold tracking-tight sm:text-5xl">
            What we do, end to end.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const IconComponent = ICONS[service.icon];
            const tinted = service.span === "wide" || service.span === "full";
            return (
              <Reveal
                key={service.title}
                delay={(i % 3) * 0.07}
                className={SPAN_CLASS[service.span]}
              >
                {/* Double-bezel: outer shell + inner core */}
                <SpotlightCard className="h-full rounded-[1.75rem] bg-line/40 p-1.5">
                  <div
                    className={`relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-[1.4rem] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-0.5 sm:flex-row sm:items-center sm:gap-12 sm:p-7 ${
                      tinted ? "bg-surface-raised" : "bg-surface"
                    }`}
                  >
                    {tinted && (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-maroon-700/20 blur-[90px]"
                      />
                    )}
                    <div className={`relative ${service.span === "narrow" ? "" : "max-w-md"}`}>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-maroon-400/10">
                        <IconComponent size={20} weight="duotone" className="text-maroon-400" />
                      </span>
                      <h3 className="mt-4 font-grotesk text-lg font-bold text-ink">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
