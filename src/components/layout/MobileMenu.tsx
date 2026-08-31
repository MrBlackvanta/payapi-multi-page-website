"use client";

import { useEffect, useId, useRef, useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui";

import NavLinks from "./NavLinks";

function focusOncePainted(getElement: () => HTMLElement | null) {
  let frame = requestAnimationFrame(() => {
    frame = requestAnimationFrame(() => getElement()?.focus());
  });
  return () => cancelAnimationFrame(frame);
}

export default function MobileMenu({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    root.classList.add("v-scroll-lock");
    const cancelFocus = focusOncePainted(() => panelRef.current);

    const wide = window.matchMedia("(min-width: 48rem)");
    const closeWhenWide = () => {
      if (wide.matches) setOpen(false);
    };
    wide.addEventListener("change", closeWhenWide);

    const onKeyDown = (event: KeyboardEvent) => {
      const panel = panelRef.current;
      if (!panel) return;

      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const stops = [
        ...panel.querySelectorAll<HTMLElement>(
          "a[href], button:not(:disabled)",
        ),
      ];
      if (stops.length === 0) return;

      const first = stops[0];
      const last = stops[stops.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || active === panel)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      root.classList.remove("v-scroll-lock");
      cancelFocus();
      wide.removeEventListener("change", closeWhenWide);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <div className={className}>
      <button
        ref={toggleRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
        className="flex size-7 items-center justify-center text-ink"
      >
        <MenuIcon className="h-4.25 w-7" aria-hidden="true" />
      </button>

      <div
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        className={`fixed inset-0 z-50 transition-[opacity,visibility] duration-300 motion-reduce:transition-none ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          tabIndex={-1}
          inert={!open}
          className="ml-auto flex h-full w-75 flex-col bg-surface-dark px-6 pt-11.25 outline-none"
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="ml-auto flex size-7 items-center justify-center text-ink-inverse focus-visible:outline-ink-inverse"
          >
            <CloseIcon className="h-5.75 w-5.5" aria-hidden="true" />
          </button>

          <span className="mt-5.5 h-px bg-ink-inverse/15" />

          <nav aria-label="Main" className="mt-10.75">
            <NavLinks variant="drawer" onNavigate={close} />
          </nav>

          <Button href="/contact" className="mt-8 w-full" onClick={close}>
            Schedule a Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
