const color = {
  BLACK: '#000',
  WHITE: '#fff',

  SELECTION_BG: '#182B8E',
  SELECTION_COLOR: '#fff',
};

const gradient = {};

const zIndex = {
  HEADER: 2000,
};

const animation = {};

const lineHeight = {
  BASIC: 1.4,

  NONE: 1,
  SHORT: 1.2,
};

const fontFamily = {
  INTER: `'Inter', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'sans-serif'`,
};

const size = {
  MAX_WIDTH: '550px',
  PRIMARY_FONT_SIZE: '10px',
  VIEWPORT_FONT_SIZE: '1.8181818vw',
};

const padding = {
  BODY: '0 16px',
};

const transition = {
  SPEED_DEFAULT: '0.3s',
};

export const theme = {
  color,
  gradient,
  zIndex,
  animation,
  lineHeight,
  fontFamily,
  size,
  padding,
  transition,
} as const;

export type Theme = typeof theme;
