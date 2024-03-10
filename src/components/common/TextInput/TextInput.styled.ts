import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const getInputColor = (isValid: boolean | null) => {
  switch (isValid) {
    case true:
      return theme.color.INPUT_VALID;
    case false:
      return theme.color.INPUT_INVALID;
    default:
      return theme.color.INPUT_GRAY;
  }
};

const Component = styled.div`
  width: 100%;
  position: relative;
  background: ${theme.color.WHITE};
  transition: padding 0.2s;
`;

const Label = styled.label<{ $isValid: boolean | null; $smallLabel: boolean }>`
  font-size: 16px;
  font-weight: 500;
  background: ${theme.color.WHITE};
  padding: 0 10px;
  position: absolute;
  left: 10px;
  top: 21px;
  transition: transform 0.3s, opacity 0.3s;
  transform-origin: top left;
  z-index: 1;
  transform: ${({ $smallLabel }) =>
    $smallLabel ? 'translateY(-29px) scale(0.7)' : 'translateY(0) scale(1)'};
  color: ${({ $isValid }) => getInputColor($isValid)};
`;

const Input = styled.input<{ $isValid: boolean | null }>`
  position: relative;
  width: 100%;
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  transition: border 0.3s;
  color: ${theme.color.BLACK};
  border: 1px solid ${({ $isValid }) => getInputColor($isValid)};
`;

const Message = styled.p`
  position: absolute;
  left: 20px;
  top: 68px;
  font-size: 12px;
  color: ${theme.color.INPUT_INVALID};
`;

const PasswordSecurity = styled.div`
  position: absolute;
  right: 20px;
  top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  & svg {
    width: 70%;
    height: 70%;
  }
`;

export const ComponentStyle = {
  Component,
  Label,
  Input,
  Message,
  PasswordSecurity,
};
