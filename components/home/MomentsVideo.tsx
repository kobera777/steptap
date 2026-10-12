"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Ролик в разделе «Атмосфера STEP TAP».
 *
 * Запускается сам, сразу — без звука и по кругу (владелец: «чтобы шёл без
 * кнопки play»). Браузеры разрешают автозапуск только без звука, поэтому
 * звук включается отдельной кнопкой в углу.
 *
 * На телефоне грузится облегчённая копия (640 px, ~5 МБ) вместо полной
 * (17 МБ): ролик стартует сам, и списывать 17 МБ мобильного трафика у
 * каждого, кто просто зашёл на главную, нельзя. Выбор — здесь, в браузере:
 * в HTML атрибут src нельзя поставить в зависимость от ширины экрана.
 */
export function MomentsVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const phone = window.matchMedia("(max-width: 760px)").matches;
    video.src = phone ? "/video/momenty-mobile.mp4" : "/video/momenty.mp4";
    // React не всегда переносит muted в HTML, а без него автозапуск запрещён.
    video.muted = true;
    void video.play().catch(() => {});
  }, []);

  function toggleSound() {
    const video = ref.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (video.paused) void video.play().catch(() => {});
  }

  return (
    <>
      <video
        ref={ref}
        className="moments-video"
        poster="/video/momenty-poster.webp"
        aria-label="Атмосфера STEP TAP: занятия и вечеринки школы"
        muted
        loop
        playsInline
        preload="auto"
      />
      <button
        type="button"
        className="moments-sound"
        onClick={toggleSound}
        aria-pressed={!muted}
        aria-label={muted ? "Включить звук" : "Выключить звук"}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 9h4l5-4v14l-5-4H4z" />
          {muted ? (
            <path d="M17 9l5 6M22 9l-5 6" />
          ) : (
            <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" />
          )}
        </svg>
        <span>{muted ? "ЗВУК" : "БЕЗ ЗВУКА"}</span>
      </button>
    </>
  );
}
