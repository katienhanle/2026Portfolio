"use client";

import { useRef, useState } from "react";

export default function PlaygroundVideoSlide({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const hasLoopedRef = useRef(false);

  const handleClick = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  const handleEnded = () => {
    const el = videoRef.current;
    if (!el || hasLoopedRef.current) return;
    hasLoopedRef.current = true;
    el.loop = true;
    el.currentTime = 0;
    el.play();
  };

  return (
    <div className="relative h-full w-full cursor-pointer" onClick={handleClick}>
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full object-cover"
        playsInline
        onEnded={handleEnded}
      />
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
}
