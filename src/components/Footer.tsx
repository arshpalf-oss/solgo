import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Instagram, LogoMark, Mail, MapPin, Phone, Sparkle, WhatsApp } from "./Icons";
import { Reveal } from "./ui";

const columns = [
  {
    title: "The atelier",
    links: [
      { label: "The menu", href: "#menu" },
      { label: "Our craft", href: "#craft" },
      { label: "Curated boxes", href: "#boxes" },
      { label: "Reviews", href: "#reviews" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Gifting",
    links: [
      { label: "Signature gift box", href: "#boxes" },
      { label: "Celebration cakes", href: "#menu" },
      { label: "Weddings & events", href: "#gifting" },
      { label: "Corporate hampers", href: "#gifting" },
      { label: "Bulk orders", href: "#gifting" },
    ],
  },
  {
    title: "The fine print",
    links: [
      { label: "Delivery areas", href: "#faq" },
      { label: "Allergens & ingredients", href: "#faq" },
      { label: "Freshness promise", href: "#craft" },
      { label: "Privacy policy", href: "#top" },
      { label: "Terms of service", href: "#top" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      setSubscribed(false);
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="grain relative overflow-hidden bg-espresso-950 text-cream-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(189,138,82,0.16),transparent_70%)] blur-2xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-caramel-500/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-24 sm:px-8 sm:pb-8 lg:px-12 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1.8fr] lg:gap-16">
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label="Sogno Tiramisù Atelier">
              <LogoMark className="h-11 w-11" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[26px] tracking-[-0.03em] text-cream-50">Sogno</span>
                <span className="mt-1 text-[8.5px] font-semibold tracking-[0.26em] text-caramel-300/80 uppercase">
                  Tiramisù Atelier
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-cream-100/55">
              Moradabad&rsquo;s little piece of Italy. Small-batch tiramisù, made honestly and
              delivered chilled — one beautifully over-generous box at a time.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-2.5 text-[12px] text-cream-100/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-caramel-400/80" />
                <span>12, Civil Lines, near Ram Ganga Vihar,<br />Moradabad, Uttar Pradesh 244001</span>
              </div>
              <a href="tel:+919876543210" className="flex items-center gap-2.5 text-[12px] text-cream-100/60 transition-colors hover:text-cream-50">
                <Phone className="h-4 w-4 shrink-0 text-caramel-400/80" /> +91 98765 43210
              </a>
              <a href="mailto:hello@sogno.in" className="flex items-center gap-2.5 text-[12px] text-cream-100/60 transition-colors hover:text-cream-50">
                <Mail className="h-4 w-4 shrink-0 text-caramel-400/80" /> hello@sogno.in
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {[
                { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
                { label: "WhatsApp", icon: WhatsApp, href: "https://wa.me/919876543210" },
                { label: "Email", icon: Mail, href: "mailto:hello@sogno.in" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/15 text-cream-100/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-caramel-300/50 hover:bg-cream-50/5 hover:text-cream-50"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[10px] font-bold tracking-[0.18em] text-caramel-300/80 uppercase">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[12px] text-cream-100/55 transition-colors hover:text-cream-50"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Reveal className="mt-12 rounded-[1.6rem] border border-cream-100/12 bg-cream-50/[0.04] p-5 backdrop-blur sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-1.5 text-[9.5px] font-bold tracking-[0.16em] text-caramel-300 uppercase">
                <Sparkle className="h-3 w-3" /> The batch list
              </div>
              <p className="mt-2 font-display text-[19px] leading-snug text-cream-50">
                First dibs on new flavours, limited batches and the odd free box.
              </p>
              <p className="mt-1 text-[11.5px] text-cream-100/45">
                One thoughtful email a fortnight. Unsubscribe whenever.
              </p>
            </div>
            <form onSubmit={submit} className="w-full max-w-md" noValidate>
              <div className="flex flex-col gap-2 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="you@example.com"
                  aria-describedby="newsletter-status"
                  aria-invalid={Boolean(error)}
                  className="h-11 flex-1 rounded-full border border-cream-100/20 bg-cream-50/5 px-4 text-[12.5px] text-cream-50 placeholder:text-cream-100/30 focus:border-caramel-300/70 focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn-shine group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-cream-50 px-5 text-[12px] font-bold text-espresso-900 transition-all hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
                >
                  {subscribed ? (
                    <>
                      <Check className="h-3.5 w-3.5" /> Subscribed
                    </>
                  ) : (
                    <>
                      Join the list
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>
              <div id="newsletter-status" aria-live="polite" className="min-h-5 pt-1.5">
                {error && <p className="text-[11px] text-[#f0b9a3]">{error}</p>}
                {subscribed && (
                  <p className="text-[11px] text-caramel-200">
                    You&rsquo;re in. Your first batch note is on its way.
                  </p>
                )}
              </div>
            </form>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-4 border-t border-cream-100/12 pt-6 text-[10.5px] text-cream-100/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sogno Tiramisù Atelier. Made with mascarpone in Moradabad.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>FSSAI Lic. 12722045000123</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>100% pure veg</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <a href="#top" className="transition-colors hover:text-cream-100">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
