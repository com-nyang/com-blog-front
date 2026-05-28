# 콘텐츠 작성 규칙

## 글 형식

콘텐츠의 저장과 발행은 Rust 백엔드가 담당한다. 프론트엔드는 백엔드 API가 내려주는 글 데이터를 렌더링한다.

프론트가 기대하는 글 본문 포맷은 HTML 또는 Markdown 중 하나로 백엔드 API 계약에서 결정한다. MVP에서는 백엔드가 Markdown을 HTML로 변환해 내려주는 방식을 우선 고려한다. 프론트는 보안 처리된 HTML을 렌더링하고, 코드 블록과 이미지 스타일을 담당한다.

## 콘텐츠 모델

모든 글 응답은 다음 필드를 가진다.

```ts
type Post = {
  slug: string;
  title: string;
  description: string;
  content: string;
  contentFormat: "html" | "markdown";
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    profileImageUrl?: string;
  };
  coverImageUrl?: string;
  readingTimeMinutes?: number;
};
```

## 필수 필드

| 필드 | 설명 |
| --- | --- |
| slug | URL에 사용할 고유 식별자 |
| title | 글 제목 |
| description | 목록과 SEO에 사용할 요약 |
| content | 본문 |
| contentFormat | 본문 형식 |
| publishedAt | 발행일 |
| category | 대표 분류 |
| tags | 탐색용 태그 목록 |
| author | 작성자 정보 |

## 글 구조

권장 구조:

```md
# 제목

문제 상황 또는 글의 목적

## 배경

## 접근

## 구현

## 배운 점

## 마무리
```

항상 같은 구조를 강제하지는 않는다. 다만 기술 글은 문제, 선택지, 결정, 결과가 드러나야 한다.

## 제목 규칙

- 구체적으로 쓴다.
- 기술명만 나열하지 않는다.
- 독자가 얻을 수 있는 내용을 드러낸다.

좋은 예:

```txt
Vite와 Rust API로 기술 블로그 구조 잡기
React 19 마이그레이션 중 타입 충돌을 줄이는 방법
```

피할 예:

```txt
Vite 정리
React 공부
오늘 한 것
```

## 태그 규칙

- 태그는 2개 이상 5개 이하를 권장한다.
- 같은 의미의 태그를 중복해서 만들지 않는다.
- 대소문자 표기를 통일한다.

예:

```txt
React
Vite
TypeScript
CSS
Testing
Performance
Architecture
Retrospective
```

## 이미지 규칙

- 글에 필요한 이미지만 사용한다.
- 이미지에는 대체 텍스트를 작성한다.
- 설명이 필요한 이미지는 캡션을 둔다.
- 큰 이미지는 최적화된 포맷을 사용한다.

## 코드 블록 규칙

- 코드 블록에는 언어를 명시한다.
- 긴 코드는 핵심 부분만 보여준다.
- 복사해서 실행 가능한 코드는 의존성이나 실행 조건을 함께 적는다.

```tsx
export function PostTitle({ title }: { title: string }) {
  return <h1>{title}</h1>;
}
```

## 발행 전 체크리스트

- 제목이 구체적인가
- 설명이 검색 결과에 보여도 자연스러운가
- 태그가 기존 체계와 맞는가
- 코드가 동작하는가
- 이미지 대체 텍스트가 있는가
- 모바일에서 읽기 좋은 길이인가
