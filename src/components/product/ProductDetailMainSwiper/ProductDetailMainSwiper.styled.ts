import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  width: 100%;

  & .swiper,
  & .swiper img {
    width: 100%;
    display: block;
  }

  & .swiper .swiper-slide {
    overflow: hidden;
  }

  & .swiper .swiper-pagination {
    position: absolute;
    bottom: 10px;
    left: auto;
    top: auto;
    right: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .swiper .swiper-pagination .swiper-pagination-bullet {
    width: 30px;
    height: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border-radius: 0;
    margin: 0;
    opacity: 1;
  }

  & .swiper .swiper-pagination .swiper-pagination-bullet::after {
    content: '';
    width: 100%;
    height: 2px;
    background: ${theme.color.GRAY2};
    position: absolute;
    display: block;
  }

  & .swiper .swiper-pagination .swiper-pagination-bullet-active::after {
    background: ${theme.color.BLACK};
  }
`;

export const ComponentStyle = {
  Component,
};