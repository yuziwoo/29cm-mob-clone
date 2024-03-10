import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  padding-top: 3rem;
`;

const Thumb = styled.div`
  overflow: hidden;
  width: 100%;
  background-color: ${theme.color.GRAY1};
  background-size: cover;
  background-position: center center;
  position: relative;
`;

const ThumbSizer = styled.div`
  width: 100%;
  padding-bottom: 100%;
`;

const RankBox = styled.div`
  width: 28px;
  height: 28px;
  background: ${theme.color.GRAY15};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const Rank = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.color.WHITE};
  text-align: center;
`;

const Info = styled.div`
  padding: 10px 1rem 0;
`;

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Brand = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.color.BLACK};
  user-select: none;
  cursor: pointer;
`;

const Heart = styled.div`
  width: 2.8rem;
  height: 2.8rem;

  min-width: 20px;
  min-height: 20px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

const InfoBody = styled.div`
  cursor: pointer;
  margin-top: 4px;
  user-select: none;
`;

const ProductName = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${theme.color.BLACK};
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 6px;
`;

const priceCSS = css`
  font-size: 14px;
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

const InfoFooter = styled.div`
  cursor: pointer;
  padding-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
`;

const infoFooterWrap = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & svg {
    max-width: 12px;
    max-height: 12px;
  }
`;

const LikeInfo = styled.div`
  ${infoFooterWrap}
`;

const infoFooterText = css`
  font-size: 12px;
  font-weight: 400;
  color: ${theme.color.GRAY5};
`;

const LikeInfoText = styled.p`
  ${infoFooterText}
`;

const ReviewInfo = styled.div`
  ${infoFooterWrap};
  padding-left: 1rem;
`;

const ReviewInfoText = styled.p`
  ${infoFooterText}
`;

export const ComponentStyle = {
  Component,
  Thumb,
  ThumbSizer,
  Rank,
  RankBox,
  Info,
  InfoHeader,
  Brand,
  Heart,
  InfoBody,
  ProductName,
  Price,
  Discount,
  FinalPrice,
  InfoFooter,
  LikeInfo,
  LikeInfoText,
  ReviewInfo,
  ReviewInfoText,
};
