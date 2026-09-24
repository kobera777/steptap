import Image from "next/image";
import Link from "next/link";
import { HomeHeader } from "@/components/layout/HomeHeader";
import { features, homeLevels, marqueeWords, rentalItems } from "@/data/home";
import { siteContacts, telHref } from "@/data/site";
import { FaqList } from "@/components/home/FaqList";
import { SignupLink } from "@/components/layout/SignupLink";

/** Главная страница — серверный компонент; интерактивен только FaqList. */
export function HomePage() {
  return (
    <main className="site-shell">
      <HomeHeader />

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <Link className="back-link" href="/directions" data-reveal>
            ← ВСЕ НАПРАВЛЕНИЯ
          </Link>

          <h1 data-reveal data-reveal-delay="1">
            БАЧАТА
          </h1>

          <p className="hero-accent" data-reveal data-reveal-delay="2">
            МУЗЫКА. КОНТАКТ.
            <br />
            УВЕРЕННОСТЬ.
          </p>

          <p className="hero-description" data-reveal data-reveal-delay="3">
            Парные занятия для взрослых, где танец становится способом чувствовать,
            наслаждаться и быть собой.
          </p>

          <SignupLink className="primary-button" data-reveal data-reveal-delay="4">
            ЗАПИСАТЬСЯ <span>→</span>
          </SignupLink>
        </div>

        <div className="hero-photo" data-reveal="scale" data-reveal-delay="2">
          <Image
            src="/hero-bachata-crop.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            quality={75}
            sizes="(max-width: 900px) 100vw, 50vw"
          />

          {/* Пара, вырезанная из фона: лежит поверх градиента, поэтому
              градиент затрагивает только фон, а не людей. */}
          <Image
            className="hero-cutout"
            src="/hero-bachata-crop-cutout.webp"
            alt="STEP TAP — бачата"
            fill
            priority
            quality={75}
            sizes="(max-width: 900px) 100vw, 50vw"
          />

          <div className="hero-note" data-parallax="0.12">
            Танцуй
            <br />
            чувствуй
            <br />
            развивайся
            <br />
            вместе ♡
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, copy) =>
            marqueeWords.map((word) => (
              <span key={`${copy}-${word}`}>
                {word}
                <i />
              </span>
            )),
          )}
        </div>
      </div>

      {/* ABOUT DIRECTION */}
      <section className="about-direction" id="bachata">
        <div className="about-copy" data-reveal="left">
          <p className="section-kicker">О НАПРАВЛЕНИИ</p>

          <h2>
            БАЧАТА —
            <br />
            ЭТО ПРО КОНТАКТ.
          </h2>

          <p>Это гармоничное сочетание музыки, движения и эмоций.</p>

          <p>
            На наших занятиях вы учитесь слышать музыку, чувствовать партнёра и получать
            удовольствие от каждого шага.
          </p>

          <p>
            Подходит как для начинающих, так и для тех, кто хочет углубить свои знания.
          </p>
        </div>

        <div className="geometry" data-reveal="right" data-reveal-delay="2">
          <div className="geometry-square" data-parallax="0.08">
            <span>
              БОЛЬШЕ
              <br />
              ЧЕМ
              <br />
              ТАНЕЦ ♡
            </span>
          </div>

          <div className="geometry-circle" data-parallax="-0.06">
            МУЗЫКА
            <br />
            ЛЮДИ
            <br />
            ДВИЖЕНИЕ
          </div>
        </div>
      </section>

      {/* OUR MOMENTS */}
      <section className="moments" id="gallery">
        <div className="moments-heading" data-reveal>
          <div>
            <p className="section-kicker">АТМОСФЕРА STEP TAP</p>
            <h2>НАШИ МОМЕНТЫ</h2>
          </div>

          <p className="moments-subtitle">
            Люди.
            <br />
            Эмоции.
            <br />
            Атмосфера.
          </p>
        </div>

        <div className="video-frame" data-reveal="scale" data-reveal-delay="1">
          <div className="video-placeholder">
            <div className="video-play">▶</div>

            <div className="video-brand">STEP TAP.</div>

            <div className="video-controls">
              <span>0:00 / 0:30</span>
              <span>🔊</span>
              <span>⛶</span>
            </div>
          </div>

          <div className="video-arrows">
            <button aria-label="Предыдущее">←</button>
            <button aria-label="Следующее">→</button>
          </div>

          <div className="dance-badge">
            ТАНЕЦ
            <br />
            ОБЪЕДИНЯЕТ
          </div>
        </div>

        <div className="moments-footer" data-reveal data-reveal-delay="2">
          <p>Фото и видео с вечеринок, мастер-классов и концертов.</p>
          <Link className="outline-button" href="/gallery">
            ВСЕ АЛЬБОМЫ →
          </Link>
        </div>
      </section>

      {/* WHAT IS INCLUDED */}
      <section className="class-features" id="classes">
        <div className="features-title" data-reveal>
          <p className="section-kicker">ЧТО ВХОДИТ В ЗАНЯТИЕ</p>
          <h2>
            ТРИ ШАГА
            <br />К СВОБОДНОМУ ТАНЦУ.
          </h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              data-reveal
              data-reveal-delay={String(index + 1)}
            >
              <span>{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>
                {feature.lines[0]}
                <br />
                {feature.lines[1]}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* GROUP LEVELS */}
      <section className="levels-section" id="levels">
        <div data-reveal="left">
          <p className="section-kicker">ГРУППОВЫЕ ЗАНЯТИЯ</p>
          <h2>
            НАЙДИ СВОЙ
            <br />
            УРОВЕНЬ.
          </h2>
        </div>

        <div className="levels-list" data-reveal="right" data-reveal-delay="1">
          {homeLevels.map((level) => (
            <SignupLink key={level.number}>
              <span>{level.number}</span>
              <strong>{level.title}</strong>
              <span>→</span>
            </SignupLink>
          ))}
        </div>
      </section>

      {/* FIND YOUR GROUP */}
      <section className="group-cta">
        <div className="group-cta-copy" data-reveal="left">
          <p className="section-kicker">НЕ ЗНАЕШЬ,</p>
          <h2>
            С КАКОЙ
            <br />
            ГРУППЫ
            <br />
            НАЧАТЬ?
          </h2>

          <p>
            Ничего страшного.
            <br />
            Поможем подобрать подходящий уровень, даже если ты никогда раньше не танцевал.
          </p>

          <SignupLink className="outline-button">ПОДОБРАТЬ ГРУППУ →</SignupLink>
        </div>

        <div className="group-cta-art" data-reveal="scale" data-reveal-delay="2">
          <div className="circle-lines" data-parallax="0.06" />
          <span>
            Танец
            <br />
            как стиль
            <br />
            жизни ♡
          </span>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-heading" data-reveal="left">
          <p className="section-kicker">FAQ</p>
          <h2>
            ЧАСТЫЕ
            <br />
            ВОПРОСЫ
          </h2>
        </div>

        <FaqList />
      </section>

      {/* RENTAL */}
      <section className="rental" id="rental">
        <div className="rental-copy" data-reveal="left">
          <p className="section-kicker">АРЕНДА ЗАЛА</p>
          <h2>
            ЗАЛ ДЛЯ
            <br />
            ТВОИХ ИДЕЙ.
          </h2>
          <p>
            Светлый танцевальный зал STEP TAP можно арендовать в свободные часы — для
            репетиций, индивидуальных занятий, мастер-классов и съёмок.
          </p>

          <ul className="rental-list">
            {rentalItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <a className="primary-button" href="#contacts">
            УЗНАТЬ УСЛОВИЯ <span>→</span>
          </a>
        </div>

        <div
          className="rental-art"
          aria-hidden="true"
          data-reveal="scale"
          data-reveal-delay="2"
        >
          <div className="rental-square" data-parallax="0.08">
            <span>
              Пространство
              <br />
              для движения ♡
            </span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" id="trial">
        <div className="final-cta-pink" data-reveal="left">
          <p>ТВОЙ ПЕРВЫЙ ШАГ</p>
          <h2>
            ГОТОВЫ
            <br />
            ТАНЦЕВАТЬ?
          </h2>
        </div>

        <div className="final-cta-copy" data-reveal data-reveal-delay="1">
          <p>
            Запишитесь на пробное занятие —
            <br />
            поможем подобрать подходящую группу.
          </p>

          <a className="primary-button" href="#contacts">
            ЗАПИСАТЬСЯ <span>→</span>
          </a>
        </div>

        <div className="final-logo" data-reveal="scale" data-reveal-delay="2">
          <Image src="/step-tap-logo.png" alt="STEP TAP" width={260} height={260} />
        </div>
      </section>

      {/* CONTACTS */}
      <section className="contacts" id="contacts">
        <div className="contacts-heading" data-reveal>
          <p className="section-kicker">СВЯЗЬ</p>
          <h2>
            КОНТАКТЫ
            <br />
            STEP TAP.
          </h2>
          <p className="contacts-intro">
            Напишите нам — ответим на вопросы,
            <br />
            подберём группу и запишем на пробное занятие.
          </p>
        </div>

        <div className="contacts-grid" data-reveal data-reveal-delay="1">
          <div className="contacts-block">
            <span>АДРЕС</span>
            <strong>{siteContacts.address || "Адрес уточняется"}</strong>
            {siteContacts.addressNote && <small>{siteContacts.addressNote}</small>}
          </div>

          <div className="contacts-block">
            <span>ТЕЛЕФОН</span>
            {siteContacts.phone ? (
              <a href={telHref(siteContacts.phone)}>
                <strong>{siteContacts.phone}</strong>
              </a>
            ) : (
              <strong>Уточняется</strong>
            )}
            {siteContacts.email && (
              <a href={`mailto:${siteContacts.email}`}>
                <small>{siteContacts.email}</small>
              </a>
            )}
          </div>

          <div className="contacts-block">
            <span>ЗАНЯТИЯ</span>
            <strong>Ежедневно, по расписанию</strong>
            <Link href="/schedule">
              <small>Смотреть расписание →</small>
            </Link>
          </div>
        </div>

        <div className="contacts-actions" data-reveal data-reveal-delay="2">
          {siteContacts.telegram && (
            <a href={siteContacts.telegram} target="_blank" rel="noreferrer">
              TELEGRAM <span>→</span>
            </a>
          )}
          {siteContacts.whatsapp && (
            <a href={siteContacts.whatsapp} target="_blank" rel="noreferrer">
              WHATSAPP <span>→</span>
            </a>
          )}
          {siteContacts.instagram && (
            <a href={siteContacts.instagram} target="_blank" rel="noreferrer">
              INSTAGRAM <span>→</span>
            </a>
          )}
          {siteContacts.youtube && (
            <a href={siteContacts.youtube} target="_blank" rel="noreferrer">
              YOUTUBE <span>→</span>
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
