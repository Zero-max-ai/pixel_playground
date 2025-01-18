import { Link, NavLink } from "react-router-dom";
import { navigationLinks } from "../utils/index";
import { motion } from "framer-motion";

import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex items-center justify-between px-10 lg:px-32 py-2 shadow"
    >
      <div>
        <Link to={"/"} className="poppins-black text-[20px]">
          PixelPlayground
        </Link>
      </div>
      <div className="flex items-center gap-10 font-semibold block max-lg:hidden">
        {navigationLinks.map(({ title, renderTo }) => {
          return (
            <div key={title}>
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
            </div>
          );
        })}
      </div>
      <HamburgerMenu />
      <MobileMenu />
    </motion.header>
  );
};

export default Navbar;
