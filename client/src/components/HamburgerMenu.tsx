import hamburgerStore from "../store/hamburgerStore";
import { motion } from "framer-motion";

const HamburgerMenu = () => {
  const { menuStatus, toggleMenu } = hamburgerStore();
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:hidden flex flex-col gap-1 items-end justify-center cursor-pointer"
      onClick={toggleMenu}
    >
      <motion.span
        className="bg-black w-7 h-0.5 rounded-md"
        animate={{
          rotate: menuStatus ? -135 : 0,
          translateY: menuStatus ? 5 : 0,
        }}
      />
      <motion.span
        className="bg-black w-7 h-0.5 rounded-md"
        animate={{
          rotate: menuStatus ? 135 : 0,
          translateY: menuStatus ? -0.5 : 0,
        }}
      />
    </motion.div>
  );
};

export default HamburgerMenu;
