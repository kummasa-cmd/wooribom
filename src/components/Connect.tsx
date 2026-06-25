"use client";

import {
  AtSign,
  BookOpen,
  PenLine,
  Link as LinkIcon,
  Video,
  Camera,
  MessageCircle,
} from "lucide-react";
import FadeInSection from "./FadeInSection";

const channels = [
  {
    name: "Instagram",
    icon: Camera,
    href: "https://www.instagram.com/wooribom.log?igsh=YmMxb2dmeHEycDZp",
  },
  {
    name: "Threads",
    icon: AtSign,
    href: "https://www.threads.com/@wooribom.log",
  },
  {
    name: "YouTube",
    icon: Video,
    href: "https://youtube.com/@wooribom?si=Y-zHdx0VRpp1gBvq",
  },
  {
    name: "Brunch",
    description: "우리봄과 바다 이야기",
    icon: PenLine,
    href: "https://brunch.co.kr/brunchbook/sea-came-to-me",
  },
  {
    name: "Naver Blog",
    icon: BookOpen,
    href: "http://blog.naver.com/smile3901",
  },
  {
    name: "X (Twitter)",
    icon: MessageCircle,
    href: "https://x.com/springrains4650",
  },
  {
    name: "Linktree",
    icon: LinkIcon,
    href: "https://linktr.ee/Wooribombi",
  },
];

export default function Connect() {
  return (
    <section
      id="connect"
      className="py-24 md:py-32 bg-gradient-to-b from-foam-white to-aqua-mist/30"
    >
      <div className="max-w-5xl mx-auto px-6">
        <FadeInSection>
          <h2 className="font-headline text-3xl md:text-4xl text-deep-ocean text-center mb-3">
            우리봄과 더 가까이
          </h2>
          <p className="font-body text-misty-gray text-center mb-14">
            보석함의 문은 언제나 열려 있어요.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {channels.map((ch, i) => (
            <FadeInSection key={ch.name} delay={i * 0.08}>
              <a
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 md:p-8 rounded-card bg-foam-white/60 backdrop-blur-[10px] border border-cloud-gray/50 shadow-card transition-all duration-300 hover:border-ocean-teal hover:shadow-[0_8px_32px_rgba(61,178,199,0.25)]"
              >
                <ch.icon
                  size={28}
                  className="text-misty-gray group-hover:text-ocean-teal transition-colors duration-300"
                />
                <span className="font-body text-sm text-deep-ocean">
                  {ch.name}
                </span>
                {"description" in ch && ch.description && (
                  <span className="font-body text-xs text-misty-gray text-center leading-tight">
                    {ch.description}
                  </span>
                )}
              </a>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
