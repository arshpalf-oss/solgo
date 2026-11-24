import { useState } from "react";
import { categories, products, type Category } from "@/data";
import { useOrder } from "@/store/order";
import { cn } from "@/utils/cn";
import { ArrowRight, Plus, Sparkle } from "./Icons";
import { Button, Reveal, SectionLabel, inr } from "./ui";

export function Products() {
  const [active, setActive] = useState<Category>("all");
  const { add, openOrder } = useOrder();

  const visible = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section id="menu" aria-labelledby="menu-heading" className="relative overflow-hidden bg-cream-100/70 py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(211,167,117,0.2),transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <SectionLabel>The menu</SectionLabel>
            <h2
              id="menu-heading"
              className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.04] tracking-[-0.03em] text-espresso-900"
            >
              Six ways to lose
              <span className="italic text-clay-500"> your resolve.</span>
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-espresso-500">
              Every box is assembled to order, rested overnight and finished with a cocoa dusting
              just before it leaves the atelier. Choose one. Or, realistically, three.
            </p>
          </Reveal>

          <Reveal delay={120} className="flex flex-col items-start gap-3 lg:items-end">
            <div className="flex items-center gap-2 rounded-full border border-espresso-900/10 bg-cream-50/80 px-3.5 py-1.5 text-[11px] font-medium text-espresso-500">
              <Sparkle className="h-3.5 w-3.5 text-clay-500" />
              Fresh batches at 11 AM &amp; 5 PM
            </div>
            <button
              type="button"
              onClick={openOrder}
              className="group inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-espresso-800"
            >
              Skip ahead and build a box
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal delay={80} className="mt-9">
          <div
            role="group"
            aria-label="Filter the menu by flavour type"
            className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {categories.map((cat) => {
              const selected = active === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(cat.id)}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2 text-[12px] font-semibold transition-all duration-300",
                    selected
                      ? "border-espresso-900 bg-espresso-900 text-cream-50 shadow-soft"
                      : "border-espresso-900/12 bg-cream-50/70 text-espresso-600 hover:border-espresso-900/30 hover:text-espresso-900",
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product, index) => (
            <article
              key={`${active}-${product.id}`}
              className="rise-in card-lift group flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-espresso-900/10 bg-cream-50 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] hover:border-caramel-500/45"
              style={{ animationDelay: `${index * 55}ms` }}
            >
              <div className="img-zoom relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  className="aspect-[4/3.35] w-full object-cover sm:aspect-[4/4.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/55 via-transparent to-transparent opacity-80" />
                {product.badge && (
                  <span className="absolute top-3.5 left-3.5 rounded-full border border-white/30 bg-cream-50/90 px-3 py-1 text-[9.5px] font-bold tracking-[0.13em] text-espresso-800 uppercase backdrop-blur-md">
                    {product.badge}
                  </span>
                )}
                <span className="absolute right-3.5 bottom-3.5 rounded-full border border-white/25 bg-espresso-950/50 px-3 py-1.5 text-[11px] font-semibold text-cream-50 backdrop-blur-md">
                  {product.serves}
                </span>
                <button
                  type="button"
                  onClick={() => add(product, 1)}
                  className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 rounded-full bg-cream-50 px-3.5 py-2 text-[11px] font-bold text-espresso-900 opacity-0 shadow-soft transition-all duration-300 group-hover:opacity-100 focus-visible:opacity-100 active:scale-95"
                  aria-label={`Quick add ${product.name} to your box`}
                  tabIndex={0}
                >
                  <Plus className="h-3.5 w-3.5" /> Quick add
                </button>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-[22px] leading-tight tracking-[-0.02em] text-espresso-900">
                    {product.name}
                  </h3>
                  <span className="shrink-0 font-display text-[18px] text-espresso-900">
                    {inr(product.price)}
                  </span>
                </div>
                <p className="mt-0.5 font-display text-[11.5px] tracking-wide text-caramel-600 italic">
                  {product.italian}
                </p>
                <p className="mt-2.5 text-[13px] leading-relaxed text-espresso-500">
                  {product.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {product.notes.map((note) => (
                    <span
                      key={note}
                      className="rounded-full border border-espresso-900/10 bg-cream-100/70 px-2.5 py-1 text-[9.5px] font-semibold tracking-[0.05em] text-espresso-500"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-espresso-900/10 pt-4">
                  <span className="text-[11px] text-espresso-400">
                    {inr(product.slicePrice)} / slice
                  </span>
                  <button
                    type="button"
                    onClick={() => add(product, 1)}
                    className="group/add inline-flex items-center gap-1.5 rounded-full bg-espresso-900 px-4 py-2.5 text-[11.5px] font-bold text-cream-50 transition-all duration-300 hover:bg-espresso-700 active:scale-[0.98]"
                    aria-label={`Add ${product.name} to your box`}
                  >
                    Add to box
                    <Plus className="h-3.5 w-3.5 transition-transform duration-300 group-hover/add:rotate-90" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[1.5rem] border border-espresso-900/10 bg-cream-50/70 p-5 sm:flex-row sm:items-center sm:p-6">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-clay-500/10 text-clay-500">
                <Sparkle className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[13.5px] font-semibold text-espresso-900">Can&rsquo;t decide? Nobody can.</p>
                <p className="mt-0.5 text-[12.5px] text-espresso-500">
                  The Signature Box pairs our three most-loved flavours with complimentary espresso sachets.
                </p>
              </div>
            </div>
            <Button href="#boxes" variant="secondary" size="sm" className="shrink-0">
              See the boxes <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
