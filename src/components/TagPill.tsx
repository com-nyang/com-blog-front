import { Link } from "@tanstack/react-router";

type TagPillProps = {
  tag: string;
  count?: number;
};

export function TagPill({ tag, count }: TagPillProps) {
  return (
    <Link to="/tags/$tag" params={{ tag }} className="tag-pill">
      <span>{tag}</span>
      {typeof count === "number" ? <strong>{count}</strong> : null}
    </Link>
  );
}
