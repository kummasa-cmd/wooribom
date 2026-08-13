"use client";

import FadeInSection from "./FadeInSection";
import { useLanguage } from "@/lib/language-context";

const videos = [
  {
    id: "UpxF60JxwOE",
    title: "책의 시작은 바다였다",
    caption: "책의 시작은 바다였다",
  },
  {
    id: "XjV5x5grrD4",
    title: "행복은 이렇게 와 - 도서 소개 영상",
    caption: "「행복은 이렇게 와」 도서 소개 영상",
  },
];

const subtitle = {
  ko: "우리봄의 이야기를 영상으로 만나보세요.",
  en: "Meet Wooribom's story in film.",
};

export default function Media() {
  const { lang } = useLanguage();

  return (
    <section id="media" className="py-24 md:py-32 bg-mist/40">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <h2 className="font-headline text-3xl md:text-4xl text-ink text-center mb-4">
            Films
          </h2>
          <p className="font-body text-ink-soft text-center mb-12">
            {subtitle[lang]}
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {videos.map((video, i) => (
            <FadeInSection key={video.id} delay={i * 0.2}>
              <div>
                <div className="relative w-full aspect-video rounded-card shadow-card overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                </div>
                <p className="font-body text-sm text-ink-soft text-center mt-4">
                  {video.caption}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
