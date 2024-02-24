import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const SkeletonImgStyle = styled.div<{ $ratio: number }>`
  width: 100%;
  padding-bottom: ${({ $ratio }) => 100 * $ratio}%;
  animation: ${theme.animation.SKELETON_BG} 2s infinite alternate;
`;
