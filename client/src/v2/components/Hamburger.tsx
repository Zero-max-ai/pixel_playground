import { motion } from "framer-motion";
import { hamburgerStore } from "../store/hamburger";

const Hamburger = () => {
  const { isOpen, toggleMenu } = hamburgerStore();
  return (
    <div className="md:hidden block flex flex-col gap-1" onClick={toggleMenu}>
      <motion.span
        className={`bg-black w-8 h-0.5`}
        animate={{ rotate: isOpen ? -135 : 0, translateY: isOpen ? 5 : 0 }}
      />
      <motion.span
        className={`bg-black w-8 h-0.5`}
        animate={{ rotate: isOpen ? 135 : 0 }}
      />
    </div>
  );
};

export default Hamburger;
