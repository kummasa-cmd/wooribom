import type { Metadata } from "next";
import { Gowun_Batang, Gaegu } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import AudioPlayer from "@/components/AudioPlayer";

const gowunBatang = Gowun_Batang({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gowun-batang",
  display: "swap",
});

const gaegu = Gaegu({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-gaegu",
  display: "swap",
});

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "우리봄 보석함 | Wooribom's Jewel Box",
  description:
    "마음에 물결이 닿는 곳, 작은 보석들을 꺼내어 보세요. 작가 우리봄(김윤희)의 감성 랜딩 페이지.",
  openGraph: {
    title: "우리봄 보석함",
    description: "마음에 물결이 닿는 곳, 작은 보석들을 꺼내어 보세요.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${gowunBatang.variable} ${gaegu.variable} ${pretendard.variable}`}
    >
      <body className="font-body antialiased">
        {children}
        <AudioPlayer />
      </body>
    </html>
  );
}
