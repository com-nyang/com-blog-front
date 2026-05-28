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
        <p className="eyebrow">I want to do so many things</p>
        <h1
          className="hero-title"
          aria-label="재미..재미..오직 재미.."
        >
          <span aria-hidden="true">재미..재미..오직 재미..</span>
        </h1>
        <p>
          자기만족을 위한 쓰잘데기 없는 기술 블로그
        </p>
        <div className="hero-actions">
          <Link to="/posts" className="primary-button">
            글
          </Link>
          <Link to="/diary" className="secondary-button">
            일기
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
              <h2>남의 일기는 보는게 아닙니다.</h2>
            </div>
            <DiaryPreviewList entries={diaryEntries} />
          </div>
        </aside>
      </section>
    </div>
  );
}
