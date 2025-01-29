import React, { useRef, useState, useEffect } from "react";
import SectionLayout from "../../layout/SectionLayout";
import "./styles.css";

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [isGridLinesVisible, setIsGridLinesVisible] = useState(true);
  const isDragging = useRef(false);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleGlobalPointerUp = () => {
      isDragging.current = false;
    };

    const handlePointerLeave = () => {
      isDragging.current = false;
    };

    window.addEventListener("pointerup", handleGlobalPointerUp);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointerup", handleGlobalPointerUp);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  const handlePixelInteraction = (event: PointerEvent | React.PointerEvent) => {
    const target = event.target as HTMLDivElement;
    if (target.classList.contains("pixel")) {
      if (
        event.type === "pointerdown" ||
        (event.type === "pointermove" && isDragging.current)
      ) {
        target.style.backgroundColor = selectedColor;
      }
    }
  };

  const handleEraser = () => {
    setSelectedColor("#ffffff");
  }

  return (
    <SectionLayout>
      <div className="flex items-center justify-center gap-10 w-11/12 sm:w-7/12 mx-auto">
        {/* Grid */}
        <div
          ref={gridRef}
          className={`canvas-grid bg-white cursor-pointer ${isGridLinesVisible ? "border-4 border-indigo-300" : ""}`}
          onPointerDown={(e) => {
            isDragging.current = true;
            handlePixelInteraction(e);
          }}
          onPointerMove={handlePixelInteraction}
          onPointerUp={() => {
            isDragging.current = false;
          }}
          style={{ touchAction: "none" }} // Prevent touch scrolling
        >
          {Array.from({ length: 32 * 32 }).map((_, index) => (
            <div
              key={index}
              className="pixel bg-white border border-slate-100"
            />
          ))}
        </div>
        <div>
          <div onClick={handleEraser}>Button</div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default App;
