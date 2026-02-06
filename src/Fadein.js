// src/Framer/Fadein.js
export default function fadeIn(direction = "up", delay = 0) {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 1.2,
        delay,
      },
    },
    viewportOptions: {
      once: true,
      amount: 0.3,
    },
  };
}
