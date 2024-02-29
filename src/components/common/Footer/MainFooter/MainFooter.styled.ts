import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

const Component = styled.div`
  padding: 0 0 1rem;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 20%;

  & .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0 1rem;
  }
  & .wrap svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.2s;
  }
  & .wrap p {
    font-size: 10px;
    text-transform: uppercase;
    padding-top: 0.8rem;
    color: ${theme.color.BLACK};
    transition: color 0.2s;
  }
`;

export const ComponentStyle = {
  Button,
  Component,
};
