import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 80px);
  border-top: 1px solid ${theme.color.GRAY1};
`;

const Groups = styled.ul`
  width: 120px;
  height: 100%;
  background: ${theme.color.GRAY1};
  padding-bottom: 150px;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Group = styled.li<{ $isActive: boolean }>`
  padding: 20px ${theme.padding.DEFAULT};
  background: ${({ $isActive }) => ($isActive ? theme.color.WHITE : 'transparent')};
  cursor: pointer;
`;

const font = css`
  font-size: 15px;
  font-weight: 600;
  color: ${theme.color.BLACK};

  @media screen and (max-width: 400px) {
    font-size: 13px;
  }
`;

const GroupText = styled.p`
  ${font}
`;

const CategoryWrap = styled.div`
  width: calc(100% - 120px);
  display: flex;
  flex-direction: column;
`;

const CategoryLarges = styled.ul`
  padding: 0 ${theme.padding.DEFAULT};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  min-height: 63px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryLarge = styled.li<{ $isActive: boolean }>`
  cursor: pointer;
  border: 1px solid ${theme.color.BLACK};
  margin: 16px 0;
  padding: 4px 14px;
  border-radius: 28px;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.35)};
  transition: opacity 0.15s;

  @media screen and (max-width: 400px) {
    padding: 3px 12px;
  }
`;

const CategoryLargeText = styled.p`
  ${font};
  text-transform: uppercase;
`;

const CategoryMediums = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0 ${theme.padding.DEFAULT} 150px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryMedium = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    padding: 16px 0;
  }
`;

const CategoryMediumText = styled.p`
  ${font};
  text-transform: uppercase;
`;

const Arrow = styled.div`
  width: 20px;
  height: 20px;
`;

export const ComponentStyle = {
  Component,
  Groups,
  Group,
  GroupText,
  CategoryWrap,
  CategoryLarges,
  CategoryLarge,
  CategoryLargeText,
  CategoryMediums,
  CategoryMedium,
  CategoryMediumText,
  Arrow,
};
