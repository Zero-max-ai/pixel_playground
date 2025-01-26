import React, { useState, ChangeEvent } from "react";

const PixelatedGridCanvas: React.FC = () => {
  const [gridSize, setGridSize] = useState<number>(16); // Default grid size
  const [selectedColor, setSelectedColor] = useState<string>("#000000"); // Default color
  const [grid, setGrid] = useState<string[]>(Array(16 * 16).fill("#ffffff")); // Default white grid
  const [isDragging, setIsDragging] = useState<boolean>(false); // Track mouse dragging state

  // Handle pixel click to change color
  const handlePixelClick = (index: number): void => {
    const newGrid = [...grid];
    newGrid[index] = selectedColor;
    setGrid(newGrid);
  };

  // Handle pixel dragging to change color
  const handlePixelDrag = (index: number): void => {
    if (isDragging) {
      const newGrid = [...grid];
      newGrid[index] = selectedColor;
      setGrid(newGrid);
    }
  };

  // Reset grid to default white
  const handleReset = (): void => {
    setGrid(Array(gridSize * gridSize).fill("#ffffff"));
  };

  // Handle grid size change with validation
  const handleGridSizeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const size = Math.max(16, Math.min(64, parseInt(event.target.value, 10))); // Clamp size between 16 and 64
    setGridSize(size);
    setGrid(Array(size * size).fill("#ffffff"));
  };

  return (
    <div
      className="min-h-screen bg-indigo-50 flex flex-col items-center p-4"
      onMouseUp={() => setIsDragging(false)}
    >
      <h1 className="text-2xl font-bold text-gray-700 mb-6">
        Pixel Playground
      </h1>

      {/* Controls */}
      <div className="flex gap-4 mb-6">
        {/* Color Picker */}
        <div className="flex flex-col items-center">
          <label className="text-sm font-medium text-gray-600 mb-2">
            Pick a Color
          </label>
          <input
            type="color"
            value={selectedColor}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSelectedColor(e.target.value)
            }
            className="w-10 h-10 cursor-pointer border border-gray-300 rounded"
          />
        </div>

        {/* Grid Size Input */}
        <div className="flex flex-col items-center">
          <label className="text-sm font-medium text-gray-600 mb-2">
            Grid Size ({gridSize}x{gridSize})
          </label>
          <input
            type="number"
            value={gridSize}
            onChange={handleGridSizeChange}
            min={4}
            max={64}
            className="w-16 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Reset Button */}
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={handleReset}
        >
          Reset Grid
        </button>
      </div>

      {/* Grid */}
      <div
        className="grid border border-gray-300"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          width: "80%",
          maxWidth: "600px",
          aspectRatio: "1 / 1",
        }}
      >
        {grid.map((color, index) => (
          <div
            key={index}
            onMouseDown={() => {
              setIsDragging(true);
              handlePixelClick(index);
            }}
            onMouseEnter={() => handlePixelDrag(index)}
            style={{ backgroundColor: color }}
            className="border border-slate-100 w-full h-full cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PixelatedGridCanvas;
