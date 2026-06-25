"use client";

import FadeInSection from "./FadeInSection";

const videos = [
  {
    id: "XjV5x5grrD4",
    title: "행복은 이렇게 와 - 도서 소개 영상",
    caption: "「행복은 이렇게 와」 도서 소개 영상",
  },
  {
    id: "UpxF60JxwOE",
    title: "우리봄 작가의 첫 종이책 집필 이야기",
    caption: "우리봄 작가의 첫 종이책 - 집필 중",
  },
];

export default function Media() {
  return (
    <section id="media" className="py-24 md:py-32 bg-cloud-gray/40">
      <div className="max-w-5xl mx-auto px-6">
        <FadeInSection>
          <h2 className="font-headline text-3xl md:text-4xl text-deep-ocean text-center mb-4">
            영상으로 만나는 보석함
          </h2>
          <p className="font-body text-misty-gray text-center mb-12">
            우리봄의 이야기를 영상으로 만나보세요.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-8">
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
                <p className="font-body text-sm text-misty-gray text-center mt-4">
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
