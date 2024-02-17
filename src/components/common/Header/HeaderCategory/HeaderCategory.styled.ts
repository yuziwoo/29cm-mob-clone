import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const Category = styled.section`
  padding: 1.2rem 0 2.4rem;
`;

export const CategoryWrap = styled.nav`
  & .list {
    display: inline-block;
    margin: 0 5px;
    border-radius: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: border ${theme.transition.SPEED_DEFAULT};
    overflow: hidden;
  }

  & .list:first-child {
    margin-left: 0;
  }

  & .active {
    border: 1px solid rgba(255, 255, 255, 1);
  }

  & .list button {
    display: block;
    width: 100%;
    padding: 5px 2rem;
  }

  & .list button:first-child {
    margin-left: 0;
  }

  & .list button:last-child {
    margin-right: 0;
  }

  & .list button p {
    font-size: 1.8rem;
    color: white;
    transition: opacity ${theme.transition.SPEED_DEFAULT};
    opacity: 0.7;
  }

  & .list .active p {
    opacity: 1;
  }
`;
