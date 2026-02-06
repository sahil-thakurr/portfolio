export const easeOut = [0.22, 1, 0.36, 1];

export const staggerContainer = (stagger = 0.12, delayChildren = 0.1) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const fadeUp = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration, ease: easeOut },
  },
});

export const fadeIn = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay, duration, ease: easeOut },
  },
});

export const scaleIn = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delay, duration, ease: easeOut },
  },
});

export const slideIn = (delay = 0, duration = 0.6, direction = "up") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
    y: direction === "up" ? 24 : direction === "down" ? -24 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { delay, duration, ease: easeOut },
  },
});

export const hoverFloat = {
  hover: {
    y: -6,
    scale: 1.01,
    transition: { duration: 0.2, ease: easeOut },
  },
};
