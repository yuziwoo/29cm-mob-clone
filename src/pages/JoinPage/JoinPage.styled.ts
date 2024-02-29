import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Page = styled.section`
  padding: ${theme.padding.BODY_WITH_BOTTOM_MARGIN};
`;

const Logo = styled.div`
  width: 182.5px;
  height: 45px;
  margin-top: 20px;
  display: inline-block;
  cursor: pointer;

  & svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const Intro = styled.div`
  padding: 30px 0 40px;

  & h1 {
    font-size: 16px;
    font-weight: 500;
    color: ${theme.color.BLACK};
  }
`;

export const PageStyle = {
  Page,
  Logo,
  Intro
};