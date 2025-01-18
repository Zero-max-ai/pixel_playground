// import CTAButton from "../../CTAButton";
import RouteButton from "../../RouteButton";
import Me from "../../../assets/me.jpg";
import { motion } from "framer-motion";

const TeamSection = () => {
  return (
    <div className="py-20 flex flex-col-reverse items-center justify-between max-lg:gap-10 w-full lg:w-10/12 mx-auto">
      <div className="w-full lg:w-5/12 gap-5 flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[40px] poppins-bold"
        >
          Meet the creator
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Hi, I’m Akshat Gangi, the one-man team behind Pixel Playground. As a
          passionate developer and designer, I’ve combined my love for retro art
          and innovative tools to create this platform.
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          My mission? To make pixel art accessible, enjoyable, and inspiring for
          everyone, from beginners to seasoned artists. Pixel Playground is not
          just a project; it’s a reflection of my journey and creativity. I hope
          you love it as much as I loved building it!
        </motion.span>
        <RouteButton
          title={"Connect with me"}
          loc={"https://www.linkedin.com/in/akshat-gangi-b457a61ab/"}
          classname="bg-[#DBEAFE] hover:bg-[#C3DCFD]"
          target="_blank"
        />
        <RouteButton
          title={"Share Your Feedback"}
          loc={"/report"}
          classname="bg-buttonColor hover:bg-[#FBB90F]"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="shadow-xl"
      >
        <img
          src={Me}
          alt={"Profile Pic"}
          className="h-[300px] lg:h-[400px] border-4 border-white"
        />
      </motion.div>
    </div>
  );
};

export default TeamSection;
