import { keyframes } from 'styled-components';

const color = {
  BLACK: '#000',
  WHITE: '#fff',
  GRAY1: '#F0F0F0',
  GRAY2: '#E4E4E4',
  GRAY3: '#DADADB',
  GRAY4: '#CECECE',
  GRAY5: '#A1A1A1',
  GRAY7: '#7D7D7D',
  ACTIVE: '#000',
  SIGNATURE: '#FF4800',
  BLUE: '#375FFF',

  SELECTION_BG: '#FF4800',
  SELECTION_COLOR: '#fff',

  INPUT_VALID: '#34B305',
  INPUT_INVALID: '#D30005',
  INPUT_GRAY: '#C5C5C5',

  FOOTER_BG: 'rgba(246, 246, 246, 0.85)',
  FOOTER_INACTIVE: '#5D5D5D',
};

const gradient = {
  TRANSPARENT_WHITE: 'linear-gradient(180deg, transparent, white)',
};

const zIndex = {
  HEADER: 2000,
  FOOTER: 3000,
};

const animation = {
  SKELETON_BG: keyframes`
  0%, 100% {
    background-color: rgba(100, 100, 100, 0.1);
  }
  50% {
    background-color: rgba(100, 100, 100, 0.25);
  }
  `,
};

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
  DEFAULT: '16px',
  BODY: '0 16px',
  BODY_WITH_BOTTOM_MARGIN: '0 16px 120px',
};

const transition = {
  SPEED_DEFAULT: '0.3s',
  EASE_IN: 'cubic-bezier(0.16, 0.84, 0.44, 1)',
  EASE_OUT: 'cubic-bezier(0.23, 0.98, 0.32, 1)',
  EASE_INOUT: 'cubic-bezier(0.75, 0, 0.15, 1)',
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
