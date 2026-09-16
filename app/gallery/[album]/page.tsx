import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PhotoGrid, VideoCard } from "@/components/gallery/AlbumMedia";
import {
  albums,
  categoryLabels,
  formatAlbumDate,
  formatMediaCount,
  getAdjacentAlbums,
  getAlbum,
  type GalleryPhoto,
  type GalleryVideo,
} from "@/data/gallery";
import "../gallery.css";

export function generateStaticParams() {
  return albums.map((album) => ({ album: album.slug }));
}

export async function generateMetadata(
  props: PageProps<"/gallery/[album]">,
): Promise<Metadata> {
  const { album: slug } = await props.params;
  const album = getAlbum(slug);
  if (!album) return { title: "Альбом не найден — STEP TAP" };

  return {
    title: `${album.title} — Галерея STEP TAP`,
    description: album.description,
    openGraph: { images: [album.cover] },
  };
}

export default async function AlbumPage(props: PageProps<"/gallery/[album]">) {
  const { album: slug } = await props.params;
  const album = getAlbum(slug);
  if (!album) notFound();

  const videos = album.media.filter((m): m is GalleryVideo => m.type === "video");
  const photos = album.media.filter((m): m is GalleryPhoto => m.type === "photo");
  const { newer, older } = getAdjacentAlbums(album.slug);

  let sectionNumber = 0;
  const nextSection = () => String(++sectionNumber).padStart(2, "0");

  return (
    <main className="gal-page">
      <SiteHeader />

      {/* HERO */}
      <section className="gal-album-hero">
        <Link href="/gallery" className="gal-back">
          ← ВСЕ АЛЬБОМЫ
        </Link>

        <div className="gal-album-hero-grid">
          <div data-reveal="left">
            <div className="gal-album-meta">
              <span className="is-pink">{categoryLabels[album.category]}</span>
              <span>{formatAlbumDate(album.date)}</span>
            </div>
            <h1>{album.title}</h1>
          </div>

          <div data-reveal data-reveal-delay="2">
            <p>{album.description}</p>
            <div className="gal-album-hero-count">{formatMediaCount(album)}</div>
          </div>
        </div>
      </section>

      {/* ВИДЕО */}
      {videos.length > 0 && (
        <section className="gal-section">
          <div className="gal-section-head" data-reveal>
            <div>
              <p className="gal-kicker">{nextSection()} / ВИДЕО</p>
              <h2>СМОТРИ.</h2>
            </div>
            <small>{videos.length} ВИДЕО</small>
          </div>

          <div className="gal-videos">
            {videos.map((video, index) => (
              <VideoCard key={`${video.title}-${index}`} video={video} />
            ))}
          </div>
        </section>
      )}

      {/* ФОТО */}
      {photos.length > 0 && (
        <section className="gal-section">
          <div className="gal-section-head" data-reveal>
            <div>
              <p className="gal-kicker">{nextSection()} / ФОТО</p>
              <h2>НАЙДИ СЕБЯ.</h2>
            </div>
            <small>{photos.length} ФОТО · НАЖМИ, ЧТОБЫ УВЕЛИЧИТЬ</small>
          </div>

          <PhotoGrid photos={photos} />
        </section>
      )}

      {/* СОСЕДНИЕ АЛЬБОМЫ */}
      {(newer || older) && (
        <nav className="gal-adjacent" aria-label="Другие альбомы">
          {newer && (
            <Link href={`/gallery/${newer.slug}`}>
              <span>← НОВЕЕ · {formatAlbumDate(newer.date)}</span>
              <strong>{newer.title}</strong>
            </Link>
          )}
          {older && (
            <Link href={`/gallery/${older.slug}`}>
              <span>СТАРШЕ · {formatAlbumDate(older.date)} →</span>
              <strong>{older.title}</strong>
            </Link>
          )}
        </nav>
      )}

      {/* FINAL CTA */}
      <section className="gal-final">
        <div data-reveal="left">
          <p className="gal-kicker">ТВОЙ ПЕРВЫЙ ШАГ</p>
          <h2>
            ГОТОВЫ
            <br />
            ТАНЦЕВАТЬ?
          </h2>
          <p>
            Запишись на пробное занятие —
            <br />
            поможем подобрать подходящую группу.
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
