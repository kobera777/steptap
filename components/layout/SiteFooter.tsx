import Link from "next/link";
import { mainNav } from "@/data/nav";
import { siteContacts, siteLegal, siteName, siteTagline, telHref } from "@/data/site";
import "./site-chrome.css";

/** Общий подвал всех страниц. Контакты и реквизиты берутся из data/site.ts. */
export function SiteFooter() {
  const social = [
    { href: siteContacts.instagram, label: "Instagram", icon: "◎" },
    { href: siteContacts.youtube, label: "YouTube", icon: "▶" },
    { href: siteContacts.telegram, label: "Telegram", icon: "➤" },
  ].filter((item) => item.href);

  const address = [siteContacts.address, siteContacts.addressNote]
    .filter(Boolean)
    .join(", ");

  return (
    <footer className="sc-footer">
      <div className="sc-footer-top">
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

        {social.length > 0 && (
          <div className="sc-social">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="sc-footer-contacts">
        {address && (
          <p className="sc-footer-address">
            <span>Адрес</span>
            {address}
          </p>
        )}

        <p className="sc-footer-reach">
          {siteContacts.phone && (
            <a href={telHref(siteContacts.phone)}>{siteContacts.phone}</a>
          )}
          {siteContacts.email && (
            <a href={`mailto:${siteContacts.email}`}>{siteContacts.email}</a>
          )}
        </p>
      </div>

      <p className="sc-footer-legal">
        {siteLegal.entity} · ИНН {siteLegal.inn} · ОГРНИП {siteLegal.ogrnip}
      </p>
    </footer>
  );
}
