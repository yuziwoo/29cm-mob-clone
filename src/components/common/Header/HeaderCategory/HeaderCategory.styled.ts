import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

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