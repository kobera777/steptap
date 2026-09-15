"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { siteContacts, telHref } from "@/data/site";

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

/** Пункт меню с выпадающим списком: открывается по hover, а также по клику на стрелку
 *  (для планшетов и тач-экранов). Закрывается по клику вне меню и по Esc. */
function NavDropdown({
  trigger,
  children,
}: {
  trigger: ReactNode;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`nav-dropdown ${open ? "is-open" : ""}`}>
      {trigger}
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Скрыть подменю" : "Показать подменю"}
        onClick={() => setOpen((value) => !value)}
      >
        ⌄
      </button>
      <div className="dropdown-menu" onClick={() => setOpen(false)}>
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      {/* HEADER */}
      <header className={`site-header ${menuOpen ? "is-open" : ""}`}>
        <Link className="site-logo" href="/" aria-label="STEP TAP — на главную">
          <Image
            src="/step-tap-logo.png"
            alt="STEP TAP"
            width={160}
            height={160}
            priority
          />
        </Link>

        <nav className="main-nav" aria-label="Главное меню">
          <Link href="/about">О ШКОЛЕ</Link>

          <NavDropdown trigger={<Link href="/directions">НАПРАВЛЕНИЯ</Link>}>
            <Link href="/directions#bachata">Бачата</Link>
            <Link href="/directions">Все направления →</Link>
          </NavDropdown>

          <NavDropdown trigger={<a href="#classes">ЗАНЯТИЯ</a>}>
            <a href="#levels">Групповые занятия</a>
            <a href="#trial">Индивидуальные занятия</a>
            <a href="#trial">Пробный урок</a>
          </NavDropdown>

          <Link href="/schedule">РАСПИСАНИЕ</Link>
          <Link href="/gallery">ГАЛЕРЕЯ</Link>
          <a href="#rental">АРЕНДА</a>
          <a href="#contacts">КОНТАКТЫ</a>
        </nav>

        <a className="header-action" href="#trial">
          ЗАПИСАТЬСЯ <span>→</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i />
        </button>

        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Мобильное меню"
          onClick={() => setMenuOpen(false)}
        >
          <Link href="/about">О ШКОЛЕ</Link>
          <Link href="/directions">НАПРАВЛЕНИЯ</Link>
          <a href="#classes">ЗАНЯТИЯ</a>
          <Link href="/schedule">РАСПИСАНИЕ</Link>
          <Link href="/gallery">ГАЛЕРЕЯ</Link>
          <a href="#rental">АРЕНДА</a>
          <a href="#contacts">КОНТАКТЫ</a>
          <a href="#trial" className="mobile-nav-action">ЗАПИСАТЬСЯ →</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <Link className="back-link" href="/directions">
            ← ВСЕ НАПРАВЛЕНИЯ
          </Link>

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
            quality={90}
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
      <section className="about-direction" id="bachata">
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

        <div className="moments-footer">
          <p>Фото и видео с вечеринок, мастер-классов и концертов.</p>
          <Link className="outline-button" href="/gallery">
            ВСЕ АЛЬБОМЫ →
          </Link>
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
      <section className="levels-section" id="levels">
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

      {/* RENTAL */}
      <section className="rental" id="rental">
        <div className="rental-copy">
          <p className="section-kicker">АРЕНДА ЗАЛА</p>
          <h2>
            ЗАЛ ДЛЯ
            <br />
            ТВОИХ ИДЕЙ.
          </h2>
          <p>
            Светлый танцевальный зал STEP TAP можно арендовать
            в свободные часы — для репетиций, индивидуальных
            занятий, мастер-классов и съёмок.
          </p>

          <ul className="rental-list">
            <li>Репетиции и индивидуальные занятия</li>
            <li>Мастер-классы и интенсивы</li>
            <li>Вечеринки и мероприятия</li>
            <li>Фото- и видеосъёмка</li>
          </ul>

          <a className="primary-button" href="#contacts">
            УЗНАТЬ УСЛОВИЯ <span>→</span>
          </a>
        </div>

        <div className="rental-art" aria-hidden="true">
          <div className="rental-square">
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

      {/* CONTACTS */}
      <section className="contacts" id="contacts">
        <div className="contacts-heading">
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

        <div className="contacts-grid">
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

        <div className="contacts-actions">
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
