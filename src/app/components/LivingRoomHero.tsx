import { User, PenLine, Code2, BookOpen, ChevronDown, ExternalLink } from "lucide-react";

/* ── Brand palette ─────────────────────────────────────── */
const P = {
  wall:    "#F5EBE0",   // warm linen wall
  peach:   "#FBE8D8",   // soft peach
  tan:     "#E5C7B1",   // warm tan
  sage:    "#5A7969",   // sage green (primary)
  terra:   "#CB6B4D",   // terracotta
  forest:  "#173A2B",   // deep forest
  caramel: "#BB885E",   // caramel
  wood:    "#7A5035",
  woodDk:  "#5A3420",
  woodLt:  "#A07548",
  leaf:    "#4A7830",
  leafLt:  "#6B9E4A",
  leafDk:  "#365E22",
};

import sofaImage from "../assets/sofa.png";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const FRAMES = [
  {
    id: "about", label: "About Me", Icon: User,
    border: P.forest, bg: P.tan, rotation: -4, dy: 6,
    onClick: () => scrollTo("about"), external: false,
  },
  {
    id: "blog", label: "Blog", Icon: PenLine,
    border: P.terra, bg: "#FEF2EB", rotation: 3, dy: -7,
    onClick: () => window.open("https://substack.com/@braindumpdigest", "_blank"),
    external: true,
  },
  {
    id: "projects", label: "Projects", Icon: Code2,
    border: P.sage, bg: "#EEF3F0", rotation: -2, dy: 5,
    onClick: () => scrollTo("projects"), external: false,
  },
  {
    id: "flipbook", label: "Flipbook", Icon: BookOpen,
    border: P.caramel, bg: P.peach, rotation: 4, dy: -5,
    onClick: () => scrollTo("flipbook"), external: false,
  },
];

/* ── Doodle Frame ──────────────────────────────────────── */
function DoodleFrame({ frame }: { frame: (typeof FRAMES)[0] }) {
  const { Icon, border, bg, rotation, dy, label, onClick, external, id } = frame;
  return (
    <div
      className="cursor-pointer group select-none flex-shrink-0"
      style={{ transform: `rotate(${rotation}deg) translateY(${dy}px)`, width: "102px" }}
      onClick={onClick}
      title={label}
    >
      <div className="transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2"
           style={{ transformOrigin: "center bottom", position: "relative" }}>
        <svg viewBox="0 0 102 134" style={{ width: "100%", display: "block",
          filter: "drop-shadow(2px 3px 8px rgba(23,58,43,0.18))" }}>
          <defs>
            <filter id={`warp-${id}`}>
              <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="3" seed="8" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </defs>
          <rect x="5" y="5" width="92" height="106" rx="2" fill={bg} filter={`url(#warp-${id})`}/>
          <rect x="2" y="2" width="98" height="110" rx="5" fill="none"
            stroke={border} strokeWidth="2.5" strokeLinecap="round" filter={`url(#warp-${id})`}/>
          <rect x="8" y="8" width="86" height="98" rx="2" fill="none"
            stroke={border} strokeWidth="1" strokeDasharray="3,5" opacity="0.4"
            filter={`url(#warp-${id})`}/>
          <rect x="2" y="104" width="98" height="26" rx="3" fill={border} opacity="0.12"/>
          <text x="51" y="121" textAnchor="middle" fontSize="8.5" fontWeight="700"
            fill={border} fontFamily="Nunito, sans-serif" opacity="0.9">{label}</text>
        </svg>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "106px",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: border, flexDirection: "column", gap: "6px" }}>
          <Icon size={24} strokeWidth={1.5}/>
          {external && <ExternalLink size={9} strokeWidth={2} style={{ opacity: 0.4 }}/>}
        </div>
      </div>
    </div>
  );
}

