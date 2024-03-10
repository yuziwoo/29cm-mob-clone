import styled from 'styled-components';

const Page = styled.section`
  padding-bottom: 180px;
`;

const ProductList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Product = styled.div`
  width: 50%;
`;

export const PageStyle = {
  Page,
  ProductList,
  Product,
};
