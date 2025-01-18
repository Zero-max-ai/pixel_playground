import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface RouteButtonProps {
  title: string;
  loc: string;
  classname: string;
  target?: string;
}

const RouteButton: React.FC<RouteButtonProps> = ({
  title,
  loc,
  classname,
  target = "_self",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.35 }}
    >
      <Link
        to={loc}
        target={target}
        className={`py-1 px-4 w-fit text-sm poppins-bold rounded-md ${classname ? classname : ""}`}
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default RouteButton;
