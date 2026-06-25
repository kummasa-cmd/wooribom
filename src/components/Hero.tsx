"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-cloud-blue via-aqua-mist to-soft-sand" />

      {/* Ripple animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ripple ripple-1" />
        <div className="ripple ripple-2" />
        <div className="ripple ripple-3" />
      </div>

      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[20%] left-[10%] text-4xl opacity-20"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          🐚
        </motion.div>
        <motion.div
          className="absolute top-[60%] right-[15%] text-3xl opacity-15"
          animate={{ y: [0, -15, 0], rotate: [0, -8, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          ⭐
        </motion.div>
        <motion.div
          className="absolute bottom-[30%] left-[20%] text-2xl opacity-15"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          🫧
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="font-headline text-5xl md:text-7xl lg:text-8xl text-deep-ocean mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          우리봄 보석함
        </motion.h1>
        <motion.p
          className="font-body text-lg md:text-xl text-misty-gray max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          마음에 물결이 닿는 곳, 작은 보석들을 꺼내어 보세요.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-misty-gray hover:text-ocean-teal transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        aria-label="아래로 스크롤"
      >
        <span className="text-sm font-body">Scroll</span>
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
