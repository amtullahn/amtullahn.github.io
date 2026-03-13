import { User, PenLine, Code2, BookOpen, ChevronDown, ExternalLink } from "lucide-react";

/* ── Brand palette ─────────────────────────────────────── */
const P = {
  wall:      "#BED2D5",
  cream:     "#FDECDF",
  blush:     "#EFD6D5",
  teal:      "#577371",
  golden:    "#E6B079",
  olive:     "#BCA446",
  wood:      "#7A5035",
  woodDk:    "#5A3420",
  woodLt:    "#A07548",
  leaf:      "#5C8A3C",
  leafDk:    "#426A2A",
  leafLt:    "#78AA52",
};

/* ── Scroll helper ─────────────────────────────────────── */
const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

/* ── Frame config ──────────────────────────────────────── */
const FRAMES = [
  {
    id: "about", label: "About Me", Icon: User,
    border: P.teal, bg: P.blush, rotation: -5, dy: 8,
    onClick: () => scrollTo("about"), external: false,
  },
  {
    id: "blog", label: "Blog", Icon: PenLine,
    border: P.olive, bg: "#FFF8E8", rotation: 3, dy: -8,
    onClick: () => window.open("https://substack.com/@braindumpdigest", "_blank"),
    external: true,
  },
  {
    id: "projects", label: "Projects", Icon: Code2,
    border: P.teal, bg: P.wall, rotation: -2, dy: 4,
    onClick: () => scrollTo("projects"), external: false,
  },
  {
    id: "flipbook", label: "Flipbook", Icon: BookOpen,
    border: P.golden, bg: P.cream, rotation: 4, dy: -6,
    onClick: () => scrollTo("flipbook"), external: false,
  },
];

/* ── Doodle Frame ──────────────────────────────────────── */
function DoodleFrame({ frame }: { frame: (typeof FRAMES)[0] }) {
  const { Icon, border, bg, rotation, dy, label, onClick, external, id } = frame;
  return (
    <div
      className="cursor-pointer group select-none flex-shrink-0"
      style={{ transform: `rotate(${rotation}deg) translateY(${dy}px)`, width: "108px", position: "relative" }}
      onClick={onClick}
      title={label}
    >
      <div className="transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2"
           style={{ transformOrigin: "center bottom" }}>
        <svg viewBox="0 0 108 142" style={{ width: "100%", display: "block",
          filter: "drop-shadow(2px 4px 8px rgba(87,115,113,0.22))" }}>
          <defs>
            <filter id={`warp-${id}`}>
              <feTurbulence type="fractalNoise" baseFrequency="0.028" numOctaves="3" seed="12" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </defs>
          {/* Frame bg */}
          <rect x="6" y="6" width="96" height="112" rx="3" fill={bg} filter={`url(#warp-${id})`}/>
          {/* Outer border — thicker, doodly */}
          <rect x="2" y="2" width="104" height="118" rx="6" fill="none"
            stroke={border} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            filter={`url(#warp-${id})`}/>
          {/* Inner dashed */}
          <rect x="9" y="9" width="90" height="105" rx="3" fill="none"
            stroke={border} strokeWidth="1.2" strokeDasharray="3,4" opacity="0.55"
            filter={`url(#warp-${id})`}/>
          {/* Corner stars */}
          {[{x:0,y:0},{x:96,y:0},{x:0,y:108},{x:96,y:108}].map((c,i)=>(
            <text key={i} x={c.x} y={c.y+12} fontSize="9" fill={border} opacity="0.85">✦</text>
          ))}
          {/* Label strip */}
          <rect x="2" y="112" width="104" height="26" rx="3" fill={border} opacity="0.15"/>
          <text x="54" y="129" textAnchor="middle" fontSize="9" fontWeight="700"
            fill={border} fontFamily="Nunito, sans-serif">{label}</text>
        </svg>
        {/* Icon overlay */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "114px",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: border, flexDirection: "column", gap: "4px" }}>
          <Icon size={26} strokeWidth={1.5}/>
          {external && <ExternalLink size={9} strokeWidth={2} style={{ opacity: 0.45 }}/>}
        </div>
      </div>
    </div>
  );
}

