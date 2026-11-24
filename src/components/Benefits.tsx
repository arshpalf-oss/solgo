import { useOrder } from "@/store/order";
import { ArrowRight, Check, Coffee, Leaf, Sparkle, Star, X } from "./Icons";
import { Button, Reveal, SectionLabel } from "./ui";

const rows = [
  { label: "Mascarpone, not cream substitute", us: true, them: false },
  { label: "Single-origin espresso, freshly pulled", us: true, them: false },
  { label: "24 hours of chilled rest", us: true, them: false },
  { label: "Hand-layered in batches of twelve", us: true, them: false },
  { label: "Dedicated 100% eggless atelier", us: true, them: false },
  { label: "Delivered below 4°C, same day", us: true, them: false },
];

const occasions = [
  { icon: Coffee, title: "The 4 PM ritual", body: "A slice, a coffee, ten quiet minutes. Moradabad's new afternoon habit." },
  { icon: Sparkle, title: "The thoughtful thank-you", body: "A box that says more than a message ever could, ribbon and all." },
  { icon: Leaf, title: "The inclusive celebration", body: "Eggless, pure veg, no alcohol — everyone at the table gets a slice." },
];

export function Benefits() {
  const { openOrder } = useOrder();

  return (
    <section id="why" aria-labelledby="benefits-heading" className="relative overflow-hidden bg-cream-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal direction="left" className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[1.9rem] border border-espresso-900/10 bg-espresso-900">
              <img
                src="https://images.pexels.com/photos/6612637/pexels-photo-6612637.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1100"
                alt="Freshly cut squares of tiramisù with visible mascarpone layers"
                loading="lazy"
                className="aspect-[4/4.3] w-full object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 rounded-[1.2rem] border border-cream-100/20 bg-espresso-950/45 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-1 text-caramel-300">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-3.5 w-3.5" />
                  ))}
                  <span className="ml-2 text-[11px] font-semibold text-cream-50">4.9 average</span>
                </div>
                <p className="mt-1.5 text-[11.5px] text-cream-100/60">
                  &ldquo;You can taste the extra hours.&rdquo; — 684 Google reviews
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-3 hidden rounded-2xl border border-white/80 bg-cream-50/95 px-4 py-3 shadow-soft backdrop-blur sm:block">
              <p className="text-[9px] font-bold tracking-[0.13em] text-espresso-400 uppercase">The honest metric</p>
              <p className="mt-1 font-display text-[17px] text-espresso-900">78% reorder in 30 days</p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionLabel>Why one box becomes two</SectionLabel>
              <h2
                id="benefits-heading"
                className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.04] tracking-[-0.03em] text-espresso-900"
              >
                The difference
                <span className="italic text-clay-500"> is measurable.</span>
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-espresso-500">
                Most cakes are built to sit on a shelf. Ours is built to be eaten within 72 hours.
                Here&rsquo;s what that changes on the fork.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-7 overflow-hidden rounded-[1.4rem] border border-espresso-900/10 bg-cream-100/45">
                <div className="grid grid-cols-[1fr_3.75rem_3.75rem] items-center gap-2 sm:grid-cols-[1fr_5rem_5rem] border-b border-espresso-900/10 px-4 py-2.5 text-[9px] font-bold tracking-[0.13em] text-espresso-400 uppercase sm:px-5">
                  <span>The detail</span>
                  <span className="text-center text-espresso-800">Sogno</span>
                  <span className="text-center">Elsewhere</span>
                </div>
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[1fr_3.75rem_3.75rem] items-center gap-2 sm:grid-cols-[1fr_5rem_5rem] border-b border-espresso-900/10 px-4 py-3 last:border-b-0 sm:px-5"
                  >
                    <span className="text-[12px] leading-snug font-medium text-espresso-700">{row.label}</span>
                    <span className="flex justify-center">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-espresso-900 text-caramel-200">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                    </span>
                    <span className="flex justify-center text-espresso-400">
                      <X className="h-3.5 w-3.5" />
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11.5px] text-espresso-400">
                  Based on our ingredient sheet, not a marketing deck.
                </p>
                <Button variant="secondary" size="sm" onClick={openOrder}>
                  Taste it yourself <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3 lg:mt-16">
          {occasions.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="h-full">
              <article className="card-lift group flex h-full items-start gap-4 rounded-[1.4rem] border border-espresso-900/10 bg-cream-100/45 p-5 hover:border-caramel-500/40">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream-50 text-espresso-700 shadow-sm transition-all duration-500 group-hover:bg-espresso-900 group-hover:text-caramel-200">
                  <item.icon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <h3 className="font-display text-[18px] leading-tight text-espresso-900">{item.title}</h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-espresso-500">{item.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
