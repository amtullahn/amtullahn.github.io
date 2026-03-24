import { Github, ExternalLink, ArrowUpRight, Download } from "lucide-react";
import resumePdf from "../assets/resume.pdf";

/* ── Palette ── */
const FOREST  = "#173A2B";
const SAGE    = "#5A7969";
const TERRA   = "#CB6B4D";
const PEACH   = "#FBE8D8";
const TAN     = "#E5C7B1";
const CARAMEL = "#BB885E";

/*
  TODO: Update project entries below with your real projects from your LinkedIn/portfolio.
  The experience entries are based on publicly available info — please verify and update.
*/
const PROJECTS = [
  {
    id: 1, number: "01", name: "Personal Portfolio (amtullahn.github.io)", status: "Live",
    description: "My personal portfolio website showcasing responsive UI, project case studies, and professional brand, built with React + TypeScript + Vite.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/amtullahn/amtullahn.github.io", demo: "https://amtullahn.github.io", accentColor: FOREST,
  },
  {
    id: 2, number: "02", name: "proxy-web-server", status: "Open Source",
    description: "A high-performance proxy web server implementation with request routing and configurable upstream host handling, written as a systems-level project.",
    tech: ["C++", "POSIX Sockets", "HTTP", "Makefile", "Linux"],
    github: "https://github.com/amtullahn/proxy-web-server", demo: "#", accentColor: TERRA,
  },
  {
    id: 3, number: "03", name: "server-client-system", status: "Completed",
    description: "Client-server text file transfer system including reliability checks and chunked data delivery, designed for network programming coursework.",
    tech: ["C", "TCP/IP", "Socket Programming", "Threading", "Unit Tests"],
    github: "https://github.com/amtullahn/server-client-system", demo: "#", accentColor: SAGE,
  },
  {
    id: 4, number: "04", name: "Spell-Checker", status: "Academic",
    description: "Advanced spell-check utility that detects swaps, missing/extra letters, and common typos, with correction suggestions and dictionary-based scoring.",
    tech: ["C++", "Algorithms", "Data Structures", "File I/O", "CLI"],
    github: "https://github.com/amtullahn/Spell-Checker", demo: "#", accentColor: CARAMEL,
  },
];

