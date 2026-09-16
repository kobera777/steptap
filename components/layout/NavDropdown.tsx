"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Пункт меню с выпадающим списком: открывается по hover, а также по клику на стрелку
 *  (для планшетов и тач-экранов). Закрывается по клику вне меню и по Esc. */
export function NavDropdown({
  trigger,
  children,
}: {
  trigger: ReactNode;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`nav-dropdown ${open ? "is-open" : ""}`}>
      {trigger}
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Скрыть подменю" : "Показать подменю"}
        onClick={() => setOpen((value) => !value)}
      >
        ⌄
      </button>
      <div className="dropdown-menu glass glass-dark" onClick={() => setOpen(false)}>
        {children}
      </div>
    </div>
  );
}
