import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const MainFooterBlock = styled.div`
  padding: 0 0 10px;
  display: flex;
  justify-content: space-between;
`;

export const button = styled.button<{ $active?: boolean }>`
  width: 20%;

  & .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 10px;
  }
  & .wrap svg {
    width: 24px;
    height: 24px;
    transition: all 0.2s;
  }
  & .wrap p {
    font-size: 10px;
    text-transform: uppercase;
    padding-top: 8px;
    color: ${({ $active = false }) => ($active ? theme.color.ACTIVE : theme.color.FOOTER_INACTIVE)};
    transition: color 0.2s;
  }
`;
