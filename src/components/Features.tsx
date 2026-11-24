import { features } from "@/data";
import { iconMap } from "./Icons";
import { Reveal, SectionLabel } from "./ui";

export function Features() {
  return (
    <section aria-labelledby="features-heading" className="relative py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <SectionLabel>The Sogno standard</SectionLabel>
            <h2
              id="features-heading"
              className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.04] tracking-[-0.03em] text-espresso-900"
            >
              Obsessive about the details
              <span className="block italic text-clay-500">other bakeries skip.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:pb-2">
            <p className="max-w-lg text-[15px] leading-relaxed text-espresso-500 lg:ml-auto">
              Tiramisù is four ingredients and one honest promise. We protect all five. No
              preservatives, no premixes, no shortcuts that show up on the fork.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <Reveal key={feature.title} delay={index * 70} className="h-full">
                <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-espresso-900/10 bg-cream-100/55 p-6 hover:border-caramel-500/40 hover:bg-cream-50">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(211,167,117,0.22),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-[0.9rem] border border-espresso-900/10 bg-cream-50 text-espresso-800 shadow-sm transition-all duration-500 group-hover:-rotate-6 group-hover:border-caramel-500/50 group-hover:text-clay-500">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-[13px] text-espresso-400">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-[21px] leading-tight tracking-[-0.02em] text-espresso-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-espresso-500">
                    {feature.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
