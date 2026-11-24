import { useOrder } from "@/store/order";
import { ArrowUpRight, Check, Gift, Mail, Sparkle } from "./Icons";
import { Button, Reveal, SectionLabel } from "./ui";

const inclusions = [
  {
    title: "A note in your handwriting",
    body: "Tell us what to write. We'll pen it on cotton card and tuck it under the ribbon.",
  },
  {
    title: "Keepsake tin, compostable liner",
    body: "Beautiful enough to re-gift, responsible enough to disappear in your garden.",
  },
  {
    title: "Custom cocoa stencil",
    body: "A monogram, a name, a little inside joke — dusted in bitter cocoa on the whole cakes.",
  },
  {
    title: "Weddings & corporate desks",
    body: "Dessert tables, Diwali hampers and client gifting from 10 boxes upward, pan-India.",
  },
];

export function Gifting() {
  const { openOrder, notify } = useOrder();

  return (
    <section id="gifting" aria-labelledby="gifting-heading" className="relative overflow-hidden bg-cream-100/35 py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(211,167,117,0.22),transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left" className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-[32rem] lg:max-w-none">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="img-zoom overflow-hidden rounded-[1.6rem] border border-espresso-900/10">
                  <img
                    src="https://images.pexels.com/photos/7552580/pexels-photo-7552580.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=900"
                    alt="Hands tying a ribbon around a Sogno gift box in the atelier"
                    loading="lazy"
                    className="h-full min-h-[15rem] w-full object-cover sm:min-h-[19rem]"
                  />
                </div>
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="img-zoom overflow-hidden rounded-[1.6rem] border border-espresso-900/10">
                    <img
                      src="https://images.pexels.com/photos/28482524/pexels-photo-28482524.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=520"
                      alt="Tiramisù slices served with espresso on a glass table"
                      loading="lazy"
                      className="h-36 w-full object-cover sm:h-44"
                    />
                  </div>
                  <div className="relative flex flex-1 flex-col justify-between rounded-[1.6rem] border border-espresso-900/12 bg-espresso-900 p-4 text-cream-50 sm:p-5">
                    <Gift className="h-5 w-5 text-caramel-300" />
                    <div className="mt-6">
                      <p className="font-display text-[26px] leading-none">50+</p>
                      <p className="mt-1 text-[9.5px] font-semibold tracking-[0.13em] text-cream-100/55 uppercase">
                        weddings styled
                      </p>
                      <div className="my-3 h-px bg-cream-100/15" />
                      <p className="font-display text-[26px] leading-none">120+</p>
                      <p className="mt-1 text-[9.5px] font-semibold tracking-[0.13em] text-cream-100/55 uppercase">
                        offices delighted
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 left-4 flex animate-float-slow items-center gap-2.5 rounded-2xl border border-white/80 bg-cream-50/95 p-3 pr-4 shadow-lift backdrop-blur sm:left-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clay-500/10 text-clay-500">
                  <Sparkle className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.13em] text-espresso-400 uppercase">Gift-ready</p>
                  <p className="text-[12px] font-semibold text-espresso-900">note + tin + ribbon</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionLabel>Gifting, considered</SectionLabel>
              <h2
                id="gifting-heading"
                className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.04] tracking-[-0.03em] text-espresso-900"
              >
                Some boxes say
                <span className="italic text-clay-500"> more than words.</span>
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-espresso-500">
                An anniversary. A thank-you. A Tuesday that needed rescuing. We&rsquo;ll pack your
                tiramisù like it&rsquo;s the whole point — because today, it is.
              </p>
            </Reveal>

            <ul className="mt-8 space-y-4">
              {inclusions.map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <li className="flex gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-caramel-500/35 bg-caramel-200/40 text-espresso-800">
                      <Check className="h-3 w-3" />
                    </span>
                    <div>
                      <h3 className="text-[14px] font-semibold text-espresso-900">{item.title}</h3>
                      <p className="mt-0.5 text-[12.5px] leading-relaxed text-espresso-500">{item.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button onClick={openOrder}>
                  Plan a gift <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => notify("Gifting desk: hello@sogno.in · we reply within 2 hours")}
                >
                  <Mail className="h-4 w-4" /> Corporate &amp; weddings
                </Button>
              </div>
              <p className="mt-3 text-[11.5px] text-espresso-400">
                Bulk pricing from 10 boxes · pan-India shipping in 48–72 hours.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
