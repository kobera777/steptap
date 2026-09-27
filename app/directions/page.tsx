import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Link from "next/link";
import type { CardDecor } from "@/data/directions";
import { bachataCards, otherCards } from "@/data/directions";

import Image from "next/image";
import "./directions.css";
import { SignupLink } from "@/components/layout/SignupLink";

export const metadata: Metadata = {
  title: "Направления",
  description:
    "Направления школы танца STEP TAP: бачата в паре, бачата леди, мужской стиль, экспериментальная, дэнсхолл и латина.",
};

/** Слова из декора карточки — теперь они стоят подписью над названием. */
function decorWords(decor: CardDecor) {
  const words = decor.kind === "circle" ? [decor.text] : decor.lines;
  return words.filter((word) => word !== "×");
}

export default function DirectionsPage() {
  return (
    <main className="directions-page">
      <SiteHeader />

      {/* HERO */}
      <section className="directions-hero">
        <div className="hero-left">
          <p className="section-kicker">НАПРАВЛЕНИЯ STEP TAP</p>

          <h1>
            ТАНЕЦ —
            <br />
            ЭТО ТВОЙ
            <br />
            <span>СТИЛЬ.</span>
          </h1>
        </div>

        <div className="hero-right">
          <div className="hero-circle">
            <span>ДВИЖЕНИЕ</span>
            <span>МУЗЫКА</span>
            <span>ЛЮДИ</span>
          </div>

          <p>
            Выбирай направление,
            <br />
            которое тебе ближе.
          </p>
        </div>
      </section>

      {/* BACHATA */}
      <section className="direction-main bachata-section" id="bachata">
        <div className="direction-intro">
          <div>
            <p className="section-kicker">01 / НАПРАВЛЕНИЕ</p>

            <h2>
              БАЧАТА
              <span>.</span>
            </h2>
          </div>

          <p className="direction-description">
            Музыка. Контакт. Уверенность.
            <br />
            Одно направление —
            <br />
            несколько способов танцевать.
          </p>
        </div>

        <div className="bachata-grid">
          {bachataCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`direction-card ${card.variant}`}
            >
              <div className="card-body">
                <div className="card-top">
                  <span className="card-number">{card.number}</span>
                  <span className="card-arrow">→</span>
                </div>

                <div className="card-content">
                  <ul className="card-tags">
                    {decorWords(card.decor).map((word) => (
                      <li key={word}>{word}</li>
                    ))}
                  </ul>

                  <p>{card.kicker}</p>
                  <h3>{card.title}</h3>
                </div>
              </div>

              <div className="card-photo">
                <Image
                  src={card.photo.src}
                  alt={card.photo.alt}
                  width={1200}
                  height={1200}
                  sizes="(max-width: 760px) 90vw, 43vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* OTHER DIRECTIONS */}
      <section className="other-directions">
        <div className="other-heading">
          <p className="section-kicker">02 / 03</p>

          <h2>
            ЕЩЁ
            <br />
            НАПРАВЛЕНИЯ.
          </h2>

          <p>
            Разные стили.
            <br />
            Разная энергия.
            <br />
            Один STEP TAP.
          </p>
        </div>

        <div className="other-list">
          {otherCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`other-card ${card.variant}`}
            >
              <div className="other-card-top">
                <span>{card.number}</span>
                <span>→</span>
              </div>

              <div className="other-card-title">
                <p>{card.kicker}</p>
                <h3>{card.title}</h3>
              </div>

              {card.variant === "dancehall-card" ? (
                <div className="other-card-shape">
                  <div />
                  <div />
                  <div />
                </div>
              ) : (
                <div className="latina-circle">
                  {card.circleWords?.map((word) => (
                    <span key={word}>{word}</span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* CHOICE */}
      <section className="choice-section">
        <div className="choice-pink">
          <p className="section-kicker">НЕ ЗНАЕШЬ, ЧТО ВЫБРАТЬ?</p>

          <h2>
            НАЧНИ
            <br />
            СВОЙ
            <br />
            ПУТЬ.
          </h2>
        </div>

        <div className="choice-black">
          <div className="choice-lines" />

          <p>
            Расскажи нам
            <br />
            немного о себе —
            <br />
            и мы поможем
            <br />
            выбрать направление.
          </p>

          <SignupLink className="choice-button">ПОДОБРАТЬ НАПРАВЛЕНИЕ →</SignupLink>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="directions-final">
        <div className="final-copy">
          <p className="section-kicker">ТВОЙ ПЕРВЫЙ ШАГ</p>

          <h2>
            ГОТОВЫ
            <br />
            ТАНЦЕВАТЬ?
          </h2>

          <p>
            Выбери направление
            <br />и приходи на первое занятие.
          </p>

          <SignupLink className="final-button">
            ЗАПИСАТЬСЯ <span>→</span>
          </SignupLink>
        </div>

        <div className="final-logo">
          <Image src="/step-tap-logo.png" alt="STEP TAP" width={260} height={260} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
