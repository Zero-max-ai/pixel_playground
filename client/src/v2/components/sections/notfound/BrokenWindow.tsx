import { brokenWindow } from "./window";

const BrokenWindow = () => {
  return (
    <div className="sm:py-10 py-5 flex items-center justify-center">
      <div className="h-full flex flex-col items-center justify-center gap-[1px]">
        {brokenWindow.map((row, index) => (
          <div key={index} className="flex items-center justify-center">
            {row.map((color, pixelIndex) => (
              <div key={pixelIndex} className={`sm:w-[24px] sm:h-[24px] w-[14px] h-[14px] ${color}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrokenWindow;
