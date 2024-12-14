import hamburgerStore from "../store/hamburgerStore";
import { motion } from "framer-motion";

const HamburgerMenu = () => {
  const { menuStatus, toggleMenu } = hamburgerStore();
  return (
    <div
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
    </div>
  );
};

export default HamburgerMenu;
