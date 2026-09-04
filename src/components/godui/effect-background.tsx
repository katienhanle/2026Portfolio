import type { CSSProperties } from "react";

interface EffectBackgroundProps {
  style?: CSSProperties;
  className?: string;
}

export function EffectBackground({ style, className = "" }: EffectBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute -inset-[20%] animate-[effect-drift_18s_ease-in-out_infinite]"
        style={style}
      />
    </div>
  );
}
