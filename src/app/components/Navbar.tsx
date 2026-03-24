import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { SOCIAL_LINKS } from "../data/socialLinks";
import resumePdf from "../assets/resume.pdf";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        backgroundColor: isScrolled ? "rgba(251,232,216,0.94)" : "transparent",
        backdropFilter: isScrolled ? "blur(14px)" : "none",
        boxShadow: isScrolled ? "0 1px 16px rgba(23,58,43,0.07)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(23,58,43,0.06)" : "none",
        fontFamily: "Nunito, sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            fontFamily: "'Fraunces', serif",
            color: "#173A2B",
            fontSize: "1.1rem",
            fontStyle: "italic",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            letterSpacing: "0.01em",
          }}
        >
          Amtullah N.
        </button>

        {/* Right side: social icons + resume */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="hidden sm:block transition-opacity duration-200 hover:opacity-40"
              style={{ color: "#173A2B" }}
            >
              {s.icon}
            </a>
          ))}

          {/* Resume download — replace /resume.pdf with your hosted file path */}
          <a
            href={resumePdf}
            download="Amtullah_Naalwala_Resume.pdf"
            className="flex items-center gap-1.5 transition-all duration-200 hover:opacity-75"
            style={{
              backgroundColor: "#173A2B",
              color: "#FBE8D8",
              padding: "7px 16px",
              borderRadius: "100px",
              fontSize: "0.78rem",
              textDecoration: "none",
              fontFamily: "Nunito, sans-serif",
              fontWeight: "700",
              letterSpacing: "0.03em",
            }}
          >
            <Download size={13} strokeWidth={2.5} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
