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
        <h1>기술 일기</h1>
        <p>
          하루 단위로 남기는 개발 기록입니다. 완성된 글이 되기 전의 문제,
          단서, 배운 점을 달력으로 모읍니다.
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
