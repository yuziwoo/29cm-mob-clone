import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

const Component = styled.div`
  padding: 3rem 0;
`;

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 16px;
  font-weight: 600;
`;

const DescriptionButton = styled.button`
  width: 15px;
  height: 15px;
  margin-left: 5px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

const FinalAmount = styled.div`
  display: flex;
  align-items: center;
`;

const Description = styled.ul`
  & li {
    padding-left: 14px;
    position: relative;
    padding-bottom: 4px;
  }

  & li:last-child {
    padding-bottom: 0;
  }

  & li::before {
    position: absolute;
    left: 0;
    top: 0;
    content: '∙';
    font-size: 14px;
  }

  & li p {
    font-size: 14px;
    line-height: 1.4;
    color: ${theme.color.BLACK};
    font-weight: 500;
  }
`;

const Discount = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.color.GRAY5};
  margin-right: 10px;
  cursor: pointer;
`;

const FinalPrice = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.color.BLACK};
  margin-right: 5px;
  cursor: pointer;
`;

const Arrow = styled.div<{ $isVisible: boolean }>`
  width: 20px;
  height: 20px;
  transition: transform 0.3s ${theme.transition.EASE_OUT};
  transform: rotate(${({ $isVisible }) => ($isVisible ? -180 : 0)}deg);
  cursor: pointer;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

const DetailHeading = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.color.GRAY5};
  padding: 30px 0 10px;
`;

const BrandDiscount = styled.div`
  display: flex;
  justify-content: space-between;
  alidng-items: center;
  padding: 6px 0;

  & h5 {
    font-size: 14px;
    font-weight: 500;
    color: ${theme.color.BLACK};
  }

  & p {
    font-size: 14px;
    font-weight: 600;
    color: ${theme.color.BLACK};
  }
`;

export const ComponentStyle = {
  Component,
  TitleBlock,
  Title,
  Heading,
  DescriptionButton,
  FinalAmount,
  Description,
  Discount,
  FinalPrice,
  Arrow,
  DetailHeading,
  BrandDiscount,
};
