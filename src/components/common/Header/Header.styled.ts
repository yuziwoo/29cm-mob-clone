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
  padding: 12px 0;
`;

export const Logo = styled.div`
  height: 1.9rem;
  min-height: 17px;

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
  display: flex;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.8rem;
    height: 2.8rem;
    min-width: 23px;
    min-height: 23px;
    margin-right: 2rem;
  }

  & button:last-child {
    margin-right: 0;
  }

  & button svg {
    width: 80%;
    height: 80%;
  }
`;

export const Category = styled.section`
  padding: 1.5rem 0 3rem;
`;

export const CategoryWrap = styled.nav`
  & a {
    display: inline-block;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 5px 2rem;
    margin: 0 5px;
    border-radius: 2rem;
    transition: border ${theme.transition.SPEED_DEFAULT};
  }

  & a:first-child {
    margin-left: 0;
  }

  & a:last-child {
    margin-right: 0;
  }

  & .active {
    border: 1px solid rgba(255, 255, 255, 1);
  }

  & a p {
    font-size: 1.8rem;
    color: white;
    transition: opacity ${theme.transition.SPEED_DEFAULT};
    opacity: 0.7;
  }

  & .active p {
    opacity: 1;
  }
`;
