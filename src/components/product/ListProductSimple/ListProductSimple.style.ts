import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  width: 100%;
`;

const Thumb = styled.div`
  overflow: hidden;
  width: 100%;
  background-color: ${theme.color.GRAY1};
  background-size: cover;
  background-position: center center;
`;

const ThumbSizer = styled.div`
  width: 100%;
  padding-bottom: 100%;
`;

const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const FlexStart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Heart = styled.button`
  width: 3.8rem;
  height: 3.8rem;

  & div {
    padding: 0.8rem 0 0;
    width: 100%;
    height: 100%;
  }
`;

const Brand = styled.h4`
  color: ${theme.color.GRAY7};
  font-size: 11px;
  font-weight: 600;
`;

const Detail = styled.div`
  padding-top: 0.5rem;
`;

const Name = styled.h2`
  font-size: 13px;
  font-weight: 500;
  color: ${theme.color.BLACK};
  padding-bottom: 0.5rem;
`;

const Discount = styled.h3`
  font-size: 13px;
  font-weight: 700;
  color: ${theme.color.SIGNATURE};
  margin-right: 10px;
`;

const Price = styled.h3`
  font-size: 13px;
  font-weight: 700;
  color: ${theme.color.BLACK};
`;

export const ComponentStyle = {
  Component,
  Thumb,
  ThumbSizer,
  FlexSpaceBetween,
  FlexStart,
  Heart,
  Brand,
  Detail,
  Name,
  Discount,
  Price,
};
