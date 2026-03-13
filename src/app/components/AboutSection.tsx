import { Github, Linkedin, Music, BookOpen, MapPin, Sparkles } from "lucide-react";

const SKILLS = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS", "Python"] },
  { category: "Frameworks", items: ["React", "Next.js", "Tailwind CSS", "Node.js", "Vue.js"] },
  { category: "Tools & Design", items: ["Git", "Figma", "VS Code", "GitHub", "Storybook"] },
  { category: "Currently Learning", items: ["Three.js", "WebGL", "Rust", "GraphQL"] },
];

const SOCIAL_LINKS = [
  { icon: <Github size={18} strokeWidth={1.8} />, label: "GitHub", href: "https://github.com" },
  { icon: <Linkedin size={18} strokeWidth={1.8} />, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: <BookOpen size={18} strokeWidth={1.8} />, label: "Goodreads", href: "https://goodreads.com" },
  { icon: <Music size={18} strokeWidth={1.8} />, label: "Spotify", href: "https://spotify.com" },
];

const FUN_FACTS = [
  "🌿 Plant parent of 12 (and counting)",
  "📚 Perpetually mid-way through 3 books",
  "☕ Oat milk latte or nothing",
  "🎨 Color palette obsessed",
];

/* ── Color tokens ── */
const T = "#577371";    // teal
const G = "#E6B079";    // golden
const O = "#BCA446";    // olive
const B = "#EFD6D5";    // blush
const SKY = "#BED2D5";  // sky blue
const CRM = "#FDECDF";  // cream

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: CRM,
        fontFamily: "Nunito, sans-serif",
        padding: "clamp(60px, 10vw, 110px) clamp(20px, 6vw, 80px)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <div style={{ width: "36px", height: "2px", backgroundColor: G }} />
          <span style={{ fontFamily: "Nunito, sans-serif", fontSize: "0.75rem",
            letterSpacing: "0.2em", color: T, textTransform: "uppercase", opacity: 0.75 }}>
            Get to know me
          </span>
        </div>

        {/* Heading */}
        <h2 style={{ fontFamily: "'Fraunces', serif", color: T,
          fontSize: "clamp(2rem, 5vw, 3rem)", fontStyle: "italic",
          marginBottom: "clamp(36px, 6vw, 60px)", lineHeight: "1.2" }}>
          About Me ✦
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — photo + identity */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6">
            {/* Photo */}
            <div style={{ position: "relative" }}>
              <div style={{ width: "220px", height: "220px", borderRadius: "50%",
                backgroundColor: SKY, display: "flex", alignItems: "center",
                justifyContent: "center", overflow: "hidden",
                border: `5px solid ${B}`,
                boxShadow: `0 8px 30px rgba(87,115,113,0.2), 6px 6px 0 ${G}`,
                position: "relative", zIndex: 1 }}>
                <div style={{ position: "absolute", inset: 0, display: "flex",
                  flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                  <span style={{ fontFamily: "'Fraunces', serif", fontSize: "2.8rem",
                    color: T, fontWeight: "600", lineHeight: "1" }}>AN</span>
                  <span style={{ fontFamily: "Nunito, sans-serif", fontSize: "0.62rem",
                    color: T, letterSpacing: "0.1em", opacity: 0.65 }}>photo coming soon</span>
                </div>
              </div>
              <div style={{ position: "absolute", bottom: "8px", right: "8px",
                width: "24px", height: "24px", borderRadius: "50%",
                backgroundColor: G, border: `3px solid ${T}`, zIndex: 2 }}/>
            </div>

            {/* Name + title */}
            <div className="text-center lg:text-left">
              <h3 style={{ fontFamily: "'Fraunces', serif", color: T,
                fontSize: "1.6rem", fontWeight: "600", marginBottom: "4px" }}>
                Amtullah Naalwala
              </h3>
              <p style={{ color: O, fontSize: "0.9rem", letterSpacing: "0.04em" }}>
                Software Engineer · Front-End Focus
              </p>
              <div className="flex items-center gap-1 justify-center lg:justify-start mt-2"
                   style={{ color: G, fontSize: "0.8rem" }}>
                <MapPin size={12} strokeWidth={2}/>
                <span style={{ color: T, opacity: 0.65 }}>Based wherever there's good coffee ☕</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   aria-label={s.label}
                   className="flex items-center gap-2 transition-all duration-200 hover:opacity-70 hover:-translate-y-0.5"
                   style={{ backgroundColor: SKY, color: T, padding: "8px 14px",
                     borderRadius: "100px", fontSize: "0.78rem", textDecoration: "none",
                     border: `1.5px solid rgba(87,115,113,0.2)` }}>
                  {s.icon}<span>{s.label}</span>
                </a>
              ))}
            </div>

            {/* Fun facts */}
            <div style={{ backgroundColor: B, borderRadius: "16px", padding: "18px 20px",
              border: "1.5px solid rgba(87,115,113,0.15)", width: "100%", maxWidth: "280px" }}>
              <div className="flex items-center gap-2 mb-3" style={{ color: O }}>
                <Sparkles size={14} strokeWidth={2}/>
                <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em",
                  textTransform: "uppercase", color: T, opacity: 0.7 }}>Fun facts</span>
              </div>
              {FUN_FACTS.map((fact) => (
                <p key={fact} style={{ fontSize: "0.82rem", color: T, marginBottom: "6px", opacity: 0.85 }}>
                  {fact}
                </p>
              ))}
            </div>
          </div>

          {/* Right — Bio + Skills */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Bio */}
            <div>
              <h4 style={{ fontFamily: "'Fraunces', serif", color: T,
                fontSize: "1.15rem", marginBottom: "14px", fontStyle: "italic" }}>
                Hey there! 👋
              </h4>
              <div style={{ color: "#4A6260", fontSize: "0.95rem", lineHeight: "1.85" }}>
                <p style={{ marginBottom: "14px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p style={{ marginBottom: "14px" }}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum. I love building things that
                  feel <em style={{ fontFamily: "'Fraunces', serif", color: T }}>alive</em> on the screen.
                </p>
                <p>
                  When I'm not deep in a codebase, you'll find me journaling on Substack, curled up
                  with a book, or obsessively rearranging my plants. I believe great software is
                  where technical excellence meets genuine warmth.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 style={{ fontFamily: "'Fraunces', serif", color: T,
                fontSize: "1.15rem", marginBottom: "20px", fontStyle: "italic" }}>
                Skills & Tech Stack
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {SKILLS.map((group) => (
                  <div key={group.category}>
                    <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: O,
                      textTransform: "uppercase", marginBottom: "10px", fontWeight: "700" }}>
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span key={skill} style={{ backgroundColor: SKY, color: T,
                          padding: "4px 12px", borderRadius: "100px", fontSize: "0.78rem",
                          border: `1.5px solid rgba(87,115,113,0.2)` }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", color: G }}>
              <div style={{ flex: 1, height: "1px", backgroundColor: G, opacity: 0.35 }}/>
              <span style={{ fontSize: "1rem", opacity: 0.6 }}>✦ ✦ ✦</span>
              <div style={{ flex: 1, height: "1px", backgroundColor: G, opacity: 0.35 }}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
