import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Page = styled.section`
  padding-bottom: 150px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  padding: 2rem ${theme.padding.DEFAULT} 0;
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const List = styled.li`
  width: 50%;
  position: relative;
`;

export const PageStyle = {
  Page,
  Title,
  Ul,
  List,
};
