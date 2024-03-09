import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div<{ $active: boolean; $dir: 'left' | 'right' }>`
  overflow: hidden;
  position: relative;
  transition: all 0.8s ${theme.transition.EASE_INOUT};
  clip-path: ${({ $active, $dir }) => {
    if ($active) return 'inset(0)';
    return $dir === 'left' ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)';
  }};
`;

const Inner = styled.div<{ $active: boolean }>`
  transform-origin: top center;
  transition: all 1.1s ${theme.transition.EASE_IN};
  transform: scale(${({ $active }) => ($active ? 1 : 1.7)});
`;

export const ComponentStyle = {
  Component,
  Inner,
};
