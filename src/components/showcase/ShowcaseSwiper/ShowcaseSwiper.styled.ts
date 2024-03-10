import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
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
    bottom: 0;
    left: auto;
    top: auto;
    right: 0;
    width: 100%;
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
  }

  & .swiper .swiper-pagination .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    position: relative;
    background: ${theme.color.WHITE};
    border-radius: 50%;
    margin-right: 3px;
    opacity: 0.3;
  }

  & .swiper .swiper-pagination .swiper-pagination-bullet:last-child {
    margin-right: 0;
  }

  & .swiper .swiper-pagination .swiper-pagination-bullet-active {
    opacity: 1;
  }
`;

const ShowcaseWrap = styled.div`
  width: 100%;
`;

const ShowcaseWrapSingle = styled.div`
  width: 100%;
`;

const Showcase = styled.div`
  position: relative;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  display: block;
  position: relative;
`;

const Shadow = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5));
`;

const Title = styled.h1`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  text-align: left;
  width: 70%;
  color: ${theme.color.WHITE};
  font-size: 15px;
  font-weight: 500;
  line-height: 1.2;
`;

export const ComponentStyle = {
  Component,
  ShowcaseWrap,
  ShowcaseWrapSingle,
  Showcase,
  Img,
  Shadow,
  Title,
};
