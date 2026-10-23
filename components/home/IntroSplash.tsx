"use client";

import { useEffect, useRef, useState } from "react";
import { logoParts, logoViewBox } from "./introLogo";

/**
 * Заставка главной: официальный логотип собирается «в ритме шага» — без
 * видео, векторная анимация (Web Animations API), поэтому резкая на любом
 * экране и почти ничего не весит.
 *
 *   STEP — буквы по очереди «шагают» сверху и пружинят при приземлении;
 *   TAP  — поднимаются снизу в том же ритме;
 *   точка «шагает» на счёт 1-2-3-4 по буквам S-T-E-P и спрыгивает на место,
 *   от последнего шага расходится розовое кольцо; проявляется «[стэп тэп]»;
 *   уход — диагональная шторка: чёрная, за ней розовая.
 *
 * Один раз за визит (sessionStorage; уже видевшим её прячет скрипт
 * intro-seen в app/layout.tsx ещё до отрисовки). «Пропустить» и Esc.
 * При «уменьшить движение» в системе заставки нет.
 */
const STORAGE_KEY = "st-intro";

/** Центр и радиус розовой точки в координатах логотипа (для кольца). */
const DOT = { cx: 1172.5, cy: 834, r: 72.75 };

const ease = {
  out: "cubic-bezier(.2,.8,.2,1)",
  inOut: "cubic-bezier(.7,0,.2,1)",
  fall: "cubic-bezier(.55,0,1,.45)",
  rise: "cubic-bezier(0,.55,.45,1)",
};

