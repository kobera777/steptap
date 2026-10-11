import Image from "next/image";
import type { DanceStyle } from "@/data/directions";
import "./direction-card.css";

/**
 * Карточка направления с фотографией школы — на странице «Направления»
 * и на главной. Не ссылка: отдельных страниц у стилей нет, весь текст
 * на самой карточке. Оформление (цвет заливки) задаёт card.variant
 * в data/directions.ts.
 */
export function DirectionCard({ style, sizes }: { style: DanceStyle; sizes: string }) {
  const { card } = style;
  const longTitle = Math.max(...card.title.split(" ").map((w) => w.length)) >= 12;

  return (
    <article className={`dc-card dc-${card.variant}`}>
      {style.photo && (
        <div className="dc-photo">
          <Image
            src={style.photo.src}
            alt={style.photo.alt}
            width={1200}
            height={1200}
            sizes={sizes}
          />
        </div>
      )}

      <div className="dc-body">
        <div className="dc-top">
          <span className="dc-number">{card.number}</span>
        </div>

        <div className="dc-content">
          <ul className="dc-tags">
            {style.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          {card.kicker && <p className="dc-kicker">{card.kicker}</p>}
          <h3 className={longTitle ? "is-long" : undefined}>{card.title}</h3>
          <p className="dc-desc">{style.description}</p>
        </div>
      </div>
    </article>
  );
}
