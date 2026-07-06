"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import FadeInSection from "./FadeInSection";

type Book = {
  title: string;
  subtitle: string | null;
  format: string;
  coverSrc: string | null;
  ctaLabel: string;
  ctaHref: string;
};

const bookGroups: { heading: string; books: Book[] }[] = [
  {
    heading: "우리봄의 책",
    books: [
      {
        title: "내 안의 빛을 켜다",
        subtitle: "당신의 자존감을 회복시켜 줄 15가지 이야기",
        format: "전자책 · 2025. 여름",
        coverSrc: "/images/book-inner-light.jpg",
        ctaLabel: "교보문고에서 보기",
        ctaHref:
          "https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011783377",
      },
      {
        title: "첫 개인 종이책",
        subtitle: null,
        format: "종이책 · 출간 예정",
        coverSrc: null,
        ctaLabel: "집필 이야기 보기",
        ctaHref: "https://youtu.be/UpxF60JxwOE?si=xBIaeuTLvqO6wpzp",
      },
    ],
  },
  {
    heading: "교실에서 아이들과 함께 만든 책",
    books: [
      {
        title: "행복은 이렇게 와",
        subtitle: "9살 아이들이 들려주는, 지금 행복해지는 19편의 동시",
        format: "전자책 · 종이책 · 2025. 겨울",
        coverSrc:
          "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/480N251176320.jpg",
        ctaLabel: "예스24에서 보기",
        ctaHref: "https://www.yes24.com/product/goods/167495791",
      },
      {
        title: "오늘도 마음은 자라고 있어",
        subtitle: "12살 아이들이 들려주는, 지금 공감받는 41편의 이야기",
        format: "전자책 · 종이책 · 2026. 여름",
        coverSrc: "/images/book-heart-growing2.jpg",
        ctaLabel: "출간 소식 받기",
        ctaHref: "https://linktr.ee/Wooribombi",
      },
    ],
  },
];

export default function Books() {
  return (
    <section id="books" className="py-24 md:py-32 bg-foam-white">
      <div className="max-w-5xl mx-auto px-6">
        <FadeInSection>
          <h2 className="font-headline text-3xl md:text-4xl text-deep-ocean text-center mb-16 md:mb-20">
            책 보석함
          </h2>
        </FadeInSection>

        <div className="space-y-16 md:space-y-20">
          {bookGroups.map((group, gi) => (
            <div key={group.heading}>
              <FadeInSection delay={gi * 0.1}>
                <h3 className="font-headline text-xl md:text-2xl text-ocean-teal text-center mb-8 md:mb-10">
                  {group.heading}
                </h3>
              </FadeInSection>

              <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
                {group.books.map((book, i) => (
                  <FadeInSection key={book.title} delay={i * 0.15}>
                    <div className="bg-soft-sand rounded-card shadow-card overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.02]">
                      {/* Cover */}
                      <div className="relative w-full aspect-[3/4] bg-cloud-gray flex items-center justify-center overflow-hidden p-6">
                        {book.coverSrc ? (
                          <Image
                            src={book.coverSrc}
                            alt={`${book.title} 표지`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                        ) : (
                          <div className="text-center p-6">
                            <p className="font-accent text-3xl text-misty-gray mb-2">
                              Coming Soon
                            </p>
                            <p className="font-body text-sm text-misty-gray">
                              표지 준비 중
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="p-5 md:p-6 flex flex-col flex-1 text-center">
                        <h4 className="font-headline text-lg md:text-xl text-deep-ocean mb-1">
                          「{book.title}」
                        </h4>
                        {book.subtitle && (
                          <p className="font-body text-sm text-misty-gray mb-3">
                            {book.subtitle}
                          </p>
                        )}
                        <span className="inline-block font-body text-xs text-ocean-teal bg-aqua-mist/30 rounded-full px-3 py-1 mb-5 mx-auto w-fit">
                          {book.format}
                        </span>
                        <a
                          href={book.ctaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-flex items-center justify-center gap-2 bg-ocean-teal text-foam-white font-body text-sm px-5 py-2.5 rounded-full hover:brightness-110 transition-all"
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
          ))}
        </div>
      </div>
    </section>
  );
}
