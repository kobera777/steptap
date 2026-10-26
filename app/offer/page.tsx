import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { offer } from "@/data/legal/offer";
import "./offer.css";

export const metadata: Metadata = {
  title: "Публичная оферта",
  description:
    "Публичная оферта STEP TAP на оказание услуг в сфере танцевального обучения, физической активности и проведения мероприятий. ИП Коберидзе Гиорги, Екатеринбург.",
};

/** Номер раздела («12. Разовые…» → «12») — для якорей оглавления. */
function sectionId(title: string) {
  return `p-${title.split(".")[0]}`;
}

/**
 * «Публичная оферта» — полный текст документа владельца (data/legal/offer.ts).
 * Ссылка на страницу — в подвале всех страниц (data/nav.ts → legalNav).
 */
export default function OfferPage() {
  return (
    <main className="lg-page">
      <SiteHeader />

      <article className="lg-doc">
        <header className="lg-head">
          <p className="lg-kicker">STEP TAP · {offer.city}</p>
          <h1>{offer.title}</h1>
          <p className="lg-subtitle">{offer.subtitle}</p>
          <p className="lg-dates">
            {offer.edition}
            <br />
            {offer.published}
          </p>
        </header>

        <nav className="lg-toc" aria-label="Содержание">
          <p className="lg-toc-title">Содержание</p>
          <ol>
            {offer.sections.map((section) => (
              <li key={section.title}>
                <a href={`#${sectionId(section.title)}`}>{section.title}</a>
              </li>
            ))}
            <li>
              <a href={`#${sectionId(offer.requisitesTitle)}`}>{offer.requisitesTitle}</a>
            </li>
          </ol>
        </nav>

        <div className="lg-intro">
          {offer.intro.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        {offer.sections.map((section) => (
          <section
            className="lg-section"
            id={sectionId(section.title)}
            key={section.title}
          >
            <h2>{section.title}</h2>
            {section.items.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </section>
        ))}

        <section
          className="lg-section lg-requisites"
          id={sectionId(offer.requisitesTitle)}
        >
          <h2>{offer.requisitesTitle}</h2>
          {offer.requisites.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <p className="lg-dates">
            {offer.published}
            <br />
            {offer.edition}
          </p>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
