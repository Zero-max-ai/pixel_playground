import { Link, NavLink } from "react-router-dom";
import { navigationLinks } from "../../utils/";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";
import { hamburgerStore } from "../store/hamburger";

const Navbar = () => {
  const { isOpen } = hamburgerStore();
  return (
    <header className="flex items-center justify-between md:px-20 px-5 py-2 shadow">
      <Link to={"/"} className="bowlby-one sm:text-xl">
        Pixel Playground
      </Link>
      <div className="flex items-center gap-5 max-sm:hidden">
        {navigationLinks.map(({ title, renderTo }) => (
          <NavLink
            key={renderTo}
            to={renderTo}
            style={({ isActive }) => ({
              background: isActive ? "#a5b4fc" : "transparent",
            })}
            className="anonymous-pro-regular py-2 px-1 hover:underline underline-offset-4"
          >
            {title}
          </NavLink>
        ))}
      </div>
      <Hamburger />
      {isOpen && (
        <div className="absolute sm:hidden top-10 left-0 h-[90vh] bg-indigo-200 w-full">
          <MobileMenu />
        </div>
      )}
    </header>
  );
};

export default Navbar;
