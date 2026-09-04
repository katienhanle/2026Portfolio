"use client";

import { useEffect, useState } from "react";
import SplitReveal from "@/components/animata/preloader/split-reveal";

const STORAGE_KEY = "katie-preloader-shown";

export default function SplitRevealGate({ images }: { images: string[] }) {
  const [show, setShow] = useState<boolean | null>(null);

  useEffect(() => {
    setShow(!sessionStorage.getItem(STORAGE_KEY));
  }, []);

  if (!show) return null;

  return (
    <SplitReveal
      images={images}
      backgroundColor="#e4e4e4"
      foregroundColor="#111111"
      revealDuration={0.85}
      holdMs={300}
      onComplete={() => {
        sessionStorage.setItem(STORAGE_KEY, "1");
        setShow(false);
      }}
    />
  );
}
