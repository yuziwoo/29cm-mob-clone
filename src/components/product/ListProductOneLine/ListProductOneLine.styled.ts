import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  padding: 1rem 0;
  border-top: 1px solid ${theme.color.GRAY1};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Thumb = styled.div`
  overflow: hidden;
  width: 64px;
  background-color: ${theme.color.GRAY1};
  background-size: cover;
  background-position: center center;

  @media screen and (max-width: 400px) {
    wdith: 58px;
  }
`;

const ThumbSizer = styled.div`
  width: 100%;
  padding-bottom: 100%;
`;

const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  cursor: pointer;
  flex: 1;
`;

const Text = styled.div`
  padding-left: 2rem;
`;

const Brand = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${theme.color.BLACK};
  text-align: left;
`;

const Heart = styled.div`
  width: 28px;
  height: 28px;

  padding: 1.5px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-right: ${theme.padding.DEFAULT};

  & svg {
    width: 100%;
    height: 100%;
  }
`;

const LikesCount = styled.p`
  color: ${theme.color.GRAY5};
  font-size: 11px;
  font-weight: 400;
`;

const Name = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${theme.color.BLACK};
  padding-top: 3px;
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 4px;
`;

const priceCSS = css`
  font-size: 13px;
  font-weight: 600;
`;

const Discount = styled.p`
  color: ${theme.color.SIGNATURE};
  ${priceCSS};
`;

const FinalPrice = styled.p`
  color: ${theme.color.BLACK};
  ${priceCSS};
  padding-left: 1rem;
`;

export const ComponentStyle = {
  Component,
  Container,
  Thumb,
  ThumbSizer,
  Text,
  Name,
  Info,
  LikesCount,
  Brand,
  Heart,
  Price,
  Discount,
  FinalPrice,
};
