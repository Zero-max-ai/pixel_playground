import React, { useRef, useState, useEffect } from "react";
import SectionLayout from "../../layout/SectionLayout";
import "./styles.css";
import GridEraser from "../../../../assets/GridEraser.png";
import Trash from "../../../../assets/Trash.png";

const App: React.FC = () => {
  //  const [eraser, setEraser] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [isGridLinesVisible, setIsGridLinesVisible] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
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
        // if (eraser) target.style.backgroundColor = "#ffffff";
        target.style.backgroundColor = selectedColor;
      }
    }
  };

  const handleReset = () => {
    const pixels = gridRef.current.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
      (pixel as HTMLDivElement).style.backgroundColor = "#ffffff";
    });

    setDeleteConfirm(false);
  }

  return (
    <SectionLayout>
      <div className="flex flex-col items-center justify-center gap-5 w-11/12 sm:w-7/12 mx-auto pb-10">
        <div className="flex items-center justify-center gap-10">
          {/* Grid */}
          <div
            ref={gridRef}
            className="canvas-grid bg-white cursor-pointer border-4 border-indigo-300"
            onPointerDown={(e) => {
              isDragging.current = true;
              handlePixelInteraction(e);
            }}
            onPointerMove={handlePixelInteraction}
            onPointerUp={() => {
              isDragging.current = false;
            }}
            style={{ touchAction: "none" }}
          >
            {Array.from({ length: 32 * 32 }).map((_, index) => (
              <div
                key={index}
                className={`pixel bg-white border-oragen-500 ${isGridLinesVisible ? "" : "border"}`}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3 bg-indigo-50 p-3 rounded-md">
            {/* color picker */}
            <button className={`outline-none w-[32px] h-[32px] rounded-full`}>
              <input
                type="color"
                id="selectedColorPicker"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              />
            </button>
            {/*grid lines remover*/}
            <button
              onClick={() => setIsGridLinesVisible(!isGridLinesVisible)}
              className={`outline-none p-1 rounded-full ${isGridLinesVisible ? "bg-indigo-200" : ""}`}
            >
              <img src={GridEraser} className="w-[32px] h-[32px]" />
            </button>

            {/* delete button */}
            <button
              onClick={() => setDeleteConfirm(true)}
              className="outline-none p-1"
            >
              <img src={Trash} className="w-[32px] h-[32px]" />
            </button>

            {/* eraser */}
            {/*
          <button
            onClick={() => setEraser(!eraser)}
            className={`outline-none w-[48px] h-[48px] p-2 ${eraser ? "bg-indigo-300" : ""} rounded-full`}
          >
            <img src={GridEraser} className="" />
          </button>
          */}
          </div>
        </div>
        <span className="font-sm anonymous-pro-bold warn">
          WARNING: please download the image before refreshing or closing the
          page.
        </span>

        {deleteConfirm && (
          <div className="absolute top-50 left-50 bg-indigo-400 z-50 px-10 py-5 text-white">
            <h1 className="bowlby-one text-sm">
              DO YOU WANT TO REMOVE YOUR ART WORK?
            </h1>
            <div className="anonymous-pro-bold text-xs flex items-center justify-center gap-5">
              <span
                className="bg-red-600 px-4 py-1 cursor-pointer"
                onClick={handleReset}
              >
                YES
              </span>
              <span
                className="bg-green-600 px-4 py-1 cursor-pointer"
                onClick={() => setDeleteConfirm(false)}
              >
                NO
              </span>
            </div>
          </div>
        )}
      </div>
    </SectionLayout>
  );
};

export default App;
