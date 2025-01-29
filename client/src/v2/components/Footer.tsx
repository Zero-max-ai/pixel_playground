import Wave from "../../assets/wave.svg";
import SectionLayout from "./layout/SectionLayout";
import LinkButton from "./LinkButton";

import { Link } from "react-router-dom";
import { socialLinks } from "../../utils/index";

const Footer = () => {
  return (
    <footer className="">
      <SectionLayout>
        <div className="flex flex-col items-center justify-center gap-4 w-11/12 sm:w-7/12 mx-auto">
          <h1 className="bowlby-one text-2xl">Pixel Playground</h1>
          <span className="anonymous-pro-regular">
            Bringing your imagination to life, one pixel at a time with endless
            creativity.
          </span>
          <LinkButton title={"Contact Us"} link={"/report"} />
          {/*social links*/}
          <div className="flex items-center gap-7">
            {socialLinks.map(({ image, link }) => (
              <Link to={link} className="shadow-[4px_4px_0px_#e0e7ff] rounded-full">
                <img
                  src={image}
                  className="w-[24px] h-[24px]"
                />
              </Link>
            ))}
          </div>
        </div>
      </SectionLayout>
      <img src={Wave} className="w-full" />
    </footer>
  );
};

export default Footer;
