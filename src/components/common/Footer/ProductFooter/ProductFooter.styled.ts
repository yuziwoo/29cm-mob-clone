import styled, { css } from 'styled-components';
import { theme } from '../../../../styles/theme';

const Component = styled.div`
  width: 100%;
  padding: 3rem 16px;
  background: ${theme.color.BLACK};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const iconCSS = css`
  width: 4.2rem;
  height: 4.2rem;
  min-width: 24px;
  min-height: 24px;
  padding: 0.4rem;
  margin: 0 1.5rem;
  cursor: pointer;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

const LikeButton = styled.div`
  ${iconCSS}
`;

const ShareButton = styled.div`
  ${iconCSS}
`;

const TextCSS = css`
  line-height: 1;
  font-size: 24px;
  font-weight: 700;
  padding: 0 3rem;
  user-select: none;

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

const CartButton = styled.h1`
  ${TextCSS}
  color: ${theme.color.WHITE};
  border-right: 1px solid ${theme.color.GRAY7};
`;

const BuyButton = styled.h1`
  ${TextCSS}
  color: ${theme.color.SIGNATURE};
`;

export const ComponentStyle = {
  Component,
  FlexSpaceBetween,
  LikeButton,
  ShareButton,
  CartButton,
  BuyButton,
};