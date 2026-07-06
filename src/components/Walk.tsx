"use client";

import { Camera, BookOpen, AtSign, PenLine, Video, MessageCircle } from "lucide-react";
import FadeInSection from "./FadeInSection";

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

export default function Walk() {
  return (
    <section
      id="walk"
      className="py-24 md:py-32 bg-gradient-to-b from-foam-white to-aqua-mist/30"
    >
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <h2 className="font-headline text-3xl md:text-4xl text-deep-ocean text-center mb-4">
            우리봄 산책길
          </h2>
          <p className="font-body text-misty-gray text-center mb-14 leading-relaxed">
            우리봄이 지나온 공간을 모아 한곳에 담아두었습니다.
            <br />
            마음이 머무는 속도로 천천히 걸어주세요.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {paths.map((p, i) => (
            <FadeInSection key={p.name} delay={i * 0.08}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-5 md:p-6 rounded-card bg-foam-white/60 backdrop-blur-[10px] border border-cloud-gray/50 shadow-card transition-all duration-300 hover:border-ocean-teal hover:shadow-[0_8px_32px_rgba(61,178,199,0.25)]"
              >
                <p.icon
                  size={24}
                  className="text-misty-gray group-hover:text-ocean-teal transition-colors duration-300"
                />
                <span className="font-body text-xs text-deep-ocean text-center">
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
