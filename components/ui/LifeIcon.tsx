/**
 * Линейные иконки блока «Танцы — это ещё и встречи» на странице «О школе».
 * Один стиль: контур 1.5px, скруглённые концы, цвет — от текста (currentColor).
 * Нарисованы в сетке 24×24, как современные наборы иконок.
 */
export type LifeIconName = "party" | "masterclass" | "performance" | "trip";

const paths: Record<LifeIconName, React.ReactNode> = {
  // Вечеринки — нота и искры
  party: (
    <>
      <path d="M9 18V5l11-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="17" cy="16" r="3" />
    </>
  ),
  // Мастер-классы — академическая шапочка: учимся у приглашённых преподавателей
  masterclass: (
    <>
      <path d="M21.4 10.9a1 1 0 0 0 0-1.8l-8.6-3.9a2 2 0 0 0-1.6 0L2.6 9.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.6 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </>
  ),
  // Выступления — звезда сцены
  performance: (
    <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9z" />
  ),
  // Поездки — метка на карте
  trip: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
};

export function LifeIcon({ name }: { name: LifeIconName }) {
  return (
    <svg
      className="life-icon"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
