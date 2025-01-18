import { featureCards, FeatureProps } from "../../../utils/index";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <motion.div
      viewport={{ once: true, amount: 0.8 }}
      whileInView={{ opacity: 1 }}
      className="w-full lg:w-10/12 mx-auto lg:py-32 py-20 flex flex-col items-center justify-center gap-10"
    >
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6 }}
        className="max-lg:text-3xl text-[40px] poppins-bold"
      >
        What Makes Us Special?
      </motion.h1>
      <div className="flex flex-col gap-5 items-center justify-center">
        {featureCards.map(
          ({ title, description, iconType, iconPath }: FeatureProps, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                key={title}
                className="bg-white rounded-[13px] max-w-[500px] flex items-center justify-between gap-10 shadow-lg px-10 py-4 hover:scale-110"
              >
                <img src={iconPath} alt={iconType} />
                <div className="flex flex-col gap-3">
                  <h1 className="poppins-bold text-lg">{title}</h1>
                  <span className="text-sm">{description}</span>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </motion.div>
  );
};

export default Features;
