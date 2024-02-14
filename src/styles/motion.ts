const primaryButton = {
  whileTap: { opacity: 0.5, scale: 0.95 },
  transition: { duration: 0.15 },
};

export const motionStyle = {
  primaryButton,
} as const;

export type MotionStyle = typeof motionStyle;
