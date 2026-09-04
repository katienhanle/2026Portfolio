import PortfolioCharacter from "@/components/home/PortfolioCharacter";

export default function IntroCard() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-6 px-10 py-14 text-center">
      <p className="absolute left-1/2 top-10 -translate-x-1/2 text-[15px] text-muted">
        Katie Nhan Le
      </p>

      <div className="relative z-10 cursor-default select-none">
        <p className="text-3xl sm:text-4xl">
          I&rsquo;m <span className="text-[#4682B4]">Katie</span>
        </p>
      </div>

      <div className="h-56 w-56 sm:h-64 sm:w-64">
        <PortfolioCharacter />
      </div>

      <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[15px] text-muted">
        Current Grad Student @ USC
      </p>
    </div>
  );
}
