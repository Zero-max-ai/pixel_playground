import hamburgerStore from "../store/hamburgerStore";
import { motion } from "framer-motion";

const HamburgerMenu = () => {
  const { menuStatus, toggleMenu } = hamburgerStore();
  return (
    <div
      className="lg:hidden flex flex-col gap-1 items-end justify-center"
      onClick={toggleMenu}
    >
      <motion.span
        className="bg-black w-7 h-0.5 rounded-md"
        animate={{
          rotate: menuStatus ? 45 : 0,
          translateY: menuStatus ? 5 : 0,
        }}
      />
      <motion.span
        className="bg-black w-7 h-0.5 rounded-md"
        animate={{
          rotate: menuStatus ? -45 : 0,
          translateY: menuStatus ? -0.5 : 0,
        }}
      />
      <motion.span
        className="bg-black w-4 h-0.5 rounded-md"
        animate={{ opacity: menuStatus ? 0 : 1, x: menuStatus ? 1000 : 0 }}
        transition={{ duration: 0.35 }}
      />
    </div>
  );
};

export default HamburgerMenu;
