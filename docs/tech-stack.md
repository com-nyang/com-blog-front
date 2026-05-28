# 기술 스택 결정

## 결론

이 블로그의 프론트엔드는 `Vite + React + TypeScript + TanStack Router + TanStack Query + Tailwind CSS`를 기본 스택으로 사용한다.

백엔드는 Rust로 별도 구현한다. 따라서 프론트엔드는 서버 기능을 가진 메타 프레임워크가 아니라 UI, 라우팅, 서버 상태 관리, 렌더링에 집중하는 순수 프론트엔드 앱으로 구성한다.

개인 기술 블로그의 핵심은 읽기 경험, 탐색 경험, 검색 가능성, 유지보수성이다. 콘텐츠 저장, 발행, 검색, RSS, sitemap 같은 서버 책임은 Rust 백엔드에서 다루고, 프론트는 그 데이터를 잘 보여주는 역할에 집중한다.

## 스택 상세

### Vite

- 프론트엔드 앱 개발 경험이 빠르고 단순하다.
- React, TypeScript, Tailwind CSS 조합을 가볍게 구성할 수 있다.
- Rust 백엔드와 독립적으로 빌드하고 배포하기 쉽다.

### React

- 글 목록, 태그 필터, 검색, 프로젝트 쇼케이스 같은 UI를 컴포넌트 단위로 구성하기 좋다.
- 프론트엔드 데모나 인터랙티브 예제를 블로그 안에 넣기 쉽다.
- 생태계가 넓고 유지보수 자료가 많다.

### TypeScript

- 백엔드 API 응답 타입을 명확하게 관리한다.
- 글 메타데이터, 태그, 작성자, 카테고리 모델을 타입으로 관리한다.
- API 연동 코드와 UI props의 안정성을 높인다.

### TanStack Router

- 프론트 전용 라우팅을 타입 안전하게 구성할 수 있다.
- 홈, 글 상세, 태그, About, Projects 같은 화면 구조와 잘 맞는다.
- loader와 route context를 활용해 데이터 패칭 경계를 명확히 둘 수 있다.

### TanStack Query

- Rust 백엔드 API에서 받아오는 글 목록, 글 상세, 태그, 검색 결과를 캐싱한다.
- 로딩, 에러, 재시도, refetch 처리를 표준화한다.
- 서버 상태와 클라이언트 UI 상태를 분리한다.

### Rust 백엔드 API

프론트는 콘텐츠를 파일에서 직접 읽지 않는다. Rust 백엔드가 다음 API를 제공한다고 가정한다.

```txt
GET /api/posts
GET /api/posts/:slug
GET /api/tags
GET /api/tags/:tag/posts
GET /api/search?q=
```

### Tailwind CSS

- 디자인 토큰을 빠르게 정리할 수 있다.
- 본문 타이포그래피, 태그, 리스트, 반응형 레이아웃을 일관되게 구현하기 쉽다.
- 별도 디자인 시스템이 없는 초기 개인 프로젝트에 적합하다.

### Radix UI 또는 shadcn/ui

- 메뉴, 다이얼로그, 탭, 토글 같은 접근성 있는 UI를 빠르게 구성한다.
- 단, 블로그는 콘텐츠 중심이므로 UI 컴포넌트 의존성을 과하게 늘리지 않는다.

### Shiki

- 코드 하이라이팅 품질이 좋다.
- 다크/라이트 테마를 안정적으로 지원한다.
- 기술 글의 코드 가독성을 높인다.

### 검색

- 기본은 Rust 백엔드 검색 API를 사용한다.
- MVP에서 백엔드 검색이 늦어지면 Fuse.js로 클라이언트 검색을 임시 구성할 수 있다.

### 배포

- 프론트는 정적 파일로 빌드해서 배포한다.
- Cloudflare Pages, Netlify, Vercel 중 하나를 선택한다.
- 백엔드는 별도 Rust 서버로 배포한다.

## 대안 검토

### Vue

우아한형제들 기술블로그의 공개 HTML에는 `{{item.name}}` 같은 Vue/Mustache 스타일 바인딩 흔적이 보인다. 또한 게시글과 이미지 URL에서 `wp-content/uploads` 경로가 확인되어 WordPress 계열 CMS와 클라이언트 렌더링을 조합한 구조로 추정된다.

Vue로 구현해도 이 프로젝트 목적에는 잘 맞는다. 다만 작성자가 React 기반 프론트엔드 데모와 생태계를 활용할 가능성이 크다면 React를 기본값으로 둔다.

### Next.js

Next.js는 좋은 선택지지만 이 프로젝트에서는 기본값으로 두지 않는다. 백엔드를 Rust로 가져가면 Next.js의 서버 기능, API route, 서버 컴포넌트, 서버 액션이 핵심 장점으로 작동하지 않는다.

### Astro

순수 콘텐츠 블로그라면 Astro도 좋은 선택이다. 하지만 이 프로젝트는 Rust 백엔드 API와 연동되는 프론트 앱으로 보고, 라우팅과 서버 상태 관리를 명확히 가져가기 위해 Vite + React를 선택한다.

### Headless CMS

초기에는 별도 Headless CMS를 사용하지 않는다. 콘텐츠 저장과 발행은 Rust 백엔드 설계에서 결정한다.

나중에 비개발자 편집자, 예약 발행, 관리자 화면이 필요해지면 Sanity, Contentful, Strapi 등을 검토한다.

## 운영 기준

- 프론트와 백엔드는 독립 배포한다.
- 프론트는 API 계약을 타입으로 관리한다.
- 모든 글은 title, description, date, tags, category를 가진 응답 모델을 사용한다.
- SEO에 필요한 canonical URL, OG 이미지, sitemap, RSS는 Rust 백엔드와 책임 경계를 정한다.
