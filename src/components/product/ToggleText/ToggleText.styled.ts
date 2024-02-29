import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  padding: 3rem 0;
  border-bottom: 1px solid ${theme.color.GRAY1};
`;

const ToggleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.color.BLACK};
`;

const Arrow = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  transition: transform 0.2s;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

const ToggleData = styled.div`
  padding-top: 3rem;
`;

export const ComponentStyle = {
  Component,
  ToggleBlock,
  Title,
  Arrow,
  ToggleData,
};
