export const fadeUp = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const fadeIn = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay,
      duration,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const scaleIn = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, scale: 0.97 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const staggerContainer = (stagger = 0.12, delayChildren = 0.1) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});
