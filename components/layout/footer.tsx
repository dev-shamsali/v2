import { EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { LogoMark } from "@/components/brand/logo-mark";
import { nav, site } from "@/lib/site";

/* ── Decorative SVG wave for footer top ─────────────────────────────── */
function FooterWave() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className="absolute -top-px inset-x-0 w-full h-[60px] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
        fill="var(--color-surface)"
        opacity="0.4"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-canvas">
      <FooterWave />
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            {/* Logo + wordmark */}
            <div className="flex items-center gap-3">
              <div className="h-7 w-[3.3rem] shrink-0">
                <LogoMark className="h-full w-full" />
              </div>
              <span className="font-brand text-xs uppercase tracking-[0.08em] leading-none">
                <span className="text-maroon-400">Vibe</span>
                <span className="text-gold-600">Script</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-faint">{site.tagline}</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ink-dim transition-colors hover:text-maroon-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-maroon-300"
            >
              <EnvelopeSimple size={16} className="text-maroon-400" />
              {site.email}
            </a>
            <a
              href={site.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-maroon-300"
            >
              <WhatsappLogo size={16} className="text-maroon-400" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.legalName}. All rights reserved.</p>
          <p>{site.locationShort}</p>
          <a
            href="#home"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1.5 transition-colors hover:border-maroon-400/60 hover:text-maroon-300"
          >
            Back to top
            <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-0.5">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
