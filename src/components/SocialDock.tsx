const LINKEDIN_URL = "https://www.linkedin.com/"; // TODO: replace with profile URL
const INSTAGRAM_URL = "https://www.instagram.com/kqtei";
const EMAIL = "katienhanle@gmail.com";

function Circle({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-dock text-white transition-transform duration-200 hover:scale-110"
    >
      {children}
    </a>
  );
}

export default function SocialDock() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <Circle href={LINKEDIN_URL} label="LinkedIn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z" />
        </svg>
      </Circle>
      <Circle href={INSTAGRAM_URL} label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      </Circle>
      <Circle href={`mailto:${EMAIL}`} label="Email">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      </Circle>
    </div>
  );
}
