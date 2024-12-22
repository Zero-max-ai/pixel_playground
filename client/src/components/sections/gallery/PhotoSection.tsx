import { photoGallery, photoGalleryProps } from "../../../utils/index";
import { motion } from "framer-motion";

const PhotoSection = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto lg:py-28 py-10 flex flex-col gap-5">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="poppins-bold max-lg:text-3xl text-[40px]"
      >
        Photo Collection
      </motion.h1>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {photoGallery.map(({ title, img }: photoGalleryProps) => {
          return (
            <motion.img
              initial={{ opacity: 0, y: -50 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              key={title}
              src={img}
              alt={title}
              className="w-full rounded-lg break-inside-avoid hover:scale-105 transition-transform duration-300"
            />
          );
        })}
      </div>
    </div>
  );
};

export default PhotoSection;
