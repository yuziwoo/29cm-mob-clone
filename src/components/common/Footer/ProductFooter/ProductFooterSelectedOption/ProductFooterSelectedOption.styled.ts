import styled, { css } from 'styled-components';
import { theme } from '../../../../../styles/theme';

const Component = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.color.WHITE};
  border-bottom: 1px solid ${theme.color.GRAY1};

  &:last-child {
    border-bottom: none;
  }
`;

const Title = styled.p`
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  color: ${theme.color.BLACK};
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Input = styled.input`
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  color: ${theme.color.BLACK};
  padding: 1rem 0;
  width: 45px;
  height: 40px;
  border-top: 1px solid ${theme.color.GRAY3};
  border-bottom: 1px solid ${theme.color.GRAY3};
`;

const InputButtonCSS = css`
  width: 40px;
  height: 40px;
  position: relative;
  border: 1px solid ${theme.color.GRAY3};
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 2px;
    background: ${theme.color.BLACK};
    display: block;
  }
`;

const IncreaseButton = styled.div`
  ${InputButtonCSS}

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 2px;
    background: ${theme.color.BLACK};
    display: block;
    transform: rotate(90deg);
  }
`;

const DecreaseButton = styled.div`
  ${InputButtonCSS}
`;

const RemoveButton = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background: ${theme.color.GRAY7};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    position: absolute;
    width: 1.1rem;
    height: 1.5px;
    content: '';
    background: ${theme.color.WHITE};
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const ComponentStyle = {
  Component,
  Title,
  ButtonWrap,
  InputWrap,
  Input,
  IncreaseButton,
  DecreaseButton,
  RemoveButton,
};
