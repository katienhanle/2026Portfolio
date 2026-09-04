import type { Project } from "@/lib/types";
import IntroCard from "./IntroCard";
import ProjectCard from "./ProjectCard";
import BackToTopButton from "@/components/BackToTopButton";

export default function HomeDeck({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col gap-5 px-6 pb-16 pt-24">
      <div className="mx-auto w-full max-w-5xl">
        <div className="h-[72vh] max-h-[660px] rounded-3xl bg-card">
          <IntroCard />
        </div>
      </div>

      {projects.map((project) => (
        <div key={project.slug} className="mx-auto w-full max-w-5xl">
          <div className="h-[72vh] max-h-[660px] rounded-3xl bg-card">
            <ProjectCard project={project} active={true} />
          </div>
        </div>
      ))}

      <div className="flex justify-center py-10">
        <BackToTopButton />
      </div>
    </div>
  );
}
