"use client";

import { useState } from "react";
import { SignupLink } from "@/components/layout/SignupLink";
import { individualTiers, packPerLesson, rub } from "@/data/prices";

/** Разовое и три абонемента — варианты переключателя. */
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
 * Индивидуальные занятия: один переключатель (разовое / 4 / 8 / 12) и
 * пять карточек категорий преподавателя — в том же оформлении, что и
 * групповые абонементы. Переключатель меняет цены сразу во всех карточках.
 * Все числа берутся из data/prices.ts.
 */
export function IndividualCalculator() {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <div
        className="pr-chips pr-ind-switch"
        role="group"
        aria-label="Количество занятий"
      >
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

      <div className="pr-plans pr-ind-plans" aria-live="polite">
        {individualTiers.map((tier, index) => {
          const rate = rateOf(index, count);
          const total = totalOf(index, count);
          return (
            <article key={tier.category} className="pr-plan">
              <p className="pr-plan-label">{tier.category.toUpperCase()}</p>
              <p className="pr-plan-total">{rub(rate)}</p>
              <p className="pr-plan-unit">
                {count === 1 ? (
                  "за одно занятие"
                ) : (
                  <>
                    за занятие · <strong>{rub(total)}</strong> за{" "}
                    {countLabel(count).toLowerCase()}
                  </>
                )}
              </p>
              <SignupLink
                className="pr-btn pr-btn-ghost"
                ariaLabel={`Индивидуальное занятие: ${tier.category}, ${countLabel(count).toLowerCase()}, ${rub(total)}`}
              >
                ВЫБРАТЬ <span>→</span>
              </SignupLink>
            </article>
          );
        })}
      </div>
    </>
  );
}
