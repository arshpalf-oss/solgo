import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Check } from "@/components/Icons";

export type Orderable = {
  id: string;
  name: string;
  price: number;
  image?: string;
  detail?: string;
};

export type OrderLine = Orderable & { qty: number };

type OrderContextValue = {
  items: OrderLine[];
  count: number;
  subtotal: number;
  giftWrap: boolean;
  setGiftWrap: (value: boolean) => void;
  isOpen: boolean;
  openOrder: () => void;
  closeOrder: () => void;
  add: (item: Orderable, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  toast: string | null;
  notify: (message: string) => void;
};

const OrderContext = createContext<OrderContextValue | null>(null);
const FREE_DELIVERY_AT = 899;

export function OrderProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<OrderLine[]>([]);
  const [giftWrap, setGiftWrap] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const notify = useCallback((message: string) => {
    setToast(message);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 3200);
  }, []);

  const add = useCallback(
    (item: Orderable, qty = 1) => {
      setItems((prev) => {
        const existing = prev.find((line) => line.id === item.id);
        if (existing) {
          return prev.map((line) =>
            line.id === item.id ? { ...line, qty: Math.min(12, line.qty + qty) } : line,
          );
        }
        return [...prev, { ...item, qty }];
      });
      notify(`${item.name} added to your box`);
    },
    [notify],
  );

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((line) => line.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((line) => line.id !== id)
        : prev.map((line) => (line.id === id ? { ...line, qty: Math.min(12, qty) } : line)),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<OrderContextValue>(() => {
    const count = items.reduce((sum, line) => sum + line.qty, 0);
    const subtotal = items.reduce((sum, line) => sum + line.qty * line.price, 0) + (giftWrap ? 99 : 0);
    return {
      items,
      count,
      subtotal,
      giftWrap,
      setGiftWrap,
      isOpen,
      openOrder: () => setIsOpen(true),
      closeOrder: () => setIsOpen(false),
      add,
      remove,
      setQty,
      clear,
      toast,
      notify,
    };
  }, [items, giftWrap, isOpen, add, remove, setQty, clear, toast, notify]);

  return (
    <OrderContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 bottom-20 z-[110] flex justify-center px-4 sm:bottom-7">
        <div
          role="status"
          aria-live="polite"
          className={`flex items-center gap-2.5 rounded-full border border-caramel-500/25 bg-espresso-900/95 px-5 py-3 text-[13px] font-medium text-cream-50 shadow-lift backdrop-blur transition-all duration-500 ${
            toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
          }`}
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-caramel-400/25 text-caramel-200">
            <Check className="h-3 w-3" />
          </span>
          {toast ?? ""}
        </div>
      </div>
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used inside OrderProvider");
  return ctx;
}

export const deliveryMeta = {
  freeAt: FREE_DELIVERY_AT,
};
