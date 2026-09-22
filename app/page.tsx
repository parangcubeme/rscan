import Link from "next/link";

const features = [
  {
    eyebrow: "01 · Research",
    title: "웹 데이터 리서치",
    text: "키워드와 주제를 중심으로 공개 웹 데이터를 수집하고, 언급·질문·관심사·변화를 분석합니다.",
  },
  {
    eyebrow: "02 · Analytics",
    title: "사이트 행동 분석",
    text: "추적 코드를 설치한 사이트의 방문 흐름과 주요 이벤트를 프로젝트별로 분석할 수 있도록 확장합니다.",
  },
  {
    eyebrow: "03 · Survey",
    title: "서베이 통합",
    text: "향후 설문 응답을 업로드하거나 직접 수집해 웹 데이터와 함께 비교 분석할 수 있습니다.",
  },
  {
    eyebrow: "04 · Insight",
    title: "AI 인사이트",
    text: "관측된 데이터와 해석을 구분해 담당자가 바로 이해할 수 있는 요약과 변화 알림을 제공합니다.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <Link href="/" className="brand" aria-label="ddscan home">
          <span className="brand-mark">dd</span>
          <span>scan</span>
        </Link>
        <nav className="topnav" aria-label="메인 메뉴">
          <a href="#product">제품</a>
          <a href="#workflow">분석 구조</a>
          <Link href="/login" className="button button-ghost">
            로그인
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">RESEARCH INTELLIGENCE PLATFORM</p>
          <h1>
            흩어진 데이터를
            <br />
            <span>한 번에 읽는 리서치.</span>
          </h1>
          <p className="hero-text">
            공개 웹 데이터, 사이트 행동, 서베이를 하나의 프로젝트에 모아
            고객과 시장이 무엇에 반응하는지 파악하는 분석 플랫폼입니다.
          </p>
          <div className="hero-actions">
            <Link href="/login" className="button button-primary">
              ddscan 시작하기
            </Link>
            <a href="#product" className="text-link">
              기능 둘러보기 →
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="ddscan 분석 미리보기">
          <div className="panel-head">
            <div>
              <span className="mini-label">LIVE OVERVIEW</span>
              <h2>소비자 변화 감지</h2>
            </div>
            <span className="status-dot">수집 준비</span>
          </div>

          <div className="metric-grid">
            <div className="metric-card">
              <span>웹 리서치</span>
              <strong>키워드 기반</strong>
              <small>외부 데이터 수집</small>
            </div>
            <div className="metric-card">
              <span>사이트 분석</span>
              <strong>행동 기반</strong>
              <small>추적 코드 연동</small>
            </div>
            <div className="metric-card">
              <span>서베이</span>
              <strong>응답 기반</strong>
              <small>정성·정량 결합</small>
            </div>
          </div>

          <div className="insight-card">
            <span className="mini-label">AI INSIGHT</span>
            <p>
              서로 다른 데이터의 변화를 한 화면에서 비교하고, 실제 관측과
              AI 해석을 구분해 담당자에게 전달합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="product">
        <div className="section-heading">
          <p className="kicker">WHAT DDSCAN DOES</p>
          <h2>리서치부터 행동 데이터까지 한 프로젝트에서.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span>{feature.eyebrow}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section workflow" id="workflow">
        <div className="workflow-copy">
          <p className="kicker">DATA FLOW</p>
          <h2>수집 → 분석 → 인사이트 → 알림</h2>
          <p>
            처음에는 웹 리서치부터 시작하고, 이후 사이트 추적 코드와 서베이
            데이터를 연결해 같은 프로젝트 안에서 교차 분석하는 구조로 확장합니다.
          </p>
        </div>
        <div className="flow-row">
          <span>Web</span>
          <b>→</b>
          <span>Behavior</span>
          <b>→</b>
          <span>Survey</span>
          <b>→</b>
          <span>Insight</span>
        </div>
      </section>

      <footer className="footer">
        <span>ddscan</span>
        <small>Research intelligence, built step by step.</small>
      </footer>
    </main>
  );
}
