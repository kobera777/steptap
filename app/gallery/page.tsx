import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryPhotos } from "@/data/gallery";
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
      </section>

      {/* ФИЛЬТРЫ + ФОТО */}
      <GalleryGrid photos={galleryPhotos} />

      {/* В ДВИЖЕНИИ */}
      <section className="gal-section gal-motion">
        <p className="gal-kicker is-pink">В ДВИЖЕНИИ</p>

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

      <SiteFooter />
    </main>
  );
}
