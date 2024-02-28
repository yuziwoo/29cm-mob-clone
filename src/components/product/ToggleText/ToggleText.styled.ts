import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const ToggleComponent = styled.div`
  padding: 3rem 0;
  border-bottom: 1px solid ${theme.color.GRAY1};
`;

export const ToggleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.color.BLACK};
`;

export const Arrow = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  transition: transform 0.2s;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const ToggleData = styled.div`
  padding-top: 3rem;
`;