/* ── Bookshelf ─────────────────────────────────────────── */
function BookshelfSVG() {
  return (
    <svg viewBox="0 0 152 324" fill="none" xmlns="http://www.w3.org/2000/svg"
         style={{ width: "100%", display: "block" }}>
      {/* Back panel */}
      <rect x="12" y="0" width="128" height="320" fill={P.woodLt} opacity="0.55"/>
      {/* Left side */}
      <rect x="0" y="0" width="13" height="324" rx="2" fill={P.wood}/>
      {/* Right side */}
      <rect x="139" y="0" width="13" height="324" rx="2" fill={P.wood}/>
      {/* Top */}
      <rect x="0" y="0" width="152" height="11" rx="2" fill={P.woodDk}/>
      {/* Shelf dividers */}
      <rect x="0" y="98" width="152" height="9" fill={P.woodDk}/>
      <rect x="0" y="200" width="152" height="9" fill={P.woodDk}/>
      {/* Bottom */}
      <rect x="0" y="313" width="152" height="11" rx="2" fill={P.woodDk}/>

      {/* ── TOP SHELF books (y:11–98, usable h~87) ── */}
      {/* Book 1 - teal */}
      <rect x="14" y="24" width="14" height="65" rx="2" fill={P.teal}/>
      <rect x="14" y="24" width="5" height="65" fill="#476360" opacity="0.4" rx="1"/>
      {/* Book 2 - olive */}
      <rect x="30" y="28" width="16" height="61" rx="2" fill={P.olive}/>
      <text x="38" y="68" fontSize="5" fill="#FDECDF" opacity="0.6" textAnchor="middle"
        fontFamily="Nunito,sans-serif" transform="rotate(90,38,58)">NOVEL</text>
      {/* Book 3 - blush wide */}
      <rect x="48" y="18" width="13" height="71" rx="2" fill={P.blush}/>
      {/* Book 4 - sky blue */}
      <rect x="63" y="26" width="15" height="63" rx="2" fill={P.wall}/>
      {/* Small decorative vase */}
      <ellipse cx="88" cy="78" rx="10" ry="13" fill={P.blush}/>
      <rect x="82" y="64" width="12" height="6" rx="2" fill={P.blush}/>
      <ellipse cx="88" cy="64" rx="7" ry="3.5" fill={P.blush}/>
      <line x1="88" y1="61" x2="88" y2="46" stroke={P.leaf} strokeWidth="1.8"/>
      <ellipse cx="88" cy="40" rx="7" ry="10" fill={P.golden} opacity="0.85"/>
      <ellipse cx="82" cy="43" rx="5" ry="7" fill={P.olive} opacity="0.7"
        transform="rotate(-20,82,43)"/>
      {/* Tiny book */}
      <rect x="100" y="30" width="11" height="59" rx="2" fill={P.golden}/>
      {/* Bookend/bracket */}
      <rect x="114" y="22" width="8" height="67" rx="2" fill={P.teal} opacity="0.5"/>
      <rect x="114" y="85" width="22" height="6" rx="2" fill={P.teal} opacity="0.4"/>

      {/* ── MIDDLE SHELF books (y:107–200, usable h~93) ── */}
      {/* Book 1 - blue tall */}
      <rect x="14" y="110" width="18" height="82" rx="2" fill={P.wall}/>
      <rect x="14" y="110" width="6" height="82" fill="#8FAAAD" opacity="0.5" rx="1"/>
      {/* Book 2 - teal */}
      <rect x="34" y="106" width="14" height="86" rx="2" fill={P.teal}/>
      {/* Book 3 - golden */}
      <rect x="50" y="112" width="16" height="80" rx="2" fill={P.golden}/>
      {/* Mini globe ornament */}
      <circle cx="77" cy="152" r="14" fill={P.cream} stroke={P.teal} strokeWidth="1.5"/>
      <ellipse cx="77" cy="152" rx="14" ry="5" fill="none" stroke={P.teal} strokeWidth="0.8" opacity="0.6"/>
      <ellipse cx="77" cy="152" rx="5" ry="14" fill="none" stroke={P.teal} strokeWidth="0.8" opacity="0.6"/>
      <rect x="74" y="165" width="6" height="7" rx="1" fill={P.woodDk}/>
      <ellipse cx="77" cy="172" rx="9" ry="3" fill={P.woodDk} opacity="0.5"/>
      {/* Book 4 - olive */}
      <rect x="97" y="110" width="14" height="82" rx="2" fill={P.olive}/>
      {/* Book 5 - blush */}
      <rect x="113" y="114" width="16" height="78" rx="2" fill={P.blush}/>
      <rect x="113" y="114" width="5" height="78" rx="1" fill={P.blush} opacity="0.5"/>
      {/* Thin accent book */}
      <rect x="131" y="118" width="9" height="74" rx="2" fill={P.teal} opacity="0.6"/>

      {/* ── BOTTOM SHELF books (y:209–313, usable h~104) ── */}
      {/* Standing books */}
      <rect x="14" y="208" width="17" height="96" rx="2" fill={P.golden}/>
      <rect x="14" y="208" width="6" height="96" rx="1" fill="#C8894A" opacity="0.4"/>
      <rect x="33" y="204" width="18" height="100" rx="2" fill={P.teal}/>
      <rect x="53" y="210" width="15" height="94" rx="2" fill={P.olive}/>
      <rect x="70" y="206" width="16" height="98" rx="2" fill={P.blush}/>
      <rect x="88" y="212" width="13" height="92" rx="2" fill={P.wall}/>

      {/* Horizontal stacked books on right */}
      <rect x="104" y="295" width="38" height="12" rx="2" fill={P.teal}/>
      <rect x="106" y="283" width="34" height="12" rx="2" fill={P.olive}/>
      <rect x="104" y="271" width="38" height="12" rx="2" fill={P.golden}/>
      <rect x="106" y="259" width="34" height="12" rx="2" fill={P.blush}/>
      {/* Bookend */}
      <rect x="100" y="255" width="5" height="50" rx="2" fill={P.wood}/>
    </svg>
  );
}

