"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryPhoto, GalleryVideo } from "@/data/gallery";

/* ---------- ВИДЕО ---------- */

export function VideoCard({ video }: { video: GalleryVideo }) {
  return (
    <article className="gal-video">
      <div className="gal-video-frame">
        {video.youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : video.src ? (
          <video controls preload="metadata" poster={video.poster} src={video.src} />
        ) : (
          <div className="gal-video-placeholder" aria-label="Видео скоро появится">
            <b aria-hidden="true">▶</b>
            <span>ВИДЕО СКОРО</span>
          </div>
        )}
      </div>

      <div className="gal-video-caption">
        <span>{video.title}</span>
        {video.duration && <small>{video.duration}</small>}
      </div>
    </article>
  );
}

/* ---------- ФОТО + LIGHTBOX ---------- */

export function PhotoGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [current, setCurrent] = useState<number | null>(null);

  const close = useCallback(() => setCurrent(null), []);

  const step = useCallback(
    (delta: number) => {
      setCurrent((index) =>
        index === null ? null : (index + delta + photos.length) % photos.length,
      );
    },
    [photos.length],
  );

  // Клавиатура + блокировка скролла страницы, пока открыт lightbox
  useEffect(() => {
    if (current === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [current, close, step]);

  // Свайп на мобильном
  const touchStartX = useRef<number | null>(null);

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 50) step(delta < 0 ? 1 : -1);
  };

  const photo = current === null ? null : photos[current];

  return (
    <>
      <div className="gal-masonry">
        {photos.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            className="gal-photo"
            onClick={() => setCurrent(index)}
            aria-label={`Открыть фото ${index + 1} из ${photos.length}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(max-width: 640px) 50vw, (max-width: 1000px) 45vw, 30vw"
            />
          </button>
        ))}
      </div>

      {photo && current !== null && (
        <div
          className="gal-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Фото ${current + 1} из ${photos.length}`}
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            className="gal-lightbox-close"
            aria-label="Закрыть"
            onClick={close}
          >
            ✕
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                className="gal-lightbox-prev"
                aria-label="Предыдущее фото"
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
              >
                ←
              </button>
              <button
                type="button"
                className="gal-lightbox-next"
                aria-label="Следующее фото"
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
              >
                →
              </button>
            </>
          )}

          <div
            className="gal-lightbox-stage"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              fill
              priority
              sizes="92vw"
            />
          </div>

          <div className="gal-lightbox-counter">
            <span>{String(current + 1).padStart(2, "0")}</span> /{" "}
            {String(photos.length).padStart(2, "0")}
          </div>
        </div>
      )}
    </>
  );
}
