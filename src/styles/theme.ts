import { keyframes } from 'styled-components';

const color = {
  BLACK: '#000',
  WHITE: '#fff',

  SELECTION_BG: '#182B8E',
  SELECTION_COLOR: '#fff',
};

const gradient = {};

const zIndex = {};

const animation = {};

const lineHeight = {
  BASIC: 1.4,

  NONE: 1,
  SHORT: 1.2,
};

const fontFamily = {
  INTER: `'Inter', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'sans-serif'`,
};

export const theme = {
  color,
  gradient,
  zIndex,
  animation,
  lineHeight,
  fontFamily,
} as const;

export type Theme = typeof theme;
