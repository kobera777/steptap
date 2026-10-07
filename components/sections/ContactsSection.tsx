import { SignupLink } from "@/components/layout/SignupLink";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { contactsPage, messageExamples } from "@/data/contacts";
import { siteContacts, socialLinks, telHref, yandexMapPageUrl } from "@/data/site";
import { SchoolMap } from "./SchoolMap";
import "./contacts.css";

/**
 * Контакты школы: где, как позвонить, куда написать, карта и примеры
 * первого сообщения. Оформление — прежнего блока внизу главной,
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
            <small>Построить маршрут →</small>
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
            <strong>MAX →</strong>
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
            {item.label.toUpperCase()} <span>→</span>
          </a>
        ))}
      </div>

      <SchoolMap />

      {/* Самое страшное в записи — первое сообщение незнакомым людям.
          Показываем, что писать можно совсем коротко. */}
      <div className="contacts-write">
        <p className="contacts-kicker">ЧТО НАПИСАТЬ</p>
        <h2>
          МОЖНО ПРОСТО: <span>«ХОЧУ НА ТАНЦЫ».</span>
        </h2>

        <div className="contacts-write-list">
          {messageExamples.map((example) => (
            <SignupLink
              key={example.label}
              className="contacts-write-item"
              ariaLabel={`Написать в MAX: ${example.text}`}
            >
              <small>{example.label}</small>
              <span>«{example.text}»</span>
              <i>НАПИСАТЬ →</i>
            </SignupLink>
          ))}
        </div>
      </div>
    </section>
  );
}
