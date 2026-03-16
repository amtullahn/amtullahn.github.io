import { BookOpen, Upload } from "lucide-react";

const FOREST  = "#173A2B";
const TERRA   = "#CB6B4D";
const PEACH   = "#FBE8D8";
const TAN     = "#E5C7B1";
const CARAMEL = "#BB885E";
const SAGE    = "#5A7969";

export function FlipbookSection() {
  return (
    <section
      id="flipbook"
      style={{
        backgroundColor: PEACH,
        fontFamily: "Nunito, sans-serif",
        padding: "clamp(64px, 10vw, 112px) clamp(20px, 6vw, 80px)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <div style={{ width: "32px", height: "1.5px", backgroundColor: TERRA }}/>
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.22em", color: FOREST,
            textTransform: "uppercase", opacity: 0.55, fontWeight: "700" }}>
            Interactive
          </span>
        </div>

        <h2 style={{ fontFamily: "'Fraunces', serif", color: FOREST,
          fontSize: "clamp(1.9rem, 4.8vw, 2.9rem)", fontStyle: "italic",
          lineHeight: "1.2", marginBottom: "12px" }}>
          My Flipbook
        </h2>

        <p style={{ color: FOREST, opacity: 0.5, fontSize: "0.93rem",
          marginBottom: "clamp(40px, 6vw, 64px)", maxWidth: "500px", lineHeight: "1.7" }}>
          A curated collection brought to life as an interactive magazine.
          Flip through it like you're holding the real thing — powered by Heyzine.
        </p>

        {/* Full-width embed */}
        <div style={{ position: "relative" }}>
          {/* Subtle layered shadow effect */}
          <div style={{ position: "absolute", top: "10px", left: "10px", right: "-10px",
            bottom: "-10px", backgroundColor: TAN, borderRadius: "16px", opacity: 0.5 }}/>
          <div style={{ position: "absolute", top: "5px", left: "5px", right: "-5px",
            bottom: "-5px", backgroundColor: CARAMEL, borderRadius: "16px", opacity: 0.2 }}/>

          <div style={{ position: "relative", backgroundColor: "#fff", borderRadius: "16px",
            border: "1px solid rgba(23,58,43,0.1)",
            boxShadow: "0 8px 32px rgba(23,58,43,0.08)", overflow: "hidden",
            aspectRatio: "16/9", display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center" }}>

            {/*
              When your Heyzine flipbook is ready, replace the placeholder below
              with your embed iframe:

              <iframe
                src="YOUR_HEYZINE_EMBED_URL"
                style={{ width: "100%", height: "100%", border: "none" }}
                allowFullScreen
              />
            */}

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center",
              gap: "20px", padding: "48px", textAlign: "center" }}>
              {/* Book illustration */}
              <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                   style={{ width: "140px" }}>
                <rect x="8" y="8" width="56" height="80" rx="4" fill={TAN}
                  stroke={FOREST} strokeWidth="1.5"/>
                <line x1="16" y1="24" x2="56" y2="24" stroke={TERRA} strokeWidth="1.5" opacity="0.6"/>
                <line x1="16" y1="34" x2="56" y2="34" stroke={TERRA} strokeWidth="1.5" opacity="0.45"/>
                <line x1="16" y1="44" x2="52" y2="44" stroke={TERRA} strokeWidth="1.5" opacity="0.45"/>
                <line x1="16" y1="54" x2="56" y2="54" stroke={TERRA} strokeWidth="1.5" opacity="0.35"/>
                <line x1="16" y1="64" x2="48" y2="64" stroke={TERRA} strokeWidth="1.5" opacity="0.3"/>
                <rect x="64" y="6" width="5" height="84" rx="2" fill={FOREST} opacity="0.35"/>
                <rect x="69" y="8" width="56" height="80" rx="4" fill="#FFF8F4"
                  stroke={FOREST} strokeWidth="1.5"/>
                <rect x="77" y="20" width="40" height="30" rx="3" fill={CARAMEL} opacity="0.25"/>
                <line x1="77" y1="58" x2="117" y2="58" stroke={FOREST} strokeWidth="1.5" opacity="0.4"/>
                <line x1="77" y1="67" x2="113" y2="67" stroke={FOREST} strokeWidth="1.5" opacity="0.3"/>
                <line x1="77" y1="76" x2="117" y2="76" stroke={FOREST} strokeWidth="1.5" opacity="0.25"/>
              </svg>

              <div>
                <h3 style={{ fontFamily: "'Fraunces', serif", color: FOREST,
                  fontSize: "1.3rem", marginBottom: "8px", fontStyle: "italic" }}>
                  Flipbook Coming Soon
                </h3>
                <p style={{ color: FOREST, opacity: 0.5, fontSize: "0.87rem",
                  lineHeight: "1.75", maxWidth: "380px" }}>
                  Currently assembling a magazine-style flipbook via Heyzine.
                  An embed will appear here once it's ready.
                </p>
              </div>

              <div className="flex items-center gap-2"
                   style={{ backgroundColor: TAN, padding: "10px 20px",
                     borderRadius: "100px", color: FOREST, fontSize: "0.78rem",
                     fontWeight: "700", opacity: 0.7 }}>
                <Upload size={13} strokeWidth={2}/> PDF upload in progress
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
