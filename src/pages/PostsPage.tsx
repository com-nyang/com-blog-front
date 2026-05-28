import { useQuery } from "@tanstack/react-query";
import { PostCard } from "../components/PostCard";
import { getPosts } from "../lib/api/contentApi";
import { queryKeys } from "../lib/queryKeys";

export function PostsPage() {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: queryKeys.posts,
    queryFn: getPosts,
  });

  return (
    <div className="page narrow">
      <div className="section-heading">
        <p className="eyebrow">Posts</p>
        <h1>기술 글</h1>
        <p>언젠가 도움이 될만한 글 모음집</p>
      </div>

      {isLoading ? <p className="muted">글을 불러오는 중입니다.</p> : null}

      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
