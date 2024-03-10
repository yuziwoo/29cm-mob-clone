import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  width: 100%;
`;

const Inner = styled.div<{ $active: boolean; $duration: number; $delay: number }>`
  transition: opacity ${({ $duration }) => $duration}s ${({ $delay }) => $delay}s
    ${theme.transition.EASE_INOUT};
  opacity: ${({ $active }) => ($active ? '1' : '0')};
`;

export const ComponentStyle = {
  Component,
  Inner,
};
