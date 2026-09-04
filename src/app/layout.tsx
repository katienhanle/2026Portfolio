import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { EffectBackground } from "@/components/godui/effect-background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Katie Nhan Le",
  description: "UX Designer & Content Creator — portfolio of Katie Nhan Le.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-full bg-canvas text-ink">
        <div className="fixed inset-0 -z-10">
          <EffectBackground
            style={{
              backgroundImage:
                "radial-gradient(circle at top left, rgba(70, 130, 180, 0.5), transparent 70%)",
              filter: "blur(80px)",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#e4e4e4",
            }}
          />
        </div>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
