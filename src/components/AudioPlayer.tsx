"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MUSIC_FILES = ["/music/우리봄비.mp3"];

function pickRandom(list: string[]) {
  return list[Math.floor(Math.random() * list.length)];
}

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = new Audio(pickRandom(MUSIC_FILES));
    audio.loop = MUSIC_FILES.length === 1;
    audio.volume = 0.4;
    audioRef.current = audio;

    const handleEnded = () => {
      if (MUSIC_FILES.length > 1) {
        audio.src = pickRandom(MUSIC_FILES);
        audio.play().catch(() => {});
      }
    };
    audio.addEventListener("ended", handleEnded);
    setReady(true);

    // 첫 번째 사용자 인터랙션 시 재생
    const startOnInteraction = () => {
      audio.play().then(() => setPlaying(true)).catch(() => {});
      window.removeEventListener("click", startOnInteraction);
      window.removeEventListener("scroll", startOnInteraction);
      window.removeEventListener("touchstart", startOnInteraction);
    };

    window.addEventListener("click", startOnInteraction);
    window.addEventListener("scroll", startOnInteraction);
    window.addEventListener("touchstart", startOnInteraction);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      window.removeEventListener("click", startOnInteraction);
      window.removeEventListener("scroll", startOnInteraction);
      window.removeEventListener("touchstart", startOnInteraction);
      audio.pause();
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {});
      setPlaying(true);
    }
  };

  if (!ready) return null;

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "음악 끄기" : "음악 켜기"}
      title={playing ? "음악 끄기" : "음악 켜기"}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-foam-white/80 backdrop-blur-sm border border-cloud-gray shadow-card flex items-center justify-center text-misty-gray hover:text-ocean-teal hover:border-ocean-teal transition-all duration-300"
    >
      {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  );
}
