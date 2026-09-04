"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, ViewTransition } from "react";
import { emitHomeDeckExit } from "@/lib/pageExitBus";

const RESUME_URL = "/Resume_Katie_Nhan_Le_Product_Designer_2026-09.pdf";
const EXIT_DURATION = 500;

function useScrolledPastTop(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

function Logo() {
  return (
    <Image
      src="/favicon_KL.png"
      alt=""
      width={20}
      height={20}
      className="rounded-[5px]"
      aria-hidden
    />
  );
}

/**
 * page === undefined -> home variant (centered: About / Playground / Resume)
 * page provided       -> subpage variant (Home logo left, "Katie Nhan Le  ·  <page>")
 */
export default function TopNav({ page }: { page?: string }) {
  const scrolled = useScrolledPastTop();
  const router = useRouter();
  const [exitingTo, setExitingTo] = useState<"about" | "playground" | null>(null);

  function navigateWithExit(e: React.MouseEvent, href: string, key: "about" | "playground") {
    if (exitingTo || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    setExitingTo(key);
    emitHomeDeckExit();
    setTimeout(() => router.push(href), EXIT_DURATION);
  }

  if (!page) {
    return (
      <header
        className={`fixed inset-x-0 top-6 z-30 flex justify-center pt-7 transition-all duration-300 ${
          scrolled ? "-translate-y-4 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
      >
        <nav className="flex items-center gap-7 text-[15px] text-ink">
          <ViewTransition name="nav-about-label">
            <Link
              href="/about"
              onClick={(e) => navigateWithExit(e, "/about", "about")}
              className={`transition-opacity hover:opacity-60 ${
                exitingTo === "playground" ? "nav-fly-out" : ""
              }`}
            >
              About
            </Link>
          </ViewTransition>
          <ViewTransition name="nav-playground-label">
            <Link
              href="/playground"
              onClick={(e) => navigateWithExit(e, "/playground", "playground")}
              className={`transition-opacity hover:opacity-60 ${
                exitingTo === "about" ? "nav-fly-out" : ""
              }`}
            >
              Playground
            </Link>
          </ViewTransition>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-opacity hover:opacity-60 ${exitingTo ? "nav-fly-out" : ""}`}
          >
            Resume
          </a>
        </nav>
      </header>
    );
  }

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between bg-gradient-to-b from-canvas via-canvas/70 to-transparent px-6 pb-10 pt-[52px] transition-all duration-300 sm:px-10 ${
        scrolled ? "-translate-y-4 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      <Link
        href="/"
        className="flex items-center gap-2 text-[15px] text-ink transition-opacity hover:opacity-60"
      >
        <Logo />
        Home
      </Link>
      <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3 text-[15px]">
        <Link href="/" className="nav-fade-in-down text-dock transition-opacity hover:opacity-60">
          Katie Nhan Le
        </Link>
        {page === "About" ? (
          <ViewTransition name="nav-about-label">
            <span className="text-ink">{page}</span>
          </ViewTransition>
        ) : page === "Playground" ? (
          <ViewTransition name="nav-playground-label">
            <span className="text-ink">{page}</span>
          </ViewTransition>
        ) : (
          <span className="text-ink">{page}</span>
        )}
      </div>
      <span className="w-[72px]" aria-hidden />
    </header>
  );
}
