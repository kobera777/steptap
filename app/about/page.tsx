"use client";

import Image from "next/image";

const values = [
  {
    icon: "♧",
    title: "СООБЩЕСТВО",
    text: "Мы создаём большую танцевальную семью, где каждый может найти своё место.",
  },
  {
    icon: "♡",
    title: "ПОДДЕРЖКА",
    text: "Неважно, танцуешь ты первый день или уже много лет — мы помогаем поверить в себя и двигаться дальше.",
  },
  {
    icon: "☆",
    title: "РАЗВИТИЕ",
    text: "Танец помогает становиться увереннее не только на паркете, но и в жизни.",
  },
  {
    icon: "☺",
    title: "КОМФОРТ",
    text: "Мы создаём атмосферу, в которую хочется возвращаться. Здесь ты можешь быть собой.",
  },
];

const lifeItems = [
  ["♫", "ВЕЧЕРИНКИ"],
  ["♧", "МАСТЕР-КЛАССЫ"],
  ["☆", "ВЫСТУПЛЕНИЯ"],
  ["▣", "ОТЧЁТНЫЕ КОНЦЕРТЫ"],
  ["✈", "ПОЕЗДКИ"],
  ["♡", "ОТКРЫТЫЕ УРОКИ"],
  ["♢", "СОРЕВНОВАНИЯ"],
];

