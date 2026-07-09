"use client";

import { useEffect, useState } from "react";
import { railSections } from "@/lib/content";
import { cn } from "@/lib/cn";

export function ScrollRail() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, Math.max(0, scrollTop / height)) : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-50 h-[2px] bg-steel/50 lg:hidden"
        aria-hidden="true"
      >
        <div
          className="h-full bg-linear-to-r from-signal to-ember"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <nav
        aria-label="Postęp przewijania strony"
        className="fixed left-8 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      >
        <div className="relative h-[58vh] w-px bg-steel/70">
          <div
            className="absolute left-0 top-0 w-px bg-linear-to-b from-signal to-ember"
            style={{ height: `${progress * 100}%` }}
            aria-hidden="true"
          />
          {railSections.map((section, index) => {
            const position = railSections.length > 1 ? index / (railSections.length - 1) : 0;
            const active = progress >= position - 0.015;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group absolute left-0 flex -translate-y-1/2 items-center gap-3 py-2"
                style={{ top: `${position * 100}%` }}
              >
                <span
                  className={cn(
                    "block h-[9px] w-[9px] -translate-x-1/2 rounded-full border transition-colors duration-300",
                    active
                      ? "border-signal bg-signal shadow-[0_0_10px_var(--color-signal)]"
                      : "border-steel bg-obsidian group-hover:border-fog",
                  )}
                />
                <span
                  className={cn(
                    "font-mono whitespace-nowrap text-[11px] tracking-wide opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                    active ? "text-paper" : "text-fog",
                  )}
                >
                  {section.hash} · {section.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
