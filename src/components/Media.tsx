"use client";

import FadeInSection from "./FadeInSection";

export default function Media() {
  return (
    <section id="media" className="py-24 md:py-32 bg-cloud-gray/40">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <h2 className="font-headline text-3xl md:text-4xl text-deep-ocean text-center mb-4">
            영상으로 만나는 보석함
          </h2>
          <p className="font-body text-misty-gray text-center mb-12">
            「행복은 이렇게 와」 도서 소개 영상
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="relative w-full aspect-video rounded-card shadow-card overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/XjV5x5grrD4"
              title="행복은 이렇게 와 - 도서 소개 영상"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
