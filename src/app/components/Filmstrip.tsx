import { useState, useRef, useEffect } from "react";

interface FilmstripProps {
  children: React.ReactNode;
  increment?: number;
}

export function Filmstrip({ children, increment = 250 }: FilmstripProps) {
  const [scrollPos, setScrollPos] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const adjustPos = (direction: number) => {
    if (!stripRef.current || !viewportRef.current) return;

    const stripWidth = stripRef.current.getBoundingClientRect().width;
    const viewportWidth = viewportRef.current.getBoundingClientRect().width;
    const offset = viewportWidth - stripWidth;

    let newPos = scrollPos + direction;

    if (direction > 0) {
      newPos = Math.min(newPos, 0);
    }

    if (direction < 0) {
      newPos = Math.max(newPos, offset);
    }

    setScrollPos(newPos);
  };

  useEffect(() => {
    if (stripRef.current) {
      const stripHeight = stripRef.current.getBoundingClientRect().height;
      if (viewportRef.current?.parentElement) {
        viewportRef.current.parentElement.style.height = `${stripHeight}px`;
      }
    }
  }, []);

  return (
    <div
      style={{
        padding: 0,
        margin: 0,
        display: "flex",
      }}
    >
      <button
        onClick={() => adjustPos(increment)}
        style={{
          border: 0,
          margin: 0,
          height: "100%",
          backgroundColor: "transparent",
          cursor: "pointer",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#173A2B",
          fontSize: "20px",
          fontWeight: "bold",
          transition: "opacity 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        &lt;
      </button>

      <div
        ref={viewportRef}
        style={{
          overflowX: "hidden",
          position: "relative",
          width: "100%",
          flex: 1,
        }}
      >
        {/* Left gradient overlay */}
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            top: 0,
            left: 0,
            bottom: 0,
            width: "100%",
            background: "linear-gradient(to right, rgba(229, 199, 177, 1) 10%, rgba(229, 199, 177, 0) 30%)",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            pointerEvents: "none",
          }}
        />

        {/* Right gradient overlay */}
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            top: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            background: "linear-gradient(to right, rgba(229, 199, 177, 0) 70%, rgba(229, 199, 177, 1) 90%)",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            pointerEvents: "none",
          }}
        />

        <div
          ref={stripRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            whiteSpace: "nowrap",
            display: "flex",
            left: `${scrollPos}px`,
            transition: "left 0.4s ease",
          }}
        >
          {children}
        </div>
      </div>

      <button
        onClick={() => adjustPos(-increment)}
        style={{
          border: 0,
          margin: 0,
          height: "100%",
          backgroundColor: "transparent",
          cursor: "pointer",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#173A2B",
          fontSize: "20px",
          fontWeight: "bold",
          transition: "opacity 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        &gt;
      </button>
    </div>
  );
}
