import styled from 'styled-components';

const Page = styled.section`
  padding-bottom: 140px;
`;

const CartList = styled.div`
  position: relative;
  z-index: 2;
`;

const RecommendedProducts = styled.div`
  position: relative;
  z-index: 1;
`;

export const PageStyle = {
  Page,
  CartList,
  RecommendedProducts,
};
