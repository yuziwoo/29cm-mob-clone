import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  position: relative;
  opacity: 0;
  animation: ${theme.animation.FADE_IN} 0.3s 1 forwards;
`;

const MainSwiper = styled.div`
  position: relative;
  z-index: 2;
`;

const Banner = styled.div`
  position: relative;
  cursor: pointer;
  padding: 1.5rem 1rem;
`;

const ImgWrap = styled.div<{ $isActive: boolean }>`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  z-index: 2;
  transition: transform 0.4s;
  transform: scale(${({ $isActive }) => ($isActive ? '1.05' : '0.95')});

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.3));
    display: block;
  }
`;

const Img = styled.img`
  width: 100%;
  display: block;
`;

const TextWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 6rem 4rem;
  z-index: 3;
`;

const Title = styled.h1<{ $isActive: boolean }>`
  font-size: 36px;
  font-weight: 600;
  color: ${theme.color.WHITE};
  line-height: 1.4;
  transition: all 0.4s 0.2s;
  transform: translateY(${({ $isActive }) => ($isActive ? '0' : '15px')});
  opacity: ${({ $isActive }) => ($isActive ? '1' : '0')};

  @media screen and (max-width: 500px) {
    font-size: 28px;
  }

  @media screen and (max-width: 360px) {
    font-size: 22px;
  }
`;

const TextPadding = styled.div`
  padding-bottom: 3rem;
`;

const Description = styled.p<{ $isActive: boolean }>`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.color.WHITE};
  line-height: 1.4;
  transition: all 0.4s 0.3s;
  transform: translateY(${({ $isActive }) => ($isActive ? '0' : '15px')});
  opacity: ${({ $isActive }) => ($isActive ? '1' : '0')};

  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

const EventWrap = styled.div<{ $isActive: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: ${({ $isActive }) => ($isActive ? 'block' : 'none')};
`;

const BackgroundImg = styled.img`
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.4s;

  &:first-child {
    position: relative;
  }
`;

const Background = styled.div<{ $index: number }>`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  transform-origin: center bottom;
  transform: scale(1.2);
  filter: blur(100px);

  & img {
    opacity: 0;
  }

  & img:nth-child(${({ $index }) => $index + 1}) {
    opacity: 1;
  }
`;

const Shadow = styled.div`
  position: absolute;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(100px);
  backdrop-filter: blur(100px);
`;

const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 30%, ${theme.color.WHITE} 70%);
`;

const Loading = styled.div`
  padding: 32rem 0;
  width: 5rem;
  margin: auto;
`;

export const ComponentStyle = {
  Component,
  MainSwiper,
  Banner,
  ImgWrap,
  Img,
  TextWrap,
  Title,
  TextPadding,
  Description,
  EventWrap,
  Background,
  BackgroundImg,
  Shadow,
  Gradient,
  Loading,
};
