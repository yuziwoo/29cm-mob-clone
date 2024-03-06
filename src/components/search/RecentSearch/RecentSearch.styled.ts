import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  padding-top: 1rem;
  border-bottom: 1px solid ${theme.color.GRAY1};
`;

const TitleWrap = styled.div`
  padding: ${theme.padding.BODY};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.color.BLACK};
`;

const DeleteAll = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.color.GRAY5};
`;

const Keywords = styled.div`
  padding: 2rem 0 3rem;
  overflow: auto;
`;

const KeywordsWrap = styled.div`
  padding: ${theme.padding.BODY};
`;

const Keyword = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  margin: 0 10px 10px 0;
  border: 1px solid ${theme.color.GRAY2};
  border-radius: 30px;
`;

const KeywordText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${theme.color.BLACK};
`;

const DeleteIcon = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  position: relative;

  &::before,
  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 10px;
    height: 1px;
    background: ${theme.color.GRAY5};
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const ComponentStyle = {
  Component,
  TitleWrap,
  Title,
  DeleteAll,
  Keywords,
  KeywordsWrap,
  Keyword,
  KeywordText,
  DeleteIcon,
};
