"use client";

import { ArrowUp, Shell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-ocean text-foam-white py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-body text-sm opacity-80">
          <Shell size={16} />
          <span>made with 🌊</span>
        </div>

        <p className="font-body text-sm opacity-60 text-center">
          &copy; 2026 우리봄 보석함 (Wooribom). All rights reserved.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1 font-body text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="맨 위로 스크롤"
        >
          Top
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
