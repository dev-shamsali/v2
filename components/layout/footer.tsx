import { EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { LogoMark } from "@/components/brand/logo-mark";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-7 w-7" />
              <span className="font-brand text-xs tracking-tight">
                <span className="text-crimson-400">Vibe</span>
                <span className="text-ink">Script</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-faint">{site.tagline}</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ink-dim transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink"
            >
              <EnvelopeSimple size={16} />
              {site.email}
            </a>
            <a
              href={site.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink"
            >
              <WhatsappLogo size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.legalName}. All rights reserved.</p>
          <p>{site.locationShort}</p>
        </div>
      </div>
    </footer>
  );
}
