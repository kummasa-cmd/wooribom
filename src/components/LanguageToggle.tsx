"use client";

import { useLanguage } from "@/lib/language-context";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-0.5 rounded-full bg-paper/90 backdrop-blur-sm border border-line shadow-card p-1 font-body text-xs">
      <button
        onClick={() => setLang("ko")}
        aria-pressed={lang === "ko"}
        className={`px-3 py-1.5 rounded-full transition-colors duration-300 ${
          lang === "ko" ? "bg-accent text-paper" : "text-ink-soft hover:text-ink"
        }`}
      >
        KOR
      </button>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-3 py-1.5 rounded-full transition-colors duration-300 ${
          lang === "en" ? "bg-accent text-paper" : "text-ink-soft hover:text-ink"
        }`}
      >
        ENG
      </button>
    </div>
  );
}
