import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const menuVariants = {
    hidden: { opacity: 0, height: 0, pointerEvents: "none" },
    visible: {
      opacity: 1,
      height: "100vh",
      pointerEvents: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      pointerEvents: "none",
      transition: {
        duration: 0.3,
        ease: "easeIn",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          key="mobile-menu"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center"
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
            aria-label="Close Menu"
          >
            &times;
          </button>

          <motion.a
            href="#home"
            onClick={() => setMenuOpen(false)}
            variants={itemVariants}
            className="text-2xl font-semibold text-white my-4"
          >
            Home
          </motion.a>
          <motion.a
            href="#about"
            onClick={() => setMenuOpen(false)}
            variants={itemVariants}
            className="text-2xl font-semibold text-white my-4"
          >
            About
          </motion.a>
          <motion.a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            variants={itemVariants}
            className="text-2xl font-semibold text-white my-4"
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            variants={itemVariants}
            className="text-2xl font-semibold text-white my-4"
          >
            Contact
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};