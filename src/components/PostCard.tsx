import { Link } from "@tanstack/react-router";
import type { PostSummary } from "../types/content";
import { formatKoreanDate } from "../lib/date";

type PostCardProps = {
  post: PostSummary;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <div className="meta-row">
        <time dateTime={post.publishedAt}>{formatKoreanDate(post.publishedAt)}</time>
        <span>{post.category}</span>
        {post.readingTimeMinutes ? <span>{post.readingTimeMinutes}분</span> : null}
      </div>
      <h2>
        <Link to="/posts/$slug" params={{ slug: post.slug }}>
          {post.title}
        </Link>
      </h2>
      <p>{post.description}</p>
      <div className="tag-row">
        {post.tags.map((tag) => (
          <Link key={tag} to="/tags/$tag" params={{ tag }} className="tag">
            {tag}
          </Link>
        ))}
      </div>
    </article>
  );
}
