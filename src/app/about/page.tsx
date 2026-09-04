import TopNav from "@/components/TopNav";
import SocialDock from "@/components/SocialDock";
import AboutSlideshow from "@/components/AboutSlideshow";
import { aboutPhotoCount } from "@/lib/data";

export const metadata = { title: "About — Katie Nhan Le" };

// ── Edit your info here ──────────────────────────────────────────────────────

const experiences = [
  { company: "Kato.8 Studios", role: "Social Media Manager", year: "2026" },
  { company: "Ao Dai Festival", role: "Website Designer", year: "2025" },
];

const education = [
  { school: "University of Southern California", degree: "M.S. Integrated Design, Business, and Technology", years: "2026" },
  { school: "University of California, San Diego", degree: "B.S. Cognitive Science (Design & Interface)", years: "2023 - 2025" },

];

const captions = [
  "this is me!",
  "i have a hobby of doodling my team.. you next?",
  "attended the bts concert in oakland",
  "hoorayyy!",
  "went to the international dance league in NY!",
  "got to collab with p1harmony, a kpop group",
];

const contact = {
  linkedin: "https://www.linkedin.com/in/katienhanle/",
  instagram: "https://www.instagram.com/kqtei",
  email: "katienhanle@gmail.com",
};

// ────────────────────────────────────────────────────────────────────────────

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="shrink-0 text-[15px]">{label}</span>
      <hr className="flex-1 border-neutral-200" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-dvh">
      <TopNav page="About" />

      <main className="px-6 pb-28 pt-8">
        <div className="card-enter-right mx-auto max-w-5xl rounded-3xl bg-card px-8 py-14 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)] sm:px-16">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-[15px]">Hi, I&rsquo;m Katie.</h1>
            <p className="mt-1 text-[15px] text-muted">
              UX Designer | Content Creator
            </p>

            <p className="mt-6 text-[15px] leading-relaxed">
              I lead social media management at Kato.8 Studios and previously led the
              website design for the Áo Dài Festival (ADF8) in San Jose. I have
              grown an audience of over 2 million viewers across my platforms,
              focusing on lifestyle and dance content.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed">
              Outside of design and content, you can find me collecting DC
              comics, watching videos of cats, or catching up on my favorite
              anime.
            </p>

            <AboutSlideshow count={aboutPhotoCount} captions={captions} />

            {/* Experiences */}
            <div className="mt-14 space-y-5">
              <SectionHeader label="Experiences" />
              {experiences.map((item, i) => (
                <div key={i} className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[15px]">{item.company}</span>
                    <span className="text-[15px] text-muted">{item.role}</span>
                  </div>
                  <span className="text-[15px] text-muted">{item.year}</span>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-14 space-y-5">
              <SectionHeader label="Education" />
              {education.map((item, i) => (
                <div key={i} className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[15px]">{item.school}</span>
                    <span className="text-[15px] text-muted">{item.degree}</span>
                  </div>
                  <span className="text-[15px] text-muted">{item.years}</span>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-14 space-y-5">
              <SectionHeader label="Contact" />
              <div className="flex items-center gap-3 text-[15px]">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-60"
                >
                  LinkedIn
                </a>
                <span className="text-muted">|</span>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-60"
                >
                  Instagram
                </a>
                <span className="text-muted">|</span>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-opacity hover:opacity-60"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SocialDock />
    </div>
  );
}
