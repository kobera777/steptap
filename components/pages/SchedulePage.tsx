"use client";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Link from "next/link";
import { signupHref } from "@/data/nav";

import { useMemo, useState } from "react";

type Level = "zero" | "continuing" | "advanced" | "pro" | "profi" | "special";

type ClassItem = {
  id: number;
  day: number;
  start: string;
  end: string;
  title: string;
  teacher: string;
  level: Level;
};

const levelInfo: Record<
  Level,
  {
    label: string;
    description: string;
    className: string;
  }
> = {
  zero: {
    label: "1.0 СТАРТ",
    description: "без опыта",
    className: "schedule-card-zero",
  },

  continuing: {
    label: "2.0 ОСНОВА",
    description: "Есть опыт от 8 месяцев",
    className: "schedule-card-continuing",
  },

  advanced: {
    label: "3.0 РАЗВИТИЕ",
    description: "Есть опыт от 1.5года",
    className: "schedule-card-intermediate",
  },

  pro: {
    label: "4.0 МАСТЕРСТВО",
    description: "Закрытые группы",
    className: "schedule-card-pro",
  },

  profi: {
    label: "5.0 ПРОФИ",
    description: "Закрытая группа",
    className: "schedule-card-profi",
  },

  special: {
    label: "Специальные занятия",
    description: "Мастер-классы,  мужской стил",
    className: "schedule-card-special",
  },
};

const classes: ClassItem[] = [
  {
    id: 1,
    day: 1,
    start: "19:00",
    end: "20:00",
    title: "Парная Бачата",
    teacher: "Гио и Ада",
    level: "zero",
  },
  {
    id: 2,
    day: 1,
    start: "19:00",
    end: "20:00",
    title: "Бачата Леди",
    teacher: "Зарина",
    level: "zero",
  },
  {
    id: 3,
    day: 1,
    start: "20:00",
    end: "21:00",
    title: "Бачата Леди",
    teacher: "Зарина",
    level: "advanced",
  },
  {
    id: 18,
    day: 1,
    start: "21:00",
    end: "22:00",
    title: "Бачата Леди",
    teacher: "Зарина",
    level: "profi",
  },
  {
    id: 4,
    day: 2,
    start: "19:00",
    end: "20:00",
    title: "Парная Бачата",
    teacher: "Гио и Зарина",
    level: "continuing",
  },
  {
    id: 5,
    day: 2,
    start: "20:00",
    end: "21:00",
    title: "Парная Бачата",
    teacher: "Гио и Зарина",
    level: "advanced",
  },
  {
    id: 6,
    day: 2,
    start: "21:00",
    end: "22:00",
    title: "Парная Бачата",
    teacher: "Закрытая группа",
    level: "pro",
  },
  {
    id: 7,
    day: 3,
    start: "19:00",
    end: "20:00",
    title: "Парная Бачата",
    teacher: "Гио и Ада",
    level: "zero",
  },
  {
    id: 8,
    day: 3,
    start: "19:00",
    end: "20:00",
    title: "Бачата Леди",
    teacher: "Зарина",
    level: "zero",
  },
  {
    id: 9,
    day: 3,
    start: "20:00",
    end: "21:00",
    title: "Бачата Леди",
    teacher: "Зарина",
    level: "advanced",
  },
  {
    id: 19,
    day: 3,
    start: "21:00",
    end: "22:00",
    title: "Бачата Леди",
    teacher: "Зарина",
    level: "profi",
  },
  {
    id: 10,
    day: 4,
    start: "19:00",
    end: "20:00",
    title: "Парная Бачата",
    teacher: "Гио и Зарина",
    level: "continuing",
  },
  {
    id: 11,
    day: 4,
    start: "20:00",
    end: "21:00",
    title: "Парная Бачата",
    teacher: "Гио и Зарина",
    level: "advanced",
  },
  {
    id: 12,
    day: 4,
    start: "21:00",
    end: "22:00",
    title: "Парная Бачата",
    teacher: "Закрытая группа",
    level: "pro",
  },
  {
    id: 16,
    day: 2,
    start: "22:00",
    end: "23:00",
    title: "Парная Бачата",
    teacher: "Гио и Зарина",
    level: "profi",
  },
  {
    id: 17,
    day: 4,
    start: "22:00",
    end: "23:00",
    title: "Парная Бачата",
    teacher: "Гио и Зарина",
    level: "profi",
  },
  {
    id: 13,
    day: 5,
    start: "19:00",
    end: "21:00",
    title: "Мужской стиль",
    teacher: "Гио",
    level: "special",
  },
  {
    id: 14,
    day: 6,
    start: "14:00",
    end: "16:00",
    title: "Курс Бачазук Леди",
    teacher: "Ада",
    level: "special",
  },
  {
    id: 15,
    day: 7,
    start: "14:00",
    end: "16:00",
    title: "Бачата Леди",
    teacher: "Ада",
    level: "advanced",
  },
];

