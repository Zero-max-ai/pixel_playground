import { navigationLinks, navigationLinksProps } from "../utils/index";
import { NavLink } from "react-router-dom";

import hamburgerStore from "../store/hamburgerStore";

const MobileMenu = () => {
  const { menuStatus, toggleMenu } = hamburgerStore();
  return (
    <>
      {" "}
      {menuStatus && (
        <div className="absolute block lg:hidden left-0 top-12 min-w-full h-[94vh] bg-[#F9F8F6]">
          <div className="h-full w-full flex flex-col gap-5 items-center justify-center">
            {navigationLinks.map(
              ({ title, renderTo }: navigationLinksProps) => {
                return (
                  <NavLink
                    key={title}
                    to={renderTo}
                    onClick={toggleMenu}
                    className="poppins-bold text-2xl hover:underline underline-offset-4"
                  >
                    {title}
                  </NavLink>
                );
              }
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
