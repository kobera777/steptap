import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SignupLink } from "@/components/layout/SignupLink";
import { FaqSection } from "@/components/sections/FaqSection";
import { halls, rentalFaq, rentalGroup, rentalIndividual, rub } from "@/data/prices";

/* Оформление общее со страницей цен: те же таблицы, карточки и рамки.
   Второй файл с тем же содержимым пришлось бы править в двух местах. */
import "../prices/prices.css";

export const metadata: Metadata = {
  title: "Аренда залов",
  description:
    "Аренда танцевальных залов STEP TAP в Екатеринбурге: три зала для репетиций, индивидуальных занятий, мастер-классов и съёмок. Тарифы за час.",
};

/** «Аренда»: тексты и порядок блоков — из прототипа владельца, оформление прежнее. */
export default function RentalPage() {
  return (
    <main className="pr-page">
      <SiteHeader />

      {/* HERO */}
      <section className="pr-hero">
        <div data-reveal="left">
          <p className="pr-kicker">АРЕНДА ЗАЛОВ</p>
          <h1>
            ТВОЯ ИДЕЯ.
            <br />
            НАШЕ <span>ПРОСТРАНСТВО.</span>
          </h1>
        </div>

        <div className="pr-hero-text" data-reveal="right" data-reveal-delay="2">
          <p>
            Для репетиций, индивидуальных занятий, мастер-классов и съёмок. Три зала в
            центре Екатеринбурга — выбирай формат и уточняй свободное время.
          </p>
        </div>
      </section>

      {/* ЗАЛЫ */}
      <section className="pr-section" id="halls">
        <div className="pr-halls">
          {halls.map((hall, index) => (
            <article
              key={hall.name}
              className="pr-hall"
              data-reveal="scale"
              data-reveal-delay={String((index % 3) + 1)}
            >
              <div className="pr-hall-photo">
                <Image
                  src={hall.photo}
                  alt={hall.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 45vw, 30vw"
                />
              </div>
              <h3>{hall.name}</h3>
              <p>{hall.description}</p>
              <SignupLink
                className="pr-hall-link"
                ariaLabel={`Узнать об аренде: ${hall.name.toLowerCase()}`}
              >
                УЗНАТЬ О ЗАЛЕ →
              </SignupLink>
            </article>
          ))}
        </div>
      </section>

      {/* ТАРИФЫ */}
      <section className="pr-section pr-section-alt" id="rates">
        <div className="pr-head" data-reveal>
          <p className="pr-kicker">ТАРИФЫ ЗА ЧАС</p>
          <h2>
            ПОНЯТНАЯ
            <br />
            СТОИМОСТЬ.
          </h2>
          <p className="pr-head-note">
            Тариф зависит от количества людей и времени аренды.
          </p>
        </div>

        {/* Индивидуальная аренда */}
        <div className="pr-rental-block" data-reveal>
          <h3 className="pr-sub">Индивидуальная аренда</h3>
          <p className="pr-sub-note">
            До 3 человек включительно: преподаватель и 1–2 ученика.
          </p>

          <div className="pr-table-wrap">
            <table className="pr-table pr-table-rental">
              <thead>
                <tr>
                  <th scope="col">Время</th>
                  <th scope="col">Большой зал</th>
                  <th scope="col">Средний зал</th>
                  <th scope="col">Маленький зал</th>
                </tr>
              </thead>
              <tbody>
                {rentalIndividual.map((rate) => (
                  <tr key={rate.time}>
                    <th scope="row">{rate.time}</th>
                    <td>
                      <span>{rub(rate.big)}</span>
                    </td>
                    <td>
                      <span>{rub(rate.medium)}</span>
                    </td>
                    <td>
                      <span>{rub(rate.small)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pr-rates">
            {rentalIndividual.map((rate) => (
              <article key={rate.time} className="pr-rate">
                <h4>{rate.time}</h4>
                <dl>
                  <div>
                    <dt>Большой</dt>
                    <dd>{rub(rate.big)}</dd>
                  </div>
                  <div>
                    <dt>Средний</dt>
                    <dd>{rub(rate.medium)}</dd>
                  </div>
                  <div>
                    <dt>Маленький</dt>
                    <dd>{rub(rate.small)}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>

        {/* Групповая аренда */}
        <div className="pr-rental-block" data-reveal>
          <h3 className="pr-sub">Групповая аренда</h3>
          <p className="pr-sub-note">
            От 4 человек: преподаватель и 3 или больше учеников. Доступный зал уточни при
            бронировании.
          </p>

          <ul className="pr-group-rates">
            {rentalGroup.map((rate) => (
              <li key={rate.time} className={rate.price === null ? "is-off" : undefined}>
                <strong>{rate.time}</strong>
                <span>{rate.price === null ? "—" : rub(rate.price)}</span>
                <small>{rate.status}</small>
              </li>
            ))}
          </ul>
        </div>

        <p className="pr-notice">
          Для дневной групповой аренды уточни временные границы тарифа. Площадь,
          вместимость, оборудование, правила оплаты и отмены бронирования согласуем до
          подтверждения.
        </p>

        <div className="pr-rental-actions" data-reveal>
          <SignupLink className="pr-button pr-button-dark">
            УТОЧНИТЬ СВОБОДНОЕ ВРЕМЯ <span>→</span>
          </SignupLink>
          <Link className="pr-rental-link" href="/contacts">
            КАК НАС НАЙТИ →
          </Link>
        </div>
      </section>

      <FaqSection
        title={
          <>
            ПЕРЕД
            <br />
            БРОНИРОВАНИЕМ
          </>
        }
        items={rentalFaq}
      />

      <SiteFooter />
    </main>
  );
}
