import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Item = styled.div`
  width: 100%;
`;

export const Thumb = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const FlexStart = styled.div``;

export const Heart = styled.button`
  width: 4rem;
  height: 4rem;

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

export const Detail = styled.div``;

export const Name = styled.h2``;

export const Price = styled.h3``;

export const Discount = styled.h3``;
