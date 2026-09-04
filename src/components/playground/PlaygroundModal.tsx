"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { PlaygroundItem, PlaygroundMediaSlide } from "@/lib/types";
import RiveCanvas from "@/components/RiveCanvas";
import PlaygroundVideoSlide from "./PlaygroundVideoSlide";

export default function PlaygroundModal({
  item,
  onClose,
}: {
  item: PlaygroundItem;
  onClose: () => void;
}) {
  const media: PlaygroundMediaSlide[] =
    item.media && item.media.length > 0
      ? item.media
      : [item.image, ...(item.images ?? [])]
          .filter((src): src is string => Boolean(src))
          .map((src) => ({ type: "image" as const, src }));
  const [activeImage, setActiveImage] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-6 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-4xl rounded-3xl bg-card p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] transition-all duration-200 sm:p-14 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-6 top-6 text-ink transition-opacity hover:opacity-60"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            {media.length > 0 && (
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-faint">
                {media[activeImage].type === "image" && (
                  <Image
                    src={media[activeImage].src}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                )}
                {media[activeImage].type === "video" && (
                  <PlaygroundVideoSlide src={media[activeImage].src} />
                )}
                {media[activeImage].type === "rive" && (
                  <RiveCanvas
                    src={media[activeImage].src}
                    stateMachine={media[activeImage].stateMachine}
                  />
                )}
              </div>
            )}
            {media.length > 1 && (
              <div className="mt-4 flex gap-3">
                {media.map((slide, i) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`relative h-16 w-16 overflow-hidden rounded-lg border transition-opacity ${
                      i === activeImage
                        ? "border-ink opacity-100"
                        : "border-neutral-200 opacity-50 hover:opacity-80"
                    }`}
                  >
                    {slide.type === "image" && (
                      <Image src={slide.src} alt="" fill className="object-cover" />
                    )}
                    {slide.type === "video" && (
                      <video
                        src={slide.src}
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover"
                      />
                    )}
                    {slide.type === "rive" && (
                      <div className="flex h-full w-full items-center justify-center bg-faint text-muted">
                        ✦
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
            {item.link && (
              <a
                href={item.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[15px] text-ink underline underline-offset-2 transition-opacity hover:opacity-60"
              >
                {item.link.label}
              </a>
            )}
          </div>

          <div>
            <p className="text-[15px] text-muted">{item.year}</p>
            <h2 className="mt-2 text-[20px] leading-snug">{item.title}</h2>
            {item.description && (
              <p className="mt-5 text-[15px] leading-relaxed text-ink/80">
                {item.description}
              </p>
            )}
            {item.tools && item.tools.length > 0 && (
              <div className="mt-8">
                <p className="text-[15px] font-semibold text-ink">Tools Used</p>
                <div className="mt-3 space-y-1.5">
                  {item.tools.map((tool) => (
                    <p key={tool} className="text-[15px] text-muted">
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
