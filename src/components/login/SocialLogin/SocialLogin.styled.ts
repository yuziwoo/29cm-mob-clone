import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.article`
  & button {
    width: 100%;
    height: 66px;
    border-radius: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.color.GRAY3};
    margin-bottom: 10px;
  }

  & button svg {
    width: 28px;
    height: 28px;
    margin-right: 7px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.color.BLACK};
`;

const Icon = styled.div`
  width: 28px;
  height: 28px;
  margin-right: 7px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const ComponentStyle = {
  Component,
  Text,
  Icon,
};
