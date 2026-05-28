import { Link } from "@tanstack/react-router";
import type { DiaryEntry } from "../types/content";
import { formatKoreanDate } from "../lib/date";

type DiaryPreviewListProps = {
  entries: DiaryEntry[];
};

export function DiaryPreviewList({ entries }: DiaryPreviewListProps) {
  if (entries.length === 0) {
    return <p className="muted">이 달에는 아직 작성한 기술 일기가 없습니다.</p>;
  }

  return (
    <div className="diary-preview-list">
      {entries.map((entry) => (
        <Link
          key={entry.date}
          to="/diary/$date"
          params={{ date: entry.date }}
          className="diary-preview"
        >
          <time dateTime={entry.date}>{formatKoreanDate(entry.date)}</time>
          <strong>{entry.title}</strong>
          <span>{entry.summary}</span>
        </Link>
      ))}
    </div>
  );
}
