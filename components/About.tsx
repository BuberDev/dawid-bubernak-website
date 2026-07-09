import { about, nav } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const hash = nav.find((item) => item.href === "#o-mnie")?.hash ?? "0x02";

export function About() {
  return (
    <section id="o-mnie" className="border-b border-steel/60 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 lg:pl-28">
        <Reveal>
          <SectionHeading hash={hash} title={about.heading} />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal delay={80}>
            <div className="space-y-5">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-mist sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-1">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-steel bg-surface/60 p-5"
                >
                  <dt className="font-mono text-[11px] tracking-wide text-fog">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 font-display text-lg text-paper">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
