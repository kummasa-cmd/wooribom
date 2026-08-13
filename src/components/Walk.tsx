"use client";

import { Camera, BookOpen, AtSign, PenLine, Video, MessageCircle } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { useLanguage } from "@/lib/language-context";

const paths = [
  {
    name: "Instagram",
    icon: Camera,
    href: "https://www.instagram.com/wooribom.log?igsh=YmMxb2dmeHEycDZp",
  },
  {
    name: "Naver Blog",
    icon: BookOpen,
    href: "http://blog.naver.com/smile3901",
  },
  {
    name: "Threads",
    icon: AtSign,
    href: "https://www.threads.com/@wooribom.log",
  },
  {
    name: "Brunch",
    icon: PenLine,
    href: "https://brunch.co.kr/brunchbook/sea-came-to-me",
  },
  {
    name: "YouTube",
    icon: Video,
    href: "https://youtube.com/@wooribom?si=Y-zHdx0VRpp1gBvq",
  },
  {
    name: "X (Twitter)",
    icon: MessageCircle,
    href: "https://x.com/springrains4650",
  },
];

const subtitle = {
  ko: (
    <>
      우리봄이 지나온 공간을 모아 한곳에 담아두었습니다.
      <br />
      마음이 머무는 속도로 천천히 걸어주세요.
    </>
  ),
  en: (
    <>
      All the places Wooribom has passed through, gathered in one place.
      <br />
      Walk slowly, at the pace your heart wants to stay.
    </>
  ),
};

export default function Walk() {
  const { lang } = useLanguage();

  return (
    <section
      id="walk"
      className="py-24 md:py-32 bg-mist/40"
    >
      <div className="max-w-5xl mx-auto px-6">
        <FadeInSection>
          <h2 className="font-headline text-3xl md:text-4xl text-ink text-center mb-4">
            Wooribom Ocean
          </h2>
          <p className="font-body text-ink-soft text-center mb-14 leading-relaxed">
            {subtitle[lang]}
          </p>
        </FadeInSection>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {paths.map((p, i) => (
            <FadeInSection key={p.name} delay={i * 0.08}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-5 md:p-6 rounded-card bg-paper border border-line shadow-card transition-all duration-300 hover:border-accent hover:shadow-[0_8px_32px_rgba(22,40,58,0.14)]"
              >
                <p.icon
                  size={24}
                  className="text-ink-soft group-hover:text-accent transition-colors duration-300"
                />
                <span className="font-body text-xs text-ink text-center">
                  {p.name}
                </span>
              </a>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
