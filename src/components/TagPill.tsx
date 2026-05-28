import { Link } from "@tanstack/react-router";

type TagPillProps = {
  tag: string;
  count?: number;
};

export function TagPill({ tag, count }: TagPillProps) {
  return (
    <Link to="/tags/$tag" params={{ tag }} className="tag-pill">
      {tag}
      {typeof count === "number" ? <span>({count})</span> : null}
    </Link>
  );
}
