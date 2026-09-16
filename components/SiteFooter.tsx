import Link from "next/link";
import { navItems } from "./nav-items";
import "./site-chrome.css";

export function SiteFooter() {
  return (
    <footer className="sc-footer">
      <Link href="/" className="sc-footer-logo">
        <strong>
          STEP TAP<span>.</span>
        </strong>
        <small>[ ТАНЦЕВАЛЬНАЯ ШКОЛА ]</small>
      </Link>

      <nav className="sc-footer-nav" aria-label="Меню в подвале">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="sc-social">
        <a href="#" aria-label="Instagram">
          ◎
        </a>
        <a href="#" aria-label="YouTube">
          ▶
        </a>
        <a href="#" aria-label="Telegram">
          ➤
        </a>
      </div>
    </footer>
  );
}
