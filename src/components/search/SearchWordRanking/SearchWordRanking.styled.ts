import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  padding-top: 2rem;
`;

const TitleWrap = styled.div`
  padding: ${theme.padding.BODY};
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.color.BLACK};
`;

const UpdateTime = styled.p`
  margin-left: 10px;
  font-size: 13px;
  font-weight: 500;
  color: ${theme.color.GRAY5};
`;

const Ul = styled.ul`
  padding: 10px ${theme.padding.DEFAULT} 0;
`;

const List = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 0;
  // border-bottom: 1px solid ${theme.color.GRAY1};
`;

const keywordText = css`
  font-size: 15px;
  font-weight: 500;
`;

const Rank = styled.p<{ $color?: string }>`
  ${keywordText};
  text-align: left;
  width: 32px;
  color: ${({ $color }) => ($color ? $color : theme.color.BLACK)};
`;

const Keyword = styled.p`
  ${keywordText};
  color: ${theme.color.BLACK};
`;

export const ComponentStyle = {
  Component,
  TitleWrap,
  Title,
  UpdateTime,
  Ul,
  List,
  Rank,
  Keyword,
};
