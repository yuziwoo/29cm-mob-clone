import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div``;

const NoResult = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.color.BLACK};
  text-align: center;
  padding: 18rem ${theme.padding.DEFAULT};
  width: 100%;
`;

const BackHome = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.color.GRAY7};
  text-decoration: underline;
  padding-top: 1rem;
`;

export const ComponentStyle = {
  Component,
  NoResult,
  BackHome,
};
