import { Github, Linkedin, Music, BookOpen, Heart } from "lucide-react";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const NAV = [
  { label: "About", id: "about" },
  { label: "Blog", href: "https://substack.com/@braindumpdigest" },
  { label: "Projects", id: "projects" },
  { label: "Flipbook", id: "flipbook" },
];

const SOCIALS = [
  { icon: <Github size={18} strokeWidth={1.8}/>, href: "https://github.com", label: "GitHub" },
  { icon: <Linkedin size={18} strokeWidth={1.8}/>, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <BookOpen size={18} strokeWidth={1.8}/>, href: "https://goodreads.com", label: "Goodreads" },
  { icon: <Music size={18} strokeWidth={1.8}/>, href: "https://spotify.com", label: "Spotify" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#577371", fontFamily: "Nunito, sans-serif",
      padding: "clamp(40px, 6vw, 70px) clamp(20px, 6vw, 80px) clamp(24px, 4vw, 40px)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10"
             style={{ borderBottom: "1px solid rgba(253,236,223,0.12)" }}>
          {/* Brand */}
          <div>
            <h3 style={{ fontFamily: "'Fraunces', serif", color: "#E6B079",
              fontSize: "1.5rem", fontStyle: "italic", marginBottom: "10px" }}>
              Amtullah N.
            </h3>
            <p style={{ color: "rgba(253,236,223,0.6)", fontSize: "0.85rem",
              lineHeight: "1.7", maxWidth: "240px" }}>
              Software engineer, front-end enthusiast, and occasional oversharer.
              Welcome to my corner of the internet.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ color: "rgba(253,236,223,0.38)", fontSize: "0.68rem",
              letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {NAV.map(n => (
                <button key={n.label}
                  onClick={() => n.id ? scrollTo(n.id) : window.open(n.href, "_blank")}
                  className="text-left transition-opacity hover:opacity-55"
                  style={{ color: "rgba(253,236,223,0.75)", fontSize: "0.88rem",
                    background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                  {n.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p style={{ color: "rgba(253,236,223,0.38)", fontSize: "0.68rem",
              letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
              Connect
            </p>
            <div className="flex gap-4 flex-wrap">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   aria-label={s.label}
                   className="transition-all duration-200 hover:opacity-50 hover:-translate-y-0.5"
                   style={{ color: "#E6B079" }}>
                  {s.icon}
                </a>
              ))}
            </div>
            <p style={{ color: "rgba(253,236,223,0.5)", fontSize: "0.82rem",
              marginTop: "18px", lineHeight: "1.6" }}>
              Open to collaborations, conversations,<br/>and coffee chats. ☕
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="flex items-center gap-1.5"
             style={{ color: "rgba(253,236,223,0.32)", fontSize: "0.78rem" }}>
            © 2025 Amtullah Naalwala · Made with{" "}
            <Heart size={12} fill="currentColor" style={{ color: "#E6B079" }}/> and lots of matcha
          </p>
          <p style={{ fontFamily: "'Fraunces', serif", color: "rgba(230,176,121,0.22)",
            fontSize: "0.75rem", fontStyle: "italic", letterSpacing: "0.06em" }}>
            ✦ Welcome to my virtual living room ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
