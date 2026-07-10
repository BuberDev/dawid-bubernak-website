import { ArrowRight } from "lucide-react";
import { hero, siteConfig } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center overflow-hidden border-b border-steel/60 pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl px-6 py-8 lg:px-10 lg:py-10 lg:pl-28">
        <Card className="relative overflow-hidden border-steel bg-surface/70 shadow-[0_0_120px_-40px_var(--color-signal)] backdrop-blur-sm">
          <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#5eead4" />

          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-steel bg-obsidian/60 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                <span className="font-mono text-[12px] tracking-wide text-mist">
                  {hero.eyebrow}
                </span>
              </div>

              <h1 className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-paper sm:text-4xl lg:text-[2.75rem]">
                {hero.headlineLead}
                <span className="text-gradient">{hero.headlineHighlight}</span>
              </h1>

              <p className="mt-4 max-w-xl text-balance text-sm leading-relaxed text-mist sm:text-base">
                {hero.subheadline}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={hero.primaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-obsidian transition-transform hover:scale-[1.02]"
                >
                  {hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-steel px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-fog"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>

              <dl className="mt-7 grid max-w-lg grid-cols-3 gap-6 border-t border-steel/70 pt-5">
                {hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-display text-xl font-medium text-paper sm:text-2xl">
                      {stat.value}
                      <span className="text-signal">{stat.suffix}</span>
                    </dd>
                    <p className="mt-1 font-mono text-[11px] leading-tight text-fog">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative h-65 border-t border-steel/60 sm:h-85 lg:h-auto lg:border-l lg:border-t-0">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="h-full w-full"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-surface to-transparent lg:hidden" />
            </div>
          </div>
        </Card>

        <p className="mt-4 text-center font-mono text-[11px] text-fog lg:text-left">
          {siteConfig.location}
        </p>
      </div>
    </section>
  );
}
