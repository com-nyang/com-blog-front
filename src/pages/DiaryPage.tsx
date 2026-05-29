import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { DiaryCalendar } from "../components/DiaryCalendar";
import { DiaryPreviewList } from "../components/DiaryPreviewList";
import { getDiaryMonth } from "../lib/api/contentApi";
import { getTodayParts } from "../lib/date";
import { queryKeys } from "../lib/queryKeys";

export function DiaryPage() {
  const today = getTodayParts();
  const [visibleMonth, setVisibleMonth] = useState({
    year: today.year,
    month: today.month,
  });

  const { data: entries = [], isLoading } = useQuery({
    queryKey: queryKeys.diaryMonth(visibleMonth.year, visibleMonth.month),
    queryFn: () => getDiaryMonth(visibleMonth.year, visibleMonth.month),
  });

  return (
    <div className="page">
      <div className="section-heading">
        <p className="eyebrow">Diary</p>
        <h1>일기장</h1>
        <p>
          그날그날 기분에 따라서 쓸수도 있고 안쓸수도 있고..
        </p>
      </div>

      <section className="diary-layout">
        <DiaryCalendar
          year={visibleMonth.year}
          month={visibleMonth.month}
          entries={entries}
          onMonthChange={(year, month) => setVisibleMonth({ year, month })}
        />

        <aside className="side-panel diary-side">
          <div className="section-heading compact">
            <p className="eyebrow">Entries</p>
            <h2>이 달의 기록</h2>
          </div>
          {isLoading ? (
            <p className="muted">일기를 불러오는 중입니다.</p>
          ) : (
            <DiaryPreviewList entries={entries} />
          )}
        </aside>
      </section>
    </div>
  );
}
