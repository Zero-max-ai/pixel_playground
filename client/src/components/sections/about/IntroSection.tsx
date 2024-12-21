import { motion } from "framer-motion";
import { AboutIntro, AboutIntroProps } from "../../../utils/index";

const IntroSection = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto py-20 flex flex-col gap-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="poppins-bold text-[40px] text-center"
      >
        About Pixel Playground
      </motion.h1>
      <div className="flex flex-col gap-5 text-lg">
        {AboutIntro.map(({ content }: AboutIntroProps, index) => {
          return (
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 * index }}
            >
              {content}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default IntroSection;