/* ── Mid-century Modern Couch ──────────────────────────── */
function CouchSVG() {
  const fabric = "#E6B079";
  const fabricDk = "#C8894A";
  const fabricMd = "#D4A063";
  const hilight = "#F2C48A";
  const legColor = "#7A5035";
  const legDk = "#5A3420";

  return (
    <svg viewBox="0 0 620 210" fill="none" xmlns="http://www.w3.org/2000/svg"
         style={{ width: "100%", display: "block" }}>
      {/* Shadow */}
      <ellipse cx="310" cy="206" rx="278" ry="8" fill="rgba(87,115,113,0.14)"/>

      {/* ── Legs (tapered, angled, wood) ── */}
      {/* Front left */}
      <path d="M 72 178 L 63 200 L 78 200 Z" fill={legDk}/>
      <rect x="65" y="178" width="14" height="14" rx="2" fill={legColor}/>
      {/* Front center-left */}
      <path d="M 198 180 L 191 200 L 204 200 Z" fill={legDk}/>
      <rect x="192" y="180" width="13" height="10" rx="2" fill={legColor}/>
      {/* Front center-right */}
      <path d="M 408 180 L 401 200 L 416 200 Z" fill={legDk}/>
      <rect x="402" y="180" width="13" height="10" rx="2" fill={legColor}/>
      {/* Front right */}
      <path d="M 535 178 L 528 200 L 543 200 Z" fill={legDk}/>
      <rect x="529" y="178" width="14" height="14" rx="2" fill={legColor}/>

      {/* ── Seat platform ── */}
      <rect x="42" y="148" width="536" height="36" rx="14" fill={fabricDk}/>

      {/* ── Seat cushions (2) ── */}
      <rect x="48" y="151" width="256" height="29" rx="10" fill={fabric}/>
      {/* Cushion seam highlight */}
      <rect x="48" y="151" width="256" height="6" rx="5" fill={hilight} opacity="0.4"/>
      <rect x="308" y="151" width="264" height="29" rx="10" fill={fabricMd}/>
      <rect x="308" y="151" width="264" height="6" rx="5" fill={hilight} opacity="0.3"/>

      {/* ── Back frame/rail ── */}
      <rect x="42" y="18" width="536" height="138" rx="20" fill={fabricDk}/>

      {/* ── Back cushions (3 — PLUMP, puffy) ── */}
      {/* Cushion 1 */}
      <rect x="50" y="24" width="166" height="124" rx="16" fill={fabric}/>
      <rect x="50" y="24" width="166" height="18" rx="8" fill={hilight} opacity="0.35"/>
      <rect x="56" y="30" width="154" height="108" rx="12" fill={fabric} opacity="0.3"/>
      {/* Cushion 2 */}
      <rect x="226" y="24" width="168" height="124" rx="16" fill={fabricMd}/>
      <rect x="226" y="24" width="168" height="18" rx="8" fill={hilight} opacity="0.28"/>
      <rect x="232" y="30" width="156" height="108" rx="12" fill={fabricMd} opacity="0.3"/>
      {/* Cushion 3 */}
      <rect x="404" y="24" width="166" height="124" rx="16" fill={fabric}/>
      <rect x="404" y="24" width="166" height="18" rx="8" fill={hilight} opacity="0.35"/>
      <rect x="410" y="30" width="154" height="108" rx="12" fill={fabric} opacity="0.3"/>

      {/* Cushion divider shadows */}
      <rect x="218" y="22" width="10" height="128" rx="5" fill={fabricDk} opacity="0.5"/>
      <rect x="396" y="22" width="10" height="128" rx="5" fill={fabricDk} opacity="0.5"/>

      {/* ── Left arm ── */}
      <rect x="0" y="46" width="46" height="140" rx="16" fill={fabricDk}/>
      {/* Arm cap */}
      <rect x="-5" y="34" width="56" height="20" rx="10" fill={fabric}/>
      <rect x="-5" y="34" width="56" height="8" rx="5" fill={hilight} opacity="0.4"/>

      {/* ── Right arm ── */}
      <rect x="574" y="46" width="46" height="140" rx="16" fill={fabricDk}/>
      {/* Arm cap */}
      <rect x="569" y="34" width="56" height="20" rx="10" fill={fabric}/>
      <rect x="569" y="34" width="56" height="8" rx="5" fill={hilight} opacity="0.4"/>

      {/* ── Teal throw pillow (right) ── */}
      <g transform="rotate(12, 534, 88)">
        <rect x="510" y="54" width="54" height="68" rx="12" fill="#577371"/>
        <line x1="537" y1="56" x2="537" y2="120" stroke="rgba(253,236,223,0.25)" strokeWidth="1.5"/>
        <line x1="512" y1="88" x2="562" y2="88" stroke="rgba(253,236,223,0.25)" strokeWidth="1.5"/>
        <ellipse cx="537" cy="88" rx="6" ry="6" fill="rgba(253,236,223,0.15)"/>
      </g>

      {/* ── Olive throw pillow (left) ── */}
      <g transform="rotate(-10, 80, 82)">
        <rect x="54" y="50" width="50" height="64" rx="12" fill="#BCA446"/>
        <line x1="79" y1="52" x2="79" y2="112" stroke="rgba(253,236,223,0.3)" strokeWidth="1.5"/>
        <line x1="56" y1="82" x2="102" y2="82" stroke="rgba(253,236,223,0.3)" strokeWidth="1.5"/>
      </g>

      {/* ── Small blush accent pillow (center-right) ── */}
      <g transform="rotate(5, 430, 120)">
        <rect x="414" y="104" width="36" height="44" rx="9" fill="#EFD6D5"/>
        <line x1="432" y1="106" x2="432" y2="146" stroke="rgba(87,115,113,0.3)" strokeWidth="1"/>
      </g>
    </svg>
  );
}

