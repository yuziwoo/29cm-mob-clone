import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  position: relative;
`;

const AbsoluteSlider = styled.div`
  width: 100%;
  overflow: auto;
  scrollbar-width: none;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slider = styled.div`
  width: 100%;
  overflow: auto;
  scrollbar-width: none;
  position: relative;
  z-index: 2;
  cursor: pointer;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TopWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 10px;
`;

const buttonWrapCSS = css`
  display: flex;
  white-space: nowrap;
  padding: ${theme.padding.BODY};
`;

const ButtonWrap = styled.div`
  ${buttonWrapCSS}
  position: relative;
`;

const Button = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
  border: 1px solid ${theme.color.GRAY3};
  border-radius: 25px;
  margin-right: 10px;
`;

const ImgWrap = styled.div`
  width: 42px;
`;

const Img = styled.img`
  width: 100%;
  display: block;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.color.BLACK};
  padding: 0 10px;
  user-select: none;
`;

const Arrow = styled.div`
  width: 22px;
  height: 22px;
  margin-right: 10px;
`;

export const ComponentStyle = {
  Component,
  AbsoluteSlider,
  TopWrapper,
  Slider,
  ButtonWrap,
  Button,
  ImgWrap,
  Img,
  Text,
  Arrow,
};
