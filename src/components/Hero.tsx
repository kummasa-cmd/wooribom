"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const menu = [
  { label: "Books", href: "#books" },
  { label: "Films", href: "#media" },
  { label: "Wooribom Ocean", href: "#walk" },
];

const copy = {
  ko: {
    title: "우리봄의 바다",
    subtitle: "Wooribom Ocean",
    body: "마음의 물결이 닿는 곳, 당신만의 바다를 천천히 만나보세요",
    scroll: "Scroll",
    scrollAria: "아래로 스크롤",
  },
  en: {
    title: "Wooribom Ocean",
    subtitle: "우리봄의 바다",
    body: "Where the waves of the heart arrive — take a slow moment to find your own sea.",
    scroll: "Scroll",
    scrollAria: "Scroll down",
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-ink to-[#0E1B27]"
    >
      {/* Ripple */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ripple ripple-1" />
        <div className="ripple ripple-2" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.h1
          key={`title-${lang}`}
          className="font-headline text-4xl md:text-6xl lg:text-7xl text-paper mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {t.title}
        </motion.h1>
        <motion.p
          key={`subtitle-${lang}`}
          className="font-headline text-base md:text-lg tracking-[0.3em] text-mist/70 uppercase mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        >
          {t.subtitle}
        </motion.p>
        <motion.p
          key={`body-${lang}`}
          className="font-body text-base md:text-lg text-mist/90 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          {t.body}
        </motion.p>

        <motion.nav
          className="flex items-center justify-center gap-3 font-body text-xs md:text-sm text-mist/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {menu.map((item, i) => (
            <span key={item.label} className="flex items-center gap-3">
              {i > 0 && <span className="text-mist/30">·</span>}
              <a
                href={item.href}
                className="hover:text-paper transition-colors duration-300"
              >
                {item.label}
              </a>
            </span>
          ))}
        </motion.nav>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-mist/50 hover:text-paper transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        aria-label={t.scrollAria}
      >
        <span className="text-sm font-body">{t.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
