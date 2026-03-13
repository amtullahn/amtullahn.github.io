import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const T = "#577371";
const G = "#E6B079";
const O = "#BCA446";
const B = "#EFD6D5";
const SKY = "#BED2D5";
const CRM = "#FDECDF";

const PROJECTS = [
  {
    id: 1, number: "01", name: "Project Alpha", status: "Live",
    description: "A full-stack web application with real-time collaboration features. Built with a focus on performance, accessibility, and delightful micro-interactions.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets"],
    github: "#", demo: "#", accentColor: T, bgColor: SKY,
  },
  {
    id: 2, number: "02", name: "Project Beta", status: "Live",
    description: "A mobile-responsive data visualization dashboard that transforms complex datasets into clear, intuitive charts. Designed for non-technical stakeholders.",
    tech: ["Next.js", "D3.js", "Tailwind CSS", "Prisma", "Vercel"],
    github: "#", demo: "#", accentColor: O, bgColor: "#EDF0D5",
  },
  {
    id: 3, number: "03", name: "Project Gamma", status: "Open Source",
    description: "An open-source UI component library built with accessibility-first principles. Includes 40+ composable components with full TypeScript support.",
    tech: ["React", "Storybook", "Radix UI", "Vitest", "npm"],
    github: "#", demo: "#", accentColor: G, bgColor: "#FDF4E3",
  },
  {
    id: 4, number: "04", name: "Project Delta", status: "In Progress",
    description: "A browser extension that enhances the reading experience across the web — custom fonts, color themes, focus mode, and a reading time estimator.",
    tech: ["Vanilla JS", "Chrome Extension API", "CSS", "Webpack"],
    github: "#", demo: "#", accentColor: T, bgColor: SKY,
  },
];

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  return (
    <div className="group relative transition-all duration-300 hover:-translate-y-1"
         style={{ backgroundColor: "#fff", borderRadius: "22px",
           border: "1.5px solid rgba(87,115,113,0.1)",
           boxShadow: "0 4px 24px rgba(87,115,113,0.07)", overflow: "hidden" }}>
      <div style={{ height: "5px", backgroundColor: project.accentColor, opacity: 0.75 }}/>
      <div style={{ padding: "26px 26px 22px" }}>
        {/* Number + status */}
        <div className="flex items-center justify-between mb-4">
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: "1.8rem",
            color: "rgba(87,115,113,0.15)", fontWeight: "700", lineHeight: "1" }}>
            {project.number}
          </span>
          <span style={{ fontSize: "0.68rem", color: project.accentColor,
            backgroundColor: `${project.accentColor}18`, padding: "4px 12px",
            borderRadius: "100px", letterSpacing: "0.08em", fontWeight: "700" }}>
            {project.status}
          </span>
        </div>

        <h3 style={{ fontFamily: "'Fraunces', serif", color: T,
          fontSize: "1.28rem", marginBottom: "12px" }}>
          {project.name}
        </h3>

        <p style={{ color: "#4A6260", fontSize: "0.88rem", lineHeight: "1.75", marginBottom: "20px" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span key={t} style={{ backgroundColor: project.bgColor, color: T,
              padding: "4px 11px", borderRadius: "100px", fontSize: "0.74rem",
              border: `1.5px solid ${project.accentColor}28`, fontWeight: "600" }}>
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4"
             style={{ borderTop: "1px solid rgba(87,115,113,0.1)" }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 transition-all duration-200 hover:opacity-60"
             style={{ color: T, fontSize: "0.82rem", textDecoration: "none", fontWeight: "600" }}>
            <Github size={15} strokeWidth={1.8}/> GitHub
          </a>
          <span style={{ color: G }}>·</span>
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-1.5 transition-all duration-200 hover:opacity-60"
             style={{ color: project.accentColor, fontSize: "0.82rem",
               textDecoration: "none", fontWeight: "600" }}>
            <ExternalLink size={14} strokeWidth={2}/> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" style={{ backgroundColor: SKY,
      fontFamily: "Nunito, sans-serif",
      padding: "clamp(60px, 10vw, 110px) clamp(20px, 6vw, 80px)",
      position: "relative", overflow: "hidden" }}>
      {/* Decoration */}
      <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "300px",
        height: "300px", borderRadius: "50%", backgroundColor: "rgba(230,176,121,0.12)",
        pointerEvents: "none" }}/>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <div style={{ width: "36px", height: "2px", backgroundColor: O }}/>
          <span style={{ fontFamily: "Nunito, sans-serif", fontSize: "0.75rem",
            letterSpacing: "0.2em", color: T, textTransform: "uppercase", opacity: 0.75 }}>
            What I've built
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-3">
          <h2 style={{ fontFamily: "'Fraunces', serif", color: T,
            fontSize: "clamp(2rem, 5vw, 3rem)", fontStyle: "italic", lineHeight: "1.2" }}>
            Technical Projects ✦
          </h2>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-1.5 transition-all duration-200 hover:opacity-60 self-start sm:self-auto"
             style={{ color: T, fontSize: "0.85rem", textDecoration: "none",
               flexShrink: 0, opacity: 0.7 }}>
            View all on GitHub <ArrowUpRight size={16} strokeWidth={2}/>
          </a>
        </div>

        <p style={{ color: T, opacity: 0.65, fontSize: "0.95rem",
          marginBottom: "clamp(32px, 5vw, 52px)", maxWidth: "520px" }}>
          A selection of projects I've built, shipped, or am currently obsessing over.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map(project => <ProjectCard key={project.id} project={project}/>)}
        </div>

        {/* Experience */}
        <div style={{ marginTop: "clamp(48px, 8vw, 80px)", backgroundColor: "#fff",
          borderRadius: "24px", padding: "clamp(28px, 5vw, 48px)",
          border: "1.5px solid rgba(87,115,113,0.1)",
          boxShadow: "0 4px 24px rgba(87,115,113,0.07)" }}>
          <h3 style={{ fontFamily: "'Fraunces', serif", color: T,
            fontSize: "1.4rem", marginBottom: "24px", fontStyle: "italic" }}>
            Experience
          </h3>

          <div className="space-y-6">
            {[
              {
                role: "Software Engineer — Front End",
                company: "Company Name ✦ Placeholder",
                period: "2023 — Present",
                bullets: [
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
                  "Built and maintained core UI components used across 3 product surfaces.",
                  "Collaborated with design systems team to ship accessible, token-driven components.",
                ],
                accent: T,
              },
              {
                role: "Junior Frontend Developer",
                company: "Previous Company ✦ Placeholder",
                period: "2021 — 2023",
                bullets: [
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
                  "Rebuilt legacy product dashboard with React, reducing load time by ~40%.",
                  "Mentored intern cohort on React best practices and code review culture.",
                ],
                accent: O,
              },
            ].map(exp => (
              <div key={exp.role} className="flex gap-5"
                   style={{ paddingBottom: "24px", borderBottom: "1px solid rgba(87,115,113,0.1)" }}>
                <div style={{ width: "4px", flexShrink: 0, backgroundColor: exp.accent,
                  borderRadius: "100px", alignSelf: "stretch", opacity: 0.7 }}/>
                <div style={{ flex: 1 }}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <div>
                      <p style={{ fontFamily: "'Fraunces', serif", color: T,
                        fontSize: "1rem", fontWeight: "600" }}>{exp.role}</p>
                      <p style={{ color: O, fontSize: "0.83rem" }}>{exp.company}</p>
                    </div>
                    <span style={{ fontSize: "0.75rem", color: T, backgroundColor: SKY,
                      padding: "3px 12px", borderRadius: "100px", flexShrink: 0, opacity: 0.85 }}>
                      {exp.period}
                    </span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {exp.bullets.map((b, i) => (
                      <li key={i} style={{ color: "#4A6260", fontSize: "0.85rem",
                        lineHeight: "1.7", marginBottom: "4px", paddingLeft: "16px",
                        position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: exp.accent,
                          fontSize: "0.6rem", top: "6px" }}>✦</span>
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
