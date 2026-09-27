import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { halls, rentalGroup, rentalIndividual, rentalRules, rub } from "@/data/prices";
import { SignupLink } from "@/components/layout/SignupLink";

/* Оформление общее со страницей цен: те же таблицы, карточки и рамки.
   Второй файл с тем же содержимым пришлось бы править в двух местах. */
import "../prices/prices.css";
import "./rental.css";

export const metadata: Metadata = {
  title: "Аренда залов",
  description:
    "Аренда танцевальных залов STEP TAP в Екатеринбурге: три зала для репетиций, индивидуальных занятий, мастер-классов и съёмок. Тарифы по времени и размеру зала.",
};

export default function RentalPage() {
  return (
    <main className="pr-page">
      <SiteHeader />

      {/* HERO */}
      <section className="pr-hero">
        <div data-reveal="left">
          <p className="pr-kicker">ДЛЯ ТРЕНЕРОВ И КОМАНД</p>
          <h1>
            АРЕНДА<span>.</span>
          </h1>
        </div>

        <div className="pr-hero-text" data-reveal="right" data-reveal-delay="2">
          <p>
            Три зала для репетиций, индивидуальных занятий, мастер-классов и съёмок. Цена
            указана за час.
          </p>
          <SignupLink className="pr-button">
            ЗАБРОНИРОВАТЬ ЗАЛ <span>→</span>
          </SignupLink>
        </div>
      </section>

      {/* ЗАЛЫ */}
      <section className="pr-section" id="halls">
        <div className="pr-head" data-reveal>
          <p className="pr-kicker">01 / ЗАЛЫ</p>
          <h2>ТРИ ЗАЛА</h2>
        </div>

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
            </article>
          ))}
        </div>
      </section>

      {/* ТАРИФЫ */}
      <section className="pr-section pr-section-alt" id="rates">
        <div className="pr-head" data-reveal>
          <p className="pr-kicker">02 / ТАРИФЫ</p>
          <h2>СТОИМОСТЬ ЧАСА</h2>
        </div>

        {/* Индивидуальная аренда */}
        <div className="pr-rental-block" data-reveal>
          <h3 className="pr-sub">Индивидуальная аренда</h3>
          <p className="pr-sub-note">Тренер + 1–2 ученика, максимум 3 человека в зале.</p>

          <div className="pr-table-wrap">
            <table className="pr-table pr-table-rental">
              <thead>
                <tr>
                  <th scope="col">Время</th>
                  <th scope="col">Большой зал</th>
                  <th scope="col">Средний зал</th>
                  <th scope="col">Маленький зал</th>
                  <th scope="col">Условие</th>
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
                    <td>{rate.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pr-rates">
            {rentalIndividual.map((rate) => (
              <article key={rate.time} className="pr-rate">
                <h4>{rate.time}</h4>
                <p className="pr-rate-note">{rate.note}</p>
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
          <p className="pr-sub-note">Тренер + 3 и более учеников, от 4 человек в зале.</p>

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

        {/* Правила */}
        <div className="pr-rules" data-reveal>
          <h3 className="pr-sub">Правила аренды</h3>
          <ol>
            {rentalRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ol>
        </div>

        <SignupLink className="pr-button pr-button-dark" data-reveal>
          ЗАБРОНИРОВАТЬ ЗАЛ <span>→</span>
        </SignupLink>
      </section>

      {/* Пришли не за этим — вот куда идти. */}
      <section className="rn-crosslink" data-reveal>
        <p>Ищете занятия, а не зал?</p>
        <Link href="/prices">Цены на занятия →</Link>
      </section>

      <SiteFooter />
    </main>
  );
}
