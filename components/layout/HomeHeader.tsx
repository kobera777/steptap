"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { homeNav, homeSignupHref, type HomeNavItem } from "@/data/nav";
import { siteName } from "@/data/site";
import { NavDropdown } from "./NavDropdown";

/** Ссылка меню: внутри страницы (#якорь) — обычный <a>, на другую страницу — <Link>. */
function NavLink({ item, onClick }: { item: HomeNavItem; onClick?: () => void }) {
  if (item.href.startsWith("#")) {
    return (
      <a href={item.href} onClick={onClick}>
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} onClick={onClick}>
      {item.label}
    </Link>
  );
}

/** Шапка главной страницы: логотип-картинка, выпадающие списки, мобильное меню.
 *  Пункты меню — в data/nav.ts (homeNav). */
export function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`site-header ${menuOpen ? "is-open" : ""}`} data-glass-header>
      <Link className="site-logo" href="/" aria-label={`${siteName} — на главную`}>
        <Image
          src="/step-tap-logo.png"
          alt={siteName}
          width={160}
          height={160}
          priority
        />
      </Link>

      <nav className="main-nav" aria-label="Главное меню">
        {homeNav.map((item) =>
          item.children ? (
            <NavDropdown key={item.label} trigger={<NavLink item={item} />}>
              {item.children.map((child) => (
                <NavLink key={child.label} item={child} />
              ))}
            </NavDropdown>
          ) : (
            <NavLink key={item.label} item={item} />
          ),
        )}
      </nav>

      <a className="header-action glass glass-dark" href={homeSignupHref}>
        ЗАПИСАТЬСЯ <span>→</span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <i />
      </button>

      <nav
        id="mobile-nav"
        className="mobile-nav glass glass-dark"
        aria-label="Мобильное меню"
        onClick={() => setMenuOpen(false)}
      >
        {homeNav.map((item) => (
          <NavLink key={item.label} item={item} />
        ))}
        <a href={homeSignupHref} className="mobile-nav-action">
          ЗАПИСАТЬСЯ →
        </a>
      </nav>
    </header>
  );
}
