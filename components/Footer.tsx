import { ArrowUp, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, XSocialIcon } from "@/components/ui/social-icons";
import { nav, siteConfig, hero } from "@/lib/content";

const columnLinks = [
  { heading: "Nawigacja", items: nav.slice(0, 4) },
  { heading: "Więcej", items: nav.slice(4) },
];

const socialLinks = [
  { label: "GitHub", href: siteConfig.social.github, icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedinIcon },
  { label: "X", href: siteConfig.social.x, icon: XSocialIcon },
];

export function Footer() {
  return (
    <footer className="relative border-t border-steel/60 pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-signal/60 to-ember/60" />

      <div className="mx-auto max-w-6xl px-6 pb-10 lg:px-10 lg:pl-28">
        <div className="grid gap-12 border-b border-steel/60 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
          <div>
            <a href="#hero" className="font-display text-lg text-paper">
              {siteConfig.name}
            </a>
            <p className="mt-1 font-mono text-[12px] text-signal">{siteConfig.role}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
              {hero.subheadline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-steel text-mist transition-colors hover:border-signal hover:text-signal"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columnLinks.map((column) => (
            <div key={column.heading}>
              <p className="font-mono text-[11px] tracking-wide text-fog">{column.heading}</p>
              <ul className="mt-4 space-y-3">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-mist transition-colors hover:text-paper"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-mono text-[11px] tracking-wide text-fog">Kontakt</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-mist transition-colors hover:text-paper"
                >
                  <Mail className="h-4 w-4 text-signal" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-mist">
                <MapPin className="h-4 w-4 text-ember" />
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-8 sm:flex-row sm:justify-between">
          <p className="font-mono text-[11px] text-fog">
            © {new Date().getFullYear()} {siteConfig.name}. Wszelkie prawa zastrzeżone.
          </p>
          <p className="font-mono text-[11px] text-fog">Zbudowane w Next.js i wdrożone na Vercel</p>
          <a
            href="#hero"
            className="inline-flex items-center gap-2 rounded-full border border-steel px-4 py-2 font-mono text-[11px] text-mist transition-colors hover:border-fog hover:text-paper"
          >
            Do góry
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
