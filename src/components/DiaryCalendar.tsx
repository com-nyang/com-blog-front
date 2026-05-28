import { Link } from "@tanstack/react-router";
import type { DiaryEntry } from "../types/content";
import { formatMonthLabel, getTodayParts, toDateKey } from "../lib/date";

type DiaryCalendarProps = {
  year: number;
  month: number;
  entries: DiaryEntry[];
  onMonthChange: (year: number, month: number) => void;
};

const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

function getCalendarDays(year: number, month: number) {
  const first = new Date(year, month - 1, 1);
  const last = new Date(year, month, 0);
  const days: Array<Date | null> = [];

  for (let i = 0; i < first.getDay(); i += 1) {
    days.push(null);
  }

  for (let day = 1; day <= last.getDate(); day += 1) {
    days.push(new Date(year, month - 1, day));
  }

  while (days.length % 7 !== 0) {
    days.push(null);
  }

  return days;
}

function moveMonth(year: number, month: number, amount: number) {
  const next = new Date(year, month - 1 + amount, 1);
  return {
    year: next.getFullYear(),
    month: next.getMonth() + 1,
  };
}

export function DiaryCalendar({
  year,
  month,
  entries,
  onMonthChange,
}: DiaryCalendarProps) {
  const today = getTodayParts();
  const entryMap = new Map(entries.map((entry) => [entry.date, entry]));
  const days = getCalendarDays(year, month);

  const handleMove = (amount: number) => {
    const next = moveMonth(year, month, amount);
    onMonthChange(next.year, next.month);
  };

  return (
    <section className="calendar-panel" aria-label="기술 일기 달력">
      <div className="calendar-toolbar">
        <button type="button" className="icon-button" onClick={() => handleMove(-1)}>
          이전
        </button>
        <h2>{formatMonthLabel(year, month)}</h2>
        <div className="calendar-actions">
          <button
            type="button"
            className="ghost-button"
            onClick={() => onMonthChange(today.year, today.month)}
          >
            오늘
          </button>
          <button type="button" className="icon-button" onClick={() => handleMove(1)}>
            다음
          </button>
        </div>
      </div>

      <div className="calendar-grid calendar-weekdays">
        {weekdays.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="calendar-grid">
        {days.map((date, index) => {
          if (!date) {
            return <span key={`empty-${index}`} className="calendar-day is-empty" />;
          }

          const dateKey = toDateKey(date);
          const entry = entryMap.get(dateKey);
          const isToday = dateKey === today.date;

          if (entry) {
            return (
              <Link
                key={dateKey}
                to="/diary/$date"
                params={{ date: dateKey }}
                className={`calendar-day has-entry${isToday ? " is-today" : ""}`}
                title={entry.title}
              >
                <span>{date.getDate()}</span>
                <i aria-hidden="true" />
              </Link>
            );
          }

          return (
            <span
              key={dateKey}
              className={`calendar-day${isToday ? " is-today" : ""}`}
            >
              {date.getDate()}
            </span>
          );
        })}
      </div>
    </section>
  );
}
