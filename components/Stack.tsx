import { skillGroups, nav } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const hash = nav.find((item) => item.href === "#stack")?.hash ?? "0x03";

export function Stack() {
  return (
    <section id="stack" className="border-b border-steel/60 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 lg:pl-28">
        <Reveal>
          <SectionHeading
            hash={hash}
            title="Stack technologiczny"
            description="Narzędzia, których używam na co dzień do budowy aplikacji webowych, systemów AI i rozwiązań blockchain."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 60}>
              <div className="h-full rounded-2xl border border-steel bg-surface/60 p-6 transition-colors hover:border-fog/60">
                <p className="font-mono text-[11px] text-fog">{group.hash}</p>
                <h3 className="mt-2 font-display text-base text-paper">{group.category}</h3>
                <ul className="mt-4 space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-mist">
                      {skill}
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
