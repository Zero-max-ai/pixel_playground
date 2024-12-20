import { Link, NavLink } from "react-router-dom";
import { navigationLinks, navigationLinksProps } from "../utils/index";
import { motion } from "framer-motion";

import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="relative flex items-center justify-between px-10 lg:px-32 py-2 shadow">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link to={"/"} className="poppins-black text-[20px]">
          PixelPlayground
        </Link>
      </motion.div>
      <div className="flex items-center gap-10 font-semibold block max-lg:hidden">
        {navigationLinks.map(
          ({ title, renderTo }: navigationLinksProps, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                key={title}
              >
                <NavLink
                  to={renderTo}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#FFF6D5" : "transparent",
                    textDecoration: isActive ? "underline" : "none",
                  })}
                  className="hover:underline underline-offset-4 p-2"
                >
                  {title}
                </NavLink>
              </motion.div>
            );
          }
        )}
      </div>
      <HamburgerMenu />
      <MobileMenu />
    </header>
  );
};

export default Navbar;
