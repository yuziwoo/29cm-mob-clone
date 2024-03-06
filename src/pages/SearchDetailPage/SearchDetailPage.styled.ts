import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Page = styled.section``;

const Loading = styled.div`
  margin: 6rem auto;
  width: 60px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.color.BLACK};
  padding: 2rem ${theme.padding.DEFAULT} 0;
`;

const BrandList = styled.div``;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Product = styled.div`
  width: 50%;
`;

export const PageStyle = {
  Page,
  Loading,
  Title,
  BrandList,
  ProductList,
  Product,
};
