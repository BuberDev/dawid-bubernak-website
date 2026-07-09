import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { portfolio, nav } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const hash = nav.find((item) => item.href === "#portfolio")?.hash ?? "0x06";

export function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-steel/60 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 lg:pl-28">
        <Reveal>
          <SectionHeading
            hash={hash}
            title="Wybrane projekty"
            description="Strony i aplikacje zaprojektowane oraz wdrożone przeze mnie na produkcji — z różnych branż i o różnej skali."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {portfolio.map((project, index) => (
            <Reveal key={project.name} delay={index * 70}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-steel bg-surface/60 transition-colors hover:border-fog/60"
              >
                <div className="relative aspect-video overflow-hidden border-b border-steel/70">
                  <Image
                    src={project.image}
                    alt={`Zrzut ekranu strony startowej projektu ${project.name}`}
                    width={1600}
                    height={900}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-obsidian/70 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] text-fog">
                        {project.hash} · {project.category}
                      </p>
                      <h3 className="mt-1 font-display text-lg text-paper">{project.name}</h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-fog transition-colors group-hover:text-signal" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-steel px-2.5 py-1 font-mono text-[10px] text-mist"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
