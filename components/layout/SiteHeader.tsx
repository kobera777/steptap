"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav, signupHref } from "@/data/nav";
import { siteName, siteTagline } from "@/data/site";
import "./site-chrome.css";

/** Общая шапка всех страниц, кроме главной. Активный пункт определяется по адресу. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Пункт активен и на вложенных страницах (например, /gallery/album → ГАЛЕРЕЯ)
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  const links = mainNav.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className={isActive(item.href) ? "sc-active" : undefined}
      onClick={() => setOpen(false)}
    >
      {item.label}
    </Link>
  ));

  return (
    <header className={`sc-header ${open ? "is-open" : ""}`} data-glass-header>
      <Link href="/" className="sc-logo" aria-label={`${siteName} — на главную`}>
        <strong>
          {siteName}
          <span>.</span>
        </strong>
        <small>{siteTagline}</small>
      </Link>

      <nav className="sc-nav" aria-label="Главное меню">
        {links}
      </nav>

      <div className="sc-actions">
        <Link href={signupHref} className="sc-signup">
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

      <nav
        id="sc-mobile-menu"
        className="sc-mobile glass glass-solid"
        aria-label="Мобильное меню"
      >
        {links}
      </nav>
    </header>
  );
}
