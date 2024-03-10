import styled, { keyframes } from 'styled-components';

const Component = styled.div<{ $height: string }>`
  position: relative;
  height: ${({ $height }) => $height};
  overflow: hidden;
`;

const carouselLeft = {
  keyframes1: keyframes`
    from {
      opacity: 1;
      transform: translateX(0);
    }
    25% {
      opacity: 1;
      transform: translateX(-100%);
    }
    30% {
      opacity: 0;
      transform: translateX(-100%);
    }
    70% {
      opacity: 0;
      transform: translateX(100%);
    }
    75% {
      opacity: 1;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `,
  keyframes2: keyframes`from {
    opacity: 1;
    transform: translateX(100%);
  }
  50% {
    opacity: 1;
    transform: translateX(-100%);
  }
  55% {
    opacity: 0;
    transform: translateX(-100%);
  }
  70% {
    opacity: 0;
    transform: translateX(100%);
  }
  75% {
    opacity: 1;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(100%);
  }`,
  keyframes3: keyframes`from {
    opacity: 1;
    transform: translateX(100%);
  }
  25% {
    opacity: 1;
    transform: translateX(100%);
  }
  75% {
    opacity: 1;
    transform: translateX(-100%);
  }
  80% {
    opacity: 0;
    transform: translateX(-100%);
  }
  85% {
    opacity: 0;
    transform: translateX(100%);
  }
  90% {
    opacity: 1;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(100%);
  }`,
  keyframes4: keyframes`from {
    opacity: 0;
    transform: translateX(-100%);
  }
  45% {
    opacity: 0;
    transform: translateX(100%);
  }
  50% {
    opacity: 1;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(-100%);
  }`,
};

const carouselRight = {
  keyframes1: keyframes`from {
    opacity: 1;
    transform: translateX(0);
  }
  25% {
    opacity: 1;
    transform: translateX(100%);
  }
  30% {
    opacity: 0;
    transform: translateX(100%);
  }
  70% {
    opacity: 0;
    transform: translateX(-100%);
  }
  75% {
    opacity: 1;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }`,
  keyframes2: keyframes`from {
    opacity: 1;
    transform: translateX(-100%);
  }
  50% {
    opacity: 1;
    transform: translateX(100%);
  }
  55% {
    opacity: 0;
    transform: translateX(100%);
  }
  70% {
    opacity: 0;
    transform: translateX(-100%);
  }
  75% {
    opacity: 1;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(-100%);
  }`,
  keyframes3: keyframes`from {
    opacity: 1;
    transform: translateX(-100%);
  }
  25% {
    opacity: 1;
    transform: translateX(-100%);
  }
  75% {
    opacity: 1;
    transform: translateX(100%);
  }
  80% {
    opacity: 0;
    transform: translateX(100%);
  }
  85% {
    opacity: 0;
    transform: translateX(-100%);
  }
  90% {
    opacity: 1;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(-100%);
  }`,
  keyframes4: keyframes`from {
    opacity: 0;
    transform: translateX(100%);
  }
  45% {
    opacity: 0;
    transform: translateX(-100%);
  }
  50% {
    opacity: 1;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(100%);
  }`,
};

const Img = styled.img<{ $speed: number; $dir: 'left' | 'right' }>`
  min-width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: ${({ $speed }) => $speed}s;

  &:first-child {
    animation-name: ${({ $dir }) =>
      $dir === 'left' ? carouselLeft.keyframes1 : carouselRight.keyframes1};
  }

  &:nth-child(2) {
    animation-name: ${({ $dir }) =>
      $dir === 'left' ? carouselLeft.keyframes2 : carouselRight.keyframes2};
  }

  &:nth-child(3) {
    animation-name: ${({ $dir }) =>
      $dir === 'left' ? carouselLeft.keyframes3 : carouselRight.keyframes3};
  }

  &:nth-child(4) {
    animation-name: ${({ $dir }) =>
      $dir === 'left' ? carouselLeft.keyframes4 : carouselRight.keyframes4};
  }

  &:nth-child(5) {
    position: relative;
    opacity: 0;
  }
`;

export const ComponentStyle = {
  Component,
  Img,
};
