"use client";

import { useState, type FormEvent } from "react";
import { Copy, Check, Mail, MapPin, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, XSocialIcon } from "@/components/ui/social-icons";
import { contact, siteConfig, nav } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const hash = nav.find((item) => item.href === "#kontakt")?.hash ?? "0x08";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Zapytanie o współpracę — ${form.name || "strona"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="kontakt" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 lg:pl-28">
        <Reveal>
          <SectionHeading hash={hash} title={contact.heading} description={contact.description} />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal delay={80}>
            <div className="space-y-4">
              <div className="rounded-2xl border border-steel bg-surface/60 p-5">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-signal" />
                  <span className="font-mono text-sm text-paper">{siteConfig.email}</span>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="mt-3 inline-flex items-center gap-1.5 font-mono text-[12px] text-fog transition-colors hover:text-mist"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-signal" /> Skopiowano
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" /> Kopiuj adres
                    </>
                  )}
                </button>
              </div>

              <div className="rounded-2xl border border-steel bg-surface/60 p-5">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-ember" />
                  <span className="font-mono text-sm text-paper">{siteConfig.location}</span>
                </div>
              </div>

              {siteConfig.phone && (
                <div className="rounded-2xl border border-steel bg-surface/60 p-5">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-signal" />
                    <span className="font-mono text-sm text-paper">{siteConfig.phone}</span>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-steel text-mist transition-colors hover:border-signal hover:text-signal"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-steel text-mist transition-colors hover:border-signal hover:text-signal"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-steel text-mist transition-colors hover:border-signal hover:text-signal"
                >
                  <XSocialIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="font-mono text-[11px] text-fog">
                    Imię i nazwisko
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                    className="mt-2 w-full rounded-lg border border-steel bg-surface px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-signal"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-[11px] text-fog">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                    className="mt-2 w-full rounded-lg border border-steel bg-surface px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-signal"
                    placeholder="jan@firma.pl"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="font-mono text-[11px] text-fog">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  className="mt-2 w-full resize-none rounded-lg border border-steel bg-surface px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-signal"
                  placeholder="Opisz krótko swój projekt i cel, jaki chcesz osiągnąć."
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-medium text-obsidian transition-transform hover:scale-[1.02]"
              >
                Wyślij wiadomość
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
