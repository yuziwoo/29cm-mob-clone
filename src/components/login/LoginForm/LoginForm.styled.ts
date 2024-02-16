import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

const InputStyle = css`
  position: relative;
  background: ${theme.color.WHITE};
  transition: padding 0.2s;

  & input {
    position: relative;
    width: 100%;
    padding: 20px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 10px;
    transition: border 0.3s;
    color: ${theme.color.BLACK};
  }

  & label {
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
  }

  & .message {
    position: absolute;
    left: 20px;
    top: 68px;
    font-size: 12px;
    color: ${theme.color.INPUT_INVALID};
  }
`;

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

export const Id = styled.div<{ $isValid: boolean | null; $smallLabel: boolean }>`
  ${InputStyle}
  padding-bottom: ${({ $isValid }) => ($isValid === false ? 40 : 20)}px;

  & input {
    border: 1px solid ${({ $isValid }) => getInputColor($isValid)};
  }

  & label {
    transform: ${({ $smallLabel }) =>
      $smallLabel ? 'translateY(-29px) scale(0.7)' : 'translateY(0) scale(1)'};
    color: ${({ $isValid }) => getInputColor($isValid)};
  }
`;

export const Password = styled.div<{
  $isValid: boolean | null;
  $smallLabel: boolean;
  $security: boolean;
}>`
  ${InputStyle}
  padding-bottom: 40px;

  & input {
    border: 1px solid ${({ $isValid }) => getInputColor($isValid)};
  }

  & label {
    transform: ${({ $smallLabel }) =>
      $smallLabel ? 'translateY(-29px) scale(0.7)' : 'translateY(0) scale(1)'};
    color: ${({ $isValid }) => getInputColor($isValid)};
  }
`;

export const PasswordSecurity = styled.button`
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

export const Submit = styled.button`
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
