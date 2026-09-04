import TopNav from "@/components/TopNav";
import SocialDock from "@/components/SocialDock";
import HomeDeck from "@/components/home/HomeDeck";
import HomeDeckExit from "@/components/home/HomeDeckExit";
import SplitRevealGate from "@/components/SplitRevealGate";
import { projects } from "@/lib/data";

export default function Home() {
  const thumbnails = projects
    .map((p) => p.thumbnail)
    .filter((t): t is string => Boolean(t));

  return (
    <main className="min-h-dvh">
      <SplitRevealGate images={thumbnails} />
      <TopNav />
      <HomeDeckExit>
        <HomeDeck projects={projects} />
      </HomeDeckExit>
      <SocialDock />
    </main>
  );
}
