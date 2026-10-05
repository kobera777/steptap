"use client";

import { useState } from "react";
import { SignupLink } from "@/components/layout/SignupLink";
import { individualTiers, packPerLesson, rub } from "@/data/prices";

/** Разовое и три абонемента — как колонки в прайсе. */
const COUNTS = [1, 4, 8, 12] as const;

function countLabel(count: number) {
  if (count === 1) return "РАЗОВОЕ";
  return `${count} ${count === 4 ? "ЗАНЯТИЯ" : "ЗАНЯТИЙ"}`;
}

/** Цена одного занятия: разовое или внутри абонемента. */
function rateOf(tierIndex: number, count: number) {
  const tier = individualTiers[tierIndex];
  if (count === 1) return tier.single;
  const pack = tier.packs.find((p) => p.lessons === count);
  return pack ? packPerLesson(pack) : tier.single;
}

function totalOf(tierIndex: number, count: number) {
  const tier = individualTiers[tierIndex];
  if (count === 1) return tier.single;
  return tier.packs.find((p) => p.lessons === count)?.total ?? tier.single * count;
}

/**
 * Индивидуальные занятия как в прототипе владельца: выбираешь категорию
 * преподавателя и количество занятий — справа сразу сумма и кнопка в MAX.
 * Все числа берутся из data/prices.ts.
 */
export function IndividualCalculator() {
  const [tier, setTier] = useState(0);
  const [count, setCount] = useState<number>(1);
  const name = individualTiers[tier].category;
  const total = totalOf(tier, count);

  return (
    <div className="pr-ind-grid">
      <div>
        <label className="pr-field">
          Категория преподавателя
          <select value={tier} onChange={(e) => setTier(Number(e.target.value))}>
            {individualTiers.map((t, index) => (
              <option key={t.category} value={index}>
                {t.category}
              </option>
            ))}
          </select>
        </label>

        <div className="pr-chips">
          {COUNTS.map((n) => (
            <button
              key={n}
              type="button"
              className="pr-chip"
              aria-pressed={count === n}
              onClick={() => setCount(n)}
            >
              {countLabel(n)}
            </button>
          ))}
        </div>

        <div className="pr-mini-scroll">
          <table className="pr-mini-table">
            <caption>Стоимость одного занятия по категориям</caption>
            <thead>
              <tr>
                <th scope="col">ПРЕПОДАВАТЕЛЬ</th>
                {COUNTS.map((n) => (
                  <th key={n} scope="col">
                    {n === 1 ? "РАЗОВОЕ" : n}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {individualTiers.map((t, index) => (
                <tr key={t.category} className={index === tier ? "is-chosen" : undefined}>
                  <th scope="row">{t.category}</th>
                  {COUNTS.map((n) => (
                    <td key={n}>{rub(rateOf(index, n))}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="pr-ind-result" aria-live="polite">
        <p className="pr-eyebrow">
          {name.toUpperCase()} · {count === 1 ? "РАЗОВОЕ ЗАНЯТИЕ" : countLabel(count)}
        </p>
        <p className="pr-ind-amount">{rub(total)}</p>
        <p className="pr-small">
          {count === 1
            ? "за одно занятие"
            : `за весь абонемент · ${rub(rateOf(tier, count))} за занятие`}
        </p>
        <span className="pr-tag">ИНДИВИДУАЛЬНЫЙ ФОРМАТ</span>
        <p className="pr-small pr-muted">
          Обсудим твою задачу и поможем подобрать преподавателя. Длительность урока и
          время уточним перед записью.
        </p>
        <SignupLink
          className="pr-btn"
          ariaLabel={`Обсудить индивидуальное занятие: ${name}, ${countLabel(count).toLowerCase()}, ${rub(total)}`}
        >
          ОБСУДИТЬ ЗАНЯТИЕ <span>→</span>
        </SignupLink>
      </div>
    </div>
  );
}