/* ── Bookshelf ─────────────────────────────────────────── */
function BookshelfSVG() {
  const bk = (x: number, y: number, w: number, h: number, fill: string, opacity = 1) => ({
    x, y, width: w, height: h, rx: 1.5, fill, opacity,
  });
  return (
    <svg viewBox="0 0 148 318" fill="none" xmlns="http://www.w3.org/2000/svg"
         style={{ width: "100%", display: "block" }}>
      {/* Back panel */}
      <rect x="12" y="0" width="124" height="318" fill={P.woodLt} opacity="0.4"/>
      <rect x="0" y="0" width="13" height="318" rx="2" fill={P.wood}/>
      <rect x="135" y="0" width="13" height="318" rx="2" fill={P.wood}/>
      <rect x="0" y="0" width="148" height="10" rx="2" fill={P.woodDk}/>
      <rect x="0" y="96" width="148" height="8" fill={P.woodDk}/>
      <rect x="0" y="196" width="148" height="8" fill={P.woodDk}/>
      <rect x="0" y="308" width="148" height="10" rx="2" fill={P.woodDk}/>

      {/* Top shelf (y 10–96) */}
      <rect {...bk(14,22,14,64, P.sage)}/>
      <rect {...bk(30,26,15,60, P.terra)}/>
      <rect {...bk(47,18,12,68, P.tan)}/>
      <rect {...bk(61,24,14,62, P.forest)} opacity={0.7}/>
      {/* vase */}
      <ellipse cx="87" cy="76" rx="10" ry="12" fill={P.tan}/>
      <rect x="82" y="63" width="10" height="6" rx="2" fill={P.tan}/>
      <ellipse cx="87" cy="63" rx="6" ry="3" fill={P.tan}/>
      <line x1="87" y1="61" x2="87" y2="46" stroke={P.leaf} strokeWidth="1.8"/>
      <ellipse cx="87" cy="40" rx="6" ry="9" fill={P.caramel} opacity="0.8"/>
      <rect {...bk(100,26,11,60, P.caramel)}/>
      <rect {...bk(113,18,14,68, P.sage)} opacity={0.6}/>

      {/* Middle shelf (y 104–196) */}
      <rect {...bk(14,108,17,80, P.terra)}/>
      <rect {...bk(33,104,13,84, P.forest)} opacity={0.75}/>
      <rect {...bk(48,110,15,78, P.caramel)}/>
      {/* globe */}
      <circle cx="76" cy="150" r="13" fill={P.peach} stroke={P.forest} strokeWidth="1.2"/>
      <ellipse cx="76" cy="150" rx="13" ry="4.5" fill="none" stroke={P.forest} strokeWidth="0.7" opacity="0.5"/>
      <ellipse cx="76" cy="150" rx="4.5" ry="13" fill="none" stroke={P.forest} strokeWidth="0.7" opacity="0.5"/>
      <rect x="73" y="163" width="6" height="6" rx="1" fill={P.woodDk}/>
      <rect {...bk(94,108,13,80, P.sage)}/>
      <rect {...bk(109,112,15,76, P.tan)}/>
      <rect {...bk(126,116,9,72, P.terra)} opacity={0.6}/>

      {/* Bottom shelf (y 204–308) */}
      <rect {...bk(14,210,16,90, P.caramel)}/>
      <rect {...bk(32,206,17,94, P.forest)} opacity={0.7}/>
      <rect {...bk(51,212,14,88, P.sage)}/>
      <rect {...bk(67,208,15,92, P.tan)}/>
      <rect {...bk(84,214,13,86, P.terra)}/>
      {/* Horizontal stacked */}
      <rect x="100" y="292" width="36" height="11" rx="1.5" fill={P.sage}/>
      <rect x="102" y="281" width="32" height="11" rx="1.5" fill={P.terra}/>
      <rect x="100" y="270" width="36" height="11" rx="1.5" fill={P.caramel}/>
      <rect x="100" y="259" width="32" height="11" rx="1.5" fill={P.tan}/>
      <rect x="97" y="255" width="5" height="48" rx="2" fill={P.wood}/>
    </svg>
  );
}



/* ── Coffee Table ──────────────────────────────────────── */
function CoffeeTableSVG() {
  return (
    <svg viewBox="0 0 210 76" fill="none" xmlns="http://www.w3.org/2000/svg"
         style={{ width: "100%", display: "block" }}>
      <ellipse cx="105" cy="74" rx="86" ry="5" fill="rgba(23,58,43,0.08)"/>
      <ellipse cx="105" cy="27" rx="98" ry="19" fill={P.woodLt}/>
      <ellipse cx="105" cy="25" rx="94" ry="16" fill="#9B6B3A"/>
      <ellipse cx="105" cy="23" rx="89" ry="12" fill={P.woodLt} opacity="0.55"/>
      <ellipse cx="105" cy="23" rx="55" ry="6" fill="none" stroke="#7A5035" strokeWidth="0.6" opacity="0.3"/>
      <rect x="70" y="40" width="9" height="28" rx="3.5" fill={P.wood}/>
      <rect x="131" y="40" width="9" height="28" rx="3.5" fill={P.wood}/>
      {/* Open book */}
      <rect x="50" y="10" width="24" height="20" rx="2" fill="#FBE8D8" transform="rotate(-4,62,20)"/>
      <line x1="62" y1="11" x2="62" y2="29" stroke={P.tan} strokeWidth="0.8" transform="rotate(-4,62,20)"/>
      <line x1="53" y1="16" x2="61" y2="16" stroke={P.terra} strokeWidth="0.8" transform="rotate(-4,62,20)" opacity="0.6"/>
      <line x1="53" y1="20" x2="61" y2="20" stroke={P.terra} strokeWidth="0.8" opacity="0.4" transform="rotate(-4,62,20)"/>
      {/* Mug */}
      <rect x="136" y="8" width="18" height="20" rx="4" fill={P.tan}/>
      <path d="M154,12 Q161,12 161,18 Q161,24 154,24" stroke={P.tan} strokeWidth="2.5" fill="none"/>
      <path d="M141,8 Q143,3 141,-2" stroke={P.caramel} strokeWidth="1.5" fill="none" opacity="0.45" strokeLinecap="round"/>
      <path d="M146,6 Q148,1 146,-4" stroke={P.caramel} strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round"/>
    </svg>
  );
}

