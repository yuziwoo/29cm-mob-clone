import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const SectionDetailImg = styled.div<{ $showAll: boolean }>`
  padding: ${theme.padding.BODY};
  position: relative;
  max-height: ${({ $showAll }) => ($showAll ? 'auto' : '1500px')};
  overflow: hidden;
  padding-bottom: 120px;

  & img {
    width: 100%;
    display: block;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  padding: 4rem 0 2rem;
`;

export const ShowMore = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: ${theme.padding.BODY};
`;

export const ShowMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2.5rem;
  border: 1px solid ${theme.color.BLACK};
  background: ${theme.color.WHITE};
  position: relative;

  & p {
    font-size: 16px;
    font-weight: 700;
    color: ${theme.color.BLACK};
    margin-right: 10px;
  }

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    bottom: calc(100% + 1px);
    background: ${theme.gradient.TRANSPARENT_WHITE};
  }
`;

export const Arrow = styled.div<{ $showAll: boolean }>`
  width: 24px;
  height: 24px;
  transition: transform 0.2s;
  transform: rotate(${({ $showAll }) => ($showAll ? -180 : 0)}deg);

  & svg {
    width: 100%;
    height: 100%;
  }
`;
