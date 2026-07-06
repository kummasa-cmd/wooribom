"use client";

import { User } from "lucide-react";
import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-soft-sand">
      <div className="max-w-5xl mx-auto px-6">
        <FadeInSection>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-cloud-gray flex items-center justify-center shadow-card">
                <User size={64} className="text-misty-gray" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="font-headline text-xl text-deep-ocean mb-1">
                김윤희
              </p>
              <h2 className="font-accent text-2xl md:text-3xl text-ocean-teal mb-6">
                (우리봄 Wooribom)
              </h2>
              <p className="font-body text-misty-gray mb-6">
                교사 · 작가 · 다이버
              </p>
              <blockquote className="font-body text-deep-ocean leading-relaxed text-lg border-l-4 border-aqua-mist pl-5">
                교실에서는 아이들의 마음이 자라는 순간을 함께합니다.
                <br />
                글 안에서는 일상 속 스쳐 가는 찰나를 여행처럼 기록합니다.
                <br />
                바다에서는 조용히 숨을 고르며 생명의 아름다움을 배웁니다.
              </blockquote>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
