import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { signupHref } from "@/data/nav";
import {
  groupPlans,
  halls,
  individualTiers,
  rentalGroup,
  rentalIndividual,
  rentalRules,
  rub,
} from "@/data/prices";
import "./prices.css";

export const metadata: Metadata = {
  title: "Цены",
  description:
    "Стоимость групповых и индивидуальных занятий в школе танца STEP TAP, а также аренда залов: тарифы по времени и размеру зала.",
};

export default function PricesPage() {
  /* Нумерация разделов сдвигается, если блок групповых занятий ещё не заполнен. */
  const n = (base: number) =>
    String(groupPlans.length > 0 ? base : base - 1).padStart(2, "0");

  return (
    <main className="pr-page">
      <SiteHeader />

      {/* HERO */}
      <section className="pr-hero">
        <div data-reveal="left">
          <p className="pr-kicker">ЗАНЯТИЯ И АРЕНДА</p>
          <h1>
            ЦЕНЫ<span>.</span>
          </h1>
        </div>

        <div className="pr-hero-text" data-reveal="right" data-reveal-delay="2">
          <p>
            Абонемент выгоднее разового занятия: чем больше занятий, тем ниже цена
            каждого.
          </p>
          <Link className="pr-button" href={signupHref}>
            ЗАПИСАТЬСЯ <span>→</span>
          </Link>
        </div>
      </section>

      {/* ГРУППОВЫЕ ЗАНЯТИЯ — показывается, только когда заполнены данные */}
      {groupPlans.length > 0 && (
        <section className="pr-section" id="group">
          <div className="pr-head" data-reveal>
            <p className="pr-kicker">01 / ГРУППОВЫЕ</p>
            <h2>ГРУППОВЫЕ ЗАНЯТИЯ</h2>
          </div>

          <div className="pr-cards">
            {groupPlans.map((plan, index) => (
              <article
                key={plan.title}
                className={`pr-card ${plan.featured ? "is-featured" : ""}`}
                data-reveal
                data-reveal-delay={String((index % 4) + 1)}
              >
                {plan.featured && <span className="pr-badge">Популярный</span>}
                <h3>{plan.title}</h3>
                <p className="pr-price">{rub(plan.total)}</p>
                <p className="pr-per">{rub(plan.perLesson)} за занятие</p>
                {plan.note && <p className="pr-note">{plan.note}</p>}
                <Link className="pr-card-button" href={signupHref}>
                  ЗАПИСАТЬСЯ <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ */}
      <section className="pr-section pr-section-alt" id="individual">
        <div className="pr-head" data-reveal>
          <p className="pr-kicker">{n(2)} / ИНДИВИДУАЛЬНЫЕ</p>
          <h2>
            ИНДИВИДУАЛЬНЫЕ
            <br />
            ЗАНЯТИЯ
          </h2>
          <p className="pr-lead">
            Занятие один на один с тренером. Цена зависит от категории тренера и
            количества занятий в абонементе.
          </p>
        </div>

        {/* Таблица — для экранов пошире */}
        <div className="pr-table-wrap" data-reveal data-reveal-delay="1">
          <table className="pr-table">
            <thead>
              <tr>
                <th scope="col">Категория</th>
                <th scope="col">Разовое</th>
                <th scope="col">4 занятия</th>
                <th scope="col">8 занятий</th>
                <th scope="col">12 занятий</th>
              </tr>
            </thead>
            <tbody>
              {individualTiers.map((tier) => (
                <tr key={tier.category}>
                  <th scope="row">{tier.category}</th>
                  <td>
                    <b>{rub(tier.single)}</b>
                  </td>
                  {tier.packs.map((pack) => (
                    <td key={pack.lessons}>
                      <b>{rub(pack.total)}</b>
                      <small>{rub(pack.perLesson)} за занятие</small>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Карточки — для телефона */}
        <div className="pr-tiers">
          {individualTiers.map((tier, index) => (
            <article
              key={tier.category}
              className="pr-tier"
              data-reveal
              data-reveal-delay={String((index % 3) + 1)}
            >
              <h3>{tier.category}</h3>
              <dl>
                <div>
                  <dt>Разовое</dt>
                  <dd>{rub(tier.single)}</dd>
                </div>
                {tier.packs.map((pack) => (
                  <div key={pack.lessons}>
                    <dt>{pack.lessons} занятий</dt>
                    <dd>
                      {rub(pack.total)}
                      <small>{rub(pack.perLesson)} за занятие</small>
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <Link className="pr-button pr-button-dark" href={signupHref} data-reveal>
          ЗАПИСАТЬСЯ НА ИНДИВИДУАЛЬНОЕ <span>→</span>
        </Link>
      </section>

      {/* АРЕНДА ЗАЛОВ */}
      <section className="pr-section" id="rental">
        <div className="pr-head" data-reveal>
          <p className="pr-kicker">{n(3)} / АРЕНДА</p>
          <h2>АРЕНДА ЗАЛОВ</h2>
          <p className="pr-lead">
            Три зала для репетиций, индивидуальных занятий, мастер-классов и съёмок. Цена
            указана за час.
          </p>
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
                      <b>{rub(rate.big)}</b>
                    </td>
                    <td>
                      <b>{rub(rate.medium)}</b>
                    </td>
                    <td>
                      <b>{rub(rate.small)}</b>
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
                <span>{rate.time}</span>
                <b>{rate.price === null ? "—" : rub(rate.price)}</b>
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

        <Link className="pr-button pr-button-dark" href={signupHref} data-reveal>
          ЗАБРОНИРОВАТЬ ЗАЛ <span>→</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
