import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SignupLink } from "@/components/layout/SignupLink";
import { FaqSection } from "@/components/sections/FaqSection";
import { FirstStepBand } from "@/components/sections/FirstStepBand";
import { IndividualCalculator } from "@/components/prices/IndividualCalculator";
import {
  LESSONS_PER_WEEK,
  firstClassSteps,
  groupPlans,
  isApproximate,
  perLesson,
  priceFaq,
  rub,
  savings,
  singleLesson,
  trialPrice,
  weeks,
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
  const rounded = groupPlans.filter(isApproximate);

  return (
    <main className="pr-page">
      <SiteHeader />

      {/* ШАПКА */}
      <section className="pr-pagehead">
        <p className="pr-eyebrow">СТОИМОСТЬ ЗАНЯТИЙ</p>
        <h1>
          СНАЧАЛА ПОПРОБУЙ.
          <br />
          ПОТОМ ВЫБИРАЙ.
        </h1>
        <p className="pr-lead">
          Не нужно покупать большой абонемент, чтобы познакомиться со школой. Приходи на
          первое занятие и решай после урока.
        </p>
      </section>

      {/* ПЕРВОЕ ЗНАКОМСТВО */}
      <section className="pr-intro">
        <div>
          <p className="pr-eyebrow">ДЛЯ ПЕРВОГО ЗНАКОМСТВА</p>
          <h2>
            ОДНО ЗАНЯТИЕ.
            <br />
            БОЛЬШЕ ЯСНОСТИ.
          </h2>

          {firstClassSteps.map((step, index) => (
            <div className="pr-benefit" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>
                <strong>{step.title}</strong>
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="pr-first">
          <p className="pr-eyebrow">ПЕРВОЕ ГРУППОВОЕ ЗАНЯТИЕ</p>
          <span className="pr-ribbon">−50 % ОТ РАЗОВОГО</span>
          <p className="pr-first-price">{rub(trialPrice())}</p>
          <p>
            <strong>Бесплатно при покупке абонемента после занятия.</strong> Без покупки —{" "}
            {rub(trialPrice())}.
          </p>
          <SignupLink className="pr-btn pr-btn-dark">
            НА ПЕРВОЕ ЗАНЯТИЕ <span>→</span>
          </SignupLink>
          <p className="pr-small">
            Условия для выбранной группы и учёт первого занятия в абонементе уточни при
            записи.
          </p>
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
          <p>
            Чем больше занятий в абонементе, тем ниже стоимость одного урока. Выбирай по
            своему расписанию.
          </p>
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
              <p className="pr-small">за весь абонемент</p>
              <p className="pr-plan-unit">
                <strong>{rub(perLesson(plan))}</strong> / занятие
                {isApproximate(plan) && " ≈"}
              </p>
              <ul>
                <li>{plan.reason}</li>
                <li>
                  Ориентир: {weeks(plan)} нед. при {LESSONS_PER_WEEK} уроках в неделю
                </li>
                <li>
                  На {rub(savings(plan))} меньше, чем {plan.lessons} разовых
                </li>
              </ul>
              <SignupLink
                className={`pr-btn${plan.featured ? "" : " pr-btn-ghost"}`}
                ariaLabel={`Выбрать абонемент: ${plan.title}, ${rub(plan.total)}`}
              >
                ВЫБРАТЬ АБОНЕМЕНТ <span>→</span>
              </SignupLink>
            </article>
          ))}
        </div>

        <p className="pr-small pr-muted pr-footnote">
          Недели — ориентир при регулярном посещении, не срок действия.
          {rounded.map((plan) => (
            <span key={plan.title}>
              {" "}
              {rub(perLesson(plan))} за занятие в абонементе на {plan.lessons} занятий —
              округлённое значение.
            </span>
          ))}
        </p>

        <div className="pr-tools">
          <div>
            <p>Не уверен, какой абонемент нужен?</p>
            <p>
              <strong>Начни с первого занятия.</strong> Выбрать формат можно после урока.
            </p>
          </div>
          <SignupLink className="pr-btn">
            ОБСУДИТЬ СО ШКОЛОЙ <span>→</span>
          </SignupLink>
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

        <div className="pr-notice">
          Перед покупкой уточни срок действия абонемента, правила пропусков и то, на какие
          группы он распространяется. Условия специальных занятий могут отличаться.
        </div>
      </section>

      {/* ИНДИВИДУАЛЬНЫЕ */}
      <section className="pr-block pr-block-sand" id="individual">
        <div className="pr-sectionhead">
          <div>
            <p className="pr-eyebrow">02 / ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ</p>
            <h2>
              ВНИМАНИЕ —
              <br />
              ТВОЕЙ ЗАДАЧЕ.
            </h2>
          </div>
          <p>
            Стоимость зависит от категории преподавателя. Выбери категорию и сравни
            разовое занятие с абонементами.
          </p>
        </div>

        <IndividualCalculator />

        <p className="pr-small pr-muted pr-footnote">
          Преподавателя, продолжительность урока, доступное время и правила
          индивидуального абонемента согласуем до оплаты.
        </p>
      </section>

      <FaqSection
        title={
          <>
            ВСЁ О ЦЕНАХ
            <br />И УСЛОВИЯХ
          </>
        }
        items={priceFaq}
      />

      <FirstStepBand
        title={
          <>
            НЕ ЗНАЕШЬ,
            <br />
            ЧТО ВЫБРАТЬ?
          </>
        }
        text="Расскажи, как часто хочешь заниматься и что для тебя важно. Подскажем варианты — решение остаётся за тобой."
      />

      <SiteFooter />
    </main>
  );
}
