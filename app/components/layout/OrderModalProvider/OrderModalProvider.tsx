"use client";

import { cn } from "@/app/components/lib/cn";
import { ORDER_WAYS } from "@/app/data/orderWays";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { createPortal } from "react-dom";

type OrderModalContextValue = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  isOpen: boolean;
};

const OrderModalContext = React.createContext<OrderModalContextValue | null>(
  null,
);

export function useOrderModal() {
  const ctx = React.useContext(OrderModalContext);
  if (!ctx)
    throw new Error("useOrderModal must be used within OrderModalProvider");
  return ctx;
}

export function OrderModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  const open = React.useCallback(() => setIsOpen(true), []);
  const close = React.useCallback(() => setIsOpen(false), []);
  const toggle = React.useCallback(() => setIsOpen((v) => !v), []);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  React.useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const value: OrderModalContextValue = { open, close, toggle, isOpen };

  return (
    <OrderModalContext.Provider value={value}>
      {children}
      {mounted && isOpen ? <OrderModal onClose={close} /> : null}
    </OrderModalContext.Provider>
  );
}

function OrderModal({ onClose }: { onClose: () => void }) {
  const locale = useLocale();
  const t = useTranslations("orderModal");

  return createPortal(
    <div className="fixed inset-0 z-[999]">
      <button
        aria-label="Close order modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/80"
      />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          className={cn(
            "relative w-full max-w-lg overflow-hidden rounded-2xl",
            "border border-white/10 bg-[#0b0b0b]/95 backdrop-blur",
            "shadow-[0_30px_120px_rgba(0,0,0,0.7)]",
          )}
        >
          <div className="absolute inset-x-0 top-0 h-[2px] bg-[#C59D5F]" />

          <div className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#FDEEDA]">
                  {t("title")}
                </h3>
                <p className="mt-1 text-xs text-white/60">
                  {t("subtitle")}
                </p>
              </div>

              <button
                onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-white/80 transition hover:bg-white/10"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {ORDER_WAYS.map((way) => (
                <Link
                  key={way.key}
                  href={way.href[locale as "en" | "ar"]}
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
                >
                  <div
                    className={cn(
                      "grid h-11 w-11 place-items-center rounded-full overflow-hidden",
                      way.variant === "primary"
                        ? "bg-[#C59D5F]"
                        : "bg-white/10",
                    )}
                  >
                    <Image
                      src={way.iconSrc}
                      alt={way.key}
                      width={28}
                      height={28}
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-[#FDEEDA]">
                      {t(`ways.${way.key}.label`)}
                    </div>
                    <div className="text-xs text-white/55">
                      {t(`ways.${way.key}.subLabel`)}
                    </div>
                  </div>

                  <span className="ml-auto text-white/40 transition group-hover:text-white/70">
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-xs text-white/50">
                {t("tip")}
              </div>

              <button
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/10"
              >
                {t("close")}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M10 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}