"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq, nav } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

const hash = nav.find((item) => item.href === "#faq")?.hash ?? "0x07";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-steel/60 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 lg:pl-28">
        <Reveal>
          <SectionHeading hash={hash} title="Najczęstsze pytania" />
        </Reveal>

        <div className="divide-y divide-steel/70 border-y border-steel/70">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-display text-base text-paper sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-fog transition-transform duration-300",
                      isOpen && "rotate-180 text-signal",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0">
                    <p className="max-w-2xl text-sm leading-relaxed text-mist">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
