"use client";

import { useState } from "react";
import Image from "next/image";
import type { PlaygroundItem } from "@/lib/types";
import PlaygroundModal from "./PlaygroundModal";
import RiveCanvas from "@/components/RiveCanvas";

export default function PlaygroundGrid({ items }: { items: PlaygroundItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className="card-enter-right mx-auto grid max-w-6xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <article
            key={i}
            onClick={() => setOpenIndex(i)}
            className="group flex aspect-square cursor-pointer flex-col justify-between rounded-3xl bg-card p-7 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex justify-end">
              <span className="text-[15px] text-ink">{item.year}</span>
            </div>

            {item.media?.[0]?.type === "rive" ? (
              <div className="relative my-4 flex-1 overflow-hidden rounded-2xl bg-faint">
                <RiveCanvas
                  src={item.media[0].src}
                  stateMachine={item.media[0].stateMachine}
                />
              </div>
            ) : (
              item.image && (
                <div className="relative my-4 flex-1 overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )
            )}

            <div>
              <p className="text-[15px] text-muted">{item.category}</p>
              <h2 className="mt-1 text-[15px] text-ink">{item.title}</h2>
            </div>
          </article>
        ))}
      </div>

      {active && (
        <PlaygroundModal item={active} onClose={() => setOpenIndex(null)} />
      )}
    </>
  );
}