/* ── Coffee Table ──────────────────────────────────────── */
function CoffeeTableSVG() {
  return (
    <svg viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg"
         style={{ width: "100%", display: "block" }}>
      {/* Table shadow */}
      <ellipse cx="110" cy="77" rx="92" ry="6" fill="rgba(87,115,113,0.1)"/>
      {/* Table top */}
      <ellipse cx="110" cy="28" rx="102" ry="20" fill={P.woodLt}/>
      <ellipse cx="110" cy="26" rx="98" ry="17" fill="#B8835A"/>
      <ellipse cx="110" cy="24" rx="93" ry="13" fill={P.woodLt} opacity="0.6"/>
      {/* Grain lines */}
      <ellipse cx="110" cy="24" rx="60" ry="7" fill="none" stroke="#8B6040" strokeWidth="0.7" opacity="0.3"/>
      <ellipse cx="110" cy="24" rx="30" ry="4" fill="none" stroke="#8B6040" strokeWidth="0.6" opacity="0.25"/>
      {/* Table legs */}
      <rect x="72" y="42" width="10" height="30" rx="4" fill={P.wood}/>
      <rect x="138" y="42" width="10" height="30" rx="4" fill={P.wood}/>
      {/* Items on table */}
      {/* Open book */}
      <rect x="52" y="10" width="26" height="22" rx="2" fill="#FDECDF" transform="rotate(-5,65,21)"/>
      <line x1="65" y1="11" x2="65" y2="31" stroke="#BED2D5" strokeWidth="1" transform="rotate(-5,65,21)"/>
      <line x1="54" y1="16" x2="63" y2="16" stroke="#BCA446" strokeWidth="0.8" transform="rotate(-5,65,21)"/>
      <line x1="54" y1="20" x2="63" y2="20" stroke="#BCA446" strokeWidth="0.8" opacity="0.6" transform="rotate(-5,65,21)"/>
      {/* Mug */}
      <rect x="138" y="8" width="20" height="22" rx="4" fill={P.blush}/>
      <path d="M158,13 Q166,13 166,19 Q166,25 158,25" stroke={P.blush} strokeWidth="3" fill="none"/>
      {/* Steam from mug */}
      <path d="M143,8 Q145,2 143,-4" stroke={P.teal} strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round"/>
      <path d="M149,6 Q151,0 149,-6" stroke={P.teal} strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round"/>
      {/* Small plant sprig */}
      <line x1="100" y1="20" x2="100" y2="4" stroke={P.leaf} strokeWidth="1.5"/>
      <ellipse cx="95" cy="9" rx="5" ry="8" fill={P.leaf} opacity="0.8" transform="rotate(-25,95,9)"/>
      <ellipse cx="105" cy="11" rx="5" ry="7" fill={P.leafLt} opacity="0.7" transform="rotate(20,105,11)"/>
    </svg>
  );
}

