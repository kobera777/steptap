import type { ReactNode } from "react";
import { SignupLink } from "@/components/layout/SignupLink";
import "./sections.css";

/**
 * Финальная полоса «Твой первый шаг» — розовая, во всю ширину, с призывом.
 * Кнопка ведёт в MAX. Чёрную половину с кольцами владелец убрал.
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
    </section>
  );
}
