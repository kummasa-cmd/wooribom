import type { Metadata } from "next";
import { Gowun_Batang } from "next/font/google";
import localFont from "next/font/local";
import AudioPlayer from "@/components/AudioPlayer";
import LanguageToggle from "@/components/LanguageToggle";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const gowunBatang = Gowun_Batang({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gowun-batang",
  display: "swap",
});

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "우리봄의 바다 | Wooribom Ocean",
  description:
    "마음의 물결이 닿는 곳, 당신만의 바다를 천천히 만나보세요. 작가 우리봄(김윤희)의 랜딩 페이지.",
  openGraph: {
    title: "우리봄의 바다 | Wooribom Ocean",
    description: "마음의 물결이 닿는 곳, 당신만의 바다를 천천히 만나보세요.",
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
      className={`${gowunBatang.variable} ${pretendard.variable}`}
    >
      <body className="font-body antialiased">
        <LanguageProvider>
          {children}
          <AudioPlayer />
          <LanguageToggle />
        </LanguageProvider>
      </body>
    </html>
  );
}
