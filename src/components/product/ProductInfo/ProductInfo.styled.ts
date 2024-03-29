import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  padding: ${theme.padding.BODY};
`;

const BrandAndLikes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 20px;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & p {
    color: ${theme.color.GRAY7};
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
  }

  & svg {
    width: 17px;
    height: 17px;
  }
`;

const Like = styled.div`
  width: 3.2rem;
  height: 3.2rem;
`;

const ProductName = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.color.BLACK};
  padding: 14px 0 18px;
`;

const Review = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  cursor: pointer;

  & p {
    text-decoration: underline;
    font-size: 12px;
    font-weight: 500;
    color: ${theme.color.GRAY7};
    line-height: 1;
  }
`;

const Star = styled.div`
  width: 60px;
  margin-right: 8px;
`;

const Price = styled.div`
  padding: 30px 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const OriginalPrice = styled.h3`
  color: ${theme.color.GRAY4};
  font-weight: 500;
  font-size: 16px;
`;

const FinalPrice = styled.div`
  padding: 4px 0 8px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Discount = styled.h1`
  color: ${theme.color.SIGNATURE};
  font-weight: 700;
  font-size: 22px;
`;

const PriceAfterDiscount = styled.h1`
  margin-left: 1rem;
  color: ${theme.color.BLACK};
  font-weight: 700;
  font-size: 22px;
`;

const PriceUnit = styled.h3`
  color: ${theme.color.BLACK};
  font-weight: 700;
  font-size: 16px;
  text-indent: 0.3rem;
`;

const AccrualPoint = styled.h4`
  color: ${theme.color.GRAY7};
  font-weight: 500;
  font-size: 14px;
`;

const Coupon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.color.BLACK};
  padding: 8px 15px;

  & p {
    color: ${theme.color.WHITE};
    font-weight: 700;
    font-size: 12px;
    margin-right: 10px;
  }

  & svg {
    width: 14px;
    height: 14px;
  }
`;

const HR = styled.div`
  border-bottom: 1px solid ${theme.color.GRAY1};
  width: 100%;
  height: 1px;
`;

const DetailContent = styled.div`
  padding: 3rem 0;
`;

const DetailContentRow = styled.div`
  padding-bottom: 10px;
  display: flex;
  align-items: flex-start;

  &:last-child {
    padding-bottom: 0;
  }
`;

const DetailContentTitle = styled.h4`
  width: 88px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: ${theme.color.GRAY5};
`;

const DetailContentDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: ${theme.color.BLACK};
`;

export const ComponentStyle = {
  Component,
  BrandAndLikes,
  Brand,
  Like,
  ProductName,
  Review,
  Star,
  Price,
  OriginalPrice,
  FinalPrice,
  Discount,
  PriceAfterDiscount,
  PriceUnit,
  AccrualPoint,
  Coupon,
  HR,
  DetailContent,
  DetailContentRow,
  DetailContentTitle,
  DetailContentDescription,
};
