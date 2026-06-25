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
              <h2 className="font-accent text-3xl md:text-4xl text-ocean-teal mb-2">
                우리봄
              </h2>
              <p className="font-headline text-xl text-deep-ocean mb-1">
                김윤희
              </p>
              <p className="font-body text-misty-gray mb-6">
                초등학교 교사 · 작가
              </p>
              <blockquote className="font-body text-deep-ocean leading-relaxed text-lg border-l-4 border-aqua-mist pl-5">
                교실에서 아이들과 함께 마음을 키우고, 그 빛나는 순간을 글로
                옮깁니다.
                <br />
                우리봄의 보석함에는 아이들의 동시, 일상의 에세이, 그리고 바다
                같은 마음이 담겨 있어요.
              </blockquote>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