const days = [
  "ПОНЕДЕЛЬНИК",
  "ВТОРНИК",
  "СРЕДА",
  "ЧЕТВЕРГ",
  "ПЯТНИЦА",
  "СУББОТА",
  "ВОСКРЕСЕНЬЕ",
];

const timeRows = [
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function getCardPosition(item: ClassItem, dayClasses: ClassItem[]) {
  const startMinutes = timeToMinutes(item.start);
  const endMinutes = item.end ? timeToMinutes(item.end) : startMinutes + 60;

  const firstHour = 14 * 60;
  const minutesFromStart = startMinutes - firstHour;
  const duration = Math.max(60, endMinutes - startMinutes);

  const sameStart = dayClasses.filter((other) => other.start === item.start);

  const sameStartIndex = sameStart.findIndex((other) => other.id === item.id);

  const columnWidth = sameStart.length > 1 ? 50 : 100;

  return {
    top: `calc(${minutesFromStart} * var(--schedule-minute-height) / 60)`,
    height: `calc(${duration} * var(--schedule-minute-height) / 60 - 6px)`,
    width: `calc(${columnWidth}% - 4px)`,
    left: sameStart.length > 1 ? `calc(${sameStartIndex * 50}% + 2px)` : "2px",
  };
}

/** Расписание (клиентский компонент: переключение недель и вида). */
export function SchedulePage() {
  const [view, setView] = useState<"month" | "week" | "list">("month");

  const groupedClasses = useMemo(() => {
    return days.map((_, dayIndex) => classes.filter((item) => item.day === dayIndex + 1));
  }, []);

  return (
    <main className="schedule-page">
      <SiteHeader />

      <section className="schedule-hero">
        <div className="schedule-hero-copy">
          <p className="schedule-kicker">НАШЕ РАСПИСАНИЕ</p>

          <h1>
            ЗАНЯТИЯ
            <br />В STEP TAP
          </h1>

          <p className="schedule-intro">
            Выбирайте направление, удобное время
            <br />
            и приходите танцевать. Мы всегда рады
            <br />
            новым и знакомым лицам!
          </p>
        </div>

        <div className="schedule-hero-art">
          <div className="schedule-pink-square" />

          <div className="schedule-outline-square">
            <span>
              Больше
              <br />
              чем
              <br />
              танец ♡
            </span>
          </div>
        </div>

        <div className="schedule-hero-words">
          <span>ЛЮДИ</span>
          <span>МУЗЫКА</span>
          <span>ДВИЖЕНИЕ</span>
          <span>РАЗВИТИЕ</span>
          <i />
        </div>
      </section>

      <section className="schedule-calendar-section">
        <div className="schedule-calendar-top">
          <button
            className="schedule-arrow"
            type="button"
            aria-label="Предыдущий месяц"
            style={{
              position: "relative",
              left: "-70px",
            }}
          >
            ←
          </button>

          <h2
            style={{
              position: "relative",
              left: "-70px",
            }}
          >
            СЕНТЯБРЬ <span>2026</span>
          </h2>

          <button
            className="schedule-arrow"
            type="button"
            aria-label="Следующий месяц"
            style={{
              position: "relative",
              left: "-70px",
            }}
          >
            →
          </button>

          <div
            className="schedule-top-legend"
            style={{
              position: "relative",
              left: "-40px",
            }}
          >
            {(Object.keys(levelInfo) as Level[]).map((level) => (
              <div key={level} className="schedule-top-legend-item">
                <span
                  className={`schedule-legend-dot ${levelInfo[level].className}`}
                  style={
                    level === "pro"
                      ? {
                          backgroundColor: "#B8A1E3",
                        }
                      : level === "profi"
                        ? {
                            backgroundColor: "#34343A",
                          }
                        : undefined
                  }
                />

                <div>
                  <strong>{levelInfo[level].label}</strong>

                  <small>{levelInfo[level].description}</small>
                </div>
              </div>
            ))}
          </div>

          <div
            className="schedule-view-switcher"
            style={{
              position: "relative",
              left: "30px",
            }}
          >
            <button
              type="button"
              className={view === "month" ? "is-active" : ""}
              onClick={() => setView("month")}
            >
              МЕСЯЦ
            </button>

            <button
              type="button"
              className={view === "week" ? "is-active" : ""}
              onClick={() => setView("week")}
            >
              НЕДЕЛЯ
            </button>

            <button
              type="button"
              className={view === "list" ? "is-active" : ""}
              onClick={() => setView("list")}
            >
              СПИСОК
            </button>
          </div>
        </div>

        {view === "month" && (
          <div className="schedule-calendar">
            <div className="schedule-grid-header">
              <div className="schedule-time-head" />

              {days.map((day) => (
                <div key={day} className="schedule-day-head">
                  {day}
                </div>
              ))}
            </div>

            <div className="schedule-grid-body">
              <div className="schedule-time-column">
                {timeRows.map((time) => (
                  <div key={time} className="schedule-time">
                    {time}
                  </div>
                ))}
              </div>

              {groupedClasses.map((dayClasses, index) => (
                <div key={days[index]} className="schedule-day-column">
                  <div className="schedule-day-lines">
                    {timeRows.map((time) => (
                      <div key={time} className="schedule-hour-line" />
                    ))}
                  </div>

                  <div className="schedule-day-content">
                    {dayClasses.map((item) => {
                      const info = levelInfo[item.level];

                      const position = getCardPosition(item, dayClasses);

                      const compactEarlyCard = [1, 2, 7, 8].includes(item.id);

                      return (
                        <article
                          key={item.id}
                          className={`schedule-card ${info.className}`}
                          style={{
                            ...position,
                            ...(compactEarlyCard
                              ? {
                                  padding: "8px 14px 5px",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                }
                              : {}),
                            ...(item.level === "pro"
                              ? { backgroundColor: "#B8A1E3" }
                              : item.level === "profi"
                                ? { backgroundColor: "#34343A", color: "#FFFFFF" }
                                : {}),
                          }}
                        >
                          <strong
                            style={
                              compactEarlyCard
                                ? {
                                    whiteSpace: "nowrap",
                                    marginBottom: "4px",
                                    lineHeight: 1,
                                    transform: "translateX(-11px)",
                                  }
                                : undefined
                            }
                          >
                            {item.start}
                            {item.end ? ` – ${item.end}` : ""}
                          </strong>

                          <h3
                            style={
                              compactEarlyCard
                                ? {
                                    marginTop: 0,
                                    marginBottom: "4px",
                                    lineHeight: 1,
                                  }
                                : undefined
                            }
                          >
                            {item.title}
                          </h3>

                          <p
                            style={
                              compactEarlyCard
                                ? {
                                    marginTop: 0,
                                    marginBottom: "4px",
                                    lineHeight: 1,
                                  }
                                : undefined
                            }
                          >
                            {item.teacher}
                          </p>

                          {item.level === "profi" && (
                            <small style={{ marginBottom: "3px" }}>Закрытая группа</small>
                          )}

                          <small>{info.label}</small>
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "week" && (
          <div className="schedule-week-view">
            <div className="schedule-week-title">НЕДЕЛЯ</div>

            {days.map((day, index) => {
              const dayClasses = groupedClasses[index];

              return (
                <div key={day} className="schedule-week-row">
                  <strong>{day}</strong>

                  <div>
                    {dayClasses.length === 0 ? (
                      <span className="schedule-empty">Занятий нет</span>
                    ) : (
                      dayClasses.map((item) => (
                        <article
                          key={item.id}
                          className={`schedule-list-card ${levelInfo[item.level].className}`}
                          style={
                            item.level === "pro"
                              ? { backgroundColor: "#B8A1E3" }
                              : item.level === "profi"
                                ? { backgroundColor: "#34343A", color: "#FFFFFF" }
                                : undefined
                          }
                        >
                          <b>
                            {item.start}
                            {item.end ? ` – ${item.end}` : ""}
                          </b>

                          <span>{item.title}</span>

                          <small>{item.teacher}</small>
                        </article>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {view === "list" && (
          <div className="schedule-list-view">
            {days.map((day, index) => {
              const dayClasses = groupedClasses[index];

              if (!dayClasses.length) return null;

              return (
                <div key={day} className="schedule-list-day">
                  <h3>{day}</h3>

                  {dayClasses.map((item) => (
                    <article
                      key={item.id}
                      className={`schedule-list-card ${levelInfo[item.level].className}`}
                    >
                      <b>
                        {item.start}
                        {item.end ? ` – ${item.end}` : ""}
                      </b>

                      <span>{item.title}</span>

                      <small>{item.teacher}</small>

                      <em>{levelInfo[item.level].label}</em>
                    </article>
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section className="schedule-events" id="events">
        <div>
          <p className="section-kicker">СОБЫТИЯ И МАСТЕР-КЛАССЫ</p>

          <h2>
            БЛИЖАЙШИЕ
            <br />
            СОБЫТИЯ
          </h2>
        </div>

        <div className="schedule-events-list">
          <article>
            <span>02 СЕН</span>

            <strong>Бесплатные открытые уроки</strong>

            <small>19:00</small>
          </article>

          <article>
            <span>05 СЕН</span>

            <strong>Старт курса Бачазук Леди</strong>

            <small>Ада</small>
          </article>

          <article>
            <span>12 СЕН</span>

            <strong>День рождения Зарины / МК Бачата Леди + вечеринка</strong>

            <small>Событие STEP TAP</small>
          </article>
        </div>
      </section>

      <section className="schedule-final-cta">
        <div>
          <p>НЕ ЗНАЕШЬ, С КАКОЙ ГРУППЫ НАЧАТЬ?</p>

          <h2>
            МЫ
            <br />
            ПОМОЖЕМ
          </h2>
        </div>

        <Link href={signupHref}>ПОДОБРАТЬ ГРУППУ →</Link>
      </section>

      <SiteFooter />
    </main>
  );
}
