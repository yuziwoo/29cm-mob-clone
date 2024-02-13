import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

export const Header = styled.header<{ $location: string; $useBlur: boolean }>`
  width: 100%;
  max-width: ${theme.size.MAX_WIDTH};
  position: fixed;
  z-index: ${theme.zIndex.HEADER};
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  overflow: hidden;
  padding: ${theme.padding.BODY};

  ${({ $useBlur }) =>
    $useBlur &&
    css`
      backdrop-filter: blur(20px);
    `}

  ${({ $location }) => {
    if ($location === '') {
      return css`
        // height: 100px;
      `;
    }
  }}

  & section {
    position: relative;
  }
  background: black;
`;

export const Shadow = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #6c6c6c;
`;

export const MainHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

export const Logo = styled.div`
  height: 20px;

  & a {
    display: block;
    height: 100%;
  }

  & a svg {
    display: block;
    height: 100%;
  }
`;

export const Icons = styled.div`
  height: 30px;
  display: flex;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }

  & button:last-child {
    margin-right: 0;
  }

  & button svg {
    width: 24px;
    height: 24px;
  }
`;
