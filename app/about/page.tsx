import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Link from "next/link";
import { lifeItems, values } from "@/data/about";

import Image from "next/image";
import "./about.css";
import { SignupLink } from "@/components/layout/SignupLink";

export const metadata: Metadata = {
  title: "О школе",
  description: "STEP TAP — школа танца: история, ценности, преподаватели и жизнь школы.",
};

export default function AboutPage() {
  return (
    <main className="st-about">
      <SiteHeader />

      {/* HERO */}

      <section className="st-hero">
        <div className="st-hero-left">
          <div className="st-label">О НАС</div>

          <h1>
            БОЛЬШЕ
            <br />
            ЧЕМ ТАНЕЦ
          </h1>

          <p className="st-hero-lead">
            STEP TAP — это школа, созданная с большой любовью и от всего сердца.
          </p>

          <p className="st-hero-text">
            Мы хотели создать место, где каждый человек чувствует себя комфортно и
            по-домашнему, верит в себя и знает, что у него всё получится. Здесь не
            критикуют и не осуждают. Здесь поддерживают, общаются, танцуют и становятся
            одной большой танцевальной семьёй.
          </p>

          <div className="st-hero-bottom">
            <SignupLink className="st-pink-button">
              СТАТЬ ЧАСТЬЮ СЕМЬИ
              <span>→</span>
            </SignupLink>

            <div className="st-tags">ЛЮДИ · МУЗЫКА · ДВИЖЕНИЕ</div>
          </div>
        </div>

        <div className="st-hero-right">
          <div className="st-photo-glow" />

          <div className="st-photo">
            <Image src="/about-hero.png" alt="STEP TAP" fill priority sizes="50vw" />
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
            МЕЧТА,
            <br />
            КОТОРАЯ СТАЛА
            <br />
            ДОМОМ
          </h2>

          <div className="st-story-copy">
            <p>
              <strong>29 ноября 2025 года открылись двери STEP TAP.</strong>
            </p>

            <p>
              Создание школы было нашей мечтой. Путь к ней оказался непростым — было много
              работы, сложностей и моментов, когда хотелось остановиться. Но мы не
              сдались.
            </p>

            <p>
              Сегодня STEP TAP — это не просто танцевальная школа. Это наш второй дом.
              Место, где мы стараемся относиться друг к другу так, как относились бы к
              своей семье. Где можно быть собой, развиваться, пробовать новое и получать
              удовольствие от танца.
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
              НАЧАЛО
              <br />
              БОЛЬШОЙ
              <br />
              ИСТОРИИ
            </small>
          </div>
        </div>
      </section>

      {/* VALUES */}

      <section className="st-values">
        <div className="st-values-title">
          <div className="st-label">НАШИ ЦЕННОСТИ</div>

          <h2>
            ЧТО ДЛЯ НАС
            <br />
            ВАЖНО
          </h2>
        </div>

        <div className="st-values-grid">
          {values.map((value) => (
            <article className="st-value" key={value.title}>
              <div className="st-value-icon">{value.icon}</div>

              <h3>{value.title}</h3>

              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* WHO COMES */}

      <section className="st-info">
        <div className="st-info-title">
          <div className="st-label">ДЛЯ КАЖДОГО</div>

          <h2>
            КТО К НАМ
            <br />
            ПРИХОДИТ
          </h2>
        </div>

        <div className="st-info-text">
          <p>
            В STEP TAP приходят как те, кто никогда не танцевал, так и те, кто уже имеет
            опыт. У нас занимаются взрослые, мужчины и женщины, пары и те, кто приходит
            один.
          </p>

          <p>
            Главное — желание танцевать, развиваться и быть частью нашей атмосферы. Здесь
            всегда найдётся место для тебя.
          </p>
        </div>

        <div className="st-info-side">
          <span>РАЗНЫЕ ЛЮДИ</span>
          <span>ОДНА СТРАСТЬ</span>
          <i />
        </div>
      </section>

      {/* APPROACH */}

      <section className="st-info st-approach">
        <div className="st-info-title">
          <div className="st-label">НАШ ПОДХОД</div>

          <h2>
            ПРОФЕССИОНАЛЫ
            <br />
            С БОЛЬШИМ
            <br />
            ОПЫТОМ
          </h2>
        </div>

        <div className="st-info-text">
          <p>
            Мы очень тщательно подходим к набору новых тренеров STEP TAP. У нас преподают
            настоящие профессионалы своего дела — с большим танцевальным опытом, чемпионы
            и специалисты, которых приглашают преподавать по всей России и за её
            пределами.
          </p>

          <p>
            Мы выбираем тех, кто не только отлично танцует, но и умеет вдохновлять,
            передавать знания и создавать особую атмосферу на занятиях.
          </p>
        </div>

        <div className="st-info-side">
          <span>КАЧЕСТВО</span>
          <span>ОПЫТ</span>
          <span>ДОВЕРИЕ</span>
          <span>РЕЗУЛЬТАТ</span>
          <i />
        </div>
      </section>

      {/* LIFE */}

      <section className="st-life">
        <div className="st-life-title">
          <div className="st-label">ЖИЗНЬ STEP TAP</div>

          <h2>
            БОЛЬШЕ ЧЕМ
            <br />
            ЗАНЯТИЯ
          </h2>
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

      {/* DREAM */}

      <section className="st-dream">
        <div className="st-dream-title">
          <div className="st-label">НАША МЕЧТА</div>

          <h2>
            МЫ НЕ
            <br />
            СДАЁМСЯ.
          </h2>
        </div>

        <div className="st-dream-text">
          <p>
            STEP TAP — это мечта, которую мы смогли превратить в реальность. Мы шли к ней
            непросто. Но мы продолжаем развиваться, расти и создавать место, в которое
            хочется возвращаться снова и снова.
          </p>

          <strong>Это только начало. ♡</strong>
        </div>

        <SignupLink className="st-dark-button">
          СТАТЬ ЧАСТЬЮ STEP TAP
          <span>→</span>
        </SignupLink>
      </section>

      <SiteFooter />
    </main>
  );
}
