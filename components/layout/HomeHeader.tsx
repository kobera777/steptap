"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { homeNav, type HomeNavItem } from "@/data/nav";
import { siteName } from "@/data/site";
import { NavDropdown } from "./NavDropdown";
import { SignupLink } from "@/components/layout/SignupLink";
import "./home-header.css";
import { Arrow } from "@/components/ui/Arrow";

/** Ссылка меню: внутри страницы (#якорь) — обычный <a>, на другую страницу — <Link>.
 *  Пункт текущего раздела подсвечен (is-active), в том числе на вложенных
 *  страницах: /directions/lady → НАПРАВЛЕНИЯ. */
function NavLink({ item, onClick }: { item: HomeNavItem; onClick?: () => void }) {
  const pathname = usePathname();
  if (item.href.startsWith("#")) {
    return (
      <a href={item.href} onClick={onClick}>
        {item.label}
      </a>
    );
  }
  const active =
    item.href !== "/" &&
    item.href.startsWith("/") &&
    !item.href.includes("#") &&
    (pathname === item.href || pathname.startsWith(`${item.href}/`));
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={active ? "is-active" : undefined}
      aria-current={active ? "page" : undefined}
    >
      {item.label}
    </Link>
  );
}

/** Шапка сайта — чёрная, одна и та же на всех страницах: логотип-картинка,
 *  выпадающие списки, мобильное меню. Пункты меню — в data/nav.ts (homeNav). */
export function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`site-header ${menuOpen ? "is-open" : ""}`} data-glass-header>
      {/* Официальные логотипы из фирменного комплекта (public/brand):
          горизонтальный — для шапки сайта, компактный — на узких экранах. */}
      <Link className="site-logo" href="/" aria-label={`${siteName} — на главную`}>
        <Image
          className="site-logo-wide"
          src="/brand/logo-horizontal-white.svg"
          alt={siteName}
          width={2511}
          height={494}
          unoptimized
        />
        <Image
          className="site-logo-compact"
          src="/brand/logo-compact-white.svg"
          alt=""
          width={1306}
          height={966}
          unoptimized
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

      <SignupLink className="header-action">
        ЗАПИСАТЬСЯ{" "}
        <span>
          <Arrow />
        </span>
      </SignupLink>

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
        className="mobile-nav glass glass-solid"
        aria-label="Мобильное меню"
        onClick={() => setMenuOpen(false)}
      >
        {homeNav.map((item) => (
          <NavLink key={item.label} item={item} />
        ))}
        <SignupLink className="mobile-nav-action">
          ЗАПИСАТЬСЯ <Arrow />
        </SignupLink>
      </nav>
    </header>
  );
}
