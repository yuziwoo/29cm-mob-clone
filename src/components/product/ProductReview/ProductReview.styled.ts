import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const ReviewComponent = styled.div`
  padding: ${theme.padding.BODY};
`;

export const TitleWrap = styled.div`
  padding-top: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.color.BLACK};
  padding-right: 1rem;
  line-height: 1;
`;

export const Rate = styled.div`
  width: 80px;
`;

export const ReviewImgsWrap = styled.div`
  padding: 2rem 0 0;
`;

export const ReviewDetail = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid ${theme.color.GRAY1};

  &:last-child {
    border-bottom: none;
  }
`;

export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const ReviewDetailRate = styled.div`
  width: 60px;
  margin-right: 10px;
`;

export const Writer = styled.p`
  font-size: 12px;
  line-height: 1;
  color: ${theme.color.GRAY5};
`;

export const Size = styled.p`
  font-size: 12px;
  line-height: 1.4;
  color: ${theme.color.GRAY7};
  padding-top: 1rem;
`;

export const DetailImgThumb = styled.div`
  width: 50px;

  & img {
    width: 100%;
  }
`;

export const Text = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.color.BLACK};
  padding-top: 2rem;
`;

export const ShowAllButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2.5rem 16px;
  border: 1px solid ${theme.color.GRAY3};

  & p {
    font-size: 16px;
    font-weight: 700;
    color: ${theme.color.BLACK};
  }

  & div {
    width: 24px;
    height: 24px;
  }

  & div svg {
    width: 100%;
    height: 100%;
  }
`;
