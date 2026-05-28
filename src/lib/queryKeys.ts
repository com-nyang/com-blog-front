export const queryKeys = {
  posts: ["posts"] as const,
  post: (slug: string) => ["post", slug] as const,
  tags: ["tags"] as const,
  postsByTag: (tag: string) => ["posts", "tag", tag] as const,
  diaryMonth: (year: number, month: number) =>
    ["diary", year, month] as const,
  diaryEntry: (date: string) => ["diary-entry", date] as const,
  recentDiary: ["diary", "recent"] as const,
};
