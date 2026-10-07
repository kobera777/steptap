import { individualTiers, packPerLesson, rub, type IndividualTier } from "@/data/prices";

/** Разовое и три абонемента — столбцы таблицы. */
const COUNTS = [1, 4, 8, 12] as const;

function columnTitle(count: number) {
  if (count === 1) return "Разовое";
  return `${count} ${count === 4 ? "занятия" : "занятий"}`;
}

/** Цена одного занятия и сумма абонемента (у разового они совпадают). */
function priceOf(tier: IndividualTier, count: number) {
  if (count === 1) return { rate: tier.single, total: tier.single };
  const pack = tier.packs.find((p) => p.lessons === count);
  if (!pack) return { rate: tier.single, total: tier.single * count };
  return { rate: packPerLesson(pack), total: pack.total };
}

/**
 * Индивидуальные занятия — одна таблица: строки — категории преподавателя,
 * столбцы — разовое и абонементы. Крупно — сумма абонемента (её и платят),
 * мелко — сколько выходит за одно занятие. На телефоне таблица сменяется
 * карточками (как в аренде).
 * Все числа берутся из data/prices.ts.
 */
export function IndividualTable() {
  return (
    <>
      <div className="pr-table-wrap">
        <table className="pr-table pr-table-individual">
          <caption className="pr-visually-hidden">
            Индивидуальные занятия: стоимость по категориям преподавателя
          </caption>
          <thead>
            <tr>
              <th scope="col">Преподаватель</th>
              {COUNTS.map((n) => (
                <th key={n} scope="col">
                  {columnTitle(n)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {individualTiers.map((tier) => (
              <tr key={tier.category}>
                <th scope="row">{tier.category}</th>
                {COUNTS.map((n) => {
                  const { rate, total } = priceOf(tier, n);
                  return (
                    <td key={n}>
                      <span>{rub(total)}</span>
                      <small>
                        {n === 1 ? "за одно занятие" : `${rub(rate)} за занятие`}
                      </small>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pr-rates">
        {individualTiers.map((tier) => (
          <article key={tier.category} className="pr-rate">
            <h4>{tier.category}</h4>
            <dl>
              {COUNTS.map((n) => {
                const { rate, total } = priceOf(tier, n);
                return (
                  <div key={n}>
                    <dt>{columnTitle(n)}</dt>
                    <dd>
                      {rub(total)}
                      {n > 1 && <small>{rub(rate)} за занятие</small>}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </article>
        ))}
      </div>
    </>
  );
}
