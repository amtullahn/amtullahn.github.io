import { BookOpen, Upload, ExternalLink } from "lucide-react";

const T = "#577371";
const G = "#E6B079";
const O = "#BCA446";
const B = "#EFD6D5";
const CRM = "#FDECDF";

export function FlipbookSection() {
  return (
    <section
      id="flipbook"
      style={{
        backgroundColor: CRM,
        fontFamily: "Nunito, sans-serif",
        padding: "clamp(60px, 10vw, 110px) clamp(20px, 6vw, 80px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blob */}
      <div style={{ position: "absolute", top: "-100px", left: "50%",
        transform: "translateX(-50%)", width: "600px", height: "600px",
        borderRadius: "50%", backgroundColor: "rgba(87,115,113,0.04)", pointerEvents: "none" }}/>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <div style={{ width: "36px", height: "2px", backgroundColor: G }}/>
          <span style={{ fontFamily: "Nunito, sans-serif", fontSize: "0.75rem",
            letterSpacing: "0.2em", color: T, textTransform: "uppercase", opacity: 0.75 }}>
            Interactive Reading
          </span>
        </div>

        <h2 style={{ fontFamily: "'Fraunces', serif", color: T,
          fontSize: "clamp(2rem, 5vw, 3rem)", fontStyle: "italic",
          lineHeight: "1.2", marginBottom: "12px" }}>
          My Flipbook ✦
        </h2>

        <p style={{ color: T, opacity: 0.65, fontSize: "0.95rem",
          marginBottom: "clamp(40px, 6vw, 60px)", maxWidth: "520px" }}>
          A curated collection brought to life as an interactive magazine — flip through it like
          you're holding the real thing. Powered by Heyzine.
        </p>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Embed area */}
          <div style={{ flex: "1 1 600px", position: "relative" }}>
            {/* Page shadow layers */}
            <div style={{ position: "absolute", top: "12px", left: "12px", right: "-12px",
              bottom: "-12px", backgroundColor: G, borderRadius: "16px", opacity: 0.2 }}/>
            <div style={{ position: "absolute", top: "6px", left: "6px", right: "-6px",
              bottom: "-6px", backgroundColor: O, borderRadius: "16px", opacity: 0.12 }}/>

            <div style={{ position: "relative", backgroundColor: "#fff", borderRadius: "16px",
              border: "2px solid rgba(87,115,113,0.12)",
              boxShadow: "0 8px 40px rgba(87,115,113,0.1)", overflow: "hidden",
              aspectRatio: "4/3", display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center" }}>
              {/* 👇 Replace this div with your Heyzine iframe when ready: */}
              {/* <iframe src="YOUR_HEYZINE_EMBED_URL" style={{ width:"100%", height:"100%", border:"none" }}/> */}

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center",
                gap: "16px", padding: "40px", textAlign: "center" }}>
                {/* Book illustration */}
                <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg"
                     style={{ width: "120px" }}>
                  <rect x="8" y="10" width="52" height="72" rx="4" fill={B} stroke={T} strokeWidth="1.5"/>
                  <line x1="16" y1="24" x2="52" y2="24" stroke={G} strokeWidth="1.5" opacity="0.7"/>
                  <line x1="16" y1="34" x2="52" y2="34" stroke={G} strokeWidth="1.5" opacity="0.5"/>
                  <line x1="16" y1="44" x2="48" y2="44" stroke={G} strokeWidth="1.5" opacity="0.5"/>
                  <line x1="16" y1="54" x2="52" y2="54" stroke={G} strokeWidth="1.5" opacity="0.4"/>
                  <line x1="16" y1="64" x2="44" y2="64" stroke={G} strokeWidth="1.5" opacity="0.4"/>
                  <rect x="58" y="8" width="4" height="76" rx="2" fill={T} opacity="0.5"/>
                  <rect x="62" y="10" width="52" height="72" rx="4" fill="#FFF8E8" stroke={T} strokeWidth="1.5"/>
                  <rect x="70" y="22" width="36" height="28" rx="3" fill={G} opacity="0.3"/>
                  <line x1="70" y1="58" x2="106" y2="58" stroke={T} strokeWidth="1.5" opacity="0.5"/>
                  <line x1="70" y1="66" x2="100" y2="66" stroke={T} strokeWidth="1.5" opacity="0.4"/>
                  <line x1="70" y1="74" x2="106" y2="74" stroke={T} strokeWidth="1.5" opacity="0.3"/>
                  <path d="M114,82 Q118,78 112,72 Q108,68 114,64" stroke={T}
                    strokeWidth="1" fill="none" opacity="0.4"/>
                </svg>

                <div>
                  <h3 style={{ fontFamily: "'Fraunces', serif", color: T,
                    fontSize: "1.25rem", marginBottom: "8px", fontStyle: "italic" }}>
                    Flipbook Coming Soon
                  </h3>
                  <p style={{ color: T, opacity: 0.6, fontSize: "0.85rem",
                    lineHeight: "1.7", maxWidth: "320px" }}>
                    I'm currently putting together a beautiful magazine-style flipbook using
                    Heyzine. Check back soon — it'll be worth the flip!
                  </p>
                </div>

                <div className="flex items-center gap-2" style={{ backgroundColor: B,
                  padding: "10px 20px", borderRadius: "100px", color: T, fontSize: "0.8rem" }}>
                  <Upload size={14} strokeWidth={2}/> <span>PDF upload in progress</span>
                </div>
              </div>
            </div>
          </div>

          {/* Side info */}
          <div style={{ flex: "0 0 280px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ backgroundColor: "#fff", borderRadius: "18px", padding: "24px",
              border: "1.5px solid rgba(87,115,113,0.1)",
              boxShadow: "0 4px 20px rgba(87,115,113,0.07)" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "12px",
                backgroundColor: B, display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: "14px" }}>
                <BookOpen size={20} strokeWidth={1.5} style={{ color: T }}/>
              </div>
              <h4 style={{ fontFamily: "'Fraunces', serif", color: T,
                fontSize: "1rem", marginBottom: "8px", fontStyle: "italic" }}>
                What's inside?
              </h4>
              <p style={{ color: "#4A6260", fontSize: "0.85rem", lineHeight: "1.75" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A curated collection of
                writing, art, and reflections in a beautifully designed interactive magazine format.
              </p>
            </div>

            {[
              { label: "Format", value: "Interactive PDF Flipbook" },
              { label: "Powered by", value: "Heyzine" },
              { label: "Pages", value: "Coming soon" },
              { label: "Theme", value: "TBD ✦" },
            ].map(item => (
              <div key={item.label} className="flex justify-between items-center py-3"
                   style={{ borderBottom: `1px solid rgba(87,115,113,0.12)` }}>
                <span style={{ fontSize: "0.78rem", color: T, opacity: 0.6,
                  textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "700" }}>
                  {item.label}
                </span>
                <span style={{ fontSize: "0.85rem", color: T }}>{item.value}</span>
              </div>
            ))}

            <a href="https://heyzine.com" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-75"
               style={{ backgroundColor: T, color: CRM, padding: "13px 20px",
                 borderRadius: "12px", fontSize: "0.83rem", textDecoration: "none",
                 fontWeight: "700", marginTop: "4px" }}>
              <ExternalLink size={14} strokeWidth={2}/> Learn about Heyzine
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
