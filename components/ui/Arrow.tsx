/**
 * Стрелка сайта — тонкая линия со скруглёнными концами, цвет от текста.
 * Заменяет текстовый символ «→» во всех кнопках и ссылках.
 *
 * "go" (по умолчанию) — диагональ ↗ для кнопок и ссылок; при наведении на
 * кнопку/ссылку поворачивается вправо (стили в app/styles/ui.css).
 * "next" / "prev" — горизонтальные, для листания (галерея, месяцы).
 */
type ArrowDir = "go" | "next" | "prev";

const paths: Record<ArrowDir, string> = {
  go: "M7 17 17 7M8.5 7H17v8.5",
  next: "M5 12h14M13 6l6 6-6 6",
  prev: "M19 12H5M11 6l-6 6 6 6",
};

export function Arrow({ dir = "go" }: { dir?: ArrowDir }) {
  return (
    <svg
      className={`arrow-icon arrow-${dir}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[dir]} />
    </svg>
  );
}
