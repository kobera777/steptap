import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { AlbumGrid } from "@/components/gallery/AlbumGrid";
import { getAlbums } from "@/data/gallery";
import "./gallery.css";

export const metadata: Metadata = {
  title: "Галерея — STEP TAP",
  description:
    "Фото и видео с занятий, вечеринок, мастер-классов и концертов школы танца STEP TAP.",
};

export default function GalleryPage() {
  const albums = getAlbums();

  return (
    <main className="gal-page">
      <SiteHeader />

      {/* HERO */}
      <section className="gal-hero">
        <div data-reveal="left">
          <p className="gal-kicker is-pink">АТМОСФЕРА STEP TAP</p>
          <h1>
            НАШИ
            <br />
            <span>МОМЕНТЫ.</span>
          </h1>
        </div>

        <div className="gal-hero-right" data-reveal="right" data-reveal-delay="2">
          <div className="gal-hero-art" aria-hidden="true" data-parallax="0.1">
            <span>
              Танец
              <br />
              объединяет ♡
            </span>
          </div>

          <p className="gal-hero-text">
            Люди. Эмоции.
            <br />
            Атмосфера.
            <small>
              Альбомы с наших вечеринок, мастер-классов, концертов и поездок. Найди себя
              на фото — и приходи за новыми.
            </small>
          </p>
        </div>
      </section>

      {/* ФИЛЬТРЫ + АЛЬБОМЫ */}
      <AlbumGrid albums={albums} />

      {/* FINAL CTA */}
      <section className="gal-final">
        <div data-reveal="left">
          <p className="gal-kicker">ТВОЙ ПЕРВЫЙ ШАГ</p>
          <h2>
            ХОЧЕШЬ
            <br />В КАДР?
          </h2>
          <p>
            Запишись на пробное занятие —
            <br />
            следующий альбом будет с тобой.
          </p>
          <Link href="/signup" className="gal-final-button">
            ЗАПИСАТЬСЯ <span>→</span>
          </Link>
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
