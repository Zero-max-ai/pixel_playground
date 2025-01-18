import { flameStructure } from '../utils/'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 w-full min-h-[100vh] bg-black flex items-center justify-center">
      <div className="h-full flex flex-col items-center justify-center gap-[1px]">
        {flameStructure.map((row, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center gap-[1px]"
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 3, ease: "easeInOut", delay: index * 0.2}}
          >
            {row.map((color, pixelIndex) => (
              <motion.div
                key={pixelIndex}
                className={`w-[20px] h-[20px] ${color}`}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 3, ease: "easeInOut", delay: pixelIndex * 0.1}}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Loader;
