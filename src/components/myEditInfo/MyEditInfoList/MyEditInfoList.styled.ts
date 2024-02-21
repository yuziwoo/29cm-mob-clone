import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

export const InfoList = styled.ul`
  width: 100%;
  padding: 3rem 0;

  & li {
    padding: 2rem 0;
    border-bottom: 1px solid ${theme.color.GRAY3};
    display: flex;
    align-items: center;
  }

  & li:last-child {
    border-bottom: none;
  }
`;

const infoFont = css`
  font-size: 18px;
  font-weight: 500;
  color: ${theme.color.BLACK};

  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`;

export const Th = styled.p`
  ${infoFont}
  width: 115px;
`;

export const Input = styled.input`
  ${infoFont}
`;

export const Td = styled.p`
  ${infoFont}
`;