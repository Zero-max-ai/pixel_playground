import RouteButton from "../../RouteButton";
import { motion } from "framer-motion";

const CTA_reiteration = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center gap-5 lg:gap-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="poppins-bold text-[20px] lg:text-[40px]"
      >
        Ready to Create Your Masterpiece?
      </motion.h1>
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-lg:text-sm"
      >
        Start creating stunning pixel art in few click. Easy, intutive, and fun!
      </motion.span>
      <RouteButton
        title={"Start Now"}
        loc={"/create"}
        classname={"bg-buttonColor hover:bg-[#FAB605]"}
      />
    </div>
  );
};

export default CTA_reiteration;
