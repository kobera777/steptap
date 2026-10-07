import Image from "next/image";
import Link from "next/link";
import { HomeHeader } from "@/components/layout/HomeHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { homeHero, marqueeWords } from "@/data/home";
import { bachataStyles, firstClassFaq } from "@/data/directions";
import { firstLesson, firstLessonWithPlan, rub } from "@/data/prices";
import { FaqList } from "@/components/home/FaqList";
import { MomentsVideo } from "@/components/home/MomentsVideo";
import { DirectionCard } from "@/components/sections/DirectionCard";
import { SignupLink } from "@/components/layout/SignupLink";

/**
 * Главная страница. Оформление — прежнее, тексты и порядок блоков — из
 * прототипа владельца. Серверный компонент; интерактивен только FaqList.
 */
export function HomePage() {
  return (
    <main className="site-shell">
      <HomeHeader />

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="section-kicker" data-reveal>
            {homeHero.kicker}
          </p>

          <h1 data-reveal data-reveal-delay="1">
            {homeHero.title.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>

          <div className="hero-actions" data-reveal data-reveal-delay="3">
            <SignupLink className="primary-button">
              НА ПЕРВОЕ ЗАНЯТИЕ <span>→</span>
            </SignupLink>
            <Link className="hero-textlink" href="/directions">
              ВЫБРАТЬ НАПРАВЛЕНИЕ
            </Link>
          </div>
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
            alt="Танцоры STEP TAP"
            fill
            priority
            quality={75}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
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

      {/* ЭТО STEP TAP — сначала снимаем страх */}
      <section className="about-direction" id="about">
        <div className="about-copy" data-reveal="left">
          <p className="section-kicker">ЭТО STEP TAP</p>

          <h2>
            НЕ НУЖНО УМЕТЬ
            <br />
            ТАНЦЕВАТЬ,
            <br />
            ЧТОБЫ НАЧАТЬ.
          </h2>

          <Link className="outline-button" href="/about">
            ПОЗНАКОМИТЬСЯ СО ШКОЛОЙ →
          </Link>
        </div>
      </section>

      {/* ЛУЧШЕ ОДИН РАЗ УВИДЕТЬ */}
      <section className="moments" id="gallery">
        <div className="moments-heading" data-reveal>
          <div>
            <p className="section-kicker">АТМОСФЕРА STEP TAP</p>
            <h2>
              ЛУЧШЕ ОДИН РАЗ
              <br />
              УВИДЕТЬ.
            </h2>
          </div>
        </div>

        <div className="video-frame" data-reveal="scale" data-reveal-delay="1">
          <div className="video-placeholder">
            <MomentsVideo />

            <div className="video-brand">STEP TAP.</div>
          </div>
        </div>

        <div className="moments-footer" data-reveal data-reveal-delay="2">
          <Link className="outline-button" href="/gallery">
            СМОТРЕТЬ ГАЛЕРЕЮ →
          </Link>
        </div>
      </section>

      {/* НАПРАВЛЕНИЯ */}
      <section className="home-directions" id="directions">
        <div className="home-directions-head" data-reveal>
          <div>
            <p className="section-kicker">НАПРАВЛЕНИЯ</p>
            <h2>
              ЧТО ХОЧЕТСЯ
              <br />
              ТАНЦЕВАТЬ ТЕБЕ?
            </h2>
          </div>

          <Link className="outline-button" href="/directions">
            ВСЕ НАПРАВЛЕНИЯ →
          </Link>
        </div>

        <div className="dc-grid is-three" data-reveal data-reveal-delay="1">
          {bachataStyles.slice(0, 3).map((style) => (
            <DirectionCard
              key={style.slug}
              style={style}
              sizes="(max-width: 760px) 90vw, (max-width: 1000px) 45vw, 30vw"
            />
          ))}
        </div>
      </section>

      {/* ПЕРЕД ПЕРВЫМ ЗАНЯТИЕМ */}
      <section className="faq-section">
        <div className="faq-heading" data-reveal="left">
          <p className="section-kicker">ОТВЕЧАЕМ НА ВОПРОСЫ</p>
          <h2>
            ПЕРЕД ПЕРВЫМ
            <br />
            ЗАНЯТИЕМ
          </h2>
        </div>

        <FaqList items={firstClassFaq} />
      </section>

      {/* СНАЧАЛА ПОПРОБУЙ */}
      <section className="final-cta" id="trial">
        <div className="final-cta-pink" data-reveal="left">
          <p>ПЕРВОЕ ЗНАКОМСТВО</p>
          <h2>
            СНАЧАЛА
            <br />
            ПОПРОБУЙ.
            <br />
            ПОТОМ РЕШАЙ.
          </h2>
        </div>

        <div className="final-cta-copy" data-reveal data-reveal-delay="1">
          <div className="final-cta-price">
            <small>ПЕРВОЕ ГРУППОВОЕ ЗАНЯТИЕ</small>
            <strong>
              {rub(firstLessonWithPlan())}
              <s>{rub(firstLesson.price)}</s>
            </strong>
            <span>−50 % ПРИ ПОКУПКЕ АБОНЕМЕНТА</span>
          </div>

          <div className="final-cta-actions">
            <SignupLink className="primary-button">
              ЗАПИСАТЬСЯ <span>→</span>
            </SignupLink>
            <Link className="hero-textlink" href="/prices">
              ЦЕНЫ И УСЛОВИЯ →
            </Link>
          </div>

          <p className="final-cta-note">
            Условия для выбранной группы уточни при записи.
          </p>
        </div>
      </section>

      {/* ЕСТЬ ИДЕЯ? ЕСТЬ ЗАЛ. */}
      <section className="rental" id="rental">
        <div className="rental-copy" data-reveal="left">
          <p className="section-kicker">ДЛЯ ПРЕПОДАВАТЕЛЕЙ И КОМАНД</p>
          <h2>
            ЕСТЬ ИДЕЯ?
            <br />
            ЕСТЬ ЗАЛ.
          </h2>
          <p>
            В STEP TAP можно арендовать зал для репетиции, индивидуального занятия,
            мастер-класса или съёмки.
          </p>

          <Link className="primary-button" href="/rental">
            ЗАЛЫ И ТАРИФЫ <span>→</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
