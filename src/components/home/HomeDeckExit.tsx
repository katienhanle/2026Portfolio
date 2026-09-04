"use client";

import { useEffect, useState } from "react";
import { onHomeDeckExit } from "@/lib/pageExitBus";

export default function HomeDeckExit({ children }: { children: React.ReactNode }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => onHomeDeckExit(() => setExiting(true)), []);

  return <div className={exiting ? "home-deck-exit" : ""}>{children}</div>;
}
