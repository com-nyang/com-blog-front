import { Link, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getDiaryEntry } from "../lib/api/contentApi";
import { formatKoreanDate } from "../lib/date";
import { queryKeys } from "../lib/queryKeys";

const moodLabels = {
  smooth: "순조로움",
  blocked: "막힘",
  learned: "배움",
  shipped: "완료",
};

export function DiaryDetailPage() {
  const { date } = useParams({ from: "/diary/$date" });
  const { data: entry, isLoading, isError } = useQuery({
    queryKey: queryKeys.diaryEntry(date),
    queryFn: () => getDiaryEntry(date),
  });

  if (isLoading) {
    return <div className="page narrow">일기를 불러오는 중입니다.</div>;
  }

  if (isError || !entry) {
    return <div className="page narrow">일기를 찾을 수 없습니다.</div>;
  }

  return (
    <article className="page article-page">
      <header className="article-header diary-detail-header">
        <div className="meta-row">
          <time dateTime={entry.date}>{formatKoreanDate(entry.date)}</time>
          {entry.mood ? <span>{moodLabels[entry.mood]}</span> : null}
        </div>
        <h1>{entry.title}</h1>
        <p>{entry.summary}</p>
        <div className="tag-row">
          {entry.tags.map((tag) => (
            <Link key={tag} to="/tags/$tag" params={{ tag }} className="tag">
              {tag}
            </Link>
          ))}
        </div>
      </header>

      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: entry.content }}
      />
    </article>
  );
}
