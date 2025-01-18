import { navigationLinks } from "../../utils/";
import { NavLink } from "react-router-dom";
import { hamburgerStore } from '../store/hamburger'

const MobileMenu = () => {
  const { toggleMenu } = hamburgerStore();
  return (
    <div className="h-full flex flex-col items-center justify-center gap-5 sm:hidden">
      {navigationLinks.map(({ title, renderTo }) => (
        <NavLink
          key={renderTo}
          to={renderTo}
          style={({ isActive }) => ({
            background: isActive ? "#a5b4fc" : "transparent",
          })}
          onClick={toggleMenu}
          className="anonymous-pro-regular py-2 px-1 hover:underline underline-offset-4"
        >
          {title}
        </NavLink>
      ))}
    </div>
  );
};

export default MobileMenu;
