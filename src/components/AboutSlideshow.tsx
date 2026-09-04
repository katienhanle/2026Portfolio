"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

const COOLDOWN = 600;

export default function AboutSlideshow({
  count,
  captions,
}: {
  count: number;
  captions: string[];
}) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const lockRef = useRef(false);

  const advance = useCallback(
    (dir: number) => {
      if (lockRef.current) return;
      setActive((cur) => {
        const next = Math.min(Math.max(cur + dir, 0), count - 1);
        if (next === cur) return cur;
        lockRef.current = true;
        setTimeout(() => (lockRef.current = false), COOLDOWN);
        return next;
      });
    },
    [count]
  );

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-1/2">
        <div
          className="relative aspect-square cursor-pointer transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{ transform: hovered ? "scale(1.02)" : "scale(1)" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => advance(1)}
          data-cursor-hint="Press me to see more!"
        >
          {Array.from({ length: count }).map((_, i) => {
            const rel = i - active;
            const gone = rel < 0;

            let translateY = 0;
            let scale = 1;
            let opacity = 1;
            let z = 30;

            if (gone) {
              opacity = 0;
              z = 40;
            } else if (rel > 0) {
              translateY = Math.min(rel, 3) * 14;
              scale = 1 - Math.min(rel, 3) * 0.04;
              opacity = rel > 3 ? 0 : 1;
              z = 30 - rel;
            }

            return (
              <div
                key={i}
                className="absolute inset-0 overflow-hidden rounded-2xl bg-faint transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  transform: `translate3d(0, ${gone ? "-110%" : `${translateY}px`}, 0) scale(${scale})`,
                  opacity,
                  zIndex: z,
                  pointerEvents: rel === 0 ? "auto" : "none",
                }}
              >
                <Image
                  src={`/about/photo-${i + 1}.PNG`}
                  alt={captions[i] ?? ""}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
                {captions[i] && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-4 pt-16">
                    <p className="text-[13px] text-white">{captions[i]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
