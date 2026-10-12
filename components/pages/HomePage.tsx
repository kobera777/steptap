import Image from "next/image";
import Link from "next/link";
import { HomeHeader } from "@/components/layout/HomeHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { homeHero, marqueeItems } from "@/data/home";
import { bachataStyles, firstClassFaq } from "@/data/directions";
import { firstLesson, rub } from "@/data/prices";
import { FaqList } from "@/components/home/FaqList";
import { MomentsVideo } from "@/components/home/MomentsVideo";
import { DirectionCard } from "@/components/sections/DirectionCard";
import { SignupLink } from "@/components/layout/SignupLink";
import { SchoolMap } from "@/components/sections/SchoolMap";
import { BrandDot } from "@/components/ui/BrandDot";
import { Arrow } from "@/components/ui/Arrow";

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
              НА ПЕРВОЕ ЗАНЯТИЕ{" "}
              <span>
                <Arrow />
              </span>
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
            marqueeItems.map((item) => (
              <span key={`${copy}-${item.text}`}>
                {item.text}
                {item.accent && <b>{item.accent}</b>}
                <BrandDot />
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
            НЕ НУЖНО УМЕТЬ ТАНЦЕВАТЬ,
            <br />
            <span>ЧТОБЫ НАЧАТЬ.</span>
          </h2>

          <Link className="outline-button" href="/about">
            ПОЗНАКОМИТЬСЯ СО ШКОЛОЙ <Arrow />
          </Link>
        </div>
      </section>

      {/* ЛУЧШЕ ОДИН РАЗ УВИДЕТЬ */}
      <section className="moments" id="gallery">
        <div className="moments-heading" data-reveal>
          <h2 className="moments-title">АТМОСФЕРА STEP TAP</h2>
        </div>

        <div className="video-frame" data-reveal="scale" data-reveal-delay="1">
          <div className="video-placeholder">
            <MomentsVideo />

            <div className="video-brand">STEP TAP.</div>
          </div>
        </div>

        <div className="moments-footer" data-reveal data-reveal-delay="2">
          <Link className="outline-button" href="/gallery">
            СМОТРЕТЬ ГАЛЕРЕЮ <Arrow />
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
            ВСЕ НАПРАВЛЕНИЯ <Arrow />
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

      {/* ПЕРВОЕ ЗАНЯТИЕ — бесплатно при покупке абонемента */}
      <section className="final-cta" id="trial">
        <div className="final-cta-offer" data-reveal>
          <small>ПЕРВОЕ ЗАНЯТИЕ</small>
          <strong>
            БЕСПЛАТНО
            <BrandDot />
          </strong>
          <p>при покупке абонемента</p>
          <span>
            Без абонемента — {rub(firstLesson.price)} (т.е. −50 % от разового посещения)
          </span>
        </div>

        <div className="final-cta-actions" data-reveal data-reveal-delay="1">
          <SignupLink className="primary-button">
            ЗАПИСАТЬСЯ{" "}
            <span>
              <Arrow />
            </span>
          </SignupLink>
          <Link className="hero-textlink" href="/prices">
            ЦЕНЫ И УСЛОВИЯ <Arrow />
          </Link>
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
            ЗАЛЫ И ТАРИФЫ{" "}
            <span>
              <Arrow />
            </span>
          </Link>
        </div>
      </section>

      {/* КАК НАС НАЙТИ — карта на чёрном фоне, как была внизу главной раньше. */}
      <section className="contacts home-map" id="map">
        <p className="contacts-kicker">КАК НАС НАЙТИ</p>
        <SchoolMap />
      </section>

      <SiteFooter />
    </main>
  );
}
