import { nav, siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-steel/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between lg:px-10 lg:pl-28">
        <a href="#hero" className="font-display text-sm text-paper">
          {siteConfig.name}
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[12px] text-fog transition-colors hover:text-mist"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="font-mono text-[11px] text-fog">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
