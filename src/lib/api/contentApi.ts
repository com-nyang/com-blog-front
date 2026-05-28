import type { DiaryEntry, Post, PostSummary } from "../../types/content";
import { diaryEntries, posts } from "./mockData";

const wait = (ms = 120) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getPosts(): Promise<PostSummary[]> {
  await wait();
  return posts
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      publishedAt: post.publishedAt,
      category: post.category,
      tags: post.tags,
      author: post.author,
      readingTimeMinutes: post.readingTimeMinutes,
    }))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getPost(slug: string): Promise<Post> {
  await wait();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    throw new Error("Post not found");
  }

  return post;
}

export async function getTags(): Promise<Array<{ name: string; count: number }>> {
  await wait();
  const counts = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export async function getPostsByTag(tag: string): Promise<PostSummary[]> {
  const allPosts = await getPosts();
  return allPosts.filter((post) =>
    post.tags.some((item) => item.toLowerCase() === tag.toLowerCase()),
  );
}

export async function getDiaryMonth(
  year: number,
  month: number,
): Promise<DiaryEntry[]> {
  await wait();
  const prefix = `${year}-${`${month}`.padStart(2, "0")}`;
  return diaryEntries
    .filter((entry) => entry.date.startsWith(prefix))
    .sort((a, b) => a.date.localeCompare(b.date));
}

export async function getDiaryEntry(date: string): Promise<DiaryEntry> {
  await wait();
  const entry = diaryEntries.find((item) => item.date === date);

  if (!entry) {
    throw new Error("Diary entry not found");
  }

  return entry;
}

export async function getRecentDiaryEntries(limit = 3): Promise<DiaryEntry[]> {
  await wait();
  return [...diaryEntries]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}
