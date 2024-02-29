const primaryButton = {
  whileTap: { opacity: 0.5, scale: 0.95 },
  transition: { duration: 0.15 },
};

const scaleButton = {
  whileTap: { scale: 0.95 },
  transition: { duration: 0.15 },
};

const scaleImg = {
  whileTap: { scale: 1.05 },
  transition: { duration: 0.15 },
};

const pageOpen = {
  initial: { y: 15, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.55, delay: 0.1, ease: [0.16, 0.84, 0.44, 1] },
  exit: { y: 0, opacity: 0 },
};

export const motionStyle = {
  primaryButton,
  scaleButton,
  scaleImg,
  pageOpen,
} as const;

export type MotionStyle = typeof motionStyle;
