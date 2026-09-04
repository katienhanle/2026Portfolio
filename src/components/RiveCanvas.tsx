"use client";

import { useRive, Layout, Fit } from "@rive-app/react-webgl2";

export default function RiveCanvas({
  src,
  stateMachine = "State Machine 1",
  className = "h-full w-full",
}: {
  src: string;
  stateMachine?: string;
  className?: string;
}) {
  const { RiveComponent } = useRive({
    src,
    stateMachines: stateMachine,
    autoplay: true,
    layout: new Layout({ fit: Fit.Contain }),
  });

  return <RiveComponent className={className} />;
}
