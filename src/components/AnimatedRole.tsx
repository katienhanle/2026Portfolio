"use client";

import { useEffect, useState } from "react";

const ROLES = ["Designer", "Creator", "Creative"];

export default function AnimatedRole() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hold = setInterval(() => {
      setVisible(false);
      const swap = setTimeout(() => {
        setIndex((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, 280);
      return () => clearTimeout(swap);
    }, 2200);
    return () => clearInterval(hold);
  }, []);

  return (
    <span
      className={`font-bold transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
      }`}
    >
      {ROLES[index]}
    </span>
  );
}
