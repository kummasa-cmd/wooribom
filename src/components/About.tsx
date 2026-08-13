"use client";

import FadeInSection from "./FadeInSection";
import { useLanguage } from "@/lib/language-context";

const copy = {
  ko: {
    name: "김윤희",
    bio: [
      "교실에서는 아이들의 마음이 자라는 순간을 함께합니다.",
      "글 안에서는 일상 속 스쳐 가는 찰나를 여행처럼 기록합니다.",
      "바다에서는 조용히 숨을 고르며 생명의 아름다움을 배웁니다.",
    ],
  },
  en: {
    name: "Kim Yoon-hee",
    bio: [
      "In the classroom, I walk alongside the moments a child's heart grows.",
      "In writing, I record the fleeting instants of everyday life like a journey.",
      "In the sea, I quietly steady my breath and learn the beauty of life.",
    ],
  },
};

export default function About() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <section id="about" className="py-24 md:py-32 bg-paper">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <FadeInSection>
          <p className="font-body text-sm text-ink-soft tracking-[0.2em] uppercase mb-3">
            {t.name}
          </p>
          <h2 className="font-headline text-2xl md:text-3xl text-ink mb-8">
            WOORIBOM | Writer · Teacher · Diver
          </h2>
          <blockquote className="font-body text-ink leading-relaxed text-lg border-l-2 border-mist pl-6 text-left inline-block">
            {t.bio.map((line, i) => (
              <span key={i}>
                {line}
                {i < t.bio.length - 1 && <br />}
              </span>
            ))}
          </blockquote>
        </FadeInSection>
      </div>
    </section>
  );
}
