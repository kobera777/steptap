"use client";

import { useEffect, useRef } from "react";

/**
 * Ролик в разделе «Наши моменты».
 *
 * На компьютере запускается сам — без звука и по кругу. На телефоне не
 * запускается: файл весит 17 МБ, и списывать их с мобильного трафика у
 * каждого, кто просто зашёл на главную, нельзя. Там остаётся обложка с
 * кнопкой «play», и ролик грузится, только если его попросят.
 *
 * Атрибут autoplay в HTML нельзя поставить в зависимость от ширины экрана,
 * поэтому решение принимается здесь, уже в браузере.
 */
export function MomentsVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const desktop = window.matchMedia("(min-width: 761px)").matches;
    // Кто отключил анимации в системе, не должен натыкаться на самоиграющее видео.
    const calmo = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!desktop || calmo) return;

    video.muted = true; // без этого браузер не даст запустить ролик сам
    video.loop = true;
    video.preload = "auto";
    // Отказ («не сейчас», экономия трафика, политика браузера) — не ошибка:
    // человек просто увидит обложку с кнопкой, как на телефоне.
    void video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className="moments-video"
      src="/video/momenty.mp4"
      poster="/video/momenty-poster.webp"
      preload="none"
      controls
      playsInline
    />
  );
}
