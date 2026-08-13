"use client";

import { ArrowUp, Shell } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const copy = {
  ko: {
    copyright: "© 2026 우리봄의 바다 (Wooribom Ocean). All rights reserved.",
    topAria: "맨 위로 스크롤",
  },
  en: {
    copyright: "© 2026 Wooribom Ocean. All rights reserved.",
    topAria: "Scroll to top",
  },
};

export default function Footer() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <footer className="bg-ink text-paper py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-body text-sm opacity-80">
          <Shell size={16} />
          <span>made with 🌊</span>
        </div>

        <p className="font-body text-sm opacity-60 text-center">
          {t.copyright}
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1 font-body text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
          aria-label={t.topAria}
        >
          Top
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
