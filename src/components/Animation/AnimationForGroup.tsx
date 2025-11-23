import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { animations } from "../../utils/animations";

interface AnimateProps {
  children: ReactNode;
  variant?: keyof typeof animations;
  duration?: number;
  className?: string;
}

export const AnimationForGroup = ({ children, variant = "fadeIn", className }: AnimateProps) => {
  const selected: Variants = animations[variant] ?? animations.fadeIn;

  return (
    <motion.div className={className} variants={selected}>
      {children}
    </motion.div>
  );
};
