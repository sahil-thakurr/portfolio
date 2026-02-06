import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "WAGWAN!!";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="mb-4 text-4xl font-mono font-bold text-center">
        {text} 
        <motion.span 
          animate={{ opacity: [0, 1, 0] }} 
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="ml-1"
        >
           | 
        </motion.span>
      </div>

      <div className="w-48 h-0.5 bg-gray-800 rounded relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
        />
      </div>
    </div>
  );
};


