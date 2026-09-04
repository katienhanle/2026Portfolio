export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ animation: "fade-in 0.35s ease forwards" }}>
      {children}
    </div>
  );
}
