import Image from "next/image";
import Link from "next/link";
import { HomeHeader } from "@/components/layout/HomeHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { features, homeHero, marqueeWords } from "@/data/home";
import { bachataStyles, firstClassFaq } from "@/data/directions";
import { rub, trialPrice } from "@/data/prices";
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

          <p className="hero-description" data-reveal data-reveal-delay="2">
            {homeHero.lead}
          </p>

          <div className="hero-actions" data-reveal data-reveal-delay="3">
            <SignupLink className="primary-button">
              НА ПЕРВОЕ ЗАНЯТИЕ <span>→</span>
            </SignupLink>
            <Link className="hero-textlink" href="/directions">
              ВЫБРАТЬ НАПРАВЛЕНИЕ
            </Link>
          </div>

          <p className="hero-offer" data-reveal data-reveal-delay="4">
            {homeHero.styles}
            <br />
            {homeHero.place}
          </p>
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

          <div className="hero-note" data-parallax="0.12">
            Танцуй.
            <br />
            Чувствуй.
            <br />
            Вместе ♡
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

          <p>
            Можно прийти без опыта, без пары и без уверенности, что «у меня получится». Мы
            разберём движения, объясним непонятное и поможем освоиться в группе.
          </p>

          <p>А если уже танцуешь — найдём занятия, на которых можно двигаться дальше.</p>

          <Link className="outline-button" href="/about">
            ПОЗНАКОМИТЬСЯ СО ШКОЛОЙ →
          </Link>
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

          <p className="moments-subtitle">
            Вот как выглядит танцевальная жизнь школы — с музыкой, людьми и эмоциями.
          </p>
        </div>

        <div className="video-frame" data-reveal="scale" data-reveal-delay="1">
          <div className="video-placeholder">
            <MomentsVideo />

            <div className="video-brand">STEP TAP.</div>
          </div>
        </div>

        <div className="moments-footer" data-reveal data-reveal-delay="2">
          <p>Узнай школу не только по текстам.</p>
          <Link className="outline-button" href="/gallery">
            СМОТРЕТЬ ГАЛЕРЕЮ →
          </Link>
        </div>
      </section>

      {/* НА ЗАНЯТИЯХ */}
      <section className="class-features" id="classes">
        <div className="features-title" data-reveal>
          <p className="section-kicker">НА ЗАНЯТИЯХ</p>
          <h2>
            ПОНЯТНО.
            <br />
            ПОСТЕПЕННО.
            <br />С ПРАКТИКОЙ.
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
              <p>{feature.text}</p>
            </article>
          ))}
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

      {/* НЕ ЗНАЕШЬ, С ЧЕГО НАЧАТЬ? */}
      <section className="group-cta">
        <div className="group-cta-copy" data-reveal="left">
          <p className="section-kicker">ТВОЙ ПЕРВЫЙ ШАГ</p>
          <h2>
            НЕ ЗНАЕШЬ,
            <br />С ЧЕГО
            <br />
            НАЧАТЬ?
          </h2>

          <p>
            Расскажи, что тебе нравится и танцевал ли ты раньше. Поможем выбрать
            направление и время — без необходимости разбираться во всём самому.
          </p>

          <SignupLink className="outline-button">ПОДОБРАТЬ ЗАНЯТИЕ →</SignupLink>
        </div>

        <div className="group-cta-art" data-reveal="scale" data-reveal-delay="2">
          <div className="circle-lines" data-parallax="0.06" />
          <span>
            Танцуй.
            <br />
            Чувствуй.
            <br />
            Будь собой.
          </span>
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
            <strong>{rub(trialPrice())}</strong>
            <span>БЕСПЛАТНО ПРИ ПОКУПКЕ АБОНЕМЕНТА</span>
          </div>

          <p>
            Первая групповая тренировка — {rub(trialPrice())}. Если после неё покупаешь
            абонемент, первое занятие бесплатно.
          </p>

          <div className="final-cta-actions">
            <SignupLink className="primary-button">
              ЗАПИСАТЬСЯ <span>→</span>
            </SignupLink>
            <Link className="hero-textlink" href="/prices">
              ЦЕНЫ И УСЛОВИЯ →
            </Link>
          </div>

          <p className="final-cta-note">Условия для выбранной группы уточни при записи.</p>
        </div>

        <div className="final-logo" data-reveal="scale" data-reveal-delay="2">
          <Image src="/step-tap-logo.png" alt="STEP TAP" width={260} height={260} />
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

      <SiteFooter />
    </main>
  );
}
