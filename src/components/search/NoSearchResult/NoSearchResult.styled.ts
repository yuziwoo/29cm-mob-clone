import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div``;

const NoResult = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem ${theme.padding.DEFAULT};
  border-bottom: 1px solid ${theme.color.GRAY1};
`;

const NoResultTitle = styled.h1`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.color.BLACK};
  padding-bottom: 2rem;
  text-align: center;
`;

const NoResultDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.color.GRAY7};
  text-align: center;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.color.BLACK};
  padding: 6rem ${theme.padding.DEFAULT} 0;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Product = styled.div`
  width: 50%;
`;

export const ComponentStyle = {
  Component,
  NoResult,
  NoResultTitle,
  NoResultDescription,
  Title,
  ProductList,
  Product,
};