/* ── Floor Plant ───────────────────────────────────────── */
function FloorPlantSVG() {
  return (
    <svg viewBox="0 0 84 190" fill="none" xmlns="http://www.w3.org/2000/svg"
         style={{ width: "72px", display: "block" }}>
      <path d="M25,156 L20,190 L64,190 L59,156 Z" fill={P.terra}/>
      <rect x="18" y="149" width="48" height="11" rx="5" fill={P.terra} opacity="0.8}"/>
      <rect x="24" y="141" width="36" height="13" rx="4" fill={P.terra}/>
      <line x1="18" y1="168" x2="66" y2="168" stroke={P.peach} strokeWidth="1.2" opacity="0.35"/>
      <path d="M42,141 Q41,114 29,88" stroke={P.leaf} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M42,141 Q44,108 60,76" stroke={P.leaf} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M42,141 Q42,112 40,84" stroke={P.leaf} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M42,141 Q34,126 24,112" stroke={P.leaf} strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M42,141 Q50,124 62,110" stroke={P.leaf} strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <ellipse cx="23" cy="80" rx="22" ry="12" fill={P.leafLt} transform="rotate(-36,23,80)"/>
      <ellipse cx="62" cy="66" rx="20" ry="11" fill={P.leafDk} transform="rotate(34,62,66)"/>
      <ellipse cx="40" cy="70" rx="18" ry="10" fill={P.leaf} transform="rotate(-5,40,70)"/>
      <ellipse cx="17" cy="105" rx="16" ry="9" fill={P.leafLt} transform="rotate(-46,17,105)"/>
      <ellipse cx="63" cy="98" rx="15" ry="8" fill={P.leafDk} transform="rotate(40,63,98)"/>
      <ellipse cx="40" cy="96" rx="14" ry="8" fill={P.leaf} transform="rotate(8,40,96)"/>
    </svg>
  );
}

/* ── Side Table ────────────────────────────────────────── */
function SideTableSVG() {
  return (
    <svg viewBox="0 0 90 170" fill="none" xmlns="http://www.w3.org/2000/svg"
         style={{ width: "76px", display: "block" }}>
      <rect x="3" y="80" width="84" height="8" rx="4" fill={P.terra}/>
      <rect x="11" y="130" width="68" height="7" rx="3" fill={P.terra} opacity="0.7}"/>
      <rect x="12" y="88" width="8" height="80" rx="3" fill={P.terra} opacity="0.75}"/>
      <rect x="70" y="88" width="8" height="80" rx="3" fill={P.terra} opacity="0.75}"/>
      <rect x="12" y="62" width="12" height="19" rx="1.5" fill={P.tan}/>
      <rect x="26" y="58" width="14" height="23" rx="1.5" fill={P.sage}/>
      <rect x="42" y="61" width="11" height="20" rx="1.5" fill={P.terra}/>
      <rect x="55" y="56" width="13" height="25" rx="1.5" fill={P.caramel}/>
      {/* Plant */}
      <rect x="69" y="63" width="16" height="18" rx="3" fill={P.caramel}/>
      <rect x="67" y="61" width="20" height="5" rx="2" fill={P.terra}/>
      <ellipse cx="77" cy="48" rx="11" ry="14" fill={P.leafLt}/>
      <ellipse cx="71" cy="53" rx="8" ry="11" fill={P.leaf}/>
      <ellipse cx="83" cy="51" rx="8" ry="10" fill={P.leafDk}/>
      {/* Candle */}
      <rect x="33" y="116" width="9" height="15" rx="2" fill="#FBE8D8"/>
      <path d="M37.5,116 Q39,112 37.5,108 Q36,112 37.5,116 Z" fill={P.caramel}/>
    </svg>
  );
}

