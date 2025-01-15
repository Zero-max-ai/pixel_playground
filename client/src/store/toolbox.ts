import { create } from 'zustand';

type Tool = "pointer" | "pencil" | "eraser" | "line" | "fill";

interface CanvasState {
  selectedTool: Tool;
  color: string;
  gridSize: number;
  isDrawing: boolean;
  setSelectedTool: (tool: Tool) => void;
  setColor: (color: string) => void;
  setGridSize: (size: number) => void
  setIsDrawing: (drawing: boolean) => void
}

const useStore = create<CanvasState>((set) => ({

  selectedTool: "pointer",
  setSelectedTool: (tool) => set({selectedTool: tool}),

  color: "#000000", // default color pointer
  setColor: (newColor) => set({color: newColor}),

  gridSize: 20, // gridSize
  setGridSize: (size) => set({ gridSize: size }),

  isDrawing: false, // default drawing state
  setIsDrawing: (drawing) => set({ isDrawing: drawing }),
}))

export default useStore;
