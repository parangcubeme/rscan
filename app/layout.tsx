import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ddscan | Research Intelligence",
  description: "웹 데이터, 사이트 행동, 설문을 하나의 인사이트로 연결하는 리서치 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
