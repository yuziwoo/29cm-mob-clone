import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  padding: ${theme.padding.BODY_WITH_BOTTOM_MARGIN};
`;

const Loading = styled.div`
  margin: 6rem auto;
  width: 60px;
`;

const Title = styled.h1`
  padding-top: 2rem;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.color.BLACK};
`;

const ProductList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

const Product = styled.li`
  width: 50%;
`;

export const ComponentStyle = {
  Component,
  Loading,
  Title,
  ProductList,
  Product,
};
