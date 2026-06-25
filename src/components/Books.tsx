"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import FadeInSection from "./FadeInSection";

const books = [
  {
    tag: "2025 · 출간",
    title: "행복은 이렇게 와",
    subtitle: "9살 아이들이 들려주는, 지금 행복해지는 19편의 동시",
    description:
      "초등학교 2학년 아이들이 일상 속에서 느낀 마음과, 작은 손으로 적어 내려간 계절과 삶의 이야기를 담았습니다.",
    date: "2025년 11월 27일",
    coverSrc:
      "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/480N251176320.jpg",
    ctaLabel: "교보문고에서 보기",
    ctaHref:
      "https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000012258589",
  },
  {
    tag: "2026.07 · 출간 예정",
    title: "오늘도 마음은 자라고 있어",
    subtitle: "초등학교 5학년 아이들과 함께 쓰는 공저",
    description:
      "한 뼘씩 자라는 아이들의 마음을 글로 엮어, 2026년 여름, 또 하나의 보석으로 찾아옵니다.",
    date: null,
    coverSrc: null,
    ctaLabel: "출간 소식 받기",
    ctaHref: "https://linktr.ee/Wooribombi",
  },
];

export default function Books() {
  return (
    <section id="books" className="py-24 md:py-32 bg-foam-white">
      <div className="max-w-5xl mx-auto px-6">
        <FadeInSection>
          <h2 className="font-headline text-3xl md:text-4xl text-deep-ocean text-center mb-16">
            공저책 보석함
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {books.map((book, i) => (
            <FadeInSection key={book.title} delay={i * 0.2}>
              <div className="bg-soft-sand rounded-card shadow-card overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.02]">
                {/* Cover */}
                <div className="relative w-full aspect-[3/4] bg-cloud-gray flex items-center justify-center overflow-hidden">
                  {book.coverSrc ? (
                    <Image
                      src={book.coverSrc}
                      alt={`${book.title} 표지`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="text-center p-8">
                      <p className="font-accent text-4xl text-misty-gray mb-2">
                        Coming Soon
                      </p>
                      <p className="font-body text-sm text-misty-gray">
                        표지 준비 중
                      </p>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <span className="inline-block text-xs font-body text-ocean-teal bg-aqua-mist/30 rounded-full px-3 py-1 mb-3 w-fit">
                    {book.tag}
                  </span>
                  <h3 className="font-headline text-xl md:text-2xl text-deep-ocean mb-1">
                    「{book.title}」
                  </h3>
                  <p className="font-body text-sm text-misty-gray mb-3">
                    {book.subtitle}
                  </p>
                  <p className="font-body text-deep-ocean leading-relaxed text-sm mb-4 flex-1">
                    {book.description}
                  </p>
                  {book.date && (
                    <p className="font-body text-xs text-misty-gray mb-4">
                      출간일: {book.date}
                    </p>
                  )}
                  <a
                    href={book.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-ocean-teal text-foam-white font-body text-sm px-6 py-3 rounded-full hover:brightness-110 transition-all"
                  >
                    {book.ctaLabel}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
