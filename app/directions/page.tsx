import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Link from "next/link";
import { bachataCards, otherCards } from "@/data/directions";
import { Fragment } from "react";

import Image from "next/image";
import "./directions.css";
import { SignupLink } from "@/components/layout/SignupLink";

export const metadata: Metadata = {
  title: "Направления",
  description:
    "Направления школы танца STEP TAP: бачата в паре, бачата леди, мужской стиль, экспериментальная, дэнсхолл и латина.",
};

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
              <div className="card-number">{card.number}</div>

              <div className="card-content">
                <p>{card.kicker}</p>
                <h3>{card.title}</h3>
              </div>

              <div className="card-arrow">→</div>

              {card.decor.kind === "circle" && (
                <div className="card-circle">{card.decor.text}</div>
              )}
              {card.decor.kind === "note" && (
                <div className="card-note">
                  {card.decor.lines.map((line, index) => (
                    <Fragment key={line}>
                      {index > 0 && <br />}
                      {line}
                    </Fragment>
                  ))}
                </div>
              )}
              {card.decor.kind === "outline" && (
                <div className="outline-circle">
                  {card.decor.lines.map((line, index) => (
                    <Fragment key={line}>
                      {index > 0 && <br />}
                      {line}
                    </Fragment>
                  ))}
                </div>
              )}
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
