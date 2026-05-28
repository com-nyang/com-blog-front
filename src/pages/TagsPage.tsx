import { useQuery } from "@tanstack/react-query";
import { getTags } from "../lib/api/contentApi";
import { queryKeys } from "../lib/queryKeys";
import { TagPill } from "../components/TagPill";

export function TagsPage() {
  const { data: tags = [] } = useQuery({
    queryKey: queryKeys.tags,
    queryFn: getTags,
  });

  return (
    <div className="page narrow">
      <div className="section-heading">
        <p className="eyebrow">Tags</p>
        <h1>태그</h1>
        <p>관심 주제별로 글을 빠르게 찾을 수 있게 합니다.</p>
      </div>

      <div className="tag-cloud large">
        {tags.map((tag) => (
          <TagPill key={tag.name} tag={tag.name} count={tag.count} />
        ))}
      </div>
    </div>
  );
}
