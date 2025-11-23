import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GroupProps {
  children: ReactNode;
  stagger?: number;
  className?: string;
}

export const AnimateGroup = ({ children, stagger = 0.2, className }: GroupProps) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
