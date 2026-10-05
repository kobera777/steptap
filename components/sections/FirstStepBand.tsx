import type { ReactNode } from "react";
import { SignupLink } from "@/components/layout/SignupLink";
import "./sections.css";

/**
 * Финальная полоса «Твой первый шаг» — как в прототипе владельца: слева
 * розовая с призывом, справа чёрная с кольцами. Кнопка ведёт в MAX.
 */
export function FirstStepBand({
  title,
  text,
  button = "ПОДОБРАТЬ ЗАНЯТИЕ",
}: {
  title: ReactNode;
  text: string;
  button?: string;
}) {
  return (
    <section className="sec-band">
      <div className="sec-band-copy">
        <p className="sec-eyebrow">ТВОЙ ПЕРВЫЙ ШАГ</p>
        <h2>{title}</h2>
        <p>{text}</p>
        <SignupLink className="sec-band-button">
          {button} <span>→</span>
        </SignupLink>
      </div>

      <div className="sec-band-art" aria-hidden="true">
        <div className="sec-rings">
          <span>
            Танцуй.
            <br />
            Чувствуй.
            <br />
            Будь собой.
          </span>
        </div>
      </div>
    </section>
  );
}
