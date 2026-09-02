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
  wide: "sm:col-span-2",
  narrow: "sm:col-span-1",
  full: "sm:col-span-3",
};

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-grotesk font-extrabold tracking-tight sm:text-5xl">
            What we do, end to end.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {services.map((service, i) => {
            const IconComponent = ICONS[service.icon];
            const tinted = service.span === "wide" || service.span === "full";
            return (
              <Reveal
                key={service.title}
                delay={(i % 3) * 0.07}
                className={SPAN_CLASS[service.span]}
              >
                <div
                  className={`group relative h-full overflow-hidden rounded-2xl border border-line p-7 transition-colors duration-300 hover:border-crimson-400/50 ${
                    tinted ? "bg-surface-raised" : "bg-surface"
                  }`}
                >
                  {tinted && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-crimson-700/25 blur-[90px] transition-opacity duration-300 group-hover:opacity-80"
                    />
                  )}
                  <div className="relative flex h-full flex-col justify-between gap-8 sm:flex-row sm:items-center sm:gap-12">
                    <div className={service.span === "narrow" ? "" : "max-w-md"}>
                      <IconComponent
                        size={22}
                        weight="duotone"
                        className="text-crimson-400"
                      />
                      <h3 className="mt-4 font-grotesk text-lg font-bold text-ink">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
