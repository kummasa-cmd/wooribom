"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const MUSIC_TRACKS = [
  {
    title: { ko: "INTO THE BLUE", en: "INTO THE BLUE" },
    src: "/music/1. INTO THE BLUE.mp3",
  },
  {
    title: { ko: "바다에 와 있는 기분", en: "Feels Like Being at the Sea" },
    src: "/music/2. 바다에 와 있는 기분.mp3",
  },
  {
    title: { ko: "파도가 닿는 곳에", en: "Where the Waves Reach" },
    src: "/music/3. 파도가 닿는 곳에.mp3",
  },
];

const labels = {
  ko: { play: "음악 재생하기", pause: "음악 멈추기" },
  en: { play: "Play music", pause: "Pause music" },
};

export default function AudioPlayer() {
  const { lang } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(encodeURI(MUSIC_TRACKS[0].src));
    audio.volume = 0.4;
    audioRef.current = audio;

    const handleEnded = () => {
      setTrackIndex((prev) => (prev + 1) % MUSIC_TRACKS.length);
    };
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = encodeURI(MUSIC_TRACKS[trackIndex].src);
    if (playing) {
      audio.play().catch(() => {});
    }
  }, [trackIndex]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const label = playing ? labels[lang].pause : labels[lang].play;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      {playing && (
        <span className="px-3 py-1.5 rounded-full bg-paper/90 backdrop-blur-sm border border-line shadow-card text-xs text-ink-soft whitespace-nowrap">
          {MUSIC_TRACKS[trackIndex].title[lang]}
        </span>
      )}
      <button
        onClick={toggle}
        aria-label={label}
        title={label}
        className="w-12 h-12 rounded-full bg-paper/90 backdrop-blur-sm border border-line shadow-card flex items-center justify-center text-ink-soft hover:text-accent hover:border-accent transition-all duration-300 shrink-0"
      >
        {playing ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  );
}
