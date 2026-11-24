import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = "h-5 w-5";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="1" y="1" width="46" height="46" rx="14" fill="#2D1D14" />
      <rect x="1.75" y="1.75" width="44.5" height="44.5" rx="13.25" stroke="#D3A775" strokeOpacity="0.4" strokeWidth="1.5" />
      <path d="M14 31c0-6.6 3.2-13.8 10-17 .9-.5 2 .1 2 1.2V18c0 2.5 1.1 4.2 3.2 5.7 2.6 1.9 4.8 4.1 4.8 7.3H14Z" fill="#E9CDA6" fillOpacity="0.92" />
      <path d="M14 31h22c0 2.8-2.3 5-5 5H19c-2.8 0-5-2.2-5-5Z" fill="#BD8A52" />
      <circle cx="24" cy="15.5" r="1.6" fill="#F4E9D7" />
    </svg>
  );
}

export function ArrowRight({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ChevronDown({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ChevronLeft({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ChevronRight({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function Star({ className = "h-4 w-4", ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...p}>
      <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45 6.2 20.5l1.1-6.45L2.6 9.45l6.5-.95L12 2.6Z" />
    </svg>
  );
}

export function Sparkle({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <path d="M12 3c.6 4.4 2.6 6.4 7 7-4.4.6-6.4 2.6-7 7-.6-4.4-2.6-6.4-7-7 4.4-.6 6.4-2.6 7-7Z" />
      <path d="M18.5 15.5c.25 1.9 1.1 2.75 3 3-1.9.25-2.75 1.1-3 3-.25-1.9-1.1-2.75-3-3 1.9-.25 2.75-1.1 3-3Z" />
    </svg>
  );
}

export function Leaf({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <path d="M20 4c0 8.5-4.6 13-12 13H4c0-9 4.8-13 12-13h4Z" />
      <path d="M4.5 20c1.6-5.2 4.8-8.3 9.5-10.5" />
    </svg>
  );
}

export function Clock({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3.2 2" />
    </svg>
  );
}

export function Truck({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <path d="M2 6.5h11v11H2z" />
      <path d="M13 10h4.2l3.3 3.4v4.1H13z" />
      <circle cx="6.5" cy="18.5" r="1.8" />
      <circle cx="17" cy="18.5" r="1.8" />
    </svg>
  );
}

export function Gift({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <path d="M4 11h16v9H4z" />
      <path d="M2.5 7.5h19V11h-19z" />
      <path d="M12 7.5V20" />
      <path d="M12 7.5S10.8 4 8.5 4a2 2 0 0 0 0 4H12Zm0 0S13.2 4 15.5 4a2 2 0 0 1 0 4H12Z" />
    </svg>
  );
}

export function Coffee({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <path d="M4 9h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z" />
      <path d="M17 10.5h1.6a2.9 2.9 0 0 1 0 5.8H17" />
      <path d="M8 3v2.5M12 2.5V5" />
    </svg>
  );
}

export function Shield({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <path d="M12 3 5 5.8v5.4c0 4.3 2.9 8.2 7 9.8 4.1-1.6 7-5.5 7-9.8V5.8L12 3Z" />
      <path d="m8.8 11.7 2.2 2.2 4.2-4.4" />
    </svg>
  );
}

export function Check({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function X({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Menu({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className={className} aria-hidden="true" {...p}>
      <path d="M4 7.5h16M4 12h16M4 16.5h10" />
    </svg>
  );
}

export function Plus({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className} aria-hidden="true" {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Minus({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className} aria-hidden="true" {...p}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function MapPin({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function Phone({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <path d="M5.5 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2L20 14.5v3a2.5 2.5 0 0 1-2.7 2.5A15.5 15.5 0 0 1 3 5.7 2.5 2.5 0 0 1 5.5 3Z" />
    </svg>
  );
}

export function Mail({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.8 7 8.2 6 8.2-6" />
    </svg>
  );
}

export function Instagram({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ShoppingBag({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...p}>
      <path d="M5 8h14l-1.1 12.2H6.1L5 8Z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </svg>
  );
}

export function WhatsApp({ className = base, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...p}>
      <path d="M12.05 2C6.6 2 2.2 6.4 2.2 11.85c0 1.9.53 3.67 1.46 5.19L2 22l5.1-1.6a9.8 9.8 0 0 0 4.95 1.34h.01c5.45 0 9.85-4.4 9.85-9.85 0-2.63-1.02-5.1-2.88-6.96A9.78 9.78 0 0 0 12.05 2Zm0 1.8c2.15 0 4.17.84 5.69 2.36a8 8 0 0 1 2.36 5.7c0 4.45-3.6 8.06-8.06 8.06a8.1 8.1 0 0 1-4.1-1.12l-.3-.17-3.03.95.96-2.95-.19-.31a8.04 8.04 0 0 1-1.24-4.28c0-4.46 3.62-8.07 8.07-8.07Zm-2.6 4.02c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.06 3.15 5 4.24 2.44.9 2.94.72 3.47.67.53-.05 1.71-.7 1.95-1.37.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.57-.35-.3-.15-1.71-.85-1.98-.94-.27-.1-.46-.15-.66.15-.2.3-.76.95-.93 1.15-.17.2-.34.22-.64.07-.3-.15-1.24-.46-2.37-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.65-1.57-.9-2.14-.23-.55-.47-.56-.66-.57l-.54-.01Z" />
    </svg>
  );
}

export function Bag({ className = base, ...p }: IconProps) {
  return <ShoppingBag className={className} {...p} />;
}

export const iconMap = {
  clock: Clock,
  coffee: Coffee,
  leaf: Leaf,
  sparkle: Sparkle,
  truck: Truck,
  gift: Gift,
  shield: Shield,
} as const;

export type IconKey = keyof typeof iconMap;
