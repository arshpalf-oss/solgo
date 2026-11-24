import atelierImage from "@/assets/atelier.jpg";
import { craftSteps } from "@/data";
import { useOrder } from "@/store/order";
import { ArrowRight, Coffee, Sparkle } from "./Icons";
import { Button, Reveal, SectionLabel } from "./ui";

export function Craft() {
  const { openOrder } = useOrder();

  return (
    <section id="craft" aria-labelledby="craft-heading" className="grain relative overflow-hidden bg-espresso-900 py-20 text-cream-100 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(189,138,82,0.22),transparent_68%)] blur-2xl" />
        <div className="absolute bottom-0 -left-20 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(178,92,55,0.18),transparent_70%)] blur-2xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-caramel-500/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="relative">
            <Reveal direction="left" className="relative">
              <div className="relative overflow-hidden rounded-[1.9rem] border border-cream-100/15">
                <img
                  src={atelierImage}
                  alt="A Sogno pastry chef dusting cocoa over fresh tiramisù in the atelier"
                  loading="lazy"
                  className="aspect-[4/4.4] w-full object-cover sm:aspect-[4/3.6] lg:aspect-[4/4.6]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/20 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 rounded-[1.3rem] border border-cream-100/20 bg-espresso-950/55 p-5 backdrop-blur-xl sm:inset-x-5 sm:bottom-5">
                  <Sparkle className="h-5 w-5 text-caramel-300" />
                  <p className="mt-3 font-display text-[19px] leading-snug text-cream-50 sm:text-[21px]">
                    &ldquo;No shortcuts. No preservatives. No &lsquo;good enough.&rsquo;&rdquo;
                  </p>
                  <p className="mt-3 text-[10.5px] font-semibold tracking-[0.14em] text-caramel-300 uppercase">
                    Aarav Mehta · Founder &amp; Head Pâtissier
                  </p>
                </div>
              </div>
              <div className="absolute -right-3 -bottom-5 hidden items-center gap-2.5 rounded-2xl border border-cream-100/20 bg-cream-50 p-3.5 pr-5 text-espresso-900 shadow-lift sm:flex lg:-right-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-espresso-900 text-caramel-200">
                  <Coffee className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.14em] text-espresso-400 uppercase">Since 2023</p>
                  <p className="text-[12.5px] font-bold">18,000+ slices served</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <SectionLabel tone="light">Inside the atelier</SectionLabel>
              <h2
                id="craft-heading"
                className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.04] tracking-[-0.03em] text-cream-50"
              >
                A dessert this honest
                <span className="block italic text-caramel-300">takes its time.</span>
              </h2>
              <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-cream-100/65">
                There are faster ways to make tiramisù. We have tried exactly none of them.
                This is the five-step ritual behind every Sogno box.
              </p>
            </Reveal>

            <ol className="mt-9 space-y-0">
              {craftSteps.map((step, i) => (
                <Reveal key={step.title} delay={i * 80}>
                  <li className="group relative flex gap-5 border-t border-cream-100/12 py-5 first:border-t-0 first:pt-0 sm:gap-6">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-caramel-400/35 bg-cream-50/5 font-display text-[12px] text-caramel-300 transition-colors duration-300 group-hover:border-caramel-300 group-hover:bg-caramel-300/10">
                      0{i + 1}
                    </span>
                    <div className="pb-1">
                      <h3 className="font-display text-[18px] tracking-[-0.01em] text-cream-50">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-[13px] leading-relaxed text-cream-100/55">
                        {step.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={120}>
              <div className="mt-8 flex flex-col gap-4 border-t border-cream-100/12 pt-7 sm:flex-row sm:items-center">
                <Button variant="light" onClick={openOrder}>
                  Taste the difference
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <div className="flex gap-6 sm:ml-3">
                  <div>
                    <p className="font-display text-xl text-cream-50">24h</p>
                    <p className="text-[10px] tracking-[0.12em] text-cream-100/45 uppercase">chilled rest</p>
                  </div>
                  <div>
                    <p className="font-display text-xl text-cream-50">12</p>
                    <p className="text-[10px] tracking-[0.12em] text-cream-100/45 uppercase">boxes / batch</p>
                  </div>
                  <div>
                    <p className="font-display text-xl text-cream-50">0</p>
                    <p className="text-[10px] tracking-[0.12em] text-cream-100/45 uppercase">preservatives</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
