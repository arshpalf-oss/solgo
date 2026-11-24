import { useState } from "react";
import { testimonials } from "@/data";
import { ChevronLeft, ChevronRight, Star } from "./Icons";
import { Reveal, SectionLabel, Stars } from "./ui";

const platforms = [
  { name: "Google", score: "4.9", count: "684 reviews" },
  { name: "Zomato", score: "4.8", count: "312 reviews" },
  { name: "Swiggy", score: "4.9", count: "244 reviews" },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const featured = testimonials[index % total];
  const side = [testimonials[(index + 1) % total], testimonials[(index + 2) % total]];

  const go = (dir: number) => setIndex((prev) => (prev + dir + total) % total);

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="relative overflow-hidden bg-cream-100/70 py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(211,167,117,0.2),transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <SectionLabel>11,000+ happy forks</SectionLabel>
            <h2
              id="reviews-heading"
              className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.04] tracking-[-0.03em] text-espresso-900"
            >
              The reviews are in.
              <span className="italic text-clay-500"> The plates are empty.</span>
            </h2>
          </Reveal>

          <Reveal delay={100} className="flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center justify-end gap-2">
                <span className="font-display text-3xl text-espresso-900">4.9</span>
                <Stars className="text-caramel-600" />
              </div>
              <p className="mt-1 text-[11.5px] text-espresso-500">1,240+ verified reviews</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso-900/15 bg-cream-50 text-espresso-800 transition-all hover:border-espresso-900/40 hover:bg-cream-50 active:scale-95"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso-900/15 bg-espresso-900 text-cream-50 transition-all hover:bg-espresso-700 active:scale-95"
                aria-label="Next review"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.12fr_0.88fr] lg:gap-5">
          <Reveal direction="scale">
            <figure
              key={featured.name}
              className="rise-in relative flex h-full flex-col justify-between overflow-hidden rounded-[1.9rem] bg-espresso-900 p-7 text-cream-50 shadow-lift sm:p-9"
              aria-live="polite"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(189,138,82,0.3),transparent_68%)] blur-2xl"
              />
              <div>
                <div className="flex items-center justify-between">
                  <Stars className="text-caramel-300" />
                  <span className="rounded-full border border-cream-100/15 px-2.5 py-1 text-[9px] font-semibold tracking-[0.13em] text-cream-100/60 uppercase">
                    {featured.source}
                  </span>
                </div>
                <blockquote className="mt-7">
                  <span aria-hidden="true" className="font-display text-5xl leading-none text-caramel-400/50">
                    &ldquo;
                  </span>
                  <p className="mt-1 font-display text-[22px] leading-[1.35] tracking-[-0.01em] text-cream-50 sm:text-[27px]">
                    {featured.quote}
                  </p>
                </blockquote>
              </div>

              <figcaption className="mt-8 flex items-center justify-between gap-4 border-t border-cream-100/15 pt-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-caramel-300/15 font-display text-[13px] text-caramel-200 ring-1 ring-caramel-300/30">
                    {featured.initials}
                  </span>
                  <div>
                    <p className="text-[13.5px] font-semibold">{featured.name}</p>
                    <p className="text-[11px] text-cream-100/55">{featured.role}</p>
                  </div>
                </div>
                <div className="hidden items-center gap-1 sm:flex" aria-hidden="true">
                  <Star className="h-3.5 w-3.5 text-caramel-300" />
                  <Star className="h-3.5 w-3.5 text-caramel-300" />
                  <Star className="h-3.5 w-3.5 text-caramel-300" />
                  <Star className="h-3.5 w-3.5 text-caramel-300" />
                  <Star className="h-3.5 w-3.5 text-caramel-300" />
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <div className="flex flex-col gap-4 lg:gap-5">
            {side.map((t) => (
              <Reveal key={t.name} delay={80}>
                <figure className="card-lift flex h-full flex-col justify-between rounded-[1.6rem] border border-espresso-900/10 bg-cream-50 p-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <Stars />
                      <span className="text-[9px] font-semibold tracking-[0.12em] text-espresso-400 uppercase">
                        {t.source}
                      </span>
                    </div>
                    <blockquote className="mt-4 text-[13.5px] leading-relaxed text-espresso-600">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                  </div>
                  <figcaption className="mt-5 flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-caramel-200/70 font-display text-[10.5px] text-espresso-800">
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-[12px] font-semibold text-espresso-900">{t.name}</p>
                      <p className="text-[10.5px] text-espresso-400">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={100}>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-[1.5rem] border border-espresso-900/10 bg-cream-50/70 p-4 sm:flex-row sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {platforms.map((p) => (
                <div key={p.name} className="flex items-center gap-2.5">
                  <span className="text-[12px] font-semibold text-espresso-800">{p.name}</span>
                  <span className="flex items-center gap-1 rounded-full bg-caramel-200/50 px-2 py-0.5 text-[11px] font-bold text-espresso-800">
                    <Star className="h-2.5 w-2.5 text-clay-500" />
                    {p.score}
                  </span>
                  <span className="hidden text-[10.5px] text-espresso-400 md:inline">{p.count}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-1.5" role="group" aria-label="Choose a review">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-current={i === index ? "true" : undefined}
                  aria-label={`Show review from ${t.name}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-espresso-800" : "w-1.5 bg-espresso-900/20 hover:bg-espresso-900/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