/* ── Floor Plant ───────────────────────────────────────── */
function FloorPlantSVG() {
  return (
    <svg viewBox="0 0 88 200" fill="none" xmlns="http://www.w3.org/2000/svg"
         style={{ width: "78px", display: "block" }}>
      {/* Pot */}
      <path d="M26,162 L20,196 L68,196 L62,162 Z" fill={P.teal}/>
      <rect x="18" y="155" width="52" height="12" rx="5" fill={P.teal} opacity="0.8"/>
      <rect x="24" y="146" width="40" height="14" rx="4" fill={P.teal}/>
      {/* Pot decorative stripe */}
      <line x1="20" y1="172" x2="68" y2="172" stroke={P.cream} strokeWidth="1.5" opacity="0.4"/>
      {/* Stems */}
      <path d="M44,146 Q43,118 30,90" stroke={P.leaf} strokeWidth="2.8" fill="none" strokeLinecap="round"/>
      <path d="M44,146 Q45,112 62,78" stroke={P.leaf} strokeWidth="2.8" fill="none" strokeLinecap="round"/>
      <path d="M44,146 Q44,116 43,86" stroke={P.leaf} strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <path d="M44,146 Q36,130 26,115" stroke={P.leaf} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M44,146 Q52,128 64,112" stroke={P.leaf} strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Leaves */}
      <ellipse cx="24" cy="82" rx="24" ry="13" fill={P.leafLt} transform="rotate(-38,24,82)"/>
      <ellipse cx="64" cy="68" rx="22" ry="12" fill={P.leafDk} transform="rotate(35,64,68)"/>
      <ellipse cx="43" cy="72" rx="20" ry="11" fill={P.leaf} transform="rotate(-6,43,72)"/>
      <ellipse cx="18" cy="108" rx="18" ry="10" fill={P.leafLt} transform="rotate(-48,18,108)"/>
      <ellipse cx="66" cy="100" rx="16" ry="9" fill={P.leafDk} transform="rotate(42,66,100)"/>
      <ellipse cx="43" cy="98" rx="15" ry="9" fill={P.leaf} transform="rotate(10,43,98)"/>
      {/* Leaf veins */}
      <path d="M22,70 L16,95" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2"/>
      <path d="M66,56 L72,82" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2"/>
    </svg>
  );
}

