import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Page = styled.div`
  padding-bottom: 180px;
`;

export const HR = styled.div`
  border-bottom: 1px solid ${theme.color.GRAY1};
  padding-top: 6rem;
  width: calc(100% - 32px);
  margin: auto;
  height: 1px;
`;
