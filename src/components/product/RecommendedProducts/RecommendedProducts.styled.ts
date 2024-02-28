import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const SectionRecommenedProducts = styled.div`
  padding: 8rem 0 0;

  & .swiper {
    width: 100%;
    padding-left: ${theme.padding.DEFAULT};
  }

  & .swiper img {
    width: 100%;
    display: block;
  }
`;

export const Title = styled.h1`
  padding: ${theme.padding.BODY};
  font-size: 18px;
  font-weight: 700;
  color: ${theme.color.BLACK};
  padding-bottom: 2rem;
`;