/* ── Side Table ────────────────────────────────────────── */
function SideTableSVG() {
  return (
    <svg viewBox="0 0 96 180" fill="none" xmlns="http://www.w3.org/2000/svg"
         style={{ width: "80px", display: "block" }}>
      {/* Table top */}
      <rect x="3" y="84" width="90" height="9" rx="4" fill={P.teal}/>
      {/* Shelf */}
      <rect x="11" y="138" width="74" height="7" rx="3" fill={P.teal} opacity="0.7"/>
      {/* Legs */}
      <rect x="13" y="93" width="9" height="82" rx="3" fill={P.teal} opacity="0.8"/>
      <rect x="74" y="93" width="9" height="82" rx="3" fill={P.teal} opacity="0.8"/>
      {/* Books stack on top */}
      <rect x="12" y="68" width="13" height="17" rx="1.5" fill={P.blush}/>
      <rect x="27" y="64" width="15" height="21" rx="1.5" fill={P.wall}/>
      <rect x="44" y="66" width="12" height="19" rx="1.5" fill={P.olive}/>
      <rect x="58" y="60" width="14" height="25" rx="1.5" fill={P.golden}/>
      {/* Small plant on table */}
      <rect x="70" y="68" width="18" height="18" rx="3" fill={P.golden}/>
      <rect x="68" y="66" width="22" height="5" rx="2" fill={P.olive}/>
      <ellipse cx="79" cy="52" rx="13" ry="16" fill={P.leafLt}/>
      <ellipse cx="72" cy="58" rx="10" ry="12" fill={P.leaf}/>
      <ellipse cx="85" cy="56" rx="9" ry="11" fill={P.leafDk}/>
      {/* Candle on shelf */}
      <rect x="34" y="122" width="10" height="17" rx="2" fill={P.cream}/>
      <rect x="36" y="119" width="6" height="5" rx="1" fill={P.blush}/>
      {/* Flame */}
      <path d="M39,118 Q41,114 39,110 Q37,114 39,118 Z" fill={P.golden}/>
      <path d="M39,118 Q40.5,115.5 39,112.5 Q37.5,115.5 39,118 Z" fill={P.cream} opacity="0.7"/>
    </svg>
  );
}

/* ── Hanging Plant ─────────────────────────────────────── */
function HangingPlantSVG() {
  return (
    <svg viewBox="0 0 70 120" fill="none" xmlns="http://www.w3.org/2000/svg"
         style={{ width: "58px", display: "block" }}>
      {/* Hanging wire */}
      <line x1="35" y1="0" x2="35" y2="30" stroke={P.woodDk} strokeWidth="1.5"/>
      {/* Pot */}
      <path d="M22,30 L18,56 L52,56 L48,30 Z" fill={P.golden}/>
      <rect x="17" y="25" width="36" height="9" rx="4" fill={P.olive}/>
      {/* Trailing vines */}
      <path d="M24,56 Q16,70 12,90" stroke={P.leaf} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M35,56 Q38,75 32,100" stroke={P.leaf} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M46,56 Q54,70 58,90" stroke={P.leaf} strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Leaves on vines */}
      <ellipse cx="10" cy="78" rx="9" ry="6" fill={P.leafLt} transform="rotate(-30,10,78)"/>
      <ellipse cx="14" cy="96" rx="8" ry="5" fill={P.leaf} transform="rotate(-15,14,96)"/>
      <ellipse cx="32" cy="84" rx="9" ry="6" fill={P.leafDk} transform="rotate(10,32,84)"/>
      <ellipse cx="28" cy="103" rx="7" ry="5" fill={P.leafLt} transform="rotate(5,28,103)"/>
      <ellipse cx="58" cy="78" rx="9" ry="6" fill={P.leaf} transform="rotate(30,58,78)"/>
      <ellipse cx="55" cy="96" rx="8" ry="5" fill={P.leafDk} transform="rotate(20,55,96)"/>
    </svg>
  );
}

