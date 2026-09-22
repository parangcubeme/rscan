import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="auth-shell">
      <section className="auth-card">
        <Link href="/" className="brand auth-brand">
          <span className="brand-mark">dd</span>
          <span>scan</span>
        </Link>

        <div className="auth-heading">
          <p className="kicker">MEMBER ACCESS</p>
          <h1>로그인</h1>
          <p>
            ddscan의 리서치와 분석 기능은 회원 전용으로 운영할 예정입니다.
          </p>
        </div>

        <form className="auth-form">
          <label>
            이메일
            <input type="email" placeholder="name@example.com" disabled />
          </label>
          <label>
            비밀번호
            <input type="password" placeholder="••••••••" disabled />
          </label>
          <button type="button" className="button button-primary button-full" disabled>
            로그인
          </button>
        </form>

        <div className="notice">
          <strong>현재 1차 파운데이션 단계입니다.</strong>
          <p>
            DB와 회원 인증을 연결한 뒤 실제 회원가입·로그인을 활성화합니다.
          </p>
        </div>

        <Link href="/dashboard" className="text-link auth-preview">
          개발용 대시보드 미리보기 →
        </Link>
      </section>
    </main>
  );
}
