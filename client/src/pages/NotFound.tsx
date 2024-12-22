import RouteButton from "../components/RouteButton";

import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-[90vh] w-11/12 lg:w-7/12 mx-auto flex flex-col items-center justify-center gap-5">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="poppins-bold text-3xl lg:text-[40px]"
      >
        404: Checkmate, Page Not Found!
      </motion.h1>
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-gray-500"
      >
        Looks like the page you’re looking for has been captured. Try making a
        new move!
      </motion.span>
      <RouteButton
        title={"Reset the Game"}
        loc={""}
        classname="bg-[#DBEAFE] hover:bg-[#C3DCFD]"
      />
    </div>
  );
};

export default NotFound;
