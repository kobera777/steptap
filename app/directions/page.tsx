"use client";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Link from "next/link";
import { signupHref } from "@/data/nav";

import Image from "next/image";

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

          <Link href="/directions/bachata/mens-style" className="direction-card card-dark">
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
            <br />
            и приходи на первое занятие.
          </p>

          <Link href={signupHref} className="final-button">
            ЗАПИСАТЬСЯ <span>→</span>
          </Link>
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

      <style jsx>{`
        .directions-page {
          background: #f5f0ea;
          color: #111111;
          min-height: 100vh;
          overflow: clip; /* clip, не hidden: иначе не работает sticky-шапка */
        }

        .directions-hero {
          min-height: 500px;
          padding: 90px 7vw 80px;
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          align-items: center;
          background: #f5f0ea;
          position: relative;
        }

        .hero-left {
          position: relative;
          z-index: 2;
        }

        .section-kicker {
          margin: 0 0 22px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .directions-hero h1 {
          margin: 0;
          font-size: clamp(72px, 10vw, 150px);
          line-height: 0.82;
          letter-spacing: -6px;
          font-weight: 950;
        }

        .directions-hero h1 span {
          color: #d45f88;
        }

        .hero-right {
          min-height: 340px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .hero-circle {
          width: 260px;
          height: 260px;
          border: 1px solid #111111;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 8px;
          transform: rotate(-10deg);
        }

        .hero-circle::before {
          content: "";
          position: absolute;
          width: 210px;
          height: 210px;
          border: 1px solid #d45f88;
          border-radius: 50%;
        }

        .hero-circle span {
          position: relative;
          z-index: 2;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .hero-right > p {
          position: absolute;
          bottom: 5px;
          right: 0;
          margin: 0;
          font-size: 14px;
          line-height: 1.35;
          font-weight: 600;
        }

        .direction-main {
          padding: 100px 7vw 110px;
          background: white;
        }

        .direction-intro {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 55px;
        }

        .direction-intro h2 {
          margin: 0;
          font-size: clamp(64px, 9vw, 130px);
          line-height: 0.8;
          letter-spacing: -5px;
          font-weight: 950;
        }

        .direction-intro h2 span {
          color: #d45f88;
        }

        .direction-description {
          max-width: 300px;
          margin: 0 5vw 5px 0;
          font-size: 14px;
          line-height: 1.45;
          font-weight: 500;
        }

        .bachata-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .direction-card {
          min-height: 330px;
          position: relative;
          padding: 28px;
          text-decoration: none;
          color: #111111;
          overflow: hidden;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .direction-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .card-large {
          background: #f0e8df;
        }

        .card-pink {
          background: #d45f88;
          color: white;
        }

        .card-dark {
          background: #222225;
          color: white;
        }

        .card-outline {
          background: #f5f0ea;
          border: 1px solid #111111;
        }

        .card-number {
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .card-content {
          position: absolute;
          left: 28px;
          bottom: 28px;
        }

        .card-content p {
          margin: 0 0 7px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .card-content h3 {
          margin: 0;
          font-size: clamp(40px, 5vw, 70px);
          line-height: 0.85;
          letter-spacing: -3px;
          font-weight: 950;
        }

        .card-arrow {
          position: absolute;
          top: 27px;
          right: 28px;
          font-size: 28px;
          font-weight: 300;
        }

        .card-circle {
          position: absolute;
          width: 135px;
          height: 135px;
          right: 55px;
          top: 80px;
          border: 1px solid #111111;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 2px;
          transform: rotate(12deg);
        }

        .card-note {
          position: absolute;
          right: 28px;
          top: 95px;
          font-size: 9px;
          font-weight: 800;
          line-height: 1.7;
          letter-spacing: 1.5px;
          text-align: right;
        }

        .outline-circle {
          position: absolute;
          right: 60px;
          top: 55px;
          width: 170px;
          height: 170px;
          border: 1px solid #111111;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 10px;
          line-height: 1.6;
          font-weight: 800;
          letter-spacing: 1px;
          transform: rotate(-12deg);
        }

        .other-directions {
          padding: 110px 7vw;
          background: #f5f0ea;
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 7vw;
        }

        .other-heading h2 {
          margin: 0 0 30px;
          font-size: clamp(55px, 7vw, 105px);
          line-height: 0.82;
          letter-spacing: -4px;
          font-weight: 950;
        }

        .other-heading > p:last-child {
          margin: 0;
          font-size: 14px;
          line-height: 1.45;
        }

        .other-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .other-card {
          min-height: 270px;
          position: relative;
          padding: 28px;
          text-decoration: none;
          color: #111111;
          overflow: hidden;
        }

        .dancehall-card {
          background: #d45f88;
        }

        .latina-card {
          background: #111111;
          color: white;
        }

        .other-card-top {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          font-weight: 900;
        }

        .other-card-title {
          position: absolute;
          left: 28px;
          bottom: 28px;
        }

        .other-card-title p {
          margin: 0 0 8px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.7px;
        }

        .other-card-title h3 {
          margin: 0;
          font-size: clamp(55px, 7vw, 105px);
          line-height: 0.8;
          letter-spacing: -5px;
          font-weight: 950;
        }

        .other-card-shape {
          position: absolute;
          right: 70px;
          top: 35px;
          width: 190px;
          height: 190px;
          border: 1px solid #111111;
          transform: rotate(15deg);
        }

        .other-card-shape div {
          position: absolute;
          inset: 25px;
          border: 1px solid #111111;
        }

        .other-card-shape div:nth-child(2) {
          inset: 50px;
        }

        .other-card-shape div:nth-child(3) {
          inset: 75px;
        }

        .latina-circle {
          position: absolute;
          right: 90px;
          top: 45px;
          width: 175px;
          height: 175px;
          border: 1px solid #d45f88;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          transform: rotate(-10deg);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .choice-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 520px;
        }

        .choice-pink {
          background: #d45f88;
          color: white;
          padding: 80px 7vw;
        }

        .choice-pink h2 {
          margin: 0;
          font-size: clamp(65px, 9vw, 130px);
          line-height: 0.8;
          letter-spacing: -5px;
          font-weight: 950;
        }

        .choice-black {
          background: #222225;
          color: white;
          padding: 80px 7vw;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
        }

        .choice-black > p {
          margin: 0 0 30px;
          font-size: 16px;
          line-height: 1.45;
          position: relative;
          z-index: 2;
        }

        .choice-button {
          align-self: flex-start;
          padding: 15px 22px;
          border: 1px solid white;
          color: white;
          text-decoration: none;
          font-size: 10px;
          font-weight: 900;
          position: relative;
          z-index: 2;
        }

        .choice-lines {
          position: absolute;
          width: 380px;
          height: 380px;
          right: -100px;
          top: -80px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 50%;
        }

        .choice-lines::before,
        .choice-lines::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 50%;
        }

        .choice-lines::before {
          inset: 35px;
        }

        .choice-lines::after {
          inset: 70px;
        }

        .directions-final {
          min-height: 440px;
          background: white;
          display: grid;
          grid-template-columns: 1fr 0.6fr;
          align-items: center;
          padding: 80px 7vw;
        }

        .final-copy h2 {
          margin: 0 0 25px;
          font-size: clamp(65px, 9vw, 125px);
          line-height: 0.8;
          letter-spacing: -5px;
          font-weight: 950;
        }

        .final-copy > p:not(.section-kicker) {
          margin: 0 0 28px;
          font-size: 14px;
          line-height: 1.45;
        }

        .final-button {
          display: inline-flex;
          gap: 18px;
          align-items: center;
          padding: 16px 23px;
          background: #ee5b91;
          color: white;
          text-decoration: none;
          font-size: 10px;
          font-weight: 900;
        }

        .final-logo {
          display: flex;
          justify-content: flex-end;
        }

        .final-logo img {
          width: min(260px, 30vw);
          height: auto;
          transform: rotate(-8deg);
        }

        @media (max-width: 1000px) {

          .directions-hero {
            padding-left: 5vw;
            padding-right: 5vw;
          }

          .direction-main,
          .other-directions {
            padding-left: 5vw;
            padding-right: 5vw;
          }

          .other-directions {
            gap: 4vw;
          }
        }

        @media (max-width: 760px) {

          .directions-hero {
            min-height: auto;
            padding: 70px 20px;
            grid-template-columns: 1fr;
          }

          .directions-hero h1 {
            font-size: 72px;
            letter-spacing: -4px;
          }

          .hero-right {
            min-height: 280px;
            margin-top: 20px;
          }

          .hero-circle {
            width: 220px;
            height: 220px;
          }

          .hero-right > p {
            right: 0;
            bottom: -5px;
          }

          .direction-main {
            padding: 70px 20px;
          }

          .direction-intro {
            display: block;
          }

          .direction-intro h2 {
            font-size: 75px;
          }

          .direction-description {
            margin: 30px 0 0;
          }

          .bachata-grid {
            grid-template-columns: 1fr;
          }

          .direction-card {
            min-height: 300px;
          }

          .other-directions {
            padding: 70px 20px;
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .other-heading h2 {
            font-size: 70px;
          }

          .other-card {
            min-height: 270px;
          }

          .other-card-title h3 {
            font-size: 65px;
          }

          .other-card-shape,
          .latina-circle {
            right: 20px;
            transform: scale(0.7) rotate(10deg);
            transform-origin: center;
          }

          .choice-section {
            grid-template-columns: 1fr;
          }

          .choice-pink,
          .choice-black {
            padding: 65px 20px;
          }

          .choice-pink h2 {
            font-size: 72px;
          }

          .directions-final {
            grid-template-columns: 1fr;
            padding: 70px 20px;
          }

          .final-copy h2 {
            font-size: 72px;
          }

          .final-logo {
            justify-content: flex-start;
            margin-top: 40px;
          }

          .final-logo img {
            width: 190px;
          }
        }
      `}</style>
      <SiteFooter />
    </main>
  );
}