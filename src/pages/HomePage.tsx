import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  getPosts,
  getRecentDiaryEntries,
  getTags,
} from "../lib/api/contentApi";
import { queryKeys } from "../lib/queryKeys";
import { PostCard } from "../components/PostCard";
import { TagPill } from "../components/TagPill";
import { DiaryPreviewList } from "../components/DiaryPreviewList";

export function HomePage() {
  const postsQuery = useQuery({ queryKey: queryKeys.posts, queryFn: getPosts });
  const tagsQuery = useQuery({ queryKey: queryKeys.tags, queryFn: getTags });
  const diaryQuery = useQuery({
    queryKey: queryKeys.recentDiary,
    queryFn: () => getRecentDiaryEntries(3),
  });

  const posts = postsQuery.data ?? [];
  const tags = tagsQuery.data ?? [];
  const diaryEntries = diaryQuery.data ?? [];

  return (
    <div className="page">
      <section className="hero-section">
        <p className="eyebrow">Frontend Journal</p>
        <h1>기술 글과 개발 일기를 한곳에 쌓는 개인 블로그</h1>
        <p>
          정리된 아티클은 글로, 하루 단위의 개발 맥락은 기술 일기로 남깁니다.
          프론트는 Vite와 React로 만들고 Rust 백엔드 API와 분리합니다.
        </p>
        <div className="hero-actions">
          <Link to="/posts" className="primary-button">
            글 보기
          </Link>
          <Link to="/diary" className="secondary-button">
            일기 달력
          </Link>
        </div>
      </section>

      <section className="section-grid">
        <div>
          <div className="section-heading">
            <p className="eyebrow">Latest Posts</p>
            <h2>최근 글</h2>
          </div>
          <div className="post-list">
            {posts.slice(0, 3).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>

        <aside className="side-panel">
          <div>
            <div className="section-heading compact">
              <p className="eyebrow">Tags</p>
              <h2>주요 태그</h2>
            </div>
            <div className="tag-cloud">
              {tags.map((tag) => (
                <TagPill key={tag.name} tag={tag.name} count={tag.count} />
              ))}
            </div>
          </div>

          <div>
            <div className="section-heading compact">
              <p className="eyebrow">Diary</p>
              <h2>최근 기술 일기</h2>
            </div>
            <DiaryPreviewList entries={diaryEntries} />
          </div>
        </aside>
      </section>
    </div>
  );
}
