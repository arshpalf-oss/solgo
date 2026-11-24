import { useState } from "react";
import { slicePlans, wholePlans } from "@/data";
import { useOrder } from "@/store/order";
import { cn } from "@/utils/cn";
import { ArrowRight, Check, Gift, Leaf, Shield, Sparkle, Truck } from "./Icons";
import { Button, Reveal, SectionLabel, inr } from "./ui";

const assurances = [
  { icon: Truck, text: "Free delivery above ₹899" },
  { icon: Leaf, text: "100% eggless, pure veg" },
  { icon: Shield, text: "Chilled or it's on us" },
  { icon: Gift, text: "Free gift note + ribbon" },
];

export function Pricing() {
  const [mode, setMode] = useState<"slices" | "whole">("slices");
  const { add, openOrder } = useOrder();
  const plans = mode === "slices" ? slicePlans : wholePlans;

  return (
    <section id="boxes" aria-labelledby="boxes-heading" className="relative py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/2 h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(211,167,117,0.2),transparent_68%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel className="justify-center">Curated boxes</SectionLabel>
            <h2
              id="boxes-heading"
              className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.04] tracking-[-0.03em] text-espresso-900"
            >
              Choose your level
              <span className="italic text-clay-500"> of indulgence.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-espresso-500">
              Transparent pricing, generous portions, zero fine print. Every box ships chilled
              with our freshness guarantee.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-7 inline-flex items-center rounded-full border border-espresso-900/10 bg-cream-100/80 p-1">
              {(
                [
                  { id: "slices", label: "Slice boxes" },
                  { id: "whole", label: "Whole cakes" },
                ] as const
              ).map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setMode(option.id)}
                  aria-pressed={mode === option.id}
                  className={cn(
                    "rounded-full px-4 py-2 text-[12px] font-semibold transition-all duration-300 sm:px-5",
                    mode === option.id
                      ? "bg-espresso-900 text-cream-50 shadow-soft"
                      : "text-espresso-500 hover:text-espresso-900",
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-11 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const highlight = i === 1;
            return (
              <Reveal key={`${mode}-${plan.id}`} delay={i * 90} className="h-full">
                <article
                  className={cn(
                    "card-lift relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border p-6 sm:p-7",
                    highlight
                      ? "grain border-espresso-900 bg-espresso-900 text-cream-50 shadow-lift lg:-mt-3 lg:mb-3"
                      : "border-espresso-900/12 bg-cream-100/60 text-espresso-900 hover:border-caramel-500/40",
                  )}
                >
                  {highlight && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(211,167,117,0.32),transparent_68%)] blur-2xl"
                    />
                  )}

                  <div className="relative flex items-start justify-between gap-3">
                    <div>
                      <p
                        className={cn(
                          "text-[9.5px] font-bold tracking-[0.18em] uppercase",
                          highlight ? "text-caramel-300" : "text-espresso-400",
                        )}
                      >
                        {plan.serves}
                      </p>
                      <h3 className="mt-2 font-display text-[25px] leading-tight tracking-[-0.02em]">
                        {plan.name}
                      </h3>
                    </div>
                    {plan.badge && (
                      <span
                        className={cn(
                          "flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-bold tracking-[0.1em] uppercase",
                          highlight
                            ? "border border-caramel-300/40 bg-caramel-300/15 text-caramel-200"
                            : "border border-clay-500/25 bg-clay-500/10 text-clay-500",
                        )}
                      >
                        <Sparkle className="h-2.5 w-2.5" />
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p
                    className={cn(
                      "relative mt-2 text-[12.5px] leading-relaxed",
                      highlight ? "text-cream-100/60" : "text-espresso-500",
                    )}
                  >
                    {plan.description}
                  </p>

                  <div className="relative mt-5 flex items-end gap-2">
                    <span className="font-display text-[38px] leading-none tracking-[-0.03em]">
                      {inr(plan.price)}
                    </span>
                    {plan.compareAt && (
                      <span
                        className={cn(
                          "mb-1 text-[12px] line-through",
                          highlight ? "text-cream-100/40" : "text-espresso-400",
                        )}
                      >
                        {inr(plan.compareAt)}
                      </span>
                    )}
                  </div>
                  <p
                    className={cn(
                      "relative mt-1 text-[10.5px]",
                      highlight ? "text-cream-100/45" : "text-espresso-400",
                    )}
                  >
                    One-time order · taxes included
                  </p>

                  <div
                    className={cn(
                      "relative my-5 h-px w-full",
                      highlight ? "bg-cream-100/15" : "bg-espresso-900/10",
                    )}
                  />

                  <ul className="relative space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span
                          className={cn(
                            "mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full",
                            highlight
                              ? "bg-caramel-300/20 text-caramel-200"
                              : "bg-caramel-200/60 text-espresso-800",
                          )}
                        >
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        <span
                          className={cn(
                            "text-[12.5px] leading-relaxed",
                            highlight ? "text-cream-100/80" : "text-espresso-600",
                          )}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-auto pt-7">
                    <Button
                      full
                      variant={highlight ? "light" : "primary"}
                      onClick={() => {
                        add({
                          id: `${mode}-${plan.id}`,
                          name: plan.name,
                          price: plan.price,
                          detail: plan.serves,
                        });
                        openOrder();
                      }}
                    >
                      {plan.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 rounded-full border border-espresso-900/10 bg-cream-100/50 px-5 py-4">
            {assurances.map((item) => (
              <span key={item.text} className="flex items-center gap-2 text-[11.5px] font-medium text-espresso-500">
                <item.icon className="h-4 w-4 text-caramel-600" />
                {item.text}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-5 text-center text-[12px] text-espresso-400">
            Need a custom size, sugar-free note or a 50-box order?{" "}
            <button
              type="button"
              onClick={openOrder}
              className="font-semibold text-espresso-800 underline decoration-caramel-500/50 underline-offset-4 hover:decoration-espresso-800"
            >
              Talk to the atelier
            </button>{" "}
            — we love a good brief.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
