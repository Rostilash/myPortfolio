import { motion } from "framer-motion";

export const PulseBorder = () => {
  return (
    <motion.img
      className="absolute top-0 left-0 h-60 w-70 rounded-full border-gray-400 bg-transparent object-cover block origin-center border-2"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};
