import { SignupLink } from "@/components/layout/SignupLink";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { contactsPage } from "@/data/contacts";
import { siteContacts, socialLinks, telHref, yandexMapPageUrl } from "@/data/site";
import { SchoolMap } from "./SchoolMap";
import "./contacts.css";
import { Arrow } from "@/components/ui/Arrow";

/**
 * Контакты школы: где, как позвонить, куда написать и карта. Оформление — прежнего блока внизу главной,
 * тексты и порядок — из прототипа владельца.
 */
export function ContactsSection() {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts-heading">
        <p className="contacts-kicker">{contactsPage.kicker}</p>
        <h1>
          ДАВАЙ
          <br />
          ЗНАКОМИТЬСЯ.
        </h1>
        <p className="contacts-intro">{contactsPage.intro}</p>
      </div>

      <div className="contacts-grid">
        <div className="contacts-block">
          <span>ПРИХОДИ</span>
          <strong>{siteContacts.address}</strong>
          {siteContacts.addressNote && <small>{siteContacts.addressNote}</small>}
          <a href={yandexMapPageUrl()} target="_blank" rel="noreferrer">
            <small>
              Построить маршрут <Arrow />
            </small>
          </a>
        </div>

        <div className="contacts-block">
          <span>ПОЗВОНИ</span>
          {siteContacts.phone ? (
            <a href={telHref(siteContacts.phone)}>
              <strong>{siteContacts.phone}</strong>
            </a>
          ) : (
            <strong>Уточняется</strong>
          )}
          <small>{contactsPage.phoneNote}</small>
        </div>

        <div className="contacts-block">
          <span>НАПИШИ</span>
          <SignupLink>
            <strong>
              MAX <Arrow />
            </strong>
          </SignupLink>
          {siteContacts.email && (
            <a href={`mailto:${siteContacts.email}`}>
              <small>{siteContacts.email}</small>
            </a>
          )}
        </div>
      </div>

      <div className="contacts-actions">
        {socialLinks().map((item) => (
          <a key={item.key} href={item.href} target="_blank" rel="noreferrer">
            <SocialIcon name={item.key} />
            {item.label.toUpperCase()}{" "}
            <span>
              <Arrow />
            </span>
          </a>
        ))}
      </div>

      <SchoolMap />
    </section>
  );
}
