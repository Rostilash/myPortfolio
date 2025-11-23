import type { Variants } from "framer-motion";

export type AvailableKeysProps = "fadeIn" | "zoom" | "popIn" | "slideUp" | "slideRight" | "slideLeft";

export const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },

  popIn: {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: [0, 1], scale: [0.6, 1, 0.95, 1] },
  },

  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },

  slideRight: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  },

  slideLeft: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  },

  zoom: {
    hidden: { scale: 0.6, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
} satisfies Record<string, Variants>;
