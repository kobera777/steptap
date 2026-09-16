import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Link from "next/link";
import { signupHref } from "@/data/nav";

import Image from "next/image";
import "./directions.css";

export default function DirectionsPage() {
  return (
    <main className="directions-page">
      <SiteHeader />

      {/* HERO */}
      <section className="directions-hero">
        <div className="hero-left">
          <p className="section-kicker">НАПРАВЛЕНИЯ STEP TAP</p>

          <h1>
            ТАНЕЦ —
            <br />
            ЭТО ТВОЙ
            <br />
            <span>СТИЛЬ.</span>
          </h1>
        </div>

        <div className="hero-right">
          <div className="hero-circle">
            <span>ДВИЖЕНИЕ</span>
            <span>МУЗЫКА</span>
            <span>ЛЮДИ</span>
          </div>

          <p>
            Выбирай направление,
            <br />
            которое тебе ближе.
          </p>
        </div>
      </section>

      {/* BACHATA */}
      <section className="direction-main bachata-section" id="bachata">
        <div className="direction-intro">
          <div>
            <p className="section-kicker">01 / НАПРАВЛЕНИЕ</p>

            <h2>
              БАЧАТА
              <span>.</span>
            </h2>
          </div>

          <p className="direction-description">
            Музыка. Контакт. Уверенность.
            <br />
            Одно направление —
            <br />
            несколько способов танцевать.
          </p>
        </div>

        <div className="bachata-grid">
          <Link href="/directions/bachata/pair" className="direction-card card-large">
            <div className="card-number">01</div>

            <div className="card-content">
              <p>ПАРНАЯ</p>
              <h3>БАЧАТА</h3>
            </div>

            <div className="card-arrow">→</div>

            <div className="card-circle">КОНТАКТ</div>
          </Link>

          <Link href="/directions/bachata/lady" className="direction-card card-pink">
            <div className="card-number">02</div>

            <div className="card-content">
              <p>БАЧАТА</p>
              <h3>ЛЕДИ</h3>
            </div>

            <div className="card-arrow">→</div>

            <div className="card-note">
              ПЛАСТИКА
              <br />
              ПОДАЧА
              <br />
              МУЗЫКА
            </div>
          </Link>

          <Link
            href="/directions/bachata/mens-style"
            className="direction-card card-dark"
          >
            <div className="card-number">03</div>

            <div className="card-content">
              <p>МУЖСКОЙ</p>
              <h3>СТИЛЬ</h3>
            </div>

            <div className="card-arrow">→</div>

            <div className="card-note">
              ТЕХНИКА
              <br />
              ФУТВОРК
              <br />
              ПОДАЧА
            </div>
          </Link>

          <a
            href="/directions/bachata/experimental"
            className="direction-card card-outline"
          >
            <div className="card-number">04</div>

            <div className="card-content">
              <p>ЭКСПЕРИМЕНТАЛЬНАЯ</p>
              <h3>БАЧАТА</h3>
            </div>

            <div className="card-arrow">→</div>

            <div className="outline-circle">
              ЭКСПЕРИМЕНТ
              <br />
              ×
              <br />
              ДВИЖЕНИЕ
            </div>
          </a>
        </div>
      </section>

      {/* OTHER DIRECTIONS */}
      <section className="other-directions">
        <div className="other-heading">
          <p className="section-kicker">02 / 03</p>

          <h2>
            ЕЩЁ
            <br />
            НАПРАВЛЕНИЯ.
          </h2>

          <p>
            Разные стили.
            <br />
            Разная энергия.
            <br />
            Один STEP TAP.
          </p>
        </div>

        <div className="other-list">
          <Link href="/directions/dancehall" className="other-card dancehall-card">
            <div className="other-card-top">
              <span>02</span>
              <span>→</span>
            </div>

            <div className="other-card-title">
              <p>ЭНЕРГИЯ / РИТМ / СВОБОДА</p>
              <h3>ДЭНСХОЛЛ</h3>
            </div>

            <div className="other-card-shape">
              <div />
              <div />
              <div />
            </div>
          </Link>

          <Link href="/directions/latina" className="other-card latina-card">
            <div className="other-card-top">
              <span>03</span>
              <span>→</span>
            </div>

            <div className="other-card-title">
              <p>МУЗЫКА / ДВИЖЕНИЕ / ХАРАКТЕР</p>
              <h3>ЛАТИНА</h3>
            </div>

            <div className="latina-circle">
              <span>ТАНЦУЙ</span>
              <span>ЧУВСТВУЙ</span>
            </div>
          </Link>
        </div>
      </section>

      {/* CHOICE */}
      <section className="choice-section">
        <div className="choice-pink">
          <p className="section-kicker">НЕ ЗНАЕШЬ, ЧТО ВЫБРАТЬ?</p>

          <h2>
            НАЧНИ
            <br />
            СВОЙ
            <br />
            ПУТЬ.
          </h2>
        </div>

        <div className="choice-black">
          <div className="choice-lines" />

          <p>
            Расскажи нам
            <br />
            немного о себе —
            <br />
            и мы поможем
            <br />
            выбрать направление.
          </p>

          <Link href={signupHref} className="choice-button">
            ПОДОБРАТЬ НАПРАВЛЕНИЕ →
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="directions-final">
        <div className="final-copy">
          <p className="section-kicker">ТВОЙ ПЕРВЫЙ ШАГ</p>

          <h2>
            ГОТОВЫ
            <br />
            ТАНЦЕВАТЬ?
          </h2>

          <p>
            Выбери направление
            <br />и приходи на первое занятие.
          </p>

          <Link href={signupHref} className="final-button">
            ЗАПИСАТЬСЯ <span>→</span>
          </Link>
        </div>

        <div className="final-logo">
          <Image src="/step-tap-logo.png" alt="STEP TAP" width={260} height={260} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
