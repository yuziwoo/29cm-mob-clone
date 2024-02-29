import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const Component = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & .review-img {
    display: inline-block;
    position: relative;
    width: 33%;
    padding-bottom: 33%;
    background-position: center center;
    background-size: cover;
    margin-left: 0.5%;
  }

  & .review-img:first-child,
  & .review-img:nth-child(4) {
    margin-left: 0;
  }

  & .review-img:nth-child(n + 4) {
    margin-top: 0.3rem;
  }
`;

const ReviewImg = styled.div`
  display: inline-block;
  position: relative;
  width: 33%;
  padding-bottom: 33%;
  background-position: center center;
  background-size: cover;
  margin-left: 0.5%;

  &:first-child,
  &:nth-child(4) {
    margin-left: 0;
  }

  &:nth-child(n + 4) {
    margin-top: 0.3rem;
  }
`;

const ShowMore = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Shadow = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ShadowText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.color.WHITE};
  line-height: 1.4;
  text-align: center;
  user-select: none;
`;

export const ComponentStyle = {
  Component,
  ReviewImg,
  ShowMore,
  Shadow,
  ShadowText,
};
