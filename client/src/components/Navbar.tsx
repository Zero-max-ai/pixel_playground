import { Link, NavLink } from "react-router-dom";
import { navigationLinks, navigationLinksProps } from "../utils/index";

import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="relative flex items-center justify-between px-10 lg:px-32 py-2 shadow">
      <Link to={"/"} className="poppins-black text-[20px]">
        PixelPlayground
      </Link>
      <div className="flex items-center gap-10 font-semibold block max-lg:hidden">
        {navigationLinks.map(({ title, renderTo }: navigationLinksProps) => {
          return (
            <NavLink
              key={title}
              to={renderTo}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#FFF6D5" : "transparent",
                textDecoration: isActive ? "underline" : "none",
              })}
              className="hover:underline underline-offset-4 p-2"
            >
              {title}
            </NavLink>
          );
        })}
      </div>
      <HamburgerMenu />
      <MobileMenu />
    </header>
  );
};

export default Navbar;
