"use client";

import { useEffect, useRef } from "react";

type PlaybackState =
  | "idle"
  | "playing-to-freeze"
  | "frozen"
  | "playing-to-end"
  | "ended";

export default function ScrollFreezeVideo({
  src,
  freezeAt,
}: {
  src: string;
  freezeAt: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const stateRef = useRef<PlaybackState>("idle");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (
        stateRef.current === "playing-to-freeze" &&
        video.currentTime >= freezeAt
      ) {
        video.pause();
        video.currentTime = freezeAt;
        stateRef.current = "frozen";
      }
    };
    const onEnded = () => {
      stateRef.current = "ended";
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (stateRef.current === "idle" || stateRef.current === "ended") {
            video.currentTime = 0;
            stateRef.current = "playing-to-freeze";
            video.play();
          }
        } else if (stateRef.current === "frozen") {
          stateRef.current = "playing-to-end";
          video.play();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(video);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
      observer.disconnect();
    };
  }, [freezeAt]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      className="w-full rounded-2xl"
    />
  );
}
