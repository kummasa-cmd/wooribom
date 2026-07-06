"use client";

import FadeInSection from "./FadeInSection";

export default function Farewell() {
  return (
    <section
      id="farewell"
      className="py-24 md:py-32 bg-gradient-to-b from-sky-cloud-blue via-aqua-mist to-soft-sand"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <FadeInSection>
          <p className="inline-block text-left font-body text-deep-ocean leading-loose text-xl md:text-2xl">
            우리봄 보석함을 열어주셔서 고맙습니다.
            <br />
            <br />
            이곳에 머문 작은 문장들이
            <br />
            당신의 마음에 잔잔한 물결로 닿기를,
            <br />
            <br />
            오늘도 당신의 하루에
            <br />
            작은 봄이 함께하기를 바랍니다
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
