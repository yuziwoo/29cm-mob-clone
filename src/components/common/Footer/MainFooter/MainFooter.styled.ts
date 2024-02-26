import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const MainFooterBlock = styled.div`
  padding: 0 0 1rem;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button<{ $active?: boolean }>`
  width: 20%;

  & .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0 1rem;
  }
  & .wrap svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.2s;
  }
  & .wrap p {
    font-size: 10px;
    text-transform: uppercase;
    padding-top: 0.8rem;
    color: ${({ $active = false }) => ($active ? theme.color.ACTIVE : theme.color.FOOTER_INACTIVE)};
    transition: color 0.2s;
  }
`;
