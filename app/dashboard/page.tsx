import Link from "next/link";

const cards = [
  { label: "리서치 프로젝트", value: "0", caption: "새 프로젝트를 만들어 시작합니다." },
  { label: "연결된 사이트", value: "0", caption: "추적 코드 발급 기능이 연결될 예정입니다." },
  { label: "서베이", value: "0", caption: "설문 생성·업로드 기능이 추가될 예정입니다." },
  { label: "새 인사이트", value: "0", caption: "데이터 분석 후 자동 생성됩니다." },
];

export default function DashboardPage() {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <Link href="/" className="brand sidebar-brand">
          <span className="brand-mark">dd</span>
          <span>scan</span>
        </Link>
        <nav className="side-nav">
          <a className="active" href="#overview">Overview</a>
          <a href="#projects">Projects</a>
          <a href="#research">Research</a>
          <a href="#tracking">Site Tracking</a>
          <a href="#survey">Survey</a>
          <a href="#reports">Reports</a>
        </nav>
        <div className="side-foot">
          <span>Development preview</span>
          <Link href="/">홈으로</Link>
        </div>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-head" id="overview">
          <div>
            <p className="kicker">WORKSPACE</p>
            <h1>분석 대시보드</h1>
            <p>웹 리서치, 사이트 행동, 설문 데이터를 이곳에서 관리합니다.</p>
          </div>
          <button className="button button-primary" type="button">
            + 새 프로젝트
          </button>
        </header>

        <div className="preview-banner">
          <strong>개발 미리보기</strong>
          <span>
            현재는 화면 파운데이션 단계입니다. 실제 회원 인증과 데이터 저장은 DB 연결 후 활성화됩니다.
          </span>
        </div>

        <div className="dashboard-grid">
          {cards.map((card) => (
            <article className="dash-card" key={card.label}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
              <p>{card.caption}</p>
            </article>
          ))}
        </div>

        <section className="workspace-card" id="projects">
          <div className="workspace-head">
            <div>
              <span className="mini-label">PROJECTS</span>
              <h2>내 프로젝트</h2>
            </div>
            <button type="button" className="button button-ghost">
              프로젝트 만들기
            </button>
          </div>
          <div className="empty-state">
            <span className="empty-icon">+</span>
            <h3>아직 프로젝트가 없습니다.</h3>
            <p>
              첫 프로젝트를 만든 뒤 키워드 리서치, 사이트 추적, 서베이를 하나씩 연결합니다.
            </p>
          </div>
        </section>

        <section className="roadmap-grid">
          <article id="research">
            <span>01</span>
            <h3>Research</h3>
            <p>키워드와 조사 대상을 정하고 공개 웹 데이터를 수집합니다.</p>
          </article>
          <article id="tracking">
            <span>02</span>
            <h3>Site Tracking</h3>
            <p>회원별 추적 코드를 발급하고 사이트 행동 데이터를 받습니다.</p>
          </article>
          <article id="survey">
            <span>03</span>
            <h3>Survey</h3>
            <p>설문 응답을 프로젝트 데이터와 결합합니다.</p>
          </article>
          <article id="reports">
            <span>04</span>
            <h3>Reports</h3>
            <p>관측 사실과 AI 해석을 구분한 분석 리포트를 만듭니다.</p>
          </article>
        </section>
      </section>
    </main>
  );
}
