import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { lifeItems, team, values } from "@/data/about";
import Link from "next/link";

import Image from "next/image";
import "./about.css";
import { SignupLink } from "@/components/layout/SignupLink";
import { LifeIcon } from "@/components/ui/LifeIcon";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "О школе",
  description:
    "STEP TAP — школа танцев для взрослых и детей в центре Екатеринбурга: история, подход, преподаватели и жизнь школы.",
};

export default function AboutPage() {
  return (
    <main className="st-about">
      <SiteHeader />

      {/* HERO */}

      <section className="st-hero">
        <div className="st-hero-left">
          <h1>
            МЕСТО, ГДЕ
            <br />
            ТЕБЕ РАДЫ.
          </h1>

          <p className="st-hero-lead">
            STEP TAP — школа танцев в центре Екатеринбурга. Место, где можно учиться,
            общаться и чувствовать себя своим.
          </p>
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

          <p className="st-quote">
            «Здесь можно быть собой, учиться и получать удовольствие от танца».
          </p>
        </div>

        {/* Открытие школы 29 ноября 2025 — разрезаем ленточку. */}
        <figure className="st-story-media">
          <div className="st-story-photo">
            <Image
              src="/about/otkrytie.webp"
              alt="Открытие STEP TAP 29 ноября 2025 года: перерезают красную ленточку"
              width={1280}
              height={853}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <figcaption className="st-story-badge">
            <b>29.11.2025</b>
            <span>ОТКРЫТИЕ ШКОЛЫ</span>
          </figcaption>
        </figure>
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
        </div>

        <div className="st-team-grid">
          {team.map((teacher) => (
            <article className="st-teacher" key={teacher.name}>
              <h3>{teacher.name}</h3>

              <small>{teacher.styles}</small>

              <p>{teacher.text}</p>

              <SignupLink ariaLabel={`Подобрать занятие у преподавателя ${teacher.name}`}>
                Подобрать занятие <Arrow />
              </SignupLink>
            </article>
          ))}
        </div>
      </section>

      {/* ЗА ПРЕДЕЛАМИ УРОКА */}

      <section className="st-life">
        <div className="st-life-title">
          <h2>
            ТАНЦЫ — ЭТО ЕЩЁ
            <br />И ВСТРЕЧИ.
          </h2>

          <p className="st-life-text">
            Вечеринки, мастер-классы, выступления и поездки — часть танцевальной жизни
            STEP TAP. Можно учиться в группе и постепенно знакомиться с сообществом.
          </p>

          <Link className="st-life-link" href="/gallery">
            ПОСМОТРЕТЬ ГАЛЕРЕЮ <Arrow />
          </Link>
        </div>

        <div className="st-life-grid">
          {lifeItems.map(({ icon, title, photo, focus }) => (
            <figure className="st-life-item" key={title}>
              <Image
                src={photo}
                alt=""
                fill
                sizes="(max-width: 800px) 50vw, 25vw"
                style={focus ? { objectPosition: focus } : undefined}
              />
              <figcaption>
                <LifeIcon name={icon} />
                <span>{title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
