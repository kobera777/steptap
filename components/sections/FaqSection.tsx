import type { ReactNode } from "react";
import "./sections.css";

/**
 * Блок «Отвечаем на вопросы» — как в прототипе владельца, общий для всех
 * страниц. Нативные <details>: раскрываются без JavaScript, работают с
 * клавиатуры и с экранным диктором.
 */
export function FaqSection({
  title,
  items,
  eyebrow = "ОТВЕЧАЕМ НА ВОПРОСЫ",
}: {
  title: ReactNode;
  items: { question: string; answer: string }[];
  eyebrow?: string;
}) {
  return (
    <section className="sec-faq">
      <div>
        <p className="sec-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>

      <div className="sec-faq-list">
        {items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
