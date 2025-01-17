import { Link, NavLink } from "react-router-dom";
import { navigationLinks } from "../../utils/";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-20 py-2">
      <Link to={"/"} className="bowlby-one text-xl">
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
    </header>
  );
};

export default Navbar;
