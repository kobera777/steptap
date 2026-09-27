import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import {
  discountPercent,
  groupPlans,
  individualTiers,
  isApproximate,
  packPerLesson,
  perLesson,
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
          <p className="pr-kicker">02 / ИНДИВИДУАЛЬНЫЕ</p>
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

      {/* Конец страницы — снова про первое занятие: это шаг, который
          нужен от человека, дочитавшего до конца прайса. */}
      <section className="pr-closing" data-reveal>
        <div>
          <p className="pr-kicker">С ЧЕГО НАЧАТЬ</p>
          <h2>
            Начните
            <br />с бесплатного
          </h2>
        </div>

        <div className="pr-closing-text">
          <p>
            Выбирать абонемент проще, когда уже сходил на занятие. Первое — бесплатное, и
            после него вопросов о цене обычно не остаётся.
          </p>
          <SignupLink className="pr-button">
            ЗАПИСАТЬСЯ НА ПРОБНОЕ <span>→</span>
          </SignupLink>
        </div>
      </section>

      {/* Пришли за залом, а не за занятиями — вот куда идти. */}
      <section className="pr-crosslink" data-reveal>
        <p>Нужен зал для репетиции или своих занятий?</p>
        <Link href="/rental">Аренда залов →</Link>
      </section>

      <SiteFooter />
    </main>
  );
}
