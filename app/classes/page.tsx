import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SignupLink } from "@/components/layout/SignupLink";
import { FaqSection } from "@/components/sections/FaqSection";
import { FirstStepBand } from "@/components/sections/FirstStepBand";
import { classFormats, levelGuide } from "@/data/classes";
import { firstClassFaq } from "@/data/directions";
import { groupPlans, perLesson, rub } from "@/data/prices";
import "./classes.css";

export const metadata: Metadata = {
  title: "Занятия",
  description:
    "Групповые и индивидуальные занятия в STEP TAP: уровни бачаты от 1.0 СТАРТ до 5.0 ПРОФИ, можно начать с нуля и прийти без пары.",
};

/** Самый выгодный абонемент — для подписи «от … за урок». */
const cheapest = groupPlans.reduce((best, plan) =>
  perLesson(plan) < perLesson(best) ? plan : best,
);

/**
 * «Занятия» — форматы и уровни, как в прототипе владельца.
 * Оформление — в духе остальных страниц: карточки, строки уровней с линиями.
 */
export default function ClassesPage() {
  const { group, individual } = classFormats;

  return (
    <main className="cl-page">
      <SiteHeader />

      <section className="cl-head">
        <p className="cl-kicker">ФОРМАТЫ ЗАНЯТИЙ</p>
        <h1>
          НАЧАТЬ С НУЛЯ.
          <br />
          ПРОДОЛЖИТЬ СВОЁ.
        </h1>
        <p className="cl-lead">
          В группе — практика и общение. Индивидуально — внимание к твоим задачам.
          Поможем выбрать формат и уровень.
        </p>
      </section>

      <section className="cl-formats">
        <article className="cl-card">
          <p className="cl-kicker">{group.eyebrow}</p>
          <h2>
            {group.title[0]}
            <br />
            {group.title[1]}
          </h2>
          <p>{group.text}</p>
          <ul className="cl-tags">
            {group.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="cl-actions">
            <Link className="cl-btn" href="/schedule">
              ВЫБРАТЬ ВРЕМЯ <span>→</span>
            </Link>
            <Link className="cl-textlink" href="/prices#group">
              ОТ {rub(perLesson(cheapest))} ЗА УРОК*
            </Link>
          </div>
          <p className="cl-note">
            *При покупке абонемента на {cheapest.lessons} занятий.
          </p>
        </article>

        <article className="cl-card cl-card-sand">
          <p className="cl-kicker">{individual.eyebrow}</p>
          <h2>
            {individual.title[0]}
            <br />
            {individual.title[1]}
          </h2>
          <p>{individual.text}</p>
          <ul className="cl-tags">
            {individual.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="cl-actions">
            <SignupLink className="cl-btn" ariaLabel="Обсудить индивидуальный урок">
              ОБСУДИТЬ УРОК <span>→</span>
            </SignupLink>
            <Link className="cl-textlink" href="/prices#individual">
              ТАРИФЫ →
            </Link>
          </div>
        </article>
      </section>

      <section className="cl-levels" id="levels">
        <div className="cl-levels-head">
          <div>
            <p className="cl-kicker">УРОВНИ БАЧАТЫ</p>
            <h2>
              ГРУППА, В КОТОРОЙ
              <br />
              ТЕБЕ БУДЕТ ПОНЯТНО.
            </h2>
          </div>
          <p>
            Опыт — ориентир. Если сомневаешься, расскажи о своих занятиях, и мы поможем
            выбрать.
          </p>
        </div>

        <div className="cl-level-list">
          {levelGuide.map((level) => (
            <article key={level.number}>
              <span>{level.number}</span>
              <h3>{level.title}</h3>
              <p>{level.text}</p>
            </article>
          ))}
        </div>
      </section>

      <FirstStepBand
        title={
          <>
            ТВОЙ УРОВЕНЬ —
            <br />
            НЕ ЭКЗАМЕН.
          </>
        }
        text="Важно попасть туда, где тебе будет комфортно учиться. Поможем выбрать группу без догадок."
      />

      <FaqSection
        title={
          <>
            ПЕРЕД ПЕРВЫМ
            <br />
            ЗАНЯТИЕМ
          </>
        }
        items={firstClassFaq}
      />

      <SiteFooter />
    </main>
  );
}
