import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
  padding: ${theme.padding.BODY};
`;

const Product = styled.div`
  width: calc(50% - 5px);
`;

export const ComponentStyle = {
  Component,
  Product,
};
