import { useState, type FormEvent } from "react";
import ctaImage from "@/assets/hero-tiramisu.jpg";
import { useOrder } from "@/store/order";
import { ArrowRight, Check, MapPin, Sparkle, WhatsApp } from "./Icons";
import { Button, Reveal } from "./ui";

export function FinalCTA() {
  const { openOrder } = useOrder();
  const [pincode, setPincode] = useState("");
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  const check = (e: FormEvent) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(pincode.trim())) {
      setResult({ ok: false, message: "Please enter a valid 6-digit pincode." });
      return;
    }
    const code = pincode.trim();
    if (code.startsWith("244")) {
      setResult({
        ok: true,
        message: `Lovely — we deliver same-day to ${code}. Order before 5 PM for tonight.`,
      });
      return;
    }
    setResult({
      ok: true,
      message: `We ship to ${code} pan-India in 48–72 hours, cold-chain. Same-day is Moradabad-only.`,
    });
  };

  return (
    <section aria-labelledby="cta-heading" className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="grain relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-espresso-900 text-cream-50 shadow-lift sm:rounded-[2.6rem]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(211,167,117,0.34),transparent_66%)] blur-2xl" />
          <div className="absolute -bottom-32 left-1/4 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(178,92,55,0.25),transparent_70%)] blur-2xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-caramel-400/60 to-transparent" />
        </div>

        <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-14 lg:p-14">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-cream-100/20 bg-cream-50/5 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-caramel-200 uppercase backdrop-blur">
                <Sparkle className="h-3 w-3" /> The last slice is a decision
              </div>
              <h2
                id="cta-heading"
                className="mt-5 font-display text-[clamp(2.1rem,4.8vw,3.6rem)] leading-[1.02] tracking-[-0.035em] text-cream-50"
              >
                Your table deserves
                <span className="block italic text-caramel-300">the good stuff.</span>
              </h2>
              <p className="mt-4 max-w-md text-[14px] leading-relaxed text-cream-100/65">
                Fresh batches leave the atelier twice a day. Order before 5 PM and we&rsquo;ll have
                a chilled box at your door tonight — ribbon, handwritten note and all.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <form onSubmit={check} className="mt-7 max-w-md" noValidate>
                <label htmlFor="pincode" className="text-[10px] font-bold tracking-[0.16em] text-cream-100/50 uppercase">
                  Check same-day delivery
                </label>
                <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                  <div className="relative flex-1">
                    <MapPin className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-cream-100/40" />
                    <input
                      id="pincode"
                      name="pincode"
                      inputMode="numeric"
                      autoComplete="postal-code"
                      maxLength={6}
                      value={pincode}
                      onChange={(e) => {
                        setPincode(e.target.value.replace(/\D/g, ""));
                        setResult(null);
                      }}
                      placeholder="Enter your 6-digit pincode"
                      aria-describedby="pincode-status"
                      className="h-12 w-full rounded-full border border-cream-100/20 bg-cream-50/8 pr-4 pl-11 text-[13px] text-cream-50 placeholder:text-cream-100/35 focus:border-caramel-300/70 focus:bg-cream-50/12 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-shine group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cream-50 px-6 text-[12.5px] font-bold text-espresso-900 transition-all hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
                  >
                    Check
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
                <div id="pincode-status" aria-live="polite" className="min-h-6 pt-2">
                  {result && (
                    <p
                      className={`flex items-start gap-1.5 text-[11.5px] ${
                        result.ok ? "text-caramel-200" : "text-[#f0b9a3]"
                      }`}
                    >
                      {result.ok && <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" />}
                      {result.message}
                    </p>
                  )}
                </div>
              </form>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button variant="light" size="lg" onClick={openOrder} className="w-full sm:w-auto">
                  Build your box
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  href="https://wa.me/919876543210?text=Hi%20Sogno%2C%20I%27d%20like%20to%20order%20tiramisu"
                  variant="outlineLight"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <WhatsApp className="h-4 w-4" /> Order on WhatsApp
                </Button>
              </div>
              <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10.5px] text-cream-100/45">
                <span>No payment now</span>
                <span aria-hidden="true">·</span>
                <span>Confirm on WhatsApp</span>
                <span aria-hidden="true">·</span>
                <span>Freshness guaranteed</span>
              </p>
            </Reveal>
          </div>

          <Reveal direction="scale" delay={120} className="relative">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-cream-100/15">
              <img
                src={ctaImage}
                alt="A chilled box of Sogno tiramisù ready for delivery"
                loading="lazy"
                className="aspect-[4/3.4] w-full object-cover lg:aspect-[4/4.6]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/10 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-cream-100/20 bg-espresso-950/45 p-3.5 backdrop-blur-xl">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.14em] text-caramel-200 uppercase">
                    Tonight&rsquo;s batch
                  </p>
                  <p className="mt-1 text-[12.5px] font-semibold text-cream-50">
                    14 boxes left · order before 5 PM
                  </p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream-50 text-espresso-900">
                  <Sparkle className="h-4 w-4" />
                </span>
              </div>
            </div>
            <div className="absolute -top-3 -left-3 hidden items-center gap-2 rounded-full border border-cream-100/25 bg-cream-50 px-3.5 py-2 text-[10.5px] font-bold text-espresso-900 shadow-soft sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
              Atelier open · delivering now
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
