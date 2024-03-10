import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.button`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${theme.color.BLACK};

  @media screen and (max-width: 400px) {
    font-size: 17px;
  }
`;

const Arrow = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  min-width: 20px;
  min-height: 20px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const ComponentStyle = {
  Component,
  Text,
  Arrow,
};
