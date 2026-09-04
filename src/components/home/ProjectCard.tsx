import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";

export default function ProjectCard({
  project,
  active,
}: {
  project: Project;
  active: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      tabIndex={active ? 0 : -1}
      aria-hidden={!active}
      className="relative flex h-full flex-col justify-end overflow-hidden rounded-3xl p-10 sm:p-12"
    >
      {project.thumbnail && (
        <>
          <div
            className={
              project.thumbnailHeight
                ? `absolute inset-x-0 top-0 ${project.thumbnailHeight}`
                : "absolute inset-0"
            }
          >
            <Image
              src={project.thumbnail}
              alt=""
              fill
              className={project.thumbnailScale ? "object-contain" : "object-cover"}
              style={
                project.thumbnailScale
                  ? { transform: `scale(${project.thumbnailScale})` }
                  : undefined
              }
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-white from-30% to-transparent" />
        </>
      )}
      <div className="relative z-10 flex items-center gap-2.5">
        {project.logo ? (
          <span className="relative h-7 w-7 shrink-0">
            <Image
              src={project.logo}
              alt=""
              fill
              className="object-contain"
            />
          </span>
        ) : (
          <span className="text-2xl leading-none">{project.emoji}</span>
        )}
        <h2 className="relative z-10 text-m text-ink">{project.name}</h2>
      </div>
      <p className="relative z-10 mt-3 max-w-2xl text-[15px] leading-relaxed text-ink/80">
        {project.tagline}
      </p>
    </Link>
  );
}
