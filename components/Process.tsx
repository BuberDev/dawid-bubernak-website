import { process, nav } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const hash = nav.find((item) => item.href === "#proces")?.hash ?? "0x05";

export function Process() {
  return (
    <section id="proces" className="border-b border-steel/60 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 lg:pl-28">
        <Reveal>
          <SectionHeading
            hash={hash}
            title="Jak wygląda współpraca"
            description="Pięć kroków od pierwszej rozmowy do wdrożenia i wsparcia po starcie."
          />
        </Reveal>

        <ol className="relative border-l border-steel/70 pl-8 sm:pl-10">
          {process.map((step, index) => (
            <li key={step.hash} className="relative pb-12 last:pb-0">
              <Reveal delay={index * 70}>
                <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-steel bg-obsidian sm:-left-[49px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-signal to-ember" />
                </span>
                <p className="font-mono text-[11px] text-fog">{step.hash}</p>
                <h3 className="mt-1 font-display text-lg text-paper">{step.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