export default function AboutPage() {
  return (
    <main className="st-about">

      {/* HEADER */}

      <header className="st-header">
        <a href="/" className="st-logo">
          <strong>
            STEP TAP<span>.</span>
          </strong>

          <small>[ ТАНЦЕВАЛЬНАЯ ШКОЛА ]</small>
        </a>

        <nav className="st-nav">
          <a href="/">ГЛАВНАЯ</a>

          <a href="/about" className="st-active">
            О ШКОЛЕ
          </a>

          <a href="/schedule">РАСПИСАНИЕ</a>

          <a href="/events">СОБЫТИЯ</a>

          <a href="/contacts">КОНТАКТЫ</a>
        </nav>

        <a href="/signup" className="st-signup">
          ЗАПИСАТЬСЯ <b>→</b>
        </a>
      </header>


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
            STEP TAP — это школа, созданная с большой
            любовью и от всего сердца.
          </p>

          <p className="st-hero-text">
            Мы хотели создать место, где каждый человек
            чувствует себя комфортно и по-домашнему,
            верит в себя и знает, что у него всё получится.
            Здесь не критикуют и не осуждают. Здесь
            поддерживают, общаются, танцуют и становятся
            одной большой танцевальной семьёй.
          </p>

          <div className="st-hero-bottom">
            <a href="/signup" className="st-pink-button">
              СТАТЬ ЧАСТЬЮ СЕМЬИ
              <span>→</span>
            </a>

            <div className="st-tags">
              ЛЮДИ · МУЗЫКА · ДВИЖЕНИЕ
            </div>
          </div>
        </div>


        <div className="st-hero-right">
          <div className="st-photo-glow" />

          <div className="st-photo">
            <Image
              src="/about-hero.png"
              alt="STEP TAP"
              fill
              priority
              sizes="50vw"
            />
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

          <div className="st-label">
            НАША ИСТОРИЯ
          </div>

          <h2>
            МЕЧТА,
            <br />
            КОТОРАЯ СТАЛА
            <br />
            ДОМОМ
          </h2>

          <div className="st-story-copy">

            <p>
              <strong>
                29 ноября 2025 года открылись двери STEP TAP.
              </strong>
            </p>

            <p>
              Создание школы было нашей мечтой. Путь к ней
              оказался непростым — было много работы,
              сложностей и моментов, когда хотелось
              остановиться. Но мы не сдались.
            </p>

            <p>
              Сегодня STEP TAP — это не просто танцевальная
              школа. Это наш второй дом. Место, где мы
              стараемся относиться друг к другу так, как
              относились бы к своей семье. Где можно быть
              собой, развиваться, пробовать новое и получать
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

          <div className="st-label">
            НАШИ ЦЕННОСТИ
          </div>

          <h2>
            ЧТО ДЛЯ НАС
            <br />
            ВАЖНО
          </h2>

        </div>


        <div className="st-values-grid">

          {values.map((value) => (
            <article
              className="st-value"
              key={value.title}
            >

              <div className="st-value-icon">
                {value.icon}
              </div>

              <h3>
                {value.title}
              </h3>

              <p>
                {value.text}
              </p>

            </article>
          ))}

        </div>

      </section>


      {/* WHO COMES */}

      <section className="st-info">

        <div className="st-info-title">

          <div className="st-label">
            ДЛЯ КАЖДОГО
          </div>

          <h2>
            КТО К НАМ
            <br />
            ПРИХОДИТ
          </h2>

        </div>


        <div className="st-info-text">

          <p>
            В STEP TAP приходят как те, кто никогда не
            танцевал, так и те, кто уже имеет опыт.
            У нас занимаются взрослые, мужчины и женщины,
            пары и те, кто приходит один.
          </p>

          <p>
            Главное — желание танцевать, развиваться и
            быть частью нашей атмосферы. Здесь всегда
            найдётся место для тебя.
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

          <div className="st-label">
            НАШ ПОДХОД
          </div>

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
            Мы очень тщательно подходим к набору новых
            тренеров STEP TAP. У нас преподают настоящие
            профессионалы своего дела — с большим
            танцевальным опытом, чемпионы и специалисты,
            которых приглашают преподавать по всей России
            и за её пределами.
          </p>

          <p>
            Мы выбираем тех, кто не только отлично танцует,
            но и умеет вдохновлять, передавать знания и
            создавать особую атмосферу на занятиях.
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

          <div className="st-label">
            ЖИЗНЬ STEP TAP
          </div>

          <h2>
            БОЛЬШЕ ЧЕМ
            <br />
            ЗАНЯТИЯ
          </h2>

        </div>


        <div className="st-life-grid">

          {lifeItems.map(([icon, title]) => (
            <div
              className="st-life-item"
              key={title}
            >

              <div>
                {icon}
              </div>

              <span>
                {title}
              </span>

            </div>
          ))}

        </div>

      </section>


      {/* DREAM */}

      <section className="st-dream">

        <div className="st-dream-title">

          <div className="st-label">
            НАША МЕЧТА
          </div>

          <h2>
            МЫ НЕ
            <br />
            СДАЁМСЯ.
          </h2>

        </div>


        <div className="st-dream-text">

          <p>
            STEP TAP — это мечта, которую мы смогли
            превратить в реальность. Мы шли к ней непросто.
            Но мы продолжаем развиваться, расти и создавать
            место, в которое хочется возвращаться снова
            и снова.
          </p>

          <strong>
            Это только начало. ♡
          </strong>

        </div>


        <a
          href="/signup"
          className="st-dark-button"
        >
          СТАТЬ ЧАСТЬЮ STEP TAP
          <span>→</span>
        </a>

      </section>


      {/* FOOTER */}

      <footer className="st-footer">

        <a
          href="/"
          className="st-footer-logo"
        >
          <strong>
            STEP TAP<span>.</span>
          </strong>

          <small>
            [ ТАНЦЕВАЛЬНАЯ ШКОЛА ]
          </small>
        </a>


        <div className="st-footer-nav">
          <a href="/">ГЛАВНАЯ</a>
          <a href="/about">О ШКОЛЕ</a>
          <a href="/schedule">РАСПИСАНИЕ</a>
          <a href="/events">СОБЫТИЯ</a>
          <a href="/contacts">КОНТАКТЫ</a>
        </div>


        <div className="st-social">
          <a href="#">◎</a>
          <a href="#">▶</a>
          <a href="#">➤</a>
        </div>

      </footer>


      {/* STYLES */}

      <style jsx>{`

        * {
          box-sizing: border-box;
        }


        .st-about {
          --black: #111111;
          --cream: #f5f0ea;
          --white: #fbfaf8;
          --pink: #D45F88;
          --pink-strong: #D45F88;

          width: 100%;
          min-height: 100vh;

          margin: 0;
          padding: 0;

          overflow-x: hidden;

          color: var(--black);
          background: var(--cream);

          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }


        .st-about a {
          color: inherit;
          text-decoration: none;
        }


        /* HEADER */

        .st-header {
          width: 100%;
          height: 68px;

          position: relative;
          z-index: 100;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 42px;

          background: var(--cream);

          border-bottom:
            1px solid rgba(17, 17, 17, 0.14);
        }


        .st-logo {
          width: 180px;

          display: flex;
          flex-direction: column;

          line-height: 1;
        }


        .st-logo strong {
          font-size: 25px;
          font-weight: 950;

          letter-spacing: -1.7px;
        }


        .st-logo strong span,
        .st-footer-logo strong span {
          color: var(--pink-strong);
        }


        .st-logo small {
          margin-top: 5px;

          font-size: 7px;
          font-weight: 700;

          letter-spacing: 1.5px;
        }


        .st-nav {
          display: flex;
          align-items: center;

          gap: 38px;
        }


        .st-nav a {
          position: relative;

          font-size: 10px;
          font-weight: 800;

          white-space: nowrap;
        }


        .st-nav .st-active::after {
          content: "";

          position: absolute;

          left: 0;
          right: 0;
          bottom: -13px;

          height: 3px;

          background: var(--pink-strong);
        }


        .st-signup {
          padding: 14px 24px;

          background: var(--pink);

          font-size: 10px;
          font-weight: 900;

          border-radius: 4px;
        }


        .st-signup b {
          margin-left: 10px;

          font-size: 15px;
        }


        /* GENERAL */

        .st-label {
          color: var(--pink-strong);

          font-size: 12px;
          font-weight: 900;
        }


        /* HERO */

        .st-hero {
          width: 100%;
          height: 565px;

          position: relative;

          display: grid;

          grid-template-columns: 43% 57%;

          background: var(--cream);

          border-bottom:
            1px solid rgba(17, 17, 17, 0.12);
        }


        .st-hero-left {
          position: relative;

          z-index: 20;

          padding:
            80px
            30px
            35px
            52px;
        }


        .st-hero-left h1 {
          margin:
            25px
            0
            28px;

          font-size:
            clamp(56px, 5.5vw, 82px);

          line-height: 0.84;

          letter-spacing: -4px;

          font-weight: 950;
        }


        .st-hero-lead {
          max-width: 470px;

          margin:
            0
            0
            17px;

          font-size: 19px;

          line-height: 1.17;

          font-weight: 750;
        }


        .st-hero-text {
          max-width: 480px;

          margin: 0;

          font-size: 13px;

          line-height: 1.48;
        }


        .st-hero-bottom {
          display: flex;

          align-items: center;

          gap: 20px;

          margin-top: 32px;
        }


        .st-pink-button {
          display: inline-flex;

          align-items: center;

          padding:
            15px
            20px;

          background: var(--pink);

          font-size: 10px;

          font-weight: 900;
        }


        .st-pink-button span {
          margin-left: 10px;

          font-size: 16px;
        }


        .st-tags {
          padding-left: 18px;

          border-left:
            1px solid rgba(17, 17, 17, 0.35);

          font-size: 9px;

          font-weight: 600;

          white-space: nowrap;
        }


        /* HERO PHOTO */

        .st-hero-right {
          position: relative;

          height: 565px;

          overflow: visible;

          background: var(--cream);
        }


        .st-photo-glow {
          position: absolute;

          inset: 0;

          background:
            radial-gradient(
              ellipse at 48% 58%,
              rgba(205, 195, 184, 0.42),
              transparent 65%
            );
        }


        .st-photo {
          position: absolute;

          width: calc(48% + 1.5cm);
          height: 620px;

          left: 55%;
          top: -35px;

          transform:
            translateX(-50%);

          z-index: 60;

          pointer-events: none;
        }


        .st-photo img {
          object-fit: contain;

          object-position: center bottom;

          width: 100%;
          height: 100%;

          filter:
            drop-shadow(
              0
              20px
              25px
              rgba(0, 0, 0, 0.07)
            );
        }


        /* STORY */

        .st-story {
          min-height: 390px;

          display: grid;

          grid-template-columns: 50% 50%;

          background: var(--white);
        }


        .st-story-art {
          position: relative;

          min-height: 390px;

          overflow: hidden;

          background: var(--cream);
        }


        .st-art-big-circle {
          position: absolute;

          width: 370px;
          height: 370px;

          left: 27%;
          top: 10px;

          border-radius: 50%;

          background:
            rgba(212, 95, 136, 0.22);
        }


        .st-art-small-circle {
          position: absolute;

          width: 275px;
          height: 275px;

          left: 34%;
          top: 50px;

          border:
            1px solid #111;

          border-radius: 50%;
        }


        .st-art-pink {
          position: absolute;

          width: 80px;
          height: 470px;

          left: 39%;
          top: -45px;

          background: var(--pink);

          transform:
            rotate(31deg);
        }


        .st-art-line {
          position: absolute;

          width: 340px;
          height: 340px;

          left: 23%;
          top: 25px;

          border:
            1px solid #111;

          border-radius: 50%;

          transform:
            rotate(-18deg);
        }


        .st-art-logo {
          position: absolute;

          left: 29%;
          top: 50%;

          z-index: 10;

          transform:
            translateY(-50%);
        }


        .st-art-logo strong {
          display: block;

          font-size: 48px;

          line-height: 0.9;

          font-weight: 950;

          letter-spacing: -3px;
        }


        .st-art-logo strong span {
          color: var(--pink-strong);
        }


        .st-art-logo small {
          display: block;

          margin-top: 10px;

          font-size: 9px;

          letter-spacing: 2.3px;
        }


        .st-art-script {
          position: absolute;

          left: 58px;
          bottom: 35px;

          z-index: 10;

          font-family:
            Georgia,
            serif;

          font-size: 21px;

          line-height: 0.95;

          font-style: italic;

          transform:
            rotate(-5deg);
        }


        .st-art-script::after {
          content: "";

          display: block;

          width: 70px;
          height: 1px;

          margin-top: 13px;

          background: #111;
        }


        .st-art-words {
          position: absolute;

          left: 58px;
          top: 45px;

          z-index: 10;

          max-width: 155px;

          font-size: 8px;

          font-weight: 800;

          line-height: 1.55;
        }


        /* STORY CONTENT */

        .st-story-content {
          position: relative;

          padding:
            42px
            125px
            40px
            40px;
        }


        .st-story-content h2 {
          margin:
            12px
            0
            13px;

          font-size:
            clamp(34px, 3vw, 48px);

          line-height: 0.9;

          letter-spacing: -2.5px;
        }


        .st-story-copy {
          max-width: 570px;
        }


        .st-story-copy p {
          margin:
            0
            0
            10px;

          font-size: 11px;

          line-height: 1.42;
        }


        .st-date {
          position: absolute;

          right: 28px;
          top: 42px;

          width: 78px;

          height:
            calc(100% - 84px);

          padding-left: 18px;

          border-left:
            1px solid rgba(17, 17, 17, 0.25);
        }


        .st-date strong {
          display: block;

          font-size: 43px;

          line-height: 0.9;
        }


        .st-date span {
          display: block;

          margin-top: 4px;

          font-size: 10px;

          font-weight: 900;

          line-height: 1.05;
        }


        .st-date i {
          display: block;

          width: 23px;
          height: 1px;

          margin:
            25px
            0;

          background: #111;
        }


        .st-date small {
          font-size: 8px;

          line-height: 1.3;
        }


        /* VALUES */

        .st-values {
          display: grid;

          grid-template-columns: 27% 73%;

          padding:
            48px
            52px;

          background: var(--cream);

          border-top:
            1px solid rgba(17, 17, 17, 0.1);
        }


        .st-values-title h2 {
          margin:
            10px
            0
            0;

          font-size:
            clamp(32px, 2.8vw, 45px);

          line-height: 0.92;

          letter-spacing: -2.3px;
        }


        .st-values-grid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);
        }


        .st-value {
          min-height: 130px;

          padding:
            0
            25px;

          border-left:
            1px solid rgba(17, 17, 17, 0.2);
        }


        .st-value:first-child {
          border-left: 0;
        }


        .st-value-icon {
          height: 42px;

          font-size: 34px;

          line-height: 1;
        }


        .st-value h3 {
          margin:
            7px
            0
            8px;

          font-size: 11px;

          font-weight: 900;
        }


        .st-value p {
          max-width: 175px;

          margin: 0;

          font-size: 10px;

          line-height: 1.4;
        }


        /* INFO */

        .st-info {
          display: grid;

          grid-template-columns:
            30%
            55%
            15%;

          padding:
            45px
            52px;

          background: var(--white);

          border-top:
            1px solid rgba(17, 17, 17, 0.12);
        }


        .st-info-title h2 {
          margin:
            10px
            0
            0;

          font-size:
            clamp(32px, 2.7vw, 44px);

          line-height: 0.92;

          letter-spacing: -2.2px;

          max-width: 360px;
        }


        .st-info-text {
          padding:
            0
            55px
            0
            30px;
        }


        .st-info-text p {
          max-width: 650px;

          margin:
            0
            0
            13px;

          font-size: 12px;

          line-height: 1.48;
        }


        .st-info-side {
          display: flex;

          flex-direction: column;

          justify-content: center;

          gap: 2px;

          padding-left: 27px;

          border-left:
            1px solid rgba(17, 17, 17, 0.25);

          font-size: 9px;

          font-weight: 800;

          line-height: 1.35;
        }


        .st-info-side i {
          width: 30px;
          height: 1px;

          margin-top: 12px;

          background: #111;
        }


        .st-approach {
          background: var(--cream);
        }


        /* LIFE */

        .st-life {
          display: grid;

          grid-template-columns:
            28%
            72%;

          padding:
            45px
            52px;

          background: var(--white);

          border-top:
            1px solid rgba(17, 17, 17, 0.12);
        }


        .st-life-title h2 {
          margin:
            10px
            0
            0;

          font-size:
            clamp(32px, 2.7vw, 44px);

          line-height: 0.92;

          letter-spacing: -2.2px;
        }


        .st-life-grid {
          display: grid;

          grid-template-columns:
            repeat(7, 1fr);
        }


        .st-life-item {
          min-height: 100px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          padding: 10px;

          text-align: center;

          border-left:
            1px solid rgba(17, 17, 17, 0.18);
        }


        .st-life-item div {
          height: 38px;

          font-size: 29px;
        }


        .st-life-item span {
          max-width: 95px;

          margin-top: 8px;

          font-size: 8px;

          font-weight: 800;

          line-height: 1.2;
        }


        /* DREAM */

        .st-dream {
          display: grid;

          grid-template-columns:
            25%
            50%
            25%;

          align-items: center;

          gap: 20px;

          padding:
            48px
            52px;

          background: var(--pink);
        }


        .st-dream-title h2 {
          margin:
            10px
            0
            0;

          font-size:
            clamp(38px, 3.5vw, 55px);

          line-height: 0.87;

          letter-spacing: -2.7px;
        }


        .st-dream-text {
          padding-left: 20px;

          border-left:
            1px solid rgba(17, 17, 17, 0.3);
        }


        .st-dream-text p {
          max-width: 520px;

          margin:
            0
            0
            9px;

          font-size: 12px;

          line-height: 1.45;
        }


        .st-dream-text strong {
          font-size: 12px;
        }


        .st-dark-button {
          justify-self: end;

          padding:
            15px
            20px;

          background: #111;

          color: white !important;

          font-size: 10px;

          font-weight: 900;
        }


        .st-dark-button span {
          margin-left: 8px;

          font-size: 15px;
        }


        /* FOOTER */

        .st-footer {
          min-height: 110px;

          display: grid;

          grid-template-columns:
            1fr
            auto
            1fr;

          align-items: center;

          gap: 30px;

          padding:
            28px
            52px;

          background: var(--white);
        }


        .st-footer-logo {
          display: flex;

          flex-direction: column;

          line-height: 1;
        }


        .st-footer-logo strong {
          font-size: 23px;

          font-weight: 950;

          letter-spacing: -1.5px;
        }


        .st-footer-logo small {
          margin-top: 5px;

          font-size: 7px;

          font-weight: 700;

          letter-spacing: 1.4px;
        }


        .st-footer-nav {
          display: flex;

          gap: 27px;
        }


        .st-footer-nav a {
          font-size: 8px;

          font-weight: 800;
        }


        .st-social {
          justify-self: end;

          display: flex;

          gap: 19px;
        }


        .st-social a {
          font-size: 21px;

          font-weight: 700;
        }


        /* TABLET */

        @media (max-width: 1100px) {

          .st-nav {
            gap: 20px;
          }

          .st-header {
            padding:
              0
              25px;
          }

          .st-hero-left {
            padding-left: 35px;
          }

          .st-hero-left h1 {
            font-size: 62px;
          }

          .st-photo {
            width: 52%;
            height: 600px;

            left: 57%;

            top: -25px;
          }

          .st-info {
            grid-template-columns:
              30%
              54%
              16%;
          }

          .st-info-title h2 {
            font-size: 38px;
          }

          .st-art-words {
            left: 35px;

            max-width: 125px;
          }
        }


        /* MOBILE */

        @media (max-width: 800px) {

          .st-header {
            height: 62px;

            padding:
              0
              18px;
          }

          .st-nav {
            display: none;
          }

          .st-logo {
            width: auto;
          }

          .st-signup {
            padding:
              11px
              14px;

            font-size: 9px;
          }

          .st-hero {
            height: auto;

            display: flex;

            flex-direction: column;
          }

          .st-hero-left {
            padding:
              45px
              22px
              25px;
          }

          .st-hero-left h1 {
            margin:
              18px
              0
              23px;

            font-size: 56px;

            letter-spacing: -3px;
          }

          .st-hero-lead {
            font-size: 16px;
          }

          .st-hero-text {
            font-size: 12px;
          }

          .st-hero-bottom {
            align-items: flex-start;

            flex-direction: column;

            gap: 15px;
          }

          .st-tags {
            padding-left: 0;

            border-left: 0;
          }

          .st-hero-right {
            height: 400px;
          }

          .st-photo {
            width: 78%;
            height: 430px;

            left: 50%;

            top: -35px;
          }

          .st-story {
            display: flex;

            flex-direction: column;
          }

          .st-story-art {
            min-height: 350px;
          }

          .st-art-logo {
            left: 50%;

            transform:
              translate(-50%, -50%);
          }

          .st-art-logo strong {
            font-size: 40px;
          }

          .st-story-content {
            padding:
              35px
              22px;
          }

          .st-story-content h2 {
            font-size: 40px;
          }

          .st-story-copy {
            padding-right: 75px;
          }

          .st-values {
            display: block;

            padding:
              40px
              22px;
          }

          .st-values-title {
            margin-bottom: 30px;
          }

          .st-values-title h2 {
            font-size: 40px;
          }

          .st-values-grid {
            grid-template-columns:
              repeat(2, 1fr);

            gap: 25px 0;
          }

          .st-value {
            padding:
              0
              18px;
          }

          .st-value:nth-child(odd) {
            border-left: 0;

            padding-left: 0;
          }

          .st-info {
            display: block;

            padding:
              40px
              22px;
          }

          .st-info-title h2 {
            margin-bottom: 25px;

            font-size: 40px;

            max-width: none;
          }

          .st-info-text {
            padding: 0;
          }

          .st-info-side {
            margin-top: 25px;

            padding-left: 18px;
          }

          .st-life {
            display: block;

            padding:
              40px
              22px;
          }

          .st-life-title h2 {
            margin-bottom: 30px;

            font-size: 40px;
          }

          .st-life-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .st-life-item {
            border-left: 0;

            border-top:
              1px solid rgba(17, 17, 17, 0.15);
          }

          .st-life-item:nth-child(odd) {
            border-right:
              1px solid rgba(17, 17, 17, 0.15);
          }

          .st-dream {
            display: block;

            padding:
              40px
              22px;
          }

          .st-dream-title h2 {
            font-size: 50px;
          }

          .st-dream-text {
            margin:
              30px
              0;

            padding-left: 18px;
          }

          .st-dark-button {
            display: inline-block;
          }

          .st-footer {
            display: flex;

            flex-direction: column;

            align-items: flex-start;

            padding:
              30px
              22px;
          }

          .st-footer-nav {
            flex-wrap: wrap;

            gap:
              14px
              20px;
          }

          .st-social {
            justify-self: auto;
          }
        }


        /* SMALL MOBILE */

        @media (max-width: 520px) {

          .st-values-grid {
            grid-template-columns: 1fr;
          }

          .st-value {
            border-left: 0;

            border-top:
              1px solid rgba(17, 17, 17, 0.15);

            padding:
              20px
              0
              0;
          }

          .st-value:first-child {
            border-top: 0;

            padding-top: 0;
          }

          .st-story-copy {
            padding-right: 0;
          }

          .st-date {
            position: static;

            width: 100%;
            height: auto;

            margin-top: 25px;

            padding:
              18px
              0
              0;

            border-left: 0;

            border-top:
              1px solid rgba(17, 17, 17, 0.2);

            display: flex;

            align-items: center;

            gap: 12px;
          }

          .st-date i,
          .st-date small {
            display: none;
          }

          .st-art-words {
            left: 22px;

            top: 30px;

            max-width: 110px;

            font-size: 8px;
          }
        }

      `}</style>

    </main>
  );
}