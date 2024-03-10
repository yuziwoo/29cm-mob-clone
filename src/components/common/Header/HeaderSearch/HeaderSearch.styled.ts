import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

const Component = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  position: relative;
  background: ${theme.color.GRAY1};
  padding: 6px 12px 6px 20px;
  border-radius: 20px;
  margin-left: 1rem;
`;

const Input = styled.input`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.color.BLACK};
`;

const ButtonWrap = styled.div``;

const DeleteButton = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  min-width: 16px;
  min-height: 16px;
  border-radius: 50%;
  position: relative;
  background: ${theme.color.GRAY5};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;

  &::before,
  &::after {
    position: absolute;
    content: '';
    background: ${theme.color.WHITE};
    width: 8px;
    height: 2px;
    display: block;
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.8rem;
  height: 2.8rem;
  min-width: 23px;
  min-height: 23px;

  & svg {
    width: 80%;
    height: 80%;
  }
`;

export const ComponentStyle = {
  Component,
  Input,
  ButtonWrap,
  DeleteButton,
  SearchButton,
};
