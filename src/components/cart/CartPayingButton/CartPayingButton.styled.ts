import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  width: 100%;
  max-width: 550px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  padding: 1rem ${theme.padding.DEFAULT} 2rem;
  border-top: 1px solid ${theme.color.GRAY1};
  z-index: 1;
  background: ${theme.color.WHITE};
`;

const Button = styled.div`
  width: 100%;
  background: ${theme.color.SIGNATURE};
  padding: 2.2rem 0;
  border-radius: 0.5rem;

  & button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const FinalPrice = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.color.WHITE};
`;

export const ComponentStyle = {
  Component,
  Button,
  FinalPrice,
};
