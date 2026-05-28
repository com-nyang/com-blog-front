export function AboutPage() {
  return (
    <div className="page narrow">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h1>소개</h1>
        <p>
          프론트엔드와 Rust 백엔드를 함께 다루며, 구현 과정에서 배운 내용을
          글과 일기로 남깁니다.
        </p>
      </div>
      <section className="plain-section">
        <h2>관심 분야</h2>
        <p>
          React, TypeScript, 성능, 프론트엔드 아키텍처, Rust API 설계에 관심이
          있습니다.
        </p>
      </section>
    </div>
  );
}
