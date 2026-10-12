"use client";

import { useEffect, useRef } from "react";

/**
 * Короткий ролик зала на странице «Аренда»: играет сам, без звука и по кругу.
 *
 * muted выставляется ещё и здесь, в браузере: React не всегда переносит
 * этот атрибут в HTML, а без него браузеры не дают видео стартовать самому.
 * Файл лёгкий (~3 МБ), поэтому ролик запускается и на телефоне — и даже
 * при «уменьшить движение» в системе: владелец хочет, чтобы зал показывался
 * сам, а спокойная съёмка зала без резких движений никому не мешает.
 */
export function HallVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    void video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}
