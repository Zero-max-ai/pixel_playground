import { Link, NavLink } from "react-router-dom";
import { navigationLinks, navigationLinksProps } from "../utils/index";

import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-10 lg:px-32 py-2 shadow">
      <Link to={"/"} className="poppins-black text-[20px] lg:text-[36px]">
        PixelPlayground
      </Link>
      <div className="flex items-center gap-10 font-semibold lg:block hidden">
        {navigationLinks.map(({ title, renderTo }: navigationLinksProps) => {
          return (
            <NavLink
              key={title}
              to={renderTo}
              className="hover:underline underline-offset-4"
            >
              {title}
            </NavLink>
          );
        })}
      </div>
      <HamburgerMenu />
    </header>
  );
};

export default Navbar;
