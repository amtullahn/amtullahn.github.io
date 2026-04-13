import { useState } from "react";
import { PhotoModal } from "./PhotoModal";

/* ── Palette ── */
const FOREST = "#173A2B";
const SAGE = "#5A7969";
const TERRA = "#CB6B4D";
const PEACH = "#FBE8D8";
const TAN = "#E5C7B1";
const CARAMEL = "#BB885E";

const PHOTOGRAPHY = [
  {
    id: 1,
    title: "Mountain Landscape",
    category: "Landscape",
    description: "Golden hour light across alpine peaks",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    accentColor: FOREST,
  },
  {
    id: 2,
    title: "Urban Geometry",
    category: "Architecture",
    description: "Minimalist urban exploration",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd3d3b?w=800&h=600&fit=crop",
    accentColor: TERRA,
  },
  {
    id: 3,
    title: "Forest Canopy",
    category: "Nature",
    description: "Dappled light through the trees",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=600&fit=crop",
    accentColor: SAGE,
  },
  {
    id: 4,
    title: "Desert Sunrise",
    category: "Landscape",
    description: "Early morning in the dunes",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    accentColor: CARAMEL,
  },
  {
    id: 5,
    title: "Coastal View",
    category: "Seascape",
    description: "Waves meeting the shore",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    accentColor: FOREST,
  },
];

export function PhotographySection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const expandedPhoto = PHOTOGRAPHY.find((p) => p.id === expandedId);

  return (
    <section
      id="photography"
      style={{
        backgroundColor: TAN,
        fontFamily: "Nunito, sans-serif",
        padding: "clamp(64px, 10vw, 112px) clamp(20px, 6vw, 80px)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <div style={{ width: "32px", height: "1.5px", backgroundColor: TERRA }} />
          <span
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              color: FOREST,
              textTransform: "uppercase",
              opacity: 0.55,
              fontWeight: "700",
            }}
          >
            Gallery
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            color: FOREST,
            fontSize: "clamp(1.9rem, 4.8vw, 2.9rem)",
            fontStyle: "italic",
            marginBottom: "12px",
            lineHeight: "1.2",
          }}
        >
          Photography
        </h2>

        <p
          style={{
            color: FOREST,
            opacity: 0.55,
            fontSize: "0.93rem",
            marginBottom: "clamp(40px, 6vw, 64px)",
            maxWidth: "500px",
            lineHeight: "1.7",
          }}
        >
          A curated collection capturing moments through light, composition, and perspective.
        </p>

        {/* Polaroid Gallery Wall */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "32px 24px",
            rowGap: "40px",
          }}
        >
          {PHOTOGRAPHY.map((photo, idx) => (
            <div
              key={photo.id}
              onMouseEnter={() => setHoveredId(photo.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setExpandedId(photo.id)}
              style={{
                position: "relative",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                transform:
                  hoveredId === photo.id
                    ? "translateY(-8px) rotate(0deg)"
                    : `rotate(${[-2, -1, 1, 2, -1.5][idx % 5]}deg)`,
              }}
            >
              {/* Polaroid Frame */}
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "12px",
                  paddingBottom: "48px",
                  borderRadius: "2px",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                  transition: "box-shadow 0.3s ease",
                  boxShadow: hoveredId === photo.id
                    ? "0 12px 28px rgba(0, 0, 0, 0.25)"
                    : "0 8px 20px rgba(0, 0, 0, 0.15)",
                }}
              >
                {/* Photo Container */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "100%",
                    overflow: "hidden",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                      transform: hoveredId === photo.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                </div>

                {/* Polaroid Label */}
                <div style={{ padding: "12px 0 0 0" }}>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      color: FOREST,
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      margin: "0 0 4px 0",
                      opacity: hoveredId === photo.id ? 1 : 0.8,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    {photo.title}
                  </h3>
                  <p
                    style={{
                      color: FOREST,
                      fontSize: "0.75rem",
                      margin: "0",
                      opacity: 0.5,
                    }}
                  >
                    {photo.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info text */}
        <p
          style={{
            marginTop: "48px",
            color: FOREST,
            opacity: 0.4,
            fontSize: "0.82rem",
            textAlign: "center",
          }}
        >
          Click any polaroid to expand and view details
        </p>

        {/* Expanded Image Modal */}
        {expandedPhoto && <PhotoModal photo={expandedPhoto} onClose={() => setExpandedId(null)} />}
    
      </div>
    </section>
  );
}
