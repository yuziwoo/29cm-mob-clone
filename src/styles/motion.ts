const ease = {
  IN: [0.16, 0.84, 0.44, 1],
  OUT: [0.23, 0.98, 0.32, 1],
  INOUT: [0.75, 0, 0.15, 1],
};

const primaryButton = {
  whileTap: { opacity: 0.5, scale: 0.95 },
  transition: { duration: 0.15 },
};

const scaleButton = {
  whileTap: { scale: 0.95 },
  transition: { duration: 0.15 },
};

const opacityButton = {
  whileTap: { opacity: 0.5 },
  transition: { duration: 0.15 },
};

const scaleImg = {
  whileTap: { scale: 1.05 },
  transition: { duration: 0.15 },
};

const pageOpen = {
  initial: { y: 15, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.55, delay: 0.1, ease: ease.IN },
  exit: { y: 0, opacity: 0 },
};

const scrollFadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.6, delay: 0.3, ease: ease.INOUT },
  viewport: { once: true, amount: 'some' },
} as const;

const scrollFadeUp = {
  initial: { y: 15, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' },
  viewport: { once: true, amount: 'some' },
} as const;

export const motionStyle = {
  ease,
  primaryButton,
  scaleButton,
  opacityButton,
  scaleImg,
  pageOpen,
  scrollFadeIn,
  scrollFadeUp,
} as const;

export type MotionStyle = typeof motionStyle;
