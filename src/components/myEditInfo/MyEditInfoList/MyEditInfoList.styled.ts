import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  width: 100%;
`;

const Ul = styled.ul`
  padding: 3rem 0;
`;

const Li = styled.li`
  padding: 2rem 0;
  border-bottom: 1px solid ${theme.color.GRAY3};
  display: flex;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

const commonFont = css`
  font-size: 18px;
  font-weight: 500;
  color: ${theme.color.BLACK};

  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`;

const Th = styled.p`
  ${commonFont}
  width: 115px;
`;

const Input = styled.input`
  ${commonFont}
`;

const Td = styled.p`
  ${commonFont}
`;

export const ComponentStyle = {
  Component,
  Ul,
  Li,
  Th,
  Input,
  Td,
};
