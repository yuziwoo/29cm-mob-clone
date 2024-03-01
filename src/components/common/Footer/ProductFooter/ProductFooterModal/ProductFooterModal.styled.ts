import styled, { css } from 'styled-components';
import { theme } from '../../../../../styles/theme';

const Component = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  color: ${theme.color.BLACK};
  line-height: 1.4;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: ${theme.color.BLACK};
  line-height: 1.4;
  padding: 0.5rem 0 1rem;
`;

const SelectWrap = styled.div`
  padding: 2rem 0 0;
`;

const CurrentOptions = styled.div`
  padding: 2rem 16px;
  background: ${theme.color.GRAY1};
  border: 1px solid ${theme.color.GRAY3};
  border-top: none;
`;

const CurrentOption = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.color.BLACK};
  line-height: 1.4;
`;

const SelectedOption = styled.div`
  margin-top: 1rem;
  max-height: 50vh;
  overflow-y: auto;
`;

const SelectedOptionTitle = styled.div`
  padding: 1rem 0 0.5rem;
  font-size: 12px;
  font-weight: 700;
  color: ${theme.color.BLACK};
`;

const Price = styled.div`
  margin-top: 2rem;
`;

const OriginalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DiscountPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
`;

const FinalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  border-top: 2px solid ${theme.color.BLACK};
  padding-top: 2rem;
`;

const SmallPriceText = styled.p<{ $color?: string }>`
  color: ${({ $color }) => ($color ? $color : theme.color.BLACK)};
  font-size: 16px;
  font-weight: 700;
`;

const BigPriceText = styled.p<{ $color?: string }>`
  color: ${({ $color }) => ($color ? $color : theme.color.BLACK)};
  font-size: 20px;
  font-weight: 700;
`;

const CouponInfoBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.color.LIGHT_SIGNATURE};
  padding: 0.5rem 1rem;
  margin-left: 1rem;

  & p {
    font-size: 12px;
    font-weight: 600;
    color: ${theme.color.SIGNATURE};
  }
`;

const FlexWrap = styled.div`
  display: flex;
  justify-conetn: space-between;
  align-items: flex-start;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: no-wrap;
  margin-top: 4rem;

  & > button {
    width: 49%;
  }
`;

const buttonCSS = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  & p {
    font-size: 16px;
    font-weight: 700;
  }
`;

const CartButton = styled.div`
  ${buttonCSS}
  border: 1px solid ${theme.color.GRAY3};

  & p {
    color: ${theme.color.BLACK};
  }
`;

const BuyButton = styled.div`
  ${buttonCSS}
  background: ${theme.color.BLACK};

  & p {
    color: ${theme.color.WHITE};
  }
`;

export const ComponentStyle = {
  Component,
  Title,
  Text,
  SelectWrap,
  CurrentOptions,
  CurrentOption,
  SelectedOption,
  SelectedOptionTitle,
  Price,
  OriginalPrice,
  DiscountPrice,
  FinalPrice,
  SmallPriceText,
  BigPriceText,
  CouponInfoBlock,
  FlexWrap,
  Buttons,
  buttonCSS,
  CartButton,
  BuyButton,
};
