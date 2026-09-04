"use client";

import { useState } from "react";
import SplitText from "@/components/SplitText";
import FlipWords from "@/components/FlipWords";
import PortfolioCharacter from "@/components/home/PortfolioCharacter";

export default function IntroCard() {
  const [phase, setPhase] = useState<"split" | "idle">("split");

  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-6 px-10 py-14 text-center">
      <p className="absolute left-1/2 top-10 -translate-x-1/2 text-[15px] text-muted">
        Katie Nhan Le
      </p>

      <div className="relative z-10 cursor-default select-none">
        {phase === "split" ? (
          <SplitText
            text="I'm Katie"
            className="text-3xl sm:text-4xl"
            delay={60}
            duration={0.75}
            ease="power3.out"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0}
            rootMargin="0px"
            textAlign="center"
            tag="p"
            onLetterAnimationComplete={() => setPhase("idle")}
          />
        ) : (
          <p className="text-3xl sm:text-4xl">
            I&rsquo;m{" "}
            <FlipWords
              words={["Katie", "a Designer", "a Creator"]}
              className="text-[#4682B4]"
              duration={2200}
            />
          </p>
        )}
      </div>

      <div className="h-56 w-56 sm:h-64 sm:w-64">
        <PortfolioCharacter />
      </div>

      <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[15px] text-muted">
        Current Grad Student @ USC
      </p>
    </div>
  );
}
