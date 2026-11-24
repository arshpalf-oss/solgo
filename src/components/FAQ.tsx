import { useState } from "react";
import { faqs } from "@/data";
import { useOrder } from "@/store/order";
import { ArrowUpRight, ChevronDown, Mail, Phone } from "./Icons";
import { Reveal, SectionLabel } from "./ui";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openOrder } = useOrder();

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative bg-cream-100/70 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <Reveal className="lg:sticky lg:top-28">
              <SectionLabel>Good questions</SectionLabel>
              <h2
                id="faq-heading"
                className="mt-5 font-display text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.04] tracking-[-0.03em] text-espresso-900"
              >
                Everything you were
                <span className="italic text-clay-500"> about to ask.</span>
              </h2>
              <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-espresso-500">
                Still unsure about something? Our atelier replies in under two hours, usually
                with a recommendation and a flavour suggestion you didn&rsquo;t ask for.
              </p>

              <div className="mt-7 rounded-[1.4rem] border border-espresso-900/10 bg-cream-50 p-5">
                <p className="text-[10px] font-bold tracking-[0.16em] text-espresso-400 uppercase">
                  The gifting desk
                </p>
                <div className="mt-3 space-y-2.5">
                  <a
                    href="tel:+919876543210"
                    className="group flex items-center gap-2.5 text-[13px] font-semibold text-espresso-800"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-caramel-200/50 text-espresso-700 transition-colors group-hover:bg-caramel-300/60">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    +91 98765 43210
                  </a>
                  <a
                    href="mailto:hello@sogno.in"
                    className="group flex items-center gap-2.5 text-[13px] font-semibold text-espresso-800"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-caramel-200/50 text-espresso-700 transition-colors group-hover:bg-caramel-300/60">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    hello@sogno.in
                  </a>
                </div>
                <button
                  type="button"
                  onClick={openOrder}
                  className="mt-4 inline-flex items-center gap-1.5 text-[11.5px] font-bold text-clay-500"
                >
                  Or just build your box <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </Reveal>
          </div>

          <div className="divide-y divide-espresso-900/10 border-y border-espresso-900/10">
            {faqs.map((faq, i) => {
              const open = openIndex === i;
              return (
                <Reveal key={faq.q} delay={Math.min(i, 4) * 40}>
                  <div>
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(open ? null : i)}
                        aria-expanded={open}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-button-${i}`}
                        className="group flex w-full items-start justify-between gap-5 py-5 text-left"
                      >
                        <span className="flex gap-3.5">
                          <span className="mt-0.5 font-display text-[11px] text-espresso-400">
                            0{i + 1}
                          </span>
                          <span className="text-[14px] leading-snug font-semibold text-espresso-900 transition-colors group-hover:text-clay-500 sm:text-[15px]">
                            {faq.q}
                          </span>
                        </span>
                        <span
                          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                            open
                              ? "rotate-180 border-espresso-900 bg-espresso-900 text-cream-50"
                              : "border-espresso-900/15 text-espresso-600 group-hover:border-espresso-900/35"
                          }`}
                        >
                          <ChevronDown className="h-3.5 w-3.5" />
                        </span>
                      </button>
                    </h3>
                    <div className="faq-panel" data-open={open} id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-button-${i}`}>
                      <div>
                        <p className="mb-5 ml-[1.85rem] max-w-xl pr-8 text-[13px] leading-relaxed text-espresso-500">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
