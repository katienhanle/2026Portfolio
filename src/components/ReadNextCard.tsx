"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ViewTransition } from "react";
import type { Project } from "@/lib/types";

export default function ReadNextCard({
  project,
  onNavigate,
}: {
  project: Project;
  onNavigate: (e: React.MouseEvent) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${project.slug}`}
      onClick={onNavigate}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block w-64 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
    >
      <ViewTransition name={`project-hero-${project.slug}`} share="project-morph">
        <div className="overflow-hidden rounded-2xl bg-card shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)]">
          <div className="relative aspect-[4/3] w-full bg-faint">
            {project.thumbnail && (
              <Image
                src={project.thumbnail}
                alt={project.name}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="px-4 py-3">
            <p className="text-[13px] text-muted">View Next:</p>
            <p className="text-[15px] text-ink">{project.name}</p>
          </div>
        </div>
      </ViewTransition>
    </Link>
  );
}
