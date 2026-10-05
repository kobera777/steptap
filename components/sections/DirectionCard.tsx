import Image from "next/image";
import Link from "next/link";
import { styleHref, type DanceStyle } from "@/data/directions";
import "./direction-card.css";

/**
 * Карточка направления с фотографией школы — на странице «Направления»
 * и на главной. Ведёт на страницу стиля. Оформление (цвет заливки) задаёт
 * card.variant в data/directions.ts.
 */
export function DirectionCard({ style, sizes }: { style: DanceStyle; sizes: string }) {
  const { card } = style;
  const longTitle = Math.max(...card.title.split(" ").map((w) => w.length)) >= 12;

  return (
    <Link
      href={styleHref(style)}
      className={`dc-card dc-${card.variant}`}
      aria-label={`${style.title} — о занятиях`}
    >
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
          <span className="dc-arrow" aria-hidden="true">
            →
          </span>
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
          <span className="dc-more">О ЗАНЯТИЯХ →</span>
        </div>
      </div>
    </Link>
  );
}
