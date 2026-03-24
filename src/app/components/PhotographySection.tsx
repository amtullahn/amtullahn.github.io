import { useState, useEffect } from "react";
import { Camera, ArrowLeft, ArrowRight, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

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
        backgroundColor: "#fff",
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

        {/* Carousel */}
        <div style={{ position: "relative", paddingLeft: "80px", paddingRight: "80px" }}>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {PHOTOGRAPHY.map((photo) => (
                <CarouselItem key={photo.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div
                    onMouseEnter={() => setHoveredId(photo.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    style={{
                      position: "relative",
                      borderRadius: "14px",
                      overflow: "hidden",
                      backgroundColor: PEACH,
                      border: `2px solid ${photo.accentColor}40`,
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      transform:
                        hoveredId === photo.id ? "translateY(-8px)" : "translateY(0)",
                      boxShadow:
                        hoveredId === photo.id
                          ? `0 12px 32px ${photo.accentColor}20`
                          : "0 4px 12px rgba(23,58,43,0.08)",
                    }}
                  >
                    {/* Image */}
                    <div
                      onClick={() => setExpandedId(photo.id)}
                      style={{
                        width: "100%",
                        paddingBottom: "75%",
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: "#f5f5f5",
                        cursor: "pointer",
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

                      {/* Overlay */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: `${FOREST}00`,
                          transition: "background-color 0.3s ease",
                          background:
                            hoveredId === photo.id
                              ? `linear-gradient(180deg, transparent, ${FOREST}40)`
                              : "transparent",
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div style={{ padding: "18px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "8px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.67rem",
                            color: photo.accentColor,
                            backgroundColor: `${photo.accentColor}15`,
                            padding: "3px 10px",
                            borderRadius: "100px",
                            fontWeight: "700",
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                          }}
                        >
                          {photo.category}
                        </span>
                        <Camera
                          size={14}
                          strokeWidth={2}
                          style={{ color: photo.accentColor, opacity: 0.6 }}
                        />
                      </div>

                      <h3
                        style={{
                          fontFamily: "'Fraunces', serif",
                          color: FOREST,
                          fontSize: "1rem",
                          fontWeight: "600",
                          marginBottom: "4px",
                          lineHeight: "1.3",
                        }}
                      >
                        {photo.title}
                      </h3>

                      <p
                        style={{
                          color: FOREST,
                          opacity: 0.55,
                          fontSize: "0.8rem",
                          lineHeight: "1.5",
                        }}
                      >
                        {photo.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious
              className="bg-forest text-peach hover:bg-sage"
              style={{
                backgroundColor: FOREST,
                color: PEACH,
                border: "none",
              }}
            />
            <CarouselNext
              className="bg-forest text-peach hover:bg-sage"
              style={{
                backgroundColor: FOREST,
                color: PEACH,
                border: "none",
              }}
            />
          </Carousel>
        </div>

        {/* Info text */}
        <p
          style={{
            marginTop: "clamp(40px, 6vw, 64px)",
            color: FOREST,
            opacity: 0.4,
            fontSize: "0.82rem",
            textAlign: "center",
          }}
        >
          Click to expand • Use arrows to navigate • Captured with passion for light and composition
        </p>

        {/* Expanded Image Modal */}
        {expandedPhoto && (
          <div
            onClick={() => setExpandedId(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: `${FOREST}CC`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              animation: "fadeIn 0.3s ease-out",
            }}
          >
            {/* Modal Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: "20px",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                animation: "slideUp 0.3s ease-out",
              }}
            >
              {/* Image */}
              <img
                src={expandedPhoto.image}
                alt={expandedPhoto.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  backgroundColor: "#f5f5f5",
                }}
              />

              {/* Close Button */}
              <button
                onClick={() => setExpandedId(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  backgroundColor: `${FOREST}E6`,
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = FOREST;
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `${FOREST}E6`;
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <X size={22} strokeWidth={2.5} />
              </button>

              {/* Photo Info */}
              <div style={{ padding: "24px", backgroundColor: "#fff" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <span
                    style={{
                      fontSize: "0.67rem",
                      color: expandedPhoto.accentColor,
                      backgroundColor: `${expandedPhoto.accentColor}15`,
                      padding: "3px 10px",
                      borderRadius: "100px",
                      fontWeight: "700",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {expandedPhoto.category}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: FOREST,
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  {expandedPhoto.title}
                </h3>
                <p
                  style={{
                    color: FOREST,
                    opacity: 0.65,
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  {expandedPhoto.description}
                </p>
              </div>
            </div>
          </div>
        )}

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
    
      </div>
    </section>
  );
}
