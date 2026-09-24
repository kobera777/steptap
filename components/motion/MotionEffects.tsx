"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Движение на сайте, без библиотек:
 *  - [data-reveal]        — элемент плавно появляется, когда доезжает до экрана
 *  - [data-parallax="n"]  — элемент смещается при скролле (n — сила, напр. 0.15)
 *  - [data-glass-header]  — шапка получает класс is-scrolled после первых пикселей
 *  - [data-tilt]          — карточка слегка наклоняется за курсором
 *
 * Уважает prefers-reduced-motion: тогда всё просто показывается без анимаций.
 */
export function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    /* ---------- reveal ---------- */
    const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (reduced || !("IntersectionObserver" in window)) {
      revealTargets.forEach((el) => el.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
      );
      revealTargets.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    /* ---------- header + parallax (один обработчик скролла) ----------
       Параллакс считаем только для элементов, которые сейчас на экране
       (IntersectionObserver): раньше getBoundingClientRect() вызывался для всех
       элементов на каждый кадр скролла, что заставляло браузер пересчитывать вёрстку. */
    const headers = document.querySelectorAll<HTMLElement>("[data-glass-header]");
    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    const visibleParallax = new Set<HTMLElement>();

    if (!reduced && "IntersectionObserver" in window && parallaxEls.length) {
      const pio = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const el = entry.target as HTMLElement;
            if (entry.isIntersecting) visibleParallax.add(el);
            else visibleParallax.delete(el);
          }
        },
        { rootMargin: "100px 0px" },
      );
      parallaxEls.forEach((el) => pio.observe(el));
      cleanups.push(() => pio.disconnect());
    }

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        headers.forEach((h) => h.classList.toggle("is-scrolled", y > 24));

        if (!reduced) {
          const vh = window.innerHeight;
          for (const el of visibleParallax) {
            const rect = el.getBoundingClientRect();
            // Смещение считаем от центра экрана, чтобы в «покое» элемент стоял на месте
            const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
            const strength = parseFloat(el.dataset.parallax || "0.1");
            el.style.setProperty(
              "--parallax",
              `${(-progress * strength * 100).toFixed(2)}px`,
            );
          }
        }
        ticking = false;
      });
    };

    // Первый расчёт — после того, как observer сообщит, какие элементы видны.
    const firstPaint = requestAnimationFrame(() => requestAnimationFrame(onScroll));
    cleanups.push(() => cancelAnimationFrame(firstPaint));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    });

    /* ---------- marquee: не крутим анимацию, пока строка вне экрана ---------- */
    const marquees = document.querySelectorAll<HTMLElement>(".marquee-track");
    if (!reduced && marquees.length && "IntersectionObserver" in window) {
      const mio = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("is-offscreen", !entry.isIntersecting);
        }
      });
      marquees.forEach((el) => mio.observe(el));
      cleanups.push(() => mio.disconnect());
    }

    /* ---------- tilt ---------- */
    if (!reduced && window.matchMedia("(hover: hover)").matches) {
      const tiltEls = document.querySelectorAll<HTMLElement>("[data-tilt]");
      tiltEls.forEach((el) => {
        const onMove = (event: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width - 0.5;
          const py = (event.clientY - rect.top) / rect.height - 0.5;
          el.style.setProperty("--tilt-x", `${(-py * 6).toFixed(2)}deg`);
          el.style.setProperty("--tilt-y", `${(px * 8).toFixed(2)}deg`);
          el.style.setProperty("--glare-x", `${((px + 0.5) * 100).toFixed(1)}%`);
          el.style.setProperty("--glare-y", `${((py + 0.5) * 100).toFixed(1)}%`);
        };
        const onLeave = () => {
          el.style.setProperty("--tilt-x", "0deg");
          el.style.setProperty("--tilt-y", "0deg");
        };
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", onLeave);
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
