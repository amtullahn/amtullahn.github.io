import { Github, Linkedin, Music, BookOpen, Heart } from "lucide-react";

const FOREST  = "#173A2B";
const TERRA   = "#CB6B4D";
const PEACH   = "#FBE8D8";
const TAN     = "#E5C7B1";
const CARAMEL = "#BB885E";
const SAGE    = "#5A7969";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const NAV = [
  { label: "About",    action: () => scrollTo("about") },
  { label: "Blog",     action: () => window.open("https://substack.com/@braindumpdigest", "_blank") },
  { label: "Projects", action: () => scrollTo("projects") },
  { label: "Flipbook", action: () => scrollTo("flipbook") },
];

const SOCIALS = [
  { icon: <Github size={17} strokeWidth={1.8}/>,   href: "https://github.com/amtullahnaalwala",         label: "GitHub" },
  { icon: <Linkedin size={17} strokeWidth={1.8}/>, href: "https://linkedin.com/in/amtullahnaalwala",    label: "LinkedIn" },
  { icon: <BookOpen size={17} strokeWidth={1.8}/>, href: "https://goodreads.com",                       label: "Goodreads" },
  { icon: <Music size={17} strokeWidth={1.8}/>,    href: "https://spotify.com",                         label: "Spotify" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: FOREST, fontFamily: "Nunito, sans-serif",
      padding: "clamp(48px, 7vw, 80px) clamp(20px, 6vw, 80px) clamp(28px, 4vw, 44px)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10"
             style={{ borderBottom: "1px solid rgba(251,232,216,0.1)" }}>

          {/* Brand */}
          <div>
            <h3 style={{ fontFamily: "'Fraunces', serif", color: CARAMEL,
              fontSize: "1.45rem", fontStyle: "italic", marginBottom: "10px" }}>
              Amtullah N.
            </h3>
            <p style={{ color: "rgba(251,232,216,0.5)", fontSize: "0.85rem",
              lineHeight: "1.72", maxWidth: "230px" }}>
              Software engineer with a front-end focus. Building things that feel
              as good as they look.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p style={{ color: "rgba(251,232,216,0.3)", fontSize: "0.66rem",
              letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px",
              fontWeight: "700" }}>
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {NAV.map(n => (
                <button key={n.label} onClick={n.action}
                  className="text-left transition-opacity hover:opacity-50"
                  style={{ color: "rgba(251,232,216,0.65)", fontSize: "0.88rem",
                    background: "none", border: "none", cursor: "pointer", padding: 0,
                    fontFamily: "Nunito, sans-serif" }}>
                  {n.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p style={{ color: "rgba(251,232,216,0.3)", fontSize: "0.66rem",
              letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px",
              fontWeight: "700" }}>
              Connect
            </p>
            <div className="flex gap-4 flex-wrap mb-5">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   aria-label={s.label}
                   className="transition-opacity hover:opacity-40"
                   style={{ color: CARAMEL }}>
                  {s.icon}
                </a>
              ))}
            </div>
            <p style={{ color: "rgba(251,232,216,0.4)", fontSize: "0.82rem", lineHeight: "1.65" }}>
              Open to collaborations and conversations.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-7">
          <p className="flex items-center gap-1.5"
             style={{ color: "rgba(251,232,216,0.25)", fontSize: "0.76rem" }}>
            © 2025 Amtullah Naalwala · Made with
            <Heart size={11} fill="currentColor" style={{ color: TERRA }}/>
          </p>
          <p style={{ fontFamily: "'Fraunces', serif", color: "rgba(187,136,94,0.2)",
            fontSize: "0.75rem", fontStyle: "italic", letterSpacing: "0.04em" }}>
            My Virtual Living Room
          </p>
        </div>
      </div>
    </footer>
  );
}
