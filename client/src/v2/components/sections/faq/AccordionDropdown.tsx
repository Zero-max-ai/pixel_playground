import { useState } from "react";
import Arrow from "./Arrow.svg";
import { motion } from "framer-motion";

interface AccordionDropdownProps {
  header: string;
  context: string;
}

const AccordionDropdown: React.FC<AccordionDropdownProps> = ({
  header,
  context,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full py-2 px-1 bg-indigo-100">
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h1 className="anonymous-pro-bold">{header}</h1>
        <img
          src={Arrow}
          className={`w-[20px] h-[20px] select-none ${isOpen ? "rotate-180" : ""} duration-200`}
        />
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={isOpen ? { height: "auto" } : { height: 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <p className="anonymous-pro-regular text-sm">{context}</p>
      </motion.div>
    </div>
  );
};

export default AccordionDropdown;
