import { useEffect, useRef, useState } from "react";
import { pressLogos, stats } from "@/data";
import { Reveal } from "./ui";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function Counter({
  value,
  suffix,
  decimals = 0,
  label,
  start,
}: {
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
  start: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    let frame = 0;
    const duration = 1500;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString("en-IN");

  return (
    <div className="px-2 text-center sm:px-4">
      <p className="font-display text-[clamp(1.9rem,4vw,2.6rem)] leading-none tracking-[-0.03em] text-espresso-900">
        {formatted}
        <span className="text-caramel-600">{suffix}</span>
      </p>
      <p className="mt-2 text-[10.5px] font-semibold tracking-[0.16em] text-espresso-400 uppercase">
        {label}
      </p>
    </div>
  );
}

export function SocialProof() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const marqueeItems = [...pressLogos, ...pressLogos];

  return (
    <section aria-label="Social proof" className="relative border-y border-espresso-900/10 bg-cream-100/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-5 py-7 lg:flex-row lg:gap-10 lg:py-8">
          <p className="shrink-0 text-[10px] font-bold tracking-[0.2em] text-espresso-400 uppercase">
            Loved, reviewed &amp; reordered
          </p>
          <div className="marquee relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="marquee-track items-center gap-10 pr-10">
              {marqueeItems.map((logo, i) => (
                <span
                  key={`${logo}-${i}`}
                  aria-hidden={i >= pressLogos.length}
                  className="flex shrink-0 items-center gap-2.5 text-[13px] font-semibold tracking-wide whitespace-nowrap text-espresso-500/85"
                >
                  <span className="h-1 w-1 rounded-full bg-caramel-500" />
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div ref={ref} className="border-t border-espresso-900/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-9 sm:px-8 lg:grid-cols-4 lg:gap-0 lg:px-12 lg:py-10">
          {stats.map((stat, idx) => (
            <Reveal
              key={stat.label}
              delay={idx * 80}
              className={`flex items-center justify-center lg:border-r lg:border-espresso-900/10 lg:last:border-none ${
                idx % 2 === 1 ? "border-l border-espresso-900/10 lg:border-l-0" : ""
              }`}
            >
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals ?? 0}
                label={stat.label}
                start={inView}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
