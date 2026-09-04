"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

export default function ChapterNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const revealed = active !== (items[0]?.id ?? "");

  return (
    <nav
      aria-label="Case study sections"
      className={`fixed left-10 top-1/2 hidden -translate-y-1/2 flex-col gap-4 transition-opacity duration-500 xl:flex ${
        revealed ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={`transition-all duration-300 ${
              isActive
                ? "text-[15.5px] font-semibold text-ink"
                : "text-[15px] font-normal text-ink/50 hover:text-ink/80"
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
