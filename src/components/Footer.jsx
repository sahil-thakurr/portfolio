import { motion } from "framer-motion";
import { footerVariants } from "../animations";

export const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-10 text-center text-gray-400 glass border-t border-white/10"
    >
      <div className="container mx-auto px-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Sahil Thakur. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};
