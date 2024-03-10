import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  padding: ${theme.padding.BODY};
`;

const TitleWrap = styled.div`
  padding-top: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.color.BLACK};
  padding-right: 1rem;
  line-height: 1;
`;

const Rate = styled.div`
  width: 80px;
`;

const ReviewImgsWrap = styled.div`
  padding: 2rem 0 0;
`;

const ReviewDetail = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid ${theme.color.GRAY1};

  &:last-child {
    border-bottom: none;
  }
`;

const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const FlexWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const ReviewDetailRate = styled.div`
  width: 60px;
  margin-right: 10px;
`;

const Writer = styled.p`
  font-size: 12px;
  line-height: 1;
  color: ${theme.color.GRAY5};
`;

const Size = styled.p`
  font-size: 12px;
  line-height: 1.4;
  color: ${theme.color.GRAY7};
  padding-top: 1rem;
`;

const DetailImgThumb = styled.div`
  width: 50px;

  & img {
    width: 100%;
  }
`;

const Text = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.color.BLACK};
  padding-top: 2rem;
  width: 100%;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const ShowAllButton = styled.div`
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
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const ComponentStyle = {
  Component,
  TitleWrap,
  Title,
  ReviewImgsWrap,
  Rate,
  ReviewDetail,
  FlexSpaceBetween,
  FlexWrap,
  ReviewDetailRate,
  Writer,
  Size,
  DetailImgThumb,
  Text,
  ShowAllButton,
  Icon,
};
