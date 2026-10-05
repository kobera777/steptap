"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SignupLink } from "@/components/layout/SignupLink";
import {
  classes,
  days,
  daysShort,
  events,
  levelInfo,
  monthNames,
  monthNamesGenitive,
  monthShort,
  timeRows,
  type ClassItem,
  type Level,
  type ScheduleEvent,
} from "@/data/schedule";

type View = "month" | "week" | "day";

/** Сколько месяцев вперёд можно пролистать календарь. */
const MONTHS_AHEAD = 6;

/* ---------- «Сегодня» ----------
   Страница собирается заранее, а открывают её в другой день. Если считать
   дату при сборке, браузер увидит, что HTML не совпадает с тем, что он
   нарисовал сам. useSyncExternalStore отдаёт null при сборке и настоящую
   дату — уже в браузере. Строка, а не Date: снимок должен быть стабильным. */
const noSubscribe = () => () => {};

function todayIso() {
  const d = new Date();
  return isoOf(d.getFullYear(), d.getMonth(), d.getDate());
}

function useTodayIso() {
  return useSyncExternalStore(noSubscribe, todayIso, () => null);
}

function isoOf(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function parseIso(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m: m - 1, d };
}

/** Индекс дня недели с понедельника: 0 — ПН … 6 — ВС. */
function weekdayOf(year: number, month: number, day: number) {
  return (new Date(year, month, day).getDay() + 6) % 7;
}

function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

const FIRST_MINUTE = timeToMinutes(timeRows[0]);

const isClosed = (item: ClassItem) => item.level === "pro" || item.level === "profi";

function classesOfDay(dayIndex: number) {
  return classes
    .filter((item) => item.day === dayIndex + 1)
    .sort((a, b) => a.start.localeCompare(b.start));
}

/** Что услышит человек с экранным диктором на кнопке занятия. */
function signupLabel(item: ClassItem) {
  const day = days[item.day - 1].toLowerCase();
  return `Записаться: ${item.title}, ${day}, ${item.start}–${item.end}, ${levelInfo[item.level].label}`;
}

/* ---------- Карточки занятий ---------- */

/** Карточка в сетке недели: положение по времени, сама — кнопка в MAX. */
function GridCard({ item, dayClasses }: { item: ClassItem; dayClasses: ClassItem[] }) {
  const info = levelInfo[item.level];
  const start = timeToMinutes(item.start) - FIRST_MINUTE;
  const duration = Math.max(60, timeToMinutes(item.end) - timeToMinutes(item.start));
  const parallel = dayClasses.filter((other) => other.start === item.start);
  const index = parallel.findIndex((other) => other.id === item.id);
  const share = 100 / parallel.length;
  // Два занятия в одно время делят колонку пополам. Тогда «19:00 – 20:00»
  // не помещается в строку — показываем только начало: конец и так виден
  // по высоте карточки.
  const narrow = parallel.length > 1;

  return (
    <div
      className="schedule-slot"
      style={{
        top: `calc(${start} * var(--schedule-hour-height) / 60)`,
        height: `calc(${duration} * var(--schedule-hour-height) / 60 - 6px)`,
        width: `calc(${share}% - 4px)`,
        left: `calc(${index * share}% + 2px)`,
      }}
    >
      <SignupLink
        className={`schedule-card ${info.className}${narrow ? " is-narrow" : ""}`}
        ariaLabel={signupLabel(item)}
      >
        <strong>{narrow ? item.start : `${item.start} – ${item.end}`}</strong>
        <h3>{item.title}</h3>
        {item.teacher !== "Закрытая группа" && <p>{item.teacher}</p>}
        {isClosed(item) && <em>Закрытая группа</em>}
        <small>{info.label}</small>
      </SignupLink>
    </div>
  );
}

/** Строка занятия для списков (телефон, день, месяц): крупная, под палец. */
function ClassRow({ item }: { item: ClassItem }) {
  const info = levelInfo[item.level];

  return (
    <SignupLink
      className={`schedule-row ${info.className}`}
      ariaLabel={signupLabel(item)}
    >
      <b>
        {item.start} – {item.end}
      </b>
      <span className="schedule-row-title">
        {item.title}
        {item.teacher !== "Закрытая группа" && <small>{item.teacher}</small>}
      </span>
      <span className="schedule-row-level">
        {info.label}
        {isClosed(item) && <small>Закрытая группа</small>}
      </span>
      <i>Записаться →</i>
    </SignupLink>
  );
}

function EventRow({ event }: { event: ScheduleEvent }) {
  return (
    <SignupLink
      className="schedule-row schedule-row-event"
      ariaLabel={`Записаться: ${event.title}`}
    >
      <b>Событие</b>
      <span className="schedule-row-title">
        {event.title}
        <small>{event.note}</small>
      </span>
      <i>Записаться →</i>
    </SignupLink>
  );
}

/* ---------- Страница ---------- */

