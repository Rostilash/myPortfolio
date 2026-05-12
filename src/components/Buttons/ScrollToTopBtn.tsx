import { Link } from "react-scroll";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// This Link scroll to div which have an following id

export const ScrollToTopBtn = () => {
  const divRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 1500);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Element we watching */}
      <div ref={divRef} className="h-10" />

      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 hover:scale-110  hover:text-blue-300"
          >
            <Link
              to="home"
              smooth={true}
              duration={1000}
              className="border-2 border-gray-800 p-2 rounded-4xl bg-white hover:border-blue-400"
            >
              <ArrowForwardIcon className="-rotate-90 " />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
