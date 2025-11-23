import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { animations } from "../../utils/animations";

interface AnimateProps {
  children: ReactNode;
  variant?: keyof typeof animations;
  duration?: number;
  className?: string;
}

export const Animate = ({ children, variant = "fadeIn", duration = 1, className }: AnimateProps) => {
  const selected: Variants = animations[variant] ?? animations.fadeIn;

  return (
    <motion.div
      className={className}
      variants={selected}
      initial="hidden"
      // When once true it will be happened 1 time
      whileInView="visible"
      viewport={{ once: false, amount: 0.3, margin: "0% 0px -20% 0px" }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