/** Расписание: месяц, неделя (по умолчанию) и день. Каждое занятие — кнопка в MAX. */
export function SchedulePage() {
  const today = useTodayIso();
  const [view, setView] = useState<View>("week");
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [pickedDate, setPickedDate] = useState<string | null>(null);
  const [monthOffset, setMonthOffset] = useState(0);

  const groupedClasses = useMemo(() => days.map((_, index) => classesOfDay(index)), []);

  const todayParts = today ? parseIso(today) : null;
  const todayIndex = todayParts
    ? weekdayOf(todayParts.y, todayParts.m, todayParts.d)
    : null;
  const activeDay = selectedDay ?? todayIndex ?? 0;

  // Прошедшие события не показываем: устаревшее событие подрывает доверие.
  const upcoming = today
    ? events
        .filter((event) => event.date >= today)
        .sort((a, b) => a.date.localeCompare(b.date))
    : [];

  // Календарь месяца: текущий месяц + сдвиг стрелками.
  const month = todayParts
    ? (() => {
        const first = new Date(todayParts.y, todayParts.m + monthOffset, 1);
        return { y: first.getFullYear(), m: first.getMonth() };
      })()
    : null;

  function openDay(iso: string) {
    const { y, m, d } = parseIso(iso);
    setSelectedDay(weekdayOf(y, m, d));
    setPickedDate(iso);
    setView("day");
  }

  const pickedParts = pickedDate ? parseIso(pickedDate) : null;
  const pickedEvents = pickedDate ? upcoming.filter((e) => e.date === pickedDate) : [];

  return (
    <main className="schedule-page">
      <SiteHeader />

      <section className="schedule-hero">
        <div className="schedule-hero-copy">
          <p className="schedule-kicker">РАСПИСАНИЕ STEP TAP</p>

          <h1>
            НАЙДИ ВРЕМЯ
            <br />
            ДЛЯ ТАНЦЕВ.
          </h1>

          <p className="schedule-intro">
            Выбери день, направление и уровень. Нажми на занятие — поможем уточнить
            условия и записаться.
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
          <div className="schedule-nav">
            {view === "month" && (
              <button
                className="schedule-arrow"
                type="button"
                aria-label="Предыдущий месяц"
                disabled={monthOffset <= 0}
                onClick={() => setMonthOffset((n) => n - 1)}
              >
                ←
              </button>
            )}

            <h2>
              {view === "week" && "НЕДЕЛЯ"}
              {view === "day" &&
                (pickedParts ? (
                  <>
                    {days[activeDay]}{" "}
                    <span>
                      {pickedParts.d} {monthNamesGenitive[pickedParts.m]}
                    </span>
                  </>
                ) : (
                  days[activeDay]
                ))}
              {view === "month" && month && (
                <>
                  {monthNames[month.m]} <span>{month.y}</span>
                </>
              )}
            </h2>

            {view === "month" && (
              <button
                className="schedule-arrow"
                type="button"
                aria-label="Следующий месяц"
                disabled={monthOffset >= MONTHS_AHEAD}
                onClick={() => setMonthOffset((n) => n + 1)}
              >
                →
              </button>
            )}
          </div>

          <div className="schedule-top-legend">
            {(Object.keys(levelInfo) as Level[]).map((level) => (
              <div key={level} className="schedule-top-legend-item">
                <span className={`schedule-legend-dot ${levelInfo[level].className}`} />

                <div>
                  <strong>{levelInfo[level].label}</strong>

                  <small>{levelInfo[level].description}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="schedule-view-switcher">
            {(
              [
                ["month", "МЕСЯЦ"],
                ["week", "НЕДЕЛЯ"],
                ["day", "ДЕНЬ"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                className={view === value ? "is-active" : ""}
                aria-pressed={view === value}
                onClick={() => {
                  setView(value);
                  setPickedDate(null);
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ---------- НЕДЕЛЯ ----------
            На широком экране — сетка 7 дней × часы. На узком семь колонок не
            читаются, поэтому та же неделя показывается списком по дням. */}
        {view === "week" && (
          <>
            <div className="schedule-calendar">
              <div className="schedule-grid-header">
                <div className="schedule-time-head" />

                {days.map((day, index) => (
                  <div
                    key={day}
                    className={`schedule-day-head${index === todayIndex ? " is-today" : ""}`}
                  >
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
                      {dayClasses.map((item) => (
                        <GridCard key={item.id} item={item} dayClasses={dayClasses} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="schedule-days-list">
              {days.map((day, index) => (
                <div key={day} className="schedule-list-day">
                  <h3>
                    {day}
                    {index === todayIndex && <small>сегодня</small>}
                  </h3>

                  {groupedClasses[index].length === 0 ? (
                    <p className="schedule-empty">Занятий нет</p>
                  ) : (
                    groupedClasses[index].map((item) => (
                      <ClassRow key={item.id} item={item} />
                    ))
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* ---------- ДЕНЬ ---------- */}
        {view === "day" && (
          <div className="schedule-day-view">
            <div className="schedule-day-tabs">
              {daysShort.map((label, index) => (
                <button
                  key={label}
                  type="button"
                  className={index === activeDay ? "is-active" : ""}
                  aria-pressed={index === activeDay}
                  onClick={() => {
                    setSelectedDay(index);
                    setPickedDate(null);
                  }}
                >
                  {label}
                  {index === todayIndex && <small>сегодня</small>}
                </button>
              ))}
            </div>

            <div className="schedule-day-rows">
              {pickedEvents.map((event) => (
                <EventRow key={event.date + event.title} event={event} />
              ))}

              {groupedClasses[activeDay].length === 0 ? (
                <p className="schedule-empty">
                  В этот день групповых занятий нет — посмотрите другие дни недели.
                </p>
              ) : (
                groupedClasses[activeDay].map((item) => (
                  <ClassRow key={item.id} item={item} />
                ))
              )}
            </div>
          </div>
        )}

        {/* ---------- МЕСЯЦ ----------
            Занятия повторяются каждую неделю, поэтому в каждой дате — занятия
            её дня недели. На компьютере каждое занятие в клетке — кнопка в MAX;
            на телефоне клетки слишком малы, и нажатие на дату открывает день. */}
        {view === "month" && month && today && (
          <div className="schedule-month">
            <div className="schedule-month-head">
              {daysShort.map((label) => (
                <div key={label}>{label}</div>
              ))}
            </div>

            <div className="schedule-month-grid">
              {Array.from({ length: weekdayOf(month.y, month.m, 1) }, (_, i) => (
                <div key={`blank-${i}`} className="schedule-month-cell is-blank" />
              ))}

              {Array.from(
                { length: new Date(month.y, month.m + 1, 0).getDate() },
                (_, i) => i + 1,
              ).map((date) => {
                const iso = isoOf(month.y, month.m, date);
                const weekday = weekdayOf(month.y, month.m, date);
                const dayClasses = groupedClasses[weekday];
                const dayEvents = upcoming.filter((e) => e.date === iso);
                const past = iso < today;

                return (
                  <div
                    key={iso}
                    className={`schedule-month-cell${past ? " is-past" : ""}${
                      iso === today ? " is-today" : ""
                    }`}
                  >
                    <button
                      type="button"
                      className="schedule-date"
                      onClick={() => openDay(iso)}
                      aria-label={`${days[weekday]}, ${date} ${monthNamesGenitive[month.m]}: занятий ${dayClasses.length}`}
                    >
                      {date}
                      {/* На телефоне вместо списка занятий — точки по уровням. */}
                      <span className="schedule-dots" aria-hidden="true">
                        {dayClasses.map((item) => (
                          <i key={item.id} className={levelInfo[item.level].className} />
                        ))}
                      </span>
                    </button>

                    <div className="schedule-chips">
                      {dayEvents.map((event) => (
                        <SignupLink
                          key={event.title}
                          className="schedule-chip is-event"
                          ariaLabel={`Записаться: ${event.title}`}
                        >
                          ★ {event.title}
                        </SignupLink>
                      ))}

                      {!past &&
                        dayClasses.map((item) => (
                          <SignupLink
                            key={item.id}
                            className={`schedule-chip ${levelInfo[item.level].className}`}
                            ariaLabel={`${signupLabel(item)}, ${date} ${monthNamesGenitive[month.m]}`}
                          >
                            <b>{item.start}</b> {item.title}
                          </SignupLink>
                        ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="schedule-month-note">
              Это регулярное расписание: занятия повторяются каждую неделю. О переносах и
              праздничных днях сообщаем в чате школы.
            </p>
          </div>
        )}

        <div className="schedule-other-note">
          <strong>Дэнсхолл, латина и новые наборы</strong>
          <p>
            Если не видишь нужного направления или удобного времени, напиши школе. Уточним
            актуальные группы и специальные занятия.
          </p>
          <SignupLink className="schedule-other-link">НАПИСАТЬ ШКОЛЕ →</SignupLink>
        </div>
      </section>

      {upcoming.length > 0 && (
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
            {upcoming.map((event) => {
              const { m, d } = parseIso(event.date);
              return (
                <article key={event.date + event.title}>
                  <span>
                    {String(d).padStart(2, "0")} {monthShort[m]}
                  </span>

                  <strong>{event.title}</strong>

                  <small>{event.note}</small>
                </article>
              );
            })}
          </div>
        </section>
      )}

      <section className="schedule-final-cta">
        <div>
          <p>ТВОЙ ПЕРВЫЙ ШАГ</p>

          <h2>
            ТВОЯ ГРУППА
            <br />
            НАЙДЁТСЯ.
          </h2>

          <p className="schedule-final-text">
            Не обязательно выбирать только по названию уровня. Поможем разобраться в
            расписании и подобрать занятие.
          </p>
        </div>

        <SignupLink>ПОДОБРАТЬ ЗАНЯТИЕ →</SignupLink>
      </section>

      <SiteFooter />
    </main>
  );
}