/*
  Experience is pre-filled based on your LinkedIn profile (linkedin.com/in/amtullahnaalwala).
  Please update company names, dates, and bullet points with your exact details.
*/
const EXPERIENCE = [
  {
    role: "Senior Software Engineer",
    company: "Ford Motor Company",
    period: "June 2021 — Present",
    location: "Dearborn, MI",
    bullets: [
      "Lead the development and modernization of Ford & Lincoln's global rewards platform, scaling active users by 78% (9M to 16M) by delivering high-impact React/TypeScript features and improving system scalability.",
      "Led migration of front-end applications from on-prem/PCF to Google Cloud Platform, re-architecting authentication (MSAL, Azure B2C, ADFS), routing (NGINX), and CI/CD pipelines (Tekton), improving system scalability and deployment reliability.",
      "Reduced build times by 94% (112s to 7s) and deployment times by 38% by upgrading to React 19, Webpack 5, and Node 22, significantly improving developer productivity and release velocity.",
      "Established scalable testing framework by implementing 438 unit tests (Vitest) and evaluating Playwright for end-to-end coverage, increasing code reliability and release confidence.",
    ],
    accent: FOREST,
  },
];

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  return (
    <div className="group transition-all duration-300 hover:-translate-y-1"
         style={{ backgroundColor: "#fff", borderRadius: "16px",
           border: "1px solid rgba(23,58,43,0.09)",
           boxShadow: "0 2px 16px rgba(23,58,43,0.06)" }}>
      <div style={{ height: "3px", borderRadius: "16px 16px 0 0",
        backgroundColor: project.accentColor, opacity: 0.7 }}/>
      <div style={{ padding: "24px" }}>
        <div className="flex items-center justify-between mb-4">
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: "1.6rem",
            color: "rgba(23,58,43,0.12)", fontWeight: "700", lineHeight: "1" }}>
            {project.number}
          </span>
          <span style={{ fontSize: "0.67rem", color: project.accentColor,
            backgroundColor: `${project.accentColor}14`, padding: "3px 11px",
            borderRadius: "100px", letterSpacing: "0.08em", fontWeight: "700" }}>
            {project.status}
          </span>
        </div>
        <h3 style={{ fontFamily: "'Fraunces', serif", color: FOREST,
          fontSize: "1.18rem", marginBottom: "10px" }}>
          {project.name}
        </h3>
        <p style={{ color: "#4A5E4A", fontSize: "0.86rem", lineHeight: "1.75", marginBottom: "18px" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map(t => (
            <span key={t} style={{ backgroundColor: PEACH, color: FOREST,
              padding: "3px 11px", borderRadius: "100px", fontSize: "0.74rem",
              border: "1px solid rgba(23,58,43,0.09)", fontWeight: "600" }}>
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 pt-4"
             style={{ borderTop: "1px solid rgba(23,58,43,0.08)" }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-1.5 transition-opacity hover:opacity-50"
             style={{ color: FOREST, fontSize: "0.8rem", textDecoration: "none", fontWeight: "700" }}>
            <Github size={14} strokeWidth={1.8}/> GitHub
          </a>
          <span style={{ color: TAN }}>·</span>
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-1.5 transition-opacity hover:opacity-50"
             style={{ color: project.accentColor, fontSize: "0.8rem",
               textDecoration: "none", fontWeight: "700" }}>
            <ExternalLink size={13} strokeWidth={2}/> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" style={{ backgroundColor: "#fff",
      fontFamily: "Nunito, sans-serif",
      padding: "clamp(64px, 10vw, 112px) clamp(20px, 6vw, 80px)" }}>

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <div style={{ width: "32px", height: "1.5px", backgroundColor: TERRA }}/>
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.22em", color: FOREST,
            textTransform: "uppercase", opacity: 0.55, fontWeight: "700" }}>
            Work
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-3">
          <h2 style={{ fontFamily: "'Fraunces', serif", color: FOREST,
            fontSize: "clamp(1.9rem, 4.8vw, 2.9rem)", fontStyle: "italic", lineHeight: "1.2" }}>
            Technical Projects
          </h2>
          <a href="https://github.com/amtullahnaalwala" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-1.5 transition-opacity hover:opacity-50 self-start sm:self-auto"
             style={{ color: FOREST, fontSize: "0.83rem", textDecoration: "none",
               flexShrink: 0, opacity: 0.65, fontWeight: "700" }}>
            GitHub <ArrowUpRight size={15} strokeWidth={2}/>
          </a>
        </div>

        <p style={{ color: FOREST, opacity: 0.55, fontSize: "0.93rem",
          marginBottom: "clamp(32px, 5vw, 52px)", maxWidth: "500px", lineHeight: "1.7" }}>
          A selection of projects I've built, shipped, or am currently developing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {PROJECTS.map(project => <ProjectCard key={project.id} project={project}/>)}
        </div>

        {/* Experience */}
        <div style={{ borderTop: `2px solid rgba(23,58,43,0.08)`, paddingTop: "clamp(40px, 6vw, 64px)" }}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <h3 style={{ fontFamily: "'Fraunces', serif", color: FOREST,
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontStyle: "italic" }}>
              Experience
            </h3>
            {/* Resume download — replace /resume.pdf with your hosted file */}
            <a href={resumePdf} download="Amtullah_Naalwala_Resume.pdf"
               className="flex items-center gap-2 transition-all duration-200 hover:opacity-70 self-start sm:self-auto"
               style={{ backgroundColor: FOREST, color: PEACH, padding: "10px 20px",
                 borderRadius: "100px", fontSize: "0.78rem", textDecoration: "none",
                 fontWeight: "700", letterSpacing: "0.03em", flexShrink: 0 }}>
              <Download size={13} strokeWidth={2.5}/> Download Resume
            </a>
          </div>

          <div className="flex flex-col gap-0">
            {EXPERIENCE.map((exp, idx) => (
              <div key={exp.role}
                   style={{ display: "flex", gap: "24px",
                     paddingBottom: idx < EXPERIENCE.length - 1 ? "40px" : "0",
                     borderBottom: idx < EXPERIENCE.length - 1 ? "1px solid rgba(23,58,43,0.08)" : "none",
                     marginBottom: idx < EXPERIENCE.length - 1 ? "40px" : "0" }}>
                <div style={{ flex: 1, paddingBottom: "4px" }}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <p style={{ fontFamily: "'Fraunces', serif", color: FOREST,
                        fontSize: "1.05rem", fontWeight: "600", marginBottom: "2px" }}>
                        {exp.role}
                      </p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span style={{ color: TERRA, fontSize: "0.85rem", fontWeight: "700" }}>
                          {exp.company}
                        </span>
                        <span style={{ color: CARAMEL, fontSize: "0.75rem" }}>·</span>
                        <span style={{ color: FOREST, fontSize: "0.78rem", opacity: 0.55 }}>
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span style={{ fontSize: "0.75rem", color: FOREST, backgroundColor: PEACH,
                      padding: "4px 13px", borderRadius: "100px", flexShrink: 0,
                      border: "1px solid rgba(23,58,43,0.08)", fontWeight: "600",
                      opacity: 0.85, alignSelf: "flex-start" }}>
                      {exp.period}
                    </span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {exp.bullets.map((b, i) => (
                      <li key={i} style={{ color: "#3D5248", fontSize: "0.87rem",
                        lineHeight: "1.75", marginBottom: "6px", paddingLeft: "16px",
                        position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: exp.accent,
                          fontSize: "0.55rem", top: "7px" }}>●</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
