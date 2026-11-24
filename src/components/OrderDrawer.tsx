import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { products, deliveryAreas } from "@/data";
import { deliveryMeta, useOrder } from "@/store/order";
import { cn } from "@/utils/cn";
import {
  ArrowRight,
  Check,
  Gift,
  Leaf,
  MapPin,
  Minus,
  Plus,
  Shield,
  Sparkle,
  Truck,
  WhatsApp,
  X,
} from "./Icons";
import { Button, inr } from "./ui";

type Step = "box" | "details" | "done";

type Details = {
  name: string;
  phone: string;
  area: string;
  address: string;
  pincode: string;
  note: string;
};

const emptyDetails: Details = { name: "", phone: "", area: "", address: "", pincode: "", note: "" };
const DELIVERY_FEE = 79;

export function OrderDrawer() {
  const {
    items,
    isOpen,
    closeOrder,
    setQty,
    remove,
    giftWrap,
    setGiftWrap,
    add,
    subtotal,
    clear,
  } = useOrder();
  const [step, setStep] = useState<Step>("box");
  const [details, setDetails] = useState<Details>(emptyDetails);
  const [errors, setErrors] = useState<Partial<Record<keyof Details, string>>>({});
  const [orderRef, setOrderRef] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const itemsTotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = itemsTotal === 0 || itemsTotal >= deliveryMeta.freeAt ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;
  const remaining = Math.max(0, deliveryMeta.freeAt - itemsTotal);
  const progress = Math.min(100, (itemsTotal / deliveryMeta.freeAt) * 100);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => closeRef.current?.focus(), 80);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeOrder();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const nodes = panelRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
      previous?.focus?.();
    };
  }, [isOpen, closeOrder]);

  useEffect(() => {
    if (!isOpen) {
      setStep("box");
      setErrors({});
    }
  }, [isOpen]);

  useEffect(() => {
    if (step === "details") {
      const t = setTimeout(() => firstFieldRef.current?.focus(), 120);
      return () => clearTimeout(t);
    }
  }, [step]);

  if (!isOpen) return null;

  const handleClose = () => {
    closeOrder();
    if (step === "done") {
      setStep("box");
      setDetails(emptyDetails);
    }
  };

  const updateDetail = (key: keyof Details, value: string) => {
    setDetails((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<keyof Details, string>> = {};
    if (details.name.trim().length < 2) next.name = "Please tell us who to address this to.";
    if (!/^[6-9]\d{9}$/.test(details.phone.replace(/\s/g, ""))) next.phone = "Enter a valid 10-digit mobile number.";
    if (!details.area) next.area = "Choose your delivery area.";
    if (details.address.trim().length < 8) next.address = "A little more detail helps our rider.";
    if (!/^\d{6}$/.test(details.pincode)) next.pincode = "Enter a valid 6-digit pincode.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const ref = `SNG-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRef(ref);
    setStep("done");
  };

  const whatsappMessage = encodeURIComponent(
    [
      `Hi Sogno! I'd like to confirm order ${orderRef}.`,
      "",
      ...items.map((item) => `• ${item.qty} × ${item.name} — ${inr(item.price * item.qty)}`),
      giftWrap ? "• Gift wrap + handwritten note — ₹99" : "",
      `Delivery: ${delivery === 0 ? "Free" : inr(delivery)}`,
      `Total: ${inr(total)}`,
      "",
      `Name: ${details.name}`,
      `Phone: ${details.phone}`,
      `Address: ${details.address}, ${details.area}, ${details.pincode}`,
      details.note ? `Note: ${details.note}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
  );

  const suggestions = products.slice(0, 3);

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-labelledby="order-title">
      <button
        type="button"
        className="fade-in absolute inset-0 cursor-default bg-espresso-950/55 backdrop-blur-sm"
        aria-label="Close order drawer"
        onClick={handleClose}
        tabIndex={-1}
      />

      <div
        ref={panelRef}
        className="drawer-enter absolute inset-y-0 right-0 flex w-full max-w-[27.5rem] flex-col bg-cream-50 shadow-lift sm:max-w-[29rem]"
      >
        <header className="flex items-start justify-between gap-4 border-b border-espresso-900/10 px-5 py-4 sm:px-6">
          <div>
            <p className="text-[9.5px] font-bold tracking-[0.18em] text-caramel-600 uppercase">
              {step === "box" ? "Your box" : step === "details" ? "Almost there" : "Order received"}
            </p>
            <h2 id="order-title" className="mt-1 font-display text-[24px] leading-tight text-espresso-900">
              {step === "box" && (items.length > 0 ? "Let's make it official." : "Start your box.")}
              {step === "details" && "Where should it go?"}
              {step === "done" && "Grazie mille."}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={handleClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-espresso-900/12 text-espresso-700 transition-colors hover:border-espresso-900/30 hover:bg-cream-100"
            aria-label="Close order drawer"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        {step === "box" && (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
              {items.length === 0 ? (
                <div>
                  <div className="rounded-[1.3rem] border border-dashed border-espresso-900/20 bg-cream-100/50 p-6 text-center">
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-caramel-200/60 text-espresso-800">
                      <Gift className="h-5 w-5" />
                    </span>
                    <p className="mt-3 font-display text-[19px] text-espresso-900">An empty box is a sad box.</p>
                    <p className="mx-auto mt-1.5 max-w-xs text-[12px] leading-relaxed text-espresso-500">
                      Add a flavour below, or start with the box everyone orders twice.
                    </p>
                  </div>

                  <p className="mt-6 text-[9.5px] font-bold tracking-[0.17em] text-espresso-400 uppercase">
                    Atelier favourites
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {suggestions.map((product) => (
                      <li
                        key={product.id}
                        className="flex items-center gap-3 rounded-2xl border border-espresso-900/10 bg-cream-100/40 p-2.5"
                      >
                        <img
                          src={product.image}
                          alt=""
                          loading="lazy"
                          className="h-14 w-14 shrink-0 rounded-xl object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[13px] font-semibold text-espresso-900">{product.name}</p>
                          <p className="mt-0.5 text-[10.5px] text-espresso-400">{product.serves}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => add(product, 1)}
                          className="flex shrink-0 items-center gap-1 rounded-full bg-espresso-900 px-3 py-2 text-[10.5px] font-bold text-cream-50 transition-transform active:scale-95"
                          aria-label={`Add ${product.name} to your box`}
                        >
                          <Plus className="h-3 w-3" /> {inr(product.price)}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <>
                  <div className="rounded-xl border border-espresso-900/10 bg-cream-100/50 p-3.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="flex items-center gap-1.5 font-semibold text-espresso-700">
                        <Truck className="h-3.5 w-3.5 text-caramel-600" />
                        {remaining === 0 ? "Free delivery unlocked" : `${inr(remaining)} away from free delivery`}
                      </span>
                      <span className="font-semibold text-espresso-400">{Math.round(progress)}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-espresso-900/10">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-700",
                          remaining === 0 ? "bg-green-700" : "bg-caramel-500",
                        )}
                        style={{ width: `${Math.max(progress, 6)}%` }}
                      />
                    </div>
                  </div>

                  <ul className="mt-4 divide-y divide-espresso-900/10">
                    {items.map((item) => (
                      <li key={item.id} className="flex gap-3 py-4 first:pt-1">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt=""
                            loading="lazy"
                            className="h-[4.5rem] w-[4.5rem] shrink-0 rounded-xl object-cover"
                          />
                        ) : (
                          <span className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-xl bg-espresso-900 text-caramel-200">
                            <Gift className="h-5 w-5" />
                          </span>
                        )}
                        <div className="flex min-w-0 flex-1 flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-[13px] leading-snug font-semibold text-espresso-900">{item.name}</p>
                            <p className="shrink-0 text-[13px] font-semibold text-espresso-900">
                              {inr(item.price * item.qty)}
                            </p>
                          </div>
                          <p className="mt-0.5 text-[10.5px] text-espresso-400">
                            {item.detail ?? "Box of 4 · serves 2"}
                          </p>
                          <div className="mt-auto flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2.5 rounded-full border border-espresso-900/15 px-1 py-0.5">
                              <button
                                type="button"
                                onClick={() => setQty(item.id, item.qty - 1)}
                                className="flex h-6 w-6 items-center justify-center rounded-full text-espresso-700 transition-colors hover:bg-espresso-900/5"
                                aria-label={`Reduce quantity of ${item.name}`}
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="min-w-3 text-center text-[11.5px] font-semibold" aria-live="polite">
                                {item.qty}
                              </span>
                              <button
                                type="button"
                                onClick={() => setQty(item.id, item.qty + 1)}
                                className="flex h-6 w-6 items-center justify-center rounded-full text-espresso-700 transition-colors hover:bg-espresso-900/5"
                                aria-label={`Increase quantity of ${item.name}`}
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <button
                              type="button"
                              onClick={() => remove(item.id)}
                              className="text-[10.5px] font-medium text-espresso-400 underline-offset-4 transition-colors hover:text-clay-500 hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setGiftWrap(!giftWrap)}
                    aria-pressed={giftWrap}
                    className={cn(
                      "mt-4 flex w-full items-center gap-3 rounded-2xl border p-3.5 text-left transition-all",
                      giftWrap
                        ? "border-caramel-500/60 bg-caramel-200/30"
                        : "border-espresso-900/12 bg-cream-100/40 hover:border-espresso-900/25",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors",
                        giftWrap ? "bg-espresso-900 text-caramel-200" : "bg-cream-50 text-espresso-600",
                      )}
                    >
                      <Gift className="h-4 w-4" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-[12.5px] font-semibold text-espresso-900">
                        Make it a gift · ₹99
                      </span>
                      <span className="mt-0.5 block text-[10.5px] text-espresso-500">
                        Ribbon, keepsake tin &amp; handwritten note
                      </span>
                    </span>
                    <span
                      className={cn(
                        "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                        giftWrap ? "bg-espresso-900" : "bg-espresso-900/20",
                      )}
                    >
                      <span
                        className={cn(
                          "absolute top-0.5 h-4 w-4 rounded-full bg-cream-50 shadow transition-all",
                          giftWrap ? "left-[1.15rem]" : "left-0.5",
                        )}
                      />
                    </span>
                  </button>

                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-cream-100/60 px-3 py-2.5 text-[10.5px] text-espresso-500">
                    <Leaf className="h-3.5 w-3.5 shrink-0 text-caramel-600" />
                    100% eggless · sealed &amp; chilled · no payment needed now
                  </div>
                </>
              )}
            </div>

            <footer className="border-t border-espresso-900/10 bg-cream-50 px-5 py-4 sm:px-6">
              <div className="flex items-center justify-between text-[11.5px] text-espresso-500">
                <span>Subtotal (incl. gift wrap)</span>
                <span className="font-semibold text-espresso-900">{inr(subtotal)}</span>
              </div>
              <div className="mt-1 flex items-center justify-between text-[11.5px] text-espresso-500">
                <span>Delivery</span>
                <span className={delivery === 0 ? "font-semibold text-green-700" : ""}>
                  {items.length === 0 ? "—" : delivery === 0 ? "Free" : inr(delivery)}
                </span>
              </div>
              <div className="my-3 h-px bg-espresso-900/10" />
              <div className="flex items-baseline justify-between">
                <span className="text-[12px] font-semibold text-espresso-900">Total</span>
                <span className="font-display text-[24px] text-espresso-900">{inr(total)}</span>
              </div>
              <button
                type="button"
                disabled={items.length === 0}
                onClick={() => setStep("details")}
                className="btn-shine mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-espresso-900 text-[12.5px] font-bold text-cream-50 transition-all enabled:hover:-translate-y-0.5 enabled:hover:bg-espresso-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue to delivery <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-2.5 flex items-center justify-center gap-1.5 text-center text-[9.5px] text-espresso-400">
                <Shield className="h-3 w-3" /> Freshness guaranteed — or the box is on us.
              </p>
            </footer>
          </>
        )}

        {step === "details" && (
          <form onSubmit={submit} noValidate className="flex min-h-0 flex-1 flex-col">
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
              <button
                type="button"
                onClick={() => setStep("box")}
                className="mb-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-espresso-500 hover:text-espresso-900"
              >
                ← Back to your box
              </button>

              <div className="grid gap-3.5">
                <Field
                  label="Full name"
                  error={errors.name}
                  input={
                    <input
                      ref={firstFieldRef}
                      id="order-name"
                      autoComplete="name"
                      value={details.name}
                      onChange={(e) => updateDetail("name", e.target.value)}
                      placeholder="Ananya Gupta"
                      aria-invalid={Boolean(errors.name)}
                      className={inputClass(errors.name)}
                    />
                  }
                />
                <Field
                  label="Mobile number"
                  error={errors.phone}
                  input={
                    <input
                      id="order-phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      maxLength={10}
                      value={details.phone}
                      onChange={(e) => updateDetail("phone", e.target.value.replace(/\D/g, ""))}
                      placeholder="98765 43210"
                      aria-invalid={Boolean(errors.phone)}
                      className={inputClass(errors.phone)}
                    />
                  }
                />
                <div className="grid grid-cols-2 gap-3">
                  <Field
                    label="Pincode"
                    error={errors.pincode}
                    input={
                      <input
                        id="order-pincode"
                        inputMode="numeric"
                        autoComplete="postal-code"
                        maxLength={6}
                        value={details.pincode}
                        onChange={(e) => updateDetail("pincode", e.target.value.replace(/\D/g, ""))}
                        placeholder="244001"
                        aria-invalid={Boolean(errors.pincode)}
                        className={inputClass(errors.pincode)}
                      />
                    }
                  />
                  <Field
                    label="Area"
                    error={errors.area}
                    input={
                      <select
                        id="order-area"
                        value={details.area}
                        onChange={(e) => updateDetail("area", e.target.value)}
                        aria-invalid={Boolean(errors.area)}
                        className={cn(inputClass(errors.area), "appearance-none pr-8")}
                      >
                        <option value="">Choose area</option>
                        {deliveryAreas.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                        <option value="Other / outside Moradabad">Other / outside city</option>
                      </select>
                    }
                  />
                </div>
                <Field
                  label="Delivery address"
                  error={errors.address}
                  input={
                    <textarea
                      id="order-address"
                      rows={2}
                      autoComplete="street-address"
                      value={details.address}
                      onChange={(e) => updateDetail("address", e.target.value)}
                      placeholder="House / flat, street, landmark"
                      aria-invalid={Boolean(errors.address)}
                      className={cn(inputClass(errors.address), "h-auto resize-none py-2.5")}
                    />
                  }
                />
                <Field
                  label="Gift note or delivery instructions (optional)"
                  input={
                    <textarea
                      id="order-note"
                      rows={2}
                      value={details.note}
                      onChange={(e) => updateDetail("note", e.target.value)}
                      placeholder="Write 'Happy birthday, Ma' on the card…"
                      className={cn(inputClass(undefined), "h-auto resize-none py-2.5")}
                    />
                  }
                />
              </div>

              <div className="mt-4 rounded-2xl border border-espresso-900/10 bg-cream-100/60 p-3.5">
                <p className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.13em] text-espresso-500 uppercase">
                  <MapPin className="h-3.5 w-3.5 text-caramel-600" /> Same-day cut-off 5 PM
                </p>
                <p className="mt-1 text-[10.5px] leading-relaxed text-espresso-500">
                  We&rsquo;ll confirm your slot on WhatsApp within 15 minutes. Outside Moradabad?
                  We ship pan-India in 48–72 hours.
                </p>
              </div>
            </div>

            <footer className="border-t border-espresso-900/10 px-5 py-4 sm:px-6">
              <div className="mb-3 flex items-baseline justify-between">
                <span className="text-[11.5px] text-espresso-500">
                  {items.reduce((n, i) => n + i.qty, 0)} items · delivery included
                </span>
                <span className="font-display text-[22px] text-espresso-900">{inr(total)}</span>
              </div>
              <Button type="submit" full size="lg">
                Confirm order request <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="mt-2.5 text-center text-[9.5px] text-espresso-400">
                No payment now. Pay on delivery or via UPI after confirmation.
              </p>
            </footer>
          </form>
        )}

        {step === "done" && (
          <div className="flex flex-1 flex-col overflow-y-auto px-5 py-6 sm:px-6">
            <div className="rise-in flex flex-col items-center text-center">
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-espresso-900 text-caramel-200">
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-caramel-400/40" />
                <Check className="relative h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-[26px] text-espresso-900">Your box is reserved.</h3>
              <p className="mt-2 max-w-xs text-[12.5px] leading-relaxed text-espresso-500">
                Order <span className="font-bold text-espresso-900">{orderRef}</span> is with our
                atelier. We&rsquo;ll WhatsApp {details.phone || "you"} within 15 minutes to confirm
                the batch and delivery slot.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-espresso-900/10 bg-cream-100/50 p-4">
              <p className="text-[9.5px] font-bold tracking-[0.16em] text-espresso-400 uppercase">Order summary</p>
              <ul className="mt-2.5 space-y-1.5">
                {items.map((item) => (
                  <li key={item.id} className="flex justify-between gap-3 text-[11.5px] text-espresso-600">
                    <span>
                      {item.qty} × {item.name}
                    </span>
                    <span>{inr(item.price * item.qty)}</span>
                  </li>
                ))}
                {giftWrap && (
                  <li className="flex justify-between gap-3 text-[11.5px] text-espresso-600">
                    <span>Gift wrap + note</span>
                    <span>₹99</span>
                  </li>
                )}
                <li className="flex justify-between gap-3 text-[11.5px] text-espresso-600">
                  <span>Delivery</span>
                  <span>{delivery === 0 ? "Free" : inr(delivery)}</span>
                </li>
              </ul>
              <div className="mt-3 flex justify-between border-t border-espresso-900/10 pt-2.5 text-[13px] font-bold text-espresso-900">
                <span>Total</span>
                <span>{inr(total)}</span>
              </div>
              <p className="mt-3 text-[10px] leading-relaxed text-espresso-400">
                Delivering to {details.name}, {details.address}, {details.area} — {details.pincode}
              </p>
            </div>

            <div className="mt-5 space-y-2.5">
              <a
                href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-shine flex h-12 w-full items-center justify-center gap-2 rounded-full bg-espresso-900 text-[12.5px] font-bold text-cream-50 transition-all hover:-translate-y-0.5 hover:bg-espresso-800"
              >
                <WhatsApp className="h-4 w-4" /> Send confirmation on WhatsApp
              </a>
              <button
                type="button"
                onClick={() => {
                  clear();
                  setDetails(emptyDetails);
                  setStep("box");
                }}
                className="flex h-11 w-full items-center justify-center gap-1.5 rounded-full border border-espresso-900/15 text-[12px] font-semibold text-espresso-700 transition-colors hover:border-espresso-900/30"
              >
                Order something else <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <p className="mt-auto flex items-center justify-center gap-1.5 pt-6 text-center text-[9.5px] text-espresso-400">
              <Sparkle className="h-3 w-3 text-caramel-600" /> Thank you for supporting a small
              Moradabad atelier.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function inputClass(error?: string) {
  return cn(
    "h-11 w-full rounded-xl border bg-cream-100/50 px-3.5 text-[12.5px] text-espresso-900 placeholder:text-espresso-400/70 transition-colors focus:outline-none",
    error
      ? "border-clay-500/70 focus:border-clay-600"
      : "border-espresso-900/12 focus:border-caramel-600/70 focus:bg-cream-50",
  );
}

function Field({
  label,
  input,
  error,
}: {
  label: string;
  input: ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[10px] font-bold tracking-[0.13em] text-espresso-500 uppercase">
        {label}
      </span>
      {input}
      {error && <span className="mt-1 block text-[10.5px] text-clay-600">{error}</span>}
    </label>
  );
}
