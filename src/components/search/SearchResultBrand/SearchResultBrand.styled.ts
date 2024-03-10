import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  padding: ${theme.padding.DEFAULT};
`;

const Brand = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
`;

const Thumb = styled.div`
  width: 40px;
  height: 40px;
  background-size: cover;
  background-position: center center;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  padding-left: 12px;
`;

const NameKo = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.color.BLACK};
  line-height: 1;
`;

const NameEn = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.color.GRAY5};
  line-height: 1;
  padding-top: 8px;
`;
const Arrow = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  min-width: 20px;
  min-height: 20px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

const Showcase = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

export const ComponentStyle = {
  Component,
  Brand,
  Info,
  Thumb,
  Name,
  NameKo,
  NameEn,
  Arrow,
  Showcase,
};
