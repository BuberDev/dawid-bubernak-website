import { ArrowRight } from "lucide-react";
import { hero, siteConfig } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-steel/60 pt-16">
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

      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24 lg:pl-28">
        <Card className="relative overflow-hidden border-steel bg-surface/70 shadow-[0_0_120px_-40px_var(--color-signal)] backdrop-blur-sm">
          <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#5eead4" />

          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative z-10 flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
              <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-steel bg-obsidian/60 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                <span className="font-mono text-[12px] tracking-wide text-mist">
                  {hero.eyebrow}
                </span>
              </div>

              <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-6xl">
                {hero.headlineLead}
                <span className="text-gradient">{hero.headlineHighlight}</span>
              </h1>

              <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-mist sm:text-lg">
                {hero.subheadline}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={hero.primaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-medium text-obsidian transition-transform hover:scale-[1.02]"
                >
                  {hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-steel px-6 py-3 font-medium text-paper transition-colors hover:border-fog"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>

              <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-steel/70 pt-8">
                {hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-display text-2xl font-medium text-paper sm:text-3xl">
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

            <div className="relative h-[320px] border-t border-steel/60 lg:h-auto lg:border-l lg:border-t-0">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="h-full w-full"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-surface to-transparent lg:hidden" />
            </div>
          </div>
        </Card>

        <p className="mt-6 text-center font-mono text-[11px] text-fog lg:text-left">
          {siteConfig.location}
        </p>
      </div>
    </section>
  );
}
