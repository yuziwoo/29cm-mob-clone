import styled from 'styled-components';
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

export const ComponentStyle = {
  Component,
  TitleWrap,
  Title,
  UpdateTime,
};
