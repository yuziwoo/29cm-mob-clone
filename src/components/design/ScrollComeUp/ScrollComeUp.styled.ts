import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Inner = styled.div<{ $active: boolean; $duration: number; $delay: number }>`
  transition: all ${({ $duration }) => $duration}s ${({ $delay }) => $delay}s
    ${theme.transition.EASE_INOUT};
  transform: translateY(${({ $active }) => ($active ? '0' : '100%')});
`;

export const ComponentStyle = {
  Component,
  Inner,
};
