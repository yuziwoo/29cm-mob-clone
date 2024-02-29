import styled, { keyframes } from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4rem;
`;

const FlexWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 2rem;
  background-size: cover;
  background-position: center center;
`;

const textAnimation = keyframes`
0%, 45% {
  transform: translateY(0);
}
50%, 95% {
  transform: translateY(-33.3%);
}
100% {
  transform: translateY(-66.6%);
}
`;

const Text = styled.h1`
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  color: ${theme.color.BLACK};
  line-height: 1.2;
`;

const Greeting = styled.div`
  overflow: hidden;
  position: relative;
  margin-left: 1rem;
`;

const AnimationTextWrap = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  animation: ${textAnimation} 6s infinite linear;
`;

const Arrow = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  min-width: 20px;
  min-height: 20px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const ComponentStyle = {
  Component,
  FlexWrap,
  ProfileImg,
  Text,
  Greeting,
  AnimationTextWrap,
  Arrow,
};
