import { useState, useRef, useEffect, MouseEvent } from "react";

const CanvasFigure = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const canvasWidth = 512;
  const canvasHeight = 512;
  const gridSize = 16;

  const startDrawing = (e: MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (e: MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    // Ensure canvas exists and 2d context is accessible!
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / gridSize) * gridSize;
    const y = Math.floor((e.clientY - rect.top) / gridSize) * gridSize;

    context.fillStyle = "#FBBF24";
    context.fillRect(x, y, 16, 16);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // draw the grid
    drawGrid(context);

    // Add event listeners with the correct types for MouseEvent
    const mouseDownListener = (e: MouseEvent) => startDrawing(e);
    const mouseUpListener = () => stopDrawing();
    const mouseMoveListener = (e: MouseEvent) => draw(e);

    canvas.addEventListener("mousedown", mouseDownListener);
    canvas.addEventListener("mouseup", mouseUpListener);
    canvas.addEventListener("mouseout", mouseUpListener); // Stop drawing if mouse leaves canvas
    canvas.addEventListener("mousemove", mouseMoveListener);

    return () => {
      // Clean up event listeners
      canvas.removeEventListener("mousedown", mouseDownListener);
      canvas.removeEventListener("mouseup", mouseUpListener);
      canvas.removeEventListener("mouseout", mouseUpListener);
      canvas.removeEventListener("mousemove", mouseMoveListener);
    };
  }, [startDrawing, draw]);

  // draw the grid
  const drawGrid = (context: CanvasRenderingContext2D) => {
    context.strokeStyle = "#E5E7EB";
    context.lineWidth = 0.5;

    for (
      let x = 0, y = 0;
      x <= canvasWidth || y <= canvasHeight;
      x += gridSize, y += gridSize
    ) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, canvasHeight);
      context.moveTo(0, y); // Start at the left of the canvas
      context.lineTo(canvasWidth, y); // Draw to the right of the canvas
      context.stroke();
    }
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: "1px solid black", backgroundColor: "#f5f5f5" }}
      />
    </div>
  );
};

export default CanvasFigure;
