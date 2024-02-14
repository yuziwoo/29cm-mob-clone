import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

export const Header = styled.header<{ $location: string }>`
  width: 100%;
  max-width: ${theme.size.MAX_WIDTH};
  position: fixed;
  z-index: ${theme.zIndex.HEADER};
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  overflow: hidden;
  padding: ${theme.padding.BODY};
  background: ${theme.color.WHITE};
  backdrop-filter: blur(20px);

  ${({ $location }) => {
    if ($location === '') {
      return css`
        background: transparent;
      `;
    }
    if ($location === 'login') {
      return css`
        & svg path {
          fill: ${theme.color.BLACK};
        }
        & .main-header .icons {
          display: none;
        }
        & .category {
          display: none;
        }
      `;
    }
  }}

  & section {
    position: relative;
  }
`;

export const RelatedHeaderPosition = styled.div<{ $height: number | null }>`
  height: ${({ $height }) => ($height === null ? '100vh' : `${$height}px`)};
`;

export const MainHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
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

export const Category = styled.section`
  padding: 1.2rem 0 2.4rem;
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
