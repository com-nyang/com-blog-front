# 개인 기술 블로그 프론트엔드

개인 기술 블로그의 프론트엔드 프로젝트입니다. 우아한형제들 기술블로그처럼 글, 태그, 카테고리, 작성자 정보가 잘 드러나는 콘텐츠 중심 블로그를 목표로 합니다.

## 목표

- 기술 글을 Markdown/MDX로 쉽게 작성한다.
- 최신 글, 태그, 카테고리 중심으로 탐색할 수 있다.
- 본문 가독성과 코드 블록 표현을 우선한다.
- 개인 포트폴리오, 프로젝트 소개, 실험적인 프론트엔드 데모까지 확장 가능하게 만든다.
- 정적 생성 중심으로 빠르게 배포하고 운영 비용을 낮춘다.

## 권장 기술 스택

| 영역 | 선택 |
| --- | --- |
| Framework | Next.js App Router |
| Language | TypeScript |
| Content | MDX |
| Styling | Tailwind CSS |
| UI Primitive | Radix UI 또는 shadcn/ui |
| Code Highlight | Shiki |
| Search | Pagefind 또는 Fuse.js |
| Feed | RSS / sitemap 자동 생성 |
| Deploy | Vercel |
| Package Manager | pnpm |

## 왜 Next.js인가

개인 블로그만 놓고 보면 Astro도 좋은 선택입니다. 하지만 이 프로젝트는 프론트엔드 블로그이므로, 글 안에 React 컴포넌트 기반 데모를 넣거나 프로젝트 쇼케이스, 검색, 동적 OG 이미지, 인터랙티브 UI를 확장할 가능성이 큽니다.

따라서 기본 선택은 `Next.js + MDX + Tailwind CSS`로 가져갑니다.

## 문서

- [기술 스택 결정](./docs/tech-stack.md)
- [정보 구조와 화면 방향](./docs/information-architecture.md)
- [콘텐츠 작성 규칙](./docs/content-guidelines.md)

## 예상 디렉터리 구조

```txt
src/
  app/
    page.tsx
    posts/[slug]/page.tsx
    tags/[tag]/page.tsx
    about/page.tsx
    projects/page.tsx
  components/
    article/
    layout/
    post/
    ui/
  content/
    posts/
  lib/
    content/
    metadata/
```

## 초기 구현 순서

1. Next.js 프로젝트를 TypeScript, Tailwind CSS, pnpm 기준으로 생성한다.
2. MDX 글 로딩 파이프라인을 만든다.
3. 홈, 글 상세, 태그 목록 페이지를 먼저 구현한다.
4. 코드 블록, 본문 타이포그래피, SEO 메타데이터를 정리한다.
5. RSS, sitemap, 검색을 추가한다.
