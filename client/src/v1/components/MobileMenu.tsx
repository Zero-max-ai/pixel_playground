import { navigationLinks, navigationLinksProps } from "../utils/index";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import hamburgerStore from "../store/hamburgerStore";

const MobileMenu = () => {
  const { menuStatus, toggleMenu } = hamburgerStore();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: menuStatus ? 1 : 0, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="z-50 absolute block top-12 left-0 w-full py-2 px-5"
    >
      {" "}
      {menuStatus && (
        <div className="block lg:hidden bg-[#F1F1F1] px-10 py-5">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: menuStatus ? 1 : 0, scale: 1 }}
            exit={{ opacity: 2 }}
            transition={{ duration: 0.25 }}
            className="h-full w-full flex flex-col gap-5 items-center justify-center"
          >
            <NavLink
              to={"/"}
              onClick={toggleMenu}
              className="poppins-black text-xl hover:underline underline-offset-4"
            >
              Home
            </NavLink>
            {navigationLinks.map(
              ({ title, renderTo }: navigationLinksProps) => {
                return (
                  <NavLink
                    key={title}
                    to={renderTo}
                    onClick={toggleMenu}
                    className="poppins-black text-xl hover:underline underline-offset-4"
                  >
                    {title}
                  </NavLink>
                );
              }
            )}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default MobileMenu;
