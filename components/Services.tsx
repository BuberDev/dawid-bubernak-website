import { Check } from "lucide-react";
import { services, nav } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const hash = nav.find((item) => item.href === "#uslugi")?.hash ?? "0x04";

export function Services() {
  return (
    <section id="uslugi" className="border-b border-steel/60 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 lg:pl-28">
        <Reveal>
          <SectionHeading
            hash={hash}
            title="Usługi"
            description="Cztery obszary, w których pomagam firmom budować i rozwijać produkty cyfrowe."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <div className="group h-full rounded-2xl border border-steel bg-surface/60 p-7 transition-colors hover:border-signal/40">
                <p className="font-mono text-[11px] text-ember">{service.hash}</p>
                <h3 className="mt-3 font-display text-xl text-paper">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{service.description}</p>
                <ul className="mt-6 space-y-2.5 border-t border-steel/70 pt-5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-mist">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
