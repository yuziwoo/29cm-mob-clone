import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Item = styled.div`
  width: 100%;
`;

export const Thumb = styled.div`
  overflow: hidden;
  width: 100%;

  & img {
    width: 100%;
  }
`;

export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const FlexStart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Heart = styled.button`
  width: 3.8rem;
  height: 3.8rem;

  & div {
    padding: 0.8rem 0 0;
    width: 100%;
    height: 100%;
  }
`;

export const Brand = styled.h4`
  color: ${theme.color.GRAY7};
  font-size: 11px;
  font-weight: 600;
`;

export const Detail = styled.div`
  padding-top: 0.5rem;
`;

export const Name = styled.h2`
  font-size: 13px;
  font-weight: 500;
  color: ${theme.color.BLACK};
  padding-bottom: 0.5rem;
`;

export const Discount = styled.h3`
  font-size: 13px;
  font-weight: 700;
  color: ${theme.color.SIGNATURE};
  margin-right: 10px;
`;

export const Price = styled.h3`
  font-size: 13px;
  font-weight: 700;
  color: ${theme.color.BLACK};
`;
