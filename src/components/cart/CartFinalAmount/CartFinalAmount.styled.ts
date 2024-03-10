import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 2px solid ${theme.color.BLACK};
`;

const Ul = styled.ul``;

const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.5rem 0;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.color.GRAY5};
`;

const AmountWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Amount = styled.h1<{ $color?: string }>`
  font-size: 20px;
  font-weight: 700;
  color: ${({ $color }) => ($color ? $color : theme.color.BLACK)};
`;

const Unit = styled.h2<{ $color?: string }>`
  text-indent: 0.2rem;
  font-size: 14px;
  font-weight: 500;
  color: ${({ $color }) => ($color ? $color : theme.color.BLACK)};
`;

export const ComponentStyle = {
  Component,
  Ul,
  List,
  Title,
  AmountWrap,
  Amount,
  Unit,
};
