import { Browsers, CheckCircle, PaintBrush, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/ui/reveal";
import { statusItems } from "@/lib/site";

const ICONS: Record<string, Icon> = {
  CheckCircle,
  Browsers,
  ShieldCheck,
  PaintBrush,
};

export function StatusStrip() {
  return (
    <section className="border-y border-line bg-surface/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ul className="grid grid-cols-2 divide-y divide-line lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
          {statusItems.map((item, i) => {
            const IconComponent = ICONS[item.icon];
            return (
              <Reveal key={item.label} as="li" delay={i * 0.06} y={12}>
                <div className="flex items-center gap-3 px-1 py-5 lg:justify-center lg:px-6">
                  <IconComponent size={18} weight="fill" className="shrink-0 text-crimson-400" />
                  <span className="text-sm text-ink-dim">{item.label}</span>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
