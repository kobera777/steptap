"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, type NavHref } from "./nav-items";
import "./site-chrome.css";

export function SiteHeader({ active }: { active?: NavHref }) {
  const [open, setOpen] = useState(false);

  const links = navItems.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className={item.href === active ? "sc-active" : undefined}
      onClick={() => setOpen(false)}
    >
      {item.label}
    </Link>
  ));

  return (
    <header className={`sc-header ${open ? "is-open" : ""}`} data-glass-header>
      <Link href="/" className="sc-logo" aria-label="STEP TAP — на главную">
        <strong>
          STEP TAP<span>.</span>
        </strong>
        <small>[ ТАНЦЕВАЛЬНАЯ ШКОЛА ]</small>
      </Link>

      <nav className="sc-nav" aria-label="Главное меню">
        {links}
      </nav>

      <div className="sc-actions">
        <Link href="/signup" className="sc-signup">
          ЗАПИСАТЬСЯ <b>→</b>
        </Link>

        <button
          type="button"
          className="sc-burger"
          aria-expanded={open}
          aria-controls="sc-mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
        >
          <i />
        </button>
      </div>

      <nav id="sc-mobile-menu" className="sc-mobile glass" aria-label="Мобильное меню">
        {links}
      </nav>
    </header>
  );
}
