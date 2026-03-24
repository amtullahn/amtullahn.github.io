import { X } from "lucide-react";

/* ── Palette ── */
const FOREST = "#173A2B";

interface Photo {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  accentColor: string;
}

interface PhotoModalProps {
  photo: Photo;
  onClose: () => void;
}

export function PhotoModal({ photo, onClose }: PhotoModalProps) {
  return (
    <>
      <div
        onClick={onClose}
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
            src={photo.image}
            alt={photo.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "#f5f5f5",
            }}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
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
              {photo.title}
            </h3>
            <p
              style={{
                color: FOREST,
                opacity: 0.65,
                fontSize: "0.95rem",
                lineHeight: "1.6",
              }}
            >
              {photo.description}
            </p>
          </div>
        </div>
      </div>

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
    </>
  );
}
