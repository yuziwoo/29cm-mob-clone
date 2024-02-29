import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

const Component = styled.div`
  display: flex;
  justify-content: space-between;
  alidng-items: center;
  padding: 6px 0;
`;

const HiddenCheckbox = styled.input`
  visibility: hidden;
  opacity: 0;
  width: 0px;
  height: 0px;
  overflow: hidden;
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;

  & svg {
    width: 18px;
    margin-right: 10px;
  }
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.color.BLACK};
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.color.BLACK};
`;

export const ComponentStyle = {
  Component,
  HiddenCheckbox,
  Label,
  Checkbox,
  Text,
  Title,
};
