import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import {
  discountPercent,
  groupPlans,
  halls,
  individualTiers,
  isApproximate,
  packPerLesson,
  perLesson,
  rentalGroup,
  rentalIndividual,
  rentalRules,
  rub,
} from "@/data/prices";
import { features } from "@/data/home";
import "./prices.css";
import { SignupLink } from "@/components/layout/SignupLink";

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
            Приходите посмотреть, как всё устроено: первое занятие ничего не стоит. А
            дальше — чем больше занятий в абонементе, тем дешевле каждое.
          </p>
          <SignupLink className="pr-button">
            ЗАПИСАТЬСЯ НА ПРОБНОЕ <span>→</span>
          </SignupLink>
        </div>
      </section>

      {/* ПРОБНОЕ ЗАНЯТИЕ — первое число на странице должно быть нулём,
          а не суммой абонемента. */}
      <section className="pr-trial" data-reveal>
        <div className="pr-trial-main">
          <p className="pr-kicker">С ЧЕГО НАЧАТЬ</p>
          <p className="pr-trial-price">Бесплатно</p>
          <h2>Первое занятие</h2>
        </div>

        <div className="pr-trial-text">
          <p>
            Ничего не нужно платить и ничего не нужно уметь. Приходите, попробуйте и
            решайте после — абонемент никуда не денется.
          </p>
          <SignupLink className="pr-button">
            ЗАПИСАТЬСЯ <span>→</span>
          </SignupLink>
        </div>
      </section>

      {/* ЧТО ВХОДИТ В ЗАНЯТИЕ — сначала про занятие, потом про деньги. */}
      <section className="pr-includes">
        <div className="pr-head" data-reveal>
          <p className="pr-kicker">ЧТО ВХОДИТ В ЗАНЯТИЕ</p>
        </div>

        <div className="pr-includes-grid">
          {features.map((feature, index) => (
            <article
              key={feature.number}
              className="pr-include"
              data-reveal
              data-reveal-delay={String(index + 1)}
            >
              <span>{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.lines.join(" ")}</p>
            </article>
          ))}
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

                {/* Крупно — цена одного занятия, а не сумма абонемента:
                    «600 ₽» и «9 600 ₽» — это одно и то же предложение,
                    но читаются они совершенно по-разному. Полная сумма
                    стоит тут же, ниже: ничего не спрятано. */}
                <p className="pr-price">
                  {isApproximate(plan) && <i>≈ </i>}
                  {rub(perLesson(plan))}
                </p>
                <p className="pr-per">за занятие</p>

                <p className="pr-total">
                  {plan.lessons > 1
                    ? `${rub(plan.total)} за ${plan.title.toLowerCase()}`
                    : "Одно занятие без абонемента"}
                </p>

                {discountPercent(plan) > 0 && (
                  <p className="pr-save">−{discountPercent(plan)}% к разовому</p>
                )}
                {plan.note && <p className="pr-note">{plan.note}</p>}
                <SignupLink className="pr-card-button">
                  ЗАПИСАТЬСЯ <span>→</span>
                </SignupLink>
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
                    <span>{rub(tier.single)}</span>
                  </td>
                  {tier.packs.map((pack) => (
                    <td key={pack.lessons}>
                      <span>{rub(pack.total)}</span>
                      <small>{rub(packPerLesson(pack))} за занятие</small>
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
                      <small>{rub(packPerLesson(pack))} за занятие</small>
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <SignupLink className="pr-button pr-button-dark" data-reveal>
          ЗАПИСАТЬСЯ НА ИНДИВИДУАЛЬНОЕ <span>→</span>
        </SignupLink>
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

      <SiteFooter />
    </main>
  );
}
