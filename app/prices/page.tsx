import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SignupLink } from "@/components/layout/SignupLink";
import { IndividualTable } from "@/components/prices/IndividualTable";
import {
  groupPlans,
  isApproximate,
  perLesson,
  rub,
  singleLesson,
  firstLesson,
  firstLessonWithPlan,
} from "@/data/prices";
import "./prices.css";

export const metadata: Metadata = {
  title: "Цены",
  description:
    "Стоимость групповых и индивидуальных занятий в школе танца STEP TAP: первое занятие, абонементы на 4, 8, 12 и 16 занятий и индивидуальные тарифы.",
};

/**
 * Страница цен — по структуре и текстам прототипа владельца
 * (сначала первое занятие, потом абонементы, потом индивидуальные),
 * со шрифтом и цветами текущего сайта.
 */
export default function PricesPage() {
  return (
    <main className="pr-page">
      <SiteHeader />

      {/* Заголовок страницы для поисковиков и экранного диктора; видимую шапку
          владелец убрал. */}
      <h1 className="pr-visually-hidden">Цены на занятия в STEP TAP</h1>

      {/* ПЕРВОЕ ЗНАКОМСТВО */}
      <section className="pr-intro">
        <div className="pr-first">
          <div className="pr-first-main">
            <p className="pr-eyebrow">ПЕРВОЕ ГРУППОВОЕ ЗАНЯТИЕ</p>
            <p className="pr-first-price">{rub(firstLesson.price)}</p>

            <div className="pr-first-deal">
              <span>С абонементом</span>
              <s>{rub(firstLesson.price)}</s>
              <strong>{rub(firstLessonWithPlan())}</strong>
            </div>

            <SignupLink className="pr-btn pr-btn-dark">
              НА ПЕРВОЕ ЗАНЯТИЕ <span>→</span>
            </SignupLink>
          </div>

          {/* Печать «−50 %» — как штамп: круг, повёрнутый на несколько градусов. */}
          <div className="pr-first-stamp" aria-hidden="true">
            <b>−50 %</b>
            <small>
              ПРИ ПОКУПКЕ
              <br />
              АБОНЕМЕНТА
            </small>
          </div>
        </div>
      </section>

      {/* ГРУППОВЫЕ */}
      <section className="pr-block" id="group">
        <div className="pr-sectionhead">
          <div>
            <p className="pr-eyebrow">01 / ГРУППОВЫЕ ЗАНЯТИЯ</p>
            <h2>
              ВЫБЕРИ
              <br />
              СВОЙ РИТМ.
            </h2>
          </div>
        </div>

        <div className="pr-plans">
          {groupPlans.map((plan) => (
            <article
              key={plan.title}
              className={`pr-plan${plan.featured ? " is-featured" : ""}`}
            >
              <p className="pr-plan-label">{plan.label}</p>
              <h3>{plan.title.toUpperCase()}</h3>
              <p className="pr-plan-total">{rub(plan.total)}</p>
              <p className="pr-plan-unit">
                <strong>{rub(perLesson(plan))}</strong> / занятие
                {isApproximate(plan) && " ≈"}
              </p>
              <SignupLink
                className={`pr-btn${plan.featured ? "" : " pr-btn-ghost"}`}
                ariaLabel={`Выбрать абонемент: ${plan.title}, ${rub(plan.total)}`}
              >
                ВЫБРАТЬ АБОНЕМЕНТ <span>→</span>
              </SignupLink>
            </article>
          ))}
        </div>

        <div className="pr-single">
          <div>
            <p className="pr-eyebrow">БЕЗ АБОНЕМЕНТА</p>
            <p>Разовое групповое занятие</p>
          </div>
          <strong>{rub(singleLesson.total)}</strong>
          <SignupLink className="pr-btn pr-btn-ghost">
            ЗАПИСАТЬСЯ <span>→</span>
          </SignupLink>
        </div>
      </section>

      {/* ИНДИВИДУАЛЬНЫЕ */}
      <section className="pr-block pr-block-sand" id="individual">
        <div className="pr-sectionhead">
          <div>
            <h2>
              ИНДИВИДУАЛЬНЫЕ
              <br />
              ЗАНЯТИЯ
            </h2>
          </div>
        </div>

        <IndividualTable />
      </section>

      <SiteFooter />
    </main>
  );
}
