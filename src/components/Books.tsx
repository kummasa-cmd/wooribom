"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { useLanguage } from "@/lib/language-context";

type Text = { ko: string; en: string };

type Book = {
  title: string;
  subtitle: Text | null;
  format: Text;
  coverSrc: string | null;
  links: { label: Text; href: string }[];
};

const comingSoon: Text = { ko: "표지 준비 중", en: "Cover coming soon" };

const bookGroups: { heading: Text; books: Book[] }[] = [
  {
    heading: { ko: "우리봄의 책", en: "Wooribom's Books" },
    books: [
      {
        title: "내 안의 빛을 켜다",
        subtitle: {
          ko: "당신의 자존감을 회복시켜 줄 15가지 이야기",
          en: "15 stories to restore your self-worth",
        },
        format: { ko: "전자책 · 2025. 여름", en: "eBook · Summer 2025" },
        coverSrc: "/images/book-inner-light.jpg",
        links: [
          {
            label: { ko: "교보문고에서 보기", en: "View on Kyobo Book" },
            href: "https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011783377",
          },
        ],
      },
      {
        title: "첫 개인 종이책",
        subtitle: null,
        format: { ko: "종이책 · 출간 예정", en: "Print Book · Coming Soon" },
        coverSrc: null,
        links: [
          {
            label: { ko: "집필 이야기 보기", en: "Watch the writing story" },
            href: "https://youtu.be/UpxF60JxwOE?si=xBIaeuTLvqO6wpzp",
          },
        ],
      },
    ],
  },
  {
    heading: {
      ko: "교실에서 아이들과 함께 만든 책",
      en: "Books Made With My Students",
    },
    books: [
      {
        title: "행복은 이렇게 와",
        subtitle: {
          ko: "9살 아이들이 들려주는, 지금 행복해지는 19편의 동시",
          en: "19 poems of happiness, told by 9-year-olds",
        },
        format: {
          ko: "전자책 · 종이책 · 2025. 겨울",
          en: "eBook · Print · Winter 2025",
        },
        coverSrc:
          "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/480N251176320.jpg",
        links: [
          {
            label: { ko: "예스24에서 보기", en: "View on Yes24" },
            href: "https://www.yes24.com/product/goods/167495791",
          },
          {
            label: { ko: "교보문고에서 보기", en: "View on Kyobo Book" },
            href: "http://product.kyobobook.co.kr/detail/S000220619023",
          },
        ],
      },
      {
        title: "오늘도 마음은 자라고 있어",
        subtitle: {
          ko: "12살 아이들이 들려주는, 지금 공감받는 41편의 이야기",
          en: "41 stories of empathy, told by 12-year-olds",
        },
        format: {
          ko: "전자책 · 종이책 · 2026. 여름",
          en: "eBook · Print · Summer 2026",
        },
        coverSrc: "/images/book-heart-growing2.jpg",
        links: [
          {
            label: { ko: "출간 소식 받기", en: "Get publication updates" },
            href: "https://linktr.ee/Wooribombi",
          },
        ],
      },
    ],
  },
];

export default function Books() {
  const { lang } = useLanguage();

  return (
    <section id="books" className="py-24 md:py-32 bg-paper">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <h2 className="font-headline text-3xl md:text-4xl text-ink text-center mb-16 md:mb-20">
            Books
          </h2>
        </FadeInSection>

        <div className="space-y-16 md:space-y-20">
          {bookGroups.map((group, gi) => (
            <div key={group.heading.ko}>
              <FadeInSection delay={gi * 0.1}>
                <h3 className="font-headline text-xl md:text-2xl text-accent text-center mb-8 md:mb-10">
                  {group.heading[lang]}
                </h3>
              </FadeInSection>

              <div className="grid sm:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
                {group.books.map((book, i) => (
                  <FadeInSection key={book.title} delay={i * 0.15}>
                    <div className="bg-paper rounded-card shadow-card border border-line overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-1.5">
                      {/* Cover */}
                      <div className="relative w-full aspect-[3/4] bg-mist flex items-center justify-center overflow-hidden p-6">
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
                            <p className="font-headline text-2xl text-ink-soft tracking-wide mb-2">
                              Coming Soon
                            </p>
                            <p className="font-body text-sm text-ink-soft">
                              {comingSoon[lang]}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="p-5 md:p-6 flex flex-col flex-1 text-center">
                        <h4 className="font-headline text-lg md:text-xl text-ink mb-1">
                          「{book.title}」
                        </h4>
                        {book.subtitle && (
                          <p className="font-body text-sm text-ink-soft mb-3">
                            {book.subtitle[lang]}
                          </p>
                        )}
                        <span className="inline-block font-body text-xs text-ink-soft bg-mist rounded-full px-3 py-1 mb-5 mx-auto w-fit">
                          {book.format[lang]}
                        </span>
                        <div className="mt-auto flex flex-wrap items-center justify-center gap-2">
                          {book.links.map((link) => (
                            <a
                              key={link.label.ko}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-1.5 bg-accent text-paper font-body text-xs md:text-sm px-4 py-2.5 rounded-full hover:brightness-110 transition-all"
                            >
                              {link.label[lang]}
                              <ExternalLink size={13} />
                            </a>
                          ))}
                        </div>
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
