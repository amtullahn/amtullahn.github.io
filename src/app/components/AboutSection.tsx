import { MapPin, Download } from "lucide-react";
import { SOCIAL_LINKS } from "../data/socialLinks";

/* ── Palette ── */
const FOREST = "#173A2B";
const SAGE   = "#5A7969";
const TERRA  = "#CB6B4D";
const PEACH  = "#FBE8D8";
const TAN    = "#E5C7B1";
const CARAMEL = "#BB885E";

const SKILLS = [
  { category: "Languages",        items: ["JavaScript", "TypeScript", "HTML/CSS", "Python"] },
  { category: "Frameworks",       items: ["React", "Next.js", "Vue.js", "Node.js"] },
  { category: "Tooling & Design", items: ["Figma", "Git", "Tailwind CSS", "Storybook", "Webpack"] },
  { category: "Currently Exploring", items: ["Three.js", "Accessibility (WCAG)", "Design Systems"] },
];

import meImage from "../assets/me.png";


export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: PEACH,
        fontFamily: "Nunito, sans-serif",
        padding: "clamp(64px, 10vw, 112px) clamp(20px, 6vw, 80px)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-3">
          <div style={{ width: "32px", height: "1.5px", backgroundColor: TERRA }} />
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.22em", color: FOREST,
            textTransform: "uppercase", opacity: 0.55, fontWeight: "700" }}>
            About
          </span>
        </div>

        <h2 style={{ fontFamily: "'Fraunces', serif", color: FOREST,
          fontSize: "clamp(1.9rem, 4.8vw, 2.9rem)", fontStyle: "italic",
          marginBottom: "clamp(40px, 6vw, 64px)", lineHeight: "1.2" }}>
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left — identity */}
          <div className="lg:col-span-2 flex flex-col gap-7">
            {/* Photo (imported from assets/me.png) */}
            <div style={{ position: "relative", alignSelf: "flex-start" }}>
              <div style={{ width: "250px", height: "250px" }}>
                <img
                  src={meImage}
                  alt="Amtullah Naalwala"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>

            {/* Name + role */}
            <div>
              <h3 style={{ fontFamily: "'Fraunces', serif", color: FOREST,
                fontSize: "1.5rem", fontWeight: "600", marginBottom: "4px" }}>
                Amtullah Naalwala
              </h3>
              <p style={{ color: TERRA, fontSize: "0.88rem", fontWeight: "700",
                letterSpacing: "0.04em", marginBottom: "8px" }}>
                Software Engineer — Front-End
              </p>
              <div className="flex items-center gap-1.5" style={{ color: CARAMEL, fontSize: "0.82rem" }}>
                <MapPin size={12} strokeWidth={2}/>
                <span style={{ color: FOREST, opacity: 0.55 }}>Open to remote &amp; hybrid roles</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   aria-label={s.label}
                   className="flex items-center gap-2 transition-all duration-200 hover:opacity-60"
                   style={{ backgroundColor: "#fff", color: FOREST, padding: "8px 14px",
                     borderRadius: "100px", fontSize: "0.78rem", textDecoration: "none",
                     border: "1px solid rgba(23,58,43,0.1)", fontWeight: "600" }}>
                  {s.icon} {s.label}
                </a>
              ))}
            </div>

            {/* Resume download */}
            {/* Replace /resume.pdf with the path to your hosted resume */}
            <a href="/resume.pdf" download="Amtullah_Naalwala_Resume.pdf"
               className="flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-75"
               style={{ backgroundColor: FOREST, color: PEACH, padding: "13px 24px",
                 borderRadius: "10px", fontSize: "0.84rem", textDecoration: "none",
                 fontWeight: "700", letterSpacing: "0.03em", maxWidth: "240px",
                 boxShadow: "0 4px 16px rgba(23,58,43,0.2)" }}>
              <Download size={15} strokeWidth={2.5}/> Download Resume
            </a>
          </div>

          {/* Right — bio + skills */}
          <div className="lg:col-span-3 flex flex-col gap-10">
            {/* Bio */}
            <div>
              <h4 style={{ fontFamily: "'Fraunces', serif", color: FOREST,
                fontSize: "1.1rem", marginBottom: "14px" }}>
                Hi, I'm Amtullah
              </h4>
              <div style={{ color: "#3D5248", fontSize: "0.92rem", lineHeight: "1.85" }}>
                {/*
                  TODO: Update this bio with your actual intro from LinkedIn or preferred copy.
                  Below is a placeholder based on your profile.
                */}
                <p style={{ marginBottom: "14px" }}>
                  I'm a software engineer with a focus on front-end development, passionate about
                  building polished, accessible, and user-centered web experiences. I care deeply
                  about the craft — from design systems and component architecture to the small
                  details that make interfaces feel effortless.
                </p>
                <p>
                  Outside of code, I write on Substack, read voraciously, and tend to an ever-growing
                  collection of houseplants. I believe the best products are built at the intersection
                  of technical rigor and genuine empathy for the people using them.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 style={{ fontFamily: "'Fraunces', serif", color: FOREST,
                fontSize: "1.1rem", marginBottom: "18px" }}>
                Skills &amp; Tech Stack
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {SKILLS.map((group) => (
                  <div key={group.category}>
                    <p style={{ fontSize: "0.68rem", letterSpacing: "0.16em", color: TERRA,
                      textTransform: "uppercase", marginBottom: "10px", fontWeight: "700" }}>
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span key={skill} style={{ backgroundColor: "#fff", color: FOREST,
                          padding: "4px 12px", borderRadius: "100px", fontSize: "0.78rem",
                          border: "1px solid rgba(23,58,43,0.1)", fontWeight: "600" }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ height: "1px", backgroundColor: "rgba(23,58,43,0.08)" }}/>
          </div>
        </div>
      </div>
    </section>
  );
}
