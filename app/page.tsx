"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "Можно ли прийти одному?",
    answer:
      "Да. Партнёр для первого занятия не нужен — мы поможем комфортно войти в группу.",
  },
  {
    question: "Я никогда не танцевал. Мне подойдёт?",
    answer:
      "Да. В STEP TAP есть группы, в которых можно начать с самого первого шага.",
  },
  {
    question: "Что надеть на первое занятие?",
    answer:
      "Главное — удобная одежда, в которой легко двигаться. Специальная форма не нужна.",
  },
  {
    question: "Нужен ли партнёр?",
    answer:
      "Нет. На групповых занятиях мы работаем с партнёрами и меняемся в процессе занятия.",
  },
  {
    question: "Как понять, какая группа мне подходит?",
    answer:
      "Оставьте заявку — мы зададим несколько вопросов и подскажем подходящий уровень.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="site-shell">
      {/* HEADER */}
      <header className="site-header">
        <a className="site-logo" href="#top" aria-label="STEP TAP — на главную">
          <Image
            src="/step-tap-logo.png"
            alt="STEP TAP"
            width={160}
            height={160}
            priority
          />
        </a>

        <nav className="main-nav" aria-label="Главное меню">
          <a href="#about">О ШКОЛЕ</a>

          <div className="nav-dropdown">
            <a href="#directions">НАПРАВЛЕНИЯ <span>⌄</span></a>
            <div className="dropdown-menu">
              <a href="#bachata">Бачата</a>
              <a href="#directions">Все направления →</a>
            </div>
          </div>

          <div className="nav-dropdown">
            <a href="#classes">ЗАНЯТИЯ <span>⌄</span></a>
            <div className="dropdown-menu">
              <a href="#classes">Групповые занятия</a>
              <a href="#trial">Индивидуальные занятия</a>
              <a href="#trial">Пробный урок</a>
            </div>
          </div>

          <a href="/schedule">РАСПИСАНИЕ</a>
          <a href="#gallery">ГАЛЕРЕЯ</a>
          <a href="#rental">АРЕНДА</a>
          <a href="#contacts">КОНТАКТЫ</a>
        </nav>

        <a className="header-action" href="#trial">
          ЗАПИСАТЬСЯ <span>→</span>
        </a>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <a className="back-link" href="#directions">
            ← ВСЕ НАПРАВЛЕНИЯ
          </a>

          <h1>БАЧАТА</h1>

          <p className="hero-accent">
            МУЗЫКА. КОНТАКТ.
            <br />
            УВЕРЕННОСТЬ.
          </p>

          <p className="hero-description">
            Парные занятия для взрослых, где танец
            становится способом чувствовать,
            наслаждаться и быть собой.
          </p>

          <a className="primary-button" href="#trial">
            ЗАПИСАТЬСЯ <span>→</span>
          </a>
        </div>

        <div className="hero-photo">
          <Image
            src="/hero-bachata.jpg"
            alt="STEP TAP — бачата"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />

          <div className="hero-note">
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

      {/* ABOUT DIRECTION */}
      <section className="about-direction" id="about">
        <div className="about-copy">
          <p className="section-kicker">О НАПРАВЛЕНИИ</p>

          <h2>
            БАЧАТА —
            <br />
            ЭТО ПРО КОНТАКТ.
          </h2>

          <p>
            Это гармоничное сочетание музыки,
            движения и эмоций.
          </p>

          <p>
            На наших занятиях вы учитесь слышать музыку,
            чувствовать партнёра и получать удовольствие
            от каждого шага.
          </p>

          <p>
            Подходит как для начинающих, так и для тех,
            кто хочет углубить свои знания.
          </p>
        </div>

        <div className="geometry">
          <div className="geometry-square">
            <span>
              БОЛЬШЕ
              <br />
              ЧЕМ
              <br />
              ТАНЕЦ ♡
            </span>
          </div>

          <div className="geometry-circle">
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
        <div className="moments-heading">
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

        <div className="video-frame">
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
      </section>

      {/* WHAT IS INCLUDED */}
      <section className="class-features" id="classes">
        <div className="features-title">
          <p className="section-kicker">ЧТО ВХОДИТ В ЗАНЯТИЕ</p>
          <h2>ТРИ   ШАГА<br />К СВОБОДНОМУ ТАНЦУ.</h2>
        </div>

        <div className="features-grid">
          <article>
            <span>01</span>
            <h3>ДВИЖЕНИЕ</h3>
            <p>
              Основы бачаты,
              <br />
              шаги и пластика.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>КОНТАКТ</h3>
            <p>
              Учимся чувствовать
              <br />
              партнёра и музыку.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>УВЕРЕННОСТЬ</h3>
            <p>
              Постепенно начинаем
              <br />
              танцевать свободнее.
            </p>
          </article>
        </div>
      </section>

      {/* GROUP LEVELS */}
      <section className="levels-section" id="directions">
        <div>
          <p className="section-kicker">ГРУППОВЫЕ ЗАНЯТИЯ</p>
          <h2>НАЙДИ СВОЙ<br />УРОВЕНЬ.</h2>
        </div>

        <div className="levels-list">
          <a href="#trial">
            <span>01</span>
            <strong>С НУЛЯ</strong>
            <span>→</span>
          </a>

          <a href="#trial">
            <span>02</span>
            <strong>НАЧИНАЮЩИЕ</strong>
            <span>→</span>
          </a>

          <a href="#trial">
            <span>03</span>
            <strong>ПРОДОЛЖАЮЩИЕ</strong>
            <span>→</span>
          </a>

          <a href="#trial">
            <span>04</span>
            <strong>ПРОДВИНУТЫЕ</strong>
            <span>→</span>
          </a>
        </div>
      </section>

      {/* FIND YOUR GROUP */}
      <section className="group-cta">
        <div className="group-cta-copy">
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
            Поможем подобрать подходящий уровень,
            даже если ты никогда раньше не танцевал.
          </p>

          <a className="outline-button" href="#trial">
            ПОДОБРАТЬ ГРУППУ →
          </a>
        </div>

        <div className="group-cta-art">
          <div className="circle-lines" />
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
        <div className="faq-heading">
          <p className="section-kicker">FAQ</p>
          <h2>ЧАСТЫЕ<br />ВОПРОСЫ</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <button
              className={`faq-item ${
                openFaq === index ? "is-open" : ""
              }`}
              key={faq.question}
              onClick={() =>
                setOpenFaq(openFaq === index ? null : index)
              }
            >
              <span>{faq.question}</span>
              <strong>{openFaq === index ? "−" : "+"}</strong>

              {openFaq === index && (
                <p>{faq.answer}</p>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" id="trial">
        <div className="final-cta-pink">
          <p>ТВОЙ ПЕРВЫЙ ШАГ</p>
          <h2>
            ГОТОВЫ
            <br />
            ТАНЦЕВАТЬ?
          </h2>
        </div>

        <div className="final-cta-copy">
          <p>
            Запишитесь на пробное занятие —
            <br />
            поможем подобрать подходящую группу.
          </p>

          <a className="primary-button" href="#contacts">
            ЗАПИСАТЬСЯ <span>→</span>
          </a>
        </div>

        <div className="final-logo">
          <Image
            src="/step-tap-logo.png"
            alt="STEP TAP"
            width={260}
            height={260}
          />
        </div>
      </section>

      {/* PLACEHOLDER ANCHORS FOR FUTURE PAGES */}
      <div id="bachata" />
      <div id="schedule" />
      <div id="rental" />
      <div id="contacts" />
    </main>
  );
}