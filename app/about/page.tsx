import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { lifeItems, team, values } from "@/data/about";
import Link from "next/link";

import Image from "next/image";
import "./about.css";
import { SignupLink } from "@/components/layout/SignupLink";

export const metadata: Metadata = {
  title: "О школе",
  description:
    "STEP TAP — школа танцев для взрослых в центре Екатеринбурга: история, подход, преподаватели и жизнь школы.",
};

export default function AboutPage() {
  return (
    <main className="st-about">
      <SiteHeader />

      {/* HERO */}

      <section className="st-hero">
        <div className="st-hero-left">
          <div className="st-label">О ШКОЛЕ</div>

          <h1>
            МЕСТО, ГДЕ
            <br />
            ТЕБЕ РАДЫ.
          </h1>

          <p className="st-hero-lead">
            STEP TAP — школа танцев для взрослых в центре Екатеринбурга. Мы хотели создать
            место, где можно учиться, общаться и чувствовать себя своим.
          </p>

          <div className="st-hero-bottom">
            <div className="st-tags">ЛЮДИ · МУЗЫКА · ДВИЖЕНИЕ</div>
          </div>
        </div>

        <div className="st-hero-right">
          <div className="st-photo-glow" />

          <div className="st-photo">
            <Image src="/about-hero.webp" alt="STEP TAP" fill priority sizes="50vw" />
          </div>
        </div>
      </section>

      {/* STORY */}

      <section className="st-story">
        <div className="st-story-art">
          <div className="st-art-big-circle" />

          <div className="st-art-small-circle" />

          <div className="st-art-pink" />

          <div className="st-art-line" />

          <div className="st-art-logo">
            <strong>
              STEP TAP<span>.</span>
            </strong>

            <small>[ ТАНЦЕВАЛЬНАЯ ШКОЛА ]</small>
          </div>

          <div className="st-art-script">
            Больше
            <br />
            чем танец
          </div>

          <div className="st-art-words">
            СВОИ ЛЮДИ.
            <br />
            СВОЯ АТМОСФЕРА.
            <br />
            СВОЙ ТАНЕЦ.
          </div>
        </div>

        <div className="st-story-content">
          <div className="st-label">НАША ИСТОРИЯ</div>

          <h2>
            ИЗ МЕЧТЫ —
            <br />В ШКОЛУ.
          </h2>

          <div className="st-story-copy">
            <p>
              29 ноября 2025 года STEP TAP открыл двери для первых учеников. За этим
              стояли мечта о своей школе, большая работа и желание собрать людей, которым
              близки танцы.
            </p>

            <p>
              С тех пор мы продолжаем развивать школу: проводить занятия, встречаться на
              вечеринках и создавать пространство, в которое хочется возвращаться.
            </p>
          </div>

          <div className="st-date">
            <strong>29</strong>

            <span>
              НОЯБРЯ
              <br />
              2025
            </span>

            <i />

            <small>
              ДЕНЬ, КОГДА
              <br />
              ОТКРЫЛСЯ
              <br />
              STEP TAP
            </small>
          </div>

          <p className="st-quote">
            «Здесь можно быть собой, учиться и получать удовольствие от танца».
          </p>
        </div>
      </section>

      {/* НАШ ПОДХОД */}

      <section className="st-values">
        <div className="st-values-title">
          <div className="st-label">НАШ ПОДХОД</div>

          <h2>
            УЧИТЬСЯ ЛЕГЧЕ,
            <br />
            КОГДА ТЕБЯ
            <br />
            ПОДДЕРЖИВАЮТ.
          </h2>
        </div>

        <div className="st-values-grid">
          {values.map((value) => (
            <article className="st-value" key={value.title}>
              <div className="st-value-icon">{value.number}</div>

              <h3>{value.title}</h3>

              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* КОМАНДА */}

      <section className="st-team">
        <div className="st-team-title">
          <div className="st-label">КОМАНДА</div>

          <h2>
            С КЕМ
            <br />
            БУДЕШЬ
            <br />
            ТАНЦЕВАТЬ.
          </h2>

          <p className="st-team-intro">
            Преподаватели, чьи занятия указаны в расписании школы.
          </p>
        </div>

        <div className="st-team-grid">
          {team.map((teacher) => (
            <article className="st-teacher" key={teacher.name}>
              <h3>{teacher.name}</h3>

              <small>{teacher.styles}</small>

              <p>{teacher.text}</p>

              <SignupLink ariaLabel={`Подобрать занятие у преподавателя ${teacher.name}`}>
                Подобрать занятие →
              </SignupLink>
            </article>
          ))}
        </div>
      </section>

      {/* ЗА ПРЕДЕЛАМИ УРОКА */}

      <section className="st-life">
        <div className="st-life-title">
          <div className="st-label">ЗА ПРЕДЕЛАМИ УРОКА</div>

          <h2>
            ТАНЦЫ —
            <br />
            ЭТО ЕЩЁ
            <br />И ВСТРЕЧИ.
          </h2>

          <p className="st-life-text">
            Вечеринки, мастер-классы, выступления и поездки — часть танцевальной жизни
            STEP TAP. Можно учиться в группе и постепенно знакомиться с сообществом.
          </p>

          <Link className="st-life-link" href="/gallery">
            ПОСМОТРЕТЬ ГАЛЕРЕЮ →
          </Link>
        </div>

        <div className="st-life-grid">
          {lifeItems.map(([icon, title]) => (
            <div className="st-life-item" key={title}>
              <div>{icon}</div>

              <span>{title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ПРИХОДИ ЗНАКОМИТЬСЯ */}

      <section className="st-dream">
        <div className="st-dream-title">
          <div className="st-label">ТВОЙ ПЕРВЫЙ ШАГ</div>

          <h2>
            ПРИХОДИ
            <br />
            ЗНАКОМИТЬСЯ.
          </h2>
        </div>

        <div className="st-dream-text">
          <p>
            Лучше всего узнать школу на занятии: увидеть зал, познакомиться с
            преподавателем и попробовать самому.
          </p>
        </div>

        <SignupLink className="st-dark-button">
          ПОДОБРАТЬ ЗАНЯТИЕ
          <span>→</span>
        </SignupLink>
      </section>

      <SiteFooter />
    </main>
  );
}
