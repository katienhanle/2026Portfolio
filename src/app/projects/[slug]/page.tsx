import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import TopNav from "@/components/TopNav";
import ChapterNav from "@/components/ChapterNav";
import BackToTopButton from "@/components/BackToTopButton";
import ScrollFreezeVideo from "@/components/ScrollFreezeVideo";
import ProjectTransitions from "@/components/ProjectTransitions";
import { getProject, getNextProject, projects } from "@/lib/data";

function renderInline(text: string) {
  return text
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.name} — Katie Nhan Le` : "Project" };
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-6">
      <p className="text-[15px] text-muted">{label}</p>
      <p className="mt-1 text-[15px] leading-relaxed">{value}</p>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const navItems = project.chapters.map((c) => ({ id: c.id, label: c.label }));
  const bodyChapters = project.chapters.filter((c) => c.id !== "overview");
  const nextProject = getNextProject(project.slug);

  return (
    <div className="min-h-dvh">
      <TopNav page={project.name} />

      <ChapterNav items={navItems} />

      <main className="px-4 pb-32 sm:px-6">
        <ProjectTransitions currentSlug={project.slug} nextProject={nextProject}>
        <article className="mx-auto max-w-5xl rounded-3xl bg-card px-6 py-12 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)] sm:px-14 sm:py-16">
          {/* Header */}
          <section id="overview" className="scroll-mt-28">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h1 className="text-[20px] leading-snug">{project.name}</h1>
                {project.subtitle && (
                  <p className="mt-1 text-[15px] text-muted">
                    {project.subtitle}
                  </p>
                )}
                <div className="mt-8">
                  <p className="text-[15px] text-muted">Overview</p>
                  <p className="mt-1 text-[15px] leading-relaxed">
                    {project.overview}
                  </p>
                </div>
                <Meta label="Timeline" value={project.timeline} />
                <Meta label="My Role" value={project.role} />
                <Meta label="Client" value={project.client} />
                {project.stack && <Meta label="Stack" value={project.stack} />}
              </div>
              <div
                className={`relative aspect-square w-full self-start overflow-hidden rounded-2xl md:aspect-auto md:min-h-[420px] ${
                  project.caseImage ? "" : "bg-faint"
                }`}
              >
                {project.caseImage && (
                  <Image
                    src={project.caseImage}
                    alt={project.name}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
            </div>
          </section>

          <hr className="my-14 border-neutral-200" />

          {/* Chapters */}
          <div className="space-y-16">
            {bodyChapters.map((chapter) => (
              <section
                key={chapter.id}
                id={chapter.id}
                className="scroll-mt-28"
              >
                <p className="text-[15px] text-muted">{chapter.label}</p>
                <h2 className="mt-2 text-[20px]">{chapter.heading}</h2>
                <div className="mt-5 space-y-10">
                  {chapter.sections.map((section, si) => (
                    <div key={si} className="space-y-5">
                      {section.subtitle && (
                        <h3 className="text-[16px] font-semibold">
                          {section.subtitle}
                        </h3>
                      )}
                      {section.body.map((block, bi) => {
                        if (typeof block === "string") {
                          return (
                            <p key={bi} className="text-[15px] leading-relaxed">
                              {renderInline(block)}
                            </p>
                          );
                        }
                        if ("italic" in block) {
                          return (
                            <p
                              key={bi}
                              className="text-[15px] italic leading-relaxed text-muted"
                            >
                              {block.italic}
                            </p>
                          );
                        }
                        if ("quote" in block) {
                          return (
                            <p
                              key={bi}
                              className="rounded-2xl bg-faint px-5 py-5 text-[15px] italic leading-relaxed text-ink/80"
                            >
                              {block.quote}
                            </p>
                          );
                        }
                        if ("list" in block) {
                          return (
                            <ul
                              key={bi}
                              className="list-disc space-y-3 rounded-2xl bg-faint px-5 py-5 pl-9"
                            >
                              {block.list.map((item, li) => (
                                <li
                                  key={li}
                                  className="text-[15px] leading-relaxed text-ink/80"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        if ("gif" in block) {
                          return (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              key={bi}
                              src={block.gif}
                              alt=""
                              className="w-full rounded-2xl"
                            />
                          );
                        }
                        if ("video" in block) {
                          return (
                            <ScrollFreezeVideo
                              key={bi}
                              src={block.video}
                              freezeAt={block.freezeAt}
                            />
                          );
                        }
                        if (block.photo === true) {
                          return (
                            <div
                              key={bi}
                              className="aspect-video w-full rounded-2xl bg-faint"
                            />
                          );
                        }
                        return (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={bi}
                            src={block.photo}
                            alt=""
                            className="mx-auto block rounded-2xl"
                            style={{
                              width: `${(block.scale ?? 1) * 100}%`,
                            }}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
        </ProjectTransitions>

        <div className="mx-auto flex max-w-5xl justify-center py-10">
          <BackToTopButton />
        </div>
      </main>
    </div>
  );
}
