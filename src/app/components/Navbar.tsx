import { useState, useEffect } from "react";
import { Github, Linkedin, Music, BookOpen } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: <Github size={17} strokeWidth={1.8} />, href: "https://github.com", label: "GitHub" },
  { icon: <Linkedin size={17} strokeWidth={1.8} />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <BookOpen size={17} strokeWidth={1.8} />, href: "https://goodreads.com", label: "Goodreads" },
  { icon: <Music size={17} strokeWidth={1.8} />, href: "https://spotify.com", label: "Spotify" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        backgroundColor: isScrolled ? "rgba(190,210,213,0.92)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        boxShadow: isScrolled ? "0 1px 20px rgba(87,115,113,0.1)" : "none",
        fontFamily: "Nunito, sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            fontFamily: "'Fraunces', serif",
            color: "#577371",
            fontSize: "1.15rem",
            fontStyle: "italic",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          Amtullah N.
        </button>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="transition-opacity duration-200 hover:opacity-50"
              style={{ color: "#577371" }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
