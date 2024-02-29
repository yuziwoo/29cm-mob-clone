import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div<{ $showDescription: boolean }>`
  display: ${({ $showDescription }) => ($showDescription ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  border: 1px solid ${theme.color.GRAY3};
  padding: 24px 14px;
  margin-top: 10px;
  background: ${theme.color.WHITE};
`;

export const ComponentStyle = {
  Component
}