export function IntroSplash() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const htmlEl = document.documentElement;
    const root = rootRef.current;
    if (!root || htmlEl.classList.contains("intro-seen")) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof root.animate !== "function") {
      htmlEl.classList.add("intro-seen");
      return;
    }
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // приватный режим: заставка просто покажется ещё раз
    }
    htmlEl.classList.add("intro-lock");

    let cancelled = false;
    let skipped = false;
    const anims: Animation[] = [];
    const q = (sel: string) => Array.from(root.querySelectorAll(sel));
    const add = (el: Element, frames: Keyframe[], opts: KeyframeAnimationOptions) => {
      anims.push(el.animate(frames, { fill: "both", ...opts }));
    };

    // STEP: шаги сверху с пружинкой.
    q(".intro-step").forEach((el, i) => {
      add(
        el,
        [
          { transform: "translateY(-200px)", opacity: 0 },
          { transform: "translateY(12px) scaleY(.92)", opacity: 1, offset: 0.7 },
          { transform: "translateY(0) scaleY(1)", opacity: 1 },
        ],
        { duration: 420, delay: i * 60, easing: ease.out },
      );
    });

    // TAP: снизу в том же ритме.
    q(".intro-tap").forEach((el, i) => {
      add(
        el,
        [
          { transform: "translateY(200px)", opacity: 0 },
          { transform: "translateY(-10px)", opacity: 1, offset: 0.7 },
          { transform: "translateY(0)", opacity: 1 },
        ],
        { duration: 420, delay: 250 + i * 60, easing: ease.out },
      );
    });

    // Точка «шагает» на счёт 1-2-3-4 по верху букв S, T, E, P и спрыгивает
    // на своё место. Координаты — в единицах логотипа: верх STEP на y = 60,
    // низ точки на 906,75 → подъём −847; центры S, T, E, P относительно
    // точки: −979, −674, −376, −66.
    const land = "scale(1.15,.85)";
    q(".intro-dot").forEach((el) => {
      add(
        el,
        [
          { transform: "translate(-979px,-1300px)", opacity: 0, easing: ease.fall },
          {
            transform: "translate(-979px,-1300px)",
            opacity: 1,
            offset: 0.02,
            easing: ease.fall,
          },
          {
            transform: `translate(-979px,-847px) ${land}`,
            offset: 0.2,
            easing: ease.rise,
          },
          { transform: "translate(-826px,-1010px)", offset: 0.3, easing: ease.fall },
          {
            transform: `translate(-674px,-847px) ${land}`,
            offset: 0.4,
            easing: ease.rise,
          },
          { transform: "translate(-525px,-1010px)", offset: 0.5, easing: ease.fall },
          {
            transform: `translate(-376px,-847px) ${land}`,
            offset: 0.6,
            easing: ease.rise,
          },
          { transform: "translate(-221px,-1010px)", offset: 0.7, easing: ease.fall },
          {
            transform: `translate(-66px,-847px) ${land}`,
            offset: 0.8,
            easing: ease.rise,
          },
          { transform: "translate(-20px,-960px)", offset: 0.88, easing: ease.fall },
          { transform: "translate(0,0) scale(1)", opacity: 1 },
        ],
        { duration: 900, delay: 380 },
      );
    });

    // Кольцо — когда точка встаёт на своё место.
    q(".intro-ring").forEach((el) => {
      add(
        el,
        [
          { transform: "scale(.4)", opacity: 0 },
          { transform: "scale(.4)", opacity: 0.9, offset: 0.01 },
          { transform: "scale(4)", opacity: 0 },
        ],
        { duration: 600, delay: 1280, easing: ease.out },
      );
    });

    // Подпись «[стэп тэп]».
    q(".intro-tagline").forEach((el) => {
      add(
        el,
        [
          { transform: "translateY(36px)", opacity: 0, filter: "blur(6px)" },
          { transform: "translateY(0)", opacity: 1, filter: "blur(0)" },
        ],
        { duration: 400, delay: 1150, easing: ease.out },
      );
    });

    // Лёгкий общий «вдох» логотипа.
    q(".intro-logo").forEach((el) => {
      add(el, [{ transform: "scale(.94)" }, { transform: "scale(1)" }], {
        duration: 1500,
        easing: ease.out,
      });
    });

    const leave = async () => {
      if (cancelled) return;
      const wipe: Keyframe[] = [
        { clipPath: "polygon(0 0, 200% 0, 100% 100%, -100% 100%)" },
        { clipPath: "polygon(200% 0, 200% 0, 100% 100%, 100% 100%)" },
      ];
      const out = [
        ...q(".intro-black").map((el) =>
          el.animate(wipe, { duration: 650, easing: ease.inOut, fill: "forwards" }),
        ),
        ...q(".intro-pink").map((el) =>
          el.animate(wipe, {
            duration: 650,
            delay: 100,
            easing: ease.inOut,
            fill: "forwards",
          }),
        ),
      ];
      await Promise.all(out.map((a) => a.finished)).catch(() => {});
      if (cancelled) return;
      htmlEl.classList.remove("intro-lock");
      setDone(true);
    };

    const skip = () => {
      skipped = true;
      anims.forEach((a) => a.finish());
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") skip();
    };
    window.addEventListener("keydown", onKey);
    const skipBtn = root.querySelector(".intro-skip");
    skipBtn?.addEventListener("click", skip);

    Promise.all(anims.map((a) => a.finished))
      .catch(() => {})
      .then(() => new Promise((resolve) => window.setTimeout(resolve, skipped ? 0 : 250)))
      .then(leave);

    return () => {
      cancelled = true;
      anims.forEach((a) => a.cancel());
      window.removeEventListener("keydown", onKey);
      skipBtn?.removeEventListener("click", skip);
      htmlEl.classList.remove("intro-lock");
    };
  }, []);

  if (done) return null;

  return (
    <div className="intro" ref={rootRef} role="presentation">
      <div className="intro-pink" aria-hidden="true" />
      <div className="intro-black">
        <svg
          className="intro-logo"
          viewBox={logoViewBox}
          role="img"
          aria-label="STEP TAP"
        >
          {logoParts.step.map((d, i) => (
            <path key={`s${i}`} className="intro-part intro-step" d={d} />
          ))}
          {logoParts.tap.map((d, i) => (
            <path key={`t${i}`} className="intro-part intro-tap" d={d} />
          ))}
          <circle className="intro-part intro-ring" cx={DOT.cx} cy={DOT.cy} r={DOT.r} />
          <path className="intro-part intro-dot" d={logoParts.dot} />
          <path className="intro-part intro-tagline" d={logoParts.tagline} />
        </svg>
        <button type="button" className="intro-skip">
          Пропустить
        </button>
      </div>
    </div>
  );
}
