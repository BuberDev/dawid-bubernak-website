"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav, siteConfig } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-steel/70 bg-obsidian/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-10">
        <a
          href="#hero"
          className="font-display text-sm font-semibold tracking-wide text-paper"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.slice(0, -1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[13px] text-mist transition-colors hover:text-paper"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-1.5 rounded-full border border-signal/40 bg-signal/10 px-4 py-2 font-mono text-[13px] text-signal transition-colors hover:bg-signal/20"
          >
            Kontakt
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-steel text-paper lg:hidden"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-steel/70 bg-obsidian px-6 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 font-mono text-sm text-mist transition-colors hover:bg-surface hover:text-paper"
              >
                <span>{item.label}</span>
                <span className="text-fog">{item.hash}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
