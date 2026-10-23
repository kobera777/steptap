"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Заставка главной: анимированный логотип на весь экран (ролик Higgsfield,
 * последний кадр — официальный логотип). Показывается один раз за визит
 * (sessionStorage), затем плавно открывает страницу.
 *
 * — В последние полсекунды поверх ролика проявляется векторный логотип
 *   в той же точке и того же размера (40 % ширины кадра), чтобы финал был
 *   резким, а не пиксельным.
 * — Защита от «зависания»: если ролик не стартовал за 2,5 с, упал или
 *   идёт дольше 8 с — заставка закрывается сама. Есть «Пропустить» и Esc.
 * — При «уменьшить движение» вместо ролика — неподвижный логотип 0,8 с.
 * — Уже видевшим заставку её прячет встроенный скрипт в HomePage ещё до
 *   отрисовки (класс intro-seen на <html>), без мигания.
 */
type Phase = "play" | "logo" | "out" | "done";

const STORAGE_KEY = "st-intro";

export function IntroSplash() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>("play");
  const finishing = useRef(false);

  const finish = useCallback(() => {
    if (finishing.current) return;
    finishing.current = true;
    setPhase("out");
    window.setTimeout(() => {
      setPhase("done");
      document.documentElement.classList.remove("intro-lock");
    }, 600);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    // Уже видели за этот визит: заставку прячет CSS (html.intro-seen).
    if (root.classList.contains("intro-seen")) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // приватный режим: заставка просто покажется ещё раз
    }
    root.classList.add("intro-lock");

    const timers: number[] = [];
    let cleanupVideo = () => {};
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") finish();
    };
    window.addEventListener("keydown", onKey);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const video = videoRef.current;

    if (reduced || !video) {
      timers.push(window.setTimeout(() => setPhase("logo"), 0));
      timers.push(window.setTimeout(finish, 800));
    } else {
      // cancelled: ответы от уже отменённого запуска эффекта (в режиме
      // разработки React запускает его дважды) не должны закрывать заставку.
      let cancelled = false;
      let started = false;
      const close = () => {
        if (!cancelled) finish();
      };
      const phone = window.matchMedia("(max-width: 760px)").matches;
      video.src = phone ? "/video/intro-logo-mobile.mp4" : "/video/intro-logo.mp4";
      video.muted = true;
      video.onplaying = () => {
        started = true;
      };
      video.ontimeupdate = () => {
        if (!cancelled && video.duration && video.duration - video.currentTime < 0.6) {
          setPhase("logo");
        }
      };
      video.onended = () => {
        if (cancelled) return;
        setPhase("logo");
        timers.push(window.setTimeout(finish, 450));
      };
      video.onerror = close;
      void video.play().catch((error: DOMException) => {
        // AbortError — запуск прерван новой загрузкой, это не поломка.
        if (error.name !== "AbortError") close();
      });
      timers.push(
        window.setTimeout(() => {
          if (!started) close();
        }, 2500),
      );
      timers.push(window.setTimeout(close, 8000));
      cleanupVideo = () => {
        cancelled = true;
      };
    }

    return () => {
      cleanupVideo();
      timers.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("keydown", onKey);
      root.classList.remove("intro-lock");
    };
  }, [finish]);

  if (phase === "done") return null;

  return (
    <div
      className={`intro${phase === "logo" ? " is-logo" : ""}${phase === "out" ? " intro-out" : ""}`}
      role="dialog"
      aria-label="STEP TAP"
    >
      <video
        ref={videoRef}
        className="intro-video"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <Image
        className="intro-logo"
        src="/brand/logo-primary-white.svg"
        alt="STEP TAP"
        width={1306}
        height={1184}
        unoptimized
        priority
      />
      <button type="button" className="intro-skip" onClick={finish}>
        Пропустить
      </button>
    </div>
  );
}
