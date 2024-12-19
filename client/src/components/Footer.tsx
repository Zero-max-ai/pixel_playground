import { Link } from "react-router-dom";
import { navigationLinks, navigationLinksProps } from "../utils/index";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-20 w-10/12 mx-auto flex flex-col items-center justify-center gap-10 border-t">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Link to={"/"} className="poppins-bold text-[28px] lg:text-[40px]">
          Pixel Playground
        </Link>
      </motion.div>
      <div className="flex flex-wrap items-center justify-center gap-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <Link to={"/"} className="hover:underline underline-offset-4">
            Home
          </Link>
        </motion.div>
        {navigationLinks.map(
          ({ title, renderTo }: navigationLinksProps, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 * index }}
              >
                <Link
                  key={title}
                  to={renderTo}
                  className="hover:underline underline-offset-4"
                >
                  {title}
                </Link>
              </motion.div>
            );
          }
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link to={"/"} className="text-sm font-semibold text-gray-500">
          Build by - Akshat Gangi @10.12.24
        </Link>
      </motion.div>
    </footer>
  );
};

export default Footer;
