import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  padding-top: 6rem;

  &:first-child {
    padding-top: 0;
  }
`;

const Header = styled.div`
  padding-top: 2rem;
  border-top: 1px solid ${theme.color.GRAY1};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Checkbox = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;

  min-width: 20px;
  min-height: 20px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

const DeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 1rem;
  border: 1px solid ${theme.color.GRAY3};

  & p {
    font-size: 13px;
    font-weight: 500;
    color: ${theme.color.BLACK};
    user-select: none;
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 1rem;
`;

const Thumb = styled.div`
  width: 10rem;
  height: 10rem;
  min-width: 80px;
  min-height: 80px;
  background-size: cover;
  background-position: center center;
`;

const Info = styled.div`
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Brand = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.color.BLACK};
  text-align: left;
`;

const Name = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.color.BLACK};
  text-align: left;
  padding: 0.5rem 0;
`;

const Options = styled.h4`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & span {
    font-size: 13px;
    font-weight: 500;
    color: ${theme.color.GRAY7};
    display: inline-block;
    padding-right: 1rem;
  }
`;

const SinglePrice = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0.5rem;
  flex-wrap: wrap;
`;

const OriginalSinglePrice = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.color.GRAY7};
  padding-right: 1rem;
  line-height: 1.4;
`;

const SinglePriceDiscount = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.color.SIGNATURE};
  padding-right: 1rem;
  line-height: 1.4;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 3rem;
`;

const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountValue = styled.div`
  padding: 1rem 0;
  width: 4.5rem;
  height: 4rem;
  border-top: 1px solid ${theme.color.GRAY3};
  border-bottom: 1px solid ${theme.color.GRAY3};
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    color: ${theme.color.BLACK};
    user-select: none;
  }
`;

const InputButtonCSS = css`
  width: 4rem;
  height: 4rem;
  position: relative;
  border: 1px solid ${theme.color.GRAY3};
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 2px;
    background: ${theme.color.BLACK};
    display: block;
  }
`;

const IncreaseButton = styled.div`
  ${InputButtonCSS}

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 2px;
    background: ${theme.color.BLACK};
    display: block;
    transform: rotate(90deg);
  }
`;

const DecreaseButton = styled.div`
  ${InputButtonCSS}
`;

const FinalPriceWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: fit-content;
`;

const FinalPrice = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.color.BLACK};
  line-height: 1;
`;

const PriceUnit = styled.h2`
  font-size: 16px;
  text-indent: 0.2rem;
  font-weight: 700;
  color: ${theme.color.BLACK};
  line-height: 1;
`;

export const ComponentStyle = {
  Component,
  Header,
  Checkbox,
  DeleteButton,
  Body,
  Thumb,
  Info,
  Brand,
  Name,
  Options,
  SinglePrice,
  OriginalSinglePrice,
  SinglePriceDiscount,
  Footer,
  Count,
  CountValue,
  IncreaseButton,
  DecreaseButton,
  FinalPriceWrap,
  FinalPrice,
  PriceUnit,
};
