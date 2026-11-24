import heroImage from "@/assets/hero-tiramisu.jpg";
import { useOrder } from "@/store/order";
import { products } from "@/data";
import { ArrowRight, Coffee, Leaf, Plus, Sparkle, Star, Truck } from "./Icons";
import { Button, Reveal } from "./ui";

const signature = products[0];

const trustPoints = [
  { icon: Leaf, label: "100% eggless" },
  { icon: Truck, label: "Same-day in city" },
  { icon: Coffee, label: "Single-origin espresso" },
];

export function Hero() {
  const { add, openOrder } = useOrder();

  return (
    <section id="top" className="grain relative overflow-hidden pt-8 pb-16 sm:pt-12 lg:pt-16 lg:pb-24">
      {/* Ambient backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(211,167,117,0.35),transparent_66%)] blur-2xl" />
        <div className="absolute top-1/3 -left-40 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(178,92,55,0.14),transparent_68%)] blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-cream-100/60" />
        <svg className="absolute right-[6%] bottom-[12%] hidden h-40 w-40 text-caramel-500/20 lg:block" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeDasharray="2 6" />
          <circle cx="50" cy="50" r="34" stroke="currentColor" strokeOpacity="0.7" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 lg:px-12">
        <div className="relative z-10 max-w-xl lg:max-w-none">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-espresso-900/10 bg-cream-100/70 px-3.5 py-1.5 text-[10.5px] font-semibold tracking-[0.16em] text-espresso-600 uppercase shadow-sm backdrop-blur">
              <Sparkle className="h-3.5 w-3.5 text-clay-500" />
              Moradabad&rsquo;s tiramisù atelier
              <span className="text-espresso-400" aria-hidden="true">·</span>
              <span className="text-espresso-500">Est. 2023</span>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 font-display text-[clamp(2.65rem,7.2vw,4.6rem)] leading-[0.97] tracking-[-0.035em] text-espresso-900">
              Moradabad&rsquo;s
              <br className="hidden sm:block" /> most-loved{" "}
              <span className="relative inline-block italic text-clay-500">
                tiramisù
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full text-caramel-400/70"
                >
                  <path d="M2 10c40-7 96-8 216-3" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <span className="block">made this morning.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-espresso-500 sm:text-base">
              Silken mascarpone, single-origin espresso and twenty-four hours of patience.
              Handcrafted in small batches, sealed fresh and delivered chilled — from our Civil
              Lines atelier to your table.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" onClick={openOrder} className="w-full sm:w-auto">
                Build your box
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href="#menu" variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore the flavours
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2.5">
              {trustPoints.map((point) => (
                <li key={point.label} className="flex items-center gap-1.5 text-[12px] font-medium text-espresso-500">
                  <point.icon className="h-4 w-4 text-caramel-600" />
                  {point.label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-espresso-900/10 pt-6">
              <div className="flex -space-x-2.5" aria-hidden="true">
                {[
                  { i: "AG", c: "bg-[#d8b48c]" },
                  { i: "RM", c: "bg-[#a58b73]" },
                  { i: "SK", c: "bg-[#c58a6e]" },
                  { i: "PN", c: "bg-[#8c7355]" },
                ].map((a) => (
                  <span
                    key={a.i}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream-50 text-[10px] font-bold text-espresso-900 ${a.c}`}
                  >
                    {a.i}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-0.5 text-caramel-600">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="h-3.5 w-3.5" />
                    ))}
                  </span>
                  <span className="text-[12.5px] font-bold text-espresso-900">4.9</span>
                </div>
                <p className="mt-0.5 text-[11.5px] text-espresso-500">
                  From 1,240+ reviews · 18,000+ slices served
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal direction="scale" delay={160} className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2.7rem] border border-caramel-500/25 sm:-inset-6"
            />
            <div className="relative overflow-hidden rounded-[2.1rem] bg-espresso-900 p-1.5 shadow-lift">
              <div className="img-zoom relative overflow-hidden rounded-[1.7rem]">
                <img
                  src={heroImage}
                  alt="A slice of Sogno tiramisù with layered mascarpone and cocoa on a dark plate"
                  className="aspect-[4/5] w-full object-cover"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/65 via-transparent to-espresso-950/10" />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 sm:p-5">
                  <div className="rounded-full border border-white/20 bg-espresso-950/35 px-3 py-1.5 text-[9.5px] font-semibold tracking-[0.16em] text-cream-100 uppercase backdrop-blur-md">
                    Batch no. 248 · 11:00 AM
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-cream-50/10 text-cream-50 backdrop-blur-md">
                    <Leaf className="h-4 w-4" />
                  </span>
                </div>

                <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3 rounded-[1.35rem] border border-white/20 bg-cream-50/12 p-3.5 backdrop-blur-xl sm:inset-x-4 sm:bottom-4 sm:p-4">
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold tracking-[0.18em] text-caramel-200 uppercase">
                      Today&rsquo;s signature
                    </p>
                    <p className="mt-1 truncate font-display text-xl text-cream-50 sm:text-[22px]">La Classica</p>
                    <p className="mt-0.5 text-[11px] text-cream-100/75">Box of 4 · serves 2 · 24h rested</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <span className="font-display text-lg text-cream-50">₹599</span>
                    <button
                      type="button"
                      onClick={() => add(signature)}
                      className="group flex items-center gap-1.5 rounded-full bg-cream-50 px-3 py-2 text-[11px] font-bold text-espresso-900 transition-all hover:bg-white active:scale-95"
                      aria-label="Add La Classica box to your order"
                    >
                      <Plus className="h-3.5 w-3.5 transition-transform group-hover:rotate-90" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating glass details */}
            <div className="absolute -top-5 -left-3 hidden animate-float-slow items-center gap-2.5 rounded-2xl border border-white/70 bg-cream-50/85 p-3 pr-4 shadow-soft backdrop-blur-xl sm:flex lg:-left-8">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-espresso-900 text-caramel-200">
                <Coffee className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[9px] font-bold tracking-[0.14em] text-espresso-400 uppercase">Resting since</p>
                <p className="text-[12.5px] font-semibold text-espresso-900">5:00 AM today</p>
              </div>
            </div>

            <div className="absolute -right-2 -bottom-6 hidden animate-float-slower rounded-2xl border border-white/70 bg-cream-50/90 px-4 py-3 shadow-soft backdrop-blur-xl sm:block lg:-right-6">
              <p className="text-[9px] font-bold tracking-[0.14em] text-espresso-400 uppercase">Delivery promise</p>
              <p className="mt-1 flex items-center gap-1.5 text-[12.5px] font-semibold text-espresso-900">
                <Truck className="h-3.5 w-3.5 text-caramel-600" /> Chilled in ~60 min
              </p>
            </div>

            <div className="absolute -right-1 top-20 hidden h-16 w-16 rotate-12 items-center justify-center rounded-full border border-caramel-500/30 bg-cream-50/60 text-center text-[8px] font-bold tracking-[0.1em] text-espresso-500 uppercase backdrop-blur-sm md:flex">
              100%
              <br />
              eggless
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