/* ── Main Hero ─────────────────────────────────────────── */
export function LivingRoomHero() {
  return (
    <section id="home" className="relative overflow-hidden"
             style={{ minHeight: "100vh" }}>

      {/* Wall — clean warm linen, no pattern */}
      <div className="absolute inset-0" style={{ bottom: "210px", backgroundColor: P.wall }}/>

      {/* Subtle horizontal wall texture lines */}
      {[18, 36, 54].map(pct => (
        <div key={pct} className="absolute left-0 right-0 hidden lg:block"
             style={{ bottom: `calc(210px + ${pct}%)`, height: "1px",
               background: "rgba(23,58,43,0.04)" }}/>
      ))}

      {/* Chair rail */}
      <div className="absolute left-0 right-0" style={{ bottom: "228px", height: "3px",
        background: `linear-gradient(90deg, transparent 0%, ${P.caramel} 15%, ${P.caramel} 85%, transparent 100%)`,
        opacity: 0.35 }}/>

      {/* Baseboard */}
      <div className="absolute left-0 right-0 z-10" style={{ bottom: "208px", height: "7px",
        background: `linear-gradient(180deg, ${P.caramel}90 0%, ${P.caramel} 100%)`,
        opacity: 0.5 }}/>

      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "210px",
        background: "linear-gradient(180deg, #C4975A 0%, #A8803A 100%)" }}>
        {[38, 80, 122, 164].map(y => (
          <div key={y} style={{ position: "absolute", left: 0, right: 0, top: `${y}px`,
            height: "1px", background: "rgba(90,52,32,0.1)" }}/>
        ))}
      </div>

      {/* Rug */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10" style={{ bottom: "50px",
        width: "clamp(260px, 50%, 540px)", height: "130px", borderRadius: "10px",
        backgroundColor: P.tan, opacity: 0.72,
        boxShadow: "0 4px 20px rgba(23,58,43,0.1)" }}/>
      <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: "59px",
        width: "clamp(248px, 48.5%, 528px)", height: "122px", borderRadius: "8px",
        border: `1.5px solid ${P.terra}`, opacity: 0.15, zIndex: 11 }}/>

      {/* Welcome text */}
      <div className="absolute left-0 right-0 text-center z-20 px-4"
           style={{ top: "clamp(72px, 9.5vh, 100px)" }}>
        <p style={{ fontFamily: "Nunito, sans-serif", color: P.forest, fontSize: "0.7rem",
          letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "0.5rem", opacity: 0.55 }}>
          Welcome to
        </p>
        <h1 style={{
          fontFamily: "'Fraunces', serif",
          color: P.forest,
          fontSize: "clamp(1.7rem, 4.4vw, 3rem)",
          fontStyle: "italic",
          lineHeight: "1.15",
          marginBottom: "0.4rem",
        }}>
          My Virtual Living Room
        </h1>
        <p style={{ fontFamily: "Nunito, sans-serif", color: P.sage, opacity: 0.7,
          fontSize: "clamp(0.75rem, 1.6vw, 0.85rem)", letterSpacing: "0.04em" }}>
          Select a frame to explore
        </p>
      </div>

      {/* Gallery wall frames */}
      <div className="absolute left-0 right-0 z-20 flex justify-center items-end gap-3 md:gap-5 px-2"
           style={{ top: "clamp(195px, 28vh, 265px)", flexWrap: "wrap" }}>
        {FRAMES.map(frame => <DoodleFrame key={frame.id} frame={frame} />)}
      </div>

      {/* Bookshelf */}
      <div className="absolute z-20 hidden md:block" style={{ left: "clamp(14px, 2%, 50px)",
        bottom: "208px", width: "clamp(105px, 10.5%, 148px)" }}>
        <BookshelfSVG />
      </div>

      {/* Left floor plant */}
      <div className="absolute z-20 hidden lg:block" style={{ left: "clamp(175px, 17%, 270px)", bottom: "208px" }}>
        <FloorPlantSVG />
      </div>

      {/* Sofa */}
      <div className="absolute left-1/2 -translate-x-1/2 z-25" style={{ bottom: "90px",
        width: "clamp(290px, 60%, 620px)" }}>
        <img src={sofaImage} alt="Sofa" style={{ width: "100%", display: "block" }}/>
      </div>

      {/* Coffee table */}
      <div className="absolute left-1/2 -translate-x-1/2 z-30" style={{ bottom: "115px",
        width: "clamp(150px, 22%, 210px)" }}>
        <CoffeeTableSVG />
      </div>

      {/* Right side table */}
      <div className="absolute z-20 hidden md:block" style={{ right: "clamp(18px, 3.5%, 70px)", bottom: "208px" }}>
        <SideTableSVG />
      </div>

      {/* Right floor plant */}
      <div className="absolute z-20 hidden lg:block" style={{ right: "clamp(95px, 13%, 200px)", bottom: "208px" }}>
        <FloorPlantSVG />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-30"
           style={{ fontFamily: "Nunito, sans-serif", color: P.forest, fontSize: "0.62rem",
             letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.4,
             animation: "heroScroll 2.4s ease-in-out infinite" }}>
        <span>Scroll</span>
        <ChevronDown size={12} strokeWidth={2}/>
      </div>

      <style>{`
        @keyframes heroScroll {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(5px); }
        }
      `}</style>
    </section>
  );
}
