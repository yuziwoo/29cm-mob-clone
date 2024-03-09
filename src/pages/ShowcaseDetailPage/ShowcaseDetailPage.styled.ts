import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Page = styled.section`
  padding-bottom: 150px;
`;

const MainBanner = styled.div`
  position: relative;
  width: 100%;

  & .swiper img {
    animation: ${theme.animation.ZOOM_OUT} 10s infinite alternate linear;
  }
`;

const Carousel = styled.div`
  position: absolute;
  left: 0;
  top: 2rem;
  width: 100%;
  z-index: 10;
`;

const MainLogo = styled.div`
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  width: 23rem;
  z-index: 10;

  & img {
    width: 100%;
  }
`;

const MainText = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const CircleText = styled.div`
  width: 12rem;
  height: 12rem;
  animation: ${theme.animation.CIRCLE_LEFT} 10s infinite linear;

  & img {
    width: 100%;
  }
`;

const MainTitle = styled.h3`
  padding-top: 2rem;
`;

const ShowcaseDescription = styled.div`
  padding: 6rem 0 10rem;
`;

const ShowcaseDescriptionTitle = styled.h3`
  text-align: center;
  color: ${theme.color.BLACK};
  font-size: 16px;
  font-weight: 700;
`;

const ShowcaseDescriptionText = styled.p`
  text-align: center;
  color: ${theme.color.BLACK};
  font-size: 14px;
  font-weight: 500;
  padding-top: 10px;
`;

const ImgCarousel = styled.div`
  padding-top: 4rem;
`;

const ImgCarouselText = styled.div`
  padding: 4rem 0 0 2rem;
`;

const OpenDoorImgWrap = styled.div`
  width: 100%;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const OpenDoorImg = styled.div<{ $align: 'left' | 'right' }>`
  width: 77.27%;
  margin-top: 1rem;
  align-self: ${({ $align }) => ($align === 'left' ? 'flex-start' : 'flex-end')};
  & img {
    width: 100%;
  }
`;

export const PageStyle = {
  Page,
  MainBanner,
  Carousel,
  MainLogo,
  MainText,
  CircleText,
  MainTitle,
  ShowcaseDescription,
  ShowcaseDescriptionTitle,
  ShowcaseDescriptionText,
  ImgCarousel,
  ImgCarouselText,
  OpenDoorImgWrap,
  OpenDoorImg,
};
