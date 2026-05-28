import { Link, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../lib/api/contentApi";
import { formatKoreanDate } from "../lib/date";
import { queryKeys } from "../lib/queryKeys";

export function PostDetailPage() {
  const { slug } = useParams({ from: "/posts/$slug" });
  const { data: post, isLoading, isError } = useQuery({
    queryKey: queryKeys.post(slug),
    queryFn: () => getPost(slug),
  });

  if (isLoading) {
    return <div className="page narrow">글을 불러오는 중입니다.</div>;
  }

  if (isError || !post) {
    return <div className="page narrow">글을 찾을 수 없습니다.</div>;
  }

  return (
    <article className="page article-page">
      <header className="article-header">
        <div className="meta-row">
          <time dateTime={post.publishedAt}>{formatKoreanDate(post.publishedAt)}</time>
          <span>{post.category}</span>
          {post.readingTimeMinutes ? <span>{post.readingTimeMinutes}분</span> : null}
        </div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <div className="tag-row">
          {post.tags.map((tag) => (
            <Link key={tag} to="/tags/$tag" params={{ tag }} className="tag">
              {tag}
            </Link>
          ))}
        </div>
      </header>

      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
