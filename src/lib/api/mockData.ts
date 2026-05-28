import type { DiaryEntry, Post } from "../../types/content";

export const posts: Post[] = [
  {
    slug: "vite-rust-api-blog-architecture",
    title: "Vite와 Rust API로 기술 블로그 구조 잡기",
    description:
      "프론트는 렌더링과 탐색에 집중하고, Rust 백엔드는 콘텐츠와 검색을 담당하는 블로그 구조를 정리합니다.",
    contentFormat: "html",
    publishedAt: "2026-05-28",
    category: "Architecture",
    tags: ["Frontend", "Vite", "Rust", "Architecture"],
    author: { name: "com-nyang" },
    readingTimeMinutes: 6,
    content: `
      <p>이 블로그는 프론트엔드와 백엔드를 명확히 분리하는 방향으로 시작합니다. 프론트는 Vite, React, TanStack Router, TanStack Query로 구성하고 Rust 백엔드 API에서 콘텐츠를 받아옵니다.</p>
      <h2>역할 분리</h2>
      <p>프론트는 화면, 라우팅, 서버 상태 캐싱, 읽기 경험을 담당합니다. 백엔드는 글 저장, 검색, RSS, sitemap, 콘텐츠 변환을 담당합니다.</p>
      <pre><code>GET /api/posts
GET /api/posts/:slug
GET /api/diary?year=&amp;month=</code></pre>
      <h2>첫 구현 범위</h2>
      <p>홈, 글 상세, 태그 목록, 날짜별 기술 일기 달력을 먼저 구현하고 이후 검색과 프로젝트 페이지를 확장합니다.</p>
    `,
  },
  {
    slug: "technical-diary-as-learning-log",
    title: "기술 일기를 학습 로그로 운영하기",
    description:
      "완성된 글과 하루 단위 개발 기록을 분리해 기술 블로그의 기록 밀도를 높이는 방법입니다.",
    contentFormat: "html",
    publishedAt: "2026-05-29",
    category: "Retrospective",
    tags: ["Diary", "Learning", "Frontend"],
    author: { name: "com-nyang" },
    readingTimeMinutes: 4,
    content: `
      <p>기술 글은 완성된 아티클이어야 한다는 부담이 있습니다. 반대로 일기는 하루의 개발 맥락을 짧게 남기면 됩니다.</p>
      <h2>분리 기준</h2>
      <p>글은 문제와 해결을 정리한 결과물이고, 일기는 과정과 단서를 남기는 기록입니다.</p>
      <blockquote>오늘 막힌 지점을 잘 적어두면 다음 글의 재료가 됩니다.</blockquote>
    `,
  },
  {
    slug: "tanstack-query-cache-key",
    title: "TanStack Query 캐시 키를 콘텐츠 도메인에 맞추기",
    description:
      "글, 태그, 일기 데이터를 Rust API에서 받아올 때 캐시 키를 안정적으로 나누는 기준입니다.",
    contentFormat: "html",
    publishedAt: "2026-05-30",
    category: "Frontend",
    tags: ["React", "TanStack Query", "API"],
    author: { name: "com-nyang" },
    readingTimeMinutes: 5,
    content: `
      <p>서버 상태는 화면 상태와 다르게 API 계약을 기준으로 설계하는 편이 좋습니다.</p>
      <pre><code>["posts"]
["post", slug]
["diary", year, month]
["diary-entry", date]</code></pre>
      <p>이렇게 나누면 월별 일기 목록과 날짜별 상세가 서로의 캐시를 침범하지 않습니다.</p>
    `,
  },
];

export const diaryEntries: DiaryEntry[] = [
  {
    date: "2026-05-28",
    title: "프론트와 Rust 백엔드의 책임을 나눴다",
    summary:
      "Next.js 풀스택 전제를 버리고 Vite 기반 프론트 앱으로 방향을 정리했다.",
    contentFormat: "html",
    tags: ["Architecture", "Rust", "Vite"],
    mood: "learned",
    relatedPostSlugs: ["vite-rust-api-blog-architecture"],
    content: `
      <p>백엔드를 Rust로 만들 계획이라 프론트는 서버 책임을 내려놓는 게 맞다고 판단했다.</p>
      <h2>한 일</h2>
      <p>라우팅과 서버 상태 관리는 프론트 라이브러리로 분리하고, 콘텐츠는 Rust API에서 받는 구조로 문서화했다.</p>
      <h2>다음 액션</h2>
      <p>API mock adapter를 먼저 만들고 실제 Rust 서버가 생기면 fetch 구현만 교체한다.</p>
    `,
  },
  {
    date: "2026-05-29",
    title: "기술 일기 달력 UX를 잡았다",
    summary:
      "일기가 있는 날짜를 작은 점으로 표시하고, 선택한 날짜의 요약을 아래에 보여주는 방향으로 정했다.",
    contentFormat: "html",
    tags: ["Diary", "UX", "Calendar"],
    mood: "shipped",
    relatedPostSlugs: ["technical-diary-as-learning-log"],
    content: `
      <p>일기 기능은 감정 기록보다 개발 흐름을 복원하는 데 목적을 둔다.</p>
      <h2>한 일</h2>
      <p>월 단위 달력, 날짜별 상세, 최근 일기 노출 기준을 정했다.</p>
      <h2>배운 점</h2>
      <p>기술 블로그에서는 일기 UI도 과하게 감성적으로 가지 않는 편이 전체 톤과 잘 맞는다.</p>
    `,
  },
  {
    date: "2026-05-30",
    title: "캐시 키를 도메인 단위로 나눴다",
    summary:
      "posts, post, diary, diary-entry 키를 분리해서 월별 목록과 상세 캐시를 안정화했다.",
    contentFormat: "html",
    tags: ["TanStack Query", "API"],
    mood: "smooth",
    relatedPostSlugs: ["tanstack-query-cache-key"],
    content: `
      <p>일기 달력은 월별 목록을 자주 보고, 상세는 날짜별로 들어간다. 이 둘은 캐시 수명과 무효화 단위가 다르다.</p>
      <h2>한 일</h2>
      <p>query key를 API endpoint와 화면 책임에 맞춰 분리했다.</p>
      <h2>다음 액션</h2>
      <p>검색 API가 붙으면 search query key도 별도로 설계한다.</p>
    `,
  },
];
