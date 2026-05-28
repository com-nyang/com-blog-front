import { useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { PostCard } from "../components/PostCard";
import { getPostsByTag } from "../lib/api/contentApi";
import { queryKeys } from "../lib/queryKeys";

export function TagDetailPage() {
  const { tag } = useParams({ from: "/tags/$tag" });
  const { data: posts = [] } = useQuery({
    queryKey: queryKeys.postsByTag(tag),
    queryFn: () => getPostsByTag(tag),
  });

  return (
    <div className="page narrow">
      <div className="section-heading">
        <p className="eyebrow">Tag</p>
        <h1>{tag}</h1>
        <p>{posts.length}개의 글이 있습니다.</p>
      </div>

      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
