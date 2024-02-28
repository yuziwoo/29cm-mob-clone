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
}

const pageOpen = {
  initial: { y: 15, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.55, delay: 0.1 },
};

export const motionStyle = {
  primaryButton,
  scaleButton,
  scaleImg,
  pageOpen,
} as const;

export type MotionStyle = typeof motionStyle;
