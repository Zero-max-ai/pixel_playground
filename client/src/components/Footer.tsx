import { Link } from "react-router-dom";
import { navigationLinks, navigationLinksProps } from "../utils/index";

const Footer = () => {
  return (
    <footer className="py-20 flex flex-col items-center justify-center gap-10 border-t">
      <Link to={"/"} className="poppins-bold text-[40px]">
        Pixel Playground
      </Link>
      <div className="flex items-center gap-14">
        {navigationLinks.map(({ title, renderTo }: navigationLinksProps) => {
          return (
            <Link key={title} to={renderTo}>
              {title}
            </Link>
          );
        })}
      </div>
      <Link to={"/"} className="text-sm font-semibold">
        Build by - Akshat Gangi @10.12.24
      </Link>
    </footer>
  );
};

export default Footer;
