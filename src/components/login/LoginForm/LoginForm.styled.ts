import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const SubmitButton = styled.button`
  padding: 20px;
  background: ${theme.color.BLACK};
  border-radius: 10px;
  width: 100%;

  & p {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: ${theme.color.WHITE};
  }
`;

export const ComponentStyle = {
  SubmitButton
};