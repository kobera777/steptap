import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { DirectionCard } from "@/components/sections/DirectionCard";
import { bachataStyles, otherStyles, styleHref } from "@/data/directions";
import "./directions.css";

export const metadata: Metadata = {
  title: "Направления",
  description:
    "Направления школы танца STEP TAP: парная бачата, бачата леди, мужской стиль, экспериментальная бачата, дэнсхолл и латина.",
};

/**
 * «Направления». Оформление — прежнее, тексты и порядок блоков — из
 * прототипа владельца. Каждая карточка ведёт на страницу своего стиля.
 */
export default function DirectionsPage() {
  return (
    <main className="directions-page">
      <SiteHeader />

      {/* HERO */}
      <section className="directions-hero">
        <div className="hero-left">
          <p className="section-kicker">НАПРАВЛЕНИЯ STEP TAP</p>

          <h1>
            У КАЖДОГО
            <br />
            ТАНЦА —
            <br />
            СВОЙ <span>ХАРАКТЕР.</span>
          </h1>
        </div>
      </section>

      {/* BACHATA */}
      <section className="direction-main bachata-section" id="bachata">
        <div className="direction-intro">
          <div>
            <p className="section-kicker">БАЧАТА</p>

            <h2>
              ОДНА МУЗЫКА.
              <br />
              РАЗНЫЕ
              <br />
              ВОЗМОЖНОСТИ<span>.</span>
            </h2>
          </div>
        </div>

        <div className="dc-grid">
          {bachataStyles.map((style) => (
            <DirectionCard
              key={style.slug}
              style={style}
              sizes="(max-width: 760px) 90vw, 43vw"
            />
          ))}
        </div>
      </section>

      {/* OTHER DIRECTIONS */}
      <section className="other-directions">
        <div className="other-heading">
          <p className="section-kicker">ДРУГИЕ НАПРАВЛЕНИЯ</p>

          <h2>
            ПОПРОБУЙ
            <br />
            ДРУГОЙ
            <br />
            РИТМ.
          </h2>
        </div>

        <div className="other-list">
          {otherStyles.map((style) => (
            <Link
              key={style.slug}
              href={styleHref(style)}
              className={`other-card ${style.slug === "dancehall" ? "dancehall-card" : "latina-card"}`}
            >
              <div className="other-card-top">
                <span>{style.card.number}</span>
                <span aria-hidden="true">→</span>
              </div>

              {style.slug === "dancehall" ? (
                <div className="other-card-shape" aria-hidden="true">
                  <div />
                  <div />
                  <div />
                </div>
              ) : (
                <div className="latina-circle" aria-hidden="true">
                  <span>ТАНЦУЙ</span>
                  <span>ЧУВСТВУЙ</span>
                </div>
              )}

              <div className="other-card-title">
                <p>{style.tags.join(" · ")}</p>
                <h3>{style.title}</h3>
                <p className="other-card-desc">{style.description}</p>
                <span className="other-card-more">О ЗАНЯТИЯХ →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
