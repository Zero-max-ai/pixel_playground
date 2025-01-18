import RouteButton from "../../RouteButton";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto lg:py-44 py-20 flex max-xl:flex-col items-center justify-between gap-10">
      <div className="w-full xl:w-5/12 flex flex-col gap-5">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1 }}
          className="poppins-bold max-lg:text-3xl lg:text-[60px]"
        >
          Unleash Your Creativity in Pixels
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.17 }}
        >
          Create stunning pixel art for avatars, designs, and more—straight from
          your imagination to the grid.
        </motion.span>
        <RouteButton
          title={"Start Creating Now"}
          loc={"/create"}
          classname={"bg-buttonColor hover:bg-[#FAB605]"}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1 }}
        className="w-10/12 h-[300px] lg:w-[500px] lg:h-[500px] bg-white shadow-xl rounded-[39px]"
      />
    </div>
  );
};

export default HeroSection;
