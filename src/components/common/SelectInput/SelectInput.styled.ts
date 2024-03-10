import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  position: relative;
`;

const Select = styled.div<{ $isOpen: boolean; $direction: 'up' | 'down' }>`
  position: absolute;
  left: 0;
  width: 100%;
  border: 1px solid ${theme.color.GRAY3};
  background: ${theme.color.WHITE};

  ${({ $direction }) =>
    $direction === 'up'
      ? css`
          top: 100%;
        `
      : css`
          bottom: 100%;
        `}

  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  overflow: auto;
  max-height: 300px;
`;

const Option = styled.div`
  cursor: pointer;
  padding: 1.6rem 16px;
  width: 100%;
  text-align: left;

  &:hover {
    opacity: 0.7;
  }
`;

const MainBlock = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid ${theme.color.GRAY3};
  background: ${theme.color.WHITE};
  padding: 1.6rem 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.color.GRAY7};
`;

const Arrow = styled.div<{ $isOpen: boolean }>`
  width: 2.8rem;
  height: 2.8rem;
  min-width: 22px;
  min-height: 22px;
  transition: transform 0.2s;
  transform: rotate(${({ $isOpen }) => ($isOpen ? 0 : -180)}deg);

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const ComponentStyle = {
  Component,
  Select,
  Option,
  MainBlock,
  Text,
  Arrow,
};
