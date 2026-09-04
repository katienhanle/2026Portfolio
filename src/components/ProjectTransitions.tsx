"use client";

import { useState, ViewTransition } from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import ReadNextCard from "./ReadNextCard";
import type { Project } from "@/lib/types";

const EXIT_DURATION = 120;

export default function ProjectTransitions({
  currentSlug,
  nextProject,
  children,
}: {
  currentSlug: string;
  nextProject: Project;
  children: ReactNode;
}) {
  const router = useRouter();
  const [exiting, setExiting] = useState(false);

  const handleNext = (e: React.MouseEvent) => {
    if (exiting || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    setExiting(true);
    setTimeout(() => router.push(`/projects/${nextProject.slug}`), EXIT_DURATION);
  };

  return (
    <>
      <div className={exiting ? "home-deck-exit" : ""}>
        <ViewTransition name={`project-hero-${currentSlug}`} share="project-morph">
          {children}
        </ViewTransition>
      </div>

      <div className="mx-auto flex max-w-5xl justify-center py-10">
        <ReadNextCard project={nextProject} onNavigate={handleNext} />
      </div>
    </>
  );
}
