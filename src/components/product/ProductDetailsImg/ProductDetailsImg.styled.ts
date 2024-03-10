import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div<{ $showAll: boolean }>`
  padding: ${theme.padding.BODY_WITH_BOTTOM_MARGIN};
  position: relative;
  max-height: ${({ $showAll }) => ($showAll ? 'auto' : '1500px')};
  overflow: hidden;
`;

const ProductImg = styled.img`
  width: 100%;
  display: block;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  padding: 4rem 0 2rem;
`;

const ShowMore = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: ${theme.padding.BODY};
`;

const ShowMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2.5rem;
  border: 1px solid ${theme.color.BLACK};
  background: ${theme.color.WHITE};
  position: relative;

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

const Text = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.color.BLACK};
  margin-right: 10px;
`;

const Arrow = styled.div<{ $showAll: boolean }>`
  width: 2.8rem;
  height: 2.8rem;
  min-width: 20px;
  min-height: 20px;
  transition: transform 0.2s;
  transform: rotate(${({ $showAll }) => ($showAll ? -180 : 0)}deg);

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const ComponentStyle = {
  Component,
  ProductImg,
  Title,
  ShowMore,
  ShowMoreButton,
  Text,
  Arrow,
};
