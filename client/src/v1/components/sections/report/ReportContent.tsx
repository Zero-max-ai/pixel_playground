import Bug from "../../../assets/Bug.svg";
import { motion } from "framer-motion";

const ReportContent = () => {
  return (
    <div className="py-10 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex max-lg:flex-col-reverse items-center justify-between gap-10"
      >
        <h1 className="poppins-bold text-[40px] leading-tight">
          We Value Your Feedback
        </h1>
        <img src={Bug} alt={"bug.svg"} className="w-32 h-32 object-contain" />
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        Your feedback helps us improve the platform and provide a better
        experience. Please let us know what we can do better!
      </motion.span>
    </div>
  );
};

export default ReportContent;
