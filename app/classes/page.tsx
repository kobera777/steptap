import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SignupLink } from "@/components/layout/SignupLink";
import { classFormats, levelGuide } from "@/data/classes";
import "./classes.css";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "Занятия",
  description:
    "Групповые и индивидуальные занятия в STEP TAP: уровни бачаты от 1.0 СТАРТ до 5.0 ПРОФИ, можно начать с нуля и прийти без пары.",
};

/**
 * «Занятия» — форматы и уровни, как в прототипе владельца.
 * Оформление — в духе остальных страниц: карточки, строки уровней с линиями.
 */
export default function ClassesPage() {
  const { group, individual } = classFormats;

  return (
    <main className="cl-page">
      <SiteHeader />

      <h1 className="cl-visually-hidden">Занятия в STEP TAP: форматы и уровни</h1>

      <section className="cl-formats">
        <article className="cl-card">
          <h2>{group.name}</h2>
          <p className="cl-card-sub">
            {group.title[0]}
            <br />
            {group.title[1]}
          </p>
          <p>{group.text}</p>
          <ul className="cl-tags">
            {group.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="cl-actions">
            <Link className="cl-btn" href="/schedule">
              ВЫБРАТЬ ВРЕМЯ{" "}
              <span>
                <Arrow />
              </span>
            </Link>
          </div>
        </article>

        <article className="cl-card cl-card-sand">
          <h2>{individual.name}</h2>
          <p className="cl-card-sub">
            {individual.title[0]}
            <br />
            {individual.title[1]}
          </p>
          <p>{individual.text}</p>
          <ul className="cl-tags">
            {individual.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="cl-actions">
            <SignupLink className="cl-btn" ariaLabel="Обсудить индивидуальный урок">
              ОБСУДИТЬ УРОК{" "}
              <span>
                <Arrow />
              </span>
            </SignupLink>
          </div>
        </article>
      </section>

      <section className="cl-levels" id="levels">
        <div className="cl-levels-head">
          <div>
            <p className="cl-kicker">УРОВНИ БАЧАТЫ</p>
          </div>
        </div>

        <div className="cl-level-list">
          {levelGuide.map((level) => (
            <article key={level.title}>
              <h3>{level.title}</h3>
              <p>{level.text}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
