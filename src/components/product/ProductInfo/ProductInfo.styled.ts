import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const SectionInfo = styled.div`
  padding: ${theme.padding.BODY};
`;

export const BrandAndLikesWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 20px;
`;

export const Brand = styled.div`
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

export const Like = styled.div`
  width: 3.2rem;
  height: 3.2rem;
`;

export const ProductName = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.color.BLACK};
  padding: 14px 0 18px;
`;

export const Review = styled.div`
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

export const Star = styled.div`
  width: 60px;
  margin-right: 8px;
`;

export const Price = styled.div`
  padding: 30px 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const OriginalPrice = styled.h3`
  color: ${theme.color.GRAY4};
  font-weight: 500;
  font-size: 16px;
`;

export const FinalPrice = styled.div`
  padding: 4px 0 8px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const Discount = styled.h1`
  color: ${theme.color.SIGNATURE};
  font-weight: 700;
  margin-right: 2rem;
  font-size: 22px;
`;

export const PriceAfterDiscount = styled.h1`
  color: ${theme.color.BLACK};
  font-weight: 700;
  font-size: 22px;
`;

export const PriceUnit = styled.h3`
  color: ${theme.color.BLACK};
  font-weight: 700;
  font-size: 16px;
`;

export const AccrualPoint = styled.h4`
  color: ${theme.color.GRAY7};
  font-weight: 500;
  font-size: 14px;
`;

export const Coupon = styled.div`
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

export const HR = styled.div`
  border-bottom: 1px solid ${theme.color.GRAY1};
  width: 100%;
  height: 1px;
`;

export const DetailContent = styled.div`
padding: 3rem 0;
`;

export const DetailContentRow = styled.div`
  padding-bottom: 10px;
  display: flex;
  align-items: flex-start;

  &:last-child {
    padding-bottom: 0;
  }
`;

export const DetailContentTitle = styled.h4`
  width: 88px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: ${theme.color.GRAY5};
`;

export const DetailContentDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: ${theme.color.BLACK};
`;
