import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SignupLink } from "@/components/layout/SignupLink";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryPhotos } from "@/data/gallery";
import Image from "next/image";
import "./gallery.css";

export const metadata: Metadata = {
  title: "Галерея",
  description:
    "Фото и видео школы танца STEP TAP: занятия, вечеринки, выступления, мастер-классы и поездки.",
};

/** Галерея: тексты и порядок блоков — из прототипа владельца, оформление прежнее. */
export default function GalleryPage() {
  return (
    <main className="gal-page">
      <SiteHeader />

      {/* HERO */}
      <section className="gal-hero">
        <div data-reveal="left">
          <p className="gal-kicker is-pink">АТМОСФЕРА STEP TAP</p>
          <h1>
            ТАНЦЫ В КАДРЕ.
            <br />
            <span>ЛЮДИ ЗА КАДРОМ.</span>
          </h1>
        </div>

        <div className="gal-hero-right" data-reveal="right" data-reveal-delay="2">
          <div className="gal-hero-art" aria-hidden="true" data-parallax="0.1">
            <span>
              Музыка.
              <br />
              Люди.
              <br />
              Моменты.
            </span>
          </div>

          <p className="gal-hero-text">
            <small>
              Посмотри, как выглядит танцевальная жизнь: занятия, встречи, сцена и
              общение. Нажми на фотографию, чтобы рассмотреть её ближе.
            </small>
          </p>
        </div>
      </section>

      {/* ФИЛЬТРЫ + ФОТО */}
      <GalleryGrid photos={galleryPhotos} />

      {/* В ДВИЖЕНИИ */}
      <section className="gal-section gal-motion">
        <p className="gal-kicker is-pink">В ДВИЖЕНИИ</p>
        <div className="gal-section-head">
          <h2>
            МУЗЫКУ
            <br />
            ЛУЧШЕ ВКЛЮЧИТЬ.
          </h2>
        </div>

        <div className="gal-video-frame">
          <video
            controls
            playsInline
            preload="none"
            poster="/video/momenty-poster.webp"
            src="/video/momenty.mp4"
            aria-label="Видео STEP TAP"
          />
        </div>
      </section>

      {/* ПРИХОДИ ЗА СВОИМИ ВПЕЧАТЛЕНИЯМИ */}
      <section className="gal-final">
        <div data-reveal="left">
          <p className="gal-kicker">ТВОЙ ПЕРВЫЙ ШАГ</p>
          <h2>
            ПРИХОДИ
            <br />
            ЗА СВОИМИ
            <br />
            ВПЕЧАТЛЕНИЯМИ.
          </h2>
          <p>Фотографии передают настроение. А почувствовать его лучше на занятии.</p>
          <SignupLink className="gal-final-button">
            ПОДОБРАТЬ ЗАНЯТИЕ <span>→</span>
          </SignupLink>
        </div>

        <div className="gal-final-logo" data-reveal="scale" data-reveal-delay="2">
          <div>
            <Image src="/step-tap-logo.png" alt="STEP TAP" width={260} height={260} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
