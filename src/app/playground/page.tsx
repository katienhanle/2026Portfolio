import TopNav from "@/components/TopNav";
import SocialDock from "@/components/SocialDock";
import PlaygroundGrid from "@/components/playground/PlaygroundGrid";
import { playgroundItems } from "@/lib/data";

export const metadata = { title: "Playground — Katie Nhan Le" };

export default function PlaygroundPage() {
  return (
    <div className="min-h-dvh">
      <TopNav page="Playground" />

      <main className="px-6 pb-28 pt-2 sm:px-10">
        <PlaygroundGrid items={playgroundItems} />
      </main>

      <SocialDock />
    </div>
  );
}
