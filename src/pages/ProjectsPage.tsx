export function ProjectsPage() {
  return (
    <div className="page narrow">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h1>프로젝트</h1>
        <p>개인 프로젝트와 실험을 정리할 공간입니다.</p>
      </div>
      <section className="empty-state">
        <strong>아직 등록된 프로젝트가 없습니다.</strong>
        <p>블로그 MVP 이후 Rust 백엔드와 연결되는 프로젝트 카드를 추가합니다.</p>
      </section>
    </div>
  );
}
