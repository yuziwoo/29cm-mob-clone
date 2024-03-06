import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Page = styled.section``;

const Loading = styled.div`
  margin: 6rem auto;
  width: 60px;
`;

const NoBrandResult = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.color.BLACK};
  text-align: center;
  padding: 18rem ${theme.padding.DEFAULT};
  width: 100%;
`;

const BackHome = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.color.GRAY7};
  text-decoration: underline;
  padding-top: 1rem;
`;

const Main = styled.div`
  padding: 4.8rem 3.2rem;
  background-size: cover;
  background-position: top center;
  min-height: 30rem;
  position: relative;
`;

const Shadow = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: ${theme.color.BLACK};
  opacity: 0.3;
`;

const NameEn = styled.h2`
  color: ${theme.color.WHITE};
  font-size: 16px;
  font-weight: 600;
  position: relative;
  z-index: 1;
`;

const NameKo = styled.h1`
  color: ${theme.color.WHITE};
  font-size: 32px;
  font-weight: 700;
  position: relative;
  z-index: 1;
`;

const Intro = styled.p`
  color: ${theme.color.WHITE};
  font-size: 14px;
  font-weight: 400;
  padding-top: 1.4rem;
  position: relative;
  z-index: 1;
`;

const Showcase = styled.div`
  padding: 0 ${theme.padding.DEFAULT};
`;

const Title = styled.h2`
  color: ${theme.color.BLACK};
  font-size: 18px;
  font-weight: 700;
  padding: 4rem ${theme.padding.DEFAULT} 0;
`;

export const PageStyle = {
  Page,
  Loading,
  NoBrandResult,
  BackHome,
  Main,
  Shadow,
  NameEn,
  NameKo,
  Intro,
  Showcase,
  Title,
};