/* ── Wall Clock ────────────────────────────────────────── */
function WallClockSVG() {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"
         style={{ width: "48px", display: "block" }}>
      <circle cx="30" cy="30" r="28" fill={P.cream} stroke={P.teal} strokeWidth="2.5"/>
      <circle cx="30" cy="30" r="22" fill="none" stroke={P.teal} strokeWidth="0.8" opacity="0.4"/>
      {/* Tick marks */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg,i)=>{
        const r = Math.PI * deg / 180;
        const x1 = 30 + 20 * Math.sin(r), y1 = 30 - 20 * Math.cos(r);
        const x2 = 30 + 23 * Math.sin(r), y2 = 30 - 23 * Math.cos(r);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={P.teal} strokeWidth={i % 3 === 0 ? 2 : 1} opacity="0.7"/>;
      })}
      {/* Hands */}
      <line x1="30" y1="30" x2="30" y2="12" stroke={P.teal} strokeWidth="2.2" strokeLinecap="round"/>
      <line x1="30" y1="30" x2="44" y2="34" stroke={P.teal} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="30" cy="30" r="2.5" fill={P.teal}/>
    </svg>
  );
}

/* ── Main Hero ─────────────────────────────────────────── */
export function LivingRoomHero() {
  const wallPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='38' height='38' viewBox='0 0 38 38'%3E%3Cg fill='%2397B8BC' opacity='0.45'%3E%3Cellipse cx='19' cy='5.5' rx='1.6' ry='3.2'/%3E%3Cellipse cx='19' cy='32.5' rx='1.6' ry='3.2'/%3E%3Cellipse cx='5.5' cy='19' rx='3.2' ry='1.6'/%3E%3Cellipse cx='32.5' cy='19' rx='3.2' ry='1.6'/%3E%3Ccircle cx='19' cy='19' r='1.4'/%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <section id="home" className="relative overflow-hidden"
             style={{ minHeight: "100vh", minWidth: 0 }}>

      {/* ── Wall ── */}
      <div className="absolute inset-0" style={{ bottom: "215px", backgroundColor: P.wall,
        backgroundImage: wallPattern, backgroundSize: "38px 38px" }}/>

      {/* ── Chair rail ── */}
      <div className="absolute left-0 right-0" style={{ bottom: "235px", height: "2px",
        background: "linear-gradient(90deg, transparent 0%, rgba(87,115,113,0.3) 20%, rgba(87,115,113,0.3) 80%, transparent 100%)" }}/>

      {/* ── Baseboard ── */}
      <div className="absolute left-0 right-0 z-10" style={{ bottom: "212px", height: "8px",
        background: "linear-gradient(180deg, #7A9895 0%, #577371 100%)", opacity: 0.55 }}/>

      {/* ── Floor (warm wood planks) ── */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "215px",
        background: "linear-gradient(180deg, #C4A268 0%, #B08848 100%)" }}>
        {/* Plank lines */}
        {[40,80,120,160,200].map(y => (
          <div key={y} style={{ position: "absolute", left: 0, right: 0, top: `${y}px`,
            height: "1px", background: "rgba(90,52,32,0.12)" }}/>
        ))}
        {/* Vertical grain cuts */}
        {[0,20,38,55,70,84,96,108,120].map((pct, i) => (
          <div key={i} style={{ position: "absolute", top: 0, bottom: 0,
            left: `${pct * 10}px`, width: "1px",
            background: "rgba(90,52,32,0.07)" }}/>
        ))}
      </div>

      {/* ── Rug ── */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10" style={{ bottom: "175px",
        width: "clamp(280px, 52%, 560px)", height: "140px", backgroundColor: P.blush,
        borderRadius: "12px", opacity: 0.85,
        backgroundImage: "repeating-linear-gradient(90deg, rgba(87,115,113,0.07) 0, rgba(87,115,113,0.07) 2px, transparent 2px, transparent 24px)",
        boxShadow: "0 4px 24px rgba(87,115,113,0.12)" }}/>
      {/* Rug border */}
      <div className="absolute left-1/2 -translate-x-1/2 z-11" style={{ bottom: "179px",
        width: "clamp(268px, 50.5%, 548px)", height: "132px", borderRadius: "10px",
        border: `2px solid ${P.teal}`, opacity: 0.18 }}/>

      {/* ── Welcome text block ── */}
      <div className="absolute left-0 right-0 text-center z-20 px-4"
           style={{ top: "clamp(68px, 9vh, 94px)" }}>
        <p style={{ fontFamily: "Nunito, sans-serif", color: P.teal, fontSize: "0.72rem",
          letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.4rem", opacity: 0.8 }}>
          ✦ Welcome to ✦
        </p>
        <h1 style={{
          fontFamily: "'Fraunces', serif",
          color: P.teal,
          fontSize: "clamp(1.8rem, 4.8vw, 3.2rem)",
          fontStyle: "italic",
          fontOpticalSizing: "auto",
          lineHeight: "1.15",
          marginBottom: "0.5rem",
          textShadow: "1px 1px 0 rgba(87,115,113,0.08)",
        }}>
          My Virtual Living Room
        </h1>
        <p style={{ fontFamily: "Nunito, sans-serif", color: P.teal, opacity: 0.65,
          fontSize: "clamp(0.78rem, 1.8vw, 0.88rem)" }}>
          Click on a frame to explore ✦
        </p>
      </div>

      {/* ── Hanging plant (top-right wall accent) ── */}
      <div className="absolute z-10 hidden lg:block" style={{ top: "clamp(80px, 12vh, 110px)", right: "clamp(60px, 8%, 130px)" }}>
        <HangingPlantSVG />
      </div>

      {/* ── Wall clock (top-left) ── */}
      <div className="absolute z-10 hidden lg:block" style={{ top: "clamp(60px, 10vh, 95px)", left: "clamp(150px, 14%, 240px)" }}>
        <WallClockSVG />
      </div>

      {/* ── Gallery wall frames ── */}
      <div className="absolute left-0 right-0 z-20 flex justify-center items-end gap-3 md:gap-5 px-2"
           style={{ top: "clamp(195px, 28vh, 270px)", flexWrap: "wrap" }}>
        {FRAMES.map(frame => <DoodleFrame key={frame.id} frame={frame} />)}
      </div>

      {/* ── Bookshelf (left wall) ── */}
      <div className="absolute z-20 hidden md:block" style={{ left: "clamp(16px, 2.5%, 55px)", bottom: "212px",
        width: "clamp(110px, 11%, 152px)" }}>
        <BookshelfSVG />
      </div>

      {/* ── Left floor plant ── */}
      <div className="absolute z-20 hidden lg:block" style={{ left: "clamp(180px, 18%, 280px)", bottom: "212px" }}>
        <FloorPlantSVG />
      </div>

      {/* ── Couch (large center) ── */}
      <div className="absolute left-1/2 -translate-x-1/2 z-25" style={{ bottom: "156px",
        width: "clamp(300px, 62%, 620px)" }}>
        <CouchSVG />
      </div>

      {/* ── Coffee table ── */}
      <div className="absolute left-1/2 -translate-x-1/2 z-30" style={{ bottom: "170px",
        width: "clamp(160px, 24%, 220px)" }}>
        <CoffeeTableSVG />
      </div>

      {/* ── Right side table ── */}
      <div className="absolute z-20 hidden md:block" style={{ right: "clamp(20px, 4%, 80px)", bottom: "212px" }}>
        <SideTableSVG />
      </div>

      {/* ── Right floor plant ── */}
      <div className="absolute z-20 hidden lg:block" style={{ right: "clamp(100px, 14%, 210px)", bottom: "212px" }}>
        <FloorPlantSVG />
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-30"
           style={{ fontFamily: "Nunito, sans-serif", color: P.teal, fontSize: "0.65rem",
             letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.6,
             animation: "livingScroll 2.2s ease-in-out infinite" }}>
        <span>Scroll</span>
        <ChevronDown size={13} strokeWidth={2}/>
      </div>

      <style>{`
        @keyframes livingScroll {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(5px); }
        }
      `}</style>
    </section>
  );
}
