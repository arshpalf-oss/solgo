import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { useOrder } from "@/store/order";
import { ArrowRight, LogoMark, Menu, ShoppingBag, Sparkle, X } from "./Icons";

const links = [
  { label: "The menu", href: "#menu" },
  { label: "Our craft", href: "#craft" },
  { label: "Gifting", href: "#gifting" },
  { label: "Reviews", href: "#reviews" },
  { label: "Boxes", href: "#boxes" },
  { label: "FAQ", href: "#faq" },
];

export function AnnouncementBar() {
  return (
    <div className="relative z-[45] overflow-hidden bg-espresso-900 text-cream-100">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-5 py-2.5 text-center text-[11px] font-medium tracking-[0.08em] sm:text-[11.5px]">
        <span className="inline-flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-caramel-300" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-caramel-300" />
          </span>
          Fresh batch out at 11 AM &amp; 5 PM
        </span>
        <span className="hidden h-3 w-px bg-cream-100/20 sm:block" aria-hidden="true" />
        <span className="text-cream-100/75">
          Free same-day delivery across Moradabad above ₹899
        </span>
        <span className="hidden h-3 w-px bg-cream-100/20 md:block" aria-hidden="true" />
        <span className="hidden text-caramel-300 md:inline-flex md:items-center md:gap-1.5">
          <Sparkle className="h-3 w-3" /> Order before 5 PM for tonight
        </span>
      </div>
    </div>
  );
}

export function Navbar() {
  const { count, openOrder } = useOrder();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bump, setBump] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = links
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (count > 0) {
      setBump(true);
      const t = setTimeout(() => setBump(false), 420);
      return () => clearTimeout(t);
    }
  }, [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-espresso-900/10 bg-cream-50/85 shadow-[0_8px_30px_-20px_rgba(33,21,14,0.4)] backdrop-blur-xl"
            : "border-b border-transparent bg-cream-50/60 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:h-[72px] sm:px-8 lg:px-12">
          <a
            href="#top"
            className="flex shrink-0 items-center gap-3 rounded-full"
            aria-label="Sogno Tiramisù Atelier — back to top"
          >
            <LogoMark className="h-10 w-10 transition-transform duration-500 hover:rotate-6 sm:h-11 sm:w-11" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[22px] tracking-[-0.03em] text-espresso-900 sm:text-[24px]">
                Sogno
              </span>
              <span className="mt-1 text-[8.5px] font-semibold tracking-[0.26em] text-espresso-400 uppercase">
                Tiramisù Atelier
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {links.map((link) => {
              const isActive = activeId === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "underline-sweep relative text-[13px] font-medium tracking-[0.01em] transition-colors hover:text-espresso-900",
                    isActive ? "text-espresso-900" : "text-espresso-600",
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-1 w-1 rounded-full bg-clay-500 transition-all duration-300",
                      isActive ? "scale-100 opacity-100" : "scale-0 opacity-0",
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+919876543210"
              className="hidden text-[12px] font-semibold tracking-wide text-espresso-600 transition-colors hover:text-espresso-900 xl:block"
            >
              +91 98765 43210
            </a>
            <button
              type="button"
              onClick={openOrder}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-espresso-900/12 bg-cream-100/60 text-espresso-800 transition-all duration-300 hover:border-espresso-900/30 hover:bg-cream-100"
              aria-label={`Open your box, ${count} item${count === 1 ? "" : "s"}`}
            >
              <ShoppingBag className={cn("h-[18px] w-[18px] transition-transform", bump && "scale-110")} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-clay-500 px-1 text-[10px] font-bold text-white shadow-sm">
                  {count}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={openOrder}
              className="btn-shine group hidden h-10 items-center gap-2 rounded-full bg-espresso-900 px-5 text-[12.5px] font-semibold text-cream-50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso-800 sm:inline-flex"
            >
              Order now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso-900/12 text-espresso-800 lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] bg-transparent">
          <div
            className="h-full origin-left bg-gradient-to-r from-caramel-500 via-caramel-600 to-clay-500 transition-transform duration-150 ease-out"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[70] flex flex-col bg-cream-50 fade-in lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="grain relative flex h-full flex-col overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 sm:px-8">
              <span className="flex items-center gap-2.5">
                <LogoMark className="h-9 w-9" />
                <span className="font-display text-xl text-espresso-900">Sogno</span>
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso-900/15 text-espresso-800"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-4 flex flex-col px-5 sm:px-8" aria-label="Mobile">
              {links.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rise-in flex items-baseline justify-between border-b border-espresso-900/10 py-4 font-display text-[28px] leading-none text-espresso-900"
                  style={{ animationDelay: `${i * 45}ms` }}
                >
                  {link.label}
                  <span className="text-[11px] font-sans font-medium tracking-[0.18em] text-espresso-400">
                    0{i + 1}
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-auto space-y-4 px-5 pt-8 pb-10 sm:px-8">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openOrder();
                }}
                className="btn-shine flex h-13 w-full items-center justify-center gap-2 rounded-full bg-espresso-900 text-sm font-semibold text-cream-50"
              >
                Build your box <ArrowRight className="h-4 w-4" />
              </button>
              <div className="flex flex-col gap-1 text-center text-[12px] text-espresso-500">
                <a href="tel:+919876543210" className="font-semibold text-espresso-800">
                  +91 98765 43210
                </a>
                <span>Civil Lines, Moradabad · 11 AM – 10 PM</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


export function MobileOrderBar() {
  const { count, openOrder, isOpen } = useOrder();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = show && !isOpen;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-espresso-900/12 bg-cream-50/92 px-4 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl transition-all duration-500 sm:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-bold tracking-[0.15em] text-espresso-400 uppercase">
            Tonight&rsquo;s batch · 14 boxes left
          </p>
          <p className="mt-0.5 text-[12.5px] font-semibold text-espresso-900">
            {count > 0 ? `${count} item${count === 1 ? "" : "s"} in your box` : "Fresh tiramisù, chilled in ~60 min"}
          </p>
        </div>
        <button
          type="button"
          onClick={openOrder}
          className="btn-shine group inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-espresso-900 px-4 text-[12px] font-bold text-cream-50 active:scale-95"
        >
          {count > 0 ? "View box" : "Order now"}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
