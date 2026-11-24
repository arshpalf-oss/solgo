import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  as?: ElementType;
  id?: string;
};

export function Reveal({ children, className, delay = 0, direction = "up", as, id }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={cn("reveal", visible && "is-visible", className)}
      data-direction={direction === "up" ? undefined : direction}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

export function SectionLabel({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.22em] uppercase",
        tone === "dark" ? "text-espresso-500" : "text-caramel-300",
        className,
      )}
    >
      <span
        className={cn(
          "inline-block h-px w-7",
          tone === "dark" ? "bg-caramel-500/70" : "bg-caramel-400/70",
        )}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "light" | "outlineLight";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
  full?: boolean;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-espresso-900 text-cream-50 hover:bg-espresso-800 shadow-[0_18px_40px_-18px_rgba(33,21,14,0.75)] border border-espresso-900",
  secondary:
    "bg-cream-100/70 text-espresso-900 border border-espresso-900/15 hover:border-espresso-900/35 hover:bg-cream-100 backdrop-blur",
  ghost: "bg-transparent text-espresso-800 hover:bg-espresso-900/5 border border-transparent",
  light: "bg-cream-50 text-espresso-900 hover:bg-white border border-cream-50",
  outlineLight:
    "bg-transparent text-cream-100 border border-cream-100/30 hover:border-cream-100/70 hover:bg-cream-50/5",
};

const sizes = {
  sm: "h-9 px-4 text-[12px]",
  md: "h-11 px-5 text-[13px]",
  lg: "h-13 px-7 text-sm",
};

export function Button({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ariaLabel,
  full,
}: ButtonProps) {
  const classes = cn(
    "btn-shine group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[0.01em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
    variants[variant],
    sizes[size],
    full && "w-full",
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export function Stars({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5 text-caramel-600", className)} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
          <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45 6.2 20.5l1.1-6.45L2.6 9.45l6.5-.95L12 2.6Z" />
        </svg>
      ))}
    </div>
  );
}

export function inr(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}
