import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const SubmitButton = styled.button`
  padding: 20px 50px;
  background: ${theme.color.BLACK};
  border-radius: 32px;

  & p {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: ${theme.color.WHITE};
  }
`;

export const ComponentStyle = {
  Component,
  SubmitButton,
};
