"use client";

import FadeInSection from "./FadeInSection";
import { useLanguage } from "@/lib/language-context";

const lines = {
  ko: [
    "우리봄의 바다를 찾아와주셔서 고맙습니다.",
    "",
    "이곳에 머문 작은 문장들이",
    "당신의 마음에 잔잔한 물결로 닿기를,",
    "",
    "오늘도 당신의 하루에",
    "작은 봄이 함께하기를 바랍니다",
  ],
  en: [
    "Thank you for visiting Wooribom Ocean.",
    "",
    "May the small sentences that lingered here",
    "reach your heart like a gentle wave,",
    "",
    "and may a small spring",
    "stay with you today, too.",
  ],
};

export default function Farewell() {
  const { lang } = useLanguage();
  const t = lines[lang];

  return (
    <section
      id="farewell"
      className="py-24 md:py-32 bg-gradient-to-b from-[#0E1B27] to-ink"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <FadeInSection>
          <p className="inline-block text-left font-body text-paper leading-loose text-xl md:text-2xl">
            {t.map((line, i) => (
              <span key={i}>
                {line}
                {i < t.length - 1 && <br />}
              </span>
            ))}
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
