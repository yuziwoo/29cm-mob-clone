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
