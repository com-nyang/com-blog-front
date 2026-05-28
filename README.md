# 개인 기술 블로그 프론트엔드

개인 기술 블로그의 프론트엔드 프로젝트입니다. 우아한형제들 기술블로그처럼 글, 태그, 카테고리, 작성자 정보가 잘 드러나는 콘텐츠 중심 블로그를 목표로 합니다.

## 목표

- Rust 백엔드 API와 분리된 프론트엔드 앱으로 만든다.
- 최신 글, 태그, 카테고리 중심으로 탐색할 수 있다.
- 날짜별 기술 일기를 달력 중심으로 탐색할 수 있다.
- 본문 가독성과 코드 블록 표현을 우선한다.
- 개인 포트폴리오, 프로젝트 소개, 실험적인 프론트엔드 데모까지 확장 가능하게 만든다.
- 프론트는 UI, 라우팅, 상태 관리, 렌더링에 집중한다.

## 권장 기술 스택

| 영역 | 선택 |
| --- | --- |
| Build Tool | Vite |
| Framework | React |
| Language | TypeScript |
| Routing | TanStack Router |
| Server State | TanStack Query |
| Content Source | Rust 백엔드 API |
| Styling | Tailwind CSS |
| UI Primitive | Radix UI 또는 shadcn/ui |
| Code Highlight | Shiki |
| Search | 백엔드 검색 API 또는 Fuse.js |
| Deploy | Cloudflare Pages, Netlify, Vercel 중 선택 |
| Package Manager | pnpm |

## 왜 Vite + React인가

이 프로젝트는 백엔드를 Rust로 별도 구현한다. 따라서 Next.js처럼 서버 기능까지 포함한 메타 프레임워크를 기본값으로 두지 않는다.

프론트는 `Vite + React + TypeScript`로 구성하고, 백엔드 API에서 글 목록, 글 상세, 태그, 검색 데이터를 받아 렌더링한다. 이 구조가 역할 분리가 명확하고 Rust 백엔드와도 잘 맞는다.

## 문서

- [기술 스택 결정](./docs/tech-stack.md)
- [정보 구조와 화면 방향](./docs/information-architecture.md)
- [콘텐츠 작성 규칙](./docs/content-guidelines.md)

## 예상 디렉터리 구조

```txt
src/
  routes/
    index.tsx
    posts.$slug.tsx
    tags.$tag.tsx
    diary.index.tsx
    diary.$date.tsx
    about.tsx
    projects.tsx
  components/
    article/
    diary/
    layout/
    post/
    ui/
  lib/
    api/
    metadata/
    query/
```

## 초기 구현 순서

1. Vite 프로젝트를 React, TypeScript, Tailwind CSS, pnpm 기준으로 생성한다.
2. TanStack Router와 TanStack Query를 설정한다.
3. 홈, 글 상세, 태그 목록 페이지를 먼저 구현한다.
4. Rust 백엔드 API 계약에 맞춰 글 목록, 글 상세, 태그 데이터를 연결한다.
5. 기술 일기 달력과 날짜별 일기 상세를 추가한다.
6. 코드 블록, 본문 타이포그래피, 검색 UI를 정리한다.
