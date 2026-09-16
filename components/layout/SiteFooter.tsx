import Link from "next/link";
import { mainNav } from "@/data/nav";
import { siteContacts, siteName, siteTagline } from "@/data/site";
import "./site-chrome.css";

/** Общий подвал всех страниц. Ссылки на соцсети берутся из data/site.ts. */
export function SiteFooter() {
  const social = [
    { href: siteContacts.instagram, label: "Instagram", icon: "◎" },
    { href: siteContacts.youtube, label: "YouTube", icon: "▶" },
    { href: siteContacts.telegram, label: "Telegram", icon: "➤" },
  ];

  return (
    <footer className="sc-footer">
      <Link href="/" className="sc-footer-logo">
        <strong>
          {siteName}
          <span>.</span>
        </strong>
        <small>{siteTagline}</small>
      </Link>

      <nav className="sc-footer-nav" aria-label="Меню в подвале">
        {mainNav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="sc-social">
        {social.map((item) => (
          <a
            key={item.label}
            href={item.href || "#"}
            aria-label={item.label}
            target={item.href ? "_blank" : undefined}
            rel={item.href ? "noopener noreferrer" : undefined}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
