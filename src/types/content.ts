export type ContentFormat = "html" | "markdown";

export type Author = {
  name: string;
  profileImageUrl?: string;
};

export type PostSummary = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  tags: string[];
  author: Author;
  readingTimeMinutes?: number;
};

export type Post = PostSummary & {
  content: string;
  contentFormat: ContentFormat;
  updatedAt?: string;
  coverImageUrl?: string;
};

export type DiaryMood = "smooth" | "blocked" | "learned" | "shipped";

export type DiaryEntry = {
  date: string;
  title: string;
  summary: string;
  content: string;
  contentFormat: ContentFormat;
  tags: string[];
  mood?: DiaryMood;
  relatedPostSlugs?: string[];
  relatedProjectSlugs?: string[];
};